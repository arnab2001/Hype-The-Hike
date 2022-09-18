import React from 'react'
import UserModal from "../userModal/UserModal";
import Upcoming from './Upcoming'
import { useContext } from "react";
import { ArcanaContext } from "../../../../../context/ArcanaContextProvider";
import {useAddress, useDisconnect, useMetamask} from "@thirdweb-dev/react";

import "./UpcomingIndex.css";
function UpcomingIndex() {
  const { loggedIn_Arcana } = useContext(ArcanaContext);
 
  if (!loggedIn_Arcana) {
    return <div>Pls login....</div>;
  }

  const connect = useMetamask();
  const disconnect = useDisconnect();
  const address = useAddress();
  return (
    <>
      {address ? (
       <>
        <h4 style={{color: "white"}}>{address}</h4>
        <button onClick={disconnect}>Disconnect</button>
       </>
      ) : (
        <button onClick={connect}>Connect</button>
      )}
    
    <div className='page'>
    
    <div className='cards'>
        <Upcoming/>
    </div>
    </div>
    </>

  )
}

export default UpcomingIndex