# Usamos la imagen base elegida
FROM node:lts-bullseye-slim

RUN mkdir -p /home/app \
    && chown -R node /home/app

WORKDIR /home/app

# Copiamos el package.json al directorio principal para poder instalar las dependencias
COPY package.json pnpm-lock.yaml ./

# Cambiamos manualmente el directorio predeterminado de npm para poder instalar pnpm
ENV NPM_CONFIG_PREFIX=/home/app/.npm-global
ENV PATH=$PATH:/home/app/.npm-global/bin

# Cambiamos al usuario de node
USER node

RUN npm install -g pnpm \
    && pnpm install \
    && rm package.json pnpm-lock.yaml

# Ejecutamos los tests
ENTRYPOINT [ "pnpm", "run", "test" ]