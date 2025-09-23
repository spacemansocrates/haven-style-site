import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { FilterOptions } from '@/types/product';
import { useState } from 'react';

interface ProductFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
}

const categories = ['Furniture', 'Rugs', 'Lighting', 'Decor', 'Art', 'Appliances'];
const colors = ['White', 'Black', 'Grey', 'Brown', 'Beige', 'Navy', 'Green'];
const materials = ['Wood', 'Metal', 'Fabric', 'Leather', 'Glass', 'Ceramic'];
const styles = ['Modern', 'Traditional', 'Minimalist', 'Bohemian', 'Industrial', 'Rustic'];

const ProductFilter = ({ onFilterChange }: ProductFilterProps) => {
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: [0, 2000],
    category: '',
    colors: [],
    materials: [],
    styles: [],
  });

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleArrayFilter = (key: 'colors' | 'materials' | 'styles', value: string) => {
    const current = filters[key] || [];
    const updated = current.includes(value)
      ? current.filter((item) => item !== value)
      : [...current, value];
    handleFilterChange(key, updated);
  };

  const clearFilters = () => {
    const clearedFilters: FilterOptions = {
      priceRange: [0, 2000],
      category: '',
      colors: [],
      materials: [],
      styles: [],
    };
    setFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <Slider
          value={filters.priceRange}
          onValueChange={(value) => handleFilterChange('priceRange', value)}
          max={2000}
          step={50}
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>${filters.priceRange?.[0]}</span>
          <span>${filters.priceRange?.[1]}</span>
        </div>
      </div>

      <Separator />

      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                checked={filters.category === category}
                onCheckedChange={(checked) =>
                  handleFilterChange('category', checked ? category : '')
                }
              />
              <Label className="text-sm font-normal cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Colors */}
      <div>
        <h3 className="font-semibold mb-3">Colors</h3>
        <div className="grid grid-cols-2 gap-2">
          {colors.map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <Checkbox
                checked={filters.colors?.includes(color)}
                onCheckedChange={() => toggleArrayFilter('colors', color)}
              />
              <Label className="text-sm font-normal cursor-pointer">{color}</Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Materials */}
      <div>
        <h3 className="font-semibold mb-3">Materials</h3>
        <div className="space-y-2">
          {materials.map((material) => (
            <div key={material} className="flex items-center space-x-2">
              <Checkbox
                checked={filters.materials?.includes(material)}
                onCheckedChange={() => toggleArrayFilter('materials', material)}
              />
              <Label className="text-sm font-normal cursor-pointer">
                {material}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Styles */}
      <div>
        <h3 className="font-semibold mb-3">Styles</h3>
        <div className="space-y-2">
          {styles.map((style) => (
            <div key={style} className="flex items-center space-x-2">
              <Checkbox
                checked={filters.styles?.includes(style)}
                onCheckedChange={() => toggleArrayFilter('styles', style)}
              />
              <Label className="text-sm font-normal cursor-pointer">{style}</Label>
            </div>
          ))}
        </div>
      </div>

      <Button onClick={clearFilters} variant="outline" className="w-full">
        Clear Filters
      </Button>
    </div>
  );
};

export default ProductFilter;