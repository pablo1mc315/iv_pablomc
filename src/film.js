/**
 * Implementación de clase Film
 */

const genresSet= require("../models/genresSet.js");

const minYear = 0;
const maxYear = 2023;
const date = new Date();
const default_array = new Array();
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
        //Asignamos title
        if(title.trim().length != 0)
        {
            this.title = title;
        }
        else
        {
            throw new Error("Invalid title");
        }
        //Asignamos year
        this.year = year || date.getFullYear();
        //Asignamos genres
        if(genres)
        {
            var error = false;
            for (let index = 0; index < genres.length && !error; index++) 
            {
                if(genresSet.has(genres[index]) && !this.genres.includes(genres[index]))
                {
                    this.genres.push(genres[index]);
                }
                else
                {
                    error = true;
                    //Asignamos a genres un array vacio
                    this.genres = default_array;
                    throw new Error("Invalid genre");
                }
            }
        }
        else
        {
            this.genres = default_array;
        }
        //Asignamos actors
        if(actors)
        {
            var error = false;
            for (let index = 0; index < actors.length && !error; index++) 
            {
                if(actors.trim().length != 0 && !this.actors.includes(actors[index]))
                {
                    this.actors.push(actors[index]);
                }
                else
                {
                    error = true;
                    //Asignamos a actors un array vacio
                    this.actors = default_array;
                    throw new Error("Invalid actor");
                }
            }
        }
        else
        {
            this.actors = default_array;
        }
    }

}

module.exports = Film;

 
 