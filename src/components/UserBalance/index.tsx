export interface IUserBalanceProps {
  isAccountSelected: () => boolean;
  accountBalance: number | string;
}

const UserBalance = ({
  isAccountSelected,
  accountBalance,
}: IUserBalanceProps): JSX.Element | null => {
  if (!isAccountSelected()) return null;

  return (
    <div className="balance-view is-size-2 mb-3">
      Current Balance: <strong>{accountBalance}</strong> ETH
    </div>
  );
};

export default UserBalance;
