
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState } from 'react';

function App() {

  const [isLogin, setIsLogin] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={isLogin ? <Home /> : <Login />} />
          <Route path='/login' element={<Login setIsLogin={setIsLogin} />} />
          <Route path='/register' element={<Register />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
