import r1 from "@/assets/restaurant-1.jpg";
import r2 from "@/assets/restaurant-2.jpg";
import r3 from "@/assets/restaurant-3.jpg";

const places = [
  {
    name: "Ember & Oak",
    img: r1,
    rating: 4.8,
    reviews: 1240,
    cuisine: "Modern American",
    specialty: "Wood-fired steak with smoked bone marrow",
    price: "$$$",
  },
  {
    name: "Casa Verde",
    img: r2,
    rating: 4.7,
    reviews: 982,
    cuisine: "Italian Trattoria",
    specialty: "Hand-rolled pappardelle with wild boar ragù",
    price: "$$",
  },
  {
    name: "Lantern Lane",
    img: r3,
    rating: 4.9,
    reviews: 2104,
    cuisine: "Asian Street Food",
    specialty: "Wok-tossed chili paneer & pani puri shots",
    price: "$",
  },
];

export function Restaurants() {
  return (
    <section id="restaurants" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
            🏆 Highlighted spots
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
            Restaurants we <span className="text-gradient-warm italic">love</span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Hand-picked kitchens making the kind of food worth a detour.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {places.map((p) => (
            <article
              key={p.name}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-card shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-warm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.name} interior`}
                  loading="lazy"
                  width={1000}
                  height={700}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
                  <span className="rounded-full bg-card/95 px-3 py-1 text-xs font-semibold backdrop-blur">
                    {p.cuisine}
                  </span>
                  <span className="rounded-full bg-foreground/85 px-3 py-1 text-xs font-semibold text-background backdrop-blur">
                    {p.price}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                  <div className="flex items-center gap-1 rounded-full bg-accent/30 px-3 py-1 text-sm font-semibold">
                    ⭐ {p.rating}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground">Specialty: </span>
                  {p.specialty}
                </p>
                <div className="mt-auto flex items-center justify-between pt-5 text-xs text-muted-foreground">
                  <span>{p.reviews.toLocaleString()} reviews</span>
                  <button className="font-semibold text-foreground hover:text-primary">
                    View menu →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
