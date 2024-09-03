import style from './Login.module.css'
import Imput from '../../component/Imput/Imput';
import emailIcon from '../../assets/Img/Emeil.svg';
import senhaIcon from '../../assets/Img/Senha.svg';
import olhoFechadoIcon from '../../assets/Img/Blind.svg';
import Branco from '../../assets/Img/Branco.svg';
import { useState } from 'react';
import Botao from '../../component/Botao/Botao';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div className={style.container}>
            <div className={style.quadrado1}>
                <h1>BEM VINDO DE VOLTA</h1>
                <h6>Para conseguir ajudar a <span className={style.italico}>geração passada</span> é necessario realizar o <span className={style.italico}>login</span> na nossa pagina</h6>
            </div>
            <div className={style.quadrado2}>
                <h2>OLÁ!</h2>
                <h6>Entre com o <span className={style.italico}>login</span></h6>
                <Imput
                    imagen1={emailIcon}
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    imagen2={Branco}
                />
                <Imput
                    imagen1={senhaIcon}
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    imagen2={olhoFechadoIcon}
                />
                <h5>Esqueceu a sua senha? Clique <span className={style.italico}>aqui</span> para redefinir</h5>
                <Botao children={"Entrar"} onClick={() => console.log(email, password)}/>
            </div>
        </div>
    );
}

export default Login;