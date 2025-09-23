import { Search, ShoppingBag, Heart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { useCart } from '@/store/cart';
import { useWishlist } from '@/store/wishlist';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import Cart from '@/components/cart/Cart';

const Header = () => {
  const { getTotalItems, toggleCart } = useCart();
  const { items: wishlistItems } = useWishlist();
  const [searchOpen, setSearchOpen] = useState(false);
  const totalItems = getTotalItems();

  return (
    <>
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        {/* Top Bar */}
        <div className="bg-muted/50 text-sm py-2">
          <div className="container mx-auto px-4 flex justify-center">
            <p className="text-muted-foreground">Free shipping on orders over $150 | Easy returns</p>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold">Decor Den</h1>
            </Link>

            {/* Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/products" className="text-foreground/80 hover:text-foreground transition-colors">
                Shop All
              </Link>
              <Link to="/products?category=Furniture" className="text-foreground/80 hover:text-foreground transition-colors">
                Furniture
              </Link>
              <Link to="/products?category=Rugs" className="text-foreground/80 hover:text-foreground transition-colors">
                Rugs
              </Link>
              <Link to="/products?category=Lighting" className="text-foreground/80 hover:text-foreground transition-colors">
                Lighting
              </Link>
              <Link to="/products?category=Decor" className="text-foreground/80 hover:text-foreground transition-colors">
                Decor
              </Link>
              <Link to="/inspiration" className="text-foreground/80 hover:text-foreground transition-colors">
                Inspiration
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              {/* Search - Desktop */}
              <div className="hidden md:flex items-center">
                {searchOpen ? (
                  <div className="flex items-center space-x-2">
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="w-64"
                      autoFocus
                      onBlur={() => setSearchOpen(false)}
                    />
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSearchOpen(true)}
                  >
                    <Search className="h-5 w-5" />
                  </Button>
                )}
              </div>

              {/* User */}
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>

              {/* Wishlist */}
              <Link to="/wishlist">
                <Button variant="ghost" size="icon" className="relative">
                  <Heart className="h-5 w-5" />
                  {wishlistItems.length > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-primary text-primary-foreground">
                      {wishlistItems.length}
                    </Badge>
                  )}
                </Button>
              </Link>

              {/* Cart */}
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={toggleCart}
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-primary text-primary-foreground">
                    {totalItems}
                  </Badge>
                )}
              </Button>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild className="md:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
      
      {/* Cart Sidebar */}
      <Cart />
    </>
  );
};

export default Header;