/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useEffect, useState } from "react";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { isEmpty } from "lodash";

import { JSONRPCMethodsRestricted } from "../../constants";
import { ExtendedContract } from "../../types";
import useWeb3 from "../../hooks/useWeb3";

import {
  UserAccount,
  UserControls,
  UserBalance,
  Loading,
  Notification,
} from "../../components";

import "./styles.css";

function App() {
  const { api: web3Api, getContract } = useWeb3();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userAccount, setUserAccount] = useState<string>("");
  const [accountBalance, setAccountBalance] = useState<string>("0");
  const [isGanacheSelected, setIsGanacheSelected] = useState<boolean>(true);
  const [onBalanceChange, setOnBalanceChange] = useState<boolean>(false);
  const [faucetContract, setFaucetContract] = useState<ExtendedContract>(
    {} as ExtendedContract
  );

  const addFunds = async () => {
    const { web3 } = web3Api;

    // If you want to trigger an execution, you must use `.send` method after contract method call
    await faucetContract.methods.addFunds().send({
      from: userAccount,
      value: web3!.utils.toWei(String(1), "ether"),
    });

    setOnBalanceChange(!onBalanceChange);
  };

  const withdrawFunds = useCallback(async () => {
    const { web3 } = web3Api;
    console.log(web3);
    const withdrawAmount = web3!.utils.toWei(String(0.1), "ether");

    await faucetContract.methods.withdraw(withdrawAmount).send({
      from: userAccount,
    });

    setOnBalanceChange(!onBalanceChange);
  }, [web3Api, faucetContract]);

  const connectWallet = async () =>
    await web3Api.provider?.request<string[]>({
      method: JSONRPCMethodsRestricted.ETH_REQUEST_ACCOUNTS,
    });

  const isAccountSelected = () => !isEmpty(userAccount);

  const onAccountChanged = (provider: MetaMaskInpageProvider | null) => {
    if (provider == null) return;

    provider.on("accountsChanged", (...args: unknown[]) => {
      const [[selectedAccount]] = args as string[][];

      setUserAccount(selectedAccount);
    });
  };

  const onNetworkChanged = (provider: MetaMaskInpageProvider | null) => {
    const GANACHE_CHAIN_ID = "0x539";

    if (provider == null) return;

    provider.on("chainChanged", (...args: unknown[]) => {
      const [chainId] = args as string[];

      setIsGanacheSelected(chainId === GANACHE_CHAIN_ID);
      loadBalance();
    });
  };

  const getAccounts = async () => {
    const GANACHE_NETWORK_ID = 1337;

    if (!web3Api.web3) return;

    try {
      const { web3, provider } = web3Api;
      const accounts = await web3.eth.getAccounts();
      const currentChain = await web3.eth.net.getId();

      onAccountChanged(provider);
      onNetworkChanged(provider);
      setUserAccount(accounts.at(0) as string);
      setIsGanacheSelected(currentChain === GANACHE_NETWORK_ID);
    } finally {
      setIsLoading(false);
    }
  };

  const loadBalance = async () => {
    if (!web3Api.web3) return;

    const { eth, utils } = web3Api.web3;

    const _contract = await getContract("Faucet");
    const _balance = await eth.getBalance(_contract.address);

    setFaucetContract(_contract);
    setAccountBalance(utils.fromWei(_balance, "ether"));
  };

  useEffect(() => {
    getAccounts();
  }, [web3Api.web3]);

  useEffect(() => {
    loadBalance();
  }, [web3Api.web3, onBalanceChange]);

  useEffect(() => {
    if (web3Api.provider || web3Api.error) {
      setIsLoading(false);
    }
  }, [web3Api]);

  return (
    <div className="faucet-wrapper">
      <div className="faucet">
        {isLoading ? (
          <Loading />
        ) : !isGanacheSelected ? (
          <div className="container is-fluid">
            <Notification>
              <p className="mb-3">
                If you want to use this application, you first <b>MUST</b> have
                to follow the steps below:
              </p>
              <ol className="ml-4">
                <li className="notification-steps">
                  Install Metamask. You can do this by choosing one of those two
                  links:
                  <ul>
                    <li>
                      Go thought Google&apos;s solution:{" "}
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
                      >
                        {" "}
                        Chrome Web Store/Metamask
                      </a>
                    </li>
                    <li>
                      Or use the Metamask website to find other ways to
                      install it:{" "}
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://metamask.io/download/"
                      >
                        Download Metamask
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="notification-steps">
                  Then you have to setup <b>Ganache</b> Network, you can do it
                  using{" "}
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://coinsbench.com/connect-to-metamask-from-new-or-existing-web-application-with-truffle-and-ganache-f48aa763c0ac"
                  >
                    this guide
                  </a>
                </li>
                <li className="notification-steps">
                  After that make sure you have selected the registered Ganache
                  Network
                </li>
              </ol>
            </Notification>
          </div>
        ) : (
          <>
            <UserAccount
              connectWallet={connectWallet}
              isAccountSelected={isAccountSelected}
              userAccount={userAccount}
              web3Api={web3Api}
            />
            <UserBalance
              accountBalance={accountBalance}
              isAccountSelected={isAccountSelected}
            />
            <UserControls
              isAccountSelected={isAccountSelected}
              addFunds={addFunds}
              withdrawFunds={withdrawFunds}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
