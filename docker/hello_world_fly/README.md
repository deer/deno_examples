This is like the [other](https://github.com/deer/deno_examples/tree/main/docker/hello_world) hello world example (I really just copy and pasted the code), but it's intended to be run on [fly](https://fly.io/).

The `docker-compose.yaml` file is ignored by fly.

to test this locally:
```
docker-compose -f src/docker-compose.yaml up --build
```

i can deploy this using a local build with the following (from within the `src` directory):
```
flyctl deploy --local-only
```

some notes on fly to read at some point:
* https://fly.io/docs/reference/monorepo/
* https://fly.io/docs/reference/build-secrets/
* https://fly.io/docs/reference/secrets/
* https://fly.io/docs/reference/runtime-environment/
* https://fly.io/docs/reference/architecture/
* https://fly.io/docs/reference/configuration/
* https://fly.io/docs/reference/monorepo/
