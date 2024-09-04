import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import RefazerSenha from './pages/RefazerSenha/RefazerSenha';
import MudancaSenha from './pages/MudancaSenha/MudancaSenha';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/redefinicao-senha" element={<RefazerSenha />} />
        <Route path="/mudar-senha" element={<MudancaSenha />} />
        {/*<Route path="*" element={<NotFound />} />*/} {/* Rota para página 404 */} {/*Lembra de fazer a pagina de erro 404 n esquecer de forma nehuma */}
      </Routes>
    </Router>
  );
}

export default App;
