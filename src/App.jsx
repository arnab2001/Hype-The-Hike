import React from 'react'
import ArcanaContextProvider from "./context/ArcanaContextProvider";
import MainApp from "./components/MainApp";
import "./App.css";
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

const App = () => {
  return (
    <>
      <ArcanaContextProvider>
        <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
        <MainApp/>
        </ThirdwebProvider>
      </ArcanaContextProvider>
    </>
  )
}

export default App