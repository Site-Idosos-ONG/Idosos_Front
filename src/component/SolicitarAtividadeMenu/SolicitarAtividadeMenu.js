import style from './SolicitarAtividadeMenu.module.css';
import Botao from '../Botao/Botao';
import { useState } from 'react';
import { postCriarAtividade } from '../../service/API_Fumcition';

function SolicitarAtividadeMenu() {
    const [titulo, setTitulo] = useState('');
    const [data, setData] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleTituloChange = (e) => {
        setTitulo(e.target.value);
    };

    const handleDataChange = (e) => {
        setData(e.target.value);
    };

    const handleDescricaoChange = (e) => {  
        setDescricao(e.target.value);
    };

    const handleSubmit = async () => {

        const dados = [{
            nome: titulo,
            data: data,
            descricao: descricao
        }];
        try {
            const response = await postCriarAtividade(dados);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className={style.container}>
            <div className={style.titulo}>
                <h1>Solicitar Atividade</h1>
                <Botao children={"Ver Minhas Atividades"} onClick={() => console.log('Entrar')} color={'blueButton'} />
            </div>
            <div className={style.quadrado}>
                <div className={style.inputContainer}>
                    <label>Titulo:</label>
                    <input type="text" value={titulo} onChange={handleTituloChange}/>
                </div>
                <div className={style.inputContainerData}>
                    <label>Data Prevista:</label>
                    <input type="date" value={data} onChange={handleDataChange}/>
                </div>
                <div className={style.inputContainerDescricao}>
                    <label>Descrição da atividade:</label>
                    <textarea type="text" value={descricao} onChange={handleDescricaoChange}/>
                </div>
                <div className={style.botao}>
                    <Botao children={"Enviar"} onClick={() => handleSubmit()} color={'blueButton'} />
                </div>
            </div>
        </div>
    );
}

export default SolicitarAtividadeMenu;