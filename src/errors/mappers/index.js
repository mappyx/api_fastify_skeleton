'use strict';

const basic = require('./basic');
const paramsValidation = require('./paramsValidation');
const unstructuredError = require('./unstructuredError');
const mysqlError = require('./mysqlError');

module.exports = {
  paramsValidation,
  unstructuredError,
  mysqlError,
  DEFAULT_MAPPERS: [basic, paramsValidation, mysqlError,unstructuredError]
};
