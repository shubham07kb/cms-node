const db = require('./libs/db');
const minify = require('./libs/minify');
const utils = require('./utils');
const func = require('./utils/functions');
const DeviceDetector = require('device-detector-js');
const deviceDetector = new DeviceDetector();
module.exports = {
    fs: require('fs'),
    path: require('path'),
    base64url: require('base64url'),
    crypto: require('crypto'),
    jwt: require('jsonwebtoken'),
    deviceDetectorParse: deviceDetector.parse,
    minify: minify.minify,
    jsmaker: utils.jsmaker,
    pagemaker: utils.pagemaker,
    cron: require('./utils/cron').cron,
    circularToJSON: func.circularToJSON,
    str: func.str,
    getDate: func.getDate,
}

