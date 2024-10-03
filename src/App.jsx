import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Productos from './page/Productos';
import Pedidos from './page/Pedidos';
import Proyectos from './page/Proyectos';
import Clientes from './page/Clientes';
import Dashboard from './page/Dashboard';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Dashboard />} ></Route> 
        <Route path="/Productos" exact element={<Productos />}></Route> 
        <Route path="/Pedidos" exact  element={<Pedidos />}></Route> 
        <Route path="/Proyectos" exact  element={<Proyectos />}></Route>
        <Route path="/Clientes" exact  element={<Clientes/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
