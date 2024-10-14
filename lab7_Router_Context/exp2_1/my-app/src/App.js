import logo from './logo.svg';
import './App.css';
import Counter from './components/contador2';
import {Formulario} from './components/form';
import { Listaanima } from './components/listanimal';
import { Card } from './components/card';
import { UserProvider } from './contexts/UserProvider';
function App() {
  return <UserProvider>
        <div className='App my-section'  >

    <div class="hero-section">
      <div class="container">
        <h1>Centro de Votaciones de los chicago bulls</h1>
        <p>Este sitio web se encarga de resguarda a los mejores jugadores de los Chicago Bulls y los votos respectivos          
        </p>
      </div>
    </div>
    <Listaanima/>
    <Counter initialValue={7}/>    
    <Formulario/> 

</div>
    
  </UserProvider>


}

export default App;
