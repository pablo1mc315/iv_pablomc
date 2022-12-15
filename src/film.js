/**
 * Implementación de clase Film
 */

export default class Film {
  /**
    * Metodos
    * @param {String} title
    * @param {Number} year
    * @param {Array} genres
    * @param {Array} actors
    */

  constructor (title, year, genres, actors)
  {
    // Asignamos title
    this.title = title

    // Asignamos year
    this.year = year

    // Asignamos genres
    this.genres = genres

    // Asignamos actors
    this.actors = actors
  }
}
