import Image from "next/image";
import Countdown from "@/components/wedding/Countdown";
import Effects from "@/components/wedding/Effects";
import OliveBranch from "@/components/wedding/OliveBranch";
import RsvpForm from "@/components/wedding/RsvpForm";

type Event = { time: string; title: string; note?: string };

// Main guest-facing points only (the couple's own prep, buffers and photo slots stay off).
const chapters: { title: string; place: string; events: Event[] }[] = [
  {
    title: "Templom",
    place: "Etyek",
    events: [
      { time: "15:00", title: "Templomi szertartás", note: "Kérjük, 14:50-re érkezzetek." },
      { time: "16:10", title: "Transzfer a Malomhoz", note: "Közös transzfer a templomtól." },
    ],
  },
  {
    title: "A Malomban",
    place: "Kálna",
    events: [
      { time: "16:40", title: "Vendégváró", note: "Megérkezés után koccintunk." },
      { time: "19:30", title: "Vacsora" },
    ],
  },
  {
    title: "Este és éjjel",
    place: "Kálna",
    events: [
      { time: "22:15", title: "Első tánc" },
      { time: "22:30", title: "Buli hajnalig", note: "Fényfüzérek alatt, reggelig." },
      { time: "0:00", title: "Torta" },
    ],
  },
];

const faq = [
  ["Mikor és hol lesz az esküvő?", "2027. július 10-én, szombaton 15:00-kor az etyeki templomban. A vacsora és a buli a Kálna Mátyás Malomban lesz."],
  ["Hogyan jutunk el a templomtól a helyszínre?", "A szertartás után transzfert biztosítunk a Kálna Mátyás Malomhoz, így az autót nyugodtan a szállásnál hagyhatjátok."],
  ["Lesz transzfer az este végén?", "Igen. Az este folyamán több időpontban indul transzfer az etyeki szállásokhoz, valamint Budapestre is. A pontos menetrendet később osztjuk meg."],
  ["Hol érdemes szállást foglalni?", "Etyeken érdemes szállást keresni. Mivel júliusban gyorsan betelnek a környék szálláshelyei, javasoljuk, hogy időben foglaljatok."],
  ["Mit vegyünk fel?", "Kerti elegáns öltözetet javaslunk természetes, nyári árnyalatokban. Kérjük, kerüljétek a fehér és a neon színeket, és estére hozzatok egy könnyű réteget."],
  ["Jelezzük az ételérzékenységet?", "Igen, kérjük, az RSVP űrlapon írjátok meg az ételallergiát, intoleranciát vagy különleges étrendet, hogy mindenkiről gondoskodhassunk."],
];

const gallery = [
  { src: "/images/engagement-lift.jpg", alt: "Marton felemeli Lillát a naplementében", caption: "Naplemente" },
  { src: "/images/engagement-ring.jpg", alt: "Lilla a gyűrűjét mutatja", caption: "Igen." },
  { src: "/images/engagement-carry.jpg", alt: "Marton a vállán viszi Lillát, mindketten nevetnek", caption: "Mindig így" },
  { src: "/images/engagement-chapel.jpg", alt: "Lilla és Marton a fűben, mögöttük egy kápolna", caption: "A kápolnánál" },
  { src: "/images/engagement-grass.jpg", alt: "Lilla és Marton a fűben", caption: "Nyári délután" },
];

const NAMES = ["Lilu", "\n", "&", " ", "Marci"];

function SplitNames() {
  let i = 0;
  return (
    <h1 className="lm-names" aria-label="Lilu és Marci">
      {NAMES.map((part, p) =>
        part === "\n" ? (
          <br key={p} />
        ) : part === " " ? (
          " "
        ) : (
          [...part].map((ch) => (
            <span
              key={`${p}-${i}`}
              aria-hidden="true"
              className={`lm-ch${ch === "&" ? " lm-amp" : ""}`}
              style={{ "--i": i++ } as React.CSSProperties}
            >
              {ch}
            </span>
          ))
        ),
      )}
    </h1>
  );
}

export default function Home() {
  return (
    <div className="lm">
      <Effects />
      <div className="lm-sun" aria-hidden="true" />

      <header id="lm-hero" data-sun="12 74 1" data-sun-m="64 90 .9">
        <div className="lm-wrap">
          <nav className="lm-nav" aria-label="Fő navigáció">
            <a href="#" className="lm-brand">L &amp; M</a>
            <div className="lm-links">
              <a href="#program">Program</a>
              <a href="#helyszin">Helyszín</a>
              <a href="#transzfer">Transzfer</a>
              <a href="#szallas">Szállás</a>
              <a href="#gyik">GYIK</a>
            </div>
            <a href="#rsvp" className="btn btn-primary rounded-full">Visszajelzés</a>
          </nav>

          <div className="lm-hero-grid">
            <div>
              <p className="lm-label lm-fade" style={{ "--d": ".1s" } as React.CSSProperties}>
                Családjainkkal együtt szeretettel meghívunk
              </p>
              <SplitNames />
              <div className="lm-rule lm-fade" style={{ "--d": ".8s" } as React.CSSProperties} />
              <p className="lm-date lm-fade" style={{ "--d": ".9s" } as React.CSSProperties}>2027. július 10., szombat</p>
              <p className="lm-place lm-fade" style={{ "--d": "1s" } as React.CSSProperties}>Etyeki templom → Kálna Mátyás Malom</p>
              <p className="lm-rot lm-fade" style={{ "--d": "1.05s" } as React.CSSProperties}>
                Gyertek, és{" "}
                <span className="text-rotate duration-[7.5s]">
                  <span>
                    <span>ünnepeljünk együtt</span>
                    <span>táncoljunk hajnalig</span>
                    <span>koccintsunk a malomban</span>
                  </span>
                </span>
              </p>
              <div className="lm-actions lm-fade" style={{ "--d": "1.1s" } as React.CSSProperties}>
                <a href="#rsvp" className="btn btn-primary btn-lg rounded-full">
                  Ott leszek <span className="lm-arr">→</span>
                </a>
                <a href="#program" className="lm-textlink">A nap menete</a>
              </div>
            </div>

            <div className="lm-arch-frame lm-fade" style={{ "--d": ".4s" } as React.CSSProperties}>
              <div className="hover-3d">
                <figure className="lm-arch">
                  <div className="lm-par">
                    <Image
                      src="/images/engagement-lift.jpg"
                      alt="Marton felemeli Lillát a naplementében"
                      fill
                      priority
                      sizes="(max-width: 900px) 92vw, 500px"
                      className="object-cover"
                    />
                  </div>
                </figure>
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} />
                ))}
              </div>
              <OliveBranch className="lm-branch" />
            </div>
          </div>

          <div className="lm-fade pb-10" style={{ "--d": "1.3s" } as React.CSSProperties}>
            <Countdown />
          </div>
        </div>
      </header>

      <section id="program" className="lm-section" data-sun="4 97 .8" data-sun-m="6 96 .7">
        <div className="lm-wrap">
          <div className="lm-head lm-reveal">
            <h2 className="lm-h2">A nap menete</h2>
            <p className="lm-lead">Délután háromtól hajnalig, a legfontosabb pontok.</p>
          </div>
          <div className="lm-chapters">
            {chapters.map((chapter, c) => (
              <div key={chapter.title} className="lm-reveal" style={{ "--rd": `${c * 0.1}s` } as React.CSSProperties}>
                <div className="lm-chapter-head">
                  <h3 className="lm-h3">{chapter.title}</h3>
                  <span className="lm-chip"><i />{chapter.place}</span>
                </div>
                <div className="lm-tl">
                  <span className="lm-fill" />
                  {chapter.events.map((ev) => (
                    <div key={ev.time} className="lm-ev">
                      <time>{ev.time}</time>
                      <div>
                        <h4>{ev.title}</h4>
                        {ev.note && <p>{ev.note}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="helyszin" className="lm-section" data-sun="34 97 .8" data-sun-m="10 96 .7">
        <div className="lm-wrap">
          <div className="lm-head lm-reveal">
            <h2 className="lm-h2">Hol leszünk?</h2>
            <p className="lm-lead">Két helyszín, közöttük mi visszük a vendégeket.</p>
          </div>

          <article className="lm-place-card is-wide lm-reveal">
            <figure className="lm-wide lm-wipe">
              <div className="lm-par">
                <Image src="/images/church-photo.jpg" alt="Az etyeki templom a kőfal és a lépcső fölött" fill sizes="(max-width: 900px) 92vw, 640px" className="object-cover" />
              </div>
            </figure>
            <div className="lm-place-body">
              <p className="lm-label">1. helyszín · <span className="lm-when">15:00</span></p>
              <h3 className="lm-place-name">Etyeki templom</h3>
              <p className="lm-lead">Itt kezdődik a nap a templomi szertartással.</p>
              <ul className="lm-how">
                <li><b>Budapestről</b><span>Autóval nagyjából 35–45 perc.</span></li>
                <li><b>Parkolás</b><span>A templom környékén, részletek a meghívóban.</span></li>
              </ul>
              <a className="btn btn-primary rounded-full" href="https://www.google.com/maps/search/?api=1&query=Etyek+templom" target="_blank" rel="noopener noreferrer">
                Útvonal a templomhoz <span className="lm-arr">→</span>
              </a>
            </div>
          </article>

          <article className="lm-place-card is-flip lm-reveal">
            <figure className="lm-wide lm-wipe">
              <div className="lm-par">
                <Image src="/images/venue.jpeg" alt="A Kálna Mátyás Malom a tóparton, fényfüzérekkel" fill sizes="(max-width: 900px) 92vw, 640px" className="object-cover" />
              </div>
            </figure>
            <div className="lm-place-body">
              <p className="lm-label">2. helyszín · <span className="lm-when">16:40-től</span></p>
              <h3 className="lm-place-name">Kálna Mátyás Malom</h3>
              <p className="lm-lead">Erdő, tó és fényfüzérek: itt vacsorázunk és bulizunk hajnalig.</p>
              <ul className="lm-how">
                <li><b>Transzferrel</b><span>16:10-kor indul a templomtól.</span></li>
                <li><b>Autóval</b><span>Parkoló a malomnál.</span></li>
              </ul>
              <a className="btn btn-primary rounded-full" href="https://www.google.com/maps/search/?api=1&query=K%C3%A1lna+M%C3%A1ty%C3%A1s+Malom" target="_blank" rel="noopener noreferrer">
                Útvonal a malomhoz <span className="lm-arr">→</span>
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="transzfer" className="lm-section" data-sun="112 90 .7">
        <div className="lm-wrap">
          <div className="lm-board lm-reveal">
            <h2 className="lm-h2">Hazafelé is<br />megyünk értetek</h2>
            <p className="lm-lead mt-4">Nem kell vezetnetek. Az RSVP-nél jelezzétek, melyik transzfert kéritek.</p>
            <div className="lm-rows" role="table" aria-label="Transzfer járatok">
              <div className="lm-brow is-head" role="row">
                <span role="columnheader">Irány</span>
                <span role="columnheader" className="lm-from">Honnan</span>
                <span role="columnheader">Indulás</span>
              </div>
              <div className="lm-brow" role="row">
                <span role="cell">Kálna Mátyás Malom</span>
                <span role="cell" className="lm-from">Etyeki templom</span>
                <span role="cell">16:10</span>
              </div>
              <div className="lm-brow" role="row">
                <span role="cell">Etyeki szállások</span>
                <span role="cell" className="lm-from">Malom</span>
                <span role="cell" className="lm-flap">éjjel, több járat</span>
              </div>
              <div className="lm-brow" role="row">
                <span role="cell">Budapest</span>
                <span role="cell" className="lm-from">Malom</span>
                <span role="cell" className="lm-flap">éjjel, több járat</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="szallas" className="lm-section !pt-0" data-sun="120 90 .7">
        <div className="lm-wrap lm-duo">
          <div className="lm-soft lm-reveal">
            <p className="lm-label">Szállás</p>
            <h3 className="lm-h3">Etyeken, a közelben</h3>
            <p className="lm-muted">
              Etyeken több szálláshely közül is választhattok. Júliusban gyorsan betelnek a helyek, ezért érdemes időben
              foglalni. Ha segítség kell, jelezzétek a visszajelzésnél.
            </p>
          </div>
          <div className="lm-soft lm-reveal" style={{ "--rd": ".1s" } as React.CSSProperties}>
            <p className="lm-label">A mi csapatunk</p>
            <h3 className="lm-h3">Akik mellettünk állnak</h3>
            <div className="lm-person">
              <span className="lm-ph" aria-hidden="true">L</span>
              <div>
                <b>Koszorúslányok</b>
                <p className="lm-muted">Lilla oldalán: a barátnők, akik minden készülődésben vele vannak.</p>
              </div>
            </div>
            <div className="lm-person">
              <span className="lm-ph" aria-hidden="true">M</span>
              <div>
                <b>Vőlegény kísérői</b>
                <p className="lm-muted">Marton oldalán: a barátok, akik most az oltárhoz vezető úton is mellette állnak.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lm-section !pt-0" data-sun="120 90 .7">
        <div className="lm-wrap">
          <div className="lm-head lm-reveal" style={{ marginBottom: 28 }}>
            <h2 className="lm-h2">A mi pillanataink</h2>
            <p className="lm-lead">Fotók: @blankartphotography</p>
          </div>
          <div className="lm-hg lm-reveal">
            <figure className="hover-gallery">
              {gallery.map((g) => (
                <Image key={g.src} src={g.src} alt={g.alt} width={1333} height={2000} sizes="720px" />
              ))}
            </figure>
            <p className="lm-muted">Húzd az egeret a kép fölött: öt pillanat az eljegyzési fotózásról.</p>
          </div>
        </div>
        <div className="lm-strip">
          {gallery.map((g) => (
            <figure key={g.src}>
              <Image src={g.src} alt={g.alt} width={1333} height={2000} sizes="74vw" />
              <figcaption>{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="gyik" className="lm-section" data-sun="80 10 .8" data-sun-m="12 96 .7">
        <div className="lm-wrap lm-head" style={{ alignItems: "start", marginBottom: 0 }}>
          <h2 className="lm-h2 lm-reveal">Gyakori kérdések</h2>
          <div className="lm-faq lm-reveal">
            {faq.map(([q, a], i) => (
              <div key={q} className="collapse collapse-plus">
                <input type="radio" name="lm-faq" defaultChecked={i === 0} aria-label={q} />
                <div className="collapse-title">{q}</div>
                <div className="collapse-content">
                  <p>{a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="rsvp" className="lm-section !pt-0" data-sun="22 14 1.1" data-sun-m="8 92 .8">
        <div className="lm-wrap">
          <div className="lm-rsvp lm-reveal">
            <div>
              <h2 className="lm-rsvp-title">Ott<br />leszel?</h2>
              <p className="lm-lead mt-6">
                Kérjük, töltsétek ki az űrlapot, hogy tudjuk, számíthatunk-e rátok, illetve kértek-e szállást vagy transzfert.
              </p>
            </div>
            <RsvpForm />
          </div>
        </div>
      </section>

      <footer className="lm-footer">
        <div className="lm-wrap">
          <div>
            <span className="lm-sig">Lilla &amp; Marton</span>
            <span>Szeretettel, Etyekről</span>
            <span>2027. július 10.</span>
          </div>
        </div>
      </footer>

      <div id="lm-fab" className="fab is-hidden">
        <a href="#rsvp" className="btn btn-primary btn-lg rounded-full shadow-lg">Visszajelzés →</a>
      </div>
    </div>
  );
}
