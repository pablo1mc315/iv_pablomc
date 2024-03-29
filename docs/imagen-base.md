# Imagen base del contenedor

## Criterios de búsqueda de una imagen base:

Para poder completar el [M1](https://github.com/pablo1mc315/iv_pablomc/milestone/3), debemos crear un contenedor donde se ejecuten nuestros tests. Para ello, lo primero es elegir una imagen base sobre la que construir nuestro contenedor.

Siguiendo las buenas prácticas, usaremos una imagen base de Docker oficial o de un publicador verificado, las cuales podemos encontrar en [dockerhub](https://hub.docker.com/search?q=&type=image&image_filter=official%2Cstore). Para elegir una para nuestra aplicación, se establecen los siguientes criterios:

- El tamaño de la imagen es muy importante, puesto que cuanto menos ocupe la misma, más se optimizará el rendimiento y menos tiempo tardarán los tests en ejecutarse.
- Debemos tener en cuenta que vamos a usar nuestro contenedor para testear nuestra aplicación, por lo que cualquier funcionalidad extra lo único que hace es añadir deuda técnica al proyecto, cosa que no queremos. 
- Debe tener soporte actualmente y estar en continuo mantenimiento, puesto que no queremos que nuestra aplicación quede obsoleta.

## Imágenes base posibles:

### node:lts-bullseye-slim

Es la versión de la imagen base oficial de Node con soporte a largo plazo (LTS) que utiliza la variante de la imagen `bullseye` además de la variante `slim` que la hace menos pesada que la original.

- :heavy_check_mark: Es completamente compatible para nuestro proyecto, ya que es la imagen base oficial de Node, además de contar con un usuario sin privilegios root `node` ya añadido.
- :heavy_check_mark: Está en continuo mantenimiento y no va a quedar desactualizada puesto que cuenta con soporte a largo plazo.
- :x: Tiene algunas funcionalidades ya instaladas como `yarn`, que no nos son relevantes a la hora de ejecutar nuestros tests, lo hace que el tamaño de la imagen aumente. Aún así, su tamaño es de 244 MB, lo que no es demasiado y es una opción a considerar.

## imagenes base oficiales de sistemas operativos limpios

Otra opción que podemos tomar, es la de instalar sistemas operativos limpios y, sobre ellos, montar nuestro contenedor para ejecutar test. La ventaja de esto es que nos aseguramos de tener únicamente en el contenedor aquellas instalaciones que nos sirvan para nuestro propósito, reduciendo la deuda ténica. Tenemos las opciones de instalar las imágenes oficiales de [alpine](https://hub.docker.com/_/alpine), [ubuntu](https://hub.docker.com/_/ubuntu), [fedora](https://hub.docker.com/_/fedora) o [debian](https://hub.docker.com/_/debian).

## imagenes base de creadores verificados

Como se dijo en clase, también se deben considerar las imágenes base que, aunque no sean oficiales, son de creadores verificados y que igual nos pueden ser útiles. Por ejemplo, tenemos una imagen creada por la empresa Bitnami en su versión para Node ([aquí](https://github.com/bitnami/containers/blob/main/bitnami/node/18/debian-11/Dockerfile) su Dockerfile), pero la descartamos pues ocupa más de 700 MB de memoria.

También podemos encontrar otras imágenes creadas por otras empresas como [wallarm/node](https://github.com/wallarm/docker-wallarm-node/blob/stable/4.4/Dockerfile) que ocupa unos 350 MB, [okteto/node](https://github.com/okteto/node-getting-started/blob/main/Dockerfile) que ocupa casi 1 GB (también influye que está basada en la imagen base oficial de Node) o [vmware/node](https://github.com/vmware-archive/node/blob/master/Dockerfile) con unos 160 MB, que también podría ser una buena opción.


## Imagen base elegida:

Tras descartar algunas de las imágenes base mencionadas debido a su alto peso, nos quedan varias opciones: optar por la imagen base de `node:lts-bullseye-slim`, que no ocupa demasiado y tiene instalado todo lo necesario para ejecutar Node en el contenedor; la imagen base de `vmware/node`, que es un poco menos pesada que la anterior pero su mantenimiento es menor, pues lleva meses sin actualizarse; y la imagen base del sistema operativo de Alpine Linux.

Comprobado que tras instalar todo lo necesario para trabajar con la imagen de Alpine Linux, se nos va de los 7 MB iniciales a los casi 200 MB, voy a optar por la imagen de `node:lts-bullseye-slim` que, además de ya incluir todo lo necesario para trabajar con node, tiene un mantenimiento continuo y un peso parecido.