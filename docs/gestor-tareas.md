# Gestor de tareas

## Gestores de tareas a investigar a partir los cuales elegir:

### npm

Viene incorporado en NodeJS y, como ya se ha explicado en #26, funciona tanto como gestor de tareas como gestor de dependencias.

### Gulp

Al igual que Grunt, se basa en la plataforma de JavaScript Node.js. También recurre por norma general a package.json como archivo de configuración, pero en este caso el fichero para integrar las tareas es gulpfile.js, que especifica las tareas posibles. Una vez añadidos al directorio web es posible usar el task runner para la optimización del ritmo de trabajo. Cada proceso se ejecuta en su mayor parte en la memoria principal antes de que el resultado se escriba de nuevo en cada archivo. Esto le da un excelente rendimiento, además de que también existen plugins con gran cantidad de tareas ya preparadas. Gulp otorga una mayor libertad al programador, pues solo provee módulos individuales, lo que facilita la comprensión de los contextos y las relaciones pero a su vez exige un mayor esfuerzo. Es mucho más útil para proyectos grandes y complejos.

### Grunt

 Se basa en el entorno en tiempo de ejecución Node.js de JavaScript. El archivo package.json contiene todos los metadatos relevantes de las tareas que pueden automatizarse, mientras que en el archivo gruntfile.js se incluye el código original con el que se integran y configuran los módulos de cada una de las tareas. Sin embargo, mientras Gulp recurre en primer lugar al módulo stream de Node.js, Grunt utiliza principalmente el módulo fs (file system) Además, Grunt está estrictamente orientada a los archivos, creándolos de forma temporal y local como resultado de las tareas ejecutadas. Por el contrario, Gulp lleva a cabo los procesos en la memoria principal y escribe directamente en los archivos, lo que proporciona una mayor velocidad al programa.

### make

Es la más antigua, aunque sigue siendo una de las herramientas más populares. Es una herramienta para generar archivos a partir de otros archivos, por ejemplo, ejecutables desde el código fuente, pero también puede realizar otras operaciones como ejecutar otras herramientas y comandos. A diferencia de Gulp o Grunt , make no necesita complementos ni tiempo de ejecución especial de JavaScript, ya que simplemente debemos describir la tarea usando un conjunto de comandos de shell, y se puede usar en cualquier lenguaje.

### Bun

Es un runtime de JavaScript construido desde cero para centrarse principalmente en la velocidad y el rendimiento. El objetivo de Bun es brindar mejoras de rendimiento y complejidad a su infraestructura futura, así como la productividad del desarrollador a través de herramientas mejores y más simples.

## Gestor de tareas elegido

Me he decantado por make, ya que es una herramienta que he utilizado a lo largo de la carrera y nunca le he sacado todo su potencial. Además, tiene una gran cantidad de documentación al ser el más antiguo de todos y permite programar muchas opciones y tareas que pueden ser útiles en el proyecto.