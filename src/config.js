(function (undefined) {
    'use strict';

    var fs = require('fs'),
        _ = require('lodash'),
        config;

    module.exports = config = {
        consumerKey: undefined,
        consumerSecret: undefined,
        accessToken: undefined,
        accessTokenSecret: undefined
    };

    if (fs.existsSync(__dirname + '/../config.json')) {
        _.extend(config, JSON.parse(fs.readFileSync(__dirname + '/../config.json')));
    }

}());