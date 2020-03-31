
const express = require('express');
const router = express.Router();

const Item = new (require('../controllers/ItemController'))();

router.get('/', async (req, res, next) => {
  try {
  const items = await Item.list();
  return res.json({
    data: items,
  });
  } catch(error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await Item.find(id);
    return res.json({
      data: item,
    });
  } catch(error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
  const { body } = req;
  const newItem = await Item.create(body);
  return res.json({
    data: newItem,
  });
  } catch(error) {
    next(error);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { body, params: { id } } = req;
    const item = await Item.update(id ,body);
    return res.json({
      data: item
    });
  } catch(error) {
    next(error);
  } 
});

router.delete('/:id', async (req, res, next) => {
  try { 
    const { id } = req.params;
    await Item.delete(id);
    return res.json({
      data: 'deleted',
    });
  } catch(error) {
    next(error);
  }
});

module.exports = router;