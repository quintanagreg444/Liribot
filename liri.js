//require envelope file
require("dotenv").config();
//require axios
var axios =require("axios");
//require Spotify
var Spotify=require("node-spotify-api");
//require fs 
var fsPackage=require("fs");
var Moment = require('moment');
//spotify-this-song
//movie-this
//do-what-it-says
var userRequest=process.argv[2];
// var keys = require("./keys.js");

console.log('this is loaded');

// var keys = require("./keys.js");
//grabs the argv3 an string it ""
var searchTerm =  process.argv.slice(3).join(" ");

switch (userRequest){
  case "concert-this":
    bandsInTownAPI()
    break;
    case "spotify-this-song":
    spotifyAPI()
    break;
    case "movie-this":
    omdbAPI()
    break;
    case "do-what-it-says":
    doItAPI()
    break;
  default:
    console.log("invalid request")
    

}
function bandsInTownAPI(){
var artist=searchTerm||"The Cure"
var queryURL="https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
axios.get(queryURL).then(function(response){
console.log(momentresponse)
})
}
function spotifyAPI(){

 
var spotify = new Spotify({
  id:process.env.SPOTIFY_ID,
  secret:process.env.SPOTIFY_SECRET
  
});

  var artist=searchTerm||"Ace of Base"
  spotify.search({ type: 'track', query: artist },
  function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
      console.log(data)
    }})
  };

function omdbAPI(){
  var artist=searchTerm||"Mr. Nobody"
var queryURL="https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
axios.get(queryURL).then(function(response){
console.log(response)
})


function doItAPI(){
  var artist=searchTerm||"The Cure"
  var queryURL="https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
  axios.get(queryURL).then((function(response){
