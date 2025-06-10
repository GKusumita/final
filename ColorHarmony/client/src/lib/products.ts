export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  color: string;
  category: 'bouquet' | 'arrangement' | 'custom';
  featured: boolean;
}

export const featuredProducts: Product[] = [
  {
    id: "rose-dreams-bouquet",
    name: "Rose Dreams Bouquet",
    price: 89,
    description: "Delicate pink roses with whimsical greenery",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "text-rose-pink",
    category: "bouquet",
    featured: true,
  },
  {
    id: "sunset-garden",
    name: "Sunset Garden",
    price: 75,
    description: "Warm coral tones with rustic charm",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "text-coral-terracotta",
    category: "bouquet",
    featured: true,
  },
  {
    id: "orchid-elegance",
    name: "Orchid Elegance",
    price: 95,
    description: "Sophisticated purple blooms",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "text-orchid-purple",
    category: "bouquet",
    featured: true,
  },
  {
    id: "pastel-dreams",
    name: "Pastel Dreams",
    price: 68,
    description: "Soft mixed pastels for any occasion",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "text-dusty-mauve",
    category: "bouquet",
    featured: true,
  },
  {
    id: "blush-romance",
    name: "Blush Romance",
    price: 82,
    description: "Romantic blush tones for weddings",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "text-blush-pink",
    category: "bouquet",
    featured: true,
  },
  {
    id: "garden-party",
    name: "Garden Party",
    price: 78,
    description: "Vibrant mixed colors for celebrations",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "text-soft-red",
    category: "bouquet",
    featured: true,
  },
];

export const allProducts: Product[] = [
  ...featuredProducts,
  {
    id: "classic-rose-bouquet",
    name: "Classic Rose Bouquet",
    price: 89,
    description: "Timeless pink roses perfect for any romantic occasion",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "text-rose-pink",
    category: "bouquet",
    featured: false,
  },
  {
    id: "wildflower-meadow",
    name: "Wildflower Meadow",
    price: 75,
    description: "Rustic charm with mixed wildflower varieties",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "text-coral-terracotta",
    category: "bouquet",
    featured: false,
  },
  {
    id: "lavender-dreams",
    name: "Lavender Dreams",
    price: 95,
    description: "Calming purple hues with aromatic appeal",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "text-orchid-purple",
    category: "bouquet",
    featured: false,
  },
  {
    id: "bridal-elegance",
    name: "Bridal Elegance",
    price: 125,
    description: "Pure white and cream for your special day",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "text-dusty-mauve",
    category: "bouquet",
    featured: false,
  },
  {
    id: "autumn-harvest",
    name: "Autumn Harvest",
    price: 88,
    description: "Warm fall colors in rich textures",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "text-soft-red",
    category: "bouquet",
    featured: false,
  },
  {
    id: "spring-garden",
    name: "Spring Garden",
    price: 82,
    description: "Fresh pastels celebrating new beginnings",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "text-blush-pink",
    category: "bouquet",
    featured: false,
  },
  {
    id: "enchanted-forest",
    name: "Enchanted Forest",
    price: 92,
    description: "Deep greens with mystical charm",
    image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "text-coral-terracotta",
    category: "arrangement",
    featured: false,
  },
  {
    id: "coral-reef",
    name: "Coral Reef",
    price: 98,
    description: "Ocean-inspired coral and terracotta blooms",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "text-coral-terracotta",
    category: "arrangement",
    featured: false,
  },
  {
    id: "midnight-garden",
    name: "Midnight Garden",
    price: 105,
    description: "Rich purples and deep magentas",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    color: "text-orchid-purple",
    category: "arrangement",
    featured: false,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find(product => product.id === id);
};

export const getProductsByCategory = (category: Product['category']): Product[] => {
  return allProducts.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return allProducts.filter(product => product.featured);
};
