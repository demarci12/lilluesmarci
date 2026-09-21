"use client";

import { useActionState, useState } from "react";
import { submitRsvp, type RsvpFormState } from "@/app/actions/rsvp";

const initialState: RsvpFormState = { status: "idle" };

export default function RsvpForm() {
  const [state, formAction, pending] = useActionState(submitRsvp, initialState);
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [plusOnes, setPlusOnes] = useState(0);

  if (state.status === "success") {
    return <p className="thanks">Köszönjük a visszajelzést!</p>;
  }

  return (
    <form action={formAction} className="rf">
      <label>
        Név
        <input required name="full_name" autoComplete="name" />
      </label>

      <label>
        E-mail
        <input type="email" name="email" autoComplete="email" />
      </label>

      <label>
        Telefon
        <input name="phone" type="tel" autoComplete="tel" />
      </label>

      <label>
        Részt veszek
        <select
          name="attending"
          value={attending}
          onChange={(e) => setAttending(e.target.value as "yes" | "no")}
        >
          <option value="yes">Igen, ott leszek</option>
          <option value="no">Sajnos nem tudok jönni</option>
        </select>
      </label>

      {attending === "yes" && (
        <>
          <label>
            Létszám (téged is beleértve)
            <input
              type="number"
              name="guest_count"
              min={1}
              defaultValue={1}
              onChange={(e) => setPlusOnes(Math.max(0, Number(e.target.value) - 1))}
            />
          </label>

          {plusOnes > 0 &&
            Array.from({ length: plusOnes }).map((_, i) => (
              <label key={i}>
                {`${i + 1}. vendég neve`}
                <input name="plus_one_name" />
              </label>
            ))}

          <label>
            Étkezési megkötés (allergia, egyéb)
            <input name="dietary_restrictions" />
          </label>
        </>
      )}

      <label>
        Megjegyzés
        <textarea name="message" rows={3} />
      </label>

      {state.status === "error" && <p className="err">{state.message}</p>}

      <button type="submit" disabled={pending} className="pill">
        {pending ? "Küldés…" : "Küldés"}
      </button>
    </form>
  );
}
