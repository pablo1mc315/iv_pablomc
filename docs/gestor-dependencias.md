# Gestor de dependencias

## Criterios de búsqueda de un gestor de dependencias:

Los gestores de dependencias son herramientas específicas para llevar a cabo la instalación de todas las necesarias de un proyecto en un lenguaje determinado. Para elegir uno para nuestra aplicación, se establecen los siguientes criterios:

- Obligatoriamente, deberá permitir gestionar dependencias de JavaScript, así como seguir los estándares del lenguaje, principalmente, que utilice el fichero de dependencias package.json, lo cual va a permitir que cualquier persona pueda comprender y visualizar las dependencias que hemos instalado o que son necesarias para el proyecto (incluso información acerca del mismo) simplemente visualizando el fichero.
- La velocidad es importante, aunque no necesariamente debe funcionar muy bien para proyectos muy grandes, puesto que este no lo es.
- Que esté actualizado y tenga un continuo mantenimiento, así como una comunidad bastante activa, para que nuestra aplicación no quede obsoleta en un futuro.
- Que permita minimizar el riesgo de problemas de seguridad.

## Gestores de dependencias que cumplen los criterios:

### npm

(Node Package Manager) Nos permite gestionar tanto dependencias como tareas, aunque en menor medida (como hemos visto en [#27](https://github.com/pablo1mc315/iv_pablomc/issues/27)).

- :heavy_check_mark: Su comunidad es enorme y muy activa, puesto que es el más utilizado desde hace años, y está en continuo mantenimiento.
- :heavy_check_mark: No se le reconocen problemas de seguridad.
- :x: En cuanto a velocidad, es lento, además de que el orden de instalación de las dependencias no es predecible. Este problema afecta principalmente a proyectos grandes, por lo que no nos afectaría demasiado.

### Yarn

Sus principales características son:

- :heavy_check_mark: Es mucho más rápido a la hora de instalar los paquetes que npm, lo cual es uno de los principales motivos por el cual se utiliza, pero para un proyecto no demasiado grande como este no afecta demasiado, aunque es algo a tener en cuenta.
- :heavy_check_mark: No se le reconocen problemas de seguridad.
- :x: A pesar de tener una comunidad cada vez mayor, no es el mejor en cuanto a mantenimiento se refiere.

### pNpm

Es un gestor de dependencias de JavaScript orientado a ahorrar espacio en el disco, almacenando cada versión de una dependencia se almacena físicamente en `node_modules` solo una vez a partir de enlaces simbólicos, lo cual lo diferencia de los dos anteriores y es uno de los principales motivos de que esté empezando a ser sustituto de npm.

- :heavy_check_mark: Es mucho más rápido a la hora de instalar los paquetes que npm y Yarn, por lo cual está empezando a ser muy utilizado por la comunidad.
- :heavy_check_mark: No se le reconocen problemas de seguridad. Usa sumas de verificación para verificar la integridad de cada paquete instalado antes de que se ejecute su código, lo cual nos da un plus en este aspecto.
- :heavy_check_mark: Tiene una comunidad muy activa y en continuo crecimiento.
- :heavy_check_mark: Al ser más joven que los demás, está en constante mantenimimento y actualización.

## Gestor de dependencias elegido:

Tras investigar acerca del cumplimiento de estos requisitos e informarme acerca de su crecimiento, creo que pNpm es la mejor opción para el proyecto. Digo esto porque está comprobado que es el mejor en cuanto a tema de velocidad debido, principalmente, a la cantidad de espacio que ahorra en el disco a medida que aumenta el tamaño del proyecto.

Además tiene un plus en seguridad y su comunidad está creciendo cada vez más, así que pienso que puede ser una buena opción darle una oportunidad, principalmente porque no tiene desventajas notables respecto a los otros dos en comparación a las ventajas que ofrece.