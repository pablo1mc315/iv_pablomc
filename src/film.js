/**
 * Implementación de clase Film
 */

 const genresEnum = require("../models/genresEnum.js");
 const ValidationError = require("../error/validationError.js");
 
 const minYear = 0;
 const maxYear = 2023;
 
 class Film
 {
     /**
      * Metodos
      * @param {String} title
      * @param {Number} year
      * @param {String} description 
      * @param {Array} genres
      * @param {Array} actors
      */
     constructor(title,year,description,genres,actors)
     {
         this.title = title;
         this.year = year;
         this.description = description;
         this.genres = genres;
         this.actors = actors;
     }
 
 }
 
 //Función que pone título a una película
 function setTittle(title)
 {
     if(title != 0)
     {
         this.title = title;
     }
     else
     {
         throw new ValidationError("Invalid title");
     }
 }
 
 //Función que asigna anio a una pelicula
 function setYear(year)
 {
     if(year >= minYear && year <= maxYear)
     {
         this.year = year;
     }
     else
     {
         throw new ValidationError("Invalid year");
     }
 }
 
 //Funcion que aniade descripcion a una pelicula
 function setDescription(description)
 {
     if(description != 0)
     {
         this.description = description;
     }
     else
     {
         throw new ValidationError("Invalid description");
     }
 }
 
 //Funcion que aniade un conjunto de generos a una pelicula
 function setGenres(newGenres)
 {
     var error = false;
     for (let index = 0; index < newGenres.length && !error; index++) 
     {
         if(genresEnum.has(newGenres[index]))
         {
             this.genres.push(newGenres[index]);
         }
         else
         {
             error = true;
             throw new ValidationError("Invalid genre");
         }
     }
 }
 
 //Funcion que asigna a la pelicula un conjunto de actores
 function setActors(newActors)
 {
     if(newActors != 0)
     {
         this.actors = newActors;
     }
     else
     {
         throw new ValidationError("Invalid actors");
     }
 }
 
 //Funcion que aniade un genero a la pelicula 
 function addGenre(genre)
 {
     if(genresEnum.has(genre))
     {
         this.genres.push(genre);
     }
     else
     {
         throw new ValidationError("Invalid genre");
     }
 }
 
 //Funcion que aniade un actor a la pelicula
 function addActor(actor)
 {
     if(actor != 0)
     {
         this.actors.push(actor);
     }
     else
     {
         throw new ValidationError("Invalid actor");
     }
 }
 
 //Funcion que elimina un genero
 function delGenre(genre)
 {
     if(this.genres.has(genre))
     {
         let auxGenres = new Array();
         for (let index = 0; index < this.genres.length; index++) 
         {
             if(this.genres[index] != genre)
             {
                 auxGenres.push(this.genres[index]);
             }
         }
         this.genres = auxGenres;
     }
     else
     {
         throw new ValidationError("Invalid genre");
     }
 }
 
 //Funcion que elimina un actor
 function delActor(actor)
 {
     if(this.actors.has(actor))
     {
         let auxActors = new Array();
         for (let index = 0; index < this.actors.length; index++) 
         {
             if(this.actors[index] != actor)
             {
                 auxActors.push(this.actors[index]);
             }
         }
         this.actors = auxActors;
     }
     else
     {
         throw new ValidationError("Invalid actor");
     }
 }
 
 