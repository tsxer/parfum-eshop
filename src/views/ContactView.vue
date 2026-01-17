<template>
  <div class="contact">
    <header class="contact__header">
      <h1 class="contact__title">CONTACT US</h1>
      <p class="contact__subtitle">
        We're here to help you discover your perfect fragrance
      </p>
    </header>

    <section class="contact__grid">
      <section class="contact__item">
        <div class="contact__icon">
          <i data-feather="map-pin"></i>
        </div>
        <h2 class="contact__item-title">VISIT OUR BOUTIQUE</h2>
        <div class="contact__item-text">
          Trieda Andreja Hlinku 603/1,<br />
          949 74 Nitra-Chrenová
        </div>
        <a
          href="https://maps.app.goo.gl/8s8Z5kHozJfvBSM77"
          class="contact__link"
          target="_blank"
        >
          GET DIRECTIONS
        </a>
      </section>

      <section class="contact__item">
        <div class="contact__icon">
          <i data-feather="phone"></i>
        </div>
        <h2 class="contact__item-title">CALL US</h2>
        <div class="contact__item-text">
          <p>Main: 037 640 8555</p>
          <p>Support: 037 640 8555</p>
        </div>
        <a href="tel:0376408555" class="contact__link">CALL NOW</a>
      </section>

      <section class="contact__item">
        <div class="contact__icon">
          <i data-feather="mail"></i>
        </div>
        <h2 class="contact__item-title">EMAIL US</h2>
        <div class="contact__item-text">
          <p>hello@luxearoma.com</p>
          <p>support@luxearoma.com</p>
        </div>
        <a href="mailto:hello@luxearoma.com" class="contact__link"
          >SEND EMAIL</a
        >
      </section>

      <section class="contact__item">
        <div class="contact__icon">
          <i data-feather="clock"></i>
        </div>
        <h2 class="contact__item-title">BUSINESS HOURS</h2>
        <div class="contact__item-text">
          <p>Mon - Fri: 10am - 8pm</p>
          <p>Sat - Sun: 12pm - 5pm</p>
        </div>
        <a href="#" class="contact__link">VIEW SCHEDULE</a>
      </section>
    </section>

    <div class="contact__container">
      <section class="form">
        <h2 class="form__title">SEND US A MESSAGE</h2>

        <form @submit.prevent="handleSubmit" class="form__wrapper">
          <div class="form__row">
            <input
              type="text"
              placeholder="Name *"
              required
              class="form__input"
            />
          </div>

          <div class="form__row">
            <input
              type="email"
              placeholder="Email address *"
              required
              class="form__input"
            />
          </div>

          <div class="form__row form__row--select">
            <select required class="form__input form__select">
              <option value="" disabled selected>Subject *</option>
              <option value="consultation">Fragrance Consultation</option>
              <option value="order">Order Inquiry</option>
              <option value="support">Customer Support</option>
            </select>
            <i data-feather="chevron-down" class="form__chevron"></i>
          </div>

          <div class="form__row form__row--select">
            <select required class="form__input form__select">
              <option value="" disabled selected>Country *</option>
              <option value="us">United States</option>
              <option value="fr">France</option>
              <option value="uk">United Kingdom</option>
            </select>
            <i data-feather="chevron-down" class="form__chevron"></i>
          </div>

          <div class="form__row">
            <input type="text" placeholder="Order number" class="form__input" />
          </div>

          <div class="form__row form__row--textarea">
            <textarea
              placeholder="Your message *"
              required
              class="form__input form__textarea"
              maxlength="400"
              v-model="message"
            ></textarea>
            <span class="form__counter">
              {{ remainingChars }} CHARACTERS REMAINING
            </span>
          </div>

          <button type="submit" class="form__submit">SEND</button>
        </form>
      </section>

      <aside class="sidebar">
        <div class="sidebar__location">
          <div class="sidebar__map-wrap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1115.7452713566358!2d18.090963816183848!3d48.30853577647188!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b3ee4682d5deb%3A0xba2bad032d96b960!2sFaculty%20of%20Natural%20Sciences!5e0!3m2!1sru!2ssk!4v1766696679944!5m2!1sru!2ssk"
              style="border: 0"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="sidebar__map"
            ></iframe>
            <div class="sidebar__tag">
              <i data-feather="map-pin"></i>
              <span>Tr. A. Hlinku 603/1, Nitra</span>
            </div>
          </div>
        </div>

        <div class="sidebar__services">
          <h3 class="sidebar__title">OUR SERVICES</h3>

          <div class="sidebar__list">
            <div class="service">
              <div class="service__header">
                <div class="service__icon">
                  <i data-feather="message-circle"></i>
                </div>
                <h4 class="service__name">Fragrance Consultation</h4>
              </div>
              <div class="service__body">
                <p>
                  Personalized recommendations from our experts to find your
                  signature scent.
                </p>
                <ul class="service__details">
                  <li>One-on-one profiling</li>
                  <li>Scent layering techniques</li>
                </ul>
              </div>
            </div>

            <div class="service">
              <div class="service__header">
                <div class="service__icon">
                  <i data-feather="headphones"></i>
                </div>
                <h4 class="service__name">Customer Support</h4>
              </div>
              <div class="service__body">
                <p>
                  24/7 assistance for orders, returns, and product inquiries.
                </p>
              </div>
            </div>

            <div class="service">
              <div class="service__header">
                <div class="service__icon">
                  <i data-feather="star"></i>
                </div>
                <h4 class="service__name">VIP Services</h4>
              </div>
              <div class="service__body">
                <p>
                  Exclusive access to new releases and private events for our
                  valued clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <div class="faq">
      <section class="faq__section">
        <h2 class="faq__title">Frequently Asked Questions</h2>

        <div class="faq__list">
          <div
            v-for="(item, index) in faqItems"
            :key="index"
            class="faq__item"
            :class="{ 'faq__item--active': activeIndex === index }"
          >
            <button class="faq__question" @click="toggleFaq(index)">
              <span>{{ item.question }}</span>
              <i data-feather="chevron-right" class="faq__chevron"></i>
            </button>

            <div
              class="faq__answer-wrap"
              :style="{ height: activeIndex === index ? 'auto' : '0' }"
            >
              <div class="faq__answer">
                <p>{{ item.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import featherMixin from "@/mixins/featherIcons";
import { faqData } from "@/data/faq_data";

export default defineComponent({
  name: "ContactView",

  mixins: [featherMixin],

  data() {
    return {
      message: "",
      activeIndex: null as number | null,
      faqItems: faqData
    };
  },

  computed: {
    remainingChars(): number {
      return 400 - this.message.length;
    }
  },

  methods: {
    toggleFaq(index: number) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },

    handleSubmit() {
      this.message = "";
    }
  }
});
</script>

<style lang="scss" scoped>
@use "@/styles/variables" as v;

.contact {
  max-width: v.rem(1200);
  margin: 0 auto;
  padding: v.rem(128) v.rem(32);
  color: v.$c-black;
  font-family: v.$font-apple-text;

  @media (max-width: 768px) {
    padding: v.rem(112) v.rem(24);
  }

  &__header {
    text-align: center;
    margin-bottom: v.rem(96);
  }

  &__title {
    font-family: v.$font-apple-display;
    font-size: v.rem(40);
    letter-spacing: 0.2em;
    font-weight: 300;
    margin-bottom: v.rem(16);
    text-transform: uppercase;

    @media (max-width: 768px) {
      font-size: v.rem(28);
      letter-spacing: 0.15em;
    }
  }

  &__subtitle {
    font-size: v.rem(17);
    color: v.$c-text-header;

    @media (max-width: 768px) {
      font-size: v.rem(15);
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: v.rem(32);
    align-items: start;
    margin-bottom: v.rem(128);

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
      gap: v.rem(64) v.rem(32);
    }

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      gap: v.rem(48);
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__icon {
    height: v.rem(50);
    display: flex;
    align-items: center;
    margin-bottom: v.rem(24);
    color: v.$c-black;

    :deep(svg) {
      width: v.rem(28);
      height: v.rem(28);
      stroke: currentColor;
      stroke-width: 1.2px;

      @media (max-width: 768px) {
        width: v.rem(24);
        height: v.rem(24);
      }
    }
  }

  &__item-title {
    @include v.luxury-label(v.rem(13), 0.1em);
    margin-bottom: v.rem(24);
    height: v.rem(48);
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      font-size: v.rem(12);
      margin-bottom: v.rem(16);
    }
  }

  &__item-text {
    font-size: v.rem(14);
    line-height: 1.6;
    font-weight: 400;
    min-height: v.rem(80);
    margin-bottom: v.rem(32);
    color: v.$c-text-apple;

    @media (max-width: 768px) {
      font-size: v.rem(13);
      min-height: auto;
    }
  }

  &__link {
    @include v.luxury-label(v.rem(12), 0.1em);
    text-decoration: none;
    color: v.$c-black;
    border-bottom: 1px solid v.$c-black;
    padding-bottom: v.rem(4);
    transition: v.$tr-smooth;

    &:hover {
      opacity: 0.5;
    }
  }

  &__container {
    display: flex;
    gap: v.rem(112);
    margin-bottom: v.rem(128);
    align-items: flex-start;

    @media (max-width: 1024px) {
      flex-direction: column;
      gap: v.rem(64);
    }
  }
}

.form {
  flex: 1.6;
  width: 100%;
  max-width: v.rem(800);
  margin: 0 auto;

  &__title {
    @include v.luxury-label(v.rem(16), 0.1em);
    color: v.$c-text-header;
    margin-bottom: v.rem(40);
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: v.rem(12);
  }

  &__row {
    width: 100%;
    position: relative;

    &--select {
      position: relative;
      display: flex;
      align-items: center;
    }

    &--textarea {
      margin-top: v.rem(10);
    }
  }

  &__input {
    width: 100%;
    padding: v.rem(19) v.rem(24);
    background-color: #f5f5f5;
    border: 1px solid transparent;
    border-radius: 0;
    font-size: v.rem(15);
    color: v.$c-text-main;
    transition: v.$tr-smooth;

    &::placeholder {
      color: v.$c-text-muted;
      font-weight: 300;
    }

    &:focus {
      outline: none;
      background-color: #efefef;
      border: 1px solid v.$c-black;
    }
  }

  &__select {
    appearance: none;
    cursor: pointer;
    padding-right: v.rem(45);
    z-index: 1;
  }

  &__chevron {
    position: absolute;
    right: v.rem(20);
    width: v.rem(16);
    height: v.rem(16);
    color: v.$c-text-main;
    stroke-width: 1.5px;
    pointer-events: none;
    z-index: 2;
  }

  &__textarea {
    min-height: v.rem(200);
    resize: vertical;
    background-color: transparent;
    border: 1px solid v.$c-border-light;
    margin-top: v.rem(10);
  }

  &__counter {
    display: block;
    text-align: right;
    @include v.luxury-label(v.rem(10), 0.05em);
    color: v.$c-text-muted;
    margin-top: v.rem(8);
  }

  &__submit {
    margin-top: v.rem(32);
    background: v.$c-black;
    color: v.$c-white;
    border: 1px solid v.$c-black;
    border-radius: 0;
    padding: v.rem(19);
    @include v.luxury-label(v.rem(12), 0.15em);
    font-weight: 600;
    cursor: pointer;
    transition: v.$tr-smooth;

    &:hover {
      background-color: v.$c-border-dark;
      border-color: v.$c-border-dark;
    }
  }
}

.sidebar {
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;

  &__location {
    margin-bottom: v.rem(64);
  }

  &__map-wrap {
    position: relative;
    height: v.rem(300);
    width: 100%;
    overflow: hidden;
  }

  &__map {
    width: 100%;
    height: 100%;
    filter: grayscale(1) contrast(1.1);
  }

  &__tag {
    position: absolute;
    bottom: 0;
    left: 0;
    background: v.$c-white;
    padding: v.rem(16) v.rem(24);
    display: flex;
    align-items: center;
    gap: v.rem(10);
    @include v.luxury-label(v.rem(12), 0.05em);

    :deep(svg) {
      width: v.rem(14);
      height: v.rem(14);
    }
  }

  &__title {
    @include v.luxury-label(v.rem(16), 0.2em);
    color: v.$c-text-muted;
    margin-bottom: v.rem(40);
  }
}

.service {
  margin-bottom: v.rem(48);
  border-bottom: 1px solid v.$c-border-light;
  padding-bottom: v.rem(32);

  &:last-child {
    border-bottom: none;
  }

  &__header {
    display: flex;
    align-items: center;
    gap: v.rem(20);
    margin-bottom: v.rem(20);
  }

  &__icon {
    width: v.rem(40);
    height: v.rem(40);
    background-color: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;

    :deep(svg) {
      width: v.rem(18);
      stroke-width: 1.2px;
      color: v.$c-text-main;
    }
  }

  &__name {
    font-size: v.rem(15);
    font-weight: 500;
    letter-spacing: 0.02em;
    color: v.$c-text-main;
  }

  &__body {
    padding-left: v.rem(60);

    p {
      font-size: v.rem(13);
      line-height: 1.6;
      color: v.$c-text-legal;
      margin-bottom: v.rem(16);
    }
  }

  &__details {
    list-style: none;
    padding: 0;

    li {
      font-size: v.rem(12);
      color: v.$c-text-legal;
      margin-bottom: v.rem(6);
      display: flex;
      align-items: center;

      &::before {
        content: "";
        width: v.rem(4);
        height: v.rem(4);
        background: v.$c-text-legal;
        border-radius: 50%;
        margin-right: v.rem(12);
      }
    }
  }
}

.faq {
  max-width: v.rem(1000);
  margin: 0 auto;

  &__title {
    @include v.luxury-label(v.rem(20), 0.2em);
    text-align: center;
    margin-bottom: v.rem(96);
  }

  &__list {
    border-top: 1px solid v.$c-border-light;
    margin-bottom: v.rem(128);
  }

  &__item {
    border-bottom: 1px solid v.$c-border-light;
    overflow: hidden;

    &--active {
      .faq__chevron {
        transform: rotate(90deg);
      }

      .faq__answer-wrap {
        margin-bottom: v.rem(40);
      }
    }
  }

  &__question {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: v.rem(40) 0;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    transition: v.$tr-smooth;

    span {
      font-size: v.rem(18);
      font-weight: 500;
      color: v.$c-text-main;
    }
  }

  &__chevron {
    width: v.rem(20);
    height: v.rem(20);
    stroke-width: 1px;
    color: v.$c-black;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &__answer-wrap {
    overflow: hidden;
    transition:
      height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
      margin 0.5s;
  }

  &__answer {
    padding-right: v.rem(64);

    p {
      font-size: v.rem(15);
      line-height: 1.8;
      color: v.$c-text-legal;
    }
  }
}
</style>
