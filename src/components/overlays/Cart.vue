<template>
  <div class="cart">
    <transition name="fade">
      <div v-if="isOpen" class="cart__backdrop" @click="$emit('close')"></div>
    </transition>

    <transition name="slide">
      <div v-if="isOpen" class="cart__sidebar">
        <header class="cart__header">
          <div class="cart__tabs">
            <div class="cart__glider" :style="gliderStyle"></div>

            <button
              ref="cartBtn"
              class="cart__tab"
              :class="{ 'cart__tab--active': cartStore.activeTab === 'cart' }"
              @click="cartStore.setActiveTab('cart')"
            >
              CART ({{ cartStore.cartCount }})
            </button>

            <button
              ref="wishlistBtn"
              class="cart__tab"
              :class="{
                'cart__tab--active': cartStore.activeTab === 'wishlist'
              }"
              @click="cartStore.setActiveTab('wishlist')"
            >
              WISHLIST ({{ cartStore.wishlistCount }})
            </button>
          </div>

          <button class="cart__close" @click="$emit('close')">
            <i data-feather="x"></i>
          </button>
        </header>

        <div v-if="cartStore.activeTab === 'cart'" class="cart__body">
          <div v-if="cartItems.length === 0" class="cart__empty">
            <p class="cart__empty-text">YOUR CART IS CURRENTLY EMPTY.</p>
            <button class="cart__empty-btn" @click="$emit('close')">
              CONTINUE SHOPPING
            </button>
          </div>

          <div v-else class="cart__list">
            <div v-for="item in cartItems" :key="item.id" class="cart-item">
              <router-link
                :to="`/product/${item.slug}`"
                class="cart-item__media"
                @click="$emit('close')"
              >
                <img
                  :src="getCartImage(item, 0)"
                  :alt="item.name"
                  class="cart-item__image cart-item__image--primary"
                />
                <img
                  :src="getCartImage(item, 1)"
                  :alt="item.name"
                  class="cart-item__image cart-item__image--hover"
                />
              </router-link>

              <div class="cart-item__content">
                <div class="cart-item__info">
                  <span class="cart-item__category">{{ item.category }}</span>
                  <h4 class="cart-item__name">{{ item.name }}</h4>
                  <span class="cart-item__size">SIZE: {{ item.size }}</span>
                </div>

                <div class="cart-item__quantity">
                  <button
                    class="cart-item__qty-btn"
                    @click="
                      cartStore.updateQuantity(item.id, item.quantity - 1)
                    "
                  >
                    <i data-feather="minus"></i>
                  </button>
                  <span class="cart-item__qty-value">{{ item.quantity }}</span>
                  <button
                    class="cart-item__qty-btn"
                    @click="
                      cartStore.updateQuantity(item.id, item.quantity + 1)
                    "
                  >
                    <i data-feather="plus"></i>
                  </button>
                </div>

                <div class="cart-item__footer">
                  <button
                    class="cart-item__remove"
                    @click="cartStore.removeFromCart(item.id)"
                  >
                    REMOVE
                  </button>
                  <div class="cart-item__price">
                    {{ item.price * item.quantity }} €
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="cart__body">
          <div v-if="wishlistItems.length === 0" class="cart__empty">
            <p class="cart__empty-text">YOUR WISHLIST IS CURRENTLY EMPTY.</p>
            <button class="cart__empty-btn" @click="$emit('close')">
              CONTINUE SHOPPING
            </button>
          </div>

          <transition-group
            v-else
            name="wishlist-anim"
            tag="div"
            class="wishlist"
          >
            <div
              v-for="item in wishlistItems"
              :key="item.id"
              class="wishlist__card"
            >
              <router-link
                :to="`/product/${item.slug}`"
                class="wishlist__media"
                @click="$emit('close')"
              >
                <img :src="item.image" :alt="item.name" />
              </router-link>

              <div class="wishlist__content">
                <div class="wishlist__header">
                  <span class="wishlist__category">EAU DE PARFUM</span>
                  <button
                    class="wishlist__remove"
                    @click="cartStore.removeFromWishlist(item.id)"
                    title="Remove"
                  >
                    <i data-feather="bookmark"></i>
                  </button>
                </div>

                <h4 class="wishlist__name">{{ item.name }}</h4>
                <div class="wishlist__price">{{ item.price }} €</div>
                <div class="wishlist__meta">50 ML</div>

                <button class="wishlist__add" @click="handleMoveToCart(item)">
                  ADD TO CART
                </button>
              </div>
            </div>
          </transition-group>
        </div>

        <footer
          v-if="cartStore.activeTab === 'cart' && cartItems.length > 0"
          class="cart__footer"
        >
          <div class="cart__total">
            <span class="cart__total-label">TOTAL</span>
            <span class="cart__total-price">{{ cartTotal }} €</span>
          </div>
          <button class="cart__checkout" @click="handleCheckout">
            PROCEED TO CHECKOUT
          </button>
        </footer>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCartStore } from "@/stores/cart";
import { getProductById } from "@/data/products_data";
import type { WishlistItem } from "@/stores/cart";
import featherMixin from "@/mixins/featherIcons";

export default defineComponent({
  name: "Cart",

  mixins: [featherMixin],

  props: {
    isOpen: { type: Boolean, required: true }
  },

  data() {
    return {
      gliderStyle: {
        width: "0px",
        transform: "translateX(0px)"
      }
    };
  },

  computed: {
    cartStore() {
      return useCartStore();
    },
    cartItems() {
      return this.cartStore.items;
    },
    wishlistItems() {
      return this.cartStore.wishlistItems;
    },
    cartCount() {
      return this.cartStore.cartCount;
    },
    cartTotal() {
      return this.cartStore.cartTotal;
    }
  },

  watch: {
    isOpen(val: boolean) {
      if (typeof document !== "undefined") {
        document.body.style.overflow = val ? "hidden" : "";
      }
      if (val) {
        this.$nextTick(() => {
          this.updateGlider();
        });
      }
    },

    "cartStore.activeTab"() {
      this.updateGlider();
    }
  },

  mounted() {
    this.updateGlider();
  },

  methods: {
    getCartImage(item: any, index: number): string {
      if (item.images && Array.isArray(item.images) && item.images.length > 0) {
        if (index === 1 && !item.images[1]) {
          return item.images[0];
        }
        return item.images[index] || item.images[0];
      }
      if (item.image) return item.image;
      return "";
    },

    handleMoveToCart(item: WishlistItem) {
      const product = getProductById(item.id);
      if (product) {
        this.cartStore.moveToCart(product);
      }
    },

    handleCheckout() {
      this.cartStore.clearCart();
      this.$emit("close");
      this.$router.push("/checkout-success");
    },

    updateGlider() {
      this.$nextTick(() => {
        const activeTab = this.cartStore.activeTab;
        const targetBtn =
          activeTab === "cart"
            ? (this.$refs.cartBtn as HTMLElement)
            : (this.$refs.wishlistBtn as HTMLElement);

        if (targetBtn) {
          this.gliderStyle = {
            width: `${targetBtn.offsetWidth}px`,
            transform: `translateX(${targetBtn.offsetLeft}px)`
          };
        }
      });
    }
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as v;

.cart {
  &__backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(v.rem(2));
    z-index: 5999;
  }

  &__sidebar {
    position: fixed;
    top: 0;
    right: 0;
    width: v.rem(500);
    height: 100vh;
    background: v.$c-white;
    z-index: 6000;
    display: flex;
    flex-direction: column;

    @media (max-width: 48rem) {
      width: 100%;
    }
  }

  &__header {
    height: v.rem(80);
    padding: 0 v.rem(30);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
  }

  &__tabs {
    position: relative;
    display: flex;
    background: #f9f9f9;
  }

  &__glider {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: v.$c-white;
    border: 1px solid v.$c-border-light;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 0;
  }

  &__tab {
    position: relative;
    z-index: 1;
    flex: 1;
    text-wrap: nowrap;
    background: transparent;
    border: 1px solid transparent;
    padding: v.rem(12) v.rem(20);
    @include v.luxury-label(v.rem(10), 0.05em);
    cursor: pointer;
    transition: v.$tr-smooth;
    text-align: center;
    color: v.$c-text-muted;

    &--active {
      color: v.$c-black;
    }

    &:hover:not(.cart__tab--active) {
      color: v.$c-black;
      opacity: 0.6;
    }
  }

  &__close {
    background: none;
    border: none;
    cursor: pointer;

    :deep(svg) {
      width: v.rem(20);
      height: v.rem(20);
      stroke-width: 1px;
    }
  }

  &__body {
    flex: 1;
    overflow-y: auto;
    padding: v.rem(30);
  }

  &__empty {
    text-align: center;
    padding-top: v.rem(100);
  }

  &__empty-text {
    @include v.luxury-label(v.rem(13), 0.1em);
    margin-bottom: v.rem(20);
    color: v.$c-text-muted;
  }

  &__empty-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: v.rem(12);
    font-weight: 400;
    color: v.$c-black;
    text-decoration: underline;
    text-underline-offset: v.rem(4);
    transition: v.$tr-smooth;

    &:hover {
      opacity: 0.8;
    }
  }

  &__list {
    display: grid;
    gap: v.rem(30);
  }

  &__footer {
    padding: v.rem(30);
    border-top: 1px solid #f0f0f0;
  }

  &__total {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: v.rem(30);
  }

  &__total-label {
    @include v.luxury-label(v.rem(10), 0.05em);
  }

  &__total-price {
    display: block;
    font-size: v.rem(18);
    font-weight: 500;
  }

  &__checkout {
    width: 100%;
    height: v.rem(55);
    background: v.$c-black;
    color: v.$c-white;
    border: 1px solid v.$c-black;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    @include v.luxury-label(v.rem(11), 0.1em);

    &:hover {
      background: #333;
    }
  }
}

.cart-item {
  display: flex;
  gap: v.rem(20);

  &__media {
    width: v.rem(210);
    aspect-ratio: 1;
    background: #f9f9f9;
    cursor: pointer;
    display: block;
    position: relative;
    overflow: hidden;

    &:hover {
      .cart-item__image--primary {
        opacity: 0;
      }
      .cart-item__image--hover {
        opacity: 1;
      }
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: opacity 0.6s ease;

    &--primary {
      position: relative;
      z-index: 1;
      opacity: 1;
    }

    &--hover {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      opacity: 0;
    }
  }

  &__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: v.rem(15);
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__category {
    @include v.luxury-label(0.625rem, 0.05em);
    color: v.$c-text-muted;
    display: block;
  }

  &__name {
    @include v.luxury-label(0.875rem, 0.1em);
    color: v.$c-black;
    margin: v.rem(5) 0;
    text-transform: uppercase;
  }

  &__size {
    color: v.$c-text-muted;
    font-size: 0.6875rem;
  }

  &__quantity {
    display: flex;
    align-items: center;
    gap: v.rem(10);
  }

  &__qty-btn {
    background: none;
    border: none;
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }

    :deep(svg) {
      width: v.rem(24);
      height: v.rem(24);
      stroke-width: 1px;
      background-color: #f0f0f0;
      border-radius: 50%;
      padding: v.rem(4);
    }
  }

  &__qty-value {
    @include v.luxury-label(v.rem(16), 0);
    min-width: v.rem(20);
    text-align: center;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__price {
    font-size: v.rem(14);
    font-weight: 400;
    color: v.$c-black;
  }

  &__remove {
    background: none;
    border: none;
    cursor: pointer;
    font-size: v.rem(12);
    font-weight: 400;
    color: v.$c-black;
    text-decoration: underline;
    text-underline-offset: v.rem(4);
    transition: v.$tr-smooth;

    &:hover {
      opacity: 0.8;
    }
  }
}

.wishlist {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: v.rem(20);
  row-gap: v.rem(40);
  padding-bottom: v.rem(40);

  &__card {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  &__media {
    width: 100%;
    aspect-ratio: 1;
    background: #f9f9f9;
    cursor: pointer;
    margin-bottom: v.rem(15);
    display: block;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      mix-blend-mode: multiply;
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: v.rem(4);
  }

  &__category {
    @include v.luxury-label(v.rem(10), 0.05em);
    color: v.$c-text-muted;
    text-transform: uppercase;
  }

  &__remove {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    line-height: 0;

    :deep(svg) {
      width: v.rem(20);
      height: v.rem(20);
      fill: v.$c-black;
      stroke: none;
    }
  }

  &__name {
    @include v.luxury-label(v.rem(13), 0.02em);
    color: v.$c-black;
    text-transform: uppercase;
    margin-bottom: v.rem(4);
    font-weight: 500;
  }

  &__price {
    @include v.luxury-label(v.rem(12), 0);
    color: v.$c-black;
    margin-bottom: v.rem(4);
  }

  &__meta {
    @include v.luxury-label(v.rem(10), 0.05em);
    color: v.$c-text-muted;
    margin-bottom: v.rem(12);
  }

  &__add {
    background: none;
    border: none;
    padding: 0;
    text-align: left;
    @include v.luxury-label(v.rem(10), 0.1em);
    color: v.$c-black;
    text-decoration: underline;
    text-underline-offset: v.rem(4);
    cursor: pointer;
    transition: v.$tr-smooth;
    align-self: flex-start;

    &:hover {
      opacity: 0.6;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.wishlist-anim-move {
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.wishlist-anim-enter-active,
.wishlist-anim-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.wishlist-anim-enter-from,
.wishlist-anim-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

.wishlist-anim-leave-active {
  position: absolute;
  z-index: -1;
  width: calc((100% - #{v.rem(20)}) / 2);
}
</style>
