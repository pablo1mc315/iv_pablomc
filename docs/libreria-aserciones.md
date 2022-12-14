# Librerías de aserciones

## Criterios de búsqueda de una librería de aserciones:

Las librerías o bibliotecas de aserciones son un conjunto de funciones que nos permiten hacer ciertas validaciones para comprobar que nuestro código funciona correctamente. Puesto que en [#34](https://github.com/pablo1mc315/iv_pablomc/issues/34) hemos elegido MochaJS como test-runner y este no trae una librería de aserciones propia, debemos elegir una. 

En cuanto a los criterios en los que me basaré para elegir una biblioteca de aserciones, voy a hacer uso de buenas prácticas y voy a comparar las que aparecen recomendadas en la [web oficial de MochaJS](https://mochajs.org/#assertions). Los criterios que deberá cumplir cada una para nuestro proyecto son:

- Que sea una librería de aserciones que utilice BDD para que nos sea más fácil su uso y entendimiento.
- Que esté actualizada y tenga un continuo mantenimiento, así como una comunidad bastante activa, para que nuestra aplicación no quede obsoleta en un futuro.

## Librerías de aserciones que cumplen los criterios:

### node:test

Es la librería estándar que Node.js trae por defecto que facilita la creación de tests JavaScript devolviendo resultados en fomato TAP.

- :heavy_check_mark: Reduce la deuda técnica ya que no necesita instalaciones extra como, por ejemplo, chai.
- :heavy_check_mark: En cuanto a mantenimiento, es una característica de Node introducida en la versión 18.12.1 y mejorada en la 19.2.0, por lo que está en continuo mantenimiento a pesar de ser bastante reciente.


### should.js

- :heavy_check_mark: Es bastante conocido y tiene una comunidad mediana, aunque, por lo que he podido investigar, cada vez se está usando cada vez menos.
- :x: El mantenimiento es su principal punto débil y lo cual lo descarta como una posible opción, puesto que no se actualiza desde marzo de 2019.

### expect.js

Es una librería de aserciones minimalista basada en should.js.

- :heavy_check_mark: Tiene una comunidad bastante grande y está en continuo mantenimiento, por lo que eso no será un problema.

### Chai

Es una librería de aserciones que permite el tanto las prácticas BDD como TDD.

- :heavy_check_mark: Tiene una comunidad muy grande y está en continuo mantenimiento, puesto que es el más utilizado, además de ser el que más puntuación tiene en comparadores como Snyk.
- :heavy_check_mark: Como punto positivo, cuenta con su [propia web](https://www.chaijs.com/) en la que podemos acceder a la documentación, plugins, etc., lo cual nos puede ayudar mucho a la hora de trabajar con él.

### unexpected

- :heavy_check_mark: Tiene un buen mantenimiento, pues se sigue actualizando a día de hoy. Además, su comunidad está en crecimiento, como podemos observar en [Snyk](https://snyk.io/advisor/npm-package/unexpected).
- :heavy_check_mark: Al igual que Chai, cuenta con su [propia web](https://unexpected.js.org/) donde podemos encontrar documentación, ejemplos, plugins, etc.

## Librería de aserciones elegida:

Me he decantado por elegir la biblioteca estándar de Node, ya que es bastante parecida a Chai en cuanto a sintaxis y genera menos deuda técnica al no tener que instalar dependencias extra. Además, al ser más reciente, está en continuo mantenimiento, además de ser estándar de Node, lo cual nos asegura que nuestro proyecto no quedará obsoleto en este aspecto.