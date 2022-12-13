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
    if (genres)
      this.genres = genres
    else
    {
      // Lanzamos error porque los generos de una pelicula son imprescindibles
      throw new Error('Genres are a must')
    }

    // Asignamos actors
    if (actors)
      this.actors = actors
    else
    {
      // Lanzamos error porque los actores de una pelicula son imprescindibles
      throw new Error('Actors are a must')
    }
  }
}
