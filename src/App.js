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
          1.fetch 政府開放平台的 api<br/>
          2.建立 CORS Proxy 部屬在 Heroku<br/>
          3.使用 useEffect 更新資料<br/>
          4.React Table 建立表格，提供 sort 功能<br/>
          5.撰寫 CSS，添加樣式
        </div>
        <Table/>
      </div>
    </div>
  );
}

export default App;
