import { StockProvider } from './context/StockContext';
import StockForm from './components/StockForm';
import StockList from './components/StockList';
import './App.css';

function App() {
  return (
    <StockProvider>
      <div className="app">
        <header className="app-header">
          <img src="./profile_pic.jpg" width="800" height="250" alt="Profile" />
          <h1>Finance Dashboard</h1>
        </header>
        <StockForm />
        <StockList />
      </div>
    </StockProvider>
  );
}

export default App;
