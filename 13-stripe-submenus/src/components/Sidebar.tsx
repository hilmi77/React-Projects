import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "../data";
import { useGlobalContext } from "../context/context";

interface Sublink {
  url: string;
  icon: React.ReactNode;
  label: string;
}

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  const typedSublinks: Sublink[] = sublinks as unknown as Sublink[];
  return (
    <div
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {typedSublinks.map((item, index) => {
            const { url, icon, label } = item;
            return (
              <a key={index} href={url}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
