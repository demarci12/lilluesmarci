import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { listRsvps } from "@/app/actions/rsvp";
import { logout } from "./actions";
import RsvpTable from "./RsvpTable";

export default async function AdminDashboardPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  const rsvps = await listRsvps();
  const attendingCount = rsvps
    .filter((r) => r.attending)
    .reduce((sum, r) => sum + r.guest_count, 0);
  const confirmed = rsvps.filter((r) => r.status === "confirmed").length;
  const pending = rsvps.filter((r) => r.status === "pending").length;
  const declined = rsvps.filter((r) => r.status === "declined").length;

  return (
    <main className="min-h-screen bg-base-200 p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-serif">RSVP dashboard</h1>
          <form action={logout}>
            <button className="btn btn-ghost btn-sm">Log out</button>
          </form>
        </div>

        <div className="stats shadow w-full bg-base-100">
          <div className="stat">
            <div className="stat-title">Total responses</div>
            <div className="stat-value">{rsvps.length}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Attending guests</div>
            <div className="stat-value text-primary">{attendingCount}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Confirmed</div>
            <div className="stat-value text-success">{confirmed}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Pending</div>
            <div className="stat-value text-warning">{pending}</div>
          </div>
          <div className="stat">
            <div className="stat-title">Declined</div>
            <div className="stat-value text-error">{declined}</div>
          </div>
        </div>

        <div className="card bg-base-100 shadow">
          <div className="card-body">
            <RsvpTable rsvps={rsvps} />
          </div>
        </div>
      </div>
    </main>
  );
}
