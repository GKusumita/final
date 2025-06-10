import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/shared/ProductCard";
import { featuredProducts } from "@/lib/products";

export default function ProductGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl font-bold mb-4 text-gray-800">
            Featured Collections
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our most beloved handcrafted bouquets
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center">
          <Link href="/shop">
            <Button className="bg-rose-pink text-white hover:bg-rose-pink/90 rounded-full px-8 py-3 font-semibold">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
