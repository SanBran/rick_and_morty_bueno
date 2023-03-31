const validationPass = (userData, errors, setErrors) => {
  //PASSWORD

  if (userData.password.length < 6 || userData.password.length > 10) {
    setErrors({
      ...errors,
      password:
        "La longitud del password tiene que ser entre 6 y 10 caracteres",
    });
  } else if (!/\d/.test(userData.password)) {
    setErrors({
      ...errors,
      password: "El password debe contener al menos un número",
    });
  } else {
    setErrors({ ...errors, password: "" });
  }
};

export default validationPass;
