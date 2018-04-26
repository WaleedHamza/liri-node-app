require("dotenv").config();
var Request = require('request')
var keys = require("./keys.js");
var fs = require('fs')
// console.log('=====================');
// console.log(' ');
// console.log(client);
// console.log(' ');
// console.log('=====================');
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
// function searchTwitter(){
//     var Twitter = require('twitter')
//     var client = new Twitter({
//         consumer_key: keys.twitterKeys.consumer_key,
//         consumer_secret: keys.twitterKeys.consumer_secret,
//         access_token_key: keys.twitterKeys.access_token_key,
//         access_token_secret: keys.twitterKeys.access_token_secret
//     });

//     if ( operator = 'my-tweets'){ //if (searchItem === ''){searchItem = 'robertpope6789'}
//             client.get ('statuses/created_at', { 
//             // user_id : 'robertpope6789',
//             screen_name: 'robertpope6789'
//             // count: 2
//             },
//     function(error,response){
//         if(error){
//             console.log('Twitter Error', error)

//         } if (!error && response.statusCode === 200){
//             console.log('I get here')
//         }
//     });


// }//end of if statement
// }//end of searchTwitter Function
//  searchTwitter();
    

//=====================OMDb============================//
function findMovie(){
    if (operator === 'movie-this'){

        if(searchItem === ''){searchItem = 'Mr Nobody'}

        var OMDb = keys.OMDbAPI.OMDbAPI 
        var request = require("request");
        var OMDbAPI = "http://www.omdbapi.com/?t=" + searchItem  + "&y=&plot=short&apikey="+OMDb;

    request(OMDbAPI, function(error, response, body){
        var JASON = JSON.parse(body);
        var rotTomRating = JASON.Ratings && JASON.Ratings[1] ? JASON.Ratings[1].Value : 'No Rotten Tomatoes ratings';
         if (!error && response.statusCode === 200){

            fs.appendFile("log.txt", "\n\r  " + "=====================", (error) => {
                console.log("======================")
            })
            fs.appendFile("log.txt", "\n\r  " + "Movie Title: " + JASON.Title, (error) => {
                console.log("Movie Title: " + JASON.Title)
            })
            fs.appendFile("log.txt", "\n\r  " + "Year the movie came out: " + JASON.Year, (error) => {
                console.log("Year the movie came out: " + JASON.Year)
            })
            fs.appendFile("log.txt", "\n\r  " + "IMDB Rating of the movie: " + JASON.imdbRating, (error) => {
                console.log("IMDB Rating of the movie: " + JASON.imdbRating)
            })
            fs.appendFile("log.txt", "\n\r  " + "Rotten Tomatoes Rating of the movie: " + rotTomRating, (error) => {
                console.log("Rotten Tomatoes Rating of the movie: " + rotTomRating)
            })
            fs.appendFile("log.txt", "\n\r  " + "Country where the movie was produced: " + JASON.Country, (error) => {
                console.log("Country where the movie was produced: " + JASON.Country)
            })
            fs.appendFile("log.txt", "\n\r  " + "Language of the movie: " + JASON.Language, (error) => {
                console.log("Language of the movie: " + JASON.Language)
            })
            fs.appendFile("log.txt", "\n\r  " + "Plot of the movie: " + JASON.Plot, (error) => {
                console.log("Plot of the movie: " + JASON.Plot)
            })
            fs.appendFile("log.txt", "\n\r  " + "Actors in the movie: " + JASON.Actors, (error) => {
                console.log("Actors in the movie: " + JASON.Actors)
            })
            fs.appendFile("log.txt", "\n\r  " + "======================", (error) => {
                console.log("======================")
            }) 

    }else { 
        console.log('this is not working '+ error);
    }

});
}//end of if statement
}//end of findMovie Function 
findMovie();



//=======spotify========/
function searchSpotify() {
    if (operator === 'spotify-this-song') {
        if (searchItem === '') {
            searchItem = 'Ace of Base The Sign'
        }
        var Spotify = require('node-spotify-api');
        var spotify = new Spotify(
            {id: keys.spotifyKey.id, secret: keys.spotifyKey.secret}
        );
        spotify.search({
            type: 'track',
            query: searchItem
        }, function (error, response) {
            if (error) {
                console.log('Error accurd:  ========= ' + error);
            }
            var info = response
                .tracks
                .items[0];
            var previewLink = info.preview_url && info.preview_url
                ? info.preview_url
                : 'No preview url available';
            fs.appendFile("log.txt", "\n\r  " + operator + searchItem, (error) => {
                console.log(operator + searchItem)
            })
            fs.appendFile("log.txt","\n\r  Artist(s): " + info.album.artists[0].name,(error) => {
                    console.log("Artist(s): " + info.album.artists[0].name)
                })
            fs.appendFile("log.txt", "\n\r  Track: " + info.name, (error) => {
                console.log("Track: " + info.name)
            })
            fs.appendFile("log.txt", "\n\r  Preview URL: " + previewLink, (error) => {
                console.log("Preview URL: " + previewLink)
            })
            fs.appendFile("log.txt", "\n\r  Album: " + info.album.name, (error) => {
                console.log("Album: " + info.album.name)
            })
        });
    } //end of spotify else if statement
} //end of searchSpotify Function
searchSpotify();

//==============readFile=============//

function doThis(){
    var fs = require('fs');
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
