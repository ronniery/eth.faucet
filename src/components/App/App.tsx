/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useState } from "react";
import { JSONRPCMethodsRestricted } from "../../constants";
import useWeb3 from "../../hooks/useWeb3";
import { TruffleContract } from "../../types";

import "./App.css";

function App() {
  const { api: web3Api, getContract } = useWeb3();

  const [account, setAccount] = useState<string>("");
  const [balance, setBalance] = useState<string>("0");
  const [contract, setContract] = useState<TruffleContract>(
    {} as TruffleContract
  );

  useEffect(() => {
    const getAccounts = async () => {
      const { web3 } = web3Api;

      if (web3) {
        const { eth, utils } = web3;
        const accounts = await eth.getAccounts();
        const _contract = await getContract("Faucet");
        const _balance = await eth.getBalance(_contract.address);

        setAccount(accounts.at(0) as string);
        setContract(_contract as FaucetContract);
        setBalance(utils.fromWei(_balance, "ether"));
      }
    };

    getAccounts();
  }, [web3Api.web3]);

  const addFunds = async () => {
    const { web3 } = web3Api;

    await contract.addFunds({
      from: account,
      value: web3!.utils.toWei(String(1), "ether"),
    });
  };

  const connectWallet = () =>
    web3Api.provider?.request<string[]>({
      method: JSONRPCMethodsRestricted.ETH_REQUEST_ACCOUNTS,
    });

  return (
    <div className="faucet-wrapper">
      <div className="faucet">
        <div className="user-account is-flex is-flex-direction-row">
          <span className="is-align-self-center mr-2">
            <strong> Account: </strong>
          </span>

          {account ? (
            <h1>{account}</h1>
          ) : (
            <button className="button" onClick={connectWallet}>
              Connect Wallet
            </button>
          )}
        </div>
        <div className="balance-view is-size-2 mb-3">
          Current Balance: <strong>{balance}</strong> ETH
        </div>
        {account && (
          <>
            <button onClick={addFunds} className="button is-outlined mr-2"> Donate </button>
            <button className="button is-outlined"> Withdraw </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
