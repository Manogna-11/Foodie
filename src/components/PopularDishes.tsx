import biryani from "@/assets/dish-biryani.jpg";
import pizza from "@/assets/dish-pizza.jpg";
import burger from "@/assets/dish-burger.jpg";
import ramen from "@/assets/dish-ramen.jpg";
import chaat from "@/assets/dish-chaat.jpg";
import dessert from "@/assets/dish-dessert.jpg";

const dishes = [
  { name: "Hyderabadi Biryani", desc: "Layered saffron rice, slow-cooked tender chicken.", img: biryani, tag: "Indian", heat: "🌶️🌶️" },
  { name: "Margherita Pizza", desc: "Wood-fired crust, San Marzano, fresh mozzarella.", img: pizza, tag: "Italian", heat: "🌿" },
  { name: "Smash Burger", desc: "Juicy beef, melty cheddar, brioche bun perfection.", img: burger, tag: "American", heat: "🧀" },
  { name: "Tonkotsu Ramen", desc: "24-hour pork broth, springy noodles, soft egg.", img: ramen, tag: "Japanese", heat: "🍜" },
  { name: "Mumbai Chaat", desc: "Tangy chutneys, crispy bites, pomegranate burst.", img: chaat, tag: "Street Food", heat: "🌶️🌶️🌶️" },
  { name: "Lava Cake", desc: "Molten chocolate core with fresh raspberries.", img: dessert, tag: "Dessert", heat: "🍫" },
];

export function PopularDishes() {
  return (
    <section id="dishes" className="relative bg-gradient-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-foreground/70">
              🔥 Trending
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Popular dishes <span className="italic text-gradient-warm">right now</span>
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              The crowd favorites — what people are devouring across the city today.
            </p>
          </div>
          <a
            href="#search"
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary"
          >
            Get personalized picks →
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((d, i) => (
            <article
              key={d.name}
              className="group relative overflow-hidden rounded-3xl bg-card shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-warm"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="relative aspect-[5/4] overflow-hidden">
                <img
                  src={d.img}
                  alt={d.name}
                  loading="lazy"
                  width={800}
                  height={640}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold backdrop-blur">
                  {d.tag}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs backdrop-blur">
                  {d.heat}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold">{d.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
