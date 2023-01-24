An ever so slightly more complicated version of the [hello_world](https://github.com/deer/deno_examples/tree/main/docker/hello_world) example, this time creating two containers.

The first server listens on 8081 and the second server listens on 8082. Try running it by:

1. Build everything.
    ```
    docker-compose build
    ```
2. Start the containers.
    ```
    docker-compose up -d
    ```
3. Check to confirm it's serving.
    ```
    curl http://localhost:8081
    ```
    You should see:
    ```
    Hello world from Deno on 8081! 🦕
    ```
    Check the other server.
    ```
    curl http://localhost:8082
    ```
    You should see:
    ```
    Hello world from Deno on 8082! 🦕
    ```
4. (Optional) Stop the containers.
   ```
   docker-compose down
   ```
