// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {

//id Column
id : {
    // Integer
    type: DataTypes.INTEGER,
   // Doesn't allow null values
   allowNull: false,
   // Uses auto increment
   autoIncrement: true,
   // Set as primary key
    primaryKey:true

},

// product_name column
productName: {
  // String
  type: DataTypes.STRING,
  // Doesn't allow null values
  allowNull: false,
},

// price column
price :{
  // Decimal
  type: DataTypes.DECIMAL,

  // Doesn't allow null values
  allowNull: false,

  // Validates that the value is a decimal
  validate : {
    isDecimal : true
  }

},

// stock column
stock : {

  // Integer
  type : DataTypes.INTEGER,
  // Doesn't allow null values
  allowNull: false,
  // Set a default value of 10
  defaultValue: 10,
  // Validates that the value is numeric
  validate: {
    isNumeric: true
  }
 
},

//Category column
 // References the category model's id
categoryId: {
  type : DataTypes.INTEGER,
  references: {
    model: 'category',
    key: 'id'
  },
  onUpdate: 'cascade',
  onDelete: 'cascade'
}
,


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
