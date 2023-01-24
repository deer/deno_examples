A simple demonstration of putting an http server from deno into a container. The server listens on 8080. Try running it by:

1. Build everything.
    ```
    docker-compose build
    ```
2. Start the container.
    ```
    docker-compose up -d
    ```
3. Check to confirm it's serving.
    ```
    curl http://localhost:8080
    ```
    You should see:
    ```
    Hello world from Deno! 🦕
    ```
4. (Optional) Stop the container.
   ```
   docker-compose down
   ```
