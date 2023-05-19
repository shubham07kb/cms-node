const fetch = require('isomorphic-fetch');
const db = require('./libs/db');
const minify = require('./libs/minify');
const utils = require('./utils');
const func = require('./utils/functions');
const account = require('./services/account');
const DeviceDetector = require('device-detector-js');
const deviceDetector = new DeviceDetector();
module.exports = {
    fs: require('fs'),
    path: require('path'),
    base64url: require('base64url'),
    crypto: require('crypto'),
    jwt: require('jsonwebtoken'),
    fetch: fetch,
    deviceDetectorParse: deviceDetector.parse,
    minify: minify.minify,
    jsmaker: utils.jsmaker,
    pagemakerStatic: utils.pagemakerStatic,
    isInStatic: utils.isInStatic,
    cron: require('./utils/cron').cron,
    circularToJSON: func.circularToJSON,
    str: func.str,
    getDate: func.getDate,
    account: account,
    db: db
}

