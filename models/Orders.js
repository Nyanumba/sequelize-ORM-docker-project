module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    order_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_amount: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    }
  });
//relations
Order.associate = (models) => {
    Order.belongsTo(models.Customer, {
      foreignKey: 'customerId'
    });

    Order.belongsToMany(models.Product, {
      through: 'OrderProducts',
      foreignKey: 'orderId'
    });
  };

  return Order;
};