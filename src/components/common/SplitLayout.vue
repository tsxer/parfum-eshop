<template>
  <section class="split" :class="{ 'split--reversed': isReversed }">
    <div class="split__content">
      <div class="split__container">
        <span v-if="label" class="split__label">{{ label }}</span>
        <h2 class="split__title">{{ title }}</h2>
        <div class="split__text">
          <slot>
            <p>{{ description }}</p>
          </slot>
        </div>
      </div>
    </div>

    <div class="split__media">
      <img :src="imageSrc" :alt="title" class="split__image" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SplitLayout",

  props: {
    label: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ""
    },
    imageSrc: {
      type: String,
      required: true
    },
    isReversed: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as v;

.split {
  display: flex;
  min-height: 100vh;
  width: 100%;
  background-color: v.$c-white;
  overflow: hidden;

  &--reversed {
    flex-direction: row-reverse;
  }

  @media (max-width: 64rem) {
    flex-direction: column !important;
    min-height: auto;
  }

  &__content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem 2rem;
  }

  &__container {
    max-width: 26rem;
    width: 100%;
  }

  &__label {
    @include v.luxury-label(0.65rem, 0.25em);
    color: v.$c-text-muted;
    display: block;
    margin-bottom: 2rem;
    text-transform: uppercase;
  }

  &__title {
    @include v.luxury-label(1.8rem, 0.05em);
    color: v.$c-black;
    margin-bottom: 2.5rem;
    font-weight: 400;
    line-height: 1.2;
  }

  &__text {
    :deep(p) {
      font-size: 0.95rem;
      line-height: 1.8;
      color: v.$c-text-main;
      margin-bottom: 1.5rem;
      font-weight: 300;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &__media {
    flex: 1.1;
    height: 100vh;
    position: relative;

    @media (max-width: 64rem) {
      height: 60vh;
      width: 100%;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
}
</style>
