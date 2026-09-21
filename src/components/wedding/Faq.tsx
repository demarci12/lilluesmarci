"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  { question: "Hozhatok gyereket?", answer: "A pontos részleteket hamarosan megosztjuk." },
  { question: "Van parkolás a helyszínen?", answer: "A pontos részleteket hamarosan megosztjuk." },
  { question: "Meddig kell visszajelezni?", answer: "A határidőt hamarosan itt közzétesszük." },
];

export default function Faq() {
  const [open, setOpen] = useState<Record<number, boolean>>({});

  return (
    <>
      {FAQ_ITEMS.map((faq, i) => (
        <div key={faq.question} className="border-b border-[#e5e0d0] py-[18px]">
          <button
            type="button"
            onClick={() => setOpen((s) => ({ ...s, [i]: !s[i] }))}
            className="flex w-full items-center justify-between text-left text-base text-[#3d3d2f] cursor-pointer"
          >
            {faq.question}
            <span className="text-[#a8834f] text-xl">{open[i] ? "−" : "+"}</span>
          </button>
          {open[i] && <p className="mt-[10px] text-sm text-[#8a9668]">{faq.answer}</p>}
        </div>
      ))}
    </>
  );
}
