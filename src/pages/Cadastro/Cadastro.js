import style from './Cadastro.module.css';
import Imput from '../../component/Imput/Imput';
import identidade from '../../assets/Img/Identidade.svg';
import emailUserIcon from '../../assets/Img/EmailUser.svg';
import Botao from '../../component/Botao/Botao';
import CPF from '../../assets/Img/CPF.svg';
import senha from '../../assets/Img/Senha.svg';
import olhoFechadoIcon from '../../assets/Img/Blind.svg';
import olhoAbertoIcon from '../../assets/Img/Eye.svg';
import Branco from '../../assets/Img/Branco.svg';
import { useState } from 'react';
import { handleCPFChange } from '../../service/FuncoesGerais';
import { useNavigate } from 'react-router-dom';
import { postCadastroUsuario } from '../../service/API_Fumcition';

function Cadastro() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');


    const handleNameChange = (e) => {
        const name = e.target.value;
        if (/^[A-Za-z ]*$/.test(name)) {
            setName(name);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePassword2Change = (e) => {
        setPassword2(e.target.value);
    };

    const handleInputChange = (e) => {
        const cpfFormatado = handleCPFChange(e);
        setCpf(cpfFormatado);
    };

    const navigate = useNavigate();

    // Função de validação
    const validarFormulario = () => {
        if (!name, !email, !password, !password2, !cpf) {
            setError('Todos os campos são obrigatórios.');
            return false;
        }

        if (!name) {
            setError('Nome é obrigatório.');
            return false;
        }

        // Exemplo básico de validação de CPF (11 dígitos, sem espaços ou caracteres especiais)
        if (!cpf || cpf.length !== 14) {
            setError('CPF inválido. Deve conter 11 dígitos.');
            return false;
        }

        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setError('Email inválido.');
            return false;
        }

        if (!password || !password2) {
            setError('As senhas são obrigatórias.');
            return false;
        }

        if (password !== password2) {
            setError('As senhas não coincidem.');
            return false;
        }

        if (password.length < 8 || password2.length < 8) {
            setError('A senha deve conter pelo menos 8 dígitos.');
            return false;
        }

        setError(''); // Limpa o erro se tudo estiver correto
        return true;
    };

    const handleCadastroClick = async () => {
        if (validarFormulario()) {
            const dados = [{
                email: email,
                senha: password,
                nome: name,
                cpf: cpf,
                adm: 0
            }];
    
            try {
                const response = await postCadastroUsuario(dados);
                setSuccess('Cadastro realizado com sucesso!');
                navigate('/');
            } catch (error) {
                console.log(error);
                setError('Erro ao realizar o cadastro. Tente novamente.');
            }
        }
    };

    return (
        <div className={style.container}>
            <div className={style.quadrado1}>
                <h2>OLÁ</h2>
                <h6>Realize seu <span className={style.italico}>cadastro</span></h6>
            
            <Imput value={name}
                imagen1={identidade}
                type="text"
                placeholder="Nome Completo"
                onChange={handleNameChange}
                imagen2={Branco}
            />
            <Imput value={cpf}
                imagen1={CPF}
                type="text"
                placeholder="CPF"
                onChange={handleInputChange}
                imagen2={Branco}
            />
            <Imput
                imagen1={emailUserIcon}
                type="email"
                placeholder="Email"
                onChange={handleEmailChange}
                imagen2={Branco}
            />
            <Imput
                imagen1={senha}
                type="password"
                placeholder="Senha"
                onChange={handlePasswordChange}
                imagen2={olhoFechadoIcon}
                imagen3={olhoAbertoIcon}
            />
            <Imput
                imagen1={senha}
                type="password"
                placeholder="Confirmar Senha"
                onChange={handlePassword2Change}
                imagen2={olhoFechadoIcon}
                imagen3={olhoAbertoIcon}
            />

            {error && <p className={style.erroMensagem}>{error}</p>}{/* Exibe o erro, se houver */}
            {success && <p className={style.sucessoMensagem}>{success}</p>}{/* Exibe a mensagem de sucesso */}


            <Botao 
                children={"Cadastrar"} 
                onClick={handleCadastroClick} 
                color={'blueButton'}
            />
            </div>
        
        <div className={style.quadrado2}>
                <h1>SEJA MUITO BEM VINDO </h1>
                <h6>Para começar a fazer parte desse <span className={style.italico}>projeto</span> é necessário preencher algumas <span className={style.italico}>informações</span></h6>
            </div>
        </div>

        
        
    );
}


export default Cadastro;
