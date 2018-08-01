const express = require('express');
const app = express();
const { User, Role, db } = require('./models');

app.use(express.urlencoded({ extended: false }));

const PORT = process.env.DATABASE_URL || 3000;











app.listen(PORT, () => {
  console.log('I hear ya!');
})