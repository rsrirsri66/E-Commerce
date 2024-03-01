
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './login';
import CartPage from './cart';
import Pageproduct from './products';
function App() {
  return (
    <div className="App">
      <Routes>
    <Route path='/' element={<Homepage />}/>
    <Route path='/cart' element={<CartPage />}/>
    <Route path='/products' element={<Pageproduct />}/>
    </Routes>
    </div>
  );
}

export default App;
