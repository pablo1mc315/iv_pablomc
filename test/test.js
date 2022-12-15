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
    new Film ("Ocho apellidos vascos", null, ['Comedy', 'Romance'], null) 
]

// Comprobaciones para la clase User
describe('Clase User', function() {

    // Testea que el algoritmo de recomendaciones es correcto
    describe('Prueba de la lógica de negocio', function(){
        it('El algoritmo asigna correctamente los géneros favoritos del usuario', function(){
            // Ajustar
            var new_user = new User(null, films)

            // Actuar
            new_user.setFavGenres(new_user.calcFavGenres())

            // Afirmar
            assert.equal(new_user.fav_genres.length, 2)
            assert.equal(new_user.fav_genres[0], "Terror")
            assert.equal(new_user.fav_genres[1], "Comedy")
        })
    })

})