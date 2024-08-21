//src/index.tsx
import { Hono } from "hono";
import { serveStatic } from "@hono/node-server/serve-static";
import { renderer } from "./renderer";
import Home from "./home";
import Creation from "./creation";
import Blog from "./blog";
import Success from "./success";

const app = new Hono();

app.use("*", renderer);

app.get("/", (c) => {
  return c.render(<Home />);
});

app.get("/creation", (c) => {
  return c.render(<Creation />);
});
app.get(`/creationDetail/:id`, async (c) => {
  const { id } = c.req.param();
  const Component = (await import(`./creationDetail/C_${id}.tsx`)).default;
  return c.render(<Component />);
});

app.get("/blog", (c) => {
  return c.render(<Blog />);
});
app.get(`/blogDetail/:id`, async (c) => {
  const { id } = c.req.param();
  const Component = (await import(`./blogDetail/B_${id}.tsx`)).default;
  return c.render(<Component />);
});

app.get("/success", (c) => {
  return c.render(<Success />);
});

// 静的ファイルのサーブ設定
app.use("/static/*", serveStatic({ root: "./static" }));
app.use("/node_modules/*", serveStatic({ root: "./node_modules" }));

export default app;
