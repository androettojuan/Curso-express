const Joi = require('joi');

const productIdSchema = Joi.string().uuid();
const productNameSchema = Joi.string().min(3).max(15);
const productPriceSchema = Joi.number().integer().min(10);
const productImageSchema = Joi.string().uri();

const createProductSchema = Joi.object({
  name: productNameSchema.required(),
  price: productPriceSchema.required(),
  image: productImageSchema.required(),
});

const updateProductSchema = Joi.object({
  name: productNameSchema,
  price: productPriceSchema,
  image: productImageSchema,
});

const getProductSchema = Joi.object({
  id: productIdSchema.required(),
});

module.exports = {
  createProductSchema,
  updateProductSchema,
  getProductSchema,
};
