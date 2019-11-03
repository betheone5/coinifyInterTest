'use strict';
const { Sequelize } = require('sequelize');

const User = sequelize.define('user', {
    id: { 
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    name: Sequelize.STRING,
    balance: Sequelize.INTEGER,
  },{
    timestamps: false
});

module.exports = User