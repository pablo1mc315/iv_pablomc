/**
 * Implementación de clase Film
 */

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