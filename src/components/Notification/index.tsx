import { ReactNode } from "react";

export interface INotificationProps {
  children: ReactNode;
  type?: string;
  color?: string;
}

const Notification = ({
  children,
  type = "is-danger",
  color = "is-light",
}: INotificationProps): JSX.Element => {
  return <div className={`notification ${type} ${color}`}>{children}</div>;
};

export default Notification;
