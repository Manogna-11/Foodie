import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

type Suggestion = {
  dish: string;
  description: string;
  restaurant: string;
  reason: string;
  emoji: string;
};

const cuisines = [
  { value: "any", label: "Any cuisine" },
  { value: "Indian", label: "Indian" },
  { value: "Chinese", label: "Chinese" },
  { value: "Italian", label: "Italian" },
  { value: "Street Food", label: "Street Food" },
  { value: "Japanese", label: "Japanese" },
  { value: "Mexican", label: "Mexican" },
];

const examples = ["spicy 🔥", "comfort food 🤍", "healthy 🥗", "desserts 🍰", "late-night 🌙"];

export function SearchSection() {
  const [craving, setCraving] = useState("");
  const [cuisine, setCuisine] = useState("any");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Suggestion[]>([]);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const submit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!craving.trim()) {
      toast.error("Tell us what you're craving first 🍽️");
      return;
    }
    setLoading(true);
    setResults([]);
    try {
      const { data, error } = await supabase.functions.invoke("recommend-food", {
        body: { craving, cuisine },
      });
      if (error) throw error;
      if ((data as { error?: string })?.error) throw new Error((data as { error: string }).error);
      setResults((data as { suggestions: Suggestion[] }).suggestions || []);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      if (msg.toLowerCase().includes("rate")) {
        toast.error("Too many requests. Give it a sec and try again.");
      } else if (msg.toLowerCase().includes("credit")) {
        toast.error("AI credits exhausted — please add more in workspace settings.");
      } else {
        toast.error(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  const toggleFav = (key: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
        toast("Removed from favorites");
      } else {
        next.add(key);
        toast.success("Saved to favorites ❤️");
      }
      return next;
    });
  };

  const copySuggestion = async (s: Suggestion) => {
    const text = `${s.emoji} ${s.dish}\n${s.description}\n📍 ${s.restaurant}\nWhy: ${s.reason}`;
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard");
    } catch {
      toast.error("Couldn't copy");
    }
  };

  return (
    <section id="search" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
            ✨ AI Recommendation
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-6xl">
            What are you <span className="text-gradient-warm">craving?</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Describe a mood, a flavor, or a moment. We'll match the perfect dish.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="mt-10 rounded-3xl border border-border bg-card p-4 shadow-warm md:p-6"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="flex flex-1 items-center gap-3 rounded-2xl bg-background px-5 py-4">
              <span className="text-2xl">🍽️</span>
              <input
                value={craving}
                onChange={(e) => setCraving(e.target.value)}
                placeholder="Spicy ramen on a rainy night…"
                className="w-full bg-transparent text-base text-foreground placeholder:text-muted-foreground focus:outline-none md:text-lg"
              />
            </div>

            <select
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
              className="appearance-none rounded-2xl bg-background px-5 py-4 text-base font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-ring md:text-base"
            >
              {cuisines.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-ember px-7 py-4 text-base font-semibold text-primary-foreground shadow-warm transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                  Cooking…
                </>
              ) : (
                <>Get Suggestions →</>
              )}
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-2 px-2">
            <span className="text-xs text-muted-foreground">Try:</span>
            {examples.map((ex) => (
              <button
                type="button"
                key={ex}
                onClick={() => setCraving(ex.replace(/\s\p{Emoji}+$/u, ""))}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground transition hover:bg-accent/40"
              >
                {ex}
              </button>
            ))}
          </div>
        </form>

        {/* Results */}
        <div className="mt-10">
          {loading && (
            <div className="grid gap-5 md:grid-cols-3">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="relative h-56 overflow-hidden rounded-3xl border border-border bg-card p-6"
                >
                  <div className="space-y-3">
                    <div className="h-6 w-2/3 rounded-full bg-secondary" />
                    <div className="h-4 w-full rounded-full bg-secondary/70" />
                    <div className="h-4 w-5/6 rounded-full bg-secondary/70" />
                    <div className="h-4 w-1/2 rounded-full bg-secondary/70" />
                  </div>
                  <div className="absolute inset-0 shimmer" />
                </div>
              ))}
            </div>
          )}

          {!loading && results.length > 0 && (
            <div className="grid gap-5 md:grid-cols-3">
              {results.map((s, i) => {
                const key = `${s.dish}-${s.restaurant}`;
                const fav = favorites.has(key);
                return (
                  <article
                    key={key}
                    className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-warm animate-float-up"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-warm text-2xl">
                        {s.emoji}
                      </span>
                      <button
                        onClick={() => toggleFav(key)}
                        aria-label="Save favorite"
                        className={`grid h-9 w-9 place-items-center rounded-full border border-border transition ${
                          fav ? "bg-primary text-primary-foreground" : "bg-background hover:bg-secondary"
                        }`}
                      >
                        {fav ? "❤️" : "🤍"}
                      </button>
                    </div>

                    <h3 className="mt-4 font-display text-2xl font-semibold leading-tight">
                      {s.dish}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>

                    <div className="mt-4 rounded-2xl bg-secondary/60 p-4">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-secondary-foreground/80">
                        📍 Suggested spot
                      </div>
                      <div className="mt-1 font-display text-lg font-semibold">{s.restaurant}</div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        <span className="font-semibold text-foreground">Why:</span> {s.reason}
                      </p>
                    </div>

                    <button
                      onClick={() => copySuggestion(s)}
                      className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background py-2.5 text-sm font-medium transition hover:bg-secondary"
                    >
                      📋 Copy Suggestion
                    </button>
                  </article>
                );
              })}
            </div>
          )}

          {!loading && results.length === 0 && (
            <div className="rounded-3xl border border-dashed border-border bg-card/50 p-10 text-center">
              <div className="text-4xl">🥢</div>
              <p className="mt-3 text-muted-foreground">
                Your AI-curated dishes will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
