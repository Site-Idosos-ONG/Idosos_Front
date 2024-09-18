import style from './RefazerSenha.module.css';
import Imput from '../../component/Imput/Imput';
import emailIcon from '../../assets/Img/Emeil.svg';
import Branco from '../../assets/Img/Branco.svg';
import Botao from '../../component/Botao/Botao';
import { useState } from 'react';
import { postVerificarEmail } from '../../service/API_Fumcition';

function RefazerSenha() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleVerificarClick = async () => {
        try {
            const response = await postVerificarEmail(email);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

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
                onChange={handleEmailChange}
                imagen2={Branco}
            /> 
            <Botao children={"Enviar"} onClick={() => handleVerificarClick()} color={'blueButton'}/>
        </div>
    </div>
    );
}

export default RefazerSenha;