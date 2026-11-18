import Image from "next/image";
import Envelope from "@/components/wedding/Envelope";
import Reveal from "@/components/wedding/Reveal";
import RsvpForm from "@/components/wedding/RsvpForm";

// Main guest-facing points only (the couple's own prep, buffers and photo slots stay off).
const timeline = [
  { time: "15:00", text: "Szertartás", place: "Etyeki templom" },
  { time: "16:10", text: "Transzfer", place: "A templomtól a malomhoz" },
  { time: "16:40", text: "Vendégváró", place: "Kálna Mátyás Malom" },
  { time: "19:30", text: "Vacsora", place: "Kálna Mátyás Malom" },
  { time: "22:15", text: "Első tánc", place: "Kálna Mátyás Malom" },
  { time: "22:30", text: "Buli", place: "Hajnalig" },
  { time: "0:00", text: "Torta", place: "Éjfélkor" },
];

const gallery = [
  { src: "/images/engagement-ring.jpg", alt: "Lilla a gyűrűjét mutatja" },
  { src: "/images/engagement-lift.jpg", alt: "Marton felemeli Lillát" },
  { src: "/images/engagement-chapel.jpg", alt: "Lilla és Marton a kápolna mellett" },
  { src: "/images/engagement-carry.jpg", alt: "Marton a vállán viszi Lillát" },
];

// Opening slideshow: black-and-white and colour shots alternate.
const ribbon = [
  { src: "/images/engagement-lift.jpg", alt: "Marton felemeli Lillát a naplementében", mono: true },
  { src: "/images/engagement-ring.jpg", alt: "Lilla a gyűrűjét mutatja", mono: false },
  { src: "/images/engagement-grass.jpg", alt: "Lilla és Marton a fűben", mono: true },
  { src: "/images/engagement-carry.jpg", alt: "Marton a vállán viszi Lillát", mono: false },
  { src: "/images/engagement-chapel.jpg", alt: "Lilla és Marton a kápolna mellett", mono: true },
  { src: "/images/about.jpg", alt: "Lilla és Marton meghitt pillanata", mono: false },
];

export default function Home() {
  return (
    <div className="ol">
      <Reveal />
      <main className="overflow-hidden bg-[#fbf7ee] text-[#292c26]">
        {/* Opening: white header with our names and the menu, then the slideshow with the monogram. */}
        <section className="wed-hero bg-[#fbf7ee]">
          <header className="intro intro-1 px-6 pb-6 pt-10 text-center md:pt-12">
            <h1 className="font-serif text-[2rem] font-normal uppercase tracking-[0.14em] text-[#292c26] md:text-[2.6rem]">
              Lilla &amp; Marton
            </h1>
            <p className="mt-2 text-[11px] uppercase tracking-[0.42em] text-[#5f6650]">2027. július 10. · Etyek</p>
            <nav aria-label="Fő navigáció" className="mt-6 flex flex-wrap justify-center gap-x-7 gap-y-2 text-[15px] text-[#3d4230]">
              <a className="nav-link is-current" href="#">Kezdőlap</a>
              <a className="nav-link" href="#program">Program</a>
              <a className="nav-link" href="#megkozelites">Útvonal</a>
              <a className="nav-link" href="#szallas">Szállás</a>
              <a className="nav-link" href="#gyik">GYIK</a>
              <a className="nav-link" href="#rsvp">RSVP</a>
            </nav>
          </header>

          <div className="hero-ribbon intro intro-2 relative" aria-label="Eljegyzési fotók">
            <div className="marquee-track">
              {[...ribbon, ...ribbon].map((p, i) => (
                <figure key={i} className={`marquee-item ${p.mono ? "is-mono" : ""}`} aria-hidden={i >= ribbon.length}>
                  <Image
                    src={p.src}
                    alt={i < ribbon.length ? p.alt : ""}
                    fill
                    priority={i < 4}
                    sizes="(max-width: 768px) 80vw, 34vw"
                    className="object-cover"
                  />
                </figure>
              ))}
            </div>
            <p className="hero-monogram pointer-events-none" aria-hidden="true">
              <span className="mono-l">L</span>
              <span className="mono-amp">&amp;</span>
              <span className="mono-m">M</span>
            </p>
          </div>
        </section>

        <section id="program" className="relative bg-[#fbf7ee] px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <header data-reveal className="reveal text-center">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#676c56]">A nagy nap</p>
              <h2 className="mt-4 font-serif">
                A nap <span className="italic">menete</span>
              </h2>
            </header>

            {/* Itinerary: small-caps title, italic place and time, no boxes. */}
            <ol data-reveal className="reveal mx-auto mt-14 flex max-w-[1100px] flex-wrap justify-center gap-x-6 gap-y-12">
              {timeline.map((item) => (
                <li key={item.time} className="w-[44%] text-center sm:w-[30%] lg:w-[22%]">
                  <h3 className="itin-title">{item.text}</h3>
                  <p className="mt-3 font-serif text-xl italic text-[#56594c]">{item.place}</p>
                  <p className="mt-1 font-serif text-xl italic text-[#6f7a3a]">{item.time}</p>
                </li>
              ))}
            </ol>
            <p data-reveal className="reveal mx-auto mt-14 max-w-xl text-center text-sm text-[#56594c]">
              Kérjük, 14:50-re érkezzetek a templomhoz.
            </p>
          </div>
        </section>

        <section id="details" className="relative bg-[#fbf7ee] px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <div data-reveal className="reveal grid gap-10 md:grid-cols-12">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#676c56] md:col-span-3">Mentsd el a dátumot</p>
              <h2 className="font-serif text-6xl font-light leading-[0.85] tracking-[-0.04em] md:col-span-9 md:text-9xl">
                Egy nyári nap<br /><span className="italic">Etyeken.</span>
              </h2>
            </div>

            <div className="mt-16 grid border-y border-[#73785f]/40 md:grid-cols-3">
              {[
                ["Mikor", "Szombat", "2027. július 10."],
                ["Szertartás", "Etyeki templom", "15:00-kor kezdődik"],
                ["Vacsora és buli", "Kálna Mátyás Malom", "16:10-kor transzfer a templomtól"],
              ].map(([label, title, detail]) => (
                <div data-reveal key={label} className="reveal border-b border-[#73785f]/40 py-12 md:border-b-0 md:border-r md:px-10 md:last:border-r-0">
                  <p className="text-[9px] uppercase tracking-[0.32em] text-[#73785f]">{label}</p>
                  <p className="mt-12 font-serif text-4xl italic">{title}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#65695a]">{detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 grid items-end gap-6 md:grid-cols-12">
              <figure data-reveal className="reveal oval-photo relative mx-auto aspect-[3/4] w-[78%] overflow-hidden md:col-span-5 md:w-full">
                <Image
                  src="/images/engagement-lift.jpg"
                  alt="Marton felemeli Lillát a naplementében"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </figure>
              <figure data-reveal className="reveal polaroid mx-auto w-[72%] md:col-span-4 md:col-start-8 md:mb-10 md:w-full">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src="/images/engagement-chapel.jpg"
                    alt="Lilla és Marton a fűben ülnek, mögöttük egy kápolna"
                    fill
                    sizes="(max-width: 768px) 70vw, 30vw"
                    className="object-cover object-[50%_45%] grayscale"
                  />
                </div>
                <figcaption className="polaroid-note">Lilla &amp; Marton</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="megkozelites" className="bg-[#eef1e2] px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <header data-reveal className="reveal grid gap-10 md:grid-cols-12">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#676c56] md:col-span-3">Megközelítés</p>
              <h2 className="font-serif text-7xl font-light leading-[0.82] tracking-[-0.045em] md:col-span-9 md:text-9xl">
                Hogyan juttok<br /><span className="italic">el hozzánk?</span>
              </h2>
            </header>

            <div className="mt-16 grid border-y border-[#73785f]/40 md:grid-cols-3">
              <article data-reveal className="reveal border-b border-[#73785f]/40 py-12 md:border-r md:border-b-0 md:px-10">
                <span className="font-serif text-5xl font-light text-[#7b8066]">01</span>
                <p className="mt-10 text-[9px] uppercase tracking-[0.3em] text-[#6d725b]">Érkezés Etyekre</p>
                <h3 className="mt-4 font-serif text-3xl italic">Budapestről</h3>
                <p className="mt-5 text-sm leading-7 text-[#5d6152]">
                  Etyek Budapest központjától autóval megközelítőleg 35–45 perc alatt érhető el.
                  Kérjük, az utazásra hagyjatok elegendő időt.
                </p>
              </article>
              <article data-reveal className="reveal border-b border-[#73785f]/40 py-12 md:border-r md:border-b-0 md:px-10">
                <span className="font-serif text-5xl font-light text-[#7b8066]">02</span>
                <p className="mt-10 text-[9px] uppercase tracking-[0.3em] text-[#6d725b]">Első állomás</p>
                <h3 className="mt-4 font-serif text-3xl italic">Etyeki templom</h3>
                <p className="mt-5 text-sm leading-7 text-[#5d6152]">
                  A nap a templomi szertartással kezdődik. A templom pontos címét és a parkolási
                  információkat a meghívóval együtt küldjük el.
                </p>
                <figure className="relative mt-8 aspect-[4/3] overflow-hidden">
                  <Image src="/images/church-photo.jpg" alt="Az etyeki templom a kőfal és a lépcső fölött" fill sizes="(max-width: 768px) 90vw, 30vw" className="object-cover" />
                </figure>
              </article>
              <article data-reveal className="reveal py-12 md:px-10">
                <span className="font-serif text-5xl font-light text-[#7b8066]">03</span>
                <p className="mt-10 text-[9px] uppercase tracking-[0.3em] text-[#6d725b]">Vacsora és buli</p>
                <h3 className="mt-4 font-serif text-3xl italic">Kálna Mátyás Malom</h3>
                <p className="mt-5 text-sm leading-7 text-[#5d6152]">
                  A szertartás után közös transzfer visz benneteket a malomhoz. Saját autóval is
                  érkezhettek; a helyszínen parkolási lehetőség lesz.
                </p>
                <figure className="relative mt-8 aspect-[4/3] overflow-hidden">
                  <Image src="/images/venue.jpeg" alt="A Kálna Mátyás Malom a tóparton, fényfüzérekkel" fill sizes="(max-width: 768px) 90vw, 30vw" className="object-cover" />
                </figure>
              </article>
            </div>

            <div data-reveal className="reveal mt-14 flex flex-col justify-between gap-8 bg-[#dfe5cc] p-8 md:flex-row md:items-center md:p-12">
              <div>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#6d725b]">Nem szeretnétek vezetni?</p>
                <p className="mt-3 font-serif text-3xl italic">A transzferről mi gondoskodunk.</p>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[#575b4d]">
                A templomtól a Kálna Mátyás Malomhoz, majd az este végén az etyeki szállásokhoz és
                Budapestre is szervezett járatok indulnak. Az RSVP-nél jelezzétek, melyik transzfert kéritek.
              </p>
            </div>
          </div>
        </section>

        <section id="szallas" className="bg-[#5f6a3c] px-6 py-20 text-center text-[#fbf8f1] md:px-12 md:py-28">
          <div data-reveal className="reveal mx-auto max-w-3xl">
            <h2 className="details-title">Tudnivalók</h2>
            <p className="mt-10 font-serif text-2xl italic leading-relaxed md:text-[1.7rem]">
              Etyeken több szálláshely közül is választhattok. A szobák korlátozott számban érhetők el,
              ezért érdemes időben foglalni. A visszajelzésnél kérjük, jelezzétek, ha segítséget kértek
              a megfelelő szállás megtalálásában.
            </p>
            <p className="mt-8 font-serif text-2xl italic leading-relaxed md:text-[1.7rem]">
              A templomtól a malomhoz, majd az este folyamán az etyeki szállásokhoz és Budapestre is
              biztosítunk transzfert. Az indulási időpontokat később tesszük közzé.
            </p>
          </div>
        </section>

        <section className="bg-[#eef1e2] px-4 py-16 text-[#292c26] md:px-8 md:py-20">
          <div className="mx-auto max-w-[1500px]">
            <div data-reveal className="reveal mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-[9px] uppercase tracking-[0.35em] text-[#5f6650]">Eljegyzés</p>
                <h2 className="mt-4 font-serif text-5xl font-light italic md:text-7xl">A mi pillanataink</h2>
              </div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#5f6650]">
                Fotók: @blankartphotography
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {gallery.map(({ src, alt }, index) => (
                <figure
                  key={src}
                  data-reveal
                  className={`image-reveal reveal relative overflow-hidden ${index % 2 ? "aspect-[3/4] md:mt-10" : "aspect-[3/4]"}`}
                >
                  <Image src={src} alt={alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="gyik" className="bg-[#f8f1da] px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-12">
            <header data-reveal className="reveal md:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#676c56]">Hasznos tudnivalók</p>
              <h2 className="mt-10 font-serif text-7xl font-light leading-[0.82] tracking-[-0.045em] md:text-9xl">
                Gyakori<br /><span className="italic">kérdések</span>
              </h2>
            </header>
            <div data-reveal className="reveal md:col-span-6 md:col-start-7">
              {[
                ["Mikor és hol lesz az esküvő?", "2027. július 10-én, szombaton találkozunk. A szertartás 15:00-kor kezdődik az etyeki templomban, a vacsora és a buli pedig a Kálna Mátyás Malomban lesz."],
                ["Hogyan jutunk el a templomtól a helyszínre?", "A templomi szertartás után transzfert biztosítunk a Kálna Mátyás Malomhoz, így az autót nyugodtan a szállásnál hagyhatjátok."],
                ["Lesz transzfer az este végén?", "Igen. Az este folyamán több időpontban indul transzfer az etyeki szállásokhoz, valamint Budapestre is. A pontos menetrendet később osztjuk meg."],
                ["Hol érdemes szállást foglalni?", "Etyeken érdemes szállást keresni. Mivel júliusban gyorsan betelnek a környék szálláshelyei, javasoljuk, hogy időben foglaljatok."],
                ["Mit vegyünk fel?", "Kerti elegáns öltözetet javaslunk természetes, nyári árnyalatokban. Az esti hűvösebb időre érdemes egy könnyű réteggel is készülni."],
                ["Jelezzük az ételérzékenységet?", "Igen, kérjük, az RSVP űrlapon írjátok meg az ételallergiát, intoleranciát vagy különleges étrendet, hogy mindenkiről gondoskodhassunk."],
              ].map(([question, answer]) => (
                <details key={question} className="faq-item border-t border-[#73785f]/40 py-7 last:border-b">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-2xl italic">
                    {question}
                    <span className="faq-plus shrink-0 font-sans text-2xl font-light not-italic">+</span>
                  </summary>
                  <p className="max-w-xl pt-5 pr-10 text-sm leading-7 text-[#5d6152]">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="rsvp" className="relative isolate overflow-hidden px-6 py-20 text-[#f4f0e7] md:px-12 md:py-28 lg:px-20">
          <Image src="/images/backdrop-champagne.jpg" alt="" fill sizes="100vw" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-[#4f5a33]/75" />
          <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12">
            <header data-reveal className="reveal lg:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#d0d3c3]">Visszajelzés</p>
              <Envelope />
              <p className="mt-10 max-w-md text-sm leading-7 text-[#d9dbd1]">
                Kérjük, töltsétek ki az űrlapot, hogy tudjuk, számíthatunk-e rátok, illetve kértek-e szállást vagy transzfert.
              </p>
            </header>
            <div className="lg:col-span-6 lg:col-start-7">
              <RsvpForm />
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-8 bg-[#4f5a33] px-8 py-10 text-[9px] uppercase tracking-[0.3em] text-[#eef1e2] md:flex-row">
          <span>Lilla &amp; Marton</span>
          <span className="font-serif text-xl normal-case tracking-normal italic">Szeretettel, Etyekről</span>
          <span>10 · 07 · 2027</span>
        </footer>
      </main>
    </div>
  );
}
