import Image from "next/image";
import EnvelopeHero from "@/components/wedding/EnvelopeHero";
import Reveal from "@/components/wedding/Reveal";
import Countdown from "@/components/wedding/Countdown";
import Expandable from "@/components/wedding/Expandable";
import RsvpPanel from "@/components/wedding/RsvpPanel";

const TIMELINE = [
  { time: "hamarosan", title: "Szertartás a templomban" },
  { time: "hamarosan", title: "Fogadás és koktél" },
  { time: "hamarosan", title: "Vacsora" },
  { time: "hamarosan", title: "Bál, mulatság" },
  { time: "hamarosan", title: "Tortavágás" },
  { time: "hamarosan", title: "Búcsúzás" },
];

// Guest-facing dress code palette: ivory, sage, olive, caramel, deep caramel.
const SWATCHES = ["#fcf8ef", "#b8ca9a", "#7c8c5b", "#c2a87a", "#a8834f"];

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=K%C3%A1lna+M%C3%A1ty%C3%A1s+Malom";

export default function Home() {
  return (
    <div className="ol">
      <EnvelopeHero />
      <Reveal />

      {/* Light painted ground: one backdrop runs behind the first few sections */}
      <div className="win wash">
        <section className="intro" id="varunk">
          <div className="wrap two">
            <div className="col-text">
              <h2 className="script h-script reveal">Kálna, Mátyás malom</h2>
              <p className="lede reveal">
                2027. július 10-én, szombaton összeházasodunk, és szeretnénk, ha ezen a napon ott lennél velünk.
              </p>
              <Countdown />
            </div>
            <div className="col-pic reveal r">
              <div className="cameo">
                <div className="ph">
                  <Image src="/images/about.jpg" alt="Lilu és Marci" fill sizes="310px" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="story" id="story">
          <div className="wrap two flip">
            <div className="col-pic reveal l">
              <figure className="framed">
                <div className="frame">
                  <div className="mat">
                    <div className="ph">
                      <Image src="/images/hero.jpeg" alt="Lilu és Marci" fill sizes="300px" />
                    </div>
                  </div>
                </div>
                <figcaption className="plaque">Lilu &amp; Marci</figcaption>
              </figure>
            </div>
            <div className="col-text">
              <h2 className="script h-script reveal">A mi történetünk</h2>
              <p className="lede reveal">
                Hamarosan megírjuk, hogyan ismerkedtünk meg, mikor tudtuk, hogy ő az igazi, és hogyan jutottunk el
                idáig.
              </p>
              <Expandable>
                <p className="lede">
                  Addig is szeretettel várunk benneteket 2027. július 10-én a kálnai Mátyás malomban.
                </p>
              </Expandable>
            </div>
          </div>
        </section>

        <section className="facts" id="details">
          <div className="wrap">
            <dl className="fact-row reveal">
              <div>
                <dt>Mikor</dt>
                <dd>2027. július 10.</dd>
              </div>
              <div>
                <dt>Hol</dt>
                <dd>Kálna, Mátyás malom</dd>
              </div>
              <div>
                <dt>Ami még hátra van</dt>
                <dd>
                  <a className="link" href="#idorend">
                    Az esküvő napja
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Templom: the church painting takes half the section, its edge cut with circles */}
        <section className="split" id="templom">
          <div className="split-pic" aria-hidden="true">
            <Image src="/images/church.jpg" alt="" fill sizes="(max-width: 800px) 100vw, 52vw" />
          </div>
          <div className="split-text">
            <p className="label reveal">Egyházi szertartás</p>
            <h2 className="script h-script reveal">Templom</h2>
            <p className="lede reveal">
              Az esküvői szertartás templomban lesz, onnan együtt indulunk tovább a mulatság helyszínére. A templom
              pontos címét és a kezdés időpontját hamarosan megírjuk.
            </p>
            <dl className="mini reveal">
              <div>
                <dt>Kezdés</dt>
                <dd>hamarosan</dd>
              </div>
              <div>
                <dt>Helyszín</dt>
                <dd>hamarosan</dd>
              </div>
            </dl>
          </div>
        </section>
      </div>

      {/* Night: the party painting stays put while the programme scrolls over it */}
      <div className="win night">
        <section className="programme-sec" id="idorend">
          <div className="wrap">
            <p className="label reveal">Az esküvő napja</p>
            <h2 className="script h-script reveal">Időrend</h2>
            <ol className="programme reveal">
              {TIMELINE.map((item) => (
                <li key={item.title}>
                  <span className="t-title">{item.title}</span>
                  <span className="lead" aria-hidden="true" />
                  <span className="t-time">{item.time}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="gift" id="ajandek">
          <div className="wrap">
            <div className="gift-box reveal">
              <h2 className="script h-script">Ajándék</h2>
              <p className="lede">
                Számunkra a legnagyobb ajándék, hogy ezen a különleges napon velünk ünnepelsz.
              </p>
              <p className="lede">
                Ha mégis szeretnél valamivel kedveskedni, az ajándékozással kapcsolatos részleteket hamarosan
                megosztjuk.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="win wash pale">
        <section className="dress" id="dresscode">
          <div className="wrap">
            <div className="dress-head">
              <div>
                <p className="label reveal">Öltözék</p>
                <h2 className="script h-script reveal">Dress code</h2>
              </div>
              <div>
                <p className="lede reveal">
                  Toszkán, rusztikus-elegáns hangulat: földszínek, ivory, zsálya, oliva és karamell árnyalatok.
                </p>
                <div className="swatches reveal" aria-hidden="true">
                  {SWATCHES.map((color) => (
                    <span key={color} style={{ background: color }} />
                  ))}
                </div>
                <p className="note reveal">A fehér színt hagyjuk a menyasszonynak.</p>
              </div>
            </div>
          </div>
          <div className="dress-art reveal">
            <Image
              src="/images/dresscode-art.webp"
              alt="Öltözködési ötletek: krém, zsálya, oliva és karamell ruhák, fekete öltönyök"
              width={1536}
              height={1024}
              sizes="(max-width: 1180px) 100vw, 1180px"
            />
          </div>
        </section>

        <section className="stay" id="szallas">
          <div className="wrap two">
            <div className="col-text">
              <p className="label reveal">Ahol megpihenhettek</p>
              <h2 className="script h-script reveal">Szállás</h2>
              <p className="lede reveal">
                Szeretnénk, ha a pihenésed is kényelmes és zökkenőmentes lenne. Ajánlott szálláshelyeket Kálna
                környékén hamarosan megosztunk.
              </p>
              <a className="link reveal" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                Útvonal a helyszínre
              </a>
            </div>
            <div className="col-pic reveal r">
              <div className="album">
                <div className="ph">
                  <Image src="/images/venue.jpeg" alt="Kálna, Mátyás malom" fill sizes="(max-width: 800px) 90vw, 500px" />
                  <span className="corner tl" aria-hidden="true" />
                  <span className="corner tr" aria-hidden="true" />
                  <span className="corner bl" aria-hidden="true" />
                  <span className="corner br" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* RSVP */}
      <section className="win rsvp" id="rsvp">
        <div className="wrap">
          <p className="label reveal">Válaszotokat kérjük</p>
          <h2 className="script h-script reveal">Ott lesztek?</h2>
          <RsvpPanel />
        </div>
      </section>

      <footer className="win wash">
        <div className="wrap">
          <div className="oval">
            <span className="script">LM</span>
          </div>
          <p className="contact">
            Ha bármilyen kérdésetek van, keressétek bátran a menyasszonyt és a vőlegényt. Elérhetőségeinket hamarosan
            közzétesszük.
          </p>
          <a className="link" href="#top">
            Vissza a meghívóhoz
          </a>
          <p className="credit">Fotók: @blankartphotography</p>
        </div>
      </footer>
    </div>
  );
}
