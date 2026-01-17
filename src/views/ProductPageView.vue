<template>
  <div class="product" v-if="product">
    <div class="product__wrapper">
      <div class="product__gallery">
        <button class="product__nav product__nav--prev" @click="prevSlide">
          <i data-feather="chevron-left"></i>
        </button>

        <div class="product__carousel" ref="carousel">
          <div class="product__track" ref="carouselTrack">
            <div
              v-for="(image, index) in product.images"
              :key="index"
              class="product__slide"
              :ref="el => setSlideRef(el, index)"
            >
              <img
                :src="image"
                :alt="`${product.name} - Image ${index + 1}`"
                class="product__image"
              />
            </div>
          </div>
        </div>

        <button class="product__nav product__nav--next" @click="nextSlide">
          <i data-feather="chevron-right"></i>
        </button>

        <div class="product__progress">
          <div
            class="product__progress-bar"
            :style="{ width: progressWidth + '%' }"
          ></div>
        </div>
      </div>

      <div class="product__content">
        <nav class="product__breadcrumb">
          <router-link to="/products">SHOP</router-link> /
          <span>{{ product.family.toUpperCase() }}</span>
        </nav>

        <div class="product__header">
          <div class="product__info">
            <h1 class="product__title">{{ product.name }}</h1>
            <p class="product__subtitle">EAU DE PARFUM</p>
            <p class="product__price">{{ product.price }} €</p>
          </div>

          <div class="product__wishlist">
            <button
              class="product__wishlist-btn"
              :class="{
                'product__wishlist-btn--active': cartStore.isInWishlist(
                  product.id
                )
              }"
              title="Add to wishlist"
              @click.prevent.stop="toggleWishlist"
            >
              <i data-feather="bookmark"></i>
            </button>
          </div>
        </div>

        <div class="product__actions">
          <button class="product__add-btn" @click="handleAddToCart">
            ADD TO CART
          </button>
        </div>

        <section class="product__description">
          <div class="product__desc-block">
            <h3 class="product__desc-title">DESCRIPTION</h3>
            <p>{{ product.description }}</p>
          </div>

          <div class="product__desc-block">
            <template
              v-if="product.type === 'Travel Set' && product.composition"
            >
              <h3 class="product__desc-title">SET CONTENT</h3>
              <ul class="product__composition">
                <li
                  v-for="item in product.composition"
                  :key="item"
                  class="product__composition-item"
                >
                  <span class="product__composition-name">{{
                    item.toUpperCase()
                  }}</span>
                  <span class="product__composition-size">12 ML</span>
                </li>
              </ul>
              <p class="product__total">Total volume: 36ml</p>
            </template>

            <template v-else-if="product.notes && product.notes.top.length > 0">
              <h3 class="product__desc-title">OLFACTORY NOTES</h3>
              <ul class="product__notes">
                <li>
                  <strong>Top:</strong> {{ product.notes.top.join(", ") }}
                </li>
                <li>
                  <strong>Heart:</strong> {{ product.notes.heart.join(", ") }}
                </li>
                <li>
                  <strong>Base:</strong> {{ product.notes.base.join(", ") }}
                </li>
              </ul>
              <p class="product__total">Total volume: {{ product.size }}</p>
            </template>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Product } from "@/types/product";
import { getProductById, getProductBySlug } from "@/data/products_data";
import { useCartStore } from "@/stores/cart";

export default defineComponent({
  name: "ProductPageView",

  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  },

  data() {
    return {
      currentImageIndex: 0,
      slideRefs: [] as HTMLElement[]
    };
  },

  computed: {
    product(): Product | undefined {
      const id = this.$route.params.id;
      if (typeof id === "string" && !isNaN(Number(id))) {
        return getProductById(Number(id));
      }
      if (typeof id === "string") {
        return getProductBySlug(id);
      }
      return undefined;
    },

    progressWidth(): number {
      if (!this.product) return 0;
      return ((this.currentImageIndex + 1) / this.product.images.length) * 100;
    }
  },

  created() {
    this.checkAndRedirect();
  },

  watch: {
    "$route.params.id"() {
      this.checkAndRedirect();
    }
  },

  mounted() {
    this.$nextTick(() => {
      const track = this.$refs.carouselTrack as HTMLElement;
      if (track) {
        track.addEventListener("scroll", this.handleScroll);
      }
    });
  },

  beforeUnmount() {
    const track = this.$refs.carouselTrack as HTMLElement;
    if (track) {
      track.removeEventListener("scroll", this.handleScroll);
    }
  },

  methods: {
    checkAndRedirect() {
      if (!this.product) {
        this.$router.replace({
          name: "not-found",
          params: { pathMatch: this.$route.path.substring(1).split("/") }
        });
      }
    },

    toggleWishlist() {
      if (this.product) {
        this.cartStore.toggleWishlist(this.product);
      }
    },

    setSlideRef(el: any, index: number) {
      if (el) {
        this.slideRefs[index] = el;
      }
    },

    handleScroll() {
      const track = this.$refs.carouselTrack as HTMLElement;
      if (!track) return;
      const scrollLeft = track.scrollLeft;
      const slideWidth = track.offsetWidth;
      const newIndex = Math.round(scrollLeft / slideWidth);
      this.currentImageIndex = newIndex;
    },

    nextSlide() {
      if (!this.product) return;
      if (this.currentImageIndex < this.product.images.length - 1) {
        this.currentImageIndex++;
      } else {
        this.currentImageIndex = 0;
      }
      this.scrollToSlide(this.currentImageIndex);
    },

    prevSlide() {
      if (!this.product) return;
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--;
      } else {
        this.currentImageIndex = this.product.images.length - 1;
      }
      this.scrollToSlide(this.currentImageIndex);
    },

    scrollToSlide(index: number) {
      if (this.slideRefs[index]) {
        this.slideRefs[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start"
        });
      }
    },

    handleAddToCart() {
      if (this.product) {
        this.cartStore.addToCart(this.product, 1, "100 ML");
      }
    }
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as v;

.product {
  margin-top: v.$h-header;
  background: v.$c-white;
  min-height: 100vh;

  &__wrapper {
    display: flex;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }

  &__gallery {
    width: 60%;
    height: 100vh;
    position: sticky;
    top: 0;
    overflow: hidden;

    @media (max-width: 1024px) {
      width: 100%;
      height: 60vh;
      position: relative;
    }

    &:hover .product__nav {
      opacity: 1;
    }
  }

  &__content {
    width: 40%;
    padding: v.rem(140) v.rem(80) v.rem(80);

    @media (max-width: 1024px) {
      width: 100%;
      padding: v.rem(60) v.rem(20);
    }
  }

  &__carousel {
    width: 100%;
    height: 100%;
    position: relative;
  }

  &__track {
    display: flex;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__slide {
    flex: 0 0 100%;
    scroll-snap-align: start;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    user-select: none;
  }

  &__nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
    padding: v.rem(30);
    color: v.$c-black;
    transition: opacity 0.4s ease;
    z-index: 10;
    opacity: 0;

    &--prev {
      left: v.rem(10);
    }

    &--next {
      right: v.rem(10);
    }

    :deep(svg) {
      font-size: v.rem(32);
      width: v.rem(32);
      height: v.rem(32);
      display: flex;
      align-items: center;
      justify-content: center;
      stroke-width: 1px;
    }
  }

  &__progress {
    position: absolute;
    bottom: v.rem(40);
    left: 50%;
    transform: translateX(-50%);
    width: v.rem(200);
    height: 2px;
    background: v.$c-border-light;
    z-index: 10;
  }

  &__progress-bar {
    height: 100%;
    background: v.$c-black;
    transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  &__breadcrumb {
    @include v.luxury-label(v.rem(10), 0.1em);
    color: v.$c-text-muted;
    margin-bottom: v.rem(40);

    a {
      color: inherit;
      transition: color 0.3s ease;

      &:hover {
        color: v.$c-black;
      }
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: v.rem(40);
  }

  &__info {
    flex: 1;
  }

  &__title {
    font-size: v.rem(42);
    font-weight: 400;
    letter-spacing: -0.01em;
    margin-bottom: v.rem(8);
    text-transform: uppercase;
  }

  &__subtitle {
    @include v.luxury-label(v.rem(12), 0.05em);
    color: v.$c-text-muted;
    margin-bottom: v.rem(24);
  }

  &__price {
    font-size: v.rem(20);
    color: v.$c-text-main;
  }

  &__wishlist {
    margin-left: v.rem(20);
    padding-top: v.rem(5);
  }

  &__wishlist-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    color: v.$c-black;
    transition: transform 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;

    :deep(svg) {
      width: v.rem(24);
      height: v.rem(24);
      stroke-width: 1.5px;
      fill: transparent;
      transition: fill 0.3s ease;
    }

    &--active {
      :deep(svg) {
        fill: v.$c-black;
      }
    }
  }

  &__add-btn {
    width: 100%;
    background: v.$c-black;
    color: v.$c-white;
    padding: v.rem(20);
    @include v.luxury-label(v.rem(12), 0.1em);
    border: none;
    cursor: pointer;
    transition: opacity 0.3s ease;
    margin-bottom: v.rem(80);

    &:hover {
      opacity: 0.8;
    }
  }

  &__desc-block {
    margin-bottom: v.rem(50);
    border-top: 1px solid v.$c-border-light;
    padding-top: v.rem(30);
  }

  &__desc-title {
    @include v.luxury-label(v.rem(10), 0.1em);
    margin-bottom: v.rem(20);
    color: v.$c-text-header;
  }

  &__description {
    p,
    li {
      font-size: v.rem(15);
      line-height: 1.8;
      color: v.$c-text-legal;
    }
  }

  &__notes,
  &__composition {
    list-style: none;
    padding: 0;
  }

  &__notes li {
    margin-bottom: v.rem(8);
  }

  &__composition-item {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: v.rem(12) 0;
    border-bottom: 1px solid v.$c-border-light;

    &:last-child {
      border-bottom: none;
    }
  }

  &__composition-name {
    font-size: v.rem(14);
    letter-spacing: 0.05em;
    color: v.$c-black;
    text-transform: uppercase;
  }

  &__composition-size {
    @include v.luxury-label(v.rem(10), 0.1em);
    color: v.$c-text-muted;
  }

  &__total {
    @include v.luxury-label(v.rem(11), 0.05em);
    color: v.$c-black;
    margin-top: v.rem(20);
  }
}
</style>
