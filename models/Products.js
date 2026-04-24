module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    serial_number: DataTypes.INTEGER,
    price: DataTypes.FLOAT 
  });
//relations
  Product.associate = (models) => {
    Product.belongsToMany(models.Order, {
      through: 'OrderProducts',
      foreignKey: 'productId'
    });
  };
  return Product;
};