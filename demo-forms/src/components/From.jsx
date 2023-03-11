import { useState } from "react";
import style from "./From.module.css";

// * funcion que el valor sea de tipo email
const validate = (form, setErrors, errors) => {
  // * si email no exite o esta vacio se ejecutara esto
  if (!form.email) setErrors({ ...errors, email: "Email vacío" });
  // * si no esta vacio
  else {
    // ! comprobara que si sea un email
    // * si lo es seteara el error como vacion
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.email)) {
      setErrors({ ...errors, email: "" });
    } 
    // * si no lo es seteara el error como invalido
    else {
      setErrors({ ...errors, email: "Email inválido" })
    };
  }
};

const Form = () => {
  // * Estado para recibir el valor de los inputs
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // * Estado para recibir el valor de los errores
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // * El manejador que escucha cuando hay un cambio en los inputs
  const handleChange = (event) => {
    // * la propiedad sera igual al name del input
    const property = event.target.name;
    // * El valor sera igual al valor del input
    const value = event.target.value;

    // * cambio la informacion del estado por la del input
    setForm({ ...form, [property]: value }); // cambio form...
    // * valido la informacion
    validate({ ...form, [property]: value }, setErrors, errors);
  };

  // * manejador del evento de persionar el boton de submit
  const submitHandler = (event) => {
    // * este metodo previene que la ventana se recargue
    // ! Esto solo se utiliza en los submit por que son los unicos que hacen recargar la ventana
    event.preventDefault();
    alert("LOGIN EXITOSO");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="username">email:</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          className={errors.email ? style.error : style.success}
        />
        <span>{errors.email}</span>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Form;
