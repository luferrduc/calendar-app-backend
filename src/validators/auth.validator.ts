import { body } from "express-validator"



export const registerValidator = [
  body('name')
    .notEmpty().withMessage('name is required')
    .isString().withMessage('name must be a string')
    .isLength({ min: 3 }).withMessage('name must have at least 3 characters'),
  body('email')
    .notEmpty().withMessage('email is required')
    .isEmail(),
  body('password')
    .notEmpty().withMessage('password is required')
    // .isStrongPassword({ 
    //   minLength: 6,
    //   minLowercase: 3,
    //   minNumbers: 1,
    //   minUppercase: 1
    // })
    .isLength({ min: 6 }).withMessage("password must be at least 6 characters")
    .matches(/[a-z].*[a-z].*[a-z]/).withMessage("password must contain at least one lowercase letter")
    .matches(/[A-Z]/).withMessage("password must contain at least one uppercase letter")
    .matches(/[0-9]/).withMessage("password must contain at least one number")
]


export const loginValidator = [
  body('email')
    .notEmpty().withMessage('email is required')
    .isEmail(),
  body('password')
    .notEmpty().withMessage('password is required')
    .isLength({ min: 6 }).withMessage("password must be at least 6 characters")
    .matches(/[a-z].*[a-z].*[a-z]/).withMessage("password must contain at least one lowercase letter")
    .matches(/[A-Z]/).withMessage("password must contain at least one uppercase letter")
    .matches(/[0-9]/).withMessage("password must contain at least one number")
]