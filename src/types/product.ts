export type Gender = "Unisex" | "Men" | "Women";
export type ProductType = "Individual" | "Limited Edition" | "Travel Set";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  family: string;
  gender: Gender;
  type: ProductType;
  isLimited: boolean;
  size: string;
  images: string[];
  description: string;
  composition?: string[];
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
}

export interface CartItem {
  product: Product;
  quantity: number;
}
