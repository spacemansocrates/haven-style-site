import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag } from 'lucide-react';
import { useWishlist } from '@/store/wishlist';
import { useCart } from '@/store/cart';

const Wishlist = () => {
  const { items, clearWishlist } = useWishlist();
  const { addItem } = useCart();

  const handleAddAllToCart = () => {
    items.forEach((item) => {
      addItem({ ...item, quantity: 1 });
    });
    clearWishlist();
  };

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-4xl font-bold mb-4">My Wishlist</h1>
            <p className="text-muted-foreground">
              {items.length === 0
                ? 'Your wishlist is empty'
                : `${items.length} item${items.length === 1 ? '' : 's'} saved`}
            </p>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground mb-8">
                Save your favorite items here to purchase later
              </p>
              <Button size="lg" asChild>
                <Link to="/products">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Start Shopping
                </Link>
              </Button>
            </div>
          ) : (
            <>
              {/* Actions */}
              <div className="flex justify-between items-center mb-8">
                <Button
                  variant="outline"
                  onClick={clearWishlist}
                >
                  Clear Wishlist
                </Button>
                <Button
                  className="bg-primary hover:bg-primary-hover"
                  onClick={handleAddAllToCart}
                >
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Add All to Cart
                </Button>
              </div>

              {/* Wishlist Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {items.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Wishlist;