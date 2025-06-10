const services = [
  {
    title: "Eco-Friendly Gifts",
    description:
      "Sustainable, beautiful presents that show you care about both your loved ones and the planet.",
    color: "text-rose-pink",
  },
  {
    title: "Personalized Designs",
    description:
      "Custom bouquets tailored to your color preferences, style, and the unique story you want to tell.",
    color: "text-coral-terracotta",
  },
  {
    title: "Whimsical Elegance",
    description:
      "Romantic, dreamy designs that bring a touch of magic to weddings, anniversaries, and special celebrations.",
    color: "text-orchid-purple",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Artisan crafting workspace"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="font-playfair text-4xl font-bold mb-6 text-gray-800">
              Custom Crochet Services for Every Occasion
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Transform your special moments with our bespoke crochet creations,
              designed to capture the essence of your celebrations.
            </p>

            <div className="space-y-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <h3 className={`font-semibold text-xl mb-3 ${service.color}`}>
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
