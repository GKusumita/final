import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { FaPinterest } from "react-icons/fa";

export default function Newsletter() {
  return (
    <section className="py-20 gradient-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-4xl font-bold text-white mb-6">
          Join Our Creative Community
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Get exclusive access to new designs, crafting tips, and special
          offers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-white/90 border-0 focus:ring-2 focus:ring-white/50 rounded-full px-6 py-4"
          />
          <Button className="bg-white text-rose-pink hover:bg-white/90 rounded-full px-8 py-4 font-semibold">
            Subscribe
          </Button>
        </div>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-white hover:text-white/80 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-white hover:text-white/80 transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-white hover:text-white/80 transition-colors"
          >
            <FaPinterest className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-white hover:text-white/80 transition-colors"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
