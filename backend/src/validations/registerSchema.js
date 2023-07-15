const yup = require("yup");

const registerSchema = yup.object({
  username: yup.string().min(3).max(255).required(),
  password: yup.string().min(6).max(255).required(),
  email: yup.string().email().required(),
  isAdmin: yup.boolean().default(false),
});

module.exports = registerSchema;
