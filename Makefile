#############################################3
## Pablo Muñoz Castro
##
## Makefile Proyecto IV 22-23
## Universidad de Granada


## Variables ##

SRC = ./src
TESTS = ./test
lista_ficheros = $(shell ls $(SRC)/*.js)


## Tareas ##

# Por defecto
all : check test

# Comprobación de la sintaxis de los ficheros fuente
check :
	@echo
	@echo Comprobando sintaxis del codigo fuente...
	@echo
	$(foreach fichero, $(lista_ficheros), node --check $(fichero);)

# Ejecución de los test
test :
	@echo
	@echo Comprobando sintaxis del codigo fuente...
	@echo
	mocha $(TEST)