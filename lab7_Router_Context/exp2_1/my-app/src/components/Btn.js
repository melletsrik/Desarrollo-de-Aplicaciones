import React, { useContext } from "react";
import { Context } from "../App";


export function Btn(){
    const [signedIn, setSignedIn] = useContext(Context)
    return(
        <button onClick={() => setSignedIn(!signedIn)}>
            {signedIn ? 'Signed out' : 'Sign in'}
        </button>
    )
    
}