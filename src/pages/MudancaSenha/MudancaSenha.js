import style from './MudancaSenha.module.css';
import Imput from '../../component/Imput/Imput';
import senhaIcon from '../../assets/Img/Senha.svg';
import olhoFechadoIcon from '../../assets/Img/Blind.svg';
import olhoAbertoIcon from '../../assets/Img/Eye.svg';
import Botao from '../../component/Botao/Botao';
import { useState } from 'react';

function MudancaSenha() {
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const handleCheck = () => {
        if (password !== password2) {
            alert("Senhas diferentes");
        }
        else {
            alert("Senha alterada com sucesso");
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
                onChange={(e) => setPassword(e.target.value)}
                imagen2={olhoFechadoIcon}
                imagen3={olhoAbertoIcon}
            />
            <Imput
                imagen1={senhaIcon}
                type="password"
                placeholder="Comfirme sua Nova Senha"
                onChange={(e) => setPassword2(e.target.value)}
                imagen2={olhoFechadoIcon}
                imagen3={olhoAbertoIcon}
            />
            <Botao children={"Atualizar"} onClick={() => handleCheck()} color={'blueButton'}/>
        </div>
    </div>
    );
}

export default MudancaSenha;