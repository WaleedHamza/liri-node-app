require("dotenv").config();
var Twitter = require('twitter')
var Spotify = require('node-spotify-api')
var Request = require('request')


var keys = require("./keys");
var spotify = new Spotify(keys.spotify);
console.log(spotify)
var client = new Twitter(keys.twitter);
var OMDb = new OMDbAPI(keys.OMDbAPI);
console.log(OMDb);
// var input = process.argv;
// console.log(input)
// var operator = inputString[2];
// var searchItem = inputString[3];

// //===OMDb===//
// var request = require("request");
// OMDbAPI = "http://www.omdbapi.com/?t=" + searchItem  + "&y=&plot=short&apikey="+OMDb;
// var nodeArgs = process.argv;
// var searchItem  = '';

// for (var i = 2 ; i < nodeArgs.length; i ++){
//     if (i > 2 && i < nodeArgs.length){
//         searchItem  = searchItem + '+' + nodeArgs[i];
//     }else{
//         searchItem  += nodeArgs[i]
//     }
// }

// console.log(OMDb)

// request(OMDb, function(err, response, body){
//     if (!error && response.statusCode === 200){
//         console.log("Movie Title: " + JSON.parse(body).Title)
//     }
// });