import Image from "next/image";
import EnvelopeHero from "@/components/wedding/EnvelopeHero";
import Reveal from "@/components/wedding/Reveal";
import Countdown from "@/components/wedding/Countdown";
import Expandable from "@/components/wedding/Expandable";
import RsvpPanel from "@/components/wedding/RsvpPanel";

const TIMELINE = [
  { time: "TBA", title: "Szertartás" },
  { time: "TBA", title: "Fogadás & koktél" },
  { time: "TBA", title: "Vacsora" },
  { time: "TBA", title: "Bál, mulatság" },
  { time: "TBA", title: "Tortavágás" },
  { time: "TBA", title: "Búcsúzás" },
];

// Guest-facing dress code palette: ivory, sage, olive, caramel, deep caramel.
const SWATCHES = ["#fcf8ef", "#b8ca9a", "#7c8c5b", "#c2a87a", "#a8834f"];

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=K%C3%A1lna+M%C3%A1ty%C3%A1s+Malom";

export default function Home() {
  return (
    <div className="ol">
      <EnvelopeHero />
      <Reveal />

      {/* Join us */}
      <section id="varunk">
        <p className="eyebrow reveal">Várunk szeretettel</p>
        <h2 className="script h-script reveal">Kálna, Mátyás malom</h2>
        <div className="cameo reveal">
          <div className="ph">
            <Image src="/images/intro.jpeg" alt="Lilu és Marci" fill sizes="290px" />
          </div>
        </div>
        <Countdown />
      </section>

      {/* Story */}
      <section className="band" id="story">
        <p className="eyebrow reveal">Történetünk</p>
        <h2 className="script h-script reveal">A mi történetünk</h2>
        <div className="reveal">
          <div className="polaroid">
            <span className="tape" aria-hidden="true" />
            <div className="ph">
              <Image src="/images/hero.jpeg" alt="Lilu és Marci" fill sizes="290px" />
            </div>
            <span className="cap">Lilu &amp; Marci</span>
          </div>
        </div>
        <p className="txt reveal">
          A történetünket hamarosan részletesebben is megosztjuk veletek: hogyan ismerkedtünk meg, mikor tudtuk,
          hogy ő az igazi, és hogyan jutottunk el idáig.
        </p>
        <Expandable>
          <p className="txt">Addig is szeretettel várunk benneteket 2027. július 10-én a kálnai Mátyás malomban.</p>
        </Expandable>
      </section>

      {/* Details */}
      <section id="details">
        <p className="eyebrow reveal">Esküvői részletek</p>
        <h2 className="script h-script reveal">Mindent, amit tudni érdemes</h2>
        <p className="txt reveal">
          2027. július 10.
          <br />
          Kálna, Mátyás malom
          <br />A pontos időrendet és a további információkat hamarosan megosztjuk.
        </p>
        <a className="pill reveal" href="#idorend">
          Fedezd fel
        </a>
      </section>

      {/* Időrend */}
      <section className="band" id="idorend">
        <p className="eyebrow reveal">Az esküvő napja</p>
        <h2 className="script h-script reveal">Időrend</h2>
        <ol className="programme reveal">
          {TIMELINE.map((item) => (
            <li key={item.title}>
              <span className="t-title">{item.title}</span>
              <span className="t-time">{item.time}</span>
            </li>
          ))}
        </ol>
        <p className="txt reveal">Pontos időpontokat hamarosan küldünk.</p>
      </section>

      {/* Dress code */}
      <section id="dresscode">
        <p className="eyebrow reveal">Öltözék</p>
        <h2 className="script h-script reveal">Dress code</h2>
        <div className="matcard reveal">
          <div className="mat-in">
            <div className="ph">
              <Image src="/images/dresscode.jpeg" alt="Lilu és Marci" fill sizes="280px" />
            </div>
          </div>
        </div>
        <p className="txt reveal">
          Toszkán, rusztikus-elegáns hangulat — földszínek: ivory, zsálya, oliva és karamell árnyalatok.
        </p>
        <div className="swatches reveal" aria-hidden="true">
          {SWATCHES.map((color) => (
            <span key={color} style={{ background: color }} />
          ))}
        </div>
        <p className="txt note reveal">A fehér színt hagyjuk a menyasszonynak.</p>
      </section>

      {/* Ajándék */}
      <section className="band" id="ajandek">
        <p className="eyebrow reveal">Köszönjük</p>
        <h2 className="script h-script reveal">Ajándék</h2>
        <p className="txt reveal">Számunkra a legnagyobb ajándék, hogy ezen a különleges napon velünk ünnepelsz.</p>
        <p className="txt reveal">
          Ha mégis szeretnél valamivel kedveskedni, az ajándékozással kapcsolatos részleteket hamarosan megosztjuk.
        </p>
        <p className="soon reveal">Részletek hamarosan</p>
      </section>

      {/* Szállás */}
      <section id="szallas">
        <p className="eyebrow reveal">Ahol megpihenhettek</p>
        <h2 className="script h-script reveal">Szállás</h2>
        <div className="album reveal">
          <div className="ph">
            <Image src="/images/venue.jpeg" alt="Kálna, Mátyás malom" fill sizes="(max-width: 600px) 90vw, 540px" />
            <span className="corner tl" aria-hidden="true" />
            <span className="corner tr" aria-hidden="true" />
            <span className="corner bl" aria-hidden="true" />
            <span className="corner br" aria-hidden="true" />
          </div>
        </div>
        <p className="txt reveal">
          Szeretnénk, ha a pihenésed is kényelmes és zökkenőmentes lenne. Ajánlott szálláshelyeket a Kálna környékén
          hamarosan megosztunk.
        </p>
        <a className="pill reveal" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
          Útvonal a helyszínre
        </a>
      </section>

      {/* RSVP */}
      <section
        className="rsvp"
        id="rsvp"
        style={{
          backgroundImage:
            "linear-gradient(rgba(52,58,22,.66), rgba(52,58,22,.66)), url(/images/backdrop-champagne.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="eyebrow reveal">Válaszotokat kérjük</p>
        <h2 className="script h-script reveal">Ott lesztek?</h2>
        <RsvpPanel />
      </section>

      <footer>
        <p className="eyebrow">Szeretettel</p>
        <div className="oval">
          <span className="script">LM</span>
        </div>
        <p className="contact">
          Ha bármilyen kérdésetek van, keressétek bátran a menyasszonyt és a vőlegényt — elérhetőségeinket
          hamarosan közzétesszük.
        </p>
        <a className="back" href="#top">
          Vissza a meghívóhoz
        </a>
        <p className="credit">Fotók: @blankartphotography</p>
      </footer>
    </div>
  );
}
