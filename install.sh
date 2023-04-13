#!/bin/bash

# Bash colors
RED="\033[0;31m"
YELLOW="\033[0;33m"

# No color
NO_COLOR="\033[0m"

# Warn user about meta mask
printf "%b" "$RED → You must install Metamask to use that application https://metamask.io/download/$NO_COLOR\n"

# Working directory
workdir="/tmp/ronniery"

# Try to remove the previous project folder
rm -rf "$workdir" > /dev/null 2>&1

# Lets setup the directory path
mkdir -p "$workdir"

# Clonning locally the eth.faucet
printf "%b" "$YELLOW → Clonning eth.faucet project locally...$NO_COLOR\n"

# Clone the project locally
git clone https://github.com/ronniery/eth.faucet.git --quiet $workdir &> /dev/null

# Go to inside the cloned project
cd "$workdir"

# Building images with docker compose
printf "%b" "$YELLOW → Building docker images with compose...$NO_COLOR\n"

# Make the docker compose build all necessary stuff
docker compose up -d

# Waiting some seconds before next step
printf "Waiting 5 seconds, before install truffle and start to deploy contracts...\n"
sleep 5

# Install truffle and migrate contracts
printf "%b" "$YELLOW → Installing truffle on your system...$NO_COLOR\n"

# Disable update notification
npm config set update-notifier false

# Installing npm package, truffle
npm install --silent truffle

# Compiling smartcontracts with truffle
printf "%b" "$YELLOW    - Compiling all contracts!$NO_COLOR\n"
npx truffle compile &> /dev/null

# Deploying compiled contracts within ganache network
printf "%b" "$YELLOW    - Deploying all contracts inside Ganache!$NO_COLOR\n"
npx truffle migrate &> /dev/null

# Cleaning stuff
printf "%b" "$YELLOW → Removing truffle package $NO_COLOR\n"
npm uninstall --silent truffe

# Removing project dir
rm -rf $workdir

# Print some usefull messages
printf "%b" "\x1B[32m✔ Project cloned\e[0m \n"
printf "%b" "\x1B[32m✔ Docker images created\e[0m \n"
printf "%b" "\x1B[32m✔ Migrated all contracts\e[0m \n\n"
printf "Now you can access those endpoints:\n"
printf "   - http://localhost:6002 / If you want to access the Ethereum faucet application\n"
printf "   - http://localhost:6003/accounts.json / If you want to access all available accounts with their secret keys\n"