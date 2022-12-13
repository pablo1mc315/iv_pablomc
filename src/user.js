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

  // Función que modifica el parametro fav_genres según las películas vistas por el usuario
  // (voy a usar el algoritmo a priori de Argawal)
  setFavGenres ()
  {
    // Umbral escogido (si la mitad de las películas vistas por el usuario contienen un género, se puede
    // considerar como "favorito")
    var umbral = parseInt(this.films.length/2)

    // Calculamos la frecuencia con la que un género aparece en las películas vistas por el usuario
    var repsPorGenero = new Map()

    this.films.map(film => {
      // Una película puede tener varios géneros
      film.genres.map(genre => {
        // Si el género ya ha aparecido en alguna película, sumamos 1 repetición y, si no, lo añadimos
        if (repsPorGenero.has(genre))
          repsPorGenero[genre] += 1
        else
          repsPorGenero.set(genre, 1)
      })
    })

    // Nos quedamos simplemente con los géneros que superan el umbral de repeticiones
    this.fav_genres = repsPorGenero.keys().filter(i => { return repsPorGenero[i] >= umbral })
  }
}