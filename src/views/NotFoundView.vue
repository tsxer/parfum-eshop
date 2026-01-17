<template>
  <div class="not-found">
    <div class="not-found__content">
      <h1 class="not-found__title">PAGE NOT FOUND</h1>
      <router-link to="/" class="not-found__link">
        GO BACK TO HOMEPAGE
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotFoundView"
});
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as v;

.not-found {
  min-height: 70vh;
  padding: 8rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: v.$c-white;
  flex: 1;

  @media (max-width: 48rem) {
    padding: 6rem 1rem;
  }

  &__content {
    text-align: center;
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 300;
    letter-spacing: 0.15em;
    margin-bottom: 2.5rem;
    color: v.$c-black;

    @media (max-width: 48rem) {
      font-size: 1rem;
    }
  }

  &__link {
    font-size: 0.6875rem;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: v.$c-black;
    text-decoration: none;
    text-transform: uppercase;
    border-bottom: 0.0625rem solid v.$c-black;
    padding-bottom: 0.25rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }
}
</style>
