const express = require('express');
const app = express();
const { User, Role, db } = require('./models');

app.use(express.urlencoded({ extended: false }));

const PORT = process.env.DATABASE_URL || 3000;


const init = async () => {
  await db.sync()
  User.create({
  	name: 'bob',
  	email: 'bob@bob.com'
  })
  Role.create({
  	name: 'administrator',
  	field: 'mechanical engineering'
  })
  app.listen(PORT, () => {
  	console.log(`server listening to port ${PORT}`)
  })

}

init();

app.get('/', (req, res, next) => {
  res.send('hello?');
})








app.listen(PORT, () => {
  console.log('I hear ya!');
})