"use client";

import { useState } from "react";

const QUESTIONS: [string, [string, string]][] = [
  ["Ki tette meg az első lépést?", ["Lilla", "Marton"]],
  ["Ki készül el gyorsabban egy indulás előtt?", ["Lilla", "Marton"]],
  ["Ki választ filmet egy közös estén?", ["Lilla", "Marton"]],
  ["Ki mondta ki először, hogy „szeretlek”?", ["Lilla", "Marton"]],
];

export default function Quiz() {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  return (
    <div data-reveal className="reveal space-y-12 lg:col-span-6 lg:col-start-7">
      {QUESTIONS.map(([question, options], index) => (
        <div key={question} className="border-t border-[#aeb39a]/30 pt-7">
          <p className="font-serif text-2xl italic md:text-3xl">{question}</p>
          <div className="mt-6 flex gap-3">
            {options.map((answer) => (
              <button
                key={answer}
                type="button"
                onClick={() => setAnswers((current) => ({ ...current, [index]: answer }))}
                className={`quiz-option border px-7 py-3 text-[9px] uppercase tracking-[0.26em] ${
                  answers[index] === answer ? "is-selected" : ""
                }`}
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      ))}
      {Object.keys(answers).length === QUESTIONS.length && (
        <p className="border border-[#aeb39a]/40 p-6 text-center font-serif text-2xl italic text-[#d9dccd]">
          Szép tippek! A válaszokat július 10-én megtudjátok.
        </p>
      )}
    </div>
  );
}
