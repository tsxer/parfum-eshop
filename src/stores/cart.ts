import { defineStore } from "pinia";
import type { Product } from "@/types/product";

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  size: string;
  category: string;
  image: string;
  images: string[];
  slug: string;
}

export interface WishlistItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  slug: string;
  family: string;
}

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as CartItem[],
    wishlistItems: [] as WishlistItem[],
    isCartOpen: false,
    activeTab: "cart" as "cart" | "wishlist"
  }),

  getters: {
    cartCount: (state): number => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },

    cartTotal: (state): number => {
      return state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    wishlistCount: (state): number => {
      return state.wishlistItems.length;
    },

    isInCart:
      state =>
      (productId: number): boolean => {
        return state.items.some(item => item.id === productId);
      },

    isInWishlist:
      state =>
      (productId: number): boolean => {
        return state.wishlistItems.some(item => item.id === productId);
      },

    getItemQuantity:
      state =>
      (productId: number): number => {
        const item = state.items.find(item => item.id === productId);
        return item ? item.quantity : 0;
      }
  },

  actions: {
    addToCart(product: Product, quantity: number = 1, size: string = "100 ML") {
      const existingItem = this.items.find(
        item => item.id === product.id && item.size === size
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity,
          size,
          category:
            product.type === "Travel Set" ? "TRAVEL SET" : "EAU DE PARFUM",
          image: product.images[0],
          images: product.images,
          slug: product.slug
        });
      }

      this.removeFromWishlist(product.id);

      this.isCartOpen = true;
      this.activeTab = "cart";
    },

    removeFromCart(productId: number) {
      const index = this.items.findIndex(item => item.id === productId);
      if (index > -1) {
        this.items.splice(index, 1);
      }
    },

    updateQuantity(productId: number, quantity: number) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
        return;
      }

      const item = this.items.find(item => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },

    incrementQuantity(productId: number) {
      const item = this.items.find(item => item.id === productId);
      if (item) {
        item.quantity++;
      }
    },

    decrementQuantity(productId: number) {
      const item = this.items.find(item => item.id === productId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          this.removeFromCart(productId);
        }
      }
    },

    clearCart() {
      this.items = [];
    },

    addToWishlist(product: Product) {
      if (!this.isInWishlist(product.id)) {
        this.wishlistItems.push({
          id: product.id,
          name: product.name,
          price: product.price,
          category:
            product.type === "Travel Set" ? "TRAVEL SET" : "EAU DE PARFUM",
          image: product.images[0],
          images: product.images,
          slug: product.slug,
          family: product.family
        });

        this.isCartOpen = true;
        this.activeTab = "wishlist";
      }
    },

    removeFromWishlist(productId: number) {
      const index = this.wishlistItems.findIndex(item => item.id === productId);
      if (index > -1) {
        this.wishlistItems.splice(index, 1);
      }
    },

    toggleWishlist(product: Product) {
      if (this.isInWishlist(product.id)) {
        this.removeFromWishlist(product.id);
      } else {
        this.addToWishlist(product);
      }
    },

    clearWishlist() {
      this.wishlistItems = [];
    },

    moveToCart(product: Product) {
      this.addToCart(product, 1, "50 ML");
    },

    openCart() {
      this.isCartOpen = true;
      this.activeTab = "cart";
    },

    openWishlist() {
      this.isCartOpen = true;
      this.activeTab = "wishlist";
    },

    closeCart() {
      this.isCartOpen = false;
    },

    toggleCart() {
      this.isCartOpen = !this.isCartOpen;
      if (this.isCartOpen) {
        this.activeTab = "cart";
      }
    },

    setActiveTab(tab: "cart" | "wishlist") {
      this.activeTab = tab;
    }
  },

  persist: {
    key: "luxe-aroma-cart",
    storage: localStorage,
    paths: ["items", "wishlistItems"]
  }
});
