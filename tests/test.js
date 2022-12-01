import { assert } from 'chai';              // Biblioteca assert de Chai
import { expect } from 'chai';              // Biblioteca expert de Chai
import User from '../src/user.js';          // Clase User (entidad)
import Film from '../src/film.js';          // Clase User (entidad)

// Comprobaciones para la clase User
describe('Clase User', function(){

    // Testea que se haya cargado bien la biblioteca
    describe('Cargar la biblioteca', function(){

        it('Se ha cargado correctamente', function(){
            assert.ok(User, "Cargado")
        });
    
    });

    // Testea que el constructor funciona correctamente
    describe('Prueba del constructor', function(){

        it('Se ha creado el objeto User correctamente', function(){
            // Ajustar
            var fav_genres = ['Terror', 'Comedy']
            var films = [
                new Film(
                    "Annabelle",
                    2014,
                    ['Terror'],
                    ['Annabelle Wallis', 'Ward Horton', 'Alfre Woodard']
                )
            ]

            // Actuar
            var new_user = new User(fav_genres, films)

            // Afirmar
            expect(new_user.fav_genres.length).to.be.equal(2)
            expect(new_user.fav_genres[0]).to.be.equal('Terror')
            expect(new_user.fav_genres[1]).to.be.equal('Comedy')
            expect(new_user.films.length).to.be.equal(1)
        })
    })

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