'use strict';

const { Sequelize, DataTypes } = require('sequelize');
// const clothesModel = require('./clothes/model.js');
// const foodModel = require('./food/model.js');
const users = require('../auth/models/users');
// const Collection = require('./data-collection.js');
require('dotenv').config();

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
} : {};

const sequelize = new Sequelize(DATABASE_URL, DATABASE_CONFIG);
// const food = foodModel(sequelize, DataTypes);
// const clothes = clothesModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  // food: new Collection(food),
  // clothes: new Collection(clothes),
  users: users(sequelize, DataTypes),
};