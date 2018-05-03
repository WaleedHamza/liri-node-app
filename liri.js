require("dotenv").config();
var Request = require('request')
var keys = require("./keys.js");
var fs = require('fs')
var data = process.argv;
var operator = data[2];
var searchItem = '';
console.log(operator)
for (var i = 3; i < data.length; i++) {
    if (i > 3 && i < data.length) {
        searchItem = searchItem + '+' + data[i];
    } else {
        searchItem += data[i]
    }
}

//=====================OMDb============================//
function findMovie() {
    if (operator === 'movie-this') {
        if (searchItem === '') {
            searchItem = 'Mr Nobody'
        }

        var OMDb = keys.OMDbAPI.OMDbAPI
        var request = require("request");
        var OMDbAPI = "http://www.omdbapi.com/?t=" + searchItem + "&y=&plot=short&apike" +
                "y=" + OMDb;

        request(OMDbAPI, function (error, response, body) {
            var JASON = JSON.parse(body);
            var rotTomRating = JASON.Ratings && JASON.Ratings[1]
                ? JASON
                    .Ratings[1]
                    .Value
                : 'No Rotten Tomatoes ratings';
            if (!error && response.statusCode === 200) {

                fs.appendFile("log.txt", 
                "\n-------------------"+
                "\nMovie Title: " + JASON.Title,(error) => { });
                //The empty error function in the line above is to prevent the deprecating error//
                fs.appendFile("log.txt", 
                "\nYear the movie came out: " + JASON.Year,(error) => { });
                
                fs.appendFile("log.txt", 
                "\nIMDB Rating of the movie: " + JASON.imdbRating,(error) => { });
                
                fs.appendFile("log.txt", 
                "\nRotten Tomatoes Rating of the movie: " + rotTomRating,(error) => { });
                
                fs.appendFile("log.txt", 
                "\nCountry where the movie was produced: " + JASON.Country,(error) => { });

                fs.appendFile("log.txt", 
                "\nLanguage of the movie: " + JASON.Language,(error) => { });
                
                fs.appendFile("log.txt", 
                "\nPlot of the movie: " + JASON.Plot,(error) => { });
                
                fs.appendFile("log.txt", 
                "\nActors in the movie: " + JASON.Actors +
                "\n-------------------",(error) => { });

            } else {
                console.log('this is not working ' + error);
            }
            console.log("-------------------")
            console.log("Movie Title: " + JASON.Title)
            console.log("Year the movie came out: " + JASON.Year)
            console.log("IMDB Rating of the movie: " + JASON.imdbRating)
            console.log("Rotten Tomatoes Rating of the movie: " + rotTomRating)
            console.log("Country where the movie was produced: " + JASON.Country)
            console.log("Language of the movie: " + JASON.Language)
            console.log("Plot of the movie: " + JASON.Plot)
            console.log("Actors in the movie: " + JASON.Actors)
            console.log("-------------------")
        });
    } //end of if statement
} //end of findMovie Function
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
            fs.appendFile("log.txt", "\n-------------------", (error) => {
                console.log("-------------------")
            })
            fs.appendFile("log.txt",
            "\nArtist(s): " + info.album.artists[0].name,(error) => {
                    console.log("Artist(s): " + info.album.artists[0].name)
                })
            fs.appendFile("log.txt", "\nTrack: " + info.name, (error) => {
                console.log("Track: " + info.name)
            })
            fs.appendFile("log.txt", "\nPreview URL: " + previewLink, (error) => {
                console.log("Preview URL: " + previewLink)
            })
            fs.appendFile("log.txt", "\nAlbum: " + info.album.name, (error) => {
                console.log("Album: " + info.album.name)
            })
            fs.appendFile("log.txt", "\n-------------------", (error) => {
                console.log("-------------------")
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

//===================twitter=========================//
function searchTwitter() {
    var Twitter = require('twitter')
    var myTwitter = new Twitter(
        {consumer_key: keys.twitterKeys.consumer_key, consumer_secret: keys.twitterKeys.consumer_secret, access_token_key: keys.twitterKeys.access_token_key, access_token_secret: keys.twitterKeys.access_token_secret}
    );

    if (operator === 'my-tweets') {
        if (searchItem == '') {
            searchItem = 'robertpope6789'
        }

        var params = {
            q: searchItem,
            count: 2 ,
            //the count is set to 2 due to the limited amount of pulls of the twitter api
        }

        myTwitter.get('search/tweets',params, gotData)

        function gotData(error, data, response) {
            if (error) {
                console.log('i got this far', error)
            }
            var tweets = data.statuses;
            console.log(data)
            for (var i = 0; i < tweets.length; i++) {

                fs.appendFile("log.txt", "\n-------------------", (error) => {});

                fs.appendFile(
                    "log.txt",
                    "\nI Tweeted : " + tweets[i].text + "\nAt This Time : " + tweets[i].created_at,
                    (error) => {});
                    
                fs.appendFile("log.txt", "\n-------------------", (error) => {});

                console.log("-------------------");
                console.log("I Tweeted : " + tweets[i].text);
                console.log("At This Time : " + tweets[i].created_at)
                console.log("-------------------");
                    
            }

        }

    }
}
searchTwitter();