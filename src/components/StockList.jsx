import { useContext } from 'react';
import { StockContext } from '../context/StockContext';

const StockList = () => {
  const { stocks } = useContext(StockContext);

  if (stocks.length === 0) {
    return (
      <div className="no-stocks">
        No stocks added yet. Add some using the form above!
      </div>
    );
  }

  return (
    <div className="stock-list">
      <h2>Your Portfolio</h2>
      <div className="stocks-grid">
        {stocks.map((stock) => (
          <div key={stock.id} className="stock-card">
            <div className="stock-symbol">{stock.symbol}</div>
            <div className="stock-details">
              <div>Qty: {stock.quantity}</div>
              <div>Purchase: ${stock.purchasePrice.toFixed(2)}</div>
              <div>Current: ${stock.currentPrice?.toFixed(2) || 'N/A'}</div>
              <div className={`profit-loss ${stock.profitLoss >= 0 ? 'positive' : 'negative'}`}>
                Profit/Loss: ${stock.profitLoss?.toFixed(2) || 'N/A'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockList;
