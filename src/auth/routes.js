'use strict';

const express = require('express');
const authRouter = express.Router();

const { users } = require('../models/index');
const basicAuth = require('./middleware/basic.js')
const bearerAuth = require('./middleware/bearer.js')
const permissions = require('./middleware/acl.js');
const bcrypt = require('bcrypt');

authRouter.post('/signup', async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    let userRecord = await users.create(req.body);
    const data = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(201).json(data);
  } catch (e) {
    next(e.message)
  }
});

authRouter.post('/signin', basicAuth, (req, res, next) => {
  const user = {
    user: req.user,
    token: req.user.token
  };
  res.status(200).json(user);
});

authRouter.get('/users', bearerAuth, permissions('delete'), async (req, res, next) => {
  const userRecords = await users.findAll({});
  const lst = userRecords.map(user => user.username);
  res.status(200).json(lst);
});

authRouter.get('/secret', bearerAuth, async (req, res, next) => {
  res.status(200).send('Welcome to the secret area')
});

module.exports = authRouter;