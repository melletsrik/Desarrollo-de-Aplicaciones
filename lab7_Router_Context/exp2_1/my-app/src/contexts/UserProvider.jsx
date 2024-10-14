import React, {useState, createContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({children})=>{
    const [escogido, setEscogido] = useState();
    return <UserContext.Provider value={[escogido, setEscogido]}>
        {children}
    </UserContext.Provider>
}