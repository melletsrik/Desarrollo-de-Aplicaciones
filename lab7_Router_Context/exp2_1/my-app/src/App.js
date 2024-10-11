
import './App.css';
import React, {useState} from "react";
import { Nav } from './components/nav';


export const Context = React.createContext();
function App() {

  const [signedIn, setSignedIn] = useState(false)
  return (  
    <Context.Provider value={[signedIn, setSignedIn]}>
      <Nav/>
      <h1>{signedIn ? "Signed in" : "Signed out"}</h1>
    </Context.Provider>
  );
}

export default App;
