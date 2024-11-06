import style from "./EditarPerfilOP.module.css";
import Perfil from "../../assets/Img/Perfil.svg";
import Imput from "../Imput/Imput";
import Editar from "../../assets/Img/Editar.png";
import Botao from "../Botao/Botao";

function EditarPerfilOP() {

    

    return (
        <div className={style.conteiner}>
            <div className={style.quadrado}>
                <div className={style.segimento}>
                    <div className={style.icon}>
                        <img src={Perfil} alt="Perfil" />
                    </div>
                    <Imput
                        type="text"
                        placeholder={"XXX XXX XXX"}
                        label="Nome Completo:"
                        imagen4={Editar}
                    />
                    <Imput
                        type="text"
                        placeholder={'xxxxx@gmail.com'}
                        label="Email:"
                        imagen4={Editar}
                    /> 

                    <Botao children={"Salvar"} onClick={console.log("teste")} color={'blueButton'} />
                </div>
            </div>
        </div>
    );
}

export default EditarPerfilOP;