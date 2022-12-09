import { expect } from 'chai'              // Biblioteca expect de Chai
import User from '../src/user.js'          // Clase User (entidad)
import Film from '../src/film.js'          // Clase User (entidad)


// Comprobaciones para la clase User
describe('Clase User', function(){

    // Testea que el algoritmo de recomendaciones es correcto
    describe('Prueba de la lógica de negocio', function(){

        it('El algoritmo asigna correctamente según los géneros favoritos del usuario', function(){
            // Ajustar
            var fav_genres = ['Terror', 'Comedy']
            var films = []
            var all_films = [                           // Creamos las películas disponibles
                new Film(
                    "Annabelle",
                    2014,
                    ['Terror'],
                    ['Annabelle Wallis', 'Ward Horton', 'Alfre Woodard']
                ),
                new Film(
                    "Inside Out",
                    2015,
                    ['Comedy', 'Cartoon'],
                    ['Phyllis Smith', 'Mindy Kaling']
                ),
                new Film(
                    "El último duelo",
                    2021,
                    ['Action', 'Drama'],
                    ['Lady Gaga', 'Clare Dunne', 'Bryony Hannah']
                )
            ]

            var new_user = new User(fav_genres, films)
            new_user.recommendByGenre(all_films)                // Realizamos la recomendación

            // Actuar
            var contenido = false
            new_user.films.forEach(film => contenido = film.checkGenres(new_user))

            // Afirmar            
            expect(contenido).to.be.equal(true)                 // Solo se recomiendan dos películas
            expect(new_user.films.length).to.be.equal(2)
            expect(new_user.films[0].title).to.be.equal("Annabelle")
            expect(new_user.films[1].title).to.be.equal("Inside Out")
        })
    })

})