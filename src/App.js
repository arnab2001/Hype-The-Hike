import React from 'react'
import ArcanaContextProvider from "./context/ArcanaContextProvider";
import MainApp from "./components/MainApp";

const App = () => {
  return (
    <>
      <ArcanaContextProvider>
        <MainApp/>
      </ArcanaContextProvider>
    </>
  )
}

export default App