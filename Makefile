#############################################3
## Pablo Muñoz Castro
##
## Makefile Proyecto IV 22-23
## Universidad de Granada


## Variables ##

SRC = ./src

## Tareas ##

# Por defecto
all : check

# Comprobación de la sintaxis de los ficheros fuente
check : 
	node --check $(SRC)/*.js