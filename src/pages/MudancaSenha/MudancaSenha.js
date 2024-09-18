import style from './MudancaSenha.module.css';
import Imput from '../../component/Imput/Imput';
import senhaIcon from '../../assets/Img/Senha.svg';
import olhoFechadoIcon from '../../assets/Img/Blind.svg';
import olhoAbertoIcon from '../../assets/Img/Eye.svg';
import Botao from '../../component/Botao/Botao';
import { useState } from 'react';
import { postMudarSenha } from '../../service/API_Fumcition';
import { useParams } from 'react-router-dom';

function MudancaSenha() {
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const { id } = useParams();
    const idInt = parseInt(id, 10);

    const handleCheck = () => {
        if (password !== password2) {
            alert("Senhas diferentes");
        }
        else {
            alert("Senha alterada com sucesso");
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePassword2Change = (e) => {
        setPassword2(e.target.value);
    };

    const handleMudarSenhaClick = async () => {
        const dados = {
            nova_senha: password,
        }

        try {
            const response = await postMudarSenha(dados, idInt);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }



    return(
        <div className={style.container}>
        <div className={style.quadrado1}>
            <h1>REDEFINIÇÃO DE SENHA</h1>
            <h6>Esta quase terminando, digite sua nova <span className={style.italico}>senha</span></h6>
        </div>
        <div className={style.quadrado2}>
            <h2>CRIE SUA NOVA SENHA</h2>
            <h5>Porfavor, digite sua nova <span className={style.italico}>senha</span></h5>
            <Imput
                imagen1={senhaIcon}
                type="password"
                placeholder="Nova Senha"
                onChange={handlePasswordChange}
                imagen2={olhoFechadoIcon}
                imagen3={olhoAbertoIcon}
            />
            <Imput
                imagen1={senhaIcon}
                type="password"
                placeholder="Comfirme sua Nova Senha"
                onChange={handlePassword2Change}
                imagen2={olhoFechadoIcon}
                imagen3={olhoAbertoIcon}
            />
            <Botao children={"Atualizar"} onClick={() => handleMudarSenhaClick()} color={'blueButton'}/>
        </div>
    </div>
    );
}

export default MudancaSenha;