import { useEffect, useState } from "react";
import useWeb3 from "../../hooks/useWeb3";
import "./App.css";

function App() {
  const web3Api = useWeb3();

  const [account, setAccount] = useState<string>('');

  useEffect(() => {
    const getAccounts = async () => {
      if(web3Api.web3) {
        const accounts = await web3Api.web3.eth.getAccounts();
        setAccount(accounts.at(0) as string);
      }
    }

    getAccounts();
  }, [web3Api.web3]);

  return (
    <div className="faucet-wrapper">
      <div className="faucet">
        <div className="balance-view is-size-2">
          Current Balance: <strong>10</strong> ETH
        </div>
        <h1>{account}</h1>
        <button className="btn mr-2"> Donate </button>
        <button className="btn"> Withdraw </button>
      </div>
    </div>
  );
}

export default App;
