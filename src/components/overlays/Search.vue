<template>
  <div class="search">
    <transition name="fade">
      <div v-if="isOpen" class="search__backdrop" @click="$emit('close')"></div>
    </transition>

    <transition name="search-reveal">
      <div v-if="isOpen" class="search__panel">
        <div class="search__header">
          <div class="search__col search__col--left">
            <button class="search__btn" @click="$emit('close')">
              <i data-feather="x"></i>
              <span class="search__label">CLOSE</span>
            </button>
          </div>

          <div class="search__col search__col--center">
            <div class="search__field">
              <i data-feather="search" class="search__icon"></i>
              <input
                ref="searchInput"
                v-model="query"
                type="text"
                placeholder="WHAT ARE YOU LOOKING FOR?"
                class="search__input"
              />
            </div>
          </div>

          <div class="search__col search__col--right">
            <button class="search__btn" @click="handleOpenWishlist">
              <i data-feather="bookmark" class="search__icon--mobile"></i>
              <span class="search__label">
                WISHLIST ({{ cartStore.wishlistItems.length }})
              </span>
            </button>
          </div>
        </div>

        <div class="search__body">
          <div class="search__results">
            <div v-if="query.length > 0">
              <div v-if="filteredProducts.length === 0" class="search__empty">
                <p>NO RESULTS WERE FOUND FOR "{{ query.toUpperCase() }}".</p>
              </div>

              <div v-else>
                <span class="search__section-label">
                  SEARCH RESULTS ({{ filteredProducts.length }})
                </span>
                <div class="search__grid">
                  <router-link
                    v-for="product in filteredProducts"
                    :key="product.id"
                    :to="`/product/${product.slug}`"
                    class="result"
                    @click="$emit('close')"
                  >
                    <div class="result__media">
                      <img
                        class="result__image result__image--primary"
                        :src="getSearchImage(product, 0)"
                        :alt="product.name"
                      />
                      <img
                        class="result__image result__image--hover"
                        :src="getSearchImage(product, 1)"
                        :alt="product.name"
                      />
                    </div>

                    <div class="result__content">
                      <div class="result__header">
                        <span class="result__category">{{
                          product.family
                        }}</span>
                      </div>
                      <h4 class="result__name">{{ product.name }}</h4>
                      <div class="result__price">{{ product.price }} €</div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>

            <div v-else>
              <span class="search__section-label">YOU MAY ALSO LIKE</span>
              <div class="search__grid">
                <router-link
                  v-for="product in suggestedProducts"
                  :key="product.id"
                  :to="`/product/${product.slug}`"
                  class="result"
                  @click="$emit('close')"
                >
                  <div class="result__media">
                    <img
                      class="result__image result__image--primary"
                      :src="getSearchImage(product, 0)"
                      :alt="product.name"
                    />
                    <img
                      class="result__image result__image--hover"
                      :src="getSearchImage(product, 1)"
                      :alt="product.name"
                    />
                  </div>
                  <div class="result__content">
                    <div class="result__header">
                      <span class="result__category">{{ product.family }}</span>
                    </div>
                    <h4 class="result__name">{{ product.name }}</h4>
                    <div class="result__price">{{ product.price }} €</div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { products } from "@/data/products_data";
import { useCartStore } from "@/stores/cart";
import featherMixin from "@/mixins/featherIcons";

export default defineComponent({
  name: "Search",

  mixins: [featherMixin],

  props: {
    isOpen: { type: Boolean, required: true }
  },

  data() {
    return { query: "" };
  },

  computed: {
    cartStore() {
      return useCartStore();
    },
    filteredProducts() {
      if (!this.query.trim()) return [];
      const s = this.query.toLowerCase().trim();
      return products.filter(
        p =>
          p.name.toLowerCase().includes(s) || p.family.toLowerCase().includes(s)
      );
    },
    suggestedProducts() {
      return products.slice(0, 4);
    }
  },

  watch: {
    isOpen(val: boolean) {
      if (typeof document !== "undefined") {
        document.body.style.overflow = val ? "hidden" : "";
      }
      if (val) {
        this.$nextTick(() => {
          (this.$refs.searchInput as HTMLInputElement)?.focus();
        });
      } else {
        this.query = "";
      }
    }
  },

  methods: {
    handleOpenWishlist() {
      this.cartStore.activeTab = "wishlist";
      this.cartStore.isCartOpen = true;
      this.$emit("close");
    },

    getSearchImage(item: any, index: number): string {
      if (item.images && Array.isArray(item.images) && item.images.length > 0) {
        if (index === 1 && !item.images[1]) {
          return item.images[0];
        }
        return item.images[index] || item.images[0];
      }
      if (item.image) return item.image;
      return "";
    }
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as v;

.search {
  &__backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    z-index: 4999;
  }

  &__panel {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: v.$c-white;
    z-index: 5000;
    height: 60vh;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid v.$c-border-light;

    @media (max-width: 48rem) {
      height: 100vh;
    }
  }

  &__header {
    height: v.$h-header;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #f8f8f8;
    flex-shrink: 0;

    @media (max-width: 48rem) {
      padding: 0 15px;
      gap: 10px;
    }
  }

  &__col {
    flex: 1;
    display: flex;
    align-items: center;

    @media (max-width: 48rem) {
      flex: 0 0 auto;
    }

    &--right {
      justify-content: flex-end;
    }

    &--center {
      flex: 2;
      justify-content: center;

      @media (max-width: 48rem) {
        flex: 1;
        margin: 0 10px;
      }
    }
  }

  &__btn {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    padding: 0;

    :deep(svg) {
      width: 20px;
      height: 20px;
      stroke-width: 1.2;
    }
  }

  &__label {
    @include v.luxury-label(11px, 0.1em);
    display: block;

    @media (max-width: 48rem) {
      display: none;
    }
  }

  &__icon--mobile {
    display: none;

    @media (max-width: 48rem) {
      display: block;
    }
  }

  &__field {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 460px;
    background: #f6f6f6;
    padding: 8px 16px;
    border-radius: 2px;
  }

  &__icon {
    width: 14px;
    height: 14px;
    margin-right: 12px;
    opacity: 0.5;
    stroke-width: 1.2;
  }

  &__input {
    width: 100%;
    border: none;
    background: transparent;
    outline: none;
    @include v.luxury-label(11px, 0.05em);

    @media (max-width: 30rem) {
      font-size: 10px;
    }
  }

  &__body {
    flex: 1;
    overflow-y: auto;
    padding: 40px 18%;
    display: flex;
    flex-direction: column;

    @media (max-width: 75rem) {
      padding: 40px 10%;
    }

    @media (max-width: 48rem) {
      padding: 20px 15px;
    }
  }

  &__results {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  &__empty {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;

    p {
      @include v.luxury-label(v.rem(16), 0.1em);
      color: v.$c-black;
      text-align: center;
      line-height: 1.6;
      max-width: 80%;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

    @media (max-width: 64rem) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 48rem) {
      gap: 15px;
    }
  }

  &__section-label {
    display: block;
    @include v.luxury-label(v.rem(12), 0.15em);
    margin-bottom: 20px;
    color: #bbb;
  }
}

.result {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  position: relative;

  &__media {
    width: 100%;
    aspect-ratio: 1;
    background: #f9f9f9;
    margin-bottom: v.rem(15);
    display: block;
    position: relative;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: all 0.6s ease;

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

  &:hover {
    .result__image--primary {
      opacity: 0;
    }
    .result__image--hover {
      opacity: 1;
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
    margin-bottom: v.rem(6);
  }

  &__category {
    @include v.luxury-label(v.rem(11), 0.05em);
    color: v.$c-text-muted;
    text-transform: uppercase;
  }

  &__name {
    @include v.luxury-label(v.rem(13), 0.02em);
    color: v.$c-black;
    text-transform: uppercase;
    margin-bottom: v.rem(4);
    font-weight: 500;

    @media (max-width: 30rem) {
      font-size: v.rem(11);
    }
  }

  &__price {
    @include v.luxury-label(v.rem(12), 0);
    color: v.$c-black;
    opacity: 0.8;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.search-reveal-enter-active,
.search-reveal-leave-active {
  transition:
    transform 0.5s v.$tr-smooth,
    opacity 0.5s;
}
.search-reveal-enter-from,
.search-reveal-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
