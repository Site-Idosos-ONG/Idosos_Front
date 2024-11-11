import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Botao from "../Botao/Botao";
import style from "./ListaAdministradores.module.css";
import ImputAdm from "../ImputAdm/ImputAdm";

function Crud() {
  const [form, setForm] = useState({ nome: "", email: "", cpf: "" });
  const [usuarios, setUsuarios] = useState([]);
  const [indiceEdicao, setIndiceEdicao] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "cpf") {
      // Remove tudo o que não é número
      let numericValue = value.replace(/\D/g, "");
      // Limita o CPF a 11 dígitos e aplica a máscara
      numericValue = numericValue.slice(0, 11)
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      setForm((prevForm) => ({ ...prevForm, cpf: numericValue }));
    } else {
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
  };

  const handleAdd = () => {
    const existeUsuario = usuarios.some(
      (usuario) => usuario.cpf === form.cpf || usuario.email === form.email || usuario.nome === form.nome
    );

    if (existeUsuario) {
      alert("Usuário com o mesmo CPF, email ou nome já foi adicionado.");
      return;
    }

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
        <ImputAdm 
          type="text"
          name="nome"
          placeholder="Nome Completo"
          onChange={handleChange}
          value={form.nome}
          className={style.Input}
        />
        <ImputAdm 
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={form.email}
          className={style.Input}
        />
        <ImputAdm
          type="text"
          name="cpf"
          placeholder="CPF"
          onChange={handleChange}
          value={form.cpf}
          className={style.Input}
        />
        
        {indiceEdicao === null ? (
          <Botao onClick={handleAdd} className={style.crudBotaoAdicionar} color={'lightBlueButton'}>Adicionar</Botao>
        ) : (
          <Botao onClick={handleSave} className={style.crudBotaoSalvar} color={'lightBlueButton'}>Salvar</Botao>
        )}
      </div>

      <ul className={style.crudLista}>
        {usuarios.map((usuario, index) => (
          <li key={index} className={style.crudItem}>
            <p className={style.crudItemTexto}><strong>Nome:</strong> {usuario.nome}</p>
            <p className={style.crudItemTexto}><strong>Email:</strong> {usuario.email}</p>
            <p className={style.crudItemTexto}><strong>CPF:</strong>  {usuario.cpf}</p>
            
            {/* Ícone para editar */}
            <FontAwesomeIcon 
              icon={faEdit} 
              onClick={() => handleEdit(index)} 
              className={style.crudIconEditar} 
            />

            {/* Ícone para excluir */}
            <FontAwesomeIcon 
              icon={faTrash} 
              onClick={() => handleDelete(index)} 
              className={style.crudIconExcluir} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Crud;
