#############################################3
## Pablo Muñoz Castro
##
## Makefile Proyecto IV 22-23
## Universidad de Granada


## Variables ##

SRC = ./src
lista_ficheros = $(shell ls $(SRC)/*.js)


## Tareas ##

# Por defecto
all : check test

# Comprobación de la sintaxis de los ficheros fuente
check :
	@echo "\n"Comprobando sintaxis del código fuente..."\n"
	$(foreach fichero, $(lista_ficheros), node --check $(fichero);)

# Ejecución de los test
test :
	@echo "\n"Ejecutando los tests..."\n"
	npx mocha