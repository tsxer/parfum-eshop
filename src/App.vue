<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <Cart :is-open="cartStore.isCartOpen" @close="cartStore.closeCart" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCartStore } from "@/stores/cart";
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Cart from "@/components/overlays/Cart.vue";

export default defineComponent({
  name: "App",

  components: {
    Header,
    Footer,
    Cart
  },

  computed: {
    cartStore() {
      return useCartStore();
    }
  },

  mounted() {
    this.initFeather();
  },

  methods: {
    initFeather() {
      const feather = (window as any).feather;
      if (feather) {
        feather.replace();
        const observer = new MutationObserver(() => {
          feather.replace();
        });
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    }
  }
});
</script>
