/**
 * Implementación de clase User:
 * Clase necesaria para almacenar los atributos del usuario con los que implementaremos el objeto valor
 * 
 */

class User
{
    /**
     * Metodos
     * @param {Array} genres 
     * Array de Peliculas, la estructura del array es de la forma:
     * @param {Array} films 
     * Donde: 
     * films = [{name: 'Manolito Gafotas', date: 2014, times_seen: 1}, {name: 'Mafalda', date: 2017, times_seen: 3}];
     */
    constructor(genres,films)
    {
        this.genres = genres;
        this.films = films;
    }
}