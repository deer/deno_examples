FROM denoland/deno:1.30.3

WORKDIR /app

EXPOSE 8000

COPY deps.ts .
RUN deno cache --unstable deps.ts

ADD . .

RUN deno cache --unstable main.ts

CMD ["run", "--unstable", "--allow-net", "--allow-env=MONGODB_URI", "--watch", "main.ts"]
