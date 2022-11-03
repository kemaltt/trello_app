
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState } from 'react';
import RegisterFull from './pages/RegisterFull';

function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [userData, setUserData] = useState([
    {
      email: 'test@gmail.com',
    }
  ])
  localStorage.setItem('userData', JSON.stringify(userData))


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home isLogin={isLogin} setIsLogin={setIsLogin} />} />
          <Route path='/login' element={<Login setIsLogin={setIsLogin} />} />
          <Route path='/register' element={<Register setUserData={setUserData} userData={userData} />} />
          <Route path='/registerfull' element={<RegisterFull setUserData={setUserData} userData={userData} />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
