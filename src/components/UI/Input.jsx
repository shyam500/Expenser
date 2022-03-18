import { Fragment } from "react";
import classes from "./Input.module.css";

const Input = ({
    id, 
  label,
  onchange,
  onclick = null,
  type,
  value, 
  placeholder,
}) => {
  return (
    <section className={classes.form_container}>
      <label htmlFor={id} className={classes.label} >{label}</label>
      <input
        id={id}
        onChange={onchange}
        type={type}
        value={value}
        onClick={onclick}
        placeholder={placeholder}
        className={classes.input}
      />
    </section>
  );
};

export default Input;
