import {createContext,useEffect, useState} from "react"
import { AuthProvider } from "@arcana/auth";

export const ArcanaContext=createContext();

const ArcanaContextProvider=({children})=>{
   const [auth,setAuth]=useState();
    const Authconnection=async()=>{
        const appId = "2248";
        const auth = new AuthProvider(`${appId}`);
        console.log(auth);
        setAuth(auth);
        
        const position = "right"; // values - 'left' or 'right'
  
        await auth.init({ appMode: 2, position });
        
        };


    


   useEffect(() => {
       Authconnection();
       
   }, [])
   
    
    return (<ArcanaContext.Provider
    value={{}}
    >
        {children}
    </ArcanaContext.Provider>)
}

export default ArcanaContextProvider;