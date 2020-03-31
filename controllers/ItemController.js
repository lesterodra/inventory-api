 
const { Item }  = require('../models');
const BaseController = require('./BaseController'); 

class ItemController extends BaseController {
  constructor() {
    super(Item);
  }
}

module.exports = ItemController;