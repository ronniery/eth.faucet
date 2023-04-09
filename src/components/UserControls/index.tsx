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
        Donate{" "}
      </button>
      <button onClick={withdrawFunds} className="button is-outlined">
        {" "}
        Withdraw{" "}
      </button>
    </>
  );
};

export default UserControls;
