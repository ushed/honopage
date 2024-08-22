//src/render.tsx
import { jsxRenderer } from "hono/jsx-renderer";

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://kit.fontawesome.com/7c25fc8f19.js"
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Sawarabi+Mincho"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/static/global.css" />
        <script src="/static/global.js" defer></script>
        <title>悠々記</title>
      </head>
      <header id="header">
        <h1 class="I">
          <a class="main_ttl" href="/">
            悠々<span>記</span>
          </a>
        </h1>
        <nav>
          <ul class="nav-links">
            <li>
              <a href="/creation">Creation</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li class="btn">
              <a
                href="https://x.com/Ushed_36"
                target="_blank"
                rel="noopener noreferrer"
                class="X_tagu"
              >
                <i class="fa-brands fa-x-twitter"></i>
              </a>
            </li>
            <li>
              <i class="fa-solid fa-moon" id="mode"></i>
            </li>
          </ul>
          <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </nav>
      </header>
      <body>{children}</body>
      <footer id="footer">
        <p>&copy; 2024 Ushed</p>
      </footer>
    </html>
  );
});
