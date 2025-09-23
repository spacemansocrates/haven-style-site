import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Shield, Sparkles } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import { products, categories } from '@/data/products';
import heroImage from '@/assets/hero-living-room.jpg';

const Index = () => {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const newArrivals = products.filter(p => p.new).slice(0, 4);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-hero opacity-90"
        />
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-background">
            Curated Comfort, Delivered to Your Door
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-background/90">
            Transform your space with handpicked home furnishings that blend style and comfort
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-background text-background hover:bg-background hover:text-foreground">
              View Rooms
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Truck className="h-10 w-10 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">On orders over $150</p>
            </div>
            <div className="text-center">
              <Shield className="h-10 w-10 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-muted-foreground">Handpicked products only</p>
            </div>
            <div className="text-center">
              <Sparkles className="h-10 w-10 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Design Experts</h3>
              <p className="text-muted-foreground">Free styling consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/products?category=${category.name}`}
                className="group"
              >
                <div className="bg-card rounded-lg p-6 text-center transition-all duration-300 hover:shadow-md hover:scale-105">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className="font-medium">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} items</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Featured Products</h2>
            <Button variant="outline" asChild>
              <Link to="/products">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">New Arrivals</h2>
            <Button variant="outline" asChild>
              <Link to="/products?new=true">
                Shop New
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration CTA */}
      <section className="py-20 bg-gradient-warm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-background">
            Need Design Inspiration?
          </h2>
          <p className="text-xl mb-8 text-background/90 max-w-2xl mx-auto">
            Explore our curated room designs and get expert tips on creating your perfect space
          </p>
          <Button size="lg" className="bg-background text-foreground hover:bg-background/90">
            Browse Inspiration
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;