
import './App.css';
import ComponentePai from './Components/ComponentePai';

function App(props) {
  return (
    <div >
      <h1>
        olá {props.name}
      </h1>
      <strong>{props.primeira}</strong>
      <ComponentePai
        terceira = {"props terceira que vai p pai"}
        quarta={props.segunda}
      />
    </div>
  );
}

export default App;
