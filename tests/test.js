const assert = require('chai').assert
const user = require('../src/user')

// Comprobaciones para la clase User
describe('Clase User', function(){

    // Testea que se haya cargado bien la biblioteca
    describe('Cargar la biblioteca', function(){

        it('Se ha cargado correctamente', function(){
            assert.ok(user, "Cargado")
        });
    
    });

})