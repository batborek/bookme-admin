import React, { useState, createContext } from "react";

export const CoreContext = createContext();
function CoreContextProvider(props) {
  
    const [currentPage, setCurrentPage] = useState(0);
    const [email,setEmail] = useState("");
   
    const [password,setPassword] = useState("");
    const value = {
        currentPage,setCurrentPage,email,setEmail,password,setPassword
    };
    return (
        <CoreContext.Provider value={value}>{props.children}</CoreContext.Provider>
      );
}

export default CoreContextProvider;