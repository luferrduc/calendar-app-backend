import { body } from "express-validator"



export const createValidator = [
  body('title')
    .notEmpty().withMessage('title is required')
    .isString().withMessage('title must be a string')
    .isLength({ min: 3 }).withMessage('title must have at least 3 characters'),
  body('notes')
    .isString().optional().withMessage('notes must be a string')
    .isLength({ min: 3 }).withMessage('notes must have at least 3 characters'),
  body('start')
    .toDate()
    .notEmpty().withMessage('start is required')
    .isDate().withMessage('start must be a valid date'),
  body('end')
    .toDate()
    .notEmpty().withMessage('end is required')
    .isDate().withMessage('end must be a valid date'),
  body('bgColor')
    .isString().optional().withMessage('bgColor must be a string')
    .isLength({ min: 3 }).withMessage('bgColor must have at least 3 characters'),

]
