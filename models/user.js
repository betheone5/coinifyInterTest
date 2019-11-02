'use strict';
const User = sequelize.define('user', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    balance: DataTypes.INTEGER,
  });

module.exports = User