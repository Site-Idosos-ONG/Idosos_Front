import style from './Botao.module.css';

function Botao({ children, onClick }) {
    return (
        <button className={style.botao} onClick={onClick}>
            {children}
        </button>
    );
}

export default Botao;