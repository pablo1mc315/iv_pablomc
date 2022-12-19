# Imagen base del contenedor

## Criterios de búsqueda de una imagen base:

Para poder completar el [M2](https://github.com/pablo1mc315/iv_pablomc/milestone/3), debemos crear un contenedor donde se ejecuten nuestros tests. Para ello, lo primero es elegir una imagen base sobre la que construir nuestro contenedor.

Siguiendo las buenas prácticas, usaremos una imagen base de Docker oficial y verificada, las cuales podemos encontrar en [dockerhub](https://hub.docker.com/search?q=&type=image&image_filter=official%2Cstore). En este caso, será la imagen base de [Node](https://hub.docker.com/_/node), pero debemos ver las distintas versiones y elegir una acorde a nuestro objetivo. Para elegir una para nuestra aplicación, se establecen los siguientes criterios:

- El tamaño de la imagen es muy importante, puesto que cuanto menos ocupe la misma, más se optimizará el rendimiento y menos tiempo tardarán los tests en ejecutarse.
- Usaremos una versión específica de la imagen de Node teniendo en cuenta que vamos a usar nuestro contenedor para testear nuestra aplicación. 
- Debe tener soporte actualmente y estar en continuo mantenimiento, puesto que no queremos que nuestra aplicación quede obsoleta.