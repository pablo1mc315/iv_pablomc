/**
 * Implementación de clase Suggestions
 * De 1 (usuario) a muchos (peliculas)
 */

class Suggestions
{
    /**
     * Metodos
     * @param {Array} films
     * @param {String} user
     */
    constructor(films,user)
    {
        this.films = films;
        this.user = user;
    }
}