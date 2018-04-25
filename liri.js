require("dotenv").config();
var Request = require('request')
var keys = require("./keys.js");

var Twitter = require('twitter')
var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret
});
console.log('=====================');
console.log(' ');
console.log(client);
console.log(' ');
console.log('=====================');
// console.log(OMDb);
var data = process.argv;
// console.log(data);
var operator = data[2];
var searchItem = '';
// console.log(operator);
    for (var i = 3 ; i < data.length; i ++){
        if (i > 3 && i < data.length){
            searchItem  = searchItem + '+' + data[i];
        }else{
        searchItem  += data[i]
    }
}

// console.log('');
// console.log('=====================');
// console.log(searchItem);
// console.log('=====================');
// console.log('');

//===================twitter=========================//
// $ curl --request GET 
//  --url 'https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular' 
//  --header 'authorization: OAuth oauth_consumer_key="consumer-key-for-app", 
//  oauth_nonce="generated-nonce", oauth_signature="generated-signature", 
//  oauth_signature_method="HMAC-SHA1", oauth_timestamp="generated-timestamp", 
//  oauth_token="access-token-for-authed-user", oauth_version="1.0"'




//=====================OMDb============================//
function findMovie(){
    if (operator === 'movie-this'){
        var OMDb = keys.OMDbAPI.OMDbAPI 
        var request = require("request");
        var OMDbAPI = "http://www.omdbapi.com/?t=" + searchItem  + "&y=&plot=short&apikey="+OMDb;

    request(OMDbAPI, function(error, response, body){
        var JASON = JSON.parse(body);
        var rotTomRating = JASON.Ratings && JASON.Ratings[1] ? JASON.Ratings[1].Value : 'no ratings';
         if (!error && response.statusCode === 200){
        console.log("")
        console.log("")
        console.log("======================")
        console.log("Movie Title: " + JASON.Title)
        console.log("======================")
        console.log("Year the movie came out: " + JASON.Year)
        console.log("======================")
        console.log("IMDB Rating of the movie: " + JASON.imdbRating)
        console.log("======================")
        console.log("Rotten Tomatoes Rating of the movie: " + rotTomRating)
        console.log("======================")
        console.log("Country where the movie was produced: " + JASON.Country)
        console.log("======================")
        console.log("Language of the movie: " + JASON.Language)
        console.log("======================")
        console.log("Plot of the movie: " + JASON.Plot)
        console.log("======================")
        console.log("Actors in the movie: " + JASON.Actors)
        console.log("======================")
        console.log("")
        console.log("")
    }else { 
        console.log('this is not working '+error);
    }

});
}//end of if statement
}//end of findMovie Function 
findMovie();



//=======spotify========/
function searchSpotify(){
 if (operator === 'spotify-this-song'){
     if( searchItem == ''){searchItem = 'Ace of Base The Sign'}
    
    var Spotify = require('node-spotify-api');
    // console.log(keys);
    // console.log('id', keys.spotifyKey.id);
    // console.log('secret',keys.spotifyKey.secret )
    var spotify = new Spotify({
        id: keys.spotifyKey.id,
        secret: keys.spotifyKey.secret
      });
    //   console.log (spotify);

    spotify.search({ 
        type: 'track', 
        query: "The Sign"}, function(error,response){
            if (error){
                console.log('Error accurd:  ========= '+ error);
        }
        console.log(response.tracks)
        console.log("")
        console.log('====================================')
        console.log("Artist(s): " + response.tracks.items[0].album.artists[0].name)
        console.log("Track: " + response.tracks.items[0].name)
        console.log("Preview URL: " + response.tracks.items[0].preview_url);
        console.log("Album: " + response.tracks.items[0].album.name)
        console.log('====================================')
        });
        

}//end of spotify else if statement 
}    // Do something with 'data' 

searchSpotify();


//==============readFile=============//
var fs = require('fs');
function doThis(){
    if (operator === 'do-what-it-says'){
            fs.readFile('random.txt', 'utf8' , function(error,response){
                if (error) {
                    console.log('Well this is embarrassing!! ')
            }
            // console.log(response);
            var dataArr = response.split(",");
            // console.log(dataArr);
                searchItem = dataArr[1].replace(/['"']/g, ' ')
            //    console.log(searchItem)
               operator = dataArr[0];
               searchSpotify();
            })
        }
    }
doThis();
