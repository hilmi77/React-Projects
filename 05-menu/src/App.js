// import React, { useState } from "react";
// import Menu from "./Menu";
// import Categories from "./Categories";
// import items from "./data";
// const allCategories = ["all", ...new Set(items.map((item) => item.category))];

// function App() {
//   const [menuItems, setMenuItems] = useState(items);
//   const [categories, setCategories] = useState(allCategories);

//   const filterItems = (category) => {
//     if (category === "all") {
//       setMenuItems(items);
//       return;
//     }
//     const newItems = items.filter((item) => item.category === category);
//     setMenuItems(newItems);
//   };

//   return (
//     <main>
//       <section className="menu-section">
//         <div className="title">
//           <h2>Our Menu</h2>
//           <div className="underline"></div>
//         </div>
//         <Categories categories={categories} filterItems={filterItems} />
//         <Menu items={menuItems} />
//       </section>
//     </main>
//   );
// }

// export default App;
import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [show, setShow] = useState(false);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const NewItems = items.filter((item) => item.category === category);
    setMenuItems(NewItems);
  };

  const showMenu = () => {
    setShow(!show);
  };

  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
          <button className=" show-btn" onClick={showMenu}>
            {show ? "Hide Menu" : "Show Menu"}
          </button>
        </div>

        {show && (
          <>
            <Categories categories={categories} filterItems={filterItems} />
            <Menu items={menuItems} />{" "}
          </>
        )}
      </section>
    </main>
  );
}

export default App;
