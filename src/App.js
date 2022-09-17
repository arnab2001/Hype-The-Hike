import React from 'react'
import ArcanaContextProvider from "./context/ArcanaContextProvider";
import MainApp from "./components/MainApp";
// import UserModal from "./components/component/userModal/UserModal";
const App = () => {
  console.log("ji");
  return (
    <>
      <ArcanaContextProvider>
        <MainApp/>
      </ArcanaContextProvider>
    </>
  )
}

export default App