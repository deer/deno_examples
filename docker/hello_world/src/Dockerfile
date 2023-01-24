FROM denoland/deno:1.29.4 as base

USER deno

WORKDIR /app

COPY . ./

RUN deno cache server.ts

CMD ["run", "--allow-net", "server.ts"]
