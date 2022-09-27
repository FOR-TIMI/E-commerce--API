const { Model, DataTypes, DATE } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
  // Id column
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },

  product_id:{
    type: DataTypes.INTEGER,
    references: {
      model : 'product',
      key : 'id'
    },
    onUpdate: 'cascade',
    onDelete: 'cascade'
  },

  tag_id:{
    type: DataTypes.INTEGER,
    references: {
      model : 'tag',
      key: 'id'
    },
    onUpdate: 'cascade',
    onDelete: 'cascade'
  }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
