import { serve } from "https://deno.land/std@0.173.0/http/server.ts";

serve((req: Request) => {
  console.log(req);
  console.log();
  return new Response("Hello world from Deno! 🦕");
}, { port: 8080 });

console.log(`HTTP server is running at: http://localhost:8080/`);
