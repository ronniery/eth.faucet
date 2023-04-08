/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useEffect, useState } from "react";
import { isEmpty, toUpper } from "lodash";
import { JSONRPCMethodsRestricted } from "../../constants";
import useWeb3 from "../../hooks/useWeb3";
import { ExtendedContract } from "../../types";

import "./App.css";
import { MetaMaskInpageProvider } from "@metamask/providers";

function App() {
  const { api: web3Api, getContract } = useWeb3();

  const [userAccount, setUserAccount] = useState<string>("");
  const [accBalance, setAccBalance] = useState<string>("0");
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
    provider!.on("accountsChanged", (...args: unknown[]) => {
      const [[selectedAccount]] = args as string[][];

      setUserAccount(selectedAccount);
    });
  };

  useEffect(() => {
    const getAccounts = async () => {
      if (web3Api.web3 === null) return;

      const { web3, provider } = web3Api;
      const accounts = await web3.eth.getAccounts();

      onAccountChanged(provider);
      setUserAccount(accounts.at(0) as string);
    };

    getAccounts();
  }, [web3Api.web3]);

  useEffect(() => {
    const loadBalance = async () => {
      if (web3Api.web3 === null) return;

      const { eth, utils } = web3Api.web3;

      const _contract = await getContract("Faucet");
      const _balance = await eth.getBalance(_contract.address);

      setFaucetContract(_contract);
      setAccBalance(utils.fromWei(_balance, "ether"));
    };

    loadBalance();
  }, [web3Api.web3, onBalanceChange]);

  return (
    <div className="faucet-wrapper">
      <div className="faucet">
        <div className="user-account is-flex is-flex-direction-row">
          <span className="is-align-self-center mr-2">
            <strong> Account: </strong>
          </span>

          {isAccountSelected() ? (
            <h1>{toUpper(userAccount)}</h1>
          ) : (
            <button className="button" onClick={connectWallet}>
              Connect Wallet
            </button>
          )}
        </div>
        {isAccountSelected() ? (
          <div className="balance-view is-size-2 mb-3">
            Current Balance: <strong>{accBalance}</strong> ETH
          </div>
        ) : null}
        {userAccount && (
          <>
            <button onClick={addFunds} className="button is-outlined mr-2">
              {" "}
              Donate{" "}
            </button>
            <button onClick={withdrawFunds} className="button is-outlined">
              {" "}
              Withdraw{" "}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
