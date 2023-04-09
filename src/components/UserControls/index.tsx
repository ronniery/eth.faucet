export interface IUserControlsProps {
  isAccountSelected: () => boolean;
  addFunds: () => void;
  withdrawFunds: () => void;
}

const UserControls = ({
  isAccountSelected,
  addFunds,
  withdrawFunds,
}: IUserControlsProps): JSX.Element | null => {
  if (!isAccountSelected()) return null;

  return (
    <>
      <button onClick={addFunds} className="button is-outlined mr-2">
        {" "}
        Donate 1 eth{" "}
      </button>
      <button onClick={withdrawFunds} className="button is-outlined">
        {" "}
        Withdraw 0.1 eth{" "}
      </button>
    </>
  );
};

export default UserControls;
