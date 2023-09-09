import React,{ useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import Register from './components/Register';
import Login from './components/Login';
import Book from './components/Book';
function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
        </Routes>
        <Routes>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        <Routes>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Routes>
          <Route path='/book' element={<Book/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
