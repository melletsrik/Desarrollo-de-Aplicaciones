import React, { useRef, useContext } from 'react';
import { UserContext } from '../contexts/UserProvider';
import { Card } from './card';
export const Youtubewe = () =>{
    const linkRef = useRef(null);
    const [escogido,setEscogido] = useContext(UserContext);
    return(
        <div>
            <ul>
                <a             
                href="https://www.youtube.com/watch?v=nuIdO3EGVWg"
                target="_blank"
                rel="noopener noreferrer"
                ref={linkRef}>Partido más importante {escogido}</a>
            </ul>
            <Card></Card>
        </div>
    )
}