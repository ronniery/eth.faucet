# First stage, build
FROM node:19.7.0-alpine as build-stage0

# Set the workdir
WORKDIR /app

# Install python/pip
ENV PYTHONUNBUFFERED=1
RUN apk update && apk upgrade && apk add --update alpine-sdk && \
    apk add --no-cache curl bash git python3 && \
    ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools && \
    git clone https://github.com/ronniery/eth.faucet.git && \
    cd eth.faucet && \
    npm install -g truffle && \
    npx truffle compile --config truffle-config.js

FROM trufflesuite/ganache:v7.8.0

# Set the workdir
WORKDIR /app

# Update stretch repositories
RUN sed -i s/deb.debian.org/archive.debian.org/g /etc/apt/sources.list
RUN sed -i 's|security.debian.org|archive.debian.org/|g' /etc/apt/sources.list
RUN sed -i '/stretch-updates/d' /etc/apt/sources.list

# Install curl, to let the healthcheck work
RUN apt-get update && \
    apt-get install libcurl4-openssl-dev -y && \
    apt-get install -f curl -y

# Copy the necessary files
COPY --from=build-stage0 /app/eth.faucet/public/contracts ./public/contracts

# Make the built contracts available for the web client inside the /chain volume
COPY --from=build-stage0 /app/eth.faucet/public/contracts ../chain/contracts
COPY --from=build-stage0 /app/eth.faucet/migrations ./migrations
COPY --from=build-stage0 /app/eth.faucet/truffle-config.js /app/eth.faucet/package.json ./

# Write a migration script
RUN echo "echo \"sleep 4 && npm run truffle:publish\"" > publish.sh

# Make it executable
RUN chmod +x publish.sh

# Run the migration script
RUN ./publish.sh