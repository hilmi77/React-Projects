import React, { useEffect } from "react";

type Item = {
  id: string;
  title: string;
};

type AlertProps = {
  list: Item[];
  msg: string;
  type: string;
  removeAlert: () => void;
};

const Alert = ({ msg, removeAlert, type, list }: AlertProps) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
