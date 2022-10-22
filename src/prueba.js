const User = require("./user.js");
const Film = require("./film.js");

var films = new Array();
var films_aux = new Array("Action","War");
var genres = new Array();
var usuario = new User(films,genres);
usuario.addGenre("Comedy");
//usuario.addGenre("jeje");
console.log("Hola mundo");
console.log(usuario.genres);
usuario.delGenre("Comedy");
console.log(usuario.genres);
usuario.setGenres(films_aux);
console.log(usuario.genres);
