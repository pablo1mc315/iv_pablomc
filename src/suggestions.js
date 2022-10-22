/**
 * Implementación de clase Suggestions, implementa a logica de negocio.
 * Cada usuario tiene un conjunto d peliculas sugeridas
 */

 import Film from "film.js"
 import User from "user.js"
 
 class Suggestions
 {
     /**
      * Metodos
      * @param {Array[Film]} films
      * @param {User} user
      */
     constructor(films,user)
     {
         this.films = films;
         this.user = user;
     }
 }
 
 //Funcion que aniade un conjunto de peliculas a una sugerencia de un usuario
 function setFilms(newFilms)
 {
     var error = false;
     for (let index = 0; index < newFilms.length && !error; index++) 
     {
         if(!this.films.has(newFilms[index]) && !this.user.hasFilm(newFilms[index]))
         {
             this.films.push(newFilms[index]);
         }
         else
         {
             error = true;
             throw new ValidationError("Invalid film");
         }
     }
 }
 
 //Funcion que elimina una pelicula de la sugerencia
 function delFilm(film)
 {
     if(this.films.has(film))
     {
         let auxFilms = new Array();
         for (let index = 0; index < this.films.length; index++) 
         {
             if(this.films[index] != film)
             {
                 auxFilms.push(this.films[index]);
             }
         }
         this.films = auxFilms;
     }
     else
     {
         throw new ValidationError("Invalid film");
     }
 }