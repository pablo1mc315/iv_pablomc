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
     * @param {Array[Film]} films 
     * Donde: 
     * films = [{name: 'Manolito Gafotas', date: 2014}, {name: 'Mafalda', date: 2017}];
     */

    constructor(genres,films)
    {
        // Asignamos genres
        this.genres = genres || [];

        // Asignamos peliculas
        if (films)
        {
            for (let index = 0; index < films.length; index++) 
            {
                var aux = {name: films[index].title, date: (new Date()).getFullYear()};
                this.films.push(aux);
            }
        }
        else
            this.films = [];
    }
 }
 