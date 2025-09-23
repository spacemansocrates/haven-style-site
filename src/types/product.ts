export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  images: string[];
  category: string;
  subcategory?: string;
  description: string;
  materials?: string[];
  dimensions?: {
    width?: string;
    height?: string;
    depth?: string;
    diameter?: string;
  };
  careInstructions?: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  colors?: string[];
  style?: string;
  featured?: boolean;
  new?: boolean;
  trending?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface FilterOptions {
  category?: string;
  priceRange?: [number, number];
  colors?: string[];
  materials?: string[];
  styles?: string[];
  rating?: number;
}