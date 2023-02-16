This is like the [other](https://github.com/deer/deno_examples/tree/main/docker/hello_world) hello world example (I really just copy and pasted the code), but it's intended to be run on [fly](https://fly.io/).

The `docker-compose.yaml` file is ignored by fly.

to test this locally:
```
docker-compose -f src/docker-compose.yaml up --build
```
