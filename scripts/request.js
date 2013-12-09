(function (undefined) {
    'use strict';

    var config = require('../src/config.js'),
        TwitterClient = require('ntwitter'),
        twitter = new TwitterClient({
            consumer_key: config.consumerKey,
            consumer_secret: config.consumerSecret,
            access_token_key: config.accessToken,
            access_token_secret: config.accessTokenSecret
        });

    twitter.search(encodeURIComponent('#академ'), {}, function (err, data) {
        console.log(JSON.stringify(data));
    });

}());