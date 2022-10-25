/**
 * Implementación de clase Film
 */

const genresEnum = require("../models/genresEnum.js");

const minYear = 0;
const maxYear = 2023;

class Film
{
    /**
     * Metodos
     * @param {String} title
     * @param {Number} year
     * @param {Array} genres
     * @param {Array} actors
     */
    constructor(title,year,genres,actors)
    {
        this.title = title;
        this.year = year;
        this.genres = genres;
        this.actors = actors;
    }

    //Función que pone título a una película
    setTitle(title)
    {
        if(title.trim().length != 0)
        {
            this.title = title;
        }
        else
        {
            throw new Error("Invalid title");
        }
    }
    
    //Funcion que aniade un conjunto de generos a una pelicula
    setGenres(newGenres)
    {
        var error = false;
        for (let index = 0; index < newGenres.length && !error; index++) 
        {
            if(genresEnum.has(newGenres[index]) && !this.genres.includes(newGenres[index]))
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
    
    //Funcion que asigna a la pelicula un conjunto de actores
    setActors(newActors)
    {
        var error = false;
        for (let index = 0; index < newActors.length && !error; index++) 
        {
            if(newActors.trim().length != 0 && !this.actors.includes(newActors[index]))
            {
                this.actors.push(newActors[index]);
            }
            else
            {
                error = true;
                throw new Error("Invalid genre");
            }
        }
    }
    
    //Funcion que aniade un genero a la pelicula 
    addGenre(genre)
    {
        if(genresEnum.has(genre) && !this.genres.includes(genre))
        {
            this.genres.push(genre);
        }
        else
        {
            throw new Error("Invalid genre");
        }
    }
    
    //Funcion que aniade un actor a la pelicula
    addActor(actor)
    {
        if(actor.trim().length  != "" && !this.actors.includes(actor))
        {
            this.actors.push(actor);
        }
        else
        {
            throw new Error("Invalid actor");
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
    
    //Funcion que elimina un actor
    delActor(actor)
    {
        if(this.actors.includes(actor))
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
            throw new Error("Invalid actor");
        }
    }
}

module.exports = Film;

 
 