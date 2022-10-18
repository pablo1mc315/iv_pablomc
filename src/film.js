/**
 * Implementación de clase Film
 */

 class Film
 {
    /**
     * Metodos
     * @param {String} title
     * @param {String} id
     * @param {Number} year
     * @param {String} description 
     * @param {String} genre
     * @param {Array} actors
     */
    constructor(title,id,year,description,genre,actors)
    {
        this.title = title;
        this.id = id;
        this.year = year;
        this.description = description;
        this.genre = genre;
        this.actors = actors;
    }
 }