Here's a slightly more complicated app. The previous examples were quite trivial. This time we're going to have a frontend, a backend, and a database.

You can run this by doing the following:
```
docker-compose -f src/docker-compose.yaml up --build
```

Currently the app doesn't do much, other than show a button which hits an endpoint on the backend. Not terribly exciting. But at least there are no `node_module` folders or any nonsense cluttering up my folders here. Everything is hidden inside the docker containers. Great start.

```sh
mongosh -u admin -p password
use demo
db.dinosaurs.find()
```