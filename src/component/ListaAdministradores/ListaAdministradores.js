import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import style from "./ListaAdministradores.module.css";
import { getListaAdministradores, updateAdministrador, deleteAdministrador } from "../../service/API_Fumcition";

function Crud() {
  const [form, setForm] = useState({ nome: "", email: "", cpf: "" });
  const [usuarios, setUsuarios] = useState([]);
  const [indiceEdicao, setIndiceEdicao] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [usuarioParaDeletar, setUsuarioParaDeletar] = useState(null);

  useEffect(() => {
    const fetchAdministradores = async () => {
      try {
        const data = await getListaAdministradores();
        setUsuarios(data);
      } catch (error) {
        console.error("Erro ao carregar administradores:", error);
      }
    };

    fetchAdministradores();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "cpf") {
      let numericValue = value.replace(/\D/g, "");
      numericValue = numericValue
        .slice(0, 11)
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      setForm((prevForm) => ({ ...prevForm, cpf: numericValue }));
    } else {
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
  };

  const handleDeleteConfirmation = (index) => {
    setUsuarioParaDeletar(index);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    const idUsuario = usuarios[usuarioParaDeletar].id;
    try {
      await deleteAdministrador(idUsuario);
      const updatedUsuarios = usuarios.filter((_, i) => i !== usuarioParaDeletar);
      setUsuarios(updatedUsuarios);
      setUsuarioParaDeletar(null);
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error("Erro ao deletar administrador:", error);
    }
  };

  const handleEdit = (index) => {
    setIndiceEdicao(index);
    setForm(usuarios[index]);
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    try {
      const usuarioAtualizado = { ...form };
      const idUsuario = usuarios[indiceEdicao].id;
      await updateAdministrador(idUsuario, usuarioAtualizado);
      const updatedUsuarios = [...usuarios];
      updatedUsuarios[indiceEdicao] = usuarioAtualizado;
      setUsuarios(updatedUsuarios);
      setForm({ nome: "", email: "", cpf: "" });
      setIndiceEdicao(null);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Erro ao atualizar administrador:", error);
    }
  };

  return (
    <div className={style.container_geral}>
      <h1 className={style.crudTitulo}>Lista de Administradores</h1>
      {usuarios.length === 0 ? (
        <p className={style.NaoTem}>Nenhum administrador cadastrado.</p>
      ) : (
        <ul className={style.crudLista}>
          {usuarios.map((usuario, index) => (
            <li key={index} className={style.crudItem}>
              <p className={style.crudItemTexto}><strong>Nome:</strong> {usuario.nome}</p>
              <p className={style.crudItemTexto}><strong>Email:</strong> {usuario.email}</p>
              <p className={style.crudItemTexto}><strong>CPF:</strong> {usuario.cpf}</p>

              <FontAwesomeIcon
                icon={faEdit}
                onClick={() => handleEdit(index)}
                className={style.crudIconEditar}
              />
              <FontAwesomeIcon
                icon={faTrash}
                onClick={() => handleDeleteConfirmation(index)}
                className={style.crudIconExcluir}
              />
            </li>
          ))}
        </ul>
      )}

      {isModalOpen && (
        <div className={style.modal}>
          <div className={style.modalContent}>
            <h2>Editar Administrador</h2>
            <label>
              Nome:
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </label>
            <label>
              CPF:
              <input
                type="text"
                name="cpf"
                value={form.cpf}
                onChange={handleChange}
              />
            </label>
            <button onClick={handleSave}>Salvar</button>
            <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
          </div>
        </div>
      )}

      {isDeleteModalOpen && (
        <div className={style.modal}>
          <div className={style.modalContent}>
            <h2>Confirmação</h2>
            <p>Tem certeza que deseja excluir este administrador?</p>
            <button onClick={handleDelete}>Sim</button>
            <button onClick={() => setIsDeleteModalOpen(false)}>Não</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Crud;
