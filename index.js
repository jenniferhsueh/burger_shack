const express = require('express');
const app = express();

// MIDDLEWARE

const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);
const userService = require('./data/user-svc')(knex);
