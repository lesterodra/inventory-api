'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    amount: DataTypes.DOUBLE,
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
  };
  return Item;
};