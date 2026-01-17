<template>
  <div class="collection">
    <ProductFilters
      :is-open="isFiltersOpen"
      @close="isFiltersOpen = false"
      @reset="resetAll"
      @update:active-filters-count="activeFiltersCount = $event"
      v-model:family="activeFamily"
      v-model:gender="activeGender"
      v-model:price="activeMaxPrice"
      v-model:type="activeType"
      v-model:is-limited="activeIsLimited"
    />

    <SplitLayout
      class="collection__hero"
      :label="currentConfig.label"
      :title="currentConfig.title"
      :imageSrc="currentConfig.image"
    >
      <p>{{ currentConfig.description }}</p>
    </SplitLayout>

    <main class="products">
      <div class="products__toolbar">
        <div class="products__search">
          <i data-feather="search" class="products__search-icon"></i>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="SEARCH PRODUCTS..."
            class="products__search-input"
          />
        </div>

        <div class="products__controls">
          <button class="products__filter-btn" @click="isFiltersOpen = true">
            FILTERS
            <span class="products__count">({{ activeFiltersCount }})</span>
          </button>

          <button class="products__filter-icon" @click="isFiltersOpen = true">
            <i data-feather="filter"></i>
          </button>

          <div class="products__sort">
            <select v-model="sortBy" class="products__select">
              <option value="newest">SORT BY: NEWEST</option>
              <option value="low-to-high">PRICE: LOW TO HIGH</option>
              <option value="high-to-low">PRICE: HIGH TO LOW</option>
            </select>
            <i class="products__chevron" data-feather="chevron-down"></i>
          </div>
        </div>
      </div>

      <template v-if="filteredProducts.length > 0">
        <div class="products__stats">
          Showing {{ displayedProducts.length }} of
          {{ filteredProducts.length }} products
        </div>

        <div class="products__grid">
          <ProductCard
            v-for="product in displayedProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </template>

      <div v-else class="products__empty">
        <div class="products__empty-content">
          <p class="products__empty-message">
            NO RESULTS WERE FOUND FOR
            <span class="products__empty-highlight"
              >"{{ searchQuery.toUpperCase() }}"</span
            >.
          </p>
          <button class="products__empty-btn" @click="resetAll">
            CLEAR ALL FILTERS
          </button>
        </div>
      </div>

      <div v-if="hasMore" class="products__load-more">
        <button @click="limit += 16" class="products__load-btn">
          LOAD MORE <span class="products__load-step">+16</span>
        </button>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Product } from "@/types/product";
import { products } from "@/data/products_data";
import { collectionConfigs } from "@/data/pageconfigs_data";
import ProductCard from "@/components/product/ProductCard.vue";
import SplitLayout from "@/components/common/SplitLayout.vue";
import ProductFilters from "@/components/overlays/ProductFilters.vue";
import featherMixin from "@/mixins/featherIcons";

interface PageConfig {
  title: string;
  label: string;
  gender?: string;
  family?: string;
  type?: string;
  isLimited?: boolean;
  image: string;
  description: string;
}

export default defineComponent({
  name: "CollectionView",

  components: {
    ProductCard,
    SplitLayout,
    ProductFilters
  },

  mixins: [featherMixin],

  data() {
    return {
      activeFamily: [] as string[],
      activeGender: "All",
      activeMaxPrice: 500,
      activeType: "Individual",
      activeIsLimited: false,
      isFiltersOpen: false,
      searchQuery: "",
      limit: 16,
      sortBy: "newest",
      activeFiltersCount: 0,
      allProducts: products as Product[]
    };
  },

  computed: {
    currentConfig(): PageConfig {
      const category = (this.$route.params.category as string) || "all";
      return collectionConfigs[category] || collectionConfigs.all;
    },

    filteredProducts(): Product[] {
      return this.allProducts
        .filter((p: Product) => {
          const search = p.name
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase());

          const family =
            this.activeFamily.length === 0 ||
            this.activeFamily.includes(p.family);

          const gender =
            this.activeGender === "All" || p.gender === this.activeGender;

          const price = p.price <= this.activeMaxPrice;

          const type =
            this.activeType === "Individual"
              ? p.type === "Individual"
              : p.type === this.activeType;

          const limited = this.activeIsLimited ? p.isLimited === true : true;

          return search && family && gender && price && type && limited;
        })
        .sort((a: Product, b: Product) => {
          if (this.sortBy === "low-to-high") return a.price - b.price;
          if (this.sortBy === "high-to-low") return b.price - a.price;
          return b.id - a.id;
        });
    },

    displayedProducts(): Product[] {
      return this.filteredProducts.slice(0, this.limit);
    },

    hasMore(): boolean {
      return this.limit < this.filteredProducts.length;
    }
  },

  watch: {
    "$route.params.category": {
      handler() {
        this.applyPageSettings();
      },
      immediate: true
    }
  },

  methods: {
    applyPageSettings() {
      const category = (this.$route.params.category as string) || "all";
      const config = collectionConfigs[category] || collectionConfigs.all;

      this.activeGender = config.gender || "All";
      this.activeFamily = config.family ? [config.family] : [];
      this.activeIsLimited = config.isLimited || false;
      this.activeType = config.type || "Individual";
      this.searchQuery = "";
      this.limit = 16;
    },

    resetAll() {
      this.applyPageSettings();
      this.activeMaxPrice = 500;
    }
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as v;

.collection {
  margin-top: v.$h-header;

  &__hero {
    :deep(.split__content) {
      padding-top: v.rem(100);
    }
  }
}

.products {
  max-width: v.rem(1600);
  margin: 0 auto;
  padding: v.rem(80) v.rem(40);

  @media (max-width: 48rem) {
    padding: v.rem(40) v.rem(20);
  }

  &__toolbar {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: v.rem(40);
    margin-bottom: v.rem(40);
    padding-bottom: v.rem(12);
    border-bottom: 1px solid v.$c-border-light;

    @media (max-width: 48rem) {
      flex-direction: column;
      align-items: stretch;
      gap: v.rem(20);
    }
  }

  &__search {
    display: flex;
    align-items: center;
    gap: v.rem(12);
    flex: 1;
    max-width: v.rem(350);

    @media (max-width: 48rem) {
      max-width: 100%;
    }
  }

  &__search-icon {
    width: v.rem(20);
    height: v.rem(20);
    stroke-width: 1px;
    color: v.$c-black;
    opacity: 0.6;
  }

  &__search-input {
    width: 100%;
    border: none;
    background: transparent;
    outline: none;
    @include v.luxury-label(v.rem(11), 0.05em);
    color: v.$c-black;
    padding: v.rem(4) 0;

    &::placeholder {
      color: #b0b0b0;
    }
  }

  &__controls {
    display: flex;
    align-items: center;
    gap: v.rem(32);

    @media (max-width: 48rem) {
      justify-content: space-between;
    }
  }

  &__filter-btn {
    background: none;
    border: none;
    @include v.luxury-label(v.rem(11), 0.05em);
    color: v.$c-black;
    cursor: pointer;
    padding: v.rem(4) 0;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.6;
    }

    @media (max-width: 48rem) {
      display: none;
    }
  }

  &__filter-icon {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    color: v.$c-black;

    @media (max-width: 48rem) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :deep(svg) {
      width: v.rem(20);
      height: v.rem(20);
      stroke-width: 1.2px;
    }
  }

  &__count {
    font-size: v.rem(9);
    margin-left: v.rem(4);
    opacity: 0.6;
  }

  &__sort {
    position: relative;
    display: flex;
    align-items: center;
  }

  &__select {
    appearance: none;
    background: none;
    border: none;
    @include v.luxury-label(v.rem(11), 0.05em);
    color: v.$c-black;
    cursor: pointer;
    padding: v.rem(4) v.rem(24) v.rem(4) 0;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.6;
    }

    @media (max-width: 48rem) {
      font-size: v.rem(10);
    }
  }

  &__chevron {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: v.rem(12);
    height: v.rem(12);
    pointer-events: none;
    color: v.$c-black;
    stroke-width: 1.5px;
  }

  &__stats {
    @include v.luxury-label(v.rem(11), 0.05em);
    color: v.$c-text-muted;
    margin-bottom: v.rem(32);
    text-transform: uppercase;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: v.rem(60) v.rem(24);
    margin-bottom: v.rem(60);

    @media (max-width: 75rem) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 64rem) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 30rem) {
      grid-template-columns: 1fr;
      gap: v.rem(40);
    }
  }

  &__empty {
    padding: v.rem(100) 0;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  &__empty-content {
    max-width: v.rem(500);
  }

  &__empty-message {
    @include v.luxury-label(v.rem(16), 0.08em);
    color: v.$c-black;
    margin-bottom: v.rem(12);
    line-height: 1.6;
    text-transform: uppercase;
  }

  &__empty-highlight {
    font-weight: 600;
  }

  &__empty-btn {
    background: none;
    border: none;
    border-bottom: 1px solid v.$c-black;
    padding: v.rem(2) 0;
    @include v.luxury-label(v.rem(11), 0.1em);
    color: v.$c-black;
    cursor: pointer;
    transition: v.$tr-smooth;

    &:hover {
      opacity: 0.6;
    }
  }

  &__load-more {
    display: flex;
    justify-content: center;
    padding: v.rem(40) 0;
  }

  &__load-btn {
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

    @media (max-width: 48rem) {
      width: 100%;
      justify-content: center;
    }
  }

  &__load-step {
    font-size: v.rem(10);
    opacity: 0.7;
  }
}
</style>
