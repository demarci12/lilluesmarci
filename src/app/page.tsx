import Image from "next/image";
import EnvelopeHero from "@/components/wedding/EnvelopeHero";
import Reveal from "@/components/wedding/Reveal";
import Countdown from "@/components/wedding/Countdown";
import RsvpPanel from "@/components/wedding/RsvpPanel";

// Guest-facing dress code palette: ivory, sage, olive, caramel, deep caramel.
const SWATCHES = ["#fcf8ef", "#b8ca9a", "#7c8c5b", "#c2a87a", "#a8834f"];

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=K%C3%A1lna+M%C3%A1ty%C3%A1s+Malom";

export default function Home() {
  return (
    <div className="ol">
      <EnvelopeHero />
      <Reveal />

      {/* Pastel white ground: one backdrop runs behind the first few sections */}
      <div className="win wash">
        <section className="intro" id="varunk">
          <div className="wrap intro-top">
            <h2 className="script h-script reveal">Kálna, Mátyás malom</h2>
            <p className="lede reveal">
              2027. július 10-én, szombaton összeházasodunk, és szeretnénk, ha ezen a napon ott lennél velünk.
            </p>
          </div>

          <div className="wrap intro-bottom">
            <Countdown />
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
                  <a className="link" href="#templom">
                    Az esküvő napja
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </section>
      </div>

      {/* 1. Templom: church painting */}
      <section className="win scene templom" id="templom">
        <div className="wrap">
          <div className="arch reveal">
            <p className="label">Egyházi szertartás</p>
            <h2 className="script h-script">Templom</h2>
            <p className="lede">
              Az esküvői szertartás templomban lesz, onnan együtt indulunk tovább a mulatság helyszínére. A templom
              pontos címét és a kezdés időpontját hamarosan megírjuk.
            </p>
            <dl className="mini">
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
        </div>
      </section>

      {/* 2. Fogadás: champagne painting */}
      <section className="win scene recep" id="fogadas">
        <div className="wrap">
          <div className="scene-card card-light reveal">
            <p className="label">A szertartás után</p>
            <h2 className="script h-script">Fogadás</h2>
            <p className="lede">
              Egy pohár pezsgővel köszöntünk benneteket, és együtt koccintunk az első közös percekre.
            </p>
            <dl className="mini">
              <div>
                <dt>Időpont</dt>
                <dd>hamarosan</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 3. Vacsora */}
      <section className="win scene dinner" id="vacsora">
        <div className="wrap">
          <div className="arch dark reveal">
            <p className="label">Az asztalnál</p>
            <h2 className="script h-script">Vacsora</h2>
            <p className="lede">
              Közösen vacsorázunk a mennyezetről lógó fényfüzérek alatt. A menüről és az időpontról hamarosan írunk.
            </p>
            <dl className="mini">
              <div>
                <dt>Időpont</dt>
                <dd>hamarosan</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 4. Bál, mulatság: the night painting */}
      <section className="win night scene" id="bal">
        <div className="wrap">
          <div className="scene-plain reveal">
            <p className="label">Este</p>
            <h2 className="script h-script">Bál, mulatság</h2>
            <p className="lede">Vacsora után jön a zene, a tánc és a mulatság.</p>
            <dl className="mini">
              <div>
                <dt>Időpont</dt>
                <dd>hamarosan</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 5 and 6, then the practical sections: pastel white again */}
      <div className="win wash">
        <section className="cake" id="torta">
          <div className="wrap">
            <p className="label reveal">Édes pillanat</p>
            <h2 className="script h-script reveal">Tortavágás</h2>
            <p className="lede reveal">A tortavágás részleteit hamarosan megosztjuk.</p>
            <div className="placeholder reveal" role="img" aria-label="Kép hamarosan">
              <span>Kép hamarosan</span>
            </div>
          </div>
        </section>

        <section className="transfer" id="transfer">
          <div className="wrap">
            <p className="label reveal">Utazás</p>
            <h2 className="script h-script reveal">Transfer</h2>
            <p className="lede reveal">
              A helyszínek között kisbusz visz benneteket. A menetrendet és az indulási helyeket hamarosan
              megosztjuk.
            </p>
          </div>
          <div className="art narrow reveal">
            <Image
              src="/images/transfer-van.webp"
              alt="Esküvői kisbusz virágdísszel"
              width={1536}
              height={1024}
              sizes="(max-width: 860px) 100vw, 860px"
            />
          </div>
        </section>

        <section className="gift" id="ajandek">
          <div className="wrap">
            <div className="arch reveal">
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

        <section className="dress" id="dresscode">
          <div className="wrap">
            <p className="label reveal">Öltözék</p>
            <h2 className="script h-script reveal">Dress code</h2>
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
