<template>
  <router-link :to="`/product/${product.slug}`" class="card-link">
    <article class="card">
      <div class="card__header">
        <span class="card__tag">
          {{ product.isLimited ? "LIMITED EDITION" : "TRY IT FIRST" }}
        </span>
        <button
          class="card__bag"
          aria-label="Add to bag"
          @click.prevent.stop="addToBag"
        >
          <i data-feather="shopping-bag"></i>
        </button>
      </div>

      <div class="card__media">
        <img
          :src="product.images[0]"
          :alt="product.name"
          class="card__image card__image--primary"
        />
        <img
          :src="product.images[1] || product.images[0]"
          :alt="product.name"
          class="card__image card__image--hover"
        />
      </div>

      <div class="card__body">
        <div class="card__info">
          <span class="card__category">{{ product.family }}</span>
          <h3 class="card__title">{{ product.name }}</h3>
          <div class="card__pricing">
            <span class="card__price">{{ product.price }} €</span>
            <span class="card__size">{{ product.size }}</span>
          </div>
        </div>

        <button
          class="card__wishlist"
          :class="{
            'card__wishlist--active': cartStore.isInWishlist(product.id)
          }"
          title="Add to wishlist"
          @click.prevent.stop="toggleWishlist"
        >
          <i data-feather="bookmark"></i>
        </button>
      </div>
    </article>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { Product } from "@/types/product";
import { useCartStore } from "@/stores/cart";

export default defineComponent({
  name: "ProductCard",

  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },

  computed: {
    cartStore() {
      return useCartStore();
    }
  },

  methods: {
    addToBag() {
      this.cartStore.addToCart(this.product, 1, "100 ML");
    },

    toggleWishlist() {
      this.cartStore.toggleWishlist(this.product);
    }
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as v;

.card-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.card {
  display: flex;
  flex-direction: column;
  background: v.$c-white;
  position: relative;
  width: 100%;
  transition: v.$tr-smooth;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.9375rem 0;
  }

  &__tag {
    @include v.luxury-label(0.625rem, 0.1em);
    color: v.$c-text-apple;
  }

  &__bag {
    background: none;
    border: none;
    cursor: pointer;
    color: v.$c-black;
    transition: opacity 0.3s ease;
    position: relative;
    z-index: 2;

    &:hover {
      opacity: 0.6;
    }

    :deep(svg) {
      width: v.rem(16);
      height: v.rem(16);
      stroke-width: 1.2px;
      color: currentColor;
      display: block;
    }
  }

  &__media {
    background-color: #f9f9f9;
    aspect-ratio: 1 / 1.25;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition:
      opacity 0.6s ease,
      transform 0.8s ease;

    &--hover {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
    }

    .card:hover & {
      &--primary {
        opacity: 0;
      }
      &--hover {
        opacity: 1;
      }
    }
  }

  &__body {
    display: flex;
    justify-content: space-between;
    padding: 1.25rem 0;
  }

  &__category {
    @include v.luxury-label(0.625rem, 0.05em);
    color: v.$c-text-muted;
    margin-bottom: 0.5rem;
    display: block;
    text-transform: uppercase;
  }

  &__title {
    @include v.luxury-label(0.875rem, 0.1em);
    color: v.$c-black;
    margin-bottom: 0.75rem;
  }

  &__pricing {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  &__price {
    font-size: 0.8125rem;
    color: v.$c-black;
  }

  &__size {
    color: v.$c-text-muted;
    font-size: 0.6875rem;
  }

  &__wishlist {
    background: none;
    border: none;
    cursor: pointer;
    color: #ccc;
    transition: v.$tr-smooth;
    align-self: flex-start;
    position: relative;
    z-index: 2;

    &:hover {
      color: v.$c-black;
    }

    :deep(svg) {
      width: v.rem(18);
      height: v.rem(18);
      stroke-width: 1px;
      fill: none;
      transition:
        fill 0.3s ease,
        color 0.3s ease;
    }

    &--active {
      color: v.$c-black;

      :deep(svg) {
        fill: v.$c-black;
      }
    }
  }
}
</style>
