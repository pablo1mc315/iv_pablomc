# Usamos la imagen base elegida
FROM node:lts-alpine

# Creamos el directorio de trabajo y le damos permiso al usuario de node
RUN mkdir -p /home/app && chown -R node:node /home/app
WORKDIR /home/app

# Copiamos el package.json al directorio principal para poder instalar las dependencias
COPY package.json ./
COPY . .

# Inicializamos variables de entorno necesarias para pnpm
ENV NPM_CONFIG_PREFIX="/home/node/.npm-global"
ENV PNPM_HOME="/.pnpm"
ENV PATH="${PATH}:${PNPM_HOME}:/home/node/.npm-global/bin"

# Cambiamos al usuario de node e instalamos todas las dependencias necesarias
USER node

RUN npm install -g pnpm
RUN pnpm install

# Ejecutamos los tests
ENTRYPOINT [ "pnpm", "run", "test" ]