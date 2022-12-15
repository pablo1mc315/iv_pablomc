import assert from 'node:assert'                // Librería de aserciones estándar de Node
import { describe, it } from 'node:test'

import User from '../src/user.js'               // Clase User (entidad)
import Film from '../src/film.js'               // Clase Film

const films = [
    new Film ("Annabelle", null, ['Terror'], null),
    new Film ("Inside Out", null, ['Comedy', 'Cartoon'], null),
    new Film ("El último duelo", null, ['Action', 'Drama'], null),
    new Film ("Los hijos del mal", null, ['Terror', 'Drama'], null),
    new Film ("Halloween con la familia Adams", null, ['Comedy', 'Terror'], null), 
    new Film ("Dracula", null, ['Drama', 'Terror'], null), 
    new Film ("Malnazidos", null, ['Terror', 'Comedy', 'Action'], null), 
    new Film ("Ocho apellidos vascos", null, ['Comedy', 'Romance'], null),
    new Film ("Frozen", null, ['Cartoon'], null) 
]

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