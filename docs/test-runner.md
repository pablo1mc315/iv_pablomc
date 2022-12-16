# Test-Runners

## Criterios de búsqueda de un test-runner:

Los test-runners son herramientas que se utilizan para seleccionar archivos de prueba y ejecutarlos para verificar errores y fallas de nuestra aplicación según unos estándares de referencia. Los criterios que deberá cumplir un test-runner para nuestro proyecto son:

- Cuanto más rápido se ejecuten los tests, mejor, por lo cual se valorará un test-runner que ejecute test en paralelo.
- Que esté actualizado y tenga un continuo mantenimiento, así como una comunidad bastante activa, para que nuestra aplicación no quede obsoleta en un futuro.
- En el caso de que no cuente con su propia librería de aserciones, deberemos abrir un issue para elegir una que sea compatible.

## Test-runners que cumplen los criterios:

### MochaJS

Es un test-runner de JavaScript destinado a probar aplicaciones que se ejecutan con Node.js.

- :heavy_check_mark: Permite ejecutar los test en paralelo.
- :heavy_check_mark: Puesto que es muy antiguo, podemos encontrar muchos tutoriales y documentación.
- :heavy_check_mark: Tiene una gran comunidad y su mantenimiento es constante.
- :x: No cuenta con su propia biblioteca de aserciones.

### Jest

- :heavy_check_mark: Su ejecución en paralelo es muy rápida y tiene un gran rendimiento, por lo que últimamente ha aumentado mucho su comunidad.
- :heavy_check_mark: Tiene bastante documentación a la cual es fácil acceder.
- :heavy_check_mark: Tiene su propia biblioteca de aserciones, por lo que no sería necesario instalar nada más.
- :x: Muchos usuarios han declarado que la curva de aprendizaje es bastante difícil en comparación con otros test-runners.

### AVA

- :heavy_check_mark: Permite ejecutar tests en paralelo, por lo que su rendimiento es bueno.
- :heavy_check_mark: Tiene mayor puntuación en [Snyk](https://snyk.io/advisor/npm-package/ava) que los dos anteriores.
- :heavy_check_mark: No está tan extendido pero, sin embargo, está en continuo mantenimiento actualmente y se usa en grandes proyectos.

### Otras opciones

No he valorado otras opciones como Jasmine, puesto que necesita ficheros adicionales que aumentan la deuda técnica (hay que configurar el fichero test.js), además de que tiene características muy parecidas a MochaJS y Jest.


## Test-runner elegido:

En este caso, no hay demasiadas diferencias entre ambos. He decidido elegir MochaJS puesto que, según los sitios que he consultado, es más fácil y rápido de aprender, además de dar mayor flexibilidad a la hora de crear los tests y su comunidad está más extendida. No cuenta con su propia biblioteca de aserciones, por lo que se creará un issue para elegir una.