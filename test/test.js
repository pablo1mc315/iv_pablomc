import assert from 'node:assert'                // Librería de aserciones estándar de Node
import { describe, it } from 'node:test'

import User from '../src/user.js'               // Clase User (entidad)
import Film from '../src/film.js'               // Clase Film

const list_films = [
    ["Annabelle", 2014, ['Terror']],
    ["Inside Out", 2015, ['Comedy', 'Cartoon']],
    ["El último duelo", 2021, ['Action', 'Drama']],
    ["Los hijos del mal", 1992, ['Terror', 'Drama']],
    ["Halloween con la familia Adams", 1977, ['Comedy', 'Terror']], 
    ["Dracula", 1992, ['Drama', 'Terror']], 
    ["Malnazidos", 2020, ['Terror', 'Comedy', 'Action']], 
    ["Ocho apellidos vascos", 2014, ['Comedy', 'Romance']],
    ["Frozen", 2013, ['Cartoon']] 
]

let films = []
list_films.forEach(f => films.push(new Film (f[0], f[1], f[2])))

// Comprobaciones para la clase User
describe('Clase User', function() {

    // Testea que el algoritmo de recomendaciones es correcto
    describe('Prueba de la lógica de negocio', function(){

        it('Calcular géneros favoritos cuando el usuario ve su primera película', function(){
            // Ajustar
            let new_user = new User()

            // Actuar
            new_user.addFilm(films[0])          // Terror

            // Afirmar
            assert.equal(new_user.films.length, 1)
            assert.equal(new_user.films[0].title, "Annabelle")
            assert.equal(new_user.fav_genres.length, new_user.films[0].genres.length)
            new_user.fav_genres.forEach(genre => 
                assert.notEqual(new_user.films[0].genres.indexOf(genre), -1)
            )
        })

        it('Calcular géneros favoritos cuando ninguno aparece en la mitad o más de las películas', function(){
            // Ajustar
            let new_user = new User()
            let index = [0,2,4,7,8]
    
            // Actuar
            index.forEach(i => new_user.addFilm(films[i]))

            // Afirmar
            assert.equal(new_user.films.length, 5)
            assert.equal(new_user.fav_genres.length, 2)                      // Terror, Comedy
            assert.notEqual(new_user.fav_genres.indexOf("Terror"), -1)
            assert.notEqual(new_user.fav_genres.indexOf("Comedy"), -1)
        })

        it('Calcular géneros favoritos cuando alguno/s aparecen en la mitad o más de las películas', function(){
            // Ajustar
            let new_user = new User()
            let index = [0,2,4,6,7,8]
    
            // Actuar
            index.forEach(i => new_user.addFilm(films[i]))

            // Afirmar
            assert.equal(new_user.films.length, 6)
            assert.equal(new_user.fav_genres.length, 2)                      // Terror, Comedy
            assert.notEqual(new_user.fav_genres.indexOf("Terror"), -1)
            assert.notEqual(new_user.fav_genres.indexOf("Comedy"), -1)
        })
    })

})