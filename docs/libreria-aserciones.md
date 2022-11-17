# Librerías de aserciones

## Criterios de búsqueda de una librería de aserciones:

Las librerías o bibliotecas de aserciones son un conjunto de funciones que nos permiten hacer ciertas validaciones para comprobar que nuestro código funciona correctamente. Puesto que en #34 hemos elegido MochaJS como test-runner y este no trae una librería de aserciones propia, debemos elegir una. 

En cuanto a los criterios en los que me basaré para elegir una biblioteca de aserciones, voy a hacer uso de buenas prácticas y voy a comparar las que aparecen recomendadas en la [web oficial de MochaJS](https://mochajs.org/#assertions). Los criterios que deberá cumplir cada una para nuestro proyecto son:

- La velocidad es importante, puesto que cuanto más rápido se ejecuten los test, mejor.
- Que esté actualizado y tenga un continuo mantenimiento, así como una comunidad bastante activa, para que nuestra aplicación no quede obsoleta en un futuro.

## Librerías de aserciones que cumplen los criterios:

### should.js

- :heavy_check_mark: No se le han detectado problemas graves de seguridad.
- :x: Es bastante conocido y tiene una comunidad mediana, aunque cada vez se está usando cada vez menos.
- :x: El mantenimiento es su principal punto débil y lo cual lo descarta como una posible opción, puesto que no se actualiza desde marzo 2019.

### expect.js

Es una librería de aserciones minimalista basada en should.js.

- :heavy_check_mark: Al igual que el anterior, no se le han detectado problemas graves de seguridad.
- :heavy_check_mark: Tiene una comunidad bastante grande y está en continuo mantenimiento, por lo que eso no será un problema.

### Chai

- :heavy_check_mark: No se le han detectado problemas graves de seguridad.
- :heavy_check_mark: Tiene una comunidad muy grande y está en continuo mantenimiento, puesto que es el más utilizado, además de ser el que más puntuación tiene en comparadores como Snyk.
- :heavy_check_mark: Como punto positivo, tiene mucha más documentación y tutoriales que cualquier otro, lo cual nos puede ayudar mucho a la hora de trabajar con él.

### unexpected

- :heavy_check_mark: No se le reconocen problemas graves de seguridad.
- :heavy_check_mark: Tiene un buen mantenimiento, pues se sigue actualizando a día de hoy.
- :x: Sin embargo, no tiene una una comunidad demasiado grande comparada con las demás, por lo que es poco común encontrar documentación acerca de ella.

### Otras opciones

He descartado otras opciones que también aparecen recomendadas en la web oficial de MochaJS como 'better-assert', ya que, si bien no tiene problemas de seguridad, tiene una comunidad muy limitada y no se mantiene desde hace años. 


## Librería de aserciones elegida:

Me he decantado por elegir Chai, ya que es la que más se suele utilizar junto con MochaJS y la que más documentación aporta. Además, como hemos mencionado, es la que tiene una comunidad mayor y está completamente al día, por lo que nos asegura un buen rendimiento y que el proyecto no va a quedar obsoleto en cuanto a librería de aserciones se refiere.