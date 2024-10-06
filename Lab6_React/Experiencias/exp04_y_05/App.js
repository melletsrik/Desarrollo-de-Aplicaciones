import Contador from './classComponents'
import ContadorLikes from './stateComponents';
import EffectComp from './effectsComponents';

export default function App() {
  return (
    <header>
      <h1>Contador de likes con clases</h1>
      <Contador/>
      <h1>Contador de likes con useState</h1>
      <ContadorLikes/>
      <h1>Contador de likes con effectState</h1>
      <EffectComp/>
    </header>
  );
}
