import style from "./EditarPerfilAdm.module.css";
import Perfil from "../../assets/Img/Perfil.svg";
import ImputAdm from "../ImputAdm/ImputAdm";
import Editar from "../../assets/Img/Editar.png";
import Botao from "../Botao/Botao";
import { useState, useEffect } from "react";
import  { postProcurarPerfil, postEditarPerfil }  from "../../service/API_Fumcition";

function EditarPerfilOP() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState(String(localStorage.getItem("id")));
    const [nomeNovo, setNomeNovo] = useState("");
    const [emailNovo, setEmailNovo] = useState("");

    useEffect(() => {

        const fetchData = async () => {

            const dados = {
                usuario_id: id
            }

            try {
                const response = await postProcurarPerfil(dados);
                setNome(response.nome);
                setEmail(response.email);
            } catch (error) {
                console.log("Erro na chamada de editar perfil:", error);
            }
        };
        fetchData();

    }, []);

    const handleNomeChange = (e) => {
        setNomeNovo(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmailNovo(e.target.value);
    };

    const handleEditClick = async () => {

        const dados = {
            nome: nomeNovo,
            email: emailNovo,
            usuario_id: id
        };

        try {
            const response = await postEditarPerfil(dados);
            console.log(response);
        } catch (error) {
            console.log("Erro na chamada de editar perfil:", error);
        }
    }

    return (
        <div className={style.conteiner}>
            <div className={style.quadrado}>
                <div className={style.segimento}>
                    <div className={style.icon}>
                        <img src={Perfil} alt="Perfil" />
                    </div>
                    <ImputAdm
                        type="text"
                        placeholder={nome}
                        label="Nome Completo:"
                        imagen4={Editar}
                        onChange={handleNomeChange}
                    />
                    <ImputAdm
                        type="text"
                        placeholder={email}
                        label="Email:"
                        imagen4={Editar}
                        onChange={handleEmailChange}
                    /> 

                    <Botao children={"Salvar"} onClick={handleEditClick} color={'lightBlueButton'} />
                </div>
            </div>
        </div>
    );
}

export default EditarPerfilOP;