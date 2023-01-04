# Usamos la imagen base elegida
FROM alpine:latest

RUN adduser --disabled-password user_test \
    && mkdir -p /home/user_test/app \
    && chown -R user_test /home/user_test/app \
    && apk add npm 

WORKDIR /home/user_test/app

# Copiamos el package.json al directorio principal para poder instalar las dependencias
COPY package.json ./

# Cambiamos manualmente el directorio predeterminado de npm para poder instalar pnpm
ENV NPM_CONFIG_PREFIX=/home/user_test/.npm-global
ENV PATH=$PATH:/home/user_test/.npm-global/bin

RUN npm install -g pnpm \
    && pnpm install \
    && apk del npm \
    && rm package.json

# Cambiamos al usuario creado
USER user_test

# Ejecutamos los tests
ENTRYPOINT [ "pnpm", "run", "test" ]