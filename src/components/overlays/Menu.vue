<template>
  <div class="menu">
    <transition name="fade">
      <div v-if="isOpen" class="menu__backdrop" @click="closeMenu"></div>
    </transition>

    <transition name="panel-fade">
      <div v-if="isOpen" class="menu__overlay">
        <div class="menu__header">
          <div class="menu__col menu__col--left">
            <button class="menu__btn" @click="closeMenu">
              <i data-feather="x"></i>
              <span class="menu__label">CLOSE</span>
            </button>
          </div>

          <div class="menu__col menu__col--center"></div>

          <div class="menu__col menu__col--right">
            <button class="menu__btn" @click="handleOpenWishlist">
              <i data-feather="bookmark" class="menu__icon--mobile"></i>
              <span class="menu__label"
                >WISHLIST ({{ cartStore.wishlistCount }})</span
              >
            </button>
          </div>
        </div>

        <div class="menu__content">
          <div class="menu__grid">
            <div class="menu__group">
              <span class="menu__group-label">Collection</span>
              <nav class="menu__nav">
                <router-link
                  v-for="cat in categories"
                  :key="cat.id"
                  :to="{
                    name: 'products-category',
                    params: { category: cat.id }
                  }"
                  class="menu__link"
                  @click="closeMenu"
                >
                  {{ cat.name }}
                </router-link>
              </nav>
            </div>

            <div class="menu__group">
              <span class="menu__group-label">Information</span>
              <nav class="menu__nav">
                <router-link to="/" class="menu__link" @click="closeMenu">
                  Home
                </router-link>
                <router-link
                  to="/products"
                  class="menu__link"
                  @click="closeMenu"
                >
                  Products
                </router-link>
                <router-link to="/about" class="menu__link" @click="closeMenu">
                  About
                </router-link>
                <router-link
                  to="/contact"
                  class="menu__link"
                  @click="closeMenu"
                >
                  Contact
                </router-link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCartStore } from "@/stores/cart";
import featherMixin from "@/mixins/featherIcons";

export default defineComponent({
  name: "Menu",

  mixins: [featherMixin],

  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      categories: [
        { id: "men", name: "Men's Fragrances" },
        { id: "women", name: "Women's Fragrances" },
        { id: "oud", name: "Oud Collection" },
        { id: "unisex", name: "Unisex Perfumes" },
        { id: "travel", name: "Travel Sets" },
        { id: "limited", name: "Limited Edition" }
      ]
    };
  },

  computed: {
    cartStore() {
      return useCartStore();
    }
  },

  watch: {
    isOpen(newValue: boolean) {
      if (typeof document !== "undefined") {
        document.body.style.overflow = newValue ? "hidden" : "";
      }
    }
  },

  methods: {
    closeMenu() {
      this.$emit("close");
    },

    handleOpenWishlist() {
      this.cartStore.openWishlist();
      this.closeMenu();
    }
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as v;

.menu {
  &__backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(v.rem(2));
    z-index: 4999;
  }

  &__overlay {
    position: fixed;
    inset: 0;
    background: v.$c-white;
    z-index: 5000;
    overflow-y: auto;
  }

  &__header {
    max-width: 100vw;
    height: v.$h-header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 v.rem(30);

    @media (max-width: 768px) {
      padding: 0 v.rem(15);
    }
  }

  &__col {
    flex: 1;
    display: flex;
    align-items: center;

    &--center {
      justify-content: center;
    }

    &--right {
      justify-content: flex-end;
    }
  }

  &__btn {
    background: none;
    border: none;
    padding: v.rem(8);
    display: flex;
    align-items: center;
    gap: v.rem(10);
    color: v.$c-black;
    text-decoration: none;
    cursor: pointer;
    transition: v.$tr-smooth;
    flex-shrink: 0;

    :deep(svg) {
      width: v.rem(20);
      height: v.rem(20);
      stroke-width: 1.2;
      stroke: currentColor;
      fill: none;
    }

    &:hover {
      opacity: 0.5;
    }
  }

  &__label {
    @include v.luxury-label(v.rem(11), 0.1em);
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

  &__content {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 v.rem(30) 10vh;

    @media (max-width: 768px) {
      align-items: flex-start;
      padding-top: v.rem(30);
    }
  }

  &__grid {
    display: flex;
    gap: v.rem(150);

    @media (max-width: 992px) {
      gap: v.rem(80);
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: v.rem(50);
    }
  }

  &__group-label {
    display: block;
    @include v.luxury-label(v.rem(10), 0.25em);
    color: v.$c-text-muted;
    margin-bottom: v.rem(40);
    text-transform: uppercase;

    @media (max-width: 430px) {
      margin-bottom: v.rem(20);
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: v.rem(22);
  }

  &__link {
    @include v.luxury-label(v.rem(24), 0.02em);
    color: v.$c-black;
    text-decoration: none;
    transition: v.$tr-smooth;
    text-transform: uppercase;
    white-space: nowrap;

    &:hover {
      opacity: 0.5;
    }

    @media (max-width: 48rem) {
      font-size: v.rem(18);
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

.panel-fade-enter-active,
.panel-fade-leave-active {
  transition: opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.panel-fade-enter-from,
.panel-fade-leave-to {
  opacity: 0;
}
</style>
