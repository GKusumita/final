import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  initials: string;
  color: string;
}

export default function TestimonialCard({
  name,
  location,
  text,
  initials,
  color,
}: TestimonialCardProps) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl">
      <div className="flex items-center mb-4">
        <div className="flex text-yellow-400 mr-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-current" />
          ))}
        </div>
      </div>
      <p className="text-gray-600 mb-6 italic">"{text}"</p>
      <div className="flex items-center">
        <div
          className={`w-12 h-12 ${color} rounded-full flex items-center justify-center mr-4`}
        >
          <span className="text-white font-semibold">{initials}</span>
        </div>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
}
