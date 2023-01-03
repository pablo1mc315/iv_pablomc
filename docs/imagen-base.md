# Imagen base del contenedor

## Criterios de búsqueda de una imagen base:

Para poder completar el [M1](https://github.com/pablo1mc315/iv_pablomc/milestone/3), debemos crear un contenedor donde se ejecuten nuestros tests. Para ello, lo primero es elegir una imagen base sobre la que construir nuestro contenedor.

Siguiendo las buenas prácticas, usaremos una imagen base de Docker oficial o de un publicador verificado, las cuales podemos encontrar en [dockerhub](https://hub.docker.com/search?q=&type=image&image_filter=official%2Cstore). Para elegir una para nuestra aplicación, se establecen los siguientes criterios:

- El tamaño de la imagen es muy importante, puesto que cuanto menos ocupe la misma, más se optimizará el rendimiento y menos tiempo tardarán los tests en ejecutarse.
- Debemos tener en cuenta que vamos a usar nuestro contenedor para testear nuestra aplicación, por lo que cualquier funcionalidad extra lo único que hace es añadir deuda técnica al proyecto, cosa que no queremos. 
- Debe tener soporte actualmente y estar en continuo mantenimiento, puesto que no queremos que nuestra aplicación quede obsoleta.

## Imágenes base posibles:

### node:alpine

Es la versión de la imagen base de Node basada en el proyecto Alpine Linux.

- :heavy_check_mark: Es completamente compatible para nuestro proyecto, ya que es la imagen base oficial de Node, además de contar con un usuario sin privilegios root `node` ya añadido.
- :heavy_check_mark: Está en continuo mantenimiento ya que el último push en dockerhub fue hace apenas una semana.
- :x: Tiene un montón de funcionalidades ya instaladas como `g++`,  `make` o `yarn`, que no nos son relevantes a la hora de ejecutar nuestros tests, lo hace que el tamaño de la imagen aumente.

## imagenes base de sistemas operativos limpios

Otra opción que podemos tomar, es la de instalar sistemas operativos limpios y, sobre ellos, montar nuestro contenedor para ejecutar test. La ventaja de esto es que nos aseguramos de tener únicamente en el contenedor aquellas instalaciones que nos sirvan para nuestro propósito, reduciendo la deuda ténica. Tenemos las opciones de instalar las imágenes oficiales de [alpine](https://hub.docker.com/_/alpine), [ubuntu](https://hub.docker.com/_/ubuntu), [fedora](https://hub.docker.com/_/fedora) o [debian](https://hub.docker.com/_/debian).

## Imagen base elegida:

He decidido descartar la imagen de Node debido a la gran cantidad de instalaciones innecesarias que trae por defecto, lo que hace que aumente en gran medida su tamaño. Si comparamos las de sistemas operativos limpios, podemos comprobar que las de ubuntu, fedora y debian tienen un tamaño parecido (77.8 MB, 184 MB y 124.07 MB, respectivamente), mientras que la de Alpine Linux tiene un tamaño muy pequeño (únicamente 7.05 MB) ya que su principal objetivo es ser poco pesada. Por tanto, tendremos que instalar sobre ella todo lo necesario para la ejecución de nuestros tests.