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
        
        var date = new Date();
        var default_array = new Array();
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
        this.year = year || date.getFullYear();
        //Asignamos genres
        this.genres = genres || default_array;
        //Asignamos actors
        this.actors = actors || default_array;
    }
}

 
 