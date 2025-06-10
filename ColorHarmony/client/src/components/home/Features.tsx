import { Heart, Leaf, Palette } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Handcrafted Artistry",
    description:
      "Every bouquet is meticulously crafted by skilled artisans with years of experience in the art of crochet.",
    color: "text-rose-pink",
    bgColor: "bg-rose-pink/10",
    hoverBgColor: "group-hover:bg-rose-pink/20",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description:
      "We use sustainable, high-quality yarns and materials that are gentle on the environment and built to last.",
    color: "text-coral-terracotta",
    bgColor: "bg-coral-terracotta/10",
    hoverBgColor: "group-hover:bg-coral-terracotta/20",
  },
  {
    icon: Palette,
    title: "Personalized Designs",
    description:
      "Custom color schemes and unique arrangements tailored to your specific preferences and occasions.",
    color: "text-orchid-purple",
    bgColor: "bg-orchid-purple/10",
    hoverBgColor: "group-hover:bg-orchid-purple/20",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div
                className={`w-16 h-16 ${feature.bgColor} ${feature.hoverBgColor} rounded-full flex items-center justify-center mx-auto mb-6 transition-colors`}
              >
                <feature.icon className={`${feature.color} w-8 h-8`} />
              </div>
              <h3 className="font-playfair text-2xl font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
