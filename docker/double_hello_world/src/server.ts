import { serve } from "https://deno.land/std@0.173.0/http/server.ts";

const port: number = +Deno.env.get("PORT");

serve(() => new Response(`Hello world from Deno on ${port}! 🦕`), { port: port });

console.log(`HTTP server is running at: http://localhost:${port}/`);
