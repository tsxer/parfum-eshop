<template>
  <header class="header">
    <div class="header__inner">
      <div class="header__col header__col--left">
        <button class="header__btn" @click="isMenuOpen = true">
          <i data-feather="menu"></i>
          <span class="header__label">MENU</span>
        </button>
        <button class="header__btn" @click="isSearchOpen = true">
          <i data-feather="search"></i>
        </button>
      </div>

      <div class="header__col header__col--center">
        <router-link to="/" class="header__logo">LUXE AROMA</router-link>
      </div>

      <div class="header__col header__col--right">
        <button class="header__btn" @click="isCartOpen = true">
          <span class="header__label">CART ({{ cartCount }})</span>
          <i data-feather="shopping-cart"></i>
        </button>
      </div>
    </div>

    <SearchPanel :is-open="isSearchOpen" @close="isSearchOpen = false" />
    <MenuPanel :is-open="isMenuOpen" @close="isMenuOpen = false" />
    <Cart :isOpen="isCartOpen" @close="isCartOpen = false" />
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCartStore } from "@/stores/cart";
import SearchPanel from "@/components/overlays/Search.vue";
import MenuPanel from "@/components/overlays/Menu.vue";
import Cart from "@/components/overlays/Cart.vue";

export default defineComponent({
  name: "Header",

  components: {
    SearchPanel,
    MenuPanel,
    Cart
  },

  data() {
    return {
      isMenuOpen: false,
      isSearchOpen: false,
      isCartOpen: false
    };
  },

  computed: {
    cartCount() {
      const cartStore = useCartStore();
      return cartStore.items.reduce((sum, item) => sum + item.quantity, 0);
    }
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as v;

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  height: v.$h-header;
  background: v.$c-white;
  border-bottom: v.rem(1) solid v.$c-border-light;
  z-index: 1000;

  &__inner {
    height: 100%;
    padding: 0 v.rem(30);
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      padding: 0 v.rem(15);
    }

    @media (max-width: 400px) {
      padding: 0 v.rem(10);
    }
  }

  &__col {
    flex: 1;
    display: flex;
    align-items: center;
    gap: v.rem(15);

    @media (max-width: 430px) {
      gap: v.rem(8);
    }

    &--left {
      .header__label {
        @media (max-width: 430px) {
          display: none;
        }
      }
    }

    &--center {
      justify-content: center;
      padding: 0 v.rem(10);
    }

    &--right {
      justify-content: flex-end;

      .header__label {
        @media (max-width: 430px) {
          display: none;
        }
      }

      svg {
        display: none;

        @media (max-width: 430px) {
          display: block;
        }
      }
    }
  }

  &__logo {
    @include v.luxury-label(v.rem(28), 0.18em);
    color: v.$c-black;
    white-space: nowrap;
    padding-left: 0.18em;

    @media (max-width: 768px) {
      font-size: v.rem(20);
      letter-spacing: 0.12em;
    }

    @media (max-width: 375px) {
      font-size: v.rem(17);
    }
  }

  &__btn {
    flex-shrink: 0;
    background: none;
    border: none;
    padding: v.rem(8);
    display: flex;
    align-items: center;
    gap: v.rem(10);
    color: v.$c-black;
    cursor: pointer;
    transition: v.$tr-smooth;

    &:hover {
      opacity: 0.5;
    }

    :deep(svg) {
      width: v.rem(20);
      height: v.rem(20);
      stroke-width: 1.2;
      stroke: currentColor;
      fill: none;
      flex-shrink: 0;

      @media (max-width: 425px) {
        width: v.rem(18);
        height: v.rem(18);
      }
    }
  }

  &__label {
    @include v.luxury-label(v.rem(11), 0.1em);
  }
}
</style>
