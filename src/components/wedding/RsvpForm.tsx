"use client";

import { useActionState, useState } from "react";
import { submitRsvp, type RsvpFormState } from "@/app/actions/rsvp";

const initialState: RsvpFormState = { status: "idle" };

const inputClass =
  "w-full mt-[6px] px-3 py-[10px] border border-[#e5e0d0] rounded font-sans text-sm box-border bg-white text-[#3d3d2f]";

export default function RsvpForm() {
  const [state, formAction, pending] = useActionState(submitRsvp, initialState);
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [plusOnes, setPlusOnes] = useState(0);

  if (state.status === "success") {
    return <p className="text-base text-[#3d3d2f]">Köszönjük a visszajelzést! 🤍</p>;
  }

  return (
    <form action={formAction} className="flex flex-col gap-[14px] text-left">
      <label className="text-[13px] text-[#52514f]">
        Név
        <input required name="full_name" className={inputClass} />
      </label>

      <label className="text-[13px] text-[#52514f]">
        E-mail
        <input type="email" name="email" className={inputClass} />
      </label>

      <label className="text-[13px] text-[#52514f]">
        Telefon
        <input name="phone" className={inputClass} />
      </label>

      <label className="text-[13px] text-[#52514f]">
        Részt veszek
        <select
          name="attending"
          value={attending}
          onChange={(e) => setAttending(e.target.value as "yes" | "no")}
          className={inputClass}
        >
          <option value="yes">Igen, ott leszek</option>
          <option value="no">Sajnos nem tudok jönni</option>
        </select>
      </label>

      {attending === "yes" && (
        <>
          <label className="text-[13px] text-[#52514f]">
            Létszám (téged is beleértve)
            <input
              type="number"
              name="guest_count"
              min={1}
              defaultValue={1}
              className={inputClass}
              onChange={(e) => setPlusOnes(Math.max(0, Number(e.target.value) - 1))}
            />
          </label>

          {plusOnes > 0 && (
            <div className="flex flex-col gap-[10px]">
              {Array.from({ length: plusOnes }).map((_, i) => (
                <label key={i} className="text-[13px] text-[#52514f]">
                  {`${i + 1}. vendég neve`}
                  <input name="plus_one_name" className={inputClass} />
                </label>
              ))}
            </div>
          )}

          <label className="text-[13px] text-[#52514f]">
            Étkezési megkötés (allergia, egyéb)
            <input name="dietary_restrictions" className={inputClass} />
          </label>
        </>
      )}

      <label className="text-[13px] text-[#52514f]">
        Megjegyzés
        <textarea name="message" rows={3} className={`${inputClass} resize-y`} />
      </label>

      {state.status === "error" && <p className="text-sm text-[#a8834f]">{state.message}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-2 rounded px-3 py-[12px] border-none bg-[#7c8c5b] text-[#fcf8ef] text-sm tracking-[0.08em] uppercase cursor-pointer hover:bg-[#3d3d2f] transition-colors disabled:opacity-60"
      >
        {pending ? "Küldés…" : "Küldés"}
      </button>
    </form>
  );
}
