# Gestor de tareas

## Criterios de búsqueda de un gestor de tareas

Un gestor de tareas es una herramienta necesaria para, por ejemplo, la ejecución de test usando las herramientas de construcción, la comprobación de que la sintaxis del código fuente es correcta, etc. Esto nos permite automatizar cualquier tarea de nuestro proyecto en una única orden. Para elegir uno para nuestra aplicación, se establecen los siguientes criterios:

- Atendiendo a las buenas prácticas, es necesario que realice la gestión de tareas a partir de un fichero de configuración exclusivo para ello.
- La velocidad es importante.
- Que esté actualizado y tenga un continuo mantenimiento, así como una comunidad bastante activa, para que nuestra aplicación no quede obsoleta en un futuro.
- Que permita minimizar el riesgo de problemas de seguridad.
- Se valorará positivamente que nos permita realizar otras acciones útiles (crear tareas propias, scripts, etc.) además de simplemente gestionar tareas.

## Gestores de tareas a investigar a partir los cuales elegir:

### npm

Viene incorporado en NodeJS y, como ya se ha explicado en [#26](https://github.com/pablo1mc315/iv_pablomc/issues/26), funciona tanto como gestor de tareas como gestor de dependencias.

- :heavy_check_mark: Hay dos tipos de tareas con npm, tareas integradas (las que son comunes a la mayoría de los proyectos, como `test` o `install`, que vienen predefinidas por el propio gestor) y tareas propias (aquellas que nos permite crear npm mediante scripts propios).
- :x: No es muy común utilizarlo de esta forma, ya que hay herramientas que son gestores de tareas específicos y mucho más completos y con mas funcionalidades por lo que, a pesar de tener buen mantenimiento, su uso no está demasiado extendido.
- :x: No usa un fichero excluso para la gestión de tareas.

### Grunt

- :heavy_check_mark: Guarda toda la información en el archivo gruntfile.js, donde se incluye el código con el que se integran y configuran los módulos de cada una de las tareas.
- :heavy_check_mark: En dicho fichero se puede crear cualquier tipo de tarea que queramos programándola en JavaScript.
- :heavy_check_mark: Está bastante actualizado y con una comunidad muy activa, lo cual le da un plus a la hora de elegirlo como gestor de tareas.
- :x: No es precisamente el mejor en cuanto a velocidad se refiere.

### Gulp

- :heavy_check_mark: El fichero para integrar las tareas es gulpfile.js, que especifica las tareas posibles.
- :heavy_check_mark: Cada proceso se ejecuta en su mayor parte en la memoria principal antes de que el resultado se escriba de nuevo en cada archivo, lo cual le da mayor velocidad.
- :heavy_check_mark: Existen plugins para Gulp con gran cantidad de tareas ya preparadas, lo cual puede servir de mucha ayuda.
- :heavy_check_mark: También está bastante actualizado y tiene una comunidad muy activa.
- :x: No es precisamente el mejor en temas de seguridad ya que se le ha descuidado un poco ese aspecto, lo cual contrarresta sus ventajas en cuanto a rendimiento.

### make

Es la más antigua, aunque sigue siendo una de las herramientas más populares sobre todo gracias a su buen rendimiento y versatilidad.

- :heavy_check_mark: Se basa en el fichero makefile, donde se detallan todas las tareas que se realizarán en el proyecto. 
- :heavy_check_mark: Es una herramienta para generar archivos a partir de otros archivos, por ejemplo, ejecutables desde el código fuente, pero también puede realizar muchas otras operaciones como ejecutar otras herramientas y programar cualquier tipo de tarea. Además, se puede integrar con cualquier lenguaje.
- :heavy_check_mark: Está muy actualizado, ya que es probablemente la más utilizada desde hace mucho tiempo y tiene una comunidad muy activa.
- :heavy_check_mark: No se le reconocen problemas de seguridad.

## Gestor de tareas elegido

Me he decantado por make ya que permite muchas otras opciones además de ejecutar tareas de forma muy eficiente, como implementar funciones para, por ejemplo, comprobar si la versión de Node que estamos utilizando es la deseada para nuestra aplicación y avisarnos antes de que nos de algún otro error debido a ello. Como hemos dicho, tiene una enorme comunidad, además de no estar para nada desactualizada, lo cual hace que se siga utilizando actualmente, por lo que podemos garantizar que el proyecto no quedará desactualizado en este aspecto y podemos encontrar gran cantidad de documentación que nos permitirá tanto implementar tareas en el makefile como solucionar posibles problemas que se nos puedan plantear con el mismo.