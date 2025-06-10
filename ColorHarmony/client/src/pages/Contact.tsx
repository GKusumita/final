import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Instagram, Linkedin, Twitter } from "lucide-react";
import { FaDribbble } from "react-icons/fa";

const team = [
  {
    name: "Sarah Mitchell",
    role: "Founder & Lead Artisan",
    email: "sarah@secretgardenstitches.com",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b830?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    color: "text-rose-pink",
    social: [Instagram, Linkedin],
  },
  {
    name: "Emma Rodriguez",
    role: "Pattern Designer",
    email: "emma@secretgardenstitches.com",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    color: "text-coral-terracotta",
    social: [Instagram, FaDribbble],
  },
  {
    name: "Lisa Chen",
    role: "Customer Experience",
    email: "lisa@secretgardenstitches.com",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    color: "text-orchid-purple",
    social: [Instagram, Twitter],
  },
];

const faqs = [
  {
    question: "How long does a custom order take?",
    answer:
      "Custom orders typically take 2-4 weeks depending on complexity. We'll provide a detailed timeline during your consultation.",
  },
  {
    question: "Do you offer wedding consultations?",
    answer:
      "Yes! We offer complimentary wedding consultations to discuss your vision, color palette, and specific needs for your special day.",
  },
  {
    question: "Can I visit your studio?",
    answer:
      "Absolutely! We welcome studio visits by appointment. Contact us to schedule a time to see our process and discuss your project in person.",
  },
  {
    question: "What's included in a custom consultation?",
    answer:
      "Our consultations include design discussion, material selection, timeline planning, and pricing. We'll work with you to understand your vision and create a detailed proposal.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* Header */}
      <section className="gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-white/90">
            We'd love to hear from you and help bring your vision to life
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-playfair text-3xl font-bold mb-8 text-gray-800">
                Let's Connect
              </h2>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-rose-pink/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="text-rose-pink w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600">hello@secretgardenstitches.com</p>
                    <p className="text-gray-600">support@secretgardenstitches.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-coral-terracotta/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="text-coral-terracotta w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-gray-600 text-sm">Mon-Fri 9AM-6PM PST</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orchid-purple/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="text-orchid-purple w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Visit Our Studio</h3>
                    <p className="text-gray-600">
                      123 Craft Lane
                      <br />
                      Art District
                      <br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <Clock className="text-dusty-mauve w-6 h-6 mr-3" />
                  <h3 className="font-semibold text-lg">Studio Hours</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-playfair text-3xl font-bold mb-8 text-gray-800">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-pink/50 focus:border-rose-pink"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-pink/50 focus:border-rose-pink"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-pink/50 focus:border-rose-pink"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-pink/50 focus:border-rose-pink"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </Label>
                  <Select onValueChange={handleSubjectChange} value={formData.subject}>
                    <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-pink/50 focus:border-rose-pink">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="custom">Custom Order</SelectItem>
                      <SelectItem value="wedding">Wedding Consultation</SelectItem>
                      <SelectItem value="bulk">Bulk Order</SelectItem>
                      <SelectItem value="support">Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-pink/50 focus:border-rose-pink resize-none"
                    placeholder="Tell us about your project or how we can help..."
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-rose-pink text-white hover:bg-rose-pink/90 py-4 rounded-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-gray-800">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg">
              The passionate people behind every creation
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
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="font-playfair text-xl font-semibold mb-2">
                  {member.name}
                </h3>
                <p className={`${member.color} font-medium mb-4`}>
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">{member.email}</p>
                <div className="flex justify-center space-x-3">
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold mb-4 text-gray-800">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Quick answers to common questions
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-4xl font-bold text-white mb-6">
            Ready to Start Creating?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join our newsletter for exclusive designs and crafting inspiration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/90 border-0 focus:ring-2 focus:ring-white/50 rounded-full px-6 py-4"
            />
            <Button className="bg-white text-rose-pink hover:bg-white/90 rounded-full px-8 py-4 font-semibold">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
