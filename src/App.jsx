import React from 'react'
import Home from './components/Home';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router';
import Details from './components/Details';

const App = () => {
  return (
    <div className="h-screen w-screen flex">
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>  
   
    </div>
  );
}

export default App