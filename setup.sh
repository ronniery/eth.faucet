#!/bin/bash

GREEN="\x1B[32m"

# Working directory
workdir="/tmp/ronniery"

# Try to remove the previous project folder
rm -rf "$workdir" > /dev/null 2>&1

# Lets setup the directory path
mkdir -p "$workdir"

# Clone the project locally
git clone https://github.com/ronniery/eth.faucet.git $workdir

# Go to inside the cloned project
cd "$workdir"

# Make the docker composer build all necessary stuff
docker compose up

# Waiting some seconds before next step
printf "Waiting 5 seconds, before install truffle and start to deploy contracts...\n"
sleep 5

# Install truffle and migrate contracts
npm install truffle
npx truffle migrate

# Cleaning stuff
npm uninstall truffe
rm -rf $workdir

# Print some usefull messages
printf "%b" "\x1B[32m✔ Project cloned\e[0m \n"
printf "%b" "\x1B[32m✔ Docker images created\e[0m \n"
printf "%b" "\x1B[32m✔ Migrated all contracts\e[0m \n\n"
printf "Now you can access those endpoints:\n"
printf "   - http://localhost:6002 / If you want to access the Ethereum faucet application\n"
printf "   - http://localhost:6003 / If you want to access all available accounts with their secret keys\n"