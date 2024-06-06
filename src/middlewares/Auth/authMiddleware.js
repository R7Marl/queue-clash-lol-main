export const checkLogin = (req, res, next) => {
  const { email, password } = req.body;
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!email || !password) return res.status(400).send("Faltan datos");
  if (!regex.test(email)) return res.status(400).send("Email invalido");
  next();
};

export const checkRegister = (req, res, next) => {
  const { name, email, password, sexo, age } = req.body;
  if (!name || !email || !password || !sexo || !age) return res.status(400).send("Faltan datos");
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!regex.test(email)) return res.status(400).send("Email invalido");
  if (password.length < 6) return res.status(400).send("La contraseña debe tener al menos 6 caracteres");
  if (age < 18) return res.status(400).send("Debe ser mayor de 18 años");
  if (name.length < 3) return res.status(400).send("El nombre debe tener al menos 3 caracteres");
  next();
};
