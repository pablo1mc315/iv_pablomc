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

})