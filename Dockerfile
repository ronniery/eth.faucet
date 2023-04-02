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

# Copy the required files to make let the vite build it properly
COPY tsconfig.json tsconfig.node.json index.html vite.config.ts package.json ./
COPY public/ ./public/
COPY src/ ./src/

# Install all packages and build the project
RUN yarn install
RUN yarn run vite build

# Second stage, serving
FROM --platform=arm64 node:19.7.0-alpine

# Define in the next stage the workdir
WORKDIR /app

# Install python/pip
ENV PYTHONUNBUFFERED=1
RUN apk update && apk upgrade && apk add --update alpine-sdk && \
    apk add --no-cache python3 && \
    ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

# Copy the necessary files
COPY package.json ./
COPY --from=build-stage0 /app/dist ./dist

# Install all required packages
RUN yarn install --production=true
RUN yarn global add serve

# Expose the current port
EXPOSE 6000

# Start the application
CMD ["cd", "./dist", "&&", "serve", ".", "-p", "6000"]