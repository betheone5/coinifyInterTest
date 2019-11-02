'use strict';

  const Currency = sequelize.define('currency', {
    id: {
        type: Sequelize.BIGINT,
        field: 'id',
        primaryKey: true,
		autoIncrement: true,
		allowNull: false,
    },
    type: {
        type: Sequelize.STRING(255),
		field: 'type',
		allowNull: true,
    },
    value: {
        type: Sequelize.STRING(255),
		field: 'value',
		allowNull: true,
    } 
  });

  module.exports = Currency