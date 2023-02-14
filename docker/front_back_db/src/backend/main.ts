import { Application, Router } from "./deps.ts";
import { oakCors } from "./deps.ts";

const app = new Application();
const backend_port = 8000;

app.use(
  oakCors({
    origin: "http://localhost:3000",
  }),
);

const router = new Router();

router.get("/api", (ctx) => {
  const result = "look, an api!";
  console.log(result);
  ctx.response.body = result;
});

app.use(router.routes());

await app.listen({ port: backend_port });
