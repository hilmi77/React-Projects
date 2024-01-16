import React, { useState, useRef, useEffect, FC } from "react";
import { useGlobalContext } from "../context/context";

type GlobalContext = {
  isSubmenuOpen: boolean;
  page: { page: string; links: Link[] };
  location: { center: number; bottom: number };
};

type Link = {
  url: string;
  icon: JSX.Element;
  label: string;
};

const Submenu = () => {
  const {
    isSubmenuOpen,
    page: { page, links },
    location,
  } = useGlobalContext();
  const container = useRef<HTMLDivElement>(null);
  const [columns, setColumns] = useState<string>("col-2");

  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current as HTMLDivElement;
    if ("center" in location) {
      const { center, bottom } = location;
      submenu.style.left = `${center}px`;
      submenu.style.top = `${bottom}px`;
    }

    if (links.length === 3) {
      setColumns("col-3");
    }

    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [page, location, links]);

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;

          return (
            <a href={url} key={index}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
