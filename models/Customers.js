module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone_number: DataTypes.STRING  
  });
//relations
Customer.associate = (models) => {
    Customer.hasMany(models.Order, {
      foreignKey: 'customerId'
    });
  };

  
  return Customer;
};


