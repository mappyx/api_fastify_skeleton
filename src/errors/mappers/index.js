'use strict';

const basic = require('./basic');
const paramsValidation = require('./paramsValidation');
const unstructuredError = require('./unstructuredError');

module.exports = {
  paramsValidation,
  unstructuredError,
  DEFAULT_MAPPERS: [basic, paramsValidation, unstructuredError]
};
