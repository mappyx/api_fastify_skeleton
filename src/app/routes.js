'use strict';

const { errorHandler } = require('../errors');
const authRoutes = require('./auth');

module.exports = async fastify => {
  fastify.setErrorHandler(errorHandler());
  fastify.register(authRoutes, { prefix: '/v1/auth' });
};
