import { Application, Router } from "./deps.ts";
import { oakCors } from "./deps.ts";
import { MongoClient } from "./deps.ts";

const app = new Application();
const backend_port = 8000;

app.use(
  oakCors({
    origin: "http://localhost:3000",
  }),
);

const router = new Router();

const mongo_url = Deno.env.get("MONGODB_URI");
console.log(mongo_url);
const client = new MongoClient();
await sleep(5000);
await client.connect(mongo_url);
const db = client.database("demo");
const dinos = db.collection("dinosaurs");

router.get("/api", async (ctx) => {
  const randomDino = await dinos.aggregate([{ $sample: { size: 1 } }]).toArray();
  console.log(randomDino);
  ctx.response.body = randomDino;
});

app.use(router.routes());

await app.listen({ port: backend_port });

async function sleep(time: number) {
  const x = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
  return x;
}
