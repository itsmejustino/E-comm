const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'Product',
        id: 'id',
      },
    },
    tag_id: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      unique: true,
      validate: {
        isDecimal: true
      }
    },
    // define columns
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
