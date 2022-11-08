# Gestor de tareas

## Criterios de búsqueda de un gestor de tareas

Un gestor de tareas es una herramienta necesaria para la ejecución de los tareas como, por ejemplo, la ejecución de test usando las herramientas de construcción, la comprobación de que la sintaxis del código fuente es correcta o la gestión de tareas del lenguaje que se esté usando. Esto nos permite automatizar cualquier tarea de nuestro proyecto en una única orden. Para elegir uno para nuestra aplicación, se establecen los siguientes criterios:

- Que permita gestionar tareas de JavaScript, sobre todo en el entorno de NodeJS, que es el que se utilizará.
- Que gestione todas las tareas desde un único fichero donde se incluyan todas ellas de manera organizada.
- Que esté actualizado y tenga un continuo mantenimiento, para que nuestra aplicación no quede obsoleta en un futuro.

Estos criterios se cumplen en todos los gestores mencionados a continuación.

## Gestores de tareas a investigar a partir los cuales elegir:

### npm

Viene incorporado en NodeJS y, como ya se ha explicado en [#26](https://github.com/pablo1mc315/iv_pablomc/issues/26), funciona tanto como gestor de tareas como gestor de dependencias. Hay dos tipos de tareas con npm, tareas integradas (las que son comunes a la mayoría de los proyectos, como `test` o `install`, que vienen predefinidas por el propio gestor) y tareas propias (aquellas que nos permite crear npm mediante scripts propios). Sin embargo, no es muy común utilizarlo de esta forma, ya que hay herramientas que son gestores de tareas específicos y mucho más completos y con mas funcionalidades.

### Grunt

Guarda toda la información en el archivo gruntfile.js, donde se incluye el código con el que se integran y configuran los módulos de cada una de las tareas. Está estrictamente orientado a los archivos, creándolos de forma temporal y local como resultado de las tareas ejecutadas. Es un gestor de tareas bastante actualizado y con una comunidad muy activa, lo cual le da un plus a la hora de elegirlo como gestor de tareas.

### Gulp

El fichero para integrar las tareas es gulpfile.js, que especifica las tareas posibles. Cada proceso se ejecuta en su mayor parte en la memoria principal antes de que el resultado se escriba de nuevo en cada archivo, lo cual le mayor velocidad, por lo que es mucho más útil para proyectos grandes y complejos. No es precisamente el mejor en temas de seguridad ya que se le ha descuidado un poco ese aspecto, lo cual contrarresta sus ventajas en cuanto a rendimiento.

### make

Es la más antigua, aunque sigue siendo una de las herramientas más populares. Se basa en el fichero makefile, donde se detallan todas las tareas que se realizarán en el proyecto. Es una herramienta para generar archivos a partir de otros archivos, por ejemplo, ejecutables desde el código fuente, pero también puede realizar muchas otras operaciones como ejecutar otras herramientas y comandos. A diferencia de Gulp o Grunt , make no necesita complementos ni tiempo de ejecución especial de JavaScript, ya que simplemente debemos describir la tarea usando un conjunto de comandos de shell y, además, se puede usar en cualquier lenguaje.

## Gestor de tareas elegido

Me he decantado por make ya que, además de ser una herramienta con la que ya he trabajado anteriormente, permite muchas otras opciones además de ejecutar tareas de forma muy eficiente, como implementar funciones para, por ejemplo, comprobar si la versión de Node que estamos utilizando es la deseada para nuestra aplicación y avisarnos antes de que nos de algún otro error debido a ello. Como hemos dicho, tiene una enorme comunidad, además de no estar para nada desactualizada, lo cual hace que se siga utilizando actualmente, por lo que podemos garantizar que el proyecto no quedará desactualizado en este aspecto y podemos encontrar gran cantidad de documentación que nos permitirá tanto implementar tareas en el makefile como solucionar posibles problemas que se nos puedan plantear con el mismo.