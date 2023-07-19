import React from'react';
//rotas
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Bills from "./pages/Bills"
//componentes
import LoginSignup from "./components/Resgistration/LoginSignup"
import Navbar from './components/Navbar';
import Nav from './components/Dashboard/dash';
import Nav1 from './components/Dashboard/dash1';
import Nav2 from './components/Dashboard/dash3';
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/bills' element={<Bills />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/dash' element={<Nav/>} />
          <Route path='/dash1' element={<Nav1/>} />
          <Route path='/dash2' element={<Nav2/>} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;