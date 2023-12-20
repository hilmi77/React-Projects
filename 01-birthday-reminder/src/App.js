import React, { useState } from "react";
import data from "./data";
import List from "./List";
import "./App.css";

function App() {
  const people = data;
  const [showList, setShowList] = useState(false);

  const handleShowClick = () => {
    setShowList(true);
  };
  const handleClearClick = () => {
    setShowList(false);
  };
  return (
    <main>
      <section className="container">
        {/* {showList && <h3>{people.length} birthdays today</h3>}
        {showList && <List people={people} />}
        {showList ? (
          <button onClick={handleClearClick}>Clear All</button>
        ) : (
          <button onClick={handleShowClick}>Show</button>
        )} */}
        {showList ? (
          <>
            <h3>{people.length} birthdays today</h3>
            <List people={people} />
            <button onClick={handleClearClick}>Clear All</button>
          </>
        ) : (
          <button onClick={handleShowClick}>Show Birthdays</button>
        )}
      </section>
    </main>
  );
}

export default App;
