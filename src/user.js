/**
 * Implementación de clase User
 */

export default class User {
  /**
    * Metodos
    * @param {Array} fav_genres
    * @param {Array[Film]} films
    */

  constructor (fav_genres, films)
  {
    // Asignamos genres
    this.fav_genres = fav_genres

    // Asignamos peliculas
    this.films = films
  }

  // Función que modifica el parametro films según el género de las películas
  recommendByGenre (all_films)
  {
    // Las películas introducidas no pueden ser un vector nulo
    if (all_films != null)
    {
      // Las películas que cumplan los requisitos las añadimos al vector de películas recomendadas
      all_films.forEach(film => {
        if (film.checkGenres(this))
          this.films.push(film)
      })
    }
  }
}