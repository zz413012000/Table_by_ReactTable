import logo from './logo.svg';
import './App.css';
import Table from './table'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className='main'>
        <div className='description'>
          使用技術 React Hook、React Table、fetch<br/>
          
        </div>
        <Table/>
      </div>
    </div>
  );
}

export default App;
