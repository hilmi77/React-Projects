import React, { useState, createContext, useContext } from "react";
import sublinks from "../data";

type Sublinks = {
  page: string;
  links: { label: string; icon: JSX.Element; url: string }[];
};

interface AppContextInterface {
  isSidebarOpen: boolean;
  isSubmenuOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  openSubmenu: (
    text: string,
    coordinates: { bottom: number; center: number }
  ) => void;
  closeSubmenu: () => void;
  page: Sublinks;
  location: { bottom: number; center: number } | {};
}

const AppContext = createContext<AppContextInterface | undefined>(undefined);

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState<Sublinks>({ page: "", links: [] });
  const [location, setLocation] = useState({});

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (
    text: string,
    coordinates: { bottom: number; center: number }
  ) => {
    const page = sublinks.find((link) => text === link.page);
    if (page) {
      setPage(page);
      setLocation(coordinates);
      setIsSubmenuOpen(true);
    }
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        page,
        location,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within AppProvider");
  }
  return context;
};

export { AppContext, AppProvider };
