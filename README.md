# Descripción del proyecto

## Proyecto realizado por:

Pablo Muñoz Castro - Infraestructura Virtual - 4º Grado en Ingeniería Informática - Curso 22/23

## Problema a resolver

Dificultad de una persona amante del cine a la hora de decidir qué película ver, sobre todo cuando se trata de una cantidad considerable de títulos ya vistos por el propio usuario.

## Solución propuesta

Crear una aplicación en la nube que permita al usuario marcar qué películas ha visto o, en su defecto, que la propia aplicación, cuando el usuario termine de ver una película la marque como "vista" y que, a partir de las películas que el propio usuario ha visto, nos recomiende una serie de títulos (vistos o no, ya que el usuario puede querer volver a ver una película que ya ha visto, eso sí, dando prioridad en la recomendación a las no vistas) en función al género de la misma, los actores que participan en ella, etc.

## ¿Quien va a usar la aplicación?

Principalmente los usuarios que la utilicen, aunque es muy probable que también sirva a muchas empresas o medios de comunicación para obtener datos útiles con los que elaborar informes y estadísticas o, incluso, a los propios directores o estudios de cine que les permiten saber que géneros son los más consumidos por el público, qué actores tienen más tiron, etc.

## ¿Por qué en la nube?

Principalmente porque, si guardásemos todas las películas en nuestro disco local, nos ocuparía muchísimo espacio, mientras que en la nube se guardan de manera remota y podemos acceder a ellas cuando queramos. Así mismo, nos permite que varios usuarios se conecten a la vez a nuestra aplicación para ver distintas películas.

## Comprobar sintaxis del código fuente

El siguiente comando se encarga de comprobar la sintaxis del código fuente con Node.js
```shell
pnpm run check
```

## Ejecutar los tests

El siguiente comando se encarga de ejecutar los tests usando Mocha
```shell
pnpm run test
```

## Documentación

* [Usuarios](./docs/personas.md)
* [Milestones](./docs/milestones.md)
* [Historias de usuario](./docs/historias-usuario.md)
* [Gestor de dependencias](./docs/gestor-dependencias.md)
* [Gestor de tareas](./docs/gestor-tareas.md)
* [Test-runner](./docs/test-runner.md)
* [Librería de aserciones](./docs/libreria-aserciones.md)

## Configuración del repositorio

* [Captura de pantalla del fichero de configuración de la carpeta .git del repositorio](./img/config.png)
* [Captura de pantalla de la configuración de las claves pública y privada](./img/claves.png)