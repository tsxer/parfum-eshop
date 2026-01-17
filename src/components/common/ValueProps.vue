<template>
  <section class="props">
    <div
      class="props__container"
      :style="{
        'grid-template-columns': isMobile
          ? '1fr'
          : `repeat(${items.length}, 1fr)`
      }"
    >
      <div v-for="(item, index) in items" :key="index" class="props__item">
        <div class="props__icon">
          <i :data-feather="item.iconName"></i>
        </div>
        <h3 class="props__title">{{ item.title }}</h3>
        <p class="props__text">{{ item.text }}</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import featherMixin from "@/mixins/featherIcons";

interface PropItem {
  title: string;
  text: string;
  iconName: string;
}

export default defineComponent({
  name: "ValueProps",

  mixins: [featherMixin],

  props: {
    items: {
      type: Array as PropType<PropItem[]>,
      required: true
    }
  },

  data() {
    return {
      isMobile: false
    };
  },

  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.checkMobile);
  },

  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    }
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as v;

.props {
  background-color: v.$c-white;
  padding: 7.5rem 0;
  display: flex;
  justify-content: center;

  @media (max-width: 48rem) {
    padding: 5rem 0;
  }

  &__container {
    width: 100%;
    max-width: 75rem;
    display: grid;
    gap: 2.5rem;
    padding: 0 2.5rem;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    transition: v.$tr-smooth;

    &:hover {
      transform: translateY(-0.3125rem);
    }
  }

  &__icon {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    color: v.$c-black;

    :deep(svg) {
      width: 2rem;
      height: 2rem;
      stroke-width: 1.1px;
    }
  }

  &__title {
    @include v.luxury-label(0.8125rem, 0.2em);
    margin-bottom: 1rem;
    color: v.$c-black;
  }

  &__text {
    font-family: v.$font-apple-text;
    font-size: 0.875rem;
    line-height: 1.6;
    color: v.$c-text-apple;
    max-width: 15rem;
    font-weight: 400;
  }
}
</style>
