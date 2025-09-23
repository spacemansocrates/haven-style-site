import { Product } from '@/types/product';
import velvetSofa from '@/assets/products/velvet-sofa.jpg';
import juteRug from '@/assets/products/jute-rug.jpg';
import ceramicLamp from '@/assets/products/ceramic-lamp.jpg';
import walnutTable from '@/assets/products/walnut-table.jpg';
import abstractArt from '@/assets/products/abstract-art.jpg';
import linenPillows from '@/assets/products/linen-pillows.jpg';
import marbleCoffeeTable from '@/assets/products/marble-coffee-table.jpg';
import rattanPendant from '@/assets/products/rattan-pendant.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Modern Velvet Sofa',
    price: 1299,
    salePrice: 999,
    images: [velvetSofa],
    category: 'Furniture',
    subcategory: 'Sofas',
    description: 'Luxurious velvet upholstery meets contemporary design in this stunning sofa. Perfect for modern living rooms.',
    materials: ['Velvet', 'Hardwood Frame', 'High-density Foam'],
    dimensions: {
      width: '84"',
      height: '32"',
      depth: '36"'
    },
    careInstructions: 'Vacuum regularly. Professional cleaning recommended.',
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    colors: ['Navy', 'Emerald', 'Blush'],
    style: 'Modern',
    featured: true,
    trending: true,
    new: false
  },
  {
    id: '2',
    name: 'Handwoven Jute Area Rug',
    price: 399,
    images: [juteRug],
    category: 'Rugs',
    subcategory: 'Area Rugs',
    description: 'Natural jute fibers create texture and warmth. Eco-friendly and durable.',
    materials: ['100% Jute'],
    dimensions: {
      width: '8\'',
      height: '10\''
    },
    careInstructions: 'Vacuum regularly. Spot clean with mild detergent.',
    rating: 4.8,
    reviewCount: 89,
    inStock: true,
    colors: ['Natural'],
    style: 'Bohemian',
    featured: false,
    trending: true,
    new: false
  },
  {
    id: '3',
    name: 'Ceramic Table Lamp',
    price: 149,
    salePrice: 119,
    images: [ceramicLamp],
    category: 'Lighting',
    subcategory: 'Table Lamps',
    description: 'Artisan-crafted ceramic base with linen shade. Adds ambient lighting to any space.',
    materials: ['Ceramic', 'Linen'],
    dimensions: {
      height: '24"',
      diameter: '14"'
    },
    careInstructions: 'Dust with soft cloth. Use appropriate bulb wattage.',
    rating: 4.6,
    reviewCount: 45,
    inStock: true,
    colors: ['White', 'Sage', 'Terracotta'],
    style: 'Traditional',
    featured: false,
    trending: false,
    new: true
  },
  {
    id: '4',
    name: 'Walnut Dining Table',
    price: 1899,
    images: [walnutTable],
    category: 'Furniture',
    subcategory: 'Dining Tables',
    description: 'Solid walnut construction with live edge detail. Seats 6-8 comfortably.',
    materials: ['Solid Walnut', 'Steel Legs'],
    dimensions: {
      width: '84"',
      height: '30"',
      depth: '40"'
    },
    careInstructions: 'Oil periodically. Use coasters and placemats.',
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    style: 'Rustic Modern',
    featured: true,
    trending: false,
    new: false
  },
  {
    id: '5',
    name: 'Abstract Canvas Art',
    price: 299,
    images: [abstractArt],
    category: 'Art',
    subcategory: 'Wall Art',
    description: 'Original abstract painting on canvas. Ready to hang.',
    dimensions: {
      width: '48"',
      height: '36"'
    },
    rating: 4.7,
    reviewCount: 23,
    inStock: true,
    style: 'Modern',
    featured: false,
    trending: false,
    new: true
  },
  {
    id: '6',
    name: 'Linen Throw Pillows',
    price: 59,
    salePrice: 45,
    images: [linenPillows],
    category: 'Decor',
    subcategory: 'Pillows',
    description: 'Set of 2 premium linen throw pillows with hidden zippers.',
    materials: ['100% Linen', 'Duck Feather Insert'],
    dimensions: {
      width: '20"',
      height: '20"'
    },
    careInstructions: 'Machine wash cold, tumble dry low.',
    rating: 4.4,
    reviewCount: 156,
    inStock: true,
    colors: ['Oatmeal', 'Sage', 'Charcoal', 'Terracotta'],
    style: 'Minimalist',
    featured: false,
    trending: true,
    new: false
  },
  {
    id: '7',
    name: 'Marble Coffee Table',
    price: 899,
    images: [marbleCoffeeTable],
    category: 'Furniture',
    subcategory: 'Coffee Tables',
    description: 'Carrara marble top with brass legs. A statement piece for any living room.',
    materials: ['Carrara Marble', 'Brass'],
    dimensions: {
      width: '48"',
      height: '16"',
      depth: '24"'
    },
    careInstructions: 'Seal marble annually. Clean spills immediately.',
    rating: 4.8,
    reviewCount: 92,
    inStock: true,
    style: 'Luxury',
    featured: true,
    trending: true,
    new: false
  },
  {
    id: '8',
    name: 'Rattan Pendant Light',
    price: 229,
    images: [rattanPendant],
    category: 'Lighting',
    subcategory: 'Pendant Lights',
    description: 'Hand-woven rattan creates beautiful light patterns.',
    materials: ['Natural Rattan'],
    dimensions: {
      diameter: '20"',
      height: '18"'
    },
    careInstructions: 'Dust regularly with soft brush.',
    rating: 4.5,
    reviewCount: 38,
    inStock: true,
    style: 'Bohemian',
    featured: false,
    trending: false,
    new: true
  }
];

export const categories = [
  { name: 'Furniture', count: 245 },
  { name: 'Rugs', count: 89 },
  { name: 'Lighting', count: 156 },
  { name: 'Decor', count: 423 },
  { name: 'Art', count: 78 },
  { name: 'Appliances', count: 134 }
];