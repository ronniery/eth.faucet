import { toUpper } from "lodash";
import { Web3Provider } from "../../types";

export interface IUserAccountProps {
  isAccountSelected: () => boolean;
  connectWallet: () => void;
  userAccount: string;
  web3Api: Web3Provider;
}

const UserAccount = ({
  isAccountSelected,
  connectWallet,
  userAccount,
  web3Api,
}: IUserAccountProps): JSX.Element | null => {
  let componentBody = (
    <button className="button" onClick={connectWallet}>
      Connect Wallet
    </button>
  );

  if (isAccountSelected()) {
    componentBody = <h1 className="user-address">{toUpper(userAccount)}</h1>;
  } else if (!web3Api.provider) {
    componentBody = (
      <div className="notification is-warning is-small is-rounded py-2 px-3 mx-2">
        Wallet not detected!{" "}
        <a
          title="Metamask download website"
          rel="noopener noreferrer"
          target="_blank"
          href="https://metamask.io/download/"
        >
          Install Metamask
        </a>
      </div>
    );
  }

  return (
    <div className="user-account is-flex is-flex-direction-row">
      <span className="is-align-self-center mr-2">
        <strong> Account: </strong>
      </span>
      {componentBody}
    </div>
  );
};

export default UserAccount;
