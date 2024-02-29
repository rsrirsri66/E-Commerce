
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './login';
import CartPage from './cart';
function App() {
  return (
    <div className="App">
      <Routes>
    <Route path='/' element={<Homepage />}/>
    <Route path='/cart' element={<CartPage />}/>
    </Routes>
    </div>
  );
}

export default App;
