import { useState, useContext } from 'react';
import { StockContext } from '../context/StockContext';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const thickBorder = {
'& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
  borderWidth: '3px !important'
}
};


const StockForm = () => {
  const [formData, setFormData] = useState({
    symbol: '',
    quantity: '',
    purchasePrice: ''
  });
  const { addStock } = useContext(StockContext);

  const handleChange = (e) => {
    console.log('Input changed:', e.target.name, e.target.value); 
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData); 
    
    await addStock({
      symbol: formData.symbol.toUpperCase().trim(),
      quantity: parseInt(formData.quantity),
      purchasePrice: parseFloat(formData.purchasePrice)
    });
    
    setFormData({ symbol: '', quantity: '', purchasePrice: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="stock-form">
      <div className="form-row"> {/* Side-by-side container */}
        <div className="form-group">
          <label>Stock Symbol</label>
          <TextField
            name="symbol"
            type="text"
            value={formData.symbol}
            onChange={handleChange}
            placeholder="AAPL"
            sx={thickBorder}
          />
        </div>
        
        <div className="form-group">
          <label>Quantity</label>
          <TextField
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="1"
            min="1"
            sx={thickBorder}
          />
        </div>
        
        <div className="form-group">
          <label>Purchase Price ($)</label>
          <TextField
            name="purchasePrice"
            type="number"
            step="0.01"
            value={formData.purchasePrice}
            onChange={handleChange}
            placeholder="0.00"
            min="0"
            sx={thickBorder}
          />
        </div>
      </div>

      <Button type="submit" variant="contained" endIcon={<SendIcon />}>
        Add Stock
      </Button>
    </form>
  );
};

export default StockForm;
