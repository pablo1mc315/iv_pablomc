/**
 * Implementación de clase User:
 * Clase necesaria para almacenar los atributos del usuario con los que implementaremos el objeto valor
 * 
 */
const genresSet = require("../models/genresSet.js");
 
const date = new Date();
 
class User
{
    /**
     * Metodos
     * @param {Array[genresSet]} genres 
     * Array de Peliculas, la estructura del array es de la forma:
     * @param {Array} films 
     * Donde: 
     * films = [{name: 'Manolito Gafotas', date: 2014}, {name: 'Mafalda', date: 2017}];
     */
    constructor(genres,films)
    {
        this.genres = genres;
        this.films = films;
    }


     /**Funcion necesaria para determinar si nuestro usuario ha visto una pelicula
    * La implementacion es necesaria ya que nuestro usuario tiene "name" asignado 
    * y nuestra clase film trata con titulos
    */
    hasFilm(film)
    {
        let end = false;
        for (let index = 0; index < this.films.length && !end; index++)
        {
            if(this.films.name === film.title)
            {
                end = true;
                return true;
            }
        }
        if(!end)
        {
            return false;
        }
    }
    
    //Funcion que añade un conjunto de actores al usuario
    setGenres(newGenres)
    {
        var error = false;
        for (let index = 0; index < newGenres.length && !error; index++) 
        {
            if(genresSet.has(newGenres[index]))
            {
                this.genres.push(newGenres[index]);
            }
            else
            {
                error = true;
                throw new Error("Invalid genre");
            }
        }
    }
    
    //Funcion que aniade un conjunto de peliculas 
    setFilms(newFilms)
    {
        var error = false;
        for (let index = 0; index < newFilms.length && !error; index++) 
        {
            if(!this.hasFilm(newFilms[index]))
            {
                var aux = {name: newFilms.title, date: date.getFullYear()};
                this.films.push(aux);
            }
            else
            {
                error = true;
                throw new Error("Invalid film");
            }
        }
    }
    
    //Funcion que elimina un genero
    delGenre(genre)
    {
        if(this.genres.includes(genre))
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
            throw new Error("Invalid genre");
        }
    }
    
    //Funcion que elimina una pelicula
    delFilm(film)
    {
        if(this.hasFilm(film))
        {
            let auxFilms = new Array();
            for (let index = 0; index < this.films.length; index++) 
            {
                if(this.films[index].name != film.title)
                {
                    auxFilms.push(this.films[index]);
                }
            }
            this.films = auxFilms;
        }
        else
        {
            throw new Error("Invalid film");
        }
    }
    
    //Funcion que aniade un genero al usuario
    addGenre(genre)
    {
        if(genresSet.has(genre) && !this.genres.includes(genre))
        {
            this.genres.push(genre);
        }
        else
        {
            throw new Error("Invalid genre");
        }
    }

    //Funcion que aniade una pelicula al usuario
    addFilm(film)
    {
        if(!this.hasFilm(film))
        {
            var aux = {name: film.title, date: date.getFullYear()};
            this.films.push(aux);
        }
        else
        {
            throw new Error("Invalid film");
        }
    }
   
 }
 
 module.exports = User;