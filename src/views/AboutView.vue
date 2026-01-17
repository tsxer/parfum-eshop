<template>
  <div class="about">
    <SplitLayout
      class="about__hero"
      label="Discover"
      title="ABOUT LUXE AROMA"
      imageSrc="/parfum-eshop/images/about/about_1.jpg"
    >
      <p>
        Luxe Aroma was founded with a vision to translate memories and emotions
        into objects and experiences. We take a sensorial-led approach to
        creativity, focusing on the raw essence of nature.
      </p>
    </SplitLayout>

    <SplitLayout
      label="Craftsmanship"
      title="THE BEGINNING"
      :isReversed="true"
      imageSrc="/parfum-eshop/images/about/about_2.jpg"
    >
      <p>
        In 1985, Jean-Claude Beaumont, a master perfumer trained in the
        legendary fragrance capital of Grasse, France, had a vision to create
        fragrances that would transcend time.
      </p>
      <p>
        Starting with a small atelier, Jean-Claude began crafting bespoke
        fragrances for discerning clientele, using only the finest natural
        ingredients.
      </p>
    </SplitLayout>

    <ValueProps :items="brandValues" />

    <section class="team">
      <div class="team__header">
        <span class="team__label">PEOPLE</span>
        <h2 class="team__title">THE ARTISANS</h2>
      </div>

      <div class="team__grid">
        <div
          v-for="member in teamMembers"
          :key="member.name"
          class="team__member"
        >
          <div class="team__photo-wrap">
            <img class="team__photo" :src="member.image" :alt="member.name" />
          </div>
          <div class="team__meta">
            <span class="team__name">{{ member.name }}</span>
            <span class="team__role">{{ member.role }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="stats">
      <div class="stats__header">
        <h2 class="stats__title">Our Achievements</h2>
        <p class="stats__subtitle">
          Numbers that reflect our commitment to excellence
        </p>
      </div>

      <div class="stats__grid">
        <div v-for="item in achievements" :key="item.label" class="stats__item">
          <span class="stats__value">{{ item.value }}</span>
          <span class="stats__label">{{ item.label }}</span>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="cta__content">
        <h2 class="cta__title">THE JOURNEY CONTINUES</h2>
        <p class="cta__text">
          Explore our collection of curated fragrances and find the one that
          speaks to your soul.
        </p>
        <router-link to="/products" class="cta__link">
          EXPLORE THE COLLECTION
          <i data-feather="arrow-right"></i>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SplitLayout from "@/components/common/SplitLayout.vue";
import ValueProps from "@/components/common/ValueProps.vue";
import { BRAND_VALUES } from "@/data/features_data";
import { TEAM_MEMBERS, ACHIEVEMENTS } from "@/data/company_data";

export default defineComponent({
  name: "AboutView",

  components: {
    SplitLayout,
    ValueProps
  },

  data() {
    return {
      brandValues: BRAND_VALUES,
      teamMembers: TEAM_MEMBERS,
      achievements: ACHIEVEMENTS
    };
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as v;

@mixin section-spacing {
  padding: clamp(5rem, 10vw, 10rem) 1.25rem;

  @media (max-width: 48rem) {
    padding: 4rem 1rem;
  }
}

.about {
  display: flex;
  flex-direction: column;
  margin-top: 4.375rem;
}

.team {
  @include section-spacing;
  background-color: v.$c-white;

  &__header {
    text-align: center;
    margin-bottom: clamp(3rem, 8vw, 5rem);
  }

  &__label {
    @include v.luxury-label(clamp(0.75rem, 2vw, 0.8125rem), 0.3em);
    color: v.$c-text-header;
    display: block;
    margin-bottom: 0.625rem;
  }

  &__title {
    @include v.luxury-label(clamp(1.25rem, 4vw, 1.75rem), 0.05em);
    font-weight: 400;
    color: v.$c-black;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    max-width: 75rem;
    margin: 0 auto;

    @media (max-width: 64rem) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem 1.25rem;
    }

    @media (max-width: 30rem) {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  &__photo-wrap {
    aspect-ratio: 3/4;
    margin-bottom: 1.25rem;
    overflow: hidden;
    background-color: #f9f9f9;
  }

  &__photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s ease;

    .team__member:hover & {
      transform: scale(1.05);
    }
  }

  &__meta {
    display: flex;
    flex-direction: column;
    gap: 0.3125rem;

    @media (max-width: 30rem) {
      align-items: center;
      text-align: center;
    }
  }

  &__name {
    @include v.luxury-label(0.875rem, 0.1em);
    color: v.$c-black;
    text-transform: uppercase;
  }

  &__role {
    @include v.luxury-label(0.625rem, 0.05em);
    color: v.$c-text-muted;
  }
}

.stats {
  @include section-spacing;
  background-color: v.$c-white;

  &__header {
    text-align: center;
    margin-bottom: clamp(3rem, 8vw, 6rem);
  }

  &__title {
    @include v.luxury-label(clamp(1.25rem, 4vw, 1.75rem), 0.05em);
    color: v.$c-black;
    margin-bottom: 1rem;
  }

  &__subtitle {
    @include v.luxury-label(0.75rem, 0.1em);
    color: v.$c-text-header;
    opacity: 0.8;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: 80rem;
    margin: 0 auto;

    @media (max-width: 48rem) {
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem 0;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
  }

  &__value {
    font-size: clamp(2rem, 6vw, 3.5rem);
    font-weight: 200;
    letter-spacing: -0.03em;
    color: v.$c-black;
    line-height: 1;
    margin-bottom: 0.75rem;
  }

  &__label {
    @include v.luxury-label(0.6875rem, 0.15em);
    color: v.$c-text-header;
    text-transform: uppercase;
  }
}

.cta {
  padding: clamp(5rem, 15vw, 11.25rem) 1.25rem;
  background-color: v.$c-white;
  text-align: center;
  display: flex;
  justify-content: center;

  &__content {
    max-width: 37.5rem;
  }

  &__title {
    @include v.luxury-label(clamp(1.25rem, 5vw, 1.75rem), 0.05em);
    margin-bottom: 1.875rem;
    color: v.$c-black;
  }

  &__text {
    color: v.$c-text-header;
    font-size: clamp(0.8125rem, 2vw, 0.875rem);
    line-height: 1.8;
    margin-bottom: 3.125rem;
    font-weight: 300;
  }

  &__link {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    @include v.luxury-label(0.75rem, 0.1em);
    color: v.$c-black;
    text-decoration: none;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid v.$c-black;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

    :deep(svg) {
      width: 1rem;
      height: 1rem;
      transition: all 0.4s ease-in-out;
    }

    &:hover {
      opacity: 0.5;
      gap: 1.25rem;

      :deep(svg) {
        transform: translateX(4px);
      }
    }
  }
}
</style>