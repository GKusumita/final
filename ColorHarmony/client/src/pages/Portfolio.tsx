import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const featuredProjects = [
  {
    id: "enchanted-garden",
    title: "Enchanted Garden Wedding",
    description:
      "A breathtaking bridal bouquet featuring over 50 individually crafted roses, peonies, and baby's breath in soft blush tones. This masterpiece took over 60 hours to complete and became the centerpiece of a fairytale wedding.",
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    review: "Exceeded all my dreams",
    color: "bg-rose-pink",
  },
  {
    id: "corporate-wellness",
    title: "Corporate Wellness Installation",
    description:
      "A large-scale installation for a tech company's wellness center featuring vibrant coral and terracotta arrangements. This project brought natural beauty and calming energy to a modern workspace environment.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    duration: "3 months",
    color: "bg-coral-terracotta",
  },
  {
    id: "golden-anniversary",
    title: "Golden Anniversary Celebration",
    description:
      "A sophisticated arrangement in rich purple and gold tones, celebrating 50 years of marriage. Each flower represents a meaningful memory, creating a deeply personal and emotional piece.",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    feature: "Memory-inspired design",
    color: "bg-orchid-purple",
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Bridal Bouquet",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Spring Collection",
  },
  {
    src: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Lavender Dreams",
  },
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Autumn Harvest",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Corporate Design",
  },
  {
    src: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Anniversary Special",
  },
  {
    src: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Birthday Joy",
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    alt: "Holiday Special",
  },
];

export default function Portfolio() {
  return (
    <>
      {/* Header */}
      <section className="gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl font-bold text-white mb-6">
            Our Crochet Masterpieces
          </h1>
          <p className="text-xl text-white/90">
            Explore our collection of custom creations and artistic achievements
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-gray-800">
              Featured Projects
            </h2>
            <p className="text-gray-600 text-lg">
              Highlighting our most celebrated custom creations
            </p>
          </div>
          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-2xl shadow-lg w-full"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <h3 className="font-playfair text-3xl font-bold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {project.description}
                  </p>
                  {project.review && (
                    <div className="flex items-center mb-6">
                      <div className="text-yellow-400 mr-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current inline" />
                        ))}
                      </div>
                      <span className="text-gray-600">
                        "{project.review}" - Client Review
                      </span>
                    </div>
                  )}
                  {project.duration && (
                    <div className="flex items-center mb-6">
                      <span className="text-coral-terracotta font-semibold mr-4">
                        Project Duration:
                      </span>
                      <span className="text-gray-600">{project.duration}</span>
                    </div>
                  )}
                  {project.feature && (
                    <div className="flex items-center mb-6">
                      <span className="text-orchid-purple font-semibold mr-4">
                        Special Feature:
                      </span>
                      <span className="text-gray-600">{project.feature}</span>
                    </div>
                  )}
                  <Link href={`/project/${project.id}`}>
                    <Button
                      className={`text-white hover:bg-opacity-90 transition-colors rounded-full px-6 py-3 ${project.color}`}
                    >
                      View Project Details
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-gray-800">
              Project Gallery
            </h2>
            <p className="text-gray-600 text-lg">
              Browse our complete collection of custom creations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-6">
            Ready for Your Custom Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's bring your vision to life with our expert craftsmanship
          </p>
          <Link href="/contact">
            <Button className="bg-white text-rose-pink hover:bg-white/90 rounded-full px-8 py-4 font-semibold">
              Contact for Custom Projects
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
