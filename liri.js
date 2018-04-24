require("dotenv").config();
var Request = require('request')
var keys = require("./keys.js");

// var Twitter = require('twitter')
// var client = new Twitter(keys.twitter);
// console.log(client);

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

//=====================OMDb============================//
function findMovie(){
    if (operator === 'movie-this'){
        var OMDb = (keys.OMDbAPI)   //(keys.js.OMDbAPI)  this key link is not working ;
        var request = require("request");
        var OMDbAPI = "http://www.omdbapi.com/?t=" + searchItem  + "&y=&plot=short&apikey="+OMDb;
        // var searchItem  = '';

    request(OMDbAPI, function(error, response, body){
        if (!error && response.statusCode === 200){
        console.log("")
        console.log("")
        console.log("======================")
        console.log("Movie Title: " + JSON.parse(body).Title)
        console.log("======================")
        console.log("Year the movie came out: " + JSON.parse(body).Year)
        console.log("======================")
        console.log("IMDB Rating of the movie: " + JSON.parse(body).imdbRating)
        console.log("======================")
        console.log("Rotten Tomatoes Rating of the movie: " + JSON.parse(body).Ratings[1].Value)
        console.log("======================")
        console.log("Country where the movie was produced: " + JSON.parse(body).Country)
        console.log("======================")
        console.log("Language of the movie: " + JSON.parse(body).Language)
        console.log("======================")
        console.log("Plot of the movie: " + JSON.parse(body).Plot)
        console.log("======================")
        console.log("Actors in the movie: " + JSON.parse(body).Actors)
        console.log("======================")
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
     if( searchItem === ''){searchItem = 'Ace of Base The Sign'}
    
    var Spotify = require('node-spotify-api');
    var spotify = new Spotify(keys.spotifyKey);
    // var spotify = new Spotify({
    //     id: "",
    //     secret: "",
    //   });
// console.log(spotify)
// function searchSpotify() {
    spotify.search({ 
        type: 'track', 
        query: searchItem}, function(err,response){
            if (err){console.log('Error accurd:  ========= '+err);
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
