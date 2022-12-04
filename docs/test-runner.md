# Test-Runners

## Criterios de búsqueda de un test-runner:

Los test-runners son herramientas que se utilizan para seleccionar archivos de prueba y ejecutarlos para verificar errores y fallas de nuestra aplicación según unos estándares de referencia. Los criterios que deberá cumplir un test-runner para nuestro proyecto son:

- Cuanto más rápido se ejecuten los tests, mejor, por lo cual se valorará un test-runner que ejecute test en paralelo.
- Que esté actualizado y tenga un continuo mantenimiento, así como una comunidad bastante activa, para que nuestra aplicación no quede obsoleta en un futuro.
- Que tenga buena documentación se considera un plus, puesto que no estoy demasiado familiarizado con los test-runners.
- En el caso de que no cuente con su propia librería de aserciones, deberemos abrir un issue para elegir una que sea compatible.

## Test-runners que cumplen los criterios:

### MochaJS

Es un test-runner de JavaScript destinado a probar aplicaciones que se ejecutan con Node.js.

- :heavy_check_mark: Es bastante bueno en cuanto a velocidad se refiere y ejecuta los test en paralelo, aunque no es el mejor.
- :heavy_check_mark: Puesto que es muy antiguo, podemos encontrar muchos tutoriales y documentación.
- :heavy_check_mark: Tiene una gran comunidad y su mantenimiento es constante.
- :x: No cuenta con su propia biblioteca de aserciones.

### Jest

Se utiliza para probar códigos JavaScript, especialmente aplicaciones desarrolladas con ReactJS (lo cual no estamos utilizando, aunque se puede usar también para Node.js sin problema).

- :heavy_check_mark: Su ejecución en paralelo es muy rápida y tiene un gran rendimiento, por lo que últimamente ha aumentado mucho su comunidad.
- :heavy_check_mark: Tiene bastante documentación a la cual es fácil acceder.
- :heavy_check_mark: Tiene su propia biblioteca de aserciones, por lo que no sería necesario instalar nada más.
- :x: Muchos usuarios han declarado que la curva de aprendizaje es bastante difícil en comparación con otros test-runners.

### Otras opciones

No he valorado otras opciones como Jasmine, puesto que necesita ficheros adicionales que aumentan la deuda técnica (hay que configurar el fichero test.js, además de que tiene características muy parecidas a MochaJS y Jest.


## Test-runner elegido:

En este caso, no hay demasiadas diferencias entre ambos. He decidido elegir MochaJS puesto que no existe una diferencia notable en cuanto a velocidad (además de que estamos trabajando en un proyecto no muy grande, lo cual no se notará) y su comunidad es mayor que la de Jest. No cuenta con su propia biblioteca de aserciones, por lo que se creará un issue para elegir una.