const express = require("express");
const { register } = require("../controllers/authController");
// const registerSchema = require("../validations/registerSchema");
const validate = require("../middlewares/validate");
const router = express.Router();
const yup = require("yup");
//****RegisterAPI*****//
const schema = yup.object({
    username: yup.string().min(3).max(255).required(),
    password: yup.string().min(6).max(255).required(),
    email: yup.string().email().required(),
    isAdmin: yup.boolean().default(false),
  });
  
router.post("/register", register);

module.exports = router;
