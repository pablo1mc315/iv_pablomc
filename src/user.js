/**
 * Implementación de clase User
 */

class User
{
    /**
     * Metodos
     * @param {String} email 
     * @param {Array} genres 
     * Array de Peliculas, la estructura del array es de la forma:
     * @param {Array} films 
     * Donde: 
     * films = [{name: 'Manolito Gafotas', date: 2014}, {name: 'Mafalda', date: 2017}];
     */
    constructor(email,genres,films)
    {
        this.email = email;
        this.genres = genres;
        this.films = films;
    }
}