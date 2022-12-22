// CONNECT TO DATABASE:
require('dotenv').config()
require('./config/database')

// REQUIRE MONGOOSE MODELS:
const User = require('./models/user')

// LOCAL VARIABLES:
let user;
let users;