import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, Gem, Palette } from "lucide-react";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { FaDribbble } from "react-icons/fa";
import TestimonialCard from "@/components/shared/TestimonialCard";

const features = [
  {
    icon: Leaf,
    title: "Eco-Friendly Practices",
    description:
      "From sustainable materials to minimal packaging, every decision we make considers our environmental impact.",
    color: "text-rose-pink",
  },
  {
    icon: Gem,
    title: "Meticulous Craftsmanship",
    description:
      "Each piece undergoes hours of careful attention, ensuring perfection in every stitch and detail.",
    color: "text-coral-terracotta",
  },
  {
    icon: Palette,
    title: "Tailored Personalization",
    description:
      "We work closely with you to create unique pieces that perfectly match your vision and style.",
    color: "text-orchid-purple",
  },
];

const team = [
  {
    name: "Sarah Mitchell",
    role: "Founder & Lead Artisan",
    description:
      "Passionate about sustainable craftsmanship with over 10 years of crochet expertise.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b830?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    color: "text-rose-pink",
    social: [Instagram, Linkedin],
  },
  {
    name: "Emma Rodriguez",
    role: "Pattern Designer",
    description:
      "Creates innovative patterns that blend traditional techniques with modern aesthetics.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    color: "text-coral-terracotta",
    social: [Instagram, FaDribbble],
  },
  {
    name: "Lisa Chen",
    role: "Customer Experience",
    description:
      "Ensures every customer receives personalized attention and exceptional service.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    color: "text-orchid-purple",
    social: [Instagram, Twitter],
  },
];

const testimonials = [
  {
    name: "Jessica Davis",
    location: "Bride, San Francisco",
    text: "The bouquet Sarah created for my wedding was absolutely magical. Three years later, it still looks as beautiful as the day I received it. The attention to detail is incredible!",
    initials: "JD",
    color: "bg-rose-pink",
  },
  {
    name: "Michael Thompson",
    location: "Customer, Portland",
    text: "I ordered a custom arrangement for my mother's birthday, and the team exceeded all expectations. The quality is outstanding, and the colors were exactly what I envisioned.",
    initials: "MT",
    color: "bg-coral-terracotta",
  },
];

export default function About() {
  return (
    <>
      {/* Header */}
      <section className="gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl font-bold text-white mb-6">
            Welcome to Elegance
          </h1>
          <p className="text-xl text-white/90">
            Where passion meets artistry in every handcrafted stitch
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-playfair text-4xl font-bold mb-6 text-gray-800">
                The Heart and Soul of Our Craft
              </h2>
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Founder crafting crochet flowers"
                className="rounded-2xl shadow-lg w-full mb-6"
              />
              <p className="text-gray-600 text-lg leading-relaxed">
                Founded in 2019 by Sarah Mitchell, Secret Garden Stitches began
                as a small passion project in her home studio. After years of
                creating beautiful pieces for friends and family, Sarah decided
                to share her love for sustainable, handcrafted beauty with the
                world. Each bouquet tells a story of dedication, creativity, and
                environmental consciousness.
              </p>
            </div>
            <div>
              <h3 className="font-playfair text-3xl font-semibold mb-6 text-gray-800">
                Our Commitment to Sustainable Craftsmanship
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-rose-pink rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Leaf className="text-white w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Eco-Friendly Materials
                    </h4>
                    <p className="text-gray-600">
                      We source only the finest organic cotton and bamboo yarns,
                      ensuring our creations are as kind to the earth as they
                      are beautiful to behold.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-coral-terracotta rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <Heart className="text-white w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">
                      Local Community Support
                    </h4>
                    <p className="text-gray-600">
                      We partner with local artisans and suppliers, supporting
                      our community while maintaining the highest quality
                      standards in every piece we create.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Sections */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center bg-gray-50 p-8 rounded-xl"
              >
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

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-gray-800">
              Meet Our Creative Team
            </h2>
            <p className="text-gray-600 text-lg">
              The talented artisans behind every beautiful creation
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-xl shadow-sm"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="font-playfair text-2xl font-semibold mb-2">
                  {member.name}
                </h3>
                <p className={`${member.color} font-medium mb-4`}>
                  {member.role}
                </p>
                <p className="text-gray-600 mb-4">{member.description}</p>
                <div className="flex justify-center space-x-4">
                  {member.social.map((SocialIcon, socialIndex) => (
                    <a
                      key={socialIndex}
                      href="#"
                      className={`text-gray-400 hover:${member.color} transition-colors`}
                    >
                      <SocialIcon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-gray-800">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Real stories from happy customers
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-6">
            Ready to Start Your Custom Project?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's create something beautiful together
          </p>
          <Link href="/contact">
            <Button className="bg-white text-rose-pink hover:bg-white/90 rounded-full px-8 py-4 font-semibold">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
