// const yup = require("yup");
// const validate = (schema) => async (req, res, next) => {
//   try {
//     await schema.validate(req.body, { abortEarly: false });
//     return next();
//   } catch (err) {
//     return res
//       .status(500)
//       .json({
//         success: false,
//         message: "Validation failed",
//         errors: err.errors,
//       });
//   }
// };

// module.exports = validate(schema);
