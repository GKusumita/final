import { useParams } from "wouter";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const blogPosts = {
  "traditional-techniques-modern-bouquets": {
    title: "The Art of Crochet: Traditional Techniques for Modern Bouquets",
    author: "Sarah Mitchell",
    date: "March 15, 2024",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    content: {
      intro:
        "Crochet has been a cherished art form for centuries, but at Secret Garden Stitches, we've adapted these time-honored techniques to create something entirely new: everlasting bouquets that capture the beauty of nature in handcrafted perfection.",
      sections: [
        {
          title: "The Foundation: Understanding Basic Stitches",
          content:
            "Every magnificent bouquet begins with mastering the fundamental stitches. The single crochet, double crochet, and half-double crochet form the building blocks of our floral creations. Each stitch serves a specific purpose in recreating the natural curves and textures found in real flowers.",
        },
        {
          title: "Advanced Techniques for Realistic Petals",
          content:
            "Creating realistic flower petals requires specialized techniques that we've refined over years of practice. The key is understanding how to manipulate tension and stitch placement to achieve natural-looking curves and dimensional shapes.",
        },
        {
          title: "The Finishing Touch: Assembly and Styling",
          content:
            "The final assembly of a crochet bouquet is where artistry truly shines. It's not just about putting pieces together; it's about understanding balance, color harmony, and the natural way flowers grow and interact with each other.",
        },
      ],
      quote:
        "The beauty of crochet lies not just in the final product, but in the meditative rhythm of each stitch, the gradual transformation of simple yarn into something extraordinary.",
      keyTakeaways: [
        "Master basic stitches before attempting complex flower patterns",
        "Tension control is crucial for achieving realistic petal shapes",
        "Quality materials make a significant difference in the final product",
      ],
    },
  },
  "sustainable-crafting-materials": {
    title: "Sustainable Crafting: Why Eco-Friendly Materials Matter",
    author: "Emma Rodriguez",
    date: "March 8, 2024",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    content: {
      intro:
        "In an era where environmental consciousness is more important than ever, choosing sustainable materials for our craft isn't just a trend—it's a responsibility we take seriously at Secret Garden Stitches.",
      sections: [
        {
          title: "The Environmental Impact of Traditional Crafting",
          content:
            "Many traditional crafting materials come with hidden environmental costs. Synthetic yarns are often made from petroleum-based products, contributing to pollution and taking centuries to decompose.",
        },
        {
          title: "Our Commitment to Organic Materials",
          content:
            "We source only the finest organic cotton and bamboo yarns, ensuring our creations are biodegradable, sustainable, and gentle on both the environment and the artisans who work with them.",
        },
        {
          title: "The Quality Difference",
          content:
            "Sustainable materials aren't just better for the planet—they often produce superior results. Natural fibers have better drape, color retention, and durability than their synthetic counterparts.",
        },
      ],
      quote:
        "Sustainability isn't about sacrifice; it's about making conscious choices that benefit both our craft and our planet.",
      keyTakeaways: [
        "Organic materials are biodegradable and environmentally friendly",
        "Natural fibers often provide superior quality and longevity",
        "Supporting sustainable practices helps build a better future",
      ],
    },
  },
  "wedding-planning-crochet-bouquets": {
    title: "Planning Your Perfect Wedding with Crochet Bouquets",
    author: "Lisa Chen",
    date: "February 28, 2024",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    content: {
      intro:
        "Your wedding day is one of the most important days of your life, and every detail matters. Choosing a crochet bouquet isn't just about aesthetics—it's about creating a lasting memory that you can treasure forever.",
      sections: [
        {
          title: "Why Choose Crochet for Your Wedding",
          content:
            "Unlike fresh flowers that wilt within days, a crochet bouquet remains beautiful forever. You can display it in your home as a constant reminder of your special day, and even pass it down as a family heirloom.",
        },
        {
          title: "Coordinating Colors with Your Theme",
          content:
            "Our artisans work closely with you to match your bouquet perfectly to your wedding colors. We can create custom shades and combinations that complement your dress, venue, and overall aesthetic.",
        },
        {
          title: "Timeline and Planning Considerations",
          content:
            "Custom wedding bouquets require 6-8 weeks lead time. We recommend scheduling your consultation at least 3 months before your wedding to ensure everything is perfect for your big day.",
        },
      ],
      quote:
        "A wedding bouquet should be as unique and lasting as the love it represents.",
      keyTakeaways: [
        "Crochet bouquets last forever as beautiful keepsakes",
        "Custom colors can perfectly match your wedding theme",
        "Plan ahead with 6-8 weeks lead time for custom orders",
      ],
    },
  },
  "handcrafted-vs-fresh-flowers": {
    title: "The Perfect Gift: When to Choose Handcrafted Over Fresh",
    author: "Sarah Mitchell",
    date: "February 20, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    content: {
      intro:
        "While fresh flowers have their place, there are many occasions where a handcrafted crochet bouquet makes a more meaningful, lasting, and practical gift choice.",
      sections: [
        {
          title: "Occasions Perfect for Handcrafted Bouquets",
          content:
            "Handcrafted bouquets are ideal for milestone celebrations like anniversaries, graduations, new baby arrivals, and housewarmings. Any occasion where you want to give something that will be treasured for years to come.",
        },
        {
          title: "The Emotional Value of Handmade",
          content:
            "There's something deeply personal about receiving a handcrafted gift. The recipient knows that hours of skilled labor and artistic vision went into creating something unique just for them.",
        },
        {
          title: "Practical Considerations",
          content:
            "Crochet bouquets never need water, won't trigger allergies, can be shipped anywhere without special handling, and look beautiful in any season. They're perfect for those with busy lifestyles or who travel frequently.",
        },
      ],
      quote:
        "The best gifts are those that show thoughtfulness, last through time, and bring joy every time they're seen.",
      keyTakeaways: [
        "Handcrafted gifts carry deeper emotional significance",
        "Perfect for milestone occasions and lasting memories",
        "Practical benefits include no maintenance and allergy-free",
      ],
    },
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600">
            The blog post you're looking for doesn't exist.
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
            <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>By {post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.readTime}</span>
            </div>
            <h1 className="font-playfair text-5xl font-bold mb-6 text-gray-800">
              {post.title}
            </h1>
            <img
              src={post.image}
              alt={post.title}
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.content.intro}
            </p>

            {post.content.sections.map((section, index) => (
              <div key={index}>
                <h2 className="font-playfair text-3xl font-bold mt-12 mb-6 text-gray-800">
                  {section.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {section.content}
                </p>
              </div>
            ))}

            <blockquote className="bg-gray-50 border-l-4 border-rose-pink p-6 my-8 italic text-gray-700">
              "{post.content.quote}" - {post.author}
            </blockquote>

            {/* Key Takeaways */}
            <div className="bg-gradient-to-r from-rose-pink/10 to-orchid-purple/10 p-8 rounded-xl my-8">
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-gray-800">
                Key Takeaways
              </h3>
              <ul className="space-y-3">
                {post.content.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-rose-pink w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-rose-pink to-orchid-purple rounded-2xl p-8 text-center text-white">
            <h3 className="font-playfair text-3xl font-bold mb-4">
              Ready to Experience Our Artistry?
            </h3>
            <p className="text-xl mb-6 text-white/90">
              Discover our collection of handcrafted crochet bouquets
            </p>
            <Link href="/shop">
              <Button className="bg-white text-rose-pink hover:bg-white/90 rounded-full px-8 py-3 font-semibold">
                View Our Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
