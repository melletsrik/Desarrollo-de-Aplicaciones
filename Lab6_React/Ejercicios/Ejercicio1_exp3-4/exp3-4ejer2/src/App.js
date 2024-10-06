import logo from './logo.svg';
import './App.css';
import Counter from './components/contador2';
import {Formulario} from './components/form';
import { Listaanima } from './components/listanimal';
import { Card } from './components/card';
function App() {
  return (

    <div className='App my-section'  >

    <div class="hero-section">
      <div class="container">
        <h1>CBS TEAM HONOR WEBSITE</h1>
        <p>Este sitio web se encarga de resguarda a los mejores jugadores de los Chicago Bulls          
        </p>
      </div>
    </div>
    <Listaanima/>
    <Counter initialValue={7}/>    
    <Formulario/> 
 
    </div>
  );
}

export default App;
