console.log("This is loaded");

exports.twitterKeys = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
}

exports.spotifyKey = {
    id : process.env.SPOTIFY_ID,
    secret : process.env.SPOTIFY_SECRET 
}
exports.OMDbAPI = {
    OMDbAPI = "http://www.omdbapi.com/?i=tt3896198&apikey=988d81cc"
}


