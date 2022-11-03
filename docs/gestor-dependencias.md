# Gestor de dependencias

## Gestores de dependencias a investigar a partir los cuales elegir:

### npm

Es la herramienta por defecto de JavaScript para la tarea de compartir e instalar paquetes. Nos permite gestionar tanto dependencias como tareas (como hemos visto en #27). A pesar de ser el más utilizado desde hace años, tiene dos principales problemas: es lento y el orden de instalación de las dependencias no es predecible, aunque estos no son realmente problemas importantes en proyectos pequeños, pero sí lo son cuando se manejan proyectos de gran tamaño entre muchas personas.

### Yarn

Es un gestor dependencias de JavaScript, basado en npm, que está muy enfocado en la velocidad y la seguridad, muy rápido y muy fácil de usar. Además, devuelve un feedback al usuario bastante amigable. Las principales diferencias que tiene respecto a npm a tener en cuenta son:

- Tiene un chequeador de licencias, que puede ser útil para saber exactamente qué permiten los paquetes que estamos usando, entre otras cosas.
- Es mucho más rápido a la hora de instalar los paquetes, lo cual es uno de los principales motivos por el cual se utiliza, pero un proyecto no demasiado grande como este, no afecta demasiado.
- Sin embargo, no es el mejor en cuanto a mantenimiento se refiere.

### pNpm

Es un gestor de dependencias que usa los formatos de configuración de npm pero, a diferencia de este y de Yarn, ahorra mucho espacio en disco proporcional a la cantidad de proyectos y dependencias y tiene instalaciones muy rápidas. Su tabla de comandos es muy parecida a la de npm.

No se le reconocen problemas graves de seguridad y es muy popular entre desarrolladores JavaScript, por lo que tiene una comunidad muy activa y un mantenimiento continuo. Sin embargo, tiene menos documentación que los dos anteriores.

## Gestor de dependencias elegido:

Tenía la duda entre npm y Yarn, ya que el segundo es más moderno y soluciona problemas que se encontraron en el primero, pero, finalmente, me he decantado por npm ya que las diferencias que hay entre ambos se han reducido notablemente en la actualización a npm 5. Además, las diferencias que hay entre ellos no afectan demasiado a la hora de un proyecto como el que nos atañe, aunque quizás sí se verían reflejadas en proyectos mucho más grandes que necesiten gran cantidad de dependencias.