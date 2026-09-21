import Image from "next/image";
import Reveal from "@/components/wedding/Reveal";
import Countdown from "@/components/wedding/Countdown";
import Faq from "@/components/wedding/Faq";
import RsvpForm from "@/components/wedding/RsvpForm";
import JourneyMap from "@/components/wedding/JourneyMap";
import SiteJourney from "@/components/wedding/SiteJourney";
import {
  HeroTableScene,
  ChurchSketch,
  ChampagneSketch,
  DinnerSketch,
  DancingSketch,
  CakeSketch,
  CarSketch,
  RibbonSketch,
  EnvelopesSketch,
  SparklesSketch,
  RingsSketch,
  BrideSketch,
  DressSketch,
  SuitSketch,
  VillaSketch,
  WreathSketch,
} from "@/components/wedding/Sketches";

// Order here must match the order of sections on the page (SiteJourney relies on it).
const NAV = [
  { href: "#tortenet", label: "Történetünk" },
  { href: "#helyszin", label: "Helyszín" },
  { href: "#idorend", label: "Időrend" },
  { href: "#rsvp", label: "RSVP" },
  { href: "#dresscode", label: "Dress code" },
  { href: "#menu", label: "Menü" },
  { href: "#szallas", label: "Szállás" },
  { href: "#gyik", label: "GYIK" },
];

const TIMELINE = [
  { time: "TBA", title: "Szertartás", Icon: ChurchSketch },
  { time: "TBA", title: "Fogadás & koktél", Icon: ChampagneSketch },
  { time: "TBA", title: "Vacsora", Icon: DinnerSketch },
  { time: "TBA", title: "Bál, mulatság", Icon: DancingSketch },
  { time: "TBA", title: "Tortavágás", Icon: CakeSketch },
  { time: "TBA", title: "Búcsúzás", Icon: CarSketch },
];

const MENU_COURSES = [
  { course: "Előétel", note: "Részletek hamarosan" },
  { course: "Főétel", note: "Részletek hamarosan" },
  { course: "Desszert", note: "Részletek hamarosan" },
  { course: "Italok", note: "Részletek hamarosan" },
];

const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=K%C3%A1lna+M%C3%A1ty%C3%A1s+Malom";

function SectionTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`font-script text-[56px] sm:text-[68px] leading-none ${className}`}>{children}</h2>
  );
}

// Photo with a white border, soft shadow and a thin corner accent line behind it.
function PhotoFrame({
  src,
  alt,
  width,
  height,
  imgClassName,
  accent = "#a8834f",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  imgClassName: string;
  accent?: string;
}) {
  return (
    <div className="relative group isolate">
      <div className="overflow-hidden rounded shadow-md border-4 border-white">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`w-full block object-cover transition duration-500 group-hover:scale-[1.02] ${imgClassName}`}
        />
      </div>
      <div
        className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 -z-10 pointer-events-none"
        style={{ borderColor: `${accent}80` }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <div className="font-sans text-[#52514f] bg-[#fcf8ef]">
      <SiteJourney />

      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#fcf8ef]/95 backdrop-blur-sm border-b border-[#e5e0d0]">
        <nav
          aria-label="Főmenü"
          className="max-w-6xl mx-auto px-6 py-2 sm:py-3 flex flex-col sm:flex-row items-center sm:justify-between gap-1 sm:gap-8"
        >
          <a href="#hero" className="font-script text-[32px] leading-none text-[#3d3d2f] shrink-0">
            Lilu &amp; Marci
          </a>
          <ul className="flex items-center gap-6 w-full sm:w-auto overflow-x-auto whitespace-nowrap py-1 text-[11px] font-semibold tracking-[0.18em] uppercase">
            {NAV.map((item) => (
              <li key={item.href} className="shrink-0">
                <a href={item.href} className="text-[#52514f] no-underline hover:text-[#a8834f] transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section id="hero" className="max-w-5xl mx-auto px-6 pt-14 pb-16 text-center sm:text-left">
          <div className="animate-fade-up">
            <p className="text-[#a8834f] text-xs tracking-[0.18em] uppercase font-semibold mb-2">
              Szeretettel várunk az esküvőnkön
            </p>
            <h1 className="font-script text-[62px] min-[420px]:text-[76px] sm:text-[108px] md:text-[132px] text-[#3d3d2f] leading-none mb-4">
              Lilu &amp; Marci
            </h1>
            <div className="relative w-full my-4">
              <HeroTableScene className="w-full h-auto max-h-[380px] text-[#3d3d2f] select-none" />
              <div className="mt-3 text-center sm:mt-0 sm:text-right sm:absolute sm:bottom-2 sm:right-8 sm:bg-[#fcf8ef]/90 sm:p-3 rounded">
                <p className="text-[#3d3d2f] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
                  2027. július 10.
                </p>
                <p className="text-[#a8834f] text-[11px] sm:text-xs tracking-[0.12em] uppercase mt-0.5">
                  Kálna, Mátyás Malom
                </p>
              </div>
            </div>
            <Countdown className="mt-4 text-[#a8834f] text-sm tracking-[0.18em] uppercase" />
          </div>
        </section>

        {/* Történetünk */}
        <section id="tortenet" className="py-16 px-6 border-t border-[#a8834f]/15">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
                <PhotoFrame
                  src="/images/intro.jpeg"
                  alt="Lilu és Marci"
                  width={640}
                  height={720}
                  imgClassName="h-[420px] md:h-[480px] object-top"
                />
                <div className="text-left">
                  <SectionTitle className="text-[#3d3d2f] mb-6">Történetünk</SectionTitle>
                  <div className="space-y-4 wedding-body">
                    <p>
                      2027. július 10-én tartjuk esküvőnket a Kálna Mátyás Malomban. Ezen az oldalon megtalálod a
                      helyszínt, az időrendet, a menüt és minden fontos részletet — a pontos adatokat folyamatosan
                      frissítjük.
                    </p>
                    <p className="font-semibold text-[#a8834f]">
                      A történetünket hamarosan részletesebben is megosztjuk. Addig lépkedj végig az utunkon az
                      alábbi térképen.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal className="mt-16">
              <JourneyMap />
            </Reveal>
          </div>
        </section>

        {/* Helyszín */}
        <section id="helyszin" className="bg-[#eff0e4] py-20 px-6">
          <Reveal className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div className="order-2 md:order-1 text-left">
                <div className="flex items-end gap-4 mb-3 text-[#3d3d2f]">
                  <ChurchSketch className="h-[64px] w-auto" />
                  <VillaSketch className="h-[52px] w-auto" />
                </div>
                <SectionTitle className="text-[#3d3d2f] mb-6">Helyszín</SectionTitle>
                <div className="space-y-2 wedding-body">
                  <p className="font-semibold text-[#3d3d2f]">Kálna, Mátyás Malom</p>
                  <p>2027. július 10., szombat</p>
                  <p className="text-[#8a9668]">A pontos cím és megközelítés hamarosan érkezik.</p>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-7 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#a8834f] border-b border-[#a8834f]/50 pb-1 no-underline hover:text-[#7c8c5b] hover:border-[#7c8c5b] transition-colors"
                >
                  Megnyitás a térképen
                </a>
              </div>
              <div className="order-1 md:order-2">
                <PhotoFrame
                  src="/images/venue.jpeg"
                  alt="Kálna, Mátyás Malom"
                  width={800}
                  height={530}
                  imgClassName="h-[300px] md:h-[360px]"
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Időrend */}
        <section id="idorend" className="py-20 px-6">
          <Reveal className="max-w-5xl mx-auto text-center">
            <SectionTitle className="text-[#3d3d2f] mb-14">Időrend</SectionTitle>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-12">
              {TIMELINE.map((item, i) => (
                <div key={item.title} className="group flex flex-col items-center">
                  <div className="h-24 flex items-center justify-center mb-3">
                    <item.Icon className="w-[72px] h-[72px] text-[#3d3d2f] transition-transform group-hover:-translate-y-1" />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.12em] text-[#a8834f] mb-1">{item.time}</span>
                  <span className="px-2 text-[11px] font-medium tracking-[0.18em] uppercase text-[#52514f]">
                    {item.title}
                  </span>
                  {/* Each cell draws its own slice of the line so the dots stay centred under the icons. */}
                  <div className="relative w-full h-4 mt-6">
                    <span
                      className={`absolute top-1/2 h-px bg-[#c2a87a]/60 left-0 right-0 ${
                        i === 0 ? "lg:left-1/2" : ""
                      } ${i === TIMELINE.length - 1 ? "lg:right-1/2" : ""}`}
                    />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#a8834f] ring-4 ring-[#fcf8ef]" />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[13px] text-[#8a9668] mt-10">Pontos időpontokat hamarosan küldünk.</p>
          </Reveal>
        </section>

        {/* RSVP */}
        <section id="rsvp" className="relative overflow-hidden bg-[#7c8c5b] text-[#fcf8ef] py-20 px-6">
          <RibbonSketch className="absolute -top-2 -right-4 sm:-top-4 sm:right-12 w-28 sm:w-60 h-auto text-[#fcf8ef] opacity-80 sm:opacity-90 pointer-events-none select-none" />
          <Reveal className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="text-left">
                <SectionTitle className="text-[#fcf8ef] mb-6">Visszajelzés</SectionTitle>
                <div className="space-y-4 wedding-body-light">
                  <p>
                    Nagyon szeretnénk, ha velünk ünnepelnél ezen a különleges napon! Kérjük, az űrlap kitöltésével
                    jelezz vissza nekünk.
                  </p>
                  <p className="font-semibold">A visszajelzési határidőt hamarosan közzétesszük.</p>
                  <p>
                    Ha ott leszel, alig várjuk, hogy veled osszuk meg a szeretet, a nevetés és a tánc napját. Ha nem
                    tudsz eljönni, nagyon fogsz hiányozni, de gondolunk rád az esküvőnk napján.
                  </p>
                  <p>Köszönjük, hogy időt szánsz a válaszra!</p>
                </div>
                <EnvelopesSketch className="hidden md:block w-56 h-auto mt-10 text-[#fcf8ef] pointer-events-none select-none" />
              </div>
              <div className="bg-[#fcf8ef] text-[#52514f] rounded-lg shadow-xl p-6 sm:p-8">
                <RsvpForm />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Dress code */}
        <section id="dresscode" className="py-20 px-6">
          <Reveal className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
              <div className="order-2 md:order-1 text-left">
                <SectionTitle className="text-[#3d3d2f] mb-6">Dress code</SectionTitle>
                <div className="space-y-4 wedding-body">
                  <p>
                    Toszkán, rusztikus-elegáns hangulat — földszínek: <strong className="text-[#a8834f]">ivory, zsálya, oliva és karamell</strong>{" "}
                    árnyalatok.
                  </p>
                  <p className="text-[#8a9668]">A fehér színt hagyjuk a menyasszonynak.</p>
                </div>
                <div className="flex items-center gap-3 mt-7">
                  <div className="w-9 h-9 rounded-full bg-[#fcf8ef] border border-[#e5e0d0]" />
                  <div className="w-9 h-9 rounded-full bg-[#b8ca9a]" />
                  <div className="w-9 h-9 rounded-full bg-[#7c8c5b]" />
                  <div className="w-9 h-9 rounded-full bg-[#c2a87a]" />
                  <div className="w-9 h-9 rounded-full bg-[#a8834f]" />
                </div>
                <div className="flex items-end gap-6 mt-8 text-[#3d3d2f]">
                  <DressSketch className="h-[88px] w-auto" />
                  <SuitSketch className="h-[88px] w-auto" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <PhotoFrame
                  src="/images/dresscode.jpeg"
                  alt="Lilu és Marci"
                  width={640}
                  height={720}
                  imgClassName="h-[420px] md:h-[480px] object-top"
                />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Menü */}
        <section id="menu" className="bg-[#eff0e4] py-20 px-6">
          <Reveal className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-5 mb-4 text-[#3d3d2f]">
              <CakeSketch className="w-14 h-14" />
              <div className="w-[84px] h-[84px] rounded-full bg-[#f6eaa9] flex items-center justify-center font-script text-[32px] text-[#3d3d2f] shrink-0">
                L&amp;M
              </div>
              <ChampagneSketch className="w-14 h-14" />
            </div>
            <SectionTitle className="text-[#3d3d2f] mb-10">Menü</SectionTitle>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[30px]">
              {MENU_COURSES.map((c) => (
                <div key={c.course} className="border border-[#e5e0d0] rounded-md px-4 py-6 bg-[#fcf8ef]">
                  <div className="text-[13px] tracking-[0.16em] uppercase text-[#a8834f]">{c.course}</div>
                  <div className="text-sm text-[#8a9668] mt-2">{c.note}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Ajándék */}
        <section id="ajandek" className="py-20 px-6">
          <Reveal className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center mb-6">
              <SectionTitle className="text-[#3d3d2f]">Ajándék</SectionTitle>
              <SparklesSketch className="w-10 h-10 -mt-8 ml-2 text-[#a8834f]" />
            </div>
            <div className="max-w-2xl mx-auto wedding-body space-y-2 mb-10">
              <p>Számunkra a legnagyobb ajándék, hogy ezen a különleges napon velünk ünnepelsz.</p>
              <p>Ha mégis szeretnél valamivel kedveskedni, az ajándékozással kapcsolatos részleteket hamarosan megosztjuk.</p>
              <p className="font-semibold text-[#a8834f]">Köszönjük a szeretetedet — alig várjuk, hogy találkozzunk!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-items-center">
              <div className="hidden md:flex justify-center w-full text-[#3d3d2f]">
                <BrideSketch className="w-32 h-auto" />
              </div>
              <div className="w-full max-w-xs border border-[#c2a87a]/60 rounded-md py-4 px-6 text-[11px] font-semibold tracking-[0.2em] uppercase text-[#a8834f]">
                Részletek hamarosan
              </div>
              <div className="hidden md:flex justify-center w-full text-[#3d3d2f]">
                <RingsSketch className="w-28 h-auto" />
              </div>
            </div>
          </Reveal>
        </section>

        {/* Szállás */}
        <section id="szallas" className="bg-[#7c8c5b] text-[#fcf8ef] py-20 px-6">
          <Reveal className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
              <PhotoFrame
                src="/images/hero.jpeg"
                alt="Lilu és Marci"
                width={640}
                height={720}
                imgClassName="h-[320px] md:h-[400px] object-[center_30%]"
                accent="#fcf8ef"
              />
              <div className="text-left">
                <SectionTitle className="text-[#fcf8ef] mb-6">Szállás</SectionTitle>
                <div className="space-y-4 wedding-body-light">
                  <p>
                    Szeretnénk, ha a pihenésed is kényelmes és zökkenőmentes lenne. Ajánlott szálláshelyeket a Kálna
                    környékén hamarosan megosztunk.
                  </p>
                  <p>Ha addig kérdésed van, írj nekünk az alábbi elérhetőségeken.</p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#fcf8ef] text-[#3d3d2f] hover:bg-white text-xs font-semibold tracking-[0.2em] uppercase py-3.5 px-6 rounded shadow transition duration-200 no-underline"
                  >
                    Útvonal a helyszínre
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* GYIK */}
        <section id="gyik" className="bg-[#eff0e4] py-20 px-6">
          <Reveal className="max-w-2xl mx-auto">
            <SectionTitle className="text-[#3d3d2f] text-center mb-10">Gyakori kérdések</SectionTitle>
            <Faq />
          </Reveal>
        </section>
      </main>

      {/* Footer */}
      <footer id="kapcsolat" className="bg-[#3d3d2f] text-[#fcf8ef] px-6 pt-16 pb-11 text-center">
        <div className="relative w-[104px] h-[104px] mx-auto mb-[18px] text-[#fcf8ef]">
          <WreathSketch className="absolute inset-0 w-full h-full opacity-90" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#f6eaa9] flex items-center justify-center font-script text-[26px] text-[#3d3d2f]">
              L&amp;M
            </div>
          </div>
        </div>
        <div className="font-script text-[40px] leading-none">Lilu &amp; Marci</div>
        <p className="text-[12px] tracking-[0.2em] uppercase text-[#d7d3c2] mt-4">
          2027. július 10. • Kálna, Mátyás Malom
        </p>
        <p className="text-[13px] text-[#d7d3c2] mt-2">Kérdés esetén elérhetőségeinket hamarosan közzétesszük.</p>
        <p className="text-[10px] tracking-[0.2em] uppercase text-[#a09c8a] mt-8">
          Szeretettel készült barátainknak és családunknak
        </p>
        <p className="text-[11px] text-[#a09c8a] mt-2">Fotók: @blankartphotography</p>
      </footer>
    </div>
  );
}
