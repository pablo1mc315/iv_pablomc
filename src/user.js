/**
 * Implementación de clase User
 */

export default class User {
  /**
    * Constructor
    * @param {Array[String]} fav_genres
    * @param {Array[Film]} films
    */
  constructor (fav_genres, films)
  {
    // Asignamos genres
    this.fav_genres = fav_genres

    // Asignamos peliculas
    this.films = films
  }

  /** Función que modifica los géneros favoritos del usuario según las películas vistas por el mismo
    * (usando algoritmo 'a priori' de Agrawal)
    * @return {Array[String]}
    */ 
  calcFavGenres ()
  {
    var favs = []

    // Umbral escogido (si la mitad de las películas vistas por el usuario contienen un género, se puede
    // considerar como "favorito")
    var umbral = parseInt(this.films.length/2)

    // Calculamos la frecuencia con la que un género aparece en las películas vistas por el usuario
    var reps_por_genero = new Map()

    this.films.map(film => {
      // Una película puede tener varios géneros
      film.genres.map(genre => {
        // Si el género ya ha aparecido en alguna película, sumamos 1 repetición y, si no, lo añadimos
        if (reps_por_genero.has(genre))
          reps_por_genero.set(genre, reps_por_genero.get(genre) + 1)
        else
          reps_por_genero.set(genre, 1)
      })      
    })

    // Nos quedamos simplemente con los géneros que superan el umbral de repeticiones
    reps_por_genero.forEach((rep, genero) => {
      if (rep >= umbral)
        favs.push(genero)
    })

    // Si no hay ningun género que cumpla el criterio anterior, nos quedamos con el que más se repita
    if (favs.length == 0)
    {
      max = -1

      reps_por_genero.forEach((rep, genero) => {
        if (rep > max)
          max = rep
      })

      favs = reps_por_genero.values().forEach( value => value == max )
    }

    return favs
  }

  /**
    * Función que añade una nueva película al conjunto de películas vistas del usuario
    * @param {Film} new_film
    */
  addFilm (new_film)
  {
    // Añado la nueva película
    this.films.push(new_film)

    // Recalculo los géneros favoritos del usuario una vez añadida la nueva película
    this.fav_genres = this.calcFavGenres()
  }
}