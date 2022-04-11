require('dotenv').config()

exports.twitter = {
    api_url: process.env.TWITTER_API_URL,
    api_header_host: process.env.TWITTER_API_HEADER_API_HOST,
    access_token_key: process.env.TWITTER_API_KEY,
};

