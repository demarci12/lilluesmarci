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
    <form
      data-reveal
      action={formAction}
      className="reveal grid gap-x-8 gap-y-8 md:grid-cols-2"
    >
      <label className="rsvp-field md:col-span-2">
        <span>Név / nevek</span>
        <input required name="full_name" type="text" autoComplete="name" placeholder="Írd ide a neveteket" />
      </label>

      <label className="rsvp-field">
        <span>E-mail</span>
        <input name="email" type="email" autoComplete="email" placeholder="nev@example.com" />
      </label>

      <label className="rsvp-field">
        <span>Telefon</span>
        <input name="phone" type="tel" autoComplete="tel" placeholder="+36" />
      </label>

      <label className="rsvp-field md:col-span-2">
        <span>Részt vesztek?</span>
        <select
          required
          name="attending"
          value={attending}
          onChange={(e) => setAttending(e.target.value as "yes" | "no")}
        >
          <option value="yes">Igen, örömmel ott leszünk</option>
          <option value="no">Sajnos nem tudunk részt venni</option>
        </select>
      </label>

      {attending === "yes" && (
        <>
          <label className="rsvp-field">
            <span>Hány fővel érkeztek?</span>
            <input
              required
              name="guest_count"
              type="number"
              min={1}
              max={10}
              defaultValue={1}
              onChange={(e) => setPlusOnes(Math.max(0, Number(e.target.value) - 1))}
            />
          </label>

          <label className="rsvp-field">
            <span>Szállás Etyeken</span>
            <select required name="accommodation" defaultValue="">
              <option value="" disabled>Válassz</option>
              <option>Igen, segítséget kérünk</option>
              <option>Már foglaltunk szállást</option>
              <option>Nem kérünk szállást</option>
            </select>
          </label>

          <label className="rsvp-field md:col-span-2">
            <span>Transzfer</span>
            <select required name="transfer" defaultValue="">
              <option value="" disabled>Válassz</option>
              <option>Etyeki szálláshoz kérünk</option>
              <option>Budapestre kérünk</option>
              <option>Nem kérünk transzfert</option>
            </select>
          </label>

          {plusOnes > 0 &&
            Array.from({ length: plusOnes }).map((_, i) => (
              <label key={i} className="rsvp-field">
                <span>{`${i + 1}. vendég neve`}</span>
                <input name="plus_one_name" type="text" />
              </label>
            ))}

          <label className="rsvp-field md:col-span-2">
            <span>Ételérzékenység</span>
            <input name="dietary_restrictions" type="text" placeholder="Allergia, intolerancia, egyéb" />
          </label>
        </>
      )}

      <label className="rsvp-field md:col-span-2">
        <span>Üzenet</span>
        <textarea name="message" rows={3} placeholder="Minden fontos részletet ide írhattok" />
      </label>

      {state.status === "error" && <p className="err md:col-span-2">{state.message}</p>}

      <button type="submit" disabled={pending} className="rsvp-button mt-3 border border-[#e2dfd4]/60 px-10 py-4 text-[10px] uppercase tracking-[0.3em] md:col-span-2">
        {pending ? "Küldés…" : "Visszajelzés elküldése"}
      </button>
    </form>
  );
}
