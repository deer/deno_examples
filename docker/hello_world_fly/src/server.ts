import { serve } from "https://deno.land/std@0.173.0/http/server.ts";

serve((req: Request) => {
  // this won't work locally, since this header isn't set
  // but since this is intended for fly, i suppose this is ok
  console.log(req.headers.get("x-forwarded-for"));
  console.log();
  return new Response("Hello world from Deno! 🦕");
}, { port: 8080 });

console.log(`HTTP server is running at: http://localhost:8080/`);
