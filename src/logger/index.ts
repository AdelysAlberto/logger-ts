/// <reference types="../types" />

import { getCallOrigin } from './utils/callOrigin';

import { v4 } from 'uuid';

type TValue = LoggerType.TFormatMessage;
//Define numeric level number.
const levelMaps: LoggerType.TLevelMaps = {
  LOG: 0,
  DEBUG: 10,
  INFO: 20,
  WARN: 30,
  ERROR: 40,
  ALL: 50,
};

const colorFont = (color: string) => {
  // format is Background and Foreground
  const colors: LoggerType.TColors = {
    success: '\x1b[42m \x1b[37m',
    warn: '\x1b[30m \x1b[43m',
    debug: '\x1b[46m \x1b[37m',
    info: '\x1b[44m \x1b[37m',
    error: '\x1b[41m \x1b[37m',
    reset: '\x1b[0m',
  } as const;
  return colors[color] || colors.reset;
};

/**
 * Return a formatted log.
 * @param value {TFormatMessage} level log number level.
 * @param code {string} code log description.
 * @returns {TFormatResponse}
 */
const format = (value: LoggerType.TFormatMessage, code: number): LoggerType.TFormatResponse => {
  const msg = value.message;

  const dateEvent = new Date();
  const humanDate = dateEvent.toLocaleString();

  return {
    level: levelMaps[code] || 0,
    id: v4(),
    time: humanDate,
    logger: getCallOrigin(value.fn),
    message: msg,
  };
};

/**
 * @param {string} code log description.
 * @returns {void} Return a formatted log.
 */
const log = (value: TValue): void => {
  console.log(colorFont('reset'), 'LOG', colorFont('reset'), `${JSON.stringify(format(value, 0))}`);
};

/**
 * @param {string} code log description.
 * @returns {void} Return a formatted log.
 */
const debug = (value: TValue): void => {
  console.log(colorFont('debug'), 'DEBUG', colorFont('reset'), `${JSON.stringify(format(value, 10))}`);
};

/**
 * @param {string} code log description.
 * @returns {void} Return a formatted log.
 */
const info = (value: TValue): void => {
  console.log(colorFont('info'), 'INFO', colorFont('reset'), `${JSON.stringify(format(value, 20))}`);
};

/**
 * @param {string} code log description.
 * @returns {void} Return a formatted log.
 */
const warn = (value: TValue): void => {
  console.log(colorFont('warn'), 'WARN', colorFont('reset'), `${JSON.stringify(format(value, 30))}`);
};

/**
 * @param {string} code log description.
 * @returns {void} Return a formatted log.
 */
const success = (value: TValue): void => {
  console.log(colorFont('success'), 'Success', colorFont('reset'), `${JSON.stringify(format(value, 20))}`);
};

/**
 * @param {string} code log description.
 * @returns {void} Return a formatted log.
 */
const error = (value: TValue): void => {
  console.log(colorFont('error'), 'ERROR', colorFont('reset'), `${JSON.stringify(format(value, 40))}`);
};

const Logger = {
  log,
  debug,
  info,
  warn,
  error,
  success,
};
export = Logger;
