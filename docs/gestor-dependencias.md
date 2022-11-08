# Gestor de dependencias

## Criterios de búsqueda de un gestor de dependencias:

Los gestores de dependencias son herramientas específicas para llevar a cabo la instalación de todas las necesarias de un proyecto en un lenguaje determinado. Para elegir uno para nuestra aplicación, se establecen los siguientes criterios:

- Que sea un gestor de dependencias de JavaScript, a ser posible basado en NodeJS.
- Que utilice el fichero de dependencias package.json (buenas prácticas).
- No necesariamente debe funcionar muy bien para proyectos muy grandes, puesto que este no lo es.
- Que esté actualizado y tenga un continuo mantenimiento, para que nuestra aplicación no quede obsoleta en un futuro.

Estos criterios se cumplen en todos los gestores mencionados a continuación.

## Gestores de dependencias que cumplen los criterios:

### npm

(Node Package Manager) Permite instalar, actualizar y publicar dependencias tanto públicas como privadas. Nos permite gestionar tanto dependencias como tareas, aunque en menor medida (como hemos visto en [#27](https://github.com/pablo1mc315/iv_pablomc/issues/27)).

- A pesar de ser el más utilizado desde hace años, tiene dos principales problemas: es lento y el orden de instalación de las dependencias no es predecible, aunque estos no son realmente problemas importantes en proyectos pequeños, pero sí lo son cuando se manejan proyectos de gran tamaño entre muchas personas.
- Es el más estandarizado y el más utilizado por la comunidad, por lo que está en continuo mantenimiento y desarrollo.

### Yarn

Las principales diferencias que tiene respecto a npm a tener en cuenta son:

- Tiene un chequeador de licencias, que puede ser útil para saber exactamente qué permiten los paquetes que estamos usando, entre otras cosas, lo cual no es esencial pero le da un plus.
- Es mucho más rápido a la hora de instalar los paquetes, lo cual es uno de los principales motivos por el cual se utiliza, pero para un proyecto no demasiado grande como este, no afecta demasiado.
- Sin embargo, a pesar de tener una comunidad cada vez mayor, no es el mejor en cuanto a mantenimiento se refiere.

### pNpm

A diferencia de npm y de Yarn, ahorra mucho espacio en disco y tiene instalaciones muy rápidas. No se le reconocen problemas graves de seguridad y es muy popular entre desarrolladores JavaScript, por lo que tiene una comunidad muy activa y un mantenimiento continuo.

## Gestor de dependencias elegido:

Tenía la duda entre npm y Yarn, ya que el segundo es más moderno y soluciona problemas que se encontraron en el primero, pero, finalmente, me he decantado por npm ya que las diferencias que hay entre ambos se han reducido notablemente en la actualización a npm 5, principalmente en cuanto a la velocidad, que se veía muy mermada en otras versiones de npm con respecto a Yarn. 

Además, pienso que las diferencias que hay entre ellos no afectan demasiado a la hora de un proyecto como el que nos atañe, como se puede ver según el tercer criterio, aunque quizás sí se verían reflejadas en proyectos mucho más grandes que necesiten gran cantidad de dependencias.