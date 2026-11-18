import Image from "next/image";
import Envelope from "@/components/wedding/Envelope";
import Reveal from "@/components/wedding/Reveal";
import RsvpForm from "@/components/wedding/RsvpForm";

// Main guest-facing points only (the couple's own prep, buffers and photo slots stay off).
const timeline = [
  { time: "15:00", text: "Templomi szertartás", detail: "Az etyeki templomban. Kérjük, 14:50-re érkezzetek." },
  { time: "16:10", text: "Transzfer a malomhoz", detail: "Közös transzfer a templomtól a Kálna Mátyás Malomhoz." },
  { time: "16:40", text: "Vendégváró", detail: "Megérkezés után koccintunk." },
  { time: "19:30", text: "Vacsora", detail: "Közösen elfogyasztjuk az ünnepi vacsorát." },
  { time: "22:15", text: "Első tánc", detail: "Utána felkapcsoljuk a fényfüzéreket." },
  { time: "22:30", text: "Buli", detail: "Együtt ünneplünk hajnalig." },
  { time: "0:00", text: "Torta", detail: "Éjfélkor jön a torta." },
];

// Wedding-party slots are still Figma-export placeholders until real shots exist.
const photos = {
  bridesmaids:
    "https://images.unsplash.com/photo-1598167563284-f00d0055eaa6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
  groomsmen:
    "https://images.unsplash.com/photo-1707190980959-c1821df3fa7e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=1200",
};

const gallery = [
  { src: "/images/engagement-ring.jpg", alt: "Lilla a gyűrűjét mutatja" },
  { src: "/images/engagement-lift.jpg", alt: "Marton felemeli Lillát" },
  { src: "/images/engagement-chapel.jpg", alt: "Lilla és Marton a kápolna mellett" },
  { src: "/images/engagement-carry.jpg", alt: "Marton a vállán viszi Lillát" },
];

// Photo ribbon under the hero: colour and black-and-white shots alternate.
const ribbon = [
  { src: "/images/engagement-lift.jpg", alt: "Marton felemeli Lillát a naplementében", mono: false },
  { src: "/images/engagement-ring.jpg", alt: "Lilla a gyűrűjét mutatja", mono: false },
  { src: "/images/engagement-grass.jpg", alt: "Lilla és Marton a fűben", mono: false },
  { src: "/images/engagement-carry.jpg", alt: "Marton a vállán viszi Lillát", mono: false },
  { src: "/images/engagement-chapel.jpg", alt: "Lilla és Marton a kápolna mellett", mono: false },
  { src: "/images/about.jpg", alt: "Lilla és Marton meghitt pillanata", mono: false },
];

export default function Home() {
  return (
    <div className="ol">
      <Reveal />
      <main className="overflow-hidden bg-[#fbf7ee] text-[#292c26]">
        <section className="wed-hero wed-hero-photo relative isolate min-h-[100svh] overflow-hidden px-6 text-[#fbf8f1] md:px-12 lg:px-20">
          <Image
            src="/images/venue.jpeg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="hero-photo absolute inset-0 -z-20 object-cover object-[50%_60%]"
          />
          <div className="hero-veil absolute inset-0 -z-10" />
          <nav className="intro intro-1 relative z-20 flex items-center justify-between border-b border-white/30 py-6 text-[10px] tracking-[0.28em] md:py-8">
            <a href="#" className="font-medium">LILLA &amp; MARTON</a>
            <div className="hidden items-center gap-10 md:flex">
              <a className="nav-link" href="#program">PROGRAM</a>
              <a className="nav-link" href="#megkozelites">ÚTVONAL</a>
              <a className="nav-link" href="#szallas">SZÁLLÁS</a>
              <a className="nav-link" href="#gyik">GYIK</a>
              <a className="nav-link" href="#rsvp">RSVP</a>
            </div>
            <span className="hidden md:inline">10 · 07 · 27</span>
            <a
              href="#rsvp"
              className="-my-4 -mr-2 py-4 pl-4 pr-2 underline decoration-white/60 underline-offset-4 md:hidden"
            >
              RSVP
            </a>
          </nav>

          <div className="relative mx-auto flex min-h-[calc(100svh-87px)] max-w-[1500px] flex-col items-center justify-center pb-24 text-center">
            <p className="intro intro-2 text-[11px] uppercase tracking-[0.42em] text-white/90">
              Családjainkkal együtt szeretettel meghívunk
            </p>
            <h1 className="hero-script intro intro-3 mt-6 md:mt-8">
              Lilu <span className="hero-amp">&amp;</span> Marci
            </h1>
            <p className="intro intro-4 mt-8 text-[11px] uppercase tracking-[0.42em] text-white/90 md:mt-10">
              2027. július 10. · Etyek · Kálna Mátyás Malom
            </p>

            <a
              href="#program"
              className="intro intro-5 absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[9px] tracking-[0.32em] text-white/90"
            >
              GÖRGESS TOVÁBB
              <span className="scroll-line h-10 w-px bg-white/70" />
            </a>
          </div>
        </section>

        <div className="flex border-y border-[#73785f]/35 bg-[#f3efe5] md:px-6">
          {[
            ["Program", "#program"],
            ["Útvonal", "#megkozelites"],
            ["Szállás", "#szallas"],
            ["GYIK", "#gyik"],
            ["RSVP", "#rsvp"],
          ].map(([label, href]) => (
            <a key={href} href={href} className="min-w-0 flex-1 border-r border-[#73785f]/35 px-1 py-5 text-center text-[9px] uppercase tracking-[0.14em] last:border-r-0 md:min-w-max md:px-7 md:tracking-[0.28em]">
              {label}
            </a>
          ))}
        </div>

        <section className="photo-marquee relative isolate overflow-hidden bg-[#fbf7ee]" aria-label="Eljegyzési fotók">
          <div className="marquee-track">
            {[...ribbon, ...ribbon].map((p, i) => (
              <figure key={i} className={`marquee-item ${p.mono ? "is-mono" : ""}`} aria-hidden={i >= ribbon.length}>
                <Image src={p.src} alt={i < ribbon.length ? p.alt : ""} fill sizes="(max-width: 768px) 70vw, 30vw" className="object-cover" />
              </figure>
            ))}
          </div>
          <p className="marquee-monogram pointer-events-none" aria-hidden="true">
            L<span>&amp;</span>M
          </p>
        </section>

        <section id="program" className="relative bg-[#f8f1da] px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <header data-reveal className="reveal text-center">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#676c56]">A nagy nap</p>
              <h2 className="mt-4 font-serif">
                A nap <span className="italic">menete</span>
              </h2>
            </header>

            {/* Compact: time + what happens, one row on desktop, two columns on phones. */}
            <ol data-reveal className="reveal mt-12 grid grid-cols-2 gap-px overflow-hidden border border-[#73785f]/25 bg-[#73785f]/25 sm:grid-cols-4 lg:grid-cols-7">
              {timeline.map((item) => (
                <li key={item.time} className="bg-[#f8f1da] px-4 py-7 text-center last:col-span-2 lg:last:col-span-1">
                  <p className="font-serif text-4xl font-light leading-none text-[#6f7a3a] md:text-5xl">{item.time}</p>
                  <h3 className="mt-3 font-serif text-xl leading-tight md:text-2xl">{item.text}</h3>
                </li>
              ))}
            </ol>
            <p data-reveal className="reveal mx-auto mt-8 max-w-xl text-center text-sm text-[#56594c]">
              Kérjük, 14:50-re érkezzetek a templomhoz. Transzfer 16:10-kor indul a malomhoz.
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
              <figure data-reveal className="image-reveal reveal relative aspect-[4/5] overflow-hidden md:col-span-5">
                <Image
                  src="/images/engagement-lift.jpg"
                  alt="Marton felemeli Lillát a naplementében"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </figure>
              <figure data-reveal className="image-reveal reveal relative aspect-[5/4] overflow-hidden md:col-span-6 md:col-start-7 md:mb-16">
                <Image
                  src="/images/engagement-chapel.jpg"
                  alt="Lilla és Marton a fűben ülnek, mögöttük egy kápolna"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover object-[50%_45%]"
                />
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
              </article>
              <article data-reveal className="reveal py-12 md:px-10">
                <span className="font-serif text-5xl font-light text-[#7b8066]">03</span>
                <p className="mt-10 text-[9px] uppercase tracking-[0.3em] text-[#6d725b]">Vacsora és buli</p>
                <h3 className="mt-4 font-serif text-3xl italic">Kálna Mátyás Malom</h3>
                <p className="mt-5 text-sm leading-7 text-[#5d6152]">
                  A szertartás után közös transzfer visz benneteket a malomhoz. Saját autóval is
                  érkezhettek; a helyszínen parkolási lehetőség lesz.
                </p>
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

        <section id="szallas" className="bg-[#f6eedb] px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto grid max-w-[1400px] items-start gap-16 md:grid-cols-12">
            <div data-reveal className="reveal md:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#676c56]">Pihenés</p>
              <h2 className="mt-10 font-serif text-7xl font-light leading-[0.82] tracking-[-0.045em] md:text-9xl">
                Szállás<br /><span className="italic">a közelben.</span>
              </h2>
            </div>
            <div data-reveal className="reveal md:col-span-6 md:col-start-7">
              <p className="max-w-xl font-serif text-3xl leading-tight italic md:text-4xl">
                Szeretnénk, ha az este végén már csak a szép emlékekkel kellene hazatérnetek.
              </p>
              <p className="mt-10 max-w-lg text-sm leading-7 text-[#55594b]">
                Etyeken több szálláshely közül is választhattok. A szobák korlátozott számban
                érhetők el, ezért érdemes időben foglalni. A visszajelzésnél kérjük, jelezzétek,
                ha segítséget kértek a megfelelő szállás megtalálásában.
              </p>
              <div className="mt-12 border-t border-[#73785f]/40 pt-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#6d725b]">Bejelentkezés</p>
                    <p className="mt-3 font-serif text-2xl italic">Etyeken</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-[#6d725b]">Transzfer</p>
                    <p className="mt-3 font-serif text-2xl italic">Oda és vissza</p>
                  </div>
                </div>
                <p className="mt-8 text-xs leading-6 text-[#616556]">
                  A templomtól a malomhoz, majd az este folyamán az etyeki szállásokhoz és
                  Budapestre is biztosítunk transzfert. Az indulási időpontokat később tesszük közzé.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fbf7ee] px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <header data-reveal className="reveal mx-auto max-w-4xl text-center">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#676c56]">Akik mellettünk állnak</p>
              <h2 className="mt-10 font-serif text-7xl font-light leading-[0.85] tracking-[-0.045em] md:text-9xl">
                A mi <span className="italic">csapatunk</span>
              </h2>
              <p className="mx-auto mt-10 max-w-lg text-sm leading-7 text-[#5e6253]">
                Ők azok, akik a kezdetektől ismerik a történetünket, és ezen a napon is közvetlenül mellettünk lesznek.
              </p>
            </header>

            <div className="mt-14 grid border-y border-[#73785f]/40 md:grid-cols-2">
              <article data-reveal className="reveal px-4 py-14 text-center md:border-r md:px-12 md:py-20">
                <figure className="relative mx-auto mb-10 aspect-[4/3] max-w-lg overflow-hidden">
                  <img src={photos.bridesmaids} alt="A koszorúslányok fotójának helye" className="h-full w-full object-cover" />
                  <figcaption className="photo-placeholder">Placeholder · koszorúslányok fotója</figcaption>
                </figure>
                <span className="font-serif text-7xl font-light text-[#858a70]">L</span>
                <p className="mt-8 text-[9px] uppercase tracking-[0.34em] text-[#70755e]">Lilla oldalán</p>
                <h3 className="mt-4 font-serif text-5xl italic">Koszorúslányok</h3>
                <p className="mx-auto mt-6 max-w-sm text-sm leading-7 text-[#626557]">
                  A barátnők, akik minden örömben, könnyben és készülődésben vele vannak.
                </p>
              </article>
              <article data-reveal className="reveal px-4 py-14 text-center md:px-12 md:py-20">
                <figure className="relative mx-auto mb-10 aspect-[4/3] max-w-lg overflow-hidden">
                  <img src={photos.groomsmen} alt="A vőlegény kísérőinek fotóhelye" className="h-full w-full object-cover" />
                  <figcaption className="photo-placeholder">Placeholder · best manek fotója</figcaption>
                </figure>
                <span className="font-serif text-7xl font-light text-[#858a70]">M</span>
                <p className="mt-8 text-[9px] uppercase tracking-[0.34em] text-[#70755e]">Marton oldalán</p>
                <h3 className="mt-4 font-serif text-5xl italic">Vőlegény kísérői</h3>
                <p className="mx-auto mt-6 max-w-sm text-sm leading-7 text-[#626557]">
                  A barátok, akik mindig ott állnak mellette – most pedig az oltárhoz vezető úton is.
                </p>
              </article>
            </div>
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
