import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import RefazerSenha from './pages/RefazerSenha/RefazerSenha';
import MudancaSenha from './pages/MudancaSenha/MudancaSenha';
import Homepage from './pages/Homepage/Homepage';
import Cadastro from './pages/Cadastro/Cadastro';
import CadastroAdm from './pages/CadastroAdm/CadastroAdm';
import MenuPrincipalUsuario from './pages/MenuPrincipalUsuario/MenuPrincipalUsuario';
import MenuPrincipalAdm from './pages/MenuPrincipalAdm/MenuPrincipalAdm';
import EditarPerfil from './pages/EditarPerfil/EditarPerfil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/redefinicao-senha" element={<RefazerSenha />} />
        <Route path="/mudar-senha/:id" element={<MudancaSenha />} />
        <Route path='/' element={<Homepage />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastroadm" element={<CadastroAdm/>} />
        <Route path="/principal" element={<MenuPrincipalUsuario />} />
        <Route path="/adm" element={<MenuPrincipalAdm />} />
        <Route path='/edicao/perfil' element={<EditarPerfil />} />
        {/*<Route path="*" element={<NotFound />} />*/} {/* Rota para página 404 */} {/*Lembra de fazer a pagina de erro 404 n esquecer de forma nehuma */}
      </Routes>
    </Router>
  );
}

export default App;
