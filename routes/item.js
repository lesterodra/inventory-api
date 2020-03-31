
const express = require('express');
const router = express.Router();

const Item = new (require('../controllers/ItemController'))();

router.get('/', async (req, res, next) => {
  const items = await Item.list();

  return res.json({
    data: items,
  });
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  const item = await Item.find(id);
  return res.json({
    data: item,
  });
});

router.post('/', async (req, res, next) => {
  const { body } = req;
  const newItem = await Item.create(body);
  return res.json({
    data: newItem,
  });
});

router.put('/:id', async (req, res, next) => {
  const { body, params: { id } } = req;
  const item = await Item.update(id ,body);
  return res.json({
    data: item
  });
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  Item.delete(id);
  return res.json({
    data: 'deleted',
  });
});

module.exports = router;