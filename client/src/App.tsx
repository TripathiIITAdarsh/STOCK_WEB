import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FilterStocks from './pages/FilterStocks';
import Prediction from './pages/Prediction';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/filter" element={<FilterStocks />} />
      <Route path="/predict" element={<Prediction />} />
    </Routes>
  );
}

export default App;
