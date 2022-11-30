/**
 * Implementación de clase User
 */

export default class User {
  /**
     * Metodos
     * @param {Array} fav_genres
     * Array de Peliculas, la estructura del array es de la forma:
     * @param {Array[Film]} films
     * Donde:
     * films = [{name: 'Manolito Gafotas', date: 2014}, {name: 'Mafalda', date: 2017}];
     */

  constructor (fav_genres, films)
  {
    // Asignamos genres
    this.fav_genres = fav_genres

    // Asignamos peliculas
    this.films = films
  }
}