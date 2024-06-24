import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from 'hono/bun';

const app = new Hono();

app.use(logger());

app.use('/*', serveStatic({ root: './static/' }));

app.get('/test', (c) => {
    return c.html('<pre>Test</pre>');
});

export default app;