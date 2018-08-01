const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL);


const User = db.define({
  name: {
  	type: Sequelize.STRING

  },
  slug: {
  	type: Sequelize.STRING
  },
  email: {
  	type: Sequelize.STRING
  },
  company: {
  	type: Sequelize.STRING
  }
});

const Role = db.define({
  name: {
  	type: Sequelize.STRING

  },
  field: {
  	type: Sequelize.STRING
  }
})


module.exports = {
	db,
	models: {
		User,
		Role
	}
}

