import logo from './logo.svg';
import './App.css';
// import componente
import Welcome from './components/welcome';
import Saludo from './components/welcome2';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <Welcome />
    
        </div>
        <div>
      
          <Saludo />
        </div>
      </header>
    </div>
  );
}

export default App;
