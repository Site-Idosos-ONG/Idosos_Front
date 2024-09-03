import style from './Imput.module.css';

function Imput({ type, placeholder, value, onChange, imagen1, imagen2 }) {
    return (
        <div className={style.inputContainer}>
            <img src={imagen1} className={style.icon} />
            <input
                className={style.input}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <img src={imagen2} className={style.icon2} />
        </div>
    );
}

export default Imput;
