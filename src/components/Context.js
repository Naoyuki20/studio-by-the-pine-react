import React, { useState, useContext } from "react";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isWorksOpen, setIsWorksOpen] = useState(false);

  const openPage = (id) => {
    if (id === "ABOUT") {
      setIsAboutOpen(true);
    } else if (id === "SERVICES") {
      setIsServicesOpen(true);
    } else if (id === "CONTACT") {
      setIsContactOpen(true);
    } else if (id === "WORKS") {
      setIsWorksOpen(true);
    }
  };

  const closePage = (id) => {
    if (id === "ABOUT") {
      setIsAboutOpen(false);
    } else if (id === "SERVICES") {
      setIsServicesOpen(false);
    } else if (id === "CONTACT") {
      setIsContactOpen(false);
    } else if (id === "WORKS") {
      setIsWorksOpen(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isAboutOpen,
        isWorksOpen,
        isServicesOpen,
        isContactOpen,
        openPage,
        closePage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
