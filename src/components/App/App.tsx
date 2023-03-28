import useWeb3 from "../../hooks/useWeb3";
import "./App.css";

function App() {
  const web3Api = useWeb3();

  return (
    <div className="faucet-wrapper">
      <div className="faucet">
        <div className="balance-view is-size-2">
          Current Balance: <strong>10</strong> ETH
        </div>
        <button className="btn mr-2"> Donate </button>
        <button className="btn"> Withdraw </button>
      </div>
    </div>
  );
}

export default App;
