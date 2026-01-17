import type { PageConfig } from "@/types/common";

export const collectionConfigs: Record<string, PageConfig> = {
  all: {
    title: "THE ANTHOLOGY",
    label: "Full Discovery",
    image: "/parfum-eshop/images/splitblock/products_all.jpg",
    description:
      "A complete journey through our olfactory world. From the crystalline clarity of our Blanche collection to the profound depths of the Night Veils, this anthology represents a decade of boundary-pushing perfumery, where each bottle captures a singular memory or a fleeting emotion."
  },
  men: {
    title: "FOR HIM",
    label: "Modern Masculinity",
    gender: "Men",
    image: "/parfum-eshop/images/splitblock/products_men.jpg",
    description:
      "Characterized by structured woody bases and unexpected aromatic twists. This selection is designed for the modern gentleman, balancing traditional notes of raw leather, vetiver, and black pepper with a contemporary edge that speaks of confidence and understated luxury."
  },
  women: {
    title: "FOR HER",
    label: "Luminous Femininity",
    gender: "Women",
    image: "/parfum-eshop/images/splitblock/products_women.jpg",
    description:
      "A celebration of nature's most delicate and intoxicating elements. We explore femininity through radiant floral absolutes — from the fragile beauty of early spring tulips to the sensual, lingering trail of jasmine and damask rose, underpinned by a sophisticated modern finish."
  },
  unisex: {
    title: "UNISEX",
    label: "Fluid Boundaries",
    gender: "Unisex",
    image: "/parfum-eshop/images/splitblock/products_unisex.jpg",
    description:
      "Defying the conventions of traditional gender classification. These compositions focus on the purity of the raw ingredient — whether it be the crispness of gin-and-tonic notes or the warmth of velvet musk — creating an intimate dialogue between the fragrance and the wearer's skin."
  },
  oud: {
    title: "THE OUD COLLECTION",
    label: "Liquid Gold",
    family: "Oud",
    image: "/parfum-eshop/images/splitblock/products_oud.jpg",
    description:
      "Deep, dark, and profoundly spiritual. Inspired by the ancient traditions of Middle Eastern perfumery, our Oud collection centers around the most precious resin in the world. It is an exploration of complexity, where smoky agarwood meets the sweetness of raspberry and the spice of saffron."
  },
  travel: {
    title: "TRAVEL ESSENTIALS",
    label: "Nomadic Luxury",
    type: "Travel Set",
    image: "/parfum-eshop/images/splitblock/products_travel.jpg",
    description:
      "Your signature scent, wherever the journey leads. Our travel-sized atomizers and curated discovery sets are designed for the modern nomad. Encased in sleek, magnetic leather cases, these 12ml extraits ensure that your olfactory identity remains uncompromised, even at 30,000 feet."
  },
  limited: {
    title: "LIMITED RELEASES",
    label: "The Artist Series",
    isLimited: true,
    image: "/parfum-eshop/images/splitblock/products_limited.jpg",
    description:
      "Where art meets chemistry. These are our most exclusive creations — small-batch extraits, rare collaborations, and seasonal captures that will never be reproduced. Each bottle is a numbered piece of history, crafted for the most discerning collectors of invisible art."
  }
};
