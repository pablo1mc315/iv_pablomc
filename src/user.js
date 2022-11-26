/**
 * Implementación de clase User
 */

class User {
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
    this.fav_genres = fav_genres || []

    // Asignamos peliculas
    if (films)
    {
      for (let index = 0; index < films.length; index++)
      {
        const aux = { name: films[index].title, date: (new Date()).getFullYear() }
        this.films.push(aux)
      }
    }
    else
      this.films = []
  }
}
