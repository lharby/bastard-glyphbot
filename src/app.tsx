import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from 'hono/bun';

const app = new Hono();

app.use(logger());

import View from "./client/View";

app.get('/index', (c) => c.html(<View />));

app.get('/test', (c) => c.html('<pre>Test</pre>'));

app.use('/*', serveStatic({ root: './static/' }));

export default app;