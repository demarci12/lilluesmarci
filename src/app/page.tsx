import Image from "next/image";
import Reveal from "@/components/wedding/Reveal";
import Countdown from "@/components/wedding/Countdown";
import Faq from "@/components/wedding/Faq";
import RsvpForm from "@/components/wedding/RsvpForm";
import JourneyMap from "@/components/wedding/JourneyMap";
import SiteJourney from "@/components/wedding/SiteJourney";

const NAV_LEFT = [
  { href: "#tortenet", label: "Történetünk" },
  { href: "#helyszin", label: "Helyszín" },
  { href: "#idorend", label: "Időrend" },
  { href: "#menu", label: "Menü" },
];
const NAV_RIGHT = [
  { href: "#szallas", label: "Szállás" },
  { href: "#dresscode", label: "Dress code" },
  { href: "#gyik", label: "GYIK" },
  { href: "#rsvp", label: "RSVP" },
];

const TIMELINE = [
  { time: "TBA", title: "Szertartás", icon: "/sketches/church.png" },
  { time: "TBA", title: "Fogadás & koktél", icon: "/sketches/champagne.png" },
  { time: "TBA", title: "Vacsora", icon: "/sketches/place-setting.png" },
  { time: "TBA", title: "Bál, mulatság", icon: "/sketches/music-note.png" },
];

const MENU_COURSES = [
  { course: "Előétel", note: "Részletek hamarosan" },
  { course: "Főétel", note: "Részletek hamarosan" },
  { course: "Desszert", note: "Részletek hamarosan" },
  { course: "Italok", note: "Részletek hamarosan" },
];

function Divider({ dot = "#a8834f" }: { dot?: string }) {
  return (
    <div className="flex items-center justify-center gap-2 mx-auto my-[14px] mb-[30px]">
      <div className="w-7 h-px bg-[#b8ca9a]" />
      <div className="w-[6px] h-[6px] rotate-45" style={{ background: dot }} />
      <div className="w-7 h-px bg-[#b8ca9a]" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="font-sans text-[#52514f] bg-[#fcf8ef]">
      <SiteJourney />
      <nav className="sticky top-0 z-20 bg-[#fcf8ef]/95 backdrop-blur-sm border-b border-[#e5e0d0] flex items-center justify-center gap-[22px] overflow-x-auto px-5 py-3 whitespace-nowrap">
        {NAV_LEFT.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-xs tracking-[0.08em] uppercase text-[#52514f] no-underline shrink-0 hover:text-[#a8834f]"
          >
            {item.label}
          </a>
        ))}
        <div className="font-script text-[30px] text-[#3d3d2f] px-1.5 shrink-0">Lilu &amp; Marci</div>
        {NAV_RIGHT.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-xs tracking-[0.08em] uppercase text-[#52514f] no-underline shrink-0 hover:text-[#a8834f]"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Hero */}
      <section id="hero" className="relative min-h-[640px] flex items-center justify-center text-center overflow-hidden">
        <Image
          src="/images/hero.jpeg"
          alt="Lilu és Marci"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] brightness-[0.7]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(20,20,14,0.55) 0%, rgba(20,20,14,0.25) 55%, rgba(20,20,14,0.15) 100%)",
          }}
        />
        <div className="absolute inset-[18px] border border-[#fcf8ef]/55 pointer-events-none" />
        <div className="relative z-10 px-6 py-[60px] animate-fade-up">
          <div className="text-[13px] tracking-[0.16em] uppercase text-[#f6eaa9]">Esküvőnk</div>
          <div className="font-script text-[clamp(64px,11vw,112px)] text-[#fcf8ef] leading-none my-[6px]">
            Lilu &amp; Marci
          </div>
          <Divider dot="#f6eaa9" />
          <div className="text-[15px] tracking-[0.1em] uppercase text-[#fcf8ef]">
            2027.07.10 · Kálna Mátyás Malom
          </div>
          <Countdown />
        </div>
      </section>

      {/* Intro */}
      <section id="intro" className="bg-[#fcf8ef]">
        <Reveal>
          <div className="max-w-[1100px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="p-[10px] border border-[#e5e0d0] rounded-md">
              <Image
                src="/images/intro.jpeg"
                alt="Lilu és Marci"
                width={640}
                height={420}
                className="w-full h-[420px] object-cover object-top rounded block"
              />
            </div>
            <div className="text-left">
              <Image src="/sketches/couple.png" alt="" width={60} height={90} className="h-[70px] w-auto object-contain mb-2" />
              <div className="text-[13px] text-[#c2a87a] tracking-[0.1em]">01</div>
              <div className="font-script text-[32px] text-[#a8834f] my-1 mb-3">Szeretettel várunk</div>
              <p className="text-base leading-[1.8]">
                2027. július 10-én tartjuk esküvőnket a Kálna Mátyás Malomban. Ezen az oldalon megtalálod a
                helyszínt, az időrendet, a menüt és minden fontos részletet — a pontos adatokat folyamatosan
                frissítjük.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Történetünk — interactive journey map */}
      <section id="tortenet" className="bg-[#eff0e4] px-6 py-[90px]">
        <Reveal className="text-center mb-10">
          <div className="text-[13px] text-[#c2a87a] tracking-[0.1em]">02</div>
          <div className="font-script text-[44px] text-[#3d3d2f] mt-1">Történetünk</div>
          <Divider />
          <p className="text-[13px] text-[#8a9668] -mt-4">Kattints, vagy lépkedj végig az utunkon.</p>
        </Reveal>
        <Reveal>
          <JourneyMap />
        </Reveal>
      </section>

      {/* Helyszín */}
      <section id="helyszin" className="bg-[#fcf8ef]">
        <Reveal>
          <div className="max-w-[1100px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="p-[10px] border border-[#e5e0d0] rounded-md bg-[#fcf8ef] md:order-2">
              <Image
                src="/images/venue.jpeg"
                alt="Kálna, Mátyás Malom"
                width={640}
                height={320}
                className="w-full h-[320px] object-cover rounded block"
              />
            </div>
            <div>
              <div className="flex items-end gap-3 mb-1">
                <Image src="/sketches/church.png" alt="" width={70} height={90} className="h-[64px] w-auto object-contain" />
                <Image src="/sketches/villa.png" alt="" width={90} height={70} className="h-[52px] w-auto object-contain" />
              </div>
              <div className="text-[13px] text-[#c2a87a] tracking-[0.1em]">03</div>
              <div className="text-[13px] tracking-[0.16em] uppercase text-[#8a9668] mt-1">
                Helyszín &amp; időpont
              </div>
              <div className="font-script text-[44px] text-[#3d3d2f] my-[6px] mb-[10px]">Kálna, Mátyás Malom</div>
              <p className="text-[15px] leading-[1.7] mb-1.5">2027. július 10., szombat</p>
              <p className="text-[15px] leading-[1.7] text-[#8a9668]">A pontos cím és megközelítés hamarosan érkezik.</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Időrend */}
      <section id="idorend" className="bg-[#eff0e4] px-6 py-[90px]">
        <Reveal className="max-w-[820px] mx-auto text-center">
          <div className="text-[13px] text-[#c2a87a] tracking-[0.1em]">04</div>
          <div className="font-script text-[44px] text-[#3d3d2f] mt-1">Időrend</div>
          <Divider />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-10">
            {TIMELINE.map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-3">
                <Image
                  src={item.icon}
                  alt=""
                  width={90}
                  height={90}
                  className="h-[56px] w-auto object-contain"
                />
                <div>
                  <div className="text-sm tracking-[0.08em] text-[#a8834f]">{item.time}</div>
                  <div className="text-base text-[#3d3d2f] mt-1">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-px bg-[#e5e0d0] mt-10">
            {TIMELINE.map((_, i) => (
              <span
                key={i}
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#a8834f]"
                style={{ left: `${(i / (TIMELINE.length - 1)) * 100}%`, transform: "translate(-50%, -50%)" }}
              />
            ))}
          </div>
          <p className="text-[13px] text-[#8a9668] mt-[22px]">Pontos időpontokat hamarosan küldünk.</p>
        </Reveal>
      </section>

      {/* Menü */}
      <section id="menu" className="bg-[#fcf8ef] px-6 py-[90px]">
        <Reveal className="max-w-[900px] mx-auto text-center">
          <div className="text-[13px] text-[#c2a87a] tracking-[0.1em]">05</div>
          <div className="flex items-center justify-center gap-4 mt-2 mb-[18px]">
            <Image src="/sketches/cake.png" alt="" width={70} height={70} className="h-[54px] w-auto object-contain" />
            <div className="w-[84px] h-[84px] rounded-full bg-[#f6eaa9] flex items-center justify-center font-script text-[32px] text-[#3d3d2f]">
              L&amp;M
            </div>
            <Image src="/sketches/champagne.png" alt="" width={70} height={70} className="h-[54px] w-auto object-contain" />
          </div>
          <div className="font-script text-[44px] text-[#3d3d2f]">Menü</div>
          <Divider />
          <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[30px]">
            {MENU_COURSES.map((c) => (
              <div key={c.course} className="border border-[#e5e0d0] rounded-md px-4 py-6 bg-[#eff0e4]">
                <div className="text-[13px] tracking-[0.16em] uppercase text-[#a8834f]">{c.course}</div>
                <div className="text-sm text-[#8a9668] mt-2">{c.note}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Szállás */}
      <section id="szallas" className="bg-[#eff0e4] px-6 py-[90px]">
        <Reveal className="max-w-[640px] mx-auto text-center">
          <div className="text-[13px] text-[#c2a87a] tracking-[0.1em]">06</div>
          <div className="font-script text-[44px] text-[#3d3d2f] mt-1">Szállás</div>
          <Divider />
          <p className="text-[15px] leading-[1.7] text-[#52514f]">
            Ajánlott szálláshelyeket a Kálna környékén hamarosan megosztunk. Ha addig kérdésed van, írj nekünk
            az alábbi elérhetőségeken.
          </p>
        </Reveal>
      </section>

      {/* Dress code */}
      <section id="dresscode" className="bg-[#fcf8ef]">
        <Reveal>
          <div className="max-w-[1100px] mx-auto px-6 py-[90px] grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[13px] text-[#c2a87a] tracking-[0.1em]">07</div>
              <div className="font-script text-[44px] text-[#3d3d2f] my-1.5 mb-4">Dress code</div>
              <p className="text-[15px] leading-[1.7]">
                Toszkán, rusztikus-elegáns hangulat — földszínek: ivory, zsálya, oliva és karamell árnyalatok.
              </p>
              <div className="flex gap-3 mt-[22px]">
                <div className="w-9 h-9 rounded-full bg-[#fcf8ef] border border-[#e5e0d0]" />
                <div className="w-9 h-9 rounded-full bg-[#b8ca9a]" />
                <div className="w-9 h-9 rounded-full bg-[#7c8c5b]" />
                <div className="w-9 h-9 rounded-full bg-[#c2a87a]" />
                <div className="w-9 h-9 rounded-full bg-[#a8834f]" />
              </div>
              <p className="text-[13px] text-[#8a9668] mt-[18px]">A fehér színt hagyjuk a menyasszonynak.</p>
            </div>
            <div className="p-[10px] border border-[#e5e0d0] rounded-md bg-[#eff0e4]">
              <Image
                src="/images/dresscode.jpeg"
                alt="Lilu és Marci"
                width={640}
                height={420}
                className="w-full h-[420px] object-cover object-top rounded block"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* GYIK */}
      <section id="gyik" className="bg-[#eff0e4] px-6 py-[90px]">
        <Reveal className="max-w-[640px] mx-auto">
          <div className="text-center text-[13px] text-[#c2a87a] tracking-[0.1em]">08</div>
          <div className="text-center font-script text-[44px] text-[#3d3d2f] mt-1">Gyakori kérdések</div>
          <Divider />
          <Faq />
        </Reveal>
      </section>

      {/* RSVP */}
      <section id="rsvp" className="bg-[#fcf8ef] px-6 py-[90px]">
        <Reveal className="max-w-[520px] mx-auto text-center">
          <Image src="/sketches/ring-box.png" alt="" width={80} height={80} className="h-[64px] w-auto object-contain mx-auto mb-1" />
          <div className="text-[13px] text-[#c2a87a] tracking-[0.1em]">09</div>
          <div className="font-script text-[44px] text-[#3d3d2f] mt-1">Visszajelzés</div>
          <Divider />
          <RsvpForm />
        </Reveal>
      </section>

      <footer id="kapcsolat" className="bg-[#3d3d2f] text-[#fcf8ef] px-6 pt-16 pb-11 text-center">
        <div className="relative w-[104px] h-[104px] mx-auto mb-[18px]">
          <Image
            src="/sketches/wreath.png"
            alt=""
            fill
            className="object-contain opacity-80 [filter:brightness(0)_saturate(100%)_invert(1)]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-[#f6eaa9] flex items-center justify-center font-script text-[26px] text-[#3d3d2f]">
              L&amp;M
            </div>
          </div>
        </div>
        <div className="font-script text-[32px]">Lilu &amp; Marci</div>
        <p className="text-[13px] text-[#d7d3c2] mt-[10px]">2027.07.10 · Kálna, Mátyás Malom</p>
        <p className="text-[13px] text-[#d7d3c2] mt-1.5">Kérdés esetén elérhetőségeinket hamarosan közzétesszük.</p>
        <p className="text-[11px] text-[#a09c8a] mt-[22px]">Fotók: @blankartphotography</p>
      </footer>
    </div>
  );
}
