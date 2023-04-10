# First stage, build
FROM --platform=arm64 node:19.7.0-alpine as build-stage0

# Set the workdir
WORKDIR /app

# Install python/pip
ENV PYTHONUNBUFFERED=1
RUN apk update && apk upgrade && apk add --update alpine-sdk && \
    apk add --no-cache bash git openssh make cmake python3 && \
    ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

# Copy the required files to let the vite build it properly
COPY tsconfig.json tsconfig.node.json index.html vite.config.ts package.json ./
COPY public/ ./public/
COPY src/ ./src/

# Install all packages and build the project
RUN yarn install
RUN yarn run vite build

# Start the main image stage
FROM --platform=arm64 node:19.7.0-alpine as main

# Define in the next stage the workdir
WORKDIR /app

# Copy the necessary files
COPY --from=build-stage0 /app/dist ./

# Install serve package
RUN yarn global add serve

# Expose the current port
EXPOSE 6002

# Set entry point
CMD ["serve", "/app/dist/", "-p", "6002"]