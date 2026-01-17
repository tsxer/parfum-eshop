<template>
  <div class="success">
    <div class="success__content">
      <div class="success__icon">
        <i data-feather="check"></i>
      </div>

      <h1 class="success__title">THANK YOU</h1>
      <p class="success__text">YOUR ORDER HAS BEEN PLACED SUCCESSFULLY.</p>

      <router-link to="/" class="success__link">
        CONTINUE SHOPPING
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CheckoutSuccessView"
});
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as v;

.success {
  min-height: 70vh;
  padding: v.rem(128) v.rem(20);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: v.$c-white;
  flex: 1;

  @media (max-width: 48rem) {
    padding: v.rem(96) v.rem(16);
  }

  &__content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: v.rem(600);
  }

  &__icon {
    width: v.rem(64);
    height: v.rem(64);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: v.rem(40);

    :deep(svg) {
      width: v.rem(32);
      height: v.rem(32);
      stroke: v.$c-black;
      stroke-width: 1.2;
    }
  }

  &__title {
    @include v.luxury-label(v.rem(20), 0.15em);
    font-weight: 300;
    color: v.$c-black;
    margin-bottom: v.rem(16);

    @media (max-width: 48rem) {
      font-size: v.rem(16);
    }
  }

  &__text {
    @include v.luxury-label(v.rem(12), 0.05em);
    color: v.$c-text-muted;
    margin-bottom: v.rem(32);
  }

  &__link {
    @include v.luxury-label(v.rem(11), 0.1em);
    font-weight: 500;
    color: v.$c-black;
    text-decoration: none;
    border-bottom: v.rem(1) solid v.$c-black;
    padding-bottom: v.rem(4);
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
