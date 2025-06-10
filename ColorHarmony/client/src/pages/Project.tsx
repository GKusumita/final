import { useParams } from "wouter";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/shared/TestimonialCard";

const projects = {
  "enchanted-garden": {
    title: "Enchanted Garden Wedding",
    description:
      "A breathtaking bridal bouquet featuring over 50 individually crafted roses, peonies, and baby's breath in soft blush tones. This masterpiece became the centerpiece of a fairytale wedding celebration.",
    image:
      "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    details: [
      {
        image:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        caption: "Individual rose detail showing intricate stitch work",
      },
      {
        image:
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        caption: "Color palette inspiration and yarn selection",
      },
    ],
    timeline: [
      { month: "January", milestone: "Initial consultation and design concept" },
      { month: "February", milestone: "Pattern development and material sourcing" },
      { month: "March", milestone: "Crafting individual flowers and elements" },
      { month: "April", milestone: "Final assembly and delivery" },
    ],
    testimonial: {
      name: "Jessica Williams",
      location: "Bride, Napa Valley",
      text: "Sarah created the most beautiful bouquet for my wedding. Every guest commented on how stunning and unique it was. Three years later, it still sits in our living room as a reminder of our perfect day.",
      initials: "JW",
      color: "bg-rose-pink",
    },
  },
  "corporate-wellness": {
    title: "Corporate Wellness Installation",
    description:
      "A large-scale installation for TechFlow's wellness center featuring vibrant coral and terracotta arrangements that brought natural beauty to their modern workspace.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    details: [
      {
        image:
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        caption: "Installation process in the company's wellness center",
      },
      {
        image:
          "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        caption: "Final arrangement in the meditation space",
      },
    ],
    timeline: [
      { month: "June", milestone: "Site visit and wellness space assessment" },
      { month: "July", milestone: "Design proposal and color coordination" },
      { month: "August", milestone: "Bulk production of modular elements" },
      { month: "September", milestone: "Installation and employee feedback session" },
    ],
    testimonial: {
      name: "David Chen",
      location: "HR Director, TechFlow",
      text: "The installation completely transformed our wellness space. Employees love spending time there, and we've noticed improved morale and stress levels since the installation.",
      initials: "DC",
      color: "bg-coral-terracotta",
    },
  },
  "golden-anniversary": {
    title: "Golden Anniversary Celebration",
    description:
      "A sophisticated arrangement celebrating 50 years of marriage, with each flower representing a meaningful memory from the couple's journey together.",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    details: [
      {
        image:
          "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        caption: "Golden color palette with purple accents",
      },
      {
        image:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        caption: "Memory cards attached to each flower stem",
      },
    ],
    timeline: [
      { month: "March", milestone: "Family interviews and memory collection" },
      { month: "April", milestone: "Custom pattern design for significant flowers" },
      { month: "May", milestone: "Crafting 50 unique flowers with gold accents" },
      { month: "June", milestone: "Surprise presentation at anniversary party" },
    ],
    testimonial: {
      name: "Margaret Thompson",
      location: "Anniversary Celebrant",
      text: "When we saw the bouquet with flowers representing our favorite memories, we both cried. It's the most thoughtful gift we've ever received. Thank you for making our golden anniversary so special.",
      initials: "MT",
      color: "bg-orchid-purple",
    },
  },
};

export default function Project() {
  const { id } = useParams();
  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600">
            The project you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="font-playfair text-5xl font-bold mb-6 text-gray-800">
              {project.title}
            </h1>
            <img
              src={project.image}
              alt={project.title}
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold mb-6 text-gray-800">
            Project Description
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Detailed Images */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold mb-8 text-gray-800">
            Project Details
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {project.details.map((detail, index) => (
              <div key={index} className="text-center">
                <img
                  src={detail.image}
                  alt={detail.caption}
                  className="rounded-xl shadow-lg w-full mb-4"
                />
                <p className="text-gray-600">{detail.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold mb-12 text-gray-800 text-center">
            Project Timeline
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {project.timeline.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-rose-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{item.month}</h3>
                <p className="text-gray-600 text-sm">{item.milestone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold mb-8 text-gray-800 text-center">
            Client Testimonial
          </h2>
          <TestimonialCard {...project.testimonial} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-6">
            Inspired by This Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create something unique for your special occasion
          </p>
          <Button className="bg-white text-rose-pink hover:bg-white/90 rounded-full px-8 py-4 font-semibold mr-4">
            Start Your Project
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-rose-pink rounded-full px-8 py-4 font-semibold"
          >
            View Portfolio
          </Button>
        </div>
      </section>
    </>
  );
}
