import style from "./EditarPerfilOP.module.css";
import Perfil from "../../assets/Img/Perfil.svg";
import Imput from "../Imput/Imput";
import Editar from "../../assets/Img/Editar.png";
import Botao from "../Botao/Botao";
import { useState, useEffect } from "react";
import  { postEditarPerfil }  from "../../service/API_Fumcition";

function EditarPerfilOP() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState(String(localStorage.getItem("id")));

    useEffect(() => {

        const fetchData = async () => {

            const dados = {
                usuario_id: id
            }

            try {
                const response = await postEditarPerfil(dados);
                setNome(response.nome);
                setEmail(response.email);
            } catch (error) {
                console.log("Erro na chamada de editar perfil:", error);
            }
        };
        fetchData();

    }, []);
    

    return (
        <div className={style.conteiner}>
            <div className={style.quadrado}>
                <div className={style.segimento}>
                    <div className={style.icon}>
                        <img src={Perfil} alt="Perfil" />
                    </div>
                    <Imput
                        type="text"
                        placeholder={nome}
                        label="Nome Completo:"
                        imagen4={Editar}
                    />
                    <Imput
                        type="text"
                        placeholder={email}
                        label="Email:"
                        imagen4={Editar}
                    /> 

                    <Botao children={"Salvar"} onClick={console.log(nome)} color={'blueButton'} />
                </div>
            </div>
        </div>
    );
}

export default EditarPerfilOP;