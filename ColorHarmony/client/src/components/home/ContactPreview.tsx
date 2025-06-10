import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-4xl font-bold mb-6 text-gray-800">
          Ready to Create Something Beautiful?
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Get in touch with our team to discuss your custom crochet bouquet
          needs.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Mail className="text-rose-pink w-8 h-8 mx-auto mb-4" />
            <p className="font-semibold">Email Us</p>
            <p className="text-gray-600">hello@secretgardenstitches.com</p>
          </div>
          <div>
            <Phone className="text-coral-terracotta w-8 h-8 mx-auto mb-4" />
            <p className="font-semibold">Call Us</p>
            <p className="text-gray-600">(555) 123-4567</p>
          </div>
          <div>
            <MapPin className="text-orchid-purple w-8 h-8 mx-auto mb-4" />
            <p className="font-semibold">Visit Us</p>
            <p className="text-gray-600">123 Craft Lane, Art District</p>
          </div>
        </div>
        <Link href="/contact">
          <Button className="bg-rose-pink text-white hover:bg-rose-pink/90 rounded-full px-8 py-3 font-semibold">
            Contact Us
          </Button>
        </Link>
      </div>
    </section>
  );
}
