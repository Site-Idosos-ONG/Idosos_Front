import style from './Login.module.css';
import Imput from '../../component/Imput/Imput';
import emailIcon from '../../assets/Img/Emeil.svg';
import senhaIcon from '../../assets/Img/Senha.svg';
import olhoFechadoIcon from '../../assets/Img/Blind.svg';
import olhoAbertoIcon from '../../assets/Img/Eye.svg';
import Branco from '../../assets/Img/Branco.svg';
import { useState } from 'react';
import Botao from '../../component/Botao/Botao';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../service/API_Fumcition';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = async () => {
        const dados = [{
            email: email,
            password: password
        }]

        try {
            const response = await postLogin(dados);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
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
                    onChange={handleEmailChange}
                    imagen2={Branco}
                />
                <Imput
                    imagen1={senhaIcon}
                    type="password"
                    placeholder="Senha"
                    onChange={handlePasswordChange}
                    imagen2={olhoFechadoIcon}
                    imagen3={olhoAbertoIcon}
                />
                <h5>Esqueceu a sua senha? Clique <span className={style.italico} onClick={() => navigate('/redefinicao-senha')}>aqui</span> para redefinir</h5>
                <Botao children={"Entrar"} onClick={() => handleLogin()} color={'blueButton'} />
            </div>
        </div>
    );
}

export default Login;
