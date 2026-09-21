"use client";

import { useActionState, useState } from "react";
import { submitRsvp, type RsvpFormState } from "@/app/actions/rsvp";

const initialState: RsvpFormState = { status: "idle" };

export default function RsvpForm() {
  const [state, formAction, pending] = useActionState(submitRsvp, initialState);
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [plusOnes, setPlusOnes] = useState<number>(0);

  if (state.status === "success") {
    return (
      <div className="alert alert-success">
        <span>Thank you! Your RSVP has been received.</span>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-4">
      <fieldset className="fieldset">
        <label className="fieldset-label" htmlFor="full_name">
          Full name
        </label>
        <input
          id="full_name"
          name="full_name"
          required
          className="input input-bordered w-full"
        />
      </fieldset>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <fieldset className="fieldset">
          <label className="fieldset-label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="input input-bordered w-full"
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="fieldset-label" htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" className="input input-bordered w-full" />
        </fieldset>
      </div>

      <fieldset className="fieldset">
        <legend className="fieldset-legend">Will you attend?</legend>
        <div className="join">
          <label className="btn join-item">
            <input
              type="radio"
              name="attending"
              value="yes"
              className="hidden"
              checked={attending === "yes"}
              onChange={() => setAttending("yes")}
            />
            Joyfully accepts
          </label>
          <label className="btn join-item">
            <input
              type="radio"
              name="attending"
              value="no"
              className="hidden"
              checked={attending === "no"}
              onChange={() => setAttending("no")}
            />
            Regretfully declines
          </label>
        </div>
      </fieldset>

      {attending === "yes" && (
        <>
          <fieldset className="fieldset">
            <label className="fieldset-label" htmlFor="guest_count">
              Total guests (including yourself)
            </label>
            <input
              id="guest_count"
              name="guest_count"
              type="number"
              min={1}
              defaultValue={1}
              className="input input-bordered w-32"
              onChange={(e) => {
                const n = Math.max(0, Number(e.target.value) - 1);
                setPlusOnes(n);
              }}
            />
          </fieldset>

          {plusOnes > 0 && (
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Guest names</legend>
              <div className="flex flex-col gap-2">
                {Array.from({ length: plusOnes }).map((_, i) => (
                  <input
                    key={i}
                    name="plus_one_name"
                    placeholder={`Guest ${i + 1} name`}
                    className="input input-bordered w-full"
                  />
                ))}
              </div>
            </fieldset>
          )}

          <fieldset className="fieldset">
            <label className="fieldset-label" htmlFor="dietary_restrictions">
              Dietary restrictions
            </label>
            <input
              id="dietary_restrictions"
              name="dietary_restrictions"
              className="input input-bordered w-full"
            />
          </fieldset>
        </>
      )}

      <fieldset className="fieldset">
        <label className="fieldset-label" htmlFor="message">
          Message for the couple
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="textarea textarea-bordered w-full"
        />
      </fieldset>

      {state.status === "error" && (
        <p className="text-error text-sm">{state.message}</p>
      )}

      <button type="submit" className="btn btn-primary" disabled={pending}>
        {pending ? "Sending…" : "Send RSVP"}
      </button>
    </form>
  );
}
