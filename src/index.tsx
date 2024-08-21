import { Hono } from "hono";
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

app.get("/blog", (c) => {
  return c.render(<Blog />);
});

app.get("/success", (c) => {
  return c.render(<Success />);
});

export default app;
