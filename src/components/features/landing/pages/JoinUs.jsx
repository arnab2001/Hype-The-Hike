import React from "react";
import { useContext } from "react";
import { ArcanaContext } from "../../../../context/ArcanaContextProvider";
import {useAddress, useDisconnect, useMetamask} from "@thirdweb-dev/react";

const JoinUs = () => {
  const { loggedIn_Arcana } = useContext(ArcanaContext);
 
  // if (!loggedIn_Arcana) {
  //   return <div>Pls login....</div>;
  // }

  const connect = useMetamask();
  const disconnect = useDisconnect();
  const address = useAddress();

  return (
    <>
      {/* <text style={{ color: "white" }}>hi</text> */}

      {
        address ? (
         <>
          <h4>{address}</h4>
          <button onClick={disconnect}>Disconnect</button>
         </>
        ) : (
          <button onClick={connect}>Connect</button>
        )
      }
    </>
  );
};

export default JoinUs;
