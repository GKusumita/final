import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    slug: "traditional-techniques-modern-bouquets",
    title: "The Art of Crochet: Traditional Techniques for Modern Bouquets",
    excerpt:
      "Discover the time-honored techniques we use to create our stunning crochet bouquets, passed down through generations of skilled artisans...",
    author: "Sarah Mitchell",
    date: "March 15, 2024",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    color: "text-rose-pink",
  },
  {
    slug: "sustainable-crafting-materials",
    title: "Sustainable Crafting: Why Eco-Friendly Materials Matter",
    excerpt:
      "Learn about our commitment to sustainability and how choosing eco-friendly materials makes a difference for our planet and your home...",
    author: "Emma Rodriguez",
    date: "March 8, 2024",
    image:
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    color: "text-coral-terracotta",
  },
  {
    slug: "wedding-planning-crochet-bouquets",
    title: "Planning Your Perfect Wedding with Crochet Bouquets",
    excerpt:
      "Everything you need to know about incorporating handcrafted crochet bouquets into your special day, from design to coordination...",
    author: "Lisa Chen",
    date: "February 28, 2024",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    color: "text-orchid-purple",
  },
  {
    slug: "handcrafted-vs-fresh-flowers",
    title: "The Perfect Gift: When to Choose Handcrafted Over Fresh",
    excerpt:
      "Discover the occasions and reasons why a handcrafted crochet bouquet makes a more meaningful and lasting gift than traditional flowers...",
    author: "Sarah Mitchell",
    date: "February 20, 2024",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
    color: "text-dusty-mauve",
  },
];

export default function Blog() {
  return (
    <>
      {/* Header */}
      <section className="gradient-bg py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-5xl font-bold text-white mb-6">
            Crochet & Gifting
          </h1>
          <p className="text-xl text-white/90">
            Tips, inspiration, and stories from the world of handcrafted beauty
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>By {post.author}</span>
                  </div>
                  <h3 className="font-playfair text-xl font-semibold mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="link"
                      className={`${post.color} font-medium hover:underline p-0`}
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-rose-pink text-white hover:bg-rose-pink/90 rounded-full px-8 py-3 font-semibold">
              View All Posts
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
