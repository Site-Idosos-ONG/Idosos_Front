import React from "react";
import style from "./ImputAdm.module.css";

function ImputAdm({ type, name, placeholder, onChange, value, label, icon }) {
  return (
    <div className={style.inputContainer}>
      {label && <label className={style.label}>{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={style.input}
      />
      {icon && <img src={icon} alt="icon" className={style.icon} />}
    </div>
  );
}

export default ImputAdm;
