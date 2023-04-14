# Eth.faucet

Blockchain & Web3 is my passion; for me, this is an incredible new thing, which I want to work with, so I decided to create that project to learn more about how to create a simple application that can connect with [Metamask](https://metamask.io/) and provide some functionalities to the end user.

### Application requirements

1. [Metamask](https://metamask.io/download/) - Install it inside your browser
2. [Docker](https://docs.docker.com/get-docker/)

### How do I run it?

It is effortless. You only need to run this command below:

```bash
wget -qO- [https://raw.githubusercontent.com/ronniery/eth.faucet/master/install.sh](https://raw.githubusercontent.com/ronniery/eth.faucet/master/install.sh) | bash
```

After running the previous command, [install Metamask extension](https://metamask.io/download/) on your browser, then go to [Metamask accounts URL](http://localhost:6003/accounts.json) and load some accounts to use inside the web client.

### Useful routes

1. http://localhost:6002 - You will visualize the web client inside that URL.
2. http://localhost:6003/accounts.json - You will find all available Metamask accounts.
