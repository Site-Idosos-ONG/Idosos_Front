import style from './RefazerSenha.module.css';
import Imput from '../../component/Imput/Imput';
import emailIcon from '../../assets/Img/Emeil.svg';
import senhaIcon from '../../assets/Img/Senha.svg';
import olhoFechadoIcon from '../../assets/Img/Blind.svg';
import Branco from '../../assets/Img/Branco.svg';
import Botao from '../../component/Botao/Botao';
import { useState } from 'react';

function RefazerSenha() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    return(
        <div className={style.container}>
        <div className={style.quadrado1}>
            <h1>REDEFINIÇÃO DE SENHA</h1>
            <h6>Para redefinir sua senha, digite seu <span className={style.italico}>email</span></h6>
        </div>
        <div className={style.quadrado2}>
            <h2>COMFIRMAÇÃO DE EMAIL</h2>
            <h6>Por favor, confirme seu <span className={style.italico}>email</span> para redefinir sua senha</h6>
            <Imput
                imagen1={emailIcon}
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                imagen2={Branco}
            /> 
            <Botao children={"Enviar"} onClick={() => console.log(email, password)}/>
        </div>
    </div>
    );
}

export default RefazerSenha;