import { useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Star, Shield } from "lucide-react";
import { allProducts } from "@/lib/products";

const reviews = [
  {
    name: "Sarah M.",
    date: "2 weeks ago",
    text: "Absolutely stunning! The quality exceeded my expectations and it looks perfect in my living room. Will definitely order again.",
  },
  {
    name: "Jennifer L.",
    date: "1 month ago",
    text: "Perfect wedding bouquet alternative! It photographs beautifully and I get to keep it forever. The craftsmanship is incredible.",
  },
];

export default function Product() {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h1 className="font-playfair text-5xl font-bold mb-6 text-gray-800">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {product.description}
              </p>
              <div className="flex items-center mb-8">
                <span className={`text-4xl font-bold ${product.color} mr-4`}>
                  ${product.price}
                </span>
                <div className="flex items-center">
                  <div className="flex text-yellow-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600">(24 reviews)</span>
                </div>
              </div>
              <Button
                className={`text-white hover:bg-opacity-90 transition-colors rounded-full px-8 py-4 text-lg font-semibold ${
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
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="font-playfair text-3xl font-bold mb-6 text-gray-800">
                Product Details
              </h2>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h3 className="font-semibold mb-2">Materials</h3>
                    <p className="text-gray-600">
                      100% organic cotton yarn, eco-friendly dyes
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Dimensions</h3>
                    <p className="text-gray-600">12" diameter x 14" height</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Care Instructions</h3>
                    <p className="text-gray-600">
                      Spot clean only, avoid direct sunlight
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Delivery Time</h3>
                    <p className="text-gray-600">5-7 business days</p>
                  </div>
                </div>
                <h3 className="font-semibold mb-4">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our {product.name} captures timeless beauty in a sustainable,
                  forever-lasting arrangement. Each flower is individually
                  crocheted using traditional techniques passed down through
                  generations, ensuring authenticity and quality in every
                  stitch. The carefully chosen color palette complements any
                  décor while maintaining vibrant beauty year after year.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="font-playfair text-2xl font-semibold mb-6">
                  Order Information
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Price:</span>
                    <span className={`font-semibold ${product.color}`}>
                      ${product.price}.00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span className="text-green-600">Free</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between font-semibold text-lg">
                    <span>Total:</span>
                    <span className={product.color}>${product.price}.00</span>
                  </div>
                </div>
                <Button
                  className={`w-full text-white hover:bg-opacity-90 transition-colors rounded-full py-4 font-semibold mt-6 ${
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
                <p className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center">
                  <Shield className="w-4 h-4 mr-1" />
                  30-day satisfaction guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold mb-8 text-gray-800">
            Customer Reviews
          </h2>
          <div className="space-y-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold">{review.name}</span>
                  <span className="text-gray-500 ml-2">• {review.date}</span>
                </div>
                <p className="text-gray-600">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
