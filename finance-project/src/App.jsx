import './App.css';
import { useState } from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const thickBorder = {
'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
  borderWidth: '3px !important'
}
};


function App() {
  const [formData, setFormData] = useState({
    symbol: '',
    quantity: '',
    price: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Stock added:', formData);
    setFormData({ symbol: '', quantity: '', price: '' });
  };


  return (
    <>
      <img src="/profile_pic.jpg" width="700" height="250" alt="Profile" />
      <h1>Finance Dashboard</h1>

      <form onSubmit={handleSubmit} className="my-form">
        <TextField 
          name="symbol"
          label="Stock Symbol"
          value={formData.symbol}
          onChange={handleChange}
          size="small"
          sx={thickBorder}
        />

        <TextField
          name="quantity"
          label="Quantity"
          type="number"
          value={formData.quantity}
          onChange={handleChange}
          size="small"
          slotProps={{ htmlInput: { min: 1 } }}  
          sx={thickBorder}
        />

        <TextField
          name="price"
          label="Price ($)"
          type="number"
          value={formData.price}
          onChange={handleChange}
          size="small"
          slotProps={{ htmlInput: { min: 0, step: 0.01 } }}  
          sx={thickBorder}
        />

        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Add Stock
        </Button>
      </form>
    </>
  );
}

export default App;


      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
