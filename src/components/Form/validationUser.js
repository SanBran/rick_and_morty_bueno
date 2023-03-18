const validationUser = (userData, errors, setErrors) => {
  //USERNAME
  if (!userData.username)
    setErrors({ ...errors, username: "Por favor completa este campo" });
  else if (userData.username.length > 35)
    setErrors({
      ...errors,
      username: "Este campo no puede superar los 35 caracteres",
    });
  else if (
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)
  ) {
    setErrors({ ...errors, username: "Email inválido" });
  } else {
    setErrors({ ...errors, username: "" });
  }
};

export default validationUser;
