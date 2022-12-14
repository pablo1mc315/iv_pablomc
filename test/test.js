import assert from 'node:assert'                // Librería de aserciones estándar de Node
import { describe, it } from 'node:test'

import User from '../src/user.js'               // Clase User (entidad)
import Film from '../src/film.js'               // Clase Film


// Comprobaciones para la clase User
describe('Clase User', function() {

    // Testea que el algoritmo de recomendaciones es correcto
    describe('Prueba de la lógica de negocio', function(){

        it('El algoritmo asigna correctamente los géneros favoritos del usuario', function(){
            // Ajustar
            var films = [                  // Asignamos películas vistas al usuario
                new Film ("Annabelle", 2014, ['Terror'], ['Annabelle Wallis', 'Ward Horton', 'Alfre Woodard']),
                new Film ("Inside Out", 2015, ['Comedy', 'Cartoon'], ['Phyllis Smith', 'Mindy Kaling']),
                new Film ("El último duelo", 2021, ['Action', 'Drama'], ['Lady Gaga', 'Clare Dunne', 'Bryony Hannah']),
                new Film ("Los hijos del mal", 1992, ['Terror', 'Drama'], ['Mel Harris', 'Dwight Schultz', 'Ashley Peldon']),
                new Film ("Halloween con la familia Adams", 1977, ['Comedy', 'Terror'], ['John Astin', 'Ted Cassidy', 'Jackie Coogan']), 
                new Film ("Dracula", 1974, ['Drama', 'Terror'], ['Jack Palance', 'Simon Ward', 'Nigel Davenport']), 
                new Film ("Malnazidos", 2020, ['Terror', 'Comedy', 'Action'], ['Miki Esparbé', 'Aura Garrido', 'Luis Callejo']), 
                new Film ("Ocho apellidos vascos", 2014, ['Comedy', 'Romance'], ['Clara Lago', 'Dani Rovira', 'Carmen Machi']) 
            ]

            var fav_genres = []
            var new_user = new User(fav_genres, films)

            // Actuar
            new_user.setFavGenres()                 // Realizamos la recomendación por géneros

            // Afirmar
            assert.equal(new_user.fav_genres.length, 2)
            assert.equal(new_user.fav_genres[0], "Terror")
            assert.equal(new_user.fav_genres[1], "Comedy")
        })
    })

})