import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCoctail from "./pages/SingleCoctail";
import Error from "./pages/Error";

type Props = {};

const App = (props: Props) => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCoctail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
