import RsvpForm from "./RsvpForm";

export default function RsvpPage() {
  return (
    <main className="min-h-screen bg-base-200 px-4 py-12">
      <div className="max-w-lg mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="card-title font-serif text-3xl justify-center">
              Lilu &amp; Marci
            </h1>
            <p className="text-center text-base-content/70 mb-4">
              We can&apos;t wait to celebrate with you. Please RSVP below.
            </p>
            <RsvpForm />
          </div>
        </div>
      </div>
    </main>
  );
}
