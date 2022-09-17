import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ArcanaContext } from "../../../../context/ArcanaContextProvider";

const JoinUs = () => {
  const { loggedIn_Arcana } = useContext(ArcanaContext);
 
  if (!loggedIn_Arcana) {
    return <div>Pls login....</div>;
  }
  return (
    <>
      <text style={{ color: "white" }}>hi</text>
    </>
  );
};

export default JoinUs;
