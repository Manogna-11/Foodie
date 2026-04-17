import { useState } from "react";
import { toast } from "sonner";
import biryani from "@/assets/dish-biryani.jpg";
import pizza from "@/assets/dish-pizza.jpg";
import burger from "@/assets/dish-burger.jpg";
import ramen from "@/assets/dish-ramen.jpg";
import chaat from "@/assets/dish-chaat.jpg";
import dessert from "@/assets/dish-dessert.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Dish = {
  name: string;
  desc: string;
  img: string;
  tag: string;
  heat: string;
};

const dishes: Dish[] = [
  { name: "Hyderabadi Biryani", desc: "Layered saffron rice, slow-cooked tender chicken with aromatic spices and caramelized onions.", img: biryani, tag: "Indian", heat: "🌶️🌶️" },
  { name: "Margherita Pizza", desc: "Wood-fired crust topped with San Marzano tomatoes, fresh mozzarella, and basil leaves.", img: pizza, tag: "Italian", heat: "🌿" },
  { name: "Smash Burger", desc: "Juicy double beef patties, melty cheddar, pickles, and special sauce on a toasted brioche bun.", img: burger, tag: "American", heat: "🧀" },
  { name: "Tonkotsu Ramen", desc: "24-hour pork bone broth, springy noodles, soft egg, chashu pork, and fresh scallions.", img: ramen, tag: "Japanese", heat: "🍜" },
  { name: "Mumbai Chaat", desc: "Tangy chutneys, crispy bites, yogurt, and pomegranate burst — the ultimate street food.", img: chaat, tag: "Street Food", heat: "🌶️🌶️🌶️" },
  { name: "Lava Cake", desc: "Warm chocolate cake with a molten core, served with vanilla ice cream and fresh raspberries.", img: dessert, tag: "Dessert", heat: "🍫" },
];

export function PopularDishes() {
  const [selected, setSelected] = useState<Dish | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "" });

  const openDish = (d: Dish) => setSelected(d);
  const closeDish = () => setSelected(null);

  const startBooking = () => {
    setBookingOpen(true);
  };

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      toast.error("Please fill in all fields");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setBookingOpen(false);
      setSelected(null);
      setForm({ name: "", phone: "", address: "" });
      toast.success("Your order has been placed successfully!", {
        description: "We'll call you shortly to confirm delivery details.",
      });
    }, 700);
  };

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
              Tap any dish to see details and book in seconds.
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
            <button
              key={d.name}
              onClick={() => openDish(d)}
              className="group relative overflow-hidden rounded-3xl bg-card text-left shadow-card transition duration-500 hover:-translate-y-1 hover:shadow-warm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
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
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">{d.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  View & Book →
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Dish detail modal */}
      <Dialog open={!!selected && !bookingOpen} onOpenChange={(o) => !o && closeDish()}>
        <DialogContent className="max-w-2xl overflow-hidden p-0">
          {selected && (
            <>
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <img
                  src={selected.img}
                  alt={selected.name}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold backdrop-blur">
                  {selected.tag}
                </span>
              </div>
              <div className="p-6">
                <DialogHeader>
                  <DialogTitle className="font-display text-3xl">{selected.name}</DialogTitle>
                  <DialogDescription className="text-base leading-relaxed">
                    {selected.desc}
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter className="mt-6 gap-2 sm:gap-2">
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
                  <Button onClick={startBooking} className="bg-primary hover:bg-primary/90">
                    Book Now
                  </Button>
                </DialogFooter>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Booking modal */}
      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              Book {selected?.name}
            </DialogTitle>
            <DialogDescription>
              Enter your details and we'll deliver hot & fresh.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleConfirm} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="b-name">Name</Label>
              <Input
                id="b-name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="b-phone">Phone Number</Label>
              <Input
                id="b-phone"
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+1 555 123 4567"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="b-address">Address</Label>
              <Input
                id="b-address"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                placeholder="Delivery address"
                required
              />
            </div>
            <DialogFooter className="gap-2 sm:gap-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setBookingOpen(false)}
              >
                Close
              </Button>
              <Button type="submit" disabled={submitting} className="bg-primary hover:bg-primary/90">
                {submitting ? "Placing order..." : "Confirm Booking"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
}
