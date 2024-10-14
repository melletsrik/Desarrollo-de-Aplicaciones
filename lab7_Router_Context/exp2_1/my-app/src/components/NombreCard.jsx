import React from "react";
export function NombreCard(data){
    console.log("queee")
    return(
        <div >
            <ul>
                {data.map((nombre => (
                    <div>
                        <h1>{nombre.nombre}</h1>
                    </div>
                )))}
            </ul>
        </div>
    )
}