// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.hasOne(Category,
  {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
  },
);
// Categories have many Products
Category.hasMany(Product,
{
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
}
)
// Tags have many Tags
Tag.hasMany(Product,
{
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
}
)
// Products has many Products
ProductTag.hasMany(Product,
{
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
}
)

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {through: ProductTag},
{
 
  onDelete: 'CASCADE',
}
)
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {through: ProductTag},
{
  onDelete: 'CASCADE',
}
)
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
