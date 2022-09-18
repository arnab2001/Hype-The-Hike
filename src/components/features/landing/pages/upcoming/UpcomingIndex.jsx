import React from "react";
import UserModal from "../userModal/UserModal";
import Upcoming from "./Upcoming";
import { useContext } from "react";
import { ArcanaContext } from "../../../../../context/ArcanaContextProvider";
import {
  useAddress,
  useDisconnect,
  useIsAddressRole,
  useMetamask,
} from "@thirdweb-dev/react";

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
      <div className="Flex-container">
        {address ? (
          <>
            <h4 style={{ color: "white" }}> Account Address :- {address}</h4>
            <button className="open" onClick={disconnect}>
              Disconnect
            </button>
          </>
        ) : (
          <button className="open" onClick={connect}>
            Connect
          </button>
        )}
      </div>
      <div className="page">
        <div className="cards">
          <Upcoming />
        </div>
      </div>
    </>
  );
}

export default UpcomingIndex;
