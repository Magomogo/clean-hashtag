(function (undefined) {
    'use strict';

    var fs = require('fs'),
        _ = require('lodash'),
        config = {
            consumerKey: undefined,
            consumerSecret: undefined,
            accessToken: undefined,
            accessTokenSecret: undefined
        };

    if (fs.existsSync('config.json')) {
        _.extend(config, JSON.parse(fs.readFileSync(__dirname + '/config.json')));
    }

    console.log(config);

}());
