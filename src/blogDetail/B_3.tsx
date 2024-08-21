const creation = () => {
  return (
    <>
      <section id="blog" class="wrapper">
        <h3>2024/08/21</h3>
        <h2 class="sec-title">
          振り出しに<span>戻ってからの〜</span>
        </h2>
        <p style="line-height: 2">
          Next.jsのフレームワークに引っ越ししていく中で、マークダウンを用いた
          記事の作り方や、動的ルーティングを使ったレンダリング、SSRなどについて、{" "}
          <span>理解が 深まってきている</span>のを、感じることができました。
          <br />
          <br />
          Next.jsのフレームワークを利用して、個人サイトを作ることができたんですが、
          何故かハンバーガーメニューを押してもそこに当ててるjsファイルがうまく機能しない問題があったり、
          デプロイした時にまさかのまた Cloudflare Pages からエラーを吐かれて、
          しかも対応することができませんでした(´•̥ ω •̥`)。
          <br />
          <br />
          調べていく中で以前使っていた bun
          のフレームワークをデプロイしていた時に出ていた、
          エラーメッセージを解決できるような気がしたので、Next.jsで学んだことを活かして、
          hono の フレームワークに戻そうと思いました。
          <br />
          <br />
          以前は hono のフレームワークにそのまんま、ページごとに生HTMLファイル
          作成して、全部1から作っていたのでrenderer.tsxなどを使った感じの構造にすることに決めました。
          後の引っ越しは、ほぼほぼすぐ日できたんですがマークダウンを使った
          ブログのシステムが、調べた感じ自分の力じゃ<span>無理っぽい</span>
          感じがしたので、ページを追加して更新するたびに
          変更が関係するところを自分で書き換えるようにしました。
          <br />
          <br />
          そしてついに完成いたしました! <br />
          Cloudflare Pages にデプロイするときに少しエラーが出てきましたが、
          調べて解決できてついに個人サイトの公開にたどり着くことができました(屮`º∀º´)屮ｲｪｱ！
          <br />
          <br />
          いや〜なんやかんやありましたが、自作の個人サイトを作ることができました
          <span>✌︎</span>( ˘꒳˘ )<span>✌︎</span>ｲｴｰｲ 特に振り出しに
          <span>戻ってからの</span>
          作業は特に、スーと言ってくれました。
          でも、改善したいところもいくつかあるのでそれは、気が向いたらちょくちょくやっていこうと思います。
          特にお問合せの送信を押した後のページ遷移を、直したいところです。外部のこの部分は一番簡単にできそうな、
          外部のアセットを利用したので、少し難しんですよね。それでも指定したページに飛ぶようにしたのに、
          全然飛んでくれないですよね。( ;`･～･)ぐぬぬ
          <br />
          <br />
          皆さんも自作の個人サイト作ってみたいなと、思ったらぜひはじめの一歩を踏み出してみてください。
          <br />
          <span>案外ハードルは低いので!!</span>
          <br />
          では、良い人生を(๑'ᴗ'๑)و⚑
          <br />
          <br />
        </p>
        <a href="/blog" className="btn_a">
          <div className="btn">
            <div className="btn_txt">blog</div>
          </div>
        </a>
      </section>
    </>
  );
};

export default creation;
