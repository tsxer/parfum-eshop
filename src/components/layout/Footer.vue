<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__grid">
        <div class="footer__col footer__col--brand">
          <h2 class="footer__brand">LUXE AROMA</h2>
          <div class="footer__desc">
            <p>
              Discover the world's finest fragrances. From classic elegance to
              modern sophistication, our collection represents the pinnacle of
              perfumery artistry.
            </p>
          </div>
        </div>

        <div class="footer__col footer__col--links">
          <span class="footer__label">Quick Links</span>
          <nav class="footer__nav">
            <router-link
              v-for="link in quickLinks"
              :key="link.path"
              :to="link.path"
              class="footer__link"
            >
              {{ link.name }}
            </router-link>
          </nav>
        </div>

        <div class="footer__col footer__col--links">
          <span class="footer__label">Categories</span>
          <nav class="footer__nav">
            <router-link
              v-for="cat in categories"
              :key="cat.id"
              :to="{
                name: 'products-category',
                params: { category: cat.id }
              }"
              class="footer__link"
            >
              {{ cat.name }}
            </router-link>
          </nav>
        </div>

        <div class="footer__col footer__col--contact">
          <span class="footer__label">Contact Us</span>
          <div class="footer__contacts">
            <a
              href="https://goo.gl/maps/placeholder"
              target="_blank"
              rel="noopener"
              class="footer__contact"
            >
              <i data-feather="map-pin"></i>
              <span>Trieda Andreja Hlinku 603/1,<br />949 74 Nitra</span>
            </a>
            <a href="tel:0376408555" class="footer__contact">
              <i data-feather="phone"></i>
              <span>037 640 8555</span>
            </a>
            <a href="mailto:hello@luxearoma.com" class="footer__contact">
              <i data-feather="mail"></i>
              <span>hello@luxearoma.com</span>
            </a>
          </div>
        </div>
      </div>

      <div class="footer__bottom">
        <div class="footer__copyright">© 2025 LUXE AROMA</div>

        <div class="footer__socials">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            class="footer__social"
          >
            {{ social.name }}
          </a>
        </div>

        <div class="footer__region">
          <span>EUROPE (€) | ENGLISH</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",

  data() {
    return {
      quickLinks: [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" }
      ],
      categories: [
        { id: "men", name: "Men's Fragrances" },
        { id: "women", name: "Women's Fragrances" },
        { id: "oud", name: "Oud Collection" },
        { id: "unisex", name: "Unisex Perfumes" },
        { id: "travel", name: "Travel Sets" },
        { id: "limited", name: "Limited Edition" }
      ],
      socials: [
        { name: "FACEBOOK", url: "#" },
        { name: "INSTAGRAM", url: "#" },
        { name: "YOUTUBE", url: "#" },
        { name: "PINTEREST", url: "#" }
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as v;

.footer {
  background-color: v.$c-black;
  color: v.$c-white;
  padding: v.rem(100) 0 v.rem(40);
  border-top: v.rem(1) solid v.$c-border-dark;

  @media (max-width: 768px) {
    padding: v.rem(60) 0 v.rem(30);
  }

  &__container {
    max-width: v.rem(1600);
    margin: 0 auto;
    padding: 0 v.rem(60);

    @media (max-width: 768px) {
      padding: 0 v.rem(20);
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: 1.8fr 1fr 1fr 1.2fr;
    gap: v.rem(40);
    margin-bottom: v.rem(80);

    @media (max-width: 1200px) {
      grid-template-columns: 1.2fr 1fr 1fr;

      .footer__col--contact {
        display: none;
      }
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      text-align: center;
      gap: v.rem(50);

      .footer__col--contact {
        display: block;
      }
    }
  }

  &__col--brand {
    .footer__brand {
      @include v.luxury-label(v.rem(26), 0.18em);
      margin-bottom: v.rem(35);
      color: v.$c-white;
    }

    .footer__desc {
      max-width: v.rem(320);

      p {
        font-size: v.rem(14);
        color: v.$c-text-muted;
        line-height: 1.8;
        letter-spacing: 0.02em;
      }

      @media (max-width: 768px) {
        margin: 0 auto;
      }
    }
  }

  &__col--links,
  &__col--contact {
    .footer__label {
      display: block;
      @include v.luxury-label(v.rem(11), 0.2em);
      color: v.$c-text-header;
      margin-bottom: v.rem(40);
      text-transform: uppercase;
      font-weight: 600;
    }
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: v.rem(16);
  }

  &__link {
    @include v.luxury-label(v.rem(12), 0.1em);
    color: v.$c-white;
    text-decoration: none;
    transition: v.$tr-smooth;
    text-transform: uppercase;

    &:hover {
      opacity: 0.6;
    }
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: v.rem(20);
  }

  &__contact {
    display: flex;
    align-items: flex-start;
    gap: v.rem(16);
    text-decoration: none;
    color: v.$c-text-header;
    transition: v.$tr-smooth;

    @media (max-width: 768px) {
      justify-content: center;
    }

    :deep(svg) {
      width: v.rem(18);
      height: v.rem(18);
      stroke-width: 1.2;
      margin-top: v.rem(2);
    }

    span {
      font-size: v.rem(13);
      line-height: 1.5;
      letter-spacing: 0.02em;
    }

    &:hover {
      color: v.$c-white;
      opacity: 0.8;
    }
  }

  &__bottom {
    border-top: 1px solid v.$c-border-dark;
    padding-top: v.rem(40);
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include v.luxury-label(v.rem(11), 0.15em);
    color: v.$c-text-legal;
    text-transform: uppercase;

    @media (max-width: 768px) {
      flex-direction: column;
      gap: v.rem(30);
      text-align: center;
    }
  }

  &__socials {
    display: flex;
    gap: v.rem(40);

    @media (max-width: 430px) {
      flex-direction: column;
      gap: v.rem(20);
    }
  }

  &__social {
    color: v.$c-white;
    text-decoration: none;
    transition: v.$tr-smooth;

    &:hover {
      opacity: 0.5;
    }
  }

  &__region {
    cursor: pointer;
    transition: v.$tr-smooth;
    color: v.$c-white;

    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
