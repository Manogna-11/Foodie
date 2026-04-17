import { useState } from "react";
import { toast } from "sonner";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in every field");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 700));
    setSending(false);
    setForm({ name: "", email: "", message: "" });
    toast.success("Thanks! We'll be in touch soon 🌶️");
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
            ✉️ Get in touch
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Tell us what you're <span className="text-gradient-warm italic">hungry for.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Suggestions, partnerships, or just want to share your favorite spot? Drop us a line.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary">📧</span>
              <span>hello@foodieai.app</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary">📍</span>
              <span>Open kitchen, everywhere</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="lg:col-span-3 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Your name
              </span>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Anjali Patel"
                className="mt-2 w-full rounded-2xl bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Email
              </span>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@taste.buds"
                className="mt-2 w-full rounded-2xl bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
          </div>
          <label className="mt-4 block">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Message
            </span>
            <textarea
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="I'd love to see more vegan options…"
              className="mt-2 w-full resize-none rounded-2xl bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </label>
          <button
            type="submit"
            disabled={sending}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-ember px-7 py-4 text-base font-semibold text-primary-foreground shadow-warm transition hover:-translate-y-0.5 disabled:opacity-70 md:w-auto"
          >
            {sending ? "Sending…" : "Send message →"}
          </button>
        </form>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground md:flex-row md:px-8">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-warm text-sm">
            🍲
          </span>
          <span className="font-display font-semibold text-foreground">FoodieAI</span>
          <span>· © {new Date().getFullYear()}</span>
        </div>
        <span>Made with 🌶️ + AI</span>
      </div>
    </footer>
  );
}
