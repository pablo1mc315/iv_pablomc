# Usamos la imagen base elegida
FROM alpine:latest

RUN adduser --disabled-password user_test \
    && mkdir -p /home/user_test/app \
    && chown -R user_test /home/user_test/app

WORKDIR /home/user_test/app

# Copiamos el package.json al directorio principal para poder instalar las dependencias
COPY package.json pnpm-lock.yaml ./

RUN wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" \
    && chmod +x /bin/pnpm \
    && apk add nodejs

# Cambiamos al usuario creado
USER user_test

RUN pnpm install \
    && rm package.json pnpm-lock.yaml

# Ejecutamos los tests
ENTRYPOINT [ "pnpm", "run", "test" ]