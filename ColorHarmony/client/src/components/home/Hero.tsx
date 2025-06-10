import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Welcome to Your Whimsical Crochet Wonderland
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Discover handcrafted crochet bouquets that bring lasting beauty
                and sustainable elegance to every special moment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop">
                  <Button className="bg-white text-rose-pink hover:bg-white/90 rounded-full px-8 py-4 text-lg font-semibold">
                    Shop Now
                  </Button>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-rose-pink rounded-full px-8 py-4 text-lg font-semibold"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:block">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Handcrafted crochet bouquet"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
