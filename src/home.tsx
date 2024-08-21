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
              <span>U</span>shed
            </li>
            <li>daigaku</li>
            <li>エンジニアを目指してます</li>
          </ul>
          <p>
            基本月１更新になると思います
            <br />
            <a href="/creation">
              <span>creation</span>
            </a>
            では創作物、
            <a href="/blog">
              <span>Blog</span>
            </a>
            では何かの動機になれば感覚で書いていくつもりです
            <br />
            これらを見ていて、皆さんの中にもチャレンジしてみたいことができたら、
            ぜひ自分のペースでやってみてください！！
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
              <a href="">
                <img src="/static/images/kuma.jpg" alt="kumamoto2" />
                <p></p>
              </a>
            </li>
            <li>
              <a href="">
                <img src="/static/images/kuma.jpg" alt="kumamoto3" />
                <p></p>
              </a>
            </li>
            <li class="card_hide">
              <a href="">
                <img src="/static/images/kuma.jpg" alt="kumamoto4" />
                <p></p>
              </a>
            </li>
            <li class="card_hide">
              <a href="">
                <img src="/static/images/kuma.jpg" alt="kumamoto5" />
                <p>あああああああああああああああ</p>
              </a>
            </li>
            <li class="card_hide">
              <a href="">
                <img src="/static/images/kuma.jpg" alt="kumamoto6" />
                <p></p>
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
            <a href="/blogDetail/2">
              <dt>2024/08/12</dt>
              <dd>個人サイト無理ゲー</dd>
            </a>
            <a href="/blogDetail/1">
              <dt>2024/01/01</dt>
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
                value="http://localhost:5173/success"
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
