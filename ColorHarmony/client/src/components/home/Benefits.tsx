import { Check } from "lucide-react";

const benefits = [
  {
    title: "Crafted with Passion and Precision",
    description:
      "Each piece reflects hours of dedicated craftsmanship and attention to detail.",
    color: "bg-rose-pink",
  },
  {
    title: "Ideal for Any Occasion",
    description:
      "Perfect for weddings, anniversaries, birthdays, or simply brightening someone's day.",
    color: "bg-coral-terracotta",
  },
  {
    title: "Experience Sustainable Elegance",
    description:
      "Beautiful gifts that last forever without harming the environment.",
    color: "bg-orchid-purple",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-4xl font-bold mb-6 text-gray-800">
              Discover the Charm of Handmade Gifts
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div
                    className={`w-6 h-6 ${benefit.color} rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0`}
                  >
                    <Check className="text-white w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Romantic gift presentation"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
