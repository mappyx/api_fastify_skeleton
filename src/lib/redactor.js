'use strict';

const stringify = require('json-stringify-safe');
const { isEmpty } = require('lodash');

const REDACT = '****REDACTED****';

const redactableKeys = [];

const maskableKeys = [];

const shouldRedact = key => redactableKeys.includes(key);

const checkAndMaskValues = (key, value) => {
  if (maskableKeys.includes(key)) {
    const len = value.length;
    return `${value.substring(0, 4)}${REDACT}${value.substring(len - 4, len)}`;
  }
  return REDACT;
};

const circularReplacer = () => {
  return (key, value) => {
    if (shouldRedact(key)) return checkAndMaskValues(key, value);
    return value;
  };
};

const parser = replacer => o => !isEmpty(o) ? JSON.parse(stringify(o, replacer)) : o;

const redactor = parser(circularReplacer());

module.exports = { redactor };
