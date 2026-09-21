"use client";

import { useActionState } from "react";
import { login, type LoginState } from "./actions";

const initialState: LoginState = {};

export default function AdminLoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <main className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <form
        action={formAction}
        className="card w-full max-w-sm bg-base-100 shadow-xl"
      >
        <div className="card-body">
          <h1 className="card-title font-serif">Admin login</h1>
          <p className="text-sm text-base-content/70">
            Enter the admin password to view RSVPs.
          </p>

          <fieldset className="fieldset mt-2">
            <label className="fieldset-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              autoFocus
              className="input input-bordered w-full"
            />
          </fieldset>

          {state.error && (
            <p className="text-error text-sm mt-1">{state.error}</p>
          )}

          <button
            type="submit"
            className="btn btn-primary mt-4"
            disabled={pending}
          >
            {pending ? "Signing in…" : "Sign in"}
          </button>
        </div>
      </form>
    </main>
  );
}
