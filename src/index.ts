import app from "./app";

Bun.serve({
    fetch: app.fetch,
    port: process.env.PORT || 3000,
});

// Bun.build({
//     entrypoints: ["./index.ts"],
//     outdir: "./static",
//   });