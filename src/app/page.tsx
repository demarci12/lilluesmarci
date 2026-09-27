import Image from "next/image";
import OliveBranch from "@/components/wedding/OliveBranch";
import Quiz from "@/components/wedding/Quiz";
import Reveal from "@/components/wedding/Reveal";
import RsvpForm from "@/components/wedding/RsvpForm";

const timeline = [
  { time: "01", text: "Templomi szertartás", detail: "A napot az etyeki templomban kezdjük. A pontos kezdési időpontot a meghívóval együtt küldjük." },
  { time: "02", text: "Transzfer a malomhoz", detail: "A szertartás után közös transzfert biztosítunk a Kálna Mátyás Malomhoz." },
  { time: "03", text: "Vacsora", detail: "Megérkezés után koccintunk, majd közösen elfogyasztjuk az ünnepi vacsorát." },
  { time: "04", text: "Buli", detail: "A vacsora után felkapcsoljuk a fényfüzéreket, és együtt ünneplünk hajnalig." },
  { time: "05", text: "Transzfer haza", detail: "Az este folyamán több indulással biztosítunk transzfert az etyeki szállásokhoz és Budapestre is." },
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

export default function Home() {
  return (
    <div className="ol">
      <Reveal />
      <main className="overflow-hidden bg-[#f3efe5] text-[#292c26]">
        <section className="wed-hero relative min-h-[100svh] px-6 md:px-12 lg:px-20">
          <nav className="intro intro-1 relative z-20 flex items-center justify-between border-b border-[#73785f]/30 py-6 text-[10px] tracking-[0.28em] md:py-8">
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
              className="-my-4 -mr-2 py-4 pl-4 pr-2 underline decoration-[#73785f]/60 underline-offset-4 md:hidden"
            >
              RSVP
            </a>
          </nav>

          <div className="relative mx-auto min-h-[calc(100svh-87px)] max-w-[1500px]">
            <p className="intro intro-2 absolute left-0 top-[10%] text-[10px] uppercase leading-5 tracking-[0.34em] text-[#666b55] md:left-[6%]">
              Családjainkkal együtt
              <br />
              szeretettel meghívunk
            </p>

            <div className="absolute left-1/2 top-[46%] z-10 w-full -translate-x-1/2 -translate-y-1/2">
              <p className="intro intro-2 mb-5 text-center text-xs tracking-[0.45em] text-[#72765f]">
                L &amp; M
              </p>
              <h1 className="hero-title intro intro-3 mx-auto max-w-[1200px] text-center font-serif text-[17vw] font-light uppercase leading-[0.71] tracking-[-0.065em] md:text-[11vw]">
                <span className="block pr-[10vw] italic">Lilu</span>
                <span className="block pl-[8vw]">&amp; Marci</span>
              </h1>
            </div>

            <OliveBranch className="olive-drawing absolute -right-16 top-[12%] w-[250px] rotate-[-20deg] text-[#737b58] md:right-[3%] md:w-[370px]" />
            <OliveBranch className="olive-drawing olive-drawing-delayed absolute -left-24 bottom-[4%] w-[260px] rotate-[148deg] text-[#737b58] opacity-60 md:left-[9%] md:w-[330px]" />

            <div className="intro intro-4 absolute bottom-[20%] right-0 text-right md:bottom-[9%] md:right-[8%]">
              <p className="font-serif text-3xl italic md:text-5xl">2027. július 10.</p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-[#686d58]">Etyek · Kálna Mátyás Malom</p>
            </div>

            <a
              href="#program"
              className="intro intro-5 absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3 text-[8px] tracking-[0.32em]"
            >
              GÖRGESS TOVÁBB
              <span className="scroll-line h-10 w-px bg-[#686d58]" />
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

        <section id="program" className="relative bg-[#e4dfd1] px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <header data-reveal className="reveal grid gap-8 border-b border-[#73785f]/40 pb-16 md:grid-cols-12">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#676c56] md:col-span-3">I — A nagy nap</p>
              <h2 className="font-serif text-[18vw] font-light uppercase leading-[0.7] tracking-[-0.055em] md:col-span-7 md:text-[10vw]">
                A nap <span className="italic">menete</span>
              </h2>
              <p className="max-w-xs self-end text-sm leading-7 text-[#56594c] md:col-span-2">
                Egy nap, amit a számunkra legfontosabb emberekkel szeretnénk megélni.
              </p>
            </header>

            <div className="relative mt-16 md:mt-24">
              <div className="timeline-line absolute bottom-0 left-[27px] top-0 w-px bg-[#8c9079]/40 md:left-1/2" />
              {timeline.map((item, index) => (
                <article
                  key={item.time}
                  data-reveal
                  className={`reveal timeline-row relative mb-14 grid grid-cols-[56px_1fr] gap-5 md:mb-20 md:grid-cols-2 md:gap-16 ${
                    index % 2 ? "md:text-left" : "md:text-right"
                  }`}
                >
                  <span className="timeline-dot absolute left-[23px] top-5 h-[9px] w-[9px] rounded-full border border-[#596044] bg-[#e4dfd1] md:left-1/2 md:-translate-x-1/2" />
                  <div className={`${index % 2 ? "md:col-start-2" : "md:col-start-1"} col-start-2`}>
                    <p className="font-serif text-6xl font-light leading-none text-[#666c50] md:text-8xl">{item.time}</p>
                    <h3 className="mt-5 font-serif text-3xl italic md:text-4xl">{item.text}</h3>
                    <p className={`mt-4 max-w-xs text-sm leading-7 text-[#606255] ${index % 2 ? "" : "md:ml-auto"}`}>
                      {item.detail}
                    </p>
                  </div>
                </article>
              ))}

              <figure data-reveal className="reveal image-reveal relative z-10 ml-auto mt-[-4rem] w-[82%] md:mt-[-11rem] md:w-[43%]">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#c8c2b3]">
                  <div className="parallax-image absolute inset-x-0 top-0 h-[125%]">
                    <Image
                      src="/images/about.jpg"
                      alt="Lilla és Marton meghitt pillanata"
                      fill
                      sizes="(max-width: 768px) 82vw, 43vw"
                      className="object-cover grayscale-[18%] sepia-[12%]"
                    />
                  </div>
                </div>
                <figcaption className="mt-4 flex justify-between text-[9px] uppercase tracking-[0.25em] text-[#6e715e]">
                  <span>Egy nap, amit sosem felejtünk el</span><span>01 / 03</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <OliveBranch className="botanical-float absolute -right-28 top-[38%] w-[340px] rotate-[-72deg] text-[#83886b] opacity-30 md:w-[500px]" />
        </section>

        <section className="bg-[#34392d] px-6 py-20 text-[#f2eee4] md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12">
            <div data-reveal className="reveal lg:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#b8bda4]">II — Játék</p>
              <h2 className="mt-10 font-serif text-7xl font-light leading-[0.82] tracking-[-0.045em] md:text-9xl">
                Ismerj meg<br /><span className="italic text-[#c9cdb4]">minket!</span>
              </h2>
              <p className="mt-10 max-w-sm text-sm leading-7 text-[#c5c7bb]">
                Mennyire ismertek bennünket? Tippeljetek – a megfejtéseket az esküvőn eláruljuk.
              </p>
              <figure className="image-reveal reveal relative mt-14 aspect-[4/5] max-w-sm overflow-hidden" data-reveal>
                <Image
                  src="/images/engagement-carry.jpg"
                  alt="Marton a vállán viszi Lillát, mindketten nevetnek"
                  fill
                  sizes="(max-width: 1024px) 90vw, 384px"
                  className="object-cover"
                />
              </figure>
            </div>
            <Quiz />
          </div>
        </section>

        <section id="details" className="relative bg-[#f3efe5] px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <div data-reveal className="reveal grid gap-10 md:grid-cols-12">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#676c56] md:col-span-3">III — Mentsd el a dátumot</p>
              <h2 className="font-serif text-6xl font-light leading-[0.85] tracking-[-0.04em] md:col-span-9 md:text-9xl">
                Egy nyári nap<br /><span className="italic">Etyeken.</span>
              </h2>
            </div>

            <div className="mt-16 grid border-y border-[#73785f]/40 md:grid-cols-3">
              {[
                ["Mikor", "Szombat", "2027. július 10."],
                ["Szertartás", "Etyeki templom", "A pontos kezdési időpont hamarosan"],
                ["Vacsora és buli", "Kálna Mátyás Malom", "Transzferrel a templomtól"],
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

        <section className="bg-[#353a2f] px-6 py-20 text-[#f2eee4] md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12">
            <div data-reveal className="reveal lg:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#b8bda4]">IV — Mit vegyek fel?</p>
              <h2 className="mt-10 font-serif text-7xl font-light leading-[0.82] tracking-[-0.045em] md:text-9xl">
                Dress<br /><span className="italic text-[#c9cdb4]">code</span>
              </h2>
              <p className="mt-10 max-w-md text-sm leading-7 text-[#c8cabf]">
                Kerti elegáns öltözetet ajánlunk. Gondoljatok könnyű anyagokra, természetes
                textúrákra és a nyári táj visszafogott árnyalataira.
              </p>
              <div className="mt-10 flex gap-4" aria-label="Ajánlott színpaletta">
                {["#e8dfce", "#c6ad87", "#9a9271", "#697052", "#6b5548"].map((color) => (
                  <span key={color} className="h-12 w-12 rounded-full border border-white/20" style={{ backgroundColor: color }} />
                ))}
              </div>
              <div className="mt-12 grid gap-8 border-t border-[#aeb39a]/30 pt-8 sm:grid-cols-2">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#b8bda4]">Ajánljuk</p>
                  <p className="mt-3 font-serif text-2xl italic">Olíva, homok, terrakotta</p>
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#b8bda4]">Kérjük, kerüld</p>
                  <p className="mt-3 font-serif text-2xl italic">Fehér és neon árnyalatok</p>
                </div>
              </div>
            </div>
            <figure data-reveal className="image-reveal reveal relative aspect-[4/5] overflow-hidden lg:col-span-6 lg:col-start-7">
              <Image
                src="/images/engagement-grass.jpg"
                alt="Lilla és Marton a fűben, nyári földszínekben"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </figure>
          </div>
        </section>

        <section id="megkozelites" className="bg-[#f3efe5] px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <header data-reveal className="reveal grid gap-10 md:grid-cols-12">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#676c56] md:col-span-3">V — Megközelítés</p>
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

            <div data-reveal className="reveal mt-14 flex flex-col justify-between gap-8 bg-[#d8d1c1] p-8 md:flex-row md:items-center md:p-12">
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

        <section id="szallas" className="bg-[#d8d1c1] px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto grid max-w-[1400px] items-start gap-16 md:grid-cols-12">
            <div data-reveal className="reveal md:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#676c56]">VI — Pihenés</p>
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

        <section className="bg-[#f3efe5] px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto max-w-[1400px]">
            <header data-reveal className="reveal mx-auto max-w-4xl text-center">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#676c56]">VII — Akik mellettünk állnak</p>
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
                  <img src={photos.bridesmaids} alt="A koszorúslányok fotójának helye" className="h-full w-full object-cover grayscale-[15%]" />
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
                  <img src={photos.groomsmen} alt="A vőlegény kísérőinek fotóhelye" className="h-full w-full object-cover grayscale-[15%]" />
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

        <section className="bg-[#2f342a] px-4 py-16 text-[#f2eee4] md:px-8 md:py-20">
          <div className="mx-auto max-w-[1500px]">
            <div data-reveal className="reveal mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-[9px] uppercase tracking-[0.35em] text-[#b8bda4]">Eljegyzés</p>
                <h2 className="mt-4 font-serif text-5xl font-light italic md:text-7xl">A mi pillanataink</h2>
              </div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#b8bda4]">
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

        <section id="gyik" className="bg-[#e4dfd1] px-6 py-20 md:px-12 md:py-28 lg:px-20">
          <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-12">
            <header data-reveal className="reveal md:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#676c56]">VIII — Hasznos tudnivalók</p>
              <h2 className="mt-10 font-serif text-7xl font-light leading-[0.82] tracking-[-0.045em] md:text-9xl">
                Gyakori<br /><span className="italic">kérdések</span>
              </h2>
            </header>
            <div data-reveal className="reveal md:col-span-6 md:col-start-7">
              {[
                ["Mikor és hol lesz az esküvő?", "2027. július 10-én, szombaton találkozunk. A szertartás az etyeki templomban, a vacsora és a buli pedig a Kálna Mátyás Malomban lesz."],
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
          <Image src="/images/venue.jpeg" alt="" fill sizes="100vw" className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-[#20251c]/80" />
          <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-12">
            <header data-reveal className="reveal lg:col-span-5">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#d0d3c3]">IX — Visszajelzés</p>
              <h2 className="mt-8 font-serif text-7xl font-light leading-[0.85] italic md:text-9xl">Ott leszel?</h2>
              <p className="mt-8 max-w-md text-sm leading-7 text-[#d9dbd1]">
                Kérjük, töltsétek ki az űrlapot, hogy tudjuk, számíthatunk-e rátok, illetve kértek-e szállást vagy transzfert.
              </p>
            </header>
            <div className="lg:col-span-6 lg:col-start-7">
              <RsvpForm />
            </div>
          </div>
        </section>

        <footer className="flex flex-col items-center justify-between gap-8 bg-[#272c23] px-8 py-10 text-[9px] uppercase tracking-[0.3em] text-[#bfc2b5] md:flex-row">
          <span>Lilla &amp; Marton</span>
          <span className="font-serif text-xl normal-case tracking-normal italic">Szeretettel, Etyekről</span>
          <span>10 · 07 · 2027</span>
        </footer>
      </main>
    </div>
  );
}
