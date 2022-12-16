/**
 * Implementación de clase Film
 */

export default class Film {
  /**
    * Metodos
    * @param {String} title
    * @param {Number} year
    * @param {Array} genres
    */

  constructor (title, year, genres)
  {
    // Asignamos title
    this.title = title

    // Asignamos year
    this.year = year

    // Asignamos genres
    if (genres)
      this.genres = genres
    else
      // Lanzamos error porque los generos de una pelicula son imprescindibles
      throw new Error('Genres are a must')
  }
}
