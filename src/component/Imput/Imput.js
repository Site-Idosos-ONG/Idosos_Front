import { useState } from 'react';
import style from './Imput.module.css';

function Imput({ type, placeholder, value, onChange, imagen1, imagen2, imagen3, imagen4, label }) {
    const [inputType, setInputType] = useState(type);
    const [currentImage, setCurrentImage] = useState(imagen2);

    const togglePasswordVisibility = () => {
        if (inputType === 'password') {
            setInputType('text');
            setCurrentImage(imagen3);
        } else {
            setInputType('password');
            setCurrentImage(imagen2);
        }
    };

    return (
        <div className={style.inputContainer}>
            <label className={style.label}>{label}</label>
            {imagen1 && <img src={imagen1} className={style.icon} alt="input icon" />}
            <input
                className={style.input}
                type={inputType}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {imagen4 && <img src={imagen4} className={style.icon} alt="input icon" />}
            {type === 'password' && (
                <img
                    src={currentImage}
                    className={style.icon2}
                    onClick={togglePasswordVisibility}
                    alt="toggle visibility"
                />
            )}
        </div>
    );
}

export default Imput;