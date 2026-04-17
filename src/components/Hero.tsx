import heroImg from "@/assets/hero-food.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-8">
        {/* Copy */}
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-foreground/70 backdrop-blur animate-float-up">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-warm" />
            AI-powered food discovery
          </div>

          <h1
            className="mt-6 font-display text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.95] animate-float-up"
            style={{ animationDelay: "0.05s" }}
          >
            Foodie
            <span className="text-gradient-warm italic">eeeee</span>
          </h1>

          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground animate-float-up md:text-xl"
            style={{ animationDelay: "0.15s" }}
          >
            Discover what to eat with AI. Tell us your craving — get hand-picked dishes,
            restaurants, and reasons that hit the spot, every time.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 animate-float-up"
            style={{ animationDelay: "0.25s" }}
          >
            <a
              href="#search"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-ember px-7 py-4 text-base font-semibold text-primary-foreground shadow-warm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_-20px_oklch(0.58_0.21_28/0.55)]"
            >
              Find My Food
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#dishes"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-4 text-base font-semibold text-foreground backdrop-blur transition hover:bg-card"
            >
              Browse popular
            </a>
          </div>

          <div
            className="mt-10 flex items-center gap-6 text-sm text-muted-foreground animate-float-up"
            style={{ animationDelay: "0.35s" }}
          >
            <div className="flex -space-x-2">
              {["🌶️", "🍜", "🍕", "🍰"].map((e) => (
                <span
                  key={e}
                  className="grid h-9 w-9 place-items-center rounded-full border-2 border-background bg-secondary text-base"
                >
                  {e}
                </span>
              ))}
            </div>
            <span>
              <strong className="text-foreground">12,000+</strong> cravings satisfied this week
            </span>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative lg:col-span-6">
          <div className="relative animate-float-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-[2rem] bg-gradient-warm" />
            <img
              src={heroImg}
              alt="A vibrant overhead spread of warm Indian and Asian dishes including biryani, curry, and noodles"
              width={1600}
              height={1200}
              className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-warm"
            />

            {/* Floating chips */}
            <div className="absolute -left-4 top-8 hidden rounded-2xl bg-card px-4 py-3 shadow-card md:flex md:items-center md:gap-3">
              <span className="text-2xl">🤖</span>
              <div className="text-xs">
                <div className="font-semibold">AI matched</div>
                <div className="text-muted-foreground">in 1.2s</div>
              </div>
            </div>
            <div className="absolute -right-4 bottom-10 hidden rounded-2xl bg-card px-4 py-3 shadow-card md:flex md:items-center md:gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/30 text-lg">
                ⭐
              </span>
              <div className="text-xs">
                <div className="font-semibold">4.9 rating</div>
                <div className="text-muted-foreground">2,340 reviews</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
