"use client";

import { useTransition } from "react";
import { updateRsvpStatus, type RsvpRow } from "@/app/actions/rsvp";

const STATUS_BADGE: Record<RsvpRow["status"], string> = {
  pending: "badge-warning",
  confirmed: "badge-success",
  declined: "badge-error",
};

export default function RsvpTable({ rsvps }: { rsvps: RsvpRow[] }) {
  const [isPending, startTransition] = useTransition();

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Attending</th>
            <th>Guests</th>
            <th>Plus-ones</th>
            <th>Dietary</th>
            <th>Message</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {rsvps.map((r) => (
            <tr key={r.id}>
              <td className="font-medium">{r.full_name}</td>
              <td className="text-sm">
                {r.email && <div>{r.email}</div>}
                {r.phone && <div>{r.phone}</div>}
              </td>
              <td>{r.attending ? "Yes" : "No"}</td>
              <td>{r.guest_count}</td>
              <td className="text-sm">
                {r.plus_ones.map((p) => p.name).join(", ") || "—"}
              </td>
              <td className="text-sm">{r.dietary_restrictions || "—"}</td>
              <td className="text-sm max-w-xs truncate">{r.message || "—"}</td>
              <td>
                <select
                  className={`select select-bordered select-sm badge ${STATUS_BADGE[r.status]}`}
                  defaultValue={r.status}
                  disabled={isPending}
                  onChange={(e) =>
                    startTransition(() =>
                      updateRsvpStatus(r.id, e.target.value as RsvpRow["status"])
                    )
                  }
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="declined">Declined</option>
                </select>
              </td>
            </tr>
          ))}
          {rsvps.length === 0 && (
            <tr>
              <td colSpan={8} className="text-center text-base-content/60 py-8">
                No RSVPs yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
