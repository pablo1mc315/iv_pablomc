/**
 * Implementación de clase Film
 */

 class Film
 {
     /**
      * Metodos
      * @param {String} tittle
      * @param {String} id
      * @param {Number} year
      * @param {String} description 
      * @param {String} genre
      * @param {Array} actors
      */
    constructor(tittle,id,year,description,genre,actors)
    {
        this.tittle = tittle;
        this.id = id;
        this.year = year;
        this.description = description;
        this.genre = genre;
        this.actors = actors;
    }
 }