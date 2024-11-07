import React, { useState } from "react";
import Botao from "../Botao/Botao";
import style from "./ListaAdministradores.module.css";


function Crud() {
  const [form, setForm] = useState({ nome: "", email: "", cpf: "" });
  const [usuarios, setUsuarios] = useState([]);
  const [indiceEdicao, setIndiceEdicao] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    // Verifica se já existe um usuário com o mesmo CPF
    const existeUsuario = usuarios.some((usuario) => usuario.cpf === form.cpf);
    
    if (existeUsuario) {
      alert("Um usuário com esse CPF já foi adicionado.");
      return;
    }
    
    // Se o formulário estiver preenchido e o CPF não for duplicado
    if (form.nome && form.email && form.cpf) {
      setUsuarios([...usuarios, form]);
      setForm({ nome: "", email: "", cpf: "" });
    }
  };

  const handleDelete = (index) => {
    const updatedUsuarios = usuarios.filter((_, i) => i !== index);
    setUsuarios(updatedUsuarios);
  };

  const handleEdit = (index) => {
    setIndiceEdicao(index);
    setForm(usuarios[index]);
  };

  const handleSave = () => {
    const updatedUsuarios = [...usuarios];
    updatedUsuarios[indiceEdicao] = form;
    setUsuarios(updatedUsuarios);
    setForm({ nome: "", email: "", cpf: "" });
    setIndiceEdicao(null);
  };

  return (
    <div className={style.container_geral}>
      <h1 className={style.crudTitulo}>Lista de Administradores</h1>
      
      <div className={style.crudFormulario}>
        <input
          type="text"
          name="nome"
          placeholder="Nome Completo"
          value={form.nome}
          onChange={handleChange}
          className={style.crudInput}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className={style.crudInput}
        />
        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={form.cpf}
          onChange={handleChange}
          className={style.crudInput}
        />
        
        {indiceEdicao === null ? (
          <Botao onClick={handleAdd} className={style.crudBotaoAdicionar} color={'lightBlueButton'}>Adicionar</Botao>
        ) : (
          <Botao onClick={handleSave} className={style.crudBotaoSalvar} color={'lightBlueButton'}>Salvar</Botao>
        )}
      </div>

      <ul className={style.crudLista}>
        {usuarios.map((usuario, index) => (
        <div className={style.rolagem}>
        <div className={style.area}>
          <li key={index} className={style.crudItem}>
            <p className={style.crudItemTexto}><strong>Nome:</strong> {usuario.nome}</p>
            <p className={style.crudItemTexto}><strong>Email:</strong> {usuario.email}</p>
            <p className={style.crudItemTexto}><strong>CPF:</strong>  {usuario.cpf}</p>
            <Botao onClick={() => handleEdit(index)} className={style.crudBotaoEditar} color={'lightBlueButton'}>Editar</Botao>
            <Botao onClick={() => handleDelete(index)} className={style.crudBotaoExcluir} color={'lightBlueButton'}>Excluir</Botao>
          </li>
        </div>
        </div>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
