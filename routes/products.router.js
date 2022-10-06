const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const products = [];
  for (let index = 0; index < 100; index++) {
    products.push({
      name: faker.commerce.product(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '999') {
    res.status(404).json({ message: 'Not found' });
  } else {
    res.status(200).json({
      id,
      name: 'product 1',
      price: 100,
    });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  res.status(201).json({
    message: 'product created',
    data: body,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'updated product',
    data: body,
    id,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'delete product',
    id,
  });
});

module.exports = router;
