import React, { useEffect } from "react";

type Item = {
  id: string;
  title: string;
};

type AlertProps = {
  list: Item[];
  msg: string;
  type: string;
  showAlert: () => void;
};

const Alert = ({ msg, showAlert, type, list }: AlertProps) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [list]);

  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
