import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SearchSection } from "@/components/SearchSection";
import { PopularDishes } from "@/components/PopularDishes";
import { Restaurants } from "@/components/Restaurants";
import { About } from "@/components/About";
import { Contact, Footer } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FoodieAI – Smart Food & Restaurant Finder" },
      {
        name: "description",
        content:
          "Discover what to eat with AI. FoodieAI recommends dishes, restaurants, and reasons tailored to your craving in seconds.",
      },
      { property: "og:title", content: "FoodieAI – Smart Food & Restaurant Finder" },
      {
        property: "og:description",
        content: "AI-powered food discovery. Tell us what you crave — get the perfect dish.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <SearchSection />
      <PopularDishes />
      <Restaurants />
      <About />
      <Contact />
      <Footer />
      <Toaster position="top-center" richColors />
    </main>
  );
}
