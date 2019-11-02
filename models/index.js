global.Sequelize = require('sequelize');
global.sequelize = new Sequelize("ctest", "martiannetwork", "Azure7911?", {
  host: "martiandb.mysql.database.azure.com",
  port: "3306",
	//logging: false,
	dialect: 'mysql',
	pool: {
		max: 50,
		min: 0,
		idle: 10000
	}
});

// TABLES

global.User = require('./user.js');
global.currency = require('./currency.js');