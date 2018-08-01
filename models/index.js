const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);


const User = db.define('users',{
  name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  slug: {
  	type: Sequelize.STRING
  },
  email: {
  	type: Sequelize.STRING,
  	allowNull: true
  },
  company: {
  	type: Sequelize.STRING,
  	allowNull: true
  }
});

const Role = db.define('roles',{
  name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  field: {
  	type: Sequelize.STRING,
  	allowNull: true
  }
})


module.exports = {
	db,
	models: {
		User,
		Role
	}
}

