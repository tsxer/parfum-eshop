<template>
  <div class="home">
    <section class="hero">
      <video class="hero__video" autoplay muted loop playsinline>
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div class="hero__overlay"></div>
      <div class="hero__content">
        <h1 class="hero__title">LUXE AROMA</h1>
        <p class="hero__text">
          Discover the world's most exquisite fragrances. From timeless classics
          to modern masterpieces.
        </p>
        <div class="hero__actions">
          <router-link to="/products" class="hero__btn hero__btn--primary">
            Shop Collection <i data-feather="arrow-right"></i>
          </router-link>
          <router-link
            :to="{ name: 'products-category', params: { category: 'oud' } }"
            class="hero__btn hero__btn--secondary"
          >
            Explore Oud
          </router-link>
        </div>
      </div>
    </section>

    <ValueProps :items="benefitItems" />

    <section class="featured">
      <div class="featured__container">
        <header class="featured__header">
          <h2 class="featured__title">Featured Collection</h2>
          <p class="featured__subtitle">
            Handpicked selections from our master perfumers
          </p>
        </header>

        <div class="featured__grid">
          <ProductCard
            v-for="product in limitedProducts"
            :key="product.id"
            :product="product"
          />
        </div>

        <div class="featured__actions">
          <router-link
            :to="{ name: 'products-category', params: { category: 'limited' } }"
          >
            <button class="featured__btn">
              VIEW ALL LIMITED
              <i data-feather="arrow-right"></i>
            </button>
          </router-link>
        </div>
      </div>
    </section>

    <section class="newsletter">
      <div class="newsletter__container">
        <div class="newsletter__wrapper">
          <header class="newsletter__header">
            <span class="newsletter__label">Stay in the know</span>
            <h2 class="newsletter__title">Stay in the Scent</h2>
            <p class="newsletter__text">
              Receive personalized email updates, launch announcements, and
              exclusive access based on your interests.
            </p>
          </header>

          <form class="newsletter__form" @submit.prevent="handleSubscribe">
            <div class="newsletter__input-group">
              <input
                v-model="email"
                type="email"
                placeholder="Email address *"
                required
                class="newsletter__input"
              />
              <button
                type="submit"
                class="newsletter__submit"
                aria-label="Subscribe"
              >
                <i data-feather="arrow-right"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCard from "@/components/product/ProductCard.vue";
import ValueProps from "@/components/common/ValueProps.vue";
import { products, type Product } from "@/data/products_data";
import { SHOP_BENEFITS } from "@/data/features_data";

export default defineComponent({
  name: "HomeView",

  components: {
    ProductCard,
    ValueProps
  },

  data() {
    return {
      email: "",
      allProducts: products as Product[],
      benefitItems: SHOP_BENEFITS
    };
  },

  computed: {
    limitedProducts(): Product[] {
      return this.allProducts.filter(product => product.isLimited === true);
    }
  },

  methods: {
    handleSubscribe() {
      this.email = "";
    }
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as v;

.hero {
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: v.$c-black;

  &__video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  &__overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 2;
  }

  &__content {
    position: relative;
    z-index: 3;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: v.$c-white;
    padding: 0 v.rem(20);
    max-width: v.rem(850);
    margin: 0 auto;
  }

  &__title {
    @include v.luxury-label(clamp(v.rem(32), 5vw, v.rem(64)), 0.25em);
    line-height: 1.1;
    margin-bottom: v.rem(20);
  }

  &__text {
    font-size: v.rem(14);
    letter-spacing: 0.05em;
    line-height: 1.8;
    opacity: 0.8;
    margin-bottom: v.rem(48);
    max-width: v.rem(500);
  }

  &__actions {
    display: flex;
    justify-content: center;
    align-items: stretch;
  }

  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: v.rem(10);
    @include v.luxury-label(v.rem(12), 0.2em);
    padding: v.rem(18) v.rem(40);
    transition: v.$tr-smooth;
    text-decoration: none;
    white-space: nowrap;

    :deep(svg) {
      width: v.rem(16);
      height: v.rem(16);
      stroke-width: 1.5;
      transition: transform 0.3s v.$tr-smooth;
    }

    &--primary {
      background: v.$c-white;
      color: v.$c-black;
      border: v.rem(1) solid v.$c-white;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        color: v.$c-white;
      }
    }

    &--secondary {
      background: transparent;
      color: v.$c-white;
      border: v.rem(1) solid rgba(255, 255, 255, 0.4);
      border-left: none;

      &:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: v.$c-white;
      }
    }
  }
}

.featured {
  background: v.$c-white;
  padding: v.rem(100) 0;

  &__container {
    max-width: v.rem(1600);
    margin: 0 auto;
    padding: 0 v.rem(40);
  }

  &__header {
    text-align: center;
    margin-bottom: v.rem(60);
  }

  &__title {
    @include v.luxury-label(v.rem(28), 0.05em);
    font-weight: 400;
    margin-bottom: v.rem(10);
    color: v.$c-black;
  }

  &__subtitle {
    font-size: v.rem(14);
    color: v.$c-text-header;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: v.rem(20);
    margin-bottom: v.rem(80);

    @media (max-width: v.rem(1024)) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__actions {
    display: flex;
    justify-content: center;
  }

  &__btn {
    background: v.$c-black;
    color: v.$c-white;
    border: none;
    padding: v.rem(18) v.rem(48);
    @include v.luxury-label(v.rem(12), 0.1em);
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: v.rem(12);

    &:hover {
      background: #333;
    }

    :deep(svg) {
      width: v.rem(16);
      height: v.rem(16);
      stroke: currentColor;
      stroke-width: 1.5;
      fill: none;
    }
  }
}

.newsletter {
  background-color: v.$c-black;
  color: v.$c-white;
  padding: v.rem(120) 0;
  border-top: v.rem(1) solid v.$c-border-dark;

  &__container {
    max-width: v.rem(1440);
    margin: 0 auto;
    padding: 0 v.rem(40);
  }

  &__wrapper {
    max-width: v.rem(800);
    margin: 0 auto;
    text-align: left;
  }

  &__header {
    margin-bottom: v.rem(50);
  }

  &__label {
    @include v.luxury-label(v.rem(10), 0.2em);
    color: v.$c-text-muted;
    display: block;
    margin-bottom: v.rem(24);
  }

  &__title {
    font-size: v.rem(32);
    font-weight: 400;
    letter-spacing: 0.02em;
    margin-bottom: v.rem(20);
  }

  &__text {
    font-size: v.rem(16);
    color: v.$c-text-muted;
    line-height: 1.6;
    max-width: v.rem(600);
  }

  &__input-group {
    position: relative;
    display: flex;
    align-items: center;
    border-bottom: v.rem(1) solid v.$c-border-dark;
    transition: v.$tr-smooth;

    &:focus-within {
      border-color: v.$c-white;
    }
  }

  &__input {
    width: 100%;
    background: transparent;
    border: none;
    color: v.$c-white;
    padding: v.rem(24) 0;
    font-size: v.rem(16);
    outline: none;

    &::placeholder {
      color: v.$c-text-legal;
    }
  }

  &__submit {
    background: none;
    border: none;
    color: v.$c-white;
    cursor: pointer;
    padding: v.rem(10);
    transition: v.$tr-smooth;

    &:hover {
      transform: translateX(v.rem(8));
    }

    svg {
      width: v.rem(20);
      height: v.rem(20);
      stroke-width: 1.5;
    }
  }
}

@media (max-width: v.rem(768)) {
  .hero__title {
    font-size: v.rem(28);
  }

  .newsletter {
    padding: v.rem(80) v.rem(20);
  }
}
</style>
