require("dotenv").config();

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);
var OMDb = new OMDbAPI(keys.OMDbAPI);

var input = process.argv;
console.log(input)
var operator = inputString[2];
var searchQue = inputString[3];
