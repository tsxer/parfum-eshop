<template>
  <div class="filters">
    <Transition name="fade">
      <div v-if="isOpen" class="filters__overlay" @click="$emit('close')"></div>
    </Transition>

    <Transition name="slide-left">
      <aside v-if="isOpen" class="filters__sidebar">
        <div class="filters__header">
          <div class="filters__header-left">
            <h2 class="filters__title">FILTERS</h2>
          </div>

          <div class="filters__header-right">
            <button class="filters__close" @click="$emit('close')">
              <i data-feather="x"></i>
            </button>
            <Transition name="fade">
              <button
                v-if="hasActiveFilters"
                class="filters__clear"
                @click="resetAll"
              >
                CLEAR ALL
              </button>
            </Transition>
          </div>
        </div>

        <div class="filters__content">
          <div class="filter">
            <h3 class="filter__title">GENDER</h3>
            <div class="filter__grid">
              <label
                v-for="gen in ['Men', 'Women', 'Unisex', 'All']"
                :key="gen"
                class="filter__option"
              >
                <input
                  type="radio"
                  name="gender-filter"
                  :value="gen"
                  v-model="localGender"
                  class="filter__input"
                />
                <div class="filter__box">
                  <span class="filter__check"></span>
                </div>
                <span class="filter__label">{{ gen.toUpperCase() }}</span>
              </label>
            </div>
          </div>

          <div class="filter">
            <h3 class="filter__title">FRAGRANCE FAMILY</h3>
            <div class="filter__grid">
              <label
                v-for="fam in [
                  'Oud',
                  'Oriental',
                  'Floral',
                  'Fresh',
                  'Woody',
                  'Gourmand'
                ]"
                :key="fam"
                class="filter__option"
              >
                <input
                  type="checkbox"
                  :value="fam"
                  v-model="localFamily"
                  class="filter__input"
                />
                <div class="filter__box">
                  <span class="filter__check"></span>
                </div>
                <span class="filter__label">{{ fam.toUpperCase() }}</span>
              </label>
            </div>
          </div>

          <div class="filter">
            <h3 class="filter__title">COLLECTION TYPE</h3>
            <div class="filter__grid">
              <label
                v-for="t in ['Individual', 'Travel Set']"
                :key="t"
                class="filter__option"
              >
                <input
                  type="radio"
                  name="type-filter"
                  :value="t"
                  v-model="localType"
                  class="filter__input"
                />
                <div class="filter__box">
                  <span class="filter__check"></span>
                </div>
                <span class="filter__label">
                  {{ t === "Travel Set" ? "TRAVEL SETS" : "INDIVIDUAL" }}
                </span>
              </label>
            </div>
          </div>

          <div class="filter">
            <h3 class="filter__title">STATUS</h3>
            <div class="filter__grid">
              <label class="filter__option">
                <input
                  type="checkbox"
                  v-model="localIsLimited"
                  class="filter__input"
                />
                <div class="filter__box">
                  <span class="filter__check"></span>
                </div>
                <span class="filter__label">LIMITED EDITION</span>
              </label>
            </div>
          </div>

          <div class="filter">
            <h3 class="filter__title">PRICE RANGE</h3>
            <div class="filter__grid">
              <label
                v-for="tier in [100, 200, 300, 500]"
                :key="tier"
                class="filter__option"
              >
                <input
                  type="radio"
                  name="price-filter"
                  :value="tier"
                  v-model="localPrice"
                  class="filter__input"
                />
                <div class="filter__box">
                  <span class="filter__check"></span>
                </div>
                <span class="filter__label">UNDER {{ tier }} €</span>
              </label>
            </div>
          </div>
        </div>

        <div class="filters__footer">
          <button class="filters__apply" @click="$emit('close')">
            APPLY FILTERS
          </button>
        </div>
      </aside>
    </Transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";
import featherMixin from "@/mixins/featherIcons";

export default defineComponent({
  name: "ProductFilters",

  mixins: [featherMixin],

  props: {
    isOpen: { type: Boolean, required: true },
    family: { type: Array as PropType<string[]>, required: true },
    gender: { type: String, required: true },
    price: { type: Number, required: true },
    type: { type: String, default: "Individual" },
    isLimited: { type: Boolean, default: false }
  },

  emits: [
    "close",
    "update:family",
    "update:gender",
    "update:price",
    "update:type",
    "update:isLimited",
    "reset",
    "update:activeFiltersCount"
  ],

  data() {
    return {
      localFamily: [...this.family],
      localGender: this.gender,
      localPrice: this.price,
      localType: this.type || "Individual",
      localIsLimited: this.isLimited || false,
      isUpdatingFromProps: false
    };
  },

  computed: {
    hasActiveFilters(): boolean {
      return (
        this.localFamily.length > 0 ||
        this.localGender !== "All" ||
        this.localPrice !== 500 ||
        this.localType === "Travel Set" ||
        this.localIsLimited
      );
    },
    activeFiltersCount(): number {
      let count = 0;
      if (this.localFamily.length > 0) count += this.localFamily.length;
      if (this.localGender !== "All") count++;
      if (this.localPrice !== 500) count++;
      if (this.localType === "Travel Set") count++;
      if (this.localIsLimited) count++;
      return count;
    }
  },

  watch: {
    family: {
      deep: true,
      handler(newVal) {
        if (!this.isUpdatingFromProps) {
          this.isUpdatingFromProps = true;
          this.localFamily = [...newVal];
          this.$nextTick(() => (this.isUpdatingFromProps = false));
        }
      }
    },
    gender(newVal) {
      if (!this.isUpdatingFromProps && newVal !== this.localGender) {
        this.isUpdatingFromProps = true;
        this.localGender = newVal;
        this.$nextTick(() => (this.isUpdatingFromProps = false));
      }
    },
    price(newVal) {
      if (!this.isUpdatingFromProps && newVal !== this.localPrice) {
        this.isUpdatingFromProps = true;
        this.localPrice = newVal;
        this.$nextTick(() => (this.isUpdatingFromProps = false));
      }
    },
    type(newVal) {
      if (!this.isUpdatingFromProps && newVal !== this.localType) {
        this.isUpdatingFromProps = true;
        this.localType = newVal || "Individual";
        this.$nextTick(() => (this.isUpdatingFromProps = false));
      }
    },
    isLimited(newVal) {
      if (!this.isUpdatingFromProps && newVal !== this.localIsLimited) {
        this.isUpdatingFromProps = true;
        this.localIsLimited = newVal || false;
        this.$nextTick(() => (this.isUpdatingFromProps = false));
      }
    },

    localFamily: {
      deep: true,
      handler(v) {
        if (!this.isUpdatingFromProps) this.$emit("update:family", v);
      }
    },
    localGender(v) {
      if (!this.isUpdatingFromProps) this.$emit("update:gender", v);
    },
    localPrice(v) {
      if (!this.isUpdatingFromProps) this.$emit("update:price", v);
    },
    localType(v) {
      if (!this.isUpdatingFromProps) this.$emit("update:type", v);
    },
    localIsLimited(v) {
      if (!this.isUpdatingFromProps) this.$emit("update:isLimited", v);
    },

    activeFiltersCount: {
      immediate: true,
      handler(count) {
        this.$emit("update:activeFiltersCount", count);
      }
    },

    isOpen(val) {
      if (val) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    }
  },

  beforeUnmount() {
    document.body.style.overflow = "";
  },

  methods: {
    resetAll() {
      this.localFamily = [];
      this.localGender = "All";
      this.localPrice = 500;
      this.localType = "Individual";
      this.localIsLimited = false;
      this.$emit("reset");
    }
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as v;

.filters {
  &__overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);
    z-index: 9999;
  }

  &__sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: v.rem(420);
    height: 100%;
    background: v.$c-white;
    z-index: 99999;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #f2f2f2;
  }

  &__header {
    padding: v.rem(40) v.rem(40) v.rem(20);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__header-right {
    display: flex;
    flex-direction: row-reverse;
    gap: v.rem(20);
  }

  &__title {
    @include v.luxury-label(v.rem(16), 0.05em);
    font-weight: 500;
    color: v.$c-black;
  }

  &__clear {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    @include v.luxury-label(v.rem(10), 0.05em);
    text-decoration: underline;
    text-underline-offset: 4px;
    color: v.$c-black;
    transition: v.$tr-smooth;
  }

  &__close {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    color: v.$c-black;

    :deep(svg) {
      width: v.rem(20);
      height: v.rem(20);
      stroke-width: 1px;
    }
  }

  &__content {
    flex: 1;
    overflow-y: auto;
    padding: 0 v.rem(40) v.rem(40);
  }

  &__footer {
    padding: v.rem(32) v.rem(40);
  }

  &__apply {
    width: 100%;
    background: v.$c-black;
    color: v.$c-white;
    border: 1px solid v.$c-black;
    padding: v.rem(18);
    @include v.luxury-label(v.rem(11), 0.1em);
    cursor: pointer;
    transition: v.$tr-smooth;

    &:hover {
      opacity: 0.8;
    }
  }
}

.filter {
  margin-top: v.rem(40);
  padding-top: v.rem(25);

  &__title {
    @include v.luxury-label(v.rem(10), 0.05em);
    color: #999;
    margin-bottom: v.rem(20);
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: v.rem(12) v.rem(20);
  }

  &__option {
    display: flex;
    align-items: center;
    gap: v.rem(12);
    cursor: pointer;
    padding: v.rem(4) 0;
  }

  &__input {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  &__box {
    position: relative;
    width: v.rem(16);
    height: v.rem(16);
    border: 1px solid v.$c-black;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.2s v.$tr-smooth;
  }

  &__check {
    &::after {
      content: "";
      position: absolute;
      top: 25%;
      left: 25%;
      width: 50%;
      height: 50%;
      background-color: v.$c-black;
      transform: scale(0);
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    }
  }

  &__input:checked ~ &__box {
    border-color: v.$c-black;
  }

  &__input:checked ~ &__box &__check:after {
    transform: scale(1);
  }

  &__label {
    @include v.luxury-label(v.rem(11), 0.02em);
    color: v.$c-black;
    transition: opacity 0.3s v.$tr-smooth;
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

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-100%);
}
</style>
