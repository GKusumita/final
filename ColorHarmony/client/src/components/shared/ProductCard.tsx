import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  color: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="font-playfair text-xl font-semibold mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className={`text-2xl font-bold ${product.color}`}>
            ${product.price}
          </span>
          <Link href={`/product/${product.id}`}>
            <Button
              className={`text-white hover:bg-opacity-90 transition-colors rounded-full px-4 py-2 ${
                product.color === "text-rose-pink"
                  ? "bg-rose-pink"
                  : product.color === "text-coral-terracotta"
                  ? "bg-coral-terracotta"
                  : product.color === "text-orchid-purple"
                  ? "bg-orchid-purple"
                  : product.color === "text-dusty-mauve"
                  ? "bg-dusty-mauve"
                  : product.color === "text-blush-pink"
                  ? "bg-blush-pink"
                  : "bg-soft-red"
              }`}
            >
              Add to Cart
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
