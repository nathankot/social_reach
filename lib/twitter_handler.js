module.exports = function TwitterHandler () {
  var twitter = require('twit');

  var tweeterClient = new twitter({
    consumer_key: process.env['TWITTER_CONSUMER_KEY'],
    consumer_secret: process.env['TWITTER_CONSUMER_SECRET'],
    access_token: process.env['TWITTER_ACCESS_TOKEN'],
    access_token_secret:  process.env['TWITTER_ACCESS_TOKEN_SECRET'],
  });

  return {
    getLastSeen: function(options, callback) {

      tweeterClient.get('statuses/user_timeline', { screen_name: options['screenName'], count: 1 }, function (err, reply) {
        var dateOfLastTweet = reply[0]['created_at'];
        callback(dateOfLastTweet);
      });

    }
  };
}