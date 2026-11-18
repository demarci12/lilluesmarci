"use client";

import { useActionState, useEffect, useState } from "react";
import { submitRsvp, type RsvpFormState } from "@/app/actions/rsvp";

const initialState: RsvpFormState = { status: "idle" };

export default function RsvpForm() {
  const [state, formAction, pending] = useActionState(submitRsvp, initialState);
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [plusOnes, setPlusOnes] = useState(0);
  const [toastDone, setToastDone] = useState(false);
  const toast = state.status === "success" && !toastDone;

  useEffect(() => {
    if (state.status !== "success") return;
    const id = setTimeout(() => setToastDone(true), 4000);
    return () => clearTimeout(id);
  }, [state.status]);

  if (state.status === "success") {
    return (
      <>
        <div className="lm-thanks" role="status">
          <p className="lm-serif" style={{ fontSize: "2.4rem", lineHeight: 1.05 }}>Köszönjük a visszajelzést!</p>
          <p className="lm-muted" style={{ marginTop: 12 }}>Hamarosan jelentkezünk a részletekkel.</p>
        </div>
        {toast && (
          <div className="toast toast-center toast-bottom z-50">
            <div className="alert alert-success rounded-full px-6 text-base">Megkaptuk, köszönjük!</div>
          </div>
        )}
      </>
    );
  }

  return (
    <form action={formAction} className="lm-form">
      <label className="lm-field lm-full">
        Név / nevek
        <input
          required
          minLength={2}
          name="full_name"
          type="text"
          autoComplete="name"
          placeholder="pl. Kovács Anna és Péter"
          className="input validator"
        />
        <span className="validator-hint hidden text-sm font-normal">Kérjük, add meg a neved.</span>
      </label>

      <label className="lm-field">
        E-mail
        <input name="email" type="email" autoComplete="email" placeholder="nev@example.com" className="input validator" />
      </label>

      <label className="lm-field">
        Telefon
        <input name="phone" type="tel" autoComplete="tel" placeholder="+36" className="input" />
      </label>

      <fieldset className="lm-field lm-full">
        <legend className="mb-2">Részt vesztek?</legend>
        <div className="flex flex-wrap gap-3">
          {(
            [
              ["yes", "Igen, örömmel ott leszünk"],
              ["no", "Sajnos nem tudunk részt venni"],
            ] as const
          ).map(([value, text]) => (
            <label
              key={value}
              className={`flex min-h-[52px] cursor-pointer items-center gap-3 rounded-full border-[1.5px] px-5 font-bold transition-colors ${
                attending === value ? "border-primary bg-base-200" : "border-base-300"
              }`}
            >
              <input
                type="radio"
                name="attending"
                value={value}
                checked={attending === value}
                onChange={() => setAttending(value)}
                className="radio radio-primary radio-sm"
              />
              {text}
            </label>
          ))}
        </div>
      </fieldset>

      {attending === "yes" && (
        <>
          <label className="lm-field">
            Hány fővel érkeztek?
            <input
              required
              name="guest_count"
              type="number"
              min={1}
              max={10}
              defaultValue={1}
              className="input"
              onChange={(e) => setPlusOnes(Math.max(0, Number(e.target.value) - 1))}
            />
          </label>

          <label className="lm-field">
            Szállás Etyeken
            <select required name="accommodation" defaultValue="" className="select">
              <option value="" disabled>Válassz</option>
              <option>Igen, segítséget kérünk</option>
              <option>Már foglaltunk szállást</option>
              <option>Nem kérünk szállást</option>
            </select>
          </label>

          <label className="lm-field lm-full">
            Transzfer
            <select required name="transfer" defaultValue="" className="select">
              <option value="" disabled>Válassz</option>
              <option>Etyeki szálláshoz kérünk</option>
              <option>Budapestre kérünk</option>
              <option>Nem kérünk transzfert</option>
            </select>
          </label>

          {plusOnes > 0 &&
            Array.from({ length: plusOnes }).map((_, i) => (
              <label key={i} className="lm-field">
                {`${i + 1}. vendég neve`}
                <input name="plus_one_name" type="text" className="input" />
              </label>
            ))}

          <label className="lm-field lm-full">
            Ételérzékenység
            <input name="dietary_restrictions" type="text" placeholder="Allergia, intolerancia, egyéb" className="input" />
          </label>
        </>
      )}

      <label className="lm-field lm-full">
        Üzenet
        <textarea name="message" rows={3} placeholder="Minden fontos részletet ide írhattok" className="textarea" />
      </label>

      {state.status === "error" && (
        <p className="lm-err lm-full" role="alert">
          {state.message}
        </p>
      )}

      <button type="submit" disabled={pending} className="btn btn-primary btn-lg lm-full rounded-full">
        {pending ? <span className="loading loading-spinner loading-sm" /> : null}
        {pending ? "Küldés…" : "Visszajelzés elküldése"}
        {!pending && <span className="lm-arr">→</span>}
      </button>
    </form>
  );
}
