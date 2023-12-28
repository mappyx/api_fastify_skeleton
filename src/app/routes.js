'use strict';

const { errorHandler } = require('../errors');

module.exports = async fastify => {
  fastify.setErrorHandler(errorHandler());
};
