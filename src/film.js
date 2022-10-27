/**
 * Implementación de clase Film
 */

class Film
{
    /**
     * Metodos
     * @param {String} title
     * @param {Number} year
     * @param {Array} genres
     * @param {Array} actors
     */
    constructor(title,year,genres,actors)
    {
        //Asignamos title
        if(title.trim().length != 0)
        {
            this.title = title;
        }
        else
        {
            //Aqui se lanza error porque el titulo es imprescindible para
            //la pelicula (se puede usar el constructor unicamente con el titulo)
            throw new Error("Invalid title");
        }
        //Asignamos year
        this.year = year || (new Date()).getFullYear();
        //Asignamos genres
        this.genres = genres || [];
        //Asignamos actors
        this.actors = actors || [];
    }
}

 
 