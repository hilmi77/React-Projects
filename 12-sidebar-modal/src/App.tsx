import React from "react";
import Home from "./Home";
import SideBar from "./Sidebar";
import Modal from "./Modal";

type Props = {};

const App = (props: Props) => {
  return (
    <>
      <Home />
      <Modal />
      <SideBar />
    </>
  );
};

export default App;
