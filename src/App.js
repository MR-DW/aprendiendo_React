import logo from './logo.svg';
import './App.css';
// import componente
import Welcome from './components/welcome';


function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
        
          <Welcome />
      
        </div>
        
      </header>
      
      
      
      

    </div>
  );
}

export default App;
