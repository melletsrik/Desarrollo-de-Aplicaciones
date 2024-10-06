import logo from './logo.svg';
import './App.css';
import Counter from './components/contador2';
import {Formulario} from './components/form';
import { Listaanima } from './components/listanimal';
import { Card } from './components/card';
function App() {
  return (

    <div className='App'  >
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand " href="#" >Pagina principal</a>
      </div>
    </nav>
    <div class="hero-section">
      <div class="container">
        <h1>Bienvenidos a la Pagina principal</h1>
        <p>Este sitio web se encarga de guardar a los animales más representativos de Africa          
        </p>
      </div>
    </div>
    <Listaanima/>
    <Counter initialValue={2}/>    
    <Formulario/> 
 
    </div>
  );
}

export default App;
