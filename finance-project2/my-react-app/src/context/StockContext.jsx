import { createContext, useState, useCallback } from 'react';

export const StockContext = createContext();

export const StockProvider = ({ children }) => {
  const [stocks, setStocks] = useState([]);

  const fetchStockPrice = useCallback(async (symbol) => {
    const API_KEY = '6O68CK8EH3CTLG78'; 
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data['Global Quote']?.['05. price'] ? parseFloat(data['Global Quote']['05. price']) : null;
    } catch {
      return null;
    }
  }, []);

  const addStock = async (newStock) => {
    const currentPrice = await fetchStockPrice(newStock.symbol);
    if (!currentPrice) return; // Ignore invalid symbols

    setStocks(prev => [...prev, {
      ...newStock,
      id: Date.now(),
      currentPrice,
      profitLoss: (currentPrice - newStock.purchasePrice) * newStock.quantity
    }]);
  };

  return (
    <StockContext.Provider value={{ stocks, addStock }}>
      {children}
    </StockContext.Provider>
  );
};
