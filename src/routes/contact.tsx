import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { toast } from "sonner";
import { PageHero } from "@/components/site/PageShell";
import { Rise } from "@/components/site/motion-primitives";

const TITLE = "Join the Waitlist — Telala";
const DESCRIPTION =
  "Tell us about your plantation, or your plans for one. We'll reach out within 72 hours.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const FIELD =
  "w-full border border-hairline bg-card px-4 py-4 text-sm outline-none transition-colors focus:border-signal";

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  return (
    <>
      <PageHero
        thread="This is where it starts."
        title="Tell us about your plantation, or your plans for one."
        lead="We'll reach out within 72 hours."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[900px] px-5 md:px-10">
          <Rise>
            <form
              className="grid gap-5 md:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitting(true);
                const form = e.currentTarget;
                setTimeout(() => {
                  setSubmitting(false);
                  form.reset();
                  toast.success("You're on the waitlist. We'll reach you within 72 hours.");
                }, 500);
              }}
            >
              <label className="flex flex-col gap-2">
                <span className="label text-muted-foreground">Name</span>
                <input required name="name" className={FIELD} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="label text-muted-foreground">Email</span>
                <input required type="email" name="email" className={FIELD} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="label text-muted-foreground">Phone</span>
                <input name="phone" className={FIELD} />
              </label>
              <label className="flex flex-col gap-2">
                <span className="label text-muted-foreground">Status</span>
                <select required name="status" defaultValue="" className={FIELD}>
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Own a plantation</option>
                  <option>Planning to own</option>
                  <option>Institutional capital</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 md:col-span-2">
                <span className="label text-muted-foreground">Location</span>
                <input required name="location" className={FIELD} />
              </label>
              <label className="flex flex-col gap-2 md:col-span-2">
                <span className="label text-muted-foreground">Message (optional)</span>
                <textarea name="message" rows={5} className={FIELD} />
              </label>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="label bg-signal px-8 py-5 text-signal-foreground transition-colors duration-300 hover:bg-foreground disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Join the waitlist"}
                </button>
              </div>
            </form>
          </Rise>
        </div>
      </section>
    </>
  );
}
