// src/home.tsx
const Home = () => {
  return (
    <>
      <main id="main">
        <picture>
          <img src="/static/images/kuma.jpg" alt="kumamoto" />
        </picture>

        <section id="about" className="wrapper">
          <h2 className="sec-title">
            About <span>me</span>
          </h2>
          <ul>
            <li>
              <span>3</span>6
            </li>
            <li>大学2年生</li>
            <li>エンジニアを目指してます</li>
          </ul>
          <p>
            基本的に月1で何かをアップする予定しています。
            <br />「
            <a href="/creation">
              <span>creation</span>
            </a>
            」 では創作物を紹介し、「
            <a href="/blog">
              <span>Blog</span>
            </a>
            」 では新しいことに挑戦するためのモチベーションを維持するため
            の記録を綴っていきます。
            <br />
            このサイトを通じて、皆さんも新しいチャレンジを始めるきっかけになれば嬉しいです。
            自分のペースで、楽しんで取り組んでみてください!!
          </p>
        </section>

        <section id="creation" className="wrapper">
          <h2 className="sec-title">
            Crea<span>tions</span>
          </h2>
          <ul>
            <li>
              <a href="/creationDetail/1">
                <img src="/static/images/kuma.jpg" alt="kumamoto1" />
                <div>
                  <h3>2004/04/04</h3>
                  <p>
                    あああああああああああああああああああああああああああああああああああああ
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="/creationDetail/1">
                <img src="/static/images/kuma.jpg" alt="kumamoto2" />
                <div>
                  <h3>2004/04/04</h3>
                  <p>
                    あああああああああああああああああああああああああああああああああああああ
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="/creationDetail/1">
                <img src="/static/images/kuma.jpg" alt="kumamoto3" />
                <div>
                  <h3>2004/04/04</h3>
                  <p>
                    あああああああああああああああああああああああああああああああああああああ
                  </p>
                </div>
              </a>
            </li>
            <li class="card_hide">
              <a href="/creationDetail/1">
                <img src="/static/images/kuma.jpg" alt="kumamoto4" />
                <div>
                  <h3>2004/04/04</h3>
                  <p>
                    あああああああああああああああああああああああああああああああああああああ
                  </p>
                </div>
              </a>
            </li>
            <li class="card_hide">
              <a href="/creationDetail/1">
                <img src="/static/images/kuma.jpg" alt="kumamoto5" />
                <div>
                  <h3>2004/04/04</h3>
                  <p>
                    あああああああああああああああああああああああああああああああああああああ
                  </p>
                </div>
              </a>
            </li>
            <li class="card_hide">
              <a href="/creationDetail/1">
                <img src="/static/images/kuma.jpg" alt="kumamoto6" />
                <div>
                  <h3>2004/04/04</h3>
                  <p>
                    あああああああああああああああああああああああああああああああああああああ
                  </p>
                </div>
              </a>
            </li>
          </ul>
          <a href="/creation" className="btn_a">
            <div className="btn">
              <div className="btn_txt">more creation</div>
            </div>
          </a>
        </section>

        <section id="blog" className="wrapper">
          <h2 className="sec-title">
            Bl<span>og</span>
          </h2>
          <dl>
            <a href="/blogDetail/3">
              <dt>2024/08/21</dt>
              <dd>振り出しに戻ってからの〜</dd>
            </a>
            <a href="/blogDetail/2">
              <dt>2024/08/12</dt>
              <dd>個人サイト無理ゲー</dd>
            </a>
            <a href="/blogDetail/1">
              <dt>2024/07/20</dt>
              <dd>何となくやっていく</dd>
            </a>
          </dl>
          <a href="/blog" className="btn_a">
            <div className="btn">
              <div className="btn_txt">more blog</div>
            </div>
          </a>
        </section>

        <section id="contact" className="wrapper">
          <h2 className="sec-title">
            Conta<span>ct</span>
          </h2>
          <p>お問い合わせはこちら</p>
          <form action="https://api.staticforms.xyz/submit" method="post">
            <input
              type="hidden"
              name="accessKey"
              value="c73defff-f819-4205-98e2-3a94c387eee9"
            />
            <input type="text" name="honeypot" style={{ display: "none" }} />
            <dl>
              <dt>
                <label htmlFor="name">お名前</label>
              </dt>
              <dd>
                <input type="text" name="name" required />
              </dd>
              <dt>
                <label htmlFor="email">メールアドレス</label>
              </dt>
              <dd>
                <input type="text" name="email" required />
              </dd>
              <dt>
                <label htmlFor="content" required>
                  内容
                </label>
              </dt>
              <dd>
                <textarea
                  name="message"
                  required
                  cols={30}
                  rows={10}
                ></textarea>
              </dd>
            </dl>
            <div className="btn">
              <input
                type="hidden"
                name="redirectTo"
                value="https://honopage.pages.dev/success"
              />
              <input type="submit" value="送信" />
            </div>
            <input type="text" name="honeypot" style="display: none;"></input>
          </form>
        </section>
      </main>
    </>
  );
};

export default Home;
