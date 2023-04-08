import Header from './Component/Header';
import './App.css';
import AddSales from './pages/AddSales';
import Register from './pages/Register';
import Revenue from './pages/Revenue';
import TopSales from './pages/TopSales';
import Login from './pages/Login';
import Logout from './pages/Logout';


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AddSales />} />
        <Route path="/topSales" element={<TopSales />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  </>

   

  );
}

export default App;
