import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    name: "MOJAVE GHOST",
    slug: "mojave-ghost",
    price: 165,
    size: "50 ML",
    family: "Oriental",
    gender: "Unisex",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/Mojave_Ghost/Mojave_Ghost_1.jpg",
      "/parfum-eshop/images/products/Mojave_Ghost/Mojave_Ghost_2.jpg",
      "/parfum-eshop/images/products/Mojave_Ghost/Mojave_Ghost_3.jpg",
      "/parfum-eshop/images/products/Mojave_Ghost/Mojave_Ghost_4.jpg"
    ],
    description:
      "With its name meaning 'Ghost of the Mojave Desert', Mojave Ghost is a woody composition inspired by the soulful beauty of the Mojave Desert. In this xeric wilderness, rare are the plants that dare to blossom.",
    notes: {
      top: ["Ambrette", "Nesberry"],
      heart: ["Magnolia", "Sandalwood", "Violet"],
      base: ["Cedarwood", "Musks", "Amber"]
    }
  },
  {
    id: 2,
    name: "GYPSY WATER",
    slug: "gypsy-water",
    price: 245,
    size: "50 ML",
    family: "Woody",
    gender: "Unisex",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/Gypsy_Water/Gypsy_1.jpg",
      "/parfum-eshop/images/products/Gypsy_Water/Gypsy_2.jpg",
      "/parfum-eshop/images/products/Gypsy_Water/Gypsy_3.jpg",
      "/parfum-eshop/images/products/Gypsy_Water/Gypsy_4.jpg"
    ],
    description:
      "Gypsy Water is inspired by the Romani lifestyle of a colorful caravan in the forest, with smoky, woody notes.",
    notes: {
      top: ["Bergamot", "Lemon", "Pepper"],
      heart: ["Incense", "Pine Needles", "Orris"],
      base: ["Vanilla", "Sandalwood", "Amber"]
    }
  },
  {
    id: 3,
    name: "BAL D'AFRIQUE",
    slug: "bal-dafrique",
    price: 245,
    size: "50 ML",
    family: "Floral",
    gender: "Unisex",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/Bal_dAfrique/Bal_1.jpg",
      "/parfum-eshop/images/products/Bal_dAfrique/Bal_2.jpg",
      "/parfum-eshop/images/products/Bal_dAfrique/Bal_3.jpg",
      "/parfum-eshop/images/products/Bal_dAfrique/Bal_4.jpg"
    ],
    description:
      "Bal d'Afrique is a voyage to African culture and Paris in the late '20s, evoking the essence of Josephine Baker.",
    notes: {
      top: ["African Marigold", "Bergamot", "Lemon"],
      heart: ["Violet", "Jasmin", "Cyclamen"],
      base: ["Amber", "Musk", "Vetiver"]
    }
  },
  {
    id: 4,
    name: "BLANCHE",
    slug: "blanche",
    price: 245,
    size: "50 ML",
    family: "Floral",
    gender: "Unisex",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/Blanche/Blanche_1.jpg",
      "/parfum-eshop/images/products/Blanche/Blanche_2.jpg",
      "/parfum-eshop/images/products/Blanche/Blanche_3.jpg",
      "/parfum-eshop/images/products/Blanche/Blanche_4.jpg"
    ],
    description:
      "A longstanding icon in our catalogue, Blanche explores the smell of texture and skin; bodies slipping beneath fresh sheets; laundry baskets filled to the brim; a punch of detergent. An aldehyde hit softens into delicate rose; through sandalwood and musk, the allure of human touch.",
    notes: {
      top: ["Aldehyde", "Rose Centifolia"],
      heart: ["Peony", "Violet"],
      base: ["Musks", "Sandalwood"]
    }
  },
  {
    id: 5,
    name: "BLACK SAFFRON",
    slug: "black-saffron",
    price: 245,
    size: "50 ML",
    family: "Oriental",
    gender: "Unisex",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/Black_Saffron/Black_Saffron_1.jpg",
      "/parfum-eshop/images/products/Black_Saffron/Black_Saffron_2.jpg",
      "/parfum-eshop/images/products/Black_Saffron/Black_Saffron_3.jpg",
      "/parfum-eshop/images/products/Black_Saffron/Black_Saffron_4.jpg"
    ],
    description:
      "Inspired by the sublime unity of Ben Gorham's Indian heritage, Black Saffron is a dry woody oriental fragrance. Saffron, the most sacred spice in India, is the heart of the scent, blending with leather and dark berries for a composition that is both smoky and sweet, evocative of warmth and deep cultural roots.",
    notes: {
      top: ["Juniper Berries", "Pomelo", "Saffron"],
      heart: ["Black Violet", "Cristal Rose", "Leather"],
      base: ["Blonde Woods", "Raspberry", "Vetiver"]
    }
  },
  {
    id: 6,
    name: "ROSE OF NO MAN'S LAND",
    slug: "rose-of-no-mans-land",
    price: 245,
    size: "50 ML",
    family: "Floral",
    gender: "Unisex",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/Rose_No_Mans/Rose_1.jpg",
      "/parfum-eshop/images/products/Rose_No_Mans/Rose_2.jpg",
      "/parfum-eshop/images/products/Rose_No_Mans/Rose_3.jpg",
      "/parfum-eshop/images/products/Rose_No_Mans/Rose_4.jpg"
    ],
    description:
      "A tribute to the nurses who saved thousands of lives during WWI, this scent is a sophisticated floral. Pink pepper provides the necessary optimism to break through the dry rose petals, while a heart of raspberry blossom and base of papyrus create a contemporary, almost medicinal elegance.",
    notes: {
      top: ["Pink Pepper", "Turkish Rose Petals"],
      heart: ["Raspberry Blossom", "Turkish Rose Absolute"],
      base: ["Papyrus", "White Amber"]
    }
  },
  {
    id: 7,
    name: "SUPER CEDAR",
    slug: "super-cedar",
    price: 245,
    size: "50 ML",
    family: "Woody",
    gender: "Unisex",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/Super_Cedar/Cedar_1.jpg",
      "/parfum-eshop/images/products/Super_Cedar/Cedar_2.jpg",
      "/parfum-eshop/images/products/Super_Cedar/Cedar_3.jpg",
      "/parfum-eshop/images/products/Super_Cedar/Cedar_4.jpg"
    ],
    description:
      "A nostalgic scent that evokes school days and simpler times. Super Cedar is a powerful wood composition that is immediately recognizable. Cedarwood, one of the most familiar scents to the human nose, is modernised with silken musks and a hint of rose petal.",
    notes: {
      top: ["Rose Petals"],
      heart: ["Virginian Cedarwood"],
      base: ["Haitian Vetiver", "Silk Musk"]
    }
  },
  {
    id: 8,
    name: "SUNDAY COLOGNE",
    slug: "sunday-cologne",
    price: 245,
    size: "50 ML",
    family: "Woody",
    gender: "Men",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/Sunday_Cologne/Sunday_1.jpg",
      "/parfum-eshop/images/products/Sunday_Cologne/Sunday_2.jpg",
      "/parfum-eshop/images/products/Sunday_Cologne/Sunday_3.jpg",
      "/parfum-eshop/images/products/Sunday_Cologne/Sunday_4.jpg"
    ],
    description:
      "A sharp, crisp and cologne-like fragrance, Sunday Cologne is the olfactory definition of a dapper gentleman. It balances citrus notes with spicy cardamon and a woody backdrop, making it perfect for both a relaxed Sunday morning and a formal occasion.",
    notes: {
      top: ["Bergamot", "Cardamom", "Star Anise"],
      heart: ["Geranium", "Incense", "Lavender"],
      base: ["Vetiver", "Moss", "Patchouli"]
    }
  },
  {
    id: 9,
    name: "DESERT DAWN",
    slug: "desert-dawn",
    price: 245,
    size: "50 ML",
    family: "Woody",
    gender: "Men",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/Desert_Dawn/Desert_1.jpg",
      "/parfum-eshop/images/products/Desert_Dawn/Desert_2.jpg",
      "/parfum-eshop/images/products/Desert_Dawn/Desert_3.jpg",
      "/parfum-eshop/images/products/Desert_Dawn/Desert_4.jpg"
    ],
    description:
      "Inspired by the creative juxtapositions of nature, Desert Dawn is a modern take on the woody family. It captures the dry heat of the desert and the first rays of dawn, blending spicy cardamom with a powerful heart of sandalwood and cedarwood for a scent that is both grounding and expansive.",
    notes: {
      top: ["Cardamom", "Rose Petals"],
      heart: ["Sandalwood", "Cedarwood", "Carrot Seeds"],
      base: ["Papyrus", "Vetiver", "Silk Musk"]
    }
  },
  {
    id: 10,
    name: "OUD IMMORTEL",
    slug: "oud-immortel",
    price: 245,
    size: "50 ML",
    family: "Woody",
    gender: "Men",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/Oud_Immortel/Oud_1.jpg",
      "/parfum-eshop/images/products/Oud_Immortel/Oud_2.jpg",
      "/parfum-eshop/images/products/Oud_Immortel/Oud_3.jpg",
      "/parfum-eshop/images/products/Oud_Immortel/Oud_4.jpg"
    ],
    description:
      "Oud Immortel is a woody fragrance where patchouli and papyrus are blended to bring smokiness. The tobacco leaves and moss add depth and complexity while the incense and rosewood provide an elegant, ambery trail. It is a complex, dark, yet fresh interpretation of traditional oud.",
    notes: {
      top: ["Cardamom", "Incense", "Limoncello"],
      heart: ["Patchouli", "Papyrus", "Rosewood"],
      base: ["Oakmoss", "Tobacco Leaves"]
    }
  },
  {
    id: 11,
    name: "M/MINK",
    slug: "m-mink",
    price: 245,
    size: "100 ML",
    family: "Oriental",
    gender: "Men",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/M_Mink/Mink_1.jpg",
      "/parfum-eshop/images/products/M_Mink/Mink_2.jpg",
      "/parfum-eshop/images/products/M_Mink/Mink_3.jpg",
      "/parfum-eshop/images/products/M_Mink/Mink_4.jpg"
    ],
    description:
      "A collaborative effort between us and creative partnership M/M (Paris). M/MINK is a truly unique scent inspired by a block of solid ink, a photograph showing a Japanese master practicing his calligraphy, and a large utopian formula. The result is a hypnotic, smoky and inky composition.",
    notes: {
      top: ["Adoxal"],
      heart: ["Incense"],
      base: ["Patchouli", "Clover Honey", "Amber"]
    }
  },
  {
    id: 12,
    name: "FLOWERHEAD",
    slug: "flowerhead",
    price: 245,
    size: "50 ML",
    family: "Floral",
    gender: "Women",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/Flowerhead/Flower_1.jpg",
      "/parfum-eshop/images/products/Flowerhead/Flower_2.jpg",
      "/parfum-eshop/images/products/Flowerhead/Flower_3.jpg",
      "/parfum-eshop/images/products/Flowerhead/Flower_4.jpg"
    ],
    description:
      "A celebration of the traditional Indian wedding, where flower heads are strung together in giant garlands. Flowerhead is an explosion of white florals: wild jasmine sambac, tuberose, and rose petals, brightened by Sicilian lemon and cranberry for a lush, feminine radiance.",
    notes: {
      top: ["Angelica Seeds", "Sicilian Lemon", "Cranberry"],
      heart: ["Wild Jasmine Sambac", "Dewy Tuberose", "Rose Petals"],
      base: ["Fresh Amber", "Suede"]
    }
  },
  {
    id: 13,
    name: "INFLORESCENCE",
    slug: "inflorescence",
    price: 245,
    size: "50 ML",
    family: "Floral",
    gender: "Women",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/Inflorescence/Inflo_1.jpg",
      "/parfum-eshop/images/products/Inflorescence/Inflo_2.jpg",
      "/parfum-eshop/images/products/Inflorescence/Inflo_3.jpg",
      "/parfum-eshop/images/products/Inflorescence/Inflo_4.jpg"
    ],
    description:
      "A tribute to the rebirth of nature and the first signs of spring. Inflorescence is a powerful, floral scent that captures the strength and beauty of a wild garden in bloom. Notes of lily of the valley and freesia create a intoxicating, fresh, and purely feminine experience.",
    notes: {
      top: ["Pink Freesia", "Rose Petals"],
      heart: ["Lily of the Valley", "Magnolia"],
      base: ["Fresh Jasmine"]
    }
  },
  {
    id: 14,
    name: "LA TULIPE",
    slug: "la-tulipe",
    price: 245,
    size: "50 ML",
    family: "Floral",
    gender: "Women",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/La_Tulipe/Tulipe_1.jpg",
      "/parfum-eshop/images/products/La_Tulipe/Tulipe_2.jpg",
      "/parfum-eshop/images/products/La_Tulipe/Tulipe_3.jpg",
      "/parfum-eshop/images/products/La_Tulipe/Tulipe_4.jpg"
    ],
    description:
      "A fresh and clean fragrance built around the idea of the tulip—a flower that symbolizes the rebirth of spring. La Tulipe is simple, shy, and incredibly elegant. It captures the smell of dew-covered gardens and the crisp sweetness of a first bloom.",
    notes: {
      top: ["Cyclamen", "Freesia", "Rhubarb"],
      heart: ["Tulip"],
      base: ["Blonde Woods", "Vetiver"]
    }
  },
  {
    id: 15,
    name: "YOUNG ROSE",
    slug: "young-rose",
    price: 245,
    size: "50 ML",
    family: "Floral",
    gender: "Women",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/Young_Rose/Young_1.jpg",
      "/parfum-eshop/images/products/Young_Rose/Young_2.jpg",
      "/parfum-eshop/images/products/Young_Rose/Young_3.jpg",
      "/parfum-eshop/images/products/Young_Rose/Young_4.jpg"
    ],
    description:
      "Young Rose presents an ode to the perennial restlessness of youth: an olfactory diary for those who are writing their own future. By layering fiery Sichuan pepper upon a foundation of Damascena rose, the fragrance deliberately defies convention, offering a twisted take on classic romance.",
    notes: {
      top: ["Sichuan Pepper", "Ambrette Seeds"],
      heart: ["Damascena Rose", "Orris"],
      base: ["Musk", "Ambrosia"]
    }
  },
  {
    id: 16,
    name: "GYPSY WATER ABSOLU",
    slug: "gypsy-water-absolu",
    price: 275,
    size: "50 ML",
    family: "Woody",
    gender: "Unisex",
    type: "Individual",
    isLimited: true,
    images: [
      "/parfum-eshop/images/products/Gypsy_Water_Absolu/Gypsy_Absolu_1.jpg",
      "/parfum-eshop/images/products/Gypsy_Water_Absolu/Gypsy_Absolu_2.jpg",
      "/parfum-eshop/images/products/Gypsy_Water_Absolu/Gypsy_Absolu_3.jpg"
    ],
    description:
      "An intensified interpretation of the iconic Gypsy Water. The Absolu de Parfum heightens the woody and aromatic facets of the original composition, creating a more visceral and long-lasting experience. Notes of precious incense and pine needle are amplified by a richer base of amber and sandalwood, evoking the heat of a nomadic night.",
    notes: {
      top: ["Juniper Berries", "Lemon", "Pepper"],
      heart: ["Incense", "Orris", "Pine Needle"],
      base: ["Amber", "Sandalwood", "Vanilla Bean"]
    }
  },
  {
    id: 17,
    name: "BAL D'AFRIQUE ABSOLU",
    slug: "bal-dafrique-absolu",
    price: 275,
    size: "50 ML",
    family: "Woody",
    gender: "Unisex",
    type: "Individual",
    isLimited: true,
    images: [
      "/parfum-eshop/images/products/Bal_dAfrique_Absolu/Bal_Absolu_1.jpg",
      "/parfum-eshop/images/products/Bal_dAfrique_Absolu/Bal_Absolu_2.jpg",
      "/parfum-eshop/images/products/Bal_dAfrique_Absolu/Bal_Absolu_3.jpg"
    ],
    description:
      "A rich, highly concentrated reimagining of the classic Bal d'Afrique. The Absolu de Parfum distills the essence of 1920s Paris and its fascination with African culture into a more profound signature. The vibrant marigold and bergamot are now anchored by an intensified heart of Moroccan cedarwood and a dark, velvety vetiver base that lingers with exceptional tenacity.",
    notes: {
      top: ["African Marigold", "Bergamot", "Buchu"],
      heart: ["Cyclamen", "Violet", "Moroccan Cedarwood"],
      base: ["Black Amber", "Musk", "Haitian Vetiver"]
    }
  },
  {
    id: 18,
    name: "BLANCHE ABSOLU",
    slug: "blanche-absolu",
    price: 275,
    size: "50 ML",
    family: "Floral",
    gender: "Unisex",
    type: "Individual",
    isLimited: true,
    images: [
      "/parfum-eshop/images/products/Blanche_Absolu/Blanche_Absolu_1.jpg",
      "/parfum-eshop/images/products/Blanche_Absolu/Blanche_Absolu_2.jpg",
      "/parfum-eshop/images/products/Blanche_Absolu/Blanche_Absolu_3.jpg"
    ],
    description:
      "An intensified exploration of texture and skin. Blanche Absolu elevates the original's purity to a new level of sophistication. The crystalline clarity of aldehydes is softened by a richer heart of white rose, while the base is fortified with an overdose of precious sandalwood and skin-musks, creating a scent that is both ethereal and profoundly intimate.",
    notes: {
      top: ["Aldehydes", "Pink Pepper", "White Rose"],
      heart: ["Neroli", "Peony", "Violet"],
      base: ["Sandalwood", "Blonde Woods", "Skin Musk"]
    }
  },
  {
    id: 19,
    name: "MOJAVE GHOST ABSOLU",
    slug: "mojave-ghost-absolu",
    price: 275,
    size: "50 ML",
    family: "Woody",
    gender: "Unisex",
    type: "Individual",
    isLimited: true,
    images: [
      "/parfum-eshop/images/products/Mojave_Ghost_Absolu/Mojave_Absolu_1.jpg",
      "/parfum-eshop/images/products/Mojave_Ghost_Absolu/Mojave_Absolu_2.jpg",
      "/parfum-eshop/images/products/Mojave_Ghost_Absolu/Mojave_Absolu_3.jpg"
    ],
    description:
      "A profound distillation of the soulful Mojave Desert. The Absolu de Parfum amplifies the ethereal beauty of the original composition, lending a new, carnal depth to the scent. The sweetness of Jamaican Nesberry is heightened, while the powdery heart of Violet and Magnolia settles into an intensified, creamy foundation of Mysore Sandalwood and crisp Amber.",
    notes: {
      top: ["Ambrette", "Jamaican Nesberry"],
      heart: ["Magnolia", "Sandalwood", "Violet"],
      base: ["Chantilly Musk", "Cedarwood", "Crisp Amber"]
    }
  },
  {
    id: 20,
    name: "CUIR SELLIER",
    slug: "cuir-sellier",
    price: 375,
    size: "70 ML",
    family: "Oud",
    gender: "Unisex",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/Cuir_Sellier/Cuir_1.jpg",
      "/parfum-eshop/images/products/Cuir_Sellier/Cuir_2.jpg",
      "/parfum-eshop/images/products/Cuir_Sellier/Cuir_3.jpg",
      "/parfum-eshop/images/products/Cuir_Sellier/Cuir_4.jpg",
      "/parfum-eshop/images/products/Cuir_Sellier/Cuir_5.jpg"
    ],
    description:
      "A distinguished member of the Night Veils, Cuir Sellier is a visceral, smoky masterpiece. It captures the scent of a saddler's atelier where the raw power of leather is fused with rare Agarwood (Oud) and Birch Tar. A fragrance for those who seek the animalic depth of the orient combined with dark, tannic wood.",
    notes: {
      top: ["Black Tea", "Cashmeran"],
      heart: ["Leather Accord", "Tobacco Leaves"],
      base: ["Birch Tar", "Agarwood", "Oakmoss"]
    }
  },
  {
    id: 21,
    name: "BOIS OBSCUR",
    slug: "bois-obscur",
    price: 375,
    size: "70 ML",
    family: "Oud",
    gender: "Unisex",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/Bois_Obscur/Bois_1.jpg",
      "/parfum-eshop/images/products/Bois_Obscur/Bois_2.jpg",
      "/parfum-eshop/images/products/Bois_Obscur/Bois_3.jpg",
      "/parfum-eshop/images/products/Bois_Obscur/Bois_4.jpg",
      "/parfum-eshop/images/products/Bois_Obscur/Bois_5.jpg"
    ],
    description:
      "Bois Obscur is a mysterious journey into the heart of a shadowed forest. This composition brings forward a scorched earth aesthetic, where Guaiac Wood and Patchouli are intensified by a smoky Oud infusion. It is a scent of charred wood and midnight air, designed for an enigmatic presence.",
    notes: {
      top: ["Saffron", "Bitter Orange"],
      heart: ["Guaiac Wood", "Cedar", "Incense"],
      base: ["Midnight Oud", "Patchouli", "Amber"]
    }
  },
  {
    id: 22,
    name: "ROUGE CHAOTIQUE",
    slug: "rouge-chaotique",
    price: 375,
    size: "70 ML",
    family: "Oud",
    gender: "Unisex",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/Rouge_Chaotique/Rouge_1.jpg",
      "/parfum-eshop/images/products/Rouge_Chaotique/Rouge_2.jpg",
      "/parfum-eshop/images/products/Rouge_Chaotique/Rouge_3.jpg",
      "/parfum-eshop/images/products/Rouge_Chaotique/Rouge_4.jpg",
      "/parfum-eshop/images/products/Rouge_Chaotique/Rouge_5.jpg"
    ],
    description:
      "The first oud fragrance in the Night Veils collection, Rouge Chaotique is inspired by Ben Gorham's belief that chaos can be creative. It is a powerful, deep composition where the animalic potency of Oud meets a syrupy, rebellious sweetness of Plum and Raspberry, creating a truly hypnotic trail.",
    notes: {
      top: ["Saffron", "Cassie", "Bergamot"],
      heart: ["Plum", "Raspberry", "Praline"],
      base: ["Agarwood (Oud)", "Patchouli", "Papyrus"]
    }
  },
  {
    id: 23,
    name: "VANILLE ANTIQUE",
    slug: "vanille-antique",
    price: 375,
    size: "70 ML",
    family: "Oud",
    gender: "Unisex",
    type: "Individual",
    isLimited: false,
    images: [
      "/parfum-eshop/images/products/Vanille_Antique/Vanille_1.jpg",
      "/parfum-eshop/images/products/Vanille_Antique/Vanille_2.jpg",
      "/parfum-eshop/images/products/Vanille_Antique/Vanille_3.jpg",
      "/parfum-eshop/images/products/Vanille_Antique/Vanille_4.jpg"
    ],
    description:
      "A part of the Night Veils collection, Vanille Antique is a concentrated extrait de parfum that redefines the sweet ingredient. It is a smoky, woody composition where the raw sweetness of vanilla bean is anchored by a powerful base of black amber and Agarwood (Oud), creating a ritualistic and profound olfactory experience.",
    notes: {
      top: ["Plum", "Musk"],
      heart: ["White Wood", "Labdanum"],
      base: ["Amber", "Vanilla Bean", "Agarwood (Oud)"]
    }
  },
  {
    id: 24,
    slug: "la-selection-byredo",
    name: "LA SÉLECTION BYREDO",
    price: 95,
    size: "3 x 12 ML",
    family: "Gourmand",
    gender: "Unisex",
    type: "Travel Set",
    isLimited: false,
    description:
      "A curated discovery set featuring three of Byredo's most iconic and beloved fragrances, perfect for exploring the brand's olfactory heritage.",
    composition: ["Bal d'Afrique", "Blanche", "Gypsy Water"],
    notes: { top: [], heart: [], base: [] },
    images: [
      "/parfum-eshop/images/products/La_Selection_Byredo/Selection_1.jpg",
      "/parfum-eshop/images/products/La_Selection_Byredo/Selection_2.jpg",
      "/parfum-eshop/images/products/La_Selection_Byredo/Selection_3.jpg"
    ]
  },
  {
    id: 25,
    slug: "la-selection-boisee",
    name: "LA SÉLECTION BOISÉE",
    price: 95,
    size: "3 x 12 ML",
    family: "Woody",
    gender: "Unisex",
    type: "Travel Set",
    isLimited: false,
    description:
      "A tribute to the warmth and complexity of woods, this selection brings together three distinctive interpretations of cedar, sandalwood, and leather.",
    composition: ["Black Saffron", "Super Cedar", "Bibliothèque"],
    notes: { top: [], heart: [], base: [] },
    images: [
      "/parfum-eshop/images/products/La_Selection_Boisee/Boisee_1.jpg",
      "/parfum-eshop/images/products/La_Selection_Boisee/Boisee_2.jpg",
      "/parfum-eshop/images/products/La_Selection_Boisee/Boisee_3.jpg"
    ]
  },
  {
    id: 26,
    slug: "la-selection-florale",
    name: "LA SÉLECTION FLORALE",
    price: 95,
    size: "3 x 12 ML",
    family: "Floral",
    gender: "Women",
    type: "Travel Set",
    isLimited: false,
    description:
      "A radiant bouquet featuring three iconic floral compositions that explore the delicate balance between nature and sophistication.",
    composition: ["Blanche", "La Tulipe", "Rose of No Man's Land"],
    notes: { top: [], heart: [], base: [] },
    images: [
      "/parfum-eshop/images/products/La_Selection_Florale/Florale_1.jpg",
      "/parfum-eshop/images/products/La_Selection_Florale/Florale_2.jpg",
      "/parfum-eshop/images/products/La_Selection_Florale/Florale_3.jpg"
    ]
  },
  {
    id: 27,
    slug: "la-selection-nomade",
    name: "LA SÉLECTION NOMADE",
    price: 95,
    size: "3 x 12 ML",
    family: "Fresh",
    gender: "Unisex",
    type: "Travel Set",
    isLimited: false,
    description:
      "The ultimate travel companion. A fresh and vibrant selection designed for those who find their home on the road.",
    composition: ["Bal d'Afrique", "Blanche", "Gypsy Water"],
    notes: { top: [], heart: [], base: [] },
    images: [
      "/parfum-eshop/images/products/La_Selection_Nomade/Nomade_1.jpg",
      "/parfum-eshop/images/products/La_Selection_Nomade/Nomade_2.jpg",
      "/parfum-eshop/images/products/La_Selection_Nomade/Nomade_3.jpg"
    ]
  }
];

export const getProductById = (id: number) => products.find(p => p.id === id);
export const getProductBySlug = (slug: string) =>
  products.find(p => p.slug === slug);
export const getProductsByFamily = (family: string) =>
  products.filter(p => p.family === family);
export const getProductsByGender = (gender: string) =>
  products.filter(p => p.gender === gender);
export const getLimitedProducts = () => products.filter(p => p.isLimited);
export const getAllFamilies = () => [...new Set(products.map(p => p.family))];
