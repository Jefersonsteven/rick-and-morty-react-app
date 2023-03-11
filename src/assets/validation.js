const validateUsername = (data, message, setMessage) => {

  if (!data.username) {
    setMessage({ ...message, ['username']: 'Esta Vacio' })
  } else {
    if (/^[\w-.]+@([\w-]+\.)+[\w]{3}$/.test(data.username) && data.username.length < 35) {
      setMessage({ ...message, ['username']: true })
    } else {
      setMessage({ ...message, ['username']: 'No es Valido' })
    }
  }

}

const validatePassword = (data, message, setMessage) => {

  if(!data.password){
    setMessage({ ...message, ['password']: 'Esta Vacio' })
  } else {
    if(/^(?=.*\d)[\w\d]{6,10}$/.test(data.password)){
      setMessage({ ...message, ['password']: true })
    } else {
      setMessage({ ...message, ['password']: 'Debe tener minimo un numero /n y una longitud de entre <br/> y 10 caracteres, ' })
    }
  }

}

export { validateUsername, validatePassword }