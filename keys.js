// console.log("This is loaded");

exports.twitterKeys = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
}
// console.log(twitterKeys)
exports.spotifyKey = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET 
}
// console.log(process.env.SPOTIFY_ID)
exports.OMDbAPI = {
    OMDbAPI: process.env.OMDbAPIKEY
}


