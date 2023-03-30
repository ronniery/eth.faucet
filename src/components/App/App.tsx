import { useEffect, useState } from "react";
import { JSONRPCMethodsRestricted } from "../../constants";
import useWeb3 from "../../hooks/useWeb3";
import "./App.css";

function App() {
  const { api: web3Api, getContract } = useWeb3();

  const [account, setAccount] = useState<string>("");

  useEffect(() => {
    const getAccounts = async () => {
      if (web3Api.web3) {
        const accounts = await web3Api.web3.eth.getAccounts();
        setAccount(accounts.at(0) as string);
      }
    };

    getAccounts();
  }, [web3Api.web3]);

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
          Current Balance: <strong>10</strong> ETH
        </div>
        {account && (
          <>
            <button className="button is-outlined mr-2"> Donate </button>
            <button className="button is-outlined"> Withdraw </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
