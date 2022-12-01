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
    if (title.trim().length !== 0)
      this.title = title
    else
    {
      // Aqui se lanza error porque el titulo es imprescindible para
      // la pelicula (se puede usar el constructor unicamente con el titulo)
      throw new Error('Invalid title')
    }

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


  // Función que comprueba que alguno de los géneros de la película concuerda con
  // alguno de los géneros favoritos del usuario
  checkGenres (user)
  {
    var contenido = false
    this.genres.forEach(genero => contenido = contenido || user.fav_genres.includes(genero))

    return contenido
  }
}
