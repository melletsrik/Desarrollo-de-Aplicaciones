import { useContext } from "react";
import { UserContext } from "../contexts/UserProvider";

export const Alerta = () => {
    const [escogido, setEscogido] = useContext(UserContext);
    return(
        alert( {escogido})
    )
}