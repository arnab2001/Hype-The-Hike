import { createContext, useEffect, useState } from "react";
import { AuthProvider } from "@arcana/auth";
import { getWalletInstance } from "./util/storageProvider";

export const ArcanaContext = createContext();

const ArcanaContextProvider = ({ children }) => {
  const [loggedIn_Arcana, setLoggedInArcana] = useState(false);
  const [provider, setProvider] = useState();
  const CheckLoggedInArcana = async () => {
    //const islogin=await provider.isLoggedIn();
    // await setLoggedInArcana(islogin)
  };

  const Authconnection = async () => {
    const auth = new AuthProvider("2248");

    try {
      const position = "left"; // values - 'left' or 'right'

      await auth.init({ appMode: 2, position });

      setLoggedInArcana(await auth.isLoggedIn());
    } catch (err) {
      throw err;
    } finally {
    }
  };

  useEffect(() => {
    Authconnection();
  }, []);

  return (
    <ArcanaContext.Provider value={{ loggedIn_Arcana, CheckLoggedInArcana }}>
      {children}
    </ArcanaContext.Provider>
  );
};

export default ArcanaContextProvider;
