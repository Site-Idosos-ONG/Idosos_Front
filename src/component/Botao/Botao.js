import style from './Botao.module.css';

function Botao({ children, onClick, color }) {
    const buttonClass = style[color] || style.defaultButton;

    return (
        <button className={buttonClass} onClick={onClick}>
            {children}
        </button>
    );
}

export default Botao;
