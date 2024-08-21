//src/blog.tsx
const blog = () => {
  return (
    <>
      <main id="main">
        <section id="blog" class="wrapper">
          <h2 class="sec-title">
            Bl<span>og</span>
          </h2>
          <dl>
            <a href="/blogDetail/2">
              <dt>2024/08/12</dt>
              <dd>個人サイト無理ゲー</dd>
            </a>
            <a href="/blogDetail/1">
              <dt>2024/07/20</dt>
              <dd>何となくやっていく</dd>
            </a>
          </dl>
        </section>
      </main>
    </>
  );
};

export default blog;
