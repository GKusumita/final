import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ProductCard from "@/components/shared/ProductCard";
import { allProducts } from "@/lib/products";
import { Infinity, Leaf, Heart } from "lucide-react";

const features = [
  {
    icon: Infinity,
    title: "Forever Beautiful",
    description:
      "Unlike fresh flowers, our crochet bouquets never wilt and maintain their beauty for years to come.",
    color: "text-rose-pink",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    description:
      "Made from sustainable materials with zero environmental impact from water usage or chemical treatments.",
    color: "text-coral-terracotta",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Each bouquet is handcrafted with attention to detail and passion for creating beautiful, meaningful pieces.",
    color: "text-orchid-purple",
  },
];

export default function Shop() {
  return (
    <>
      {/* Page Header */}
      <section className="gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl font-bold text-white mb-6">
            Crochet Collection
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Handcrafted bouquets that bring lasting beauty to every moment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-rose-pink hover:bg-white/90 rounded-full px-8 py-4 font-semibold">
              Shop Now
            </Button>
            <Link href="/about">
              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-rose-pink rounded-full px-8 py-4 font-semibold"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-gray-800">
              Why Choose Our Bouquets
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <feature.icon className={`${feature.color} w-12 h-12 mx-auto mb-6`} />
                <h3 className="font-playfair text-2xl font-semibold mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-rose-pink to-orchid-purple rounded-2xl p-12 text-center text-white">
            <h2 className="font-playfair text-4xl font-bold mb-6">
              Need Something Custom?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let us create a unique bouquet tailored specifically to your
              vision and occasion.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-white/90 border-0 focus:ring-2 focus:ring-white/50 rounded-full px-6 py-4 text-gray-800"
              />
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-white/90 border-0 focus:ring-2 focus:ring-white/50 rounded-full px-6 py-4 text-gray-800"
              />
              <Textarea
                placeholder="Describe your vision..."
                className="col-span-full bg-white/90 border-0 focus:ring-2 focus:ring-white/50 rounded-2xl px-6 py-4 text-gray-800 h-32 resize-none"
              />
            </div>
            <Button className="bg-white text-rose-pink hover:bg-white/90 rounded-full px-8 py-4 font-semibold mt-6">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
