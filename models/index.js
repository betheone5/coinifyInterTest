global.Sequelize = require('sequelize');
global.sequelize = new Sequelize("ctest", "martiannetwork@martiandb", "Azure7911?", {
  host: "martiandb.mysql.database.azure.com",
  //port: "3306",
	//logging: false,
	dialect: 'mysql',
	pool: {
		max: 50,
		min: 0,
		idle: 10000
	}
});

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

// TABLES

global.User = require('./user.js');
global.Currency = require('./currency.js');