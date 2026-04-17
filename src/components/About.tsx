export function About() {
  const stats = [
    { num: "50K+", label: "Happy foodies" },
    { num: "1.2M", label: "Recommendations" },
    { num: "8K+", label: "Restaurants" },
    { num: "4.9★", label: "App rating" },
  ];
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-ember py-20 text-primary-foreground md:py-28">
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-turmeric/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
            About FoodieAI
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            We turn cravings into <em className="not-italic text-accent">dinner plans.</em>
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-primary-foreground/85">
            FoodieAI is a smart food and restaurant finder that listens to how you feel and
            recommends exactly what to eat — and where to eat it. Powered by a culinary-trained
            AI, we blend taste, mood, weather, and local kitchens into picks you'll actually crave.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/85">
            No more endless scrolling. No more "I don't know, you pick." Just delicious,
            decisive, personalized recommendations in seconds.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/10 p-6 backdrop-blur transition hover:bg-primary-foreground/15"
            >
              <div className="font-display text-4xl font-bold md:text-5xl">{s.num}</div>
              <div className="mt-1 text-sm text-primary-foreground/80">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
