import type { TeamMember, Achievement } from "@/types/common";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Jean-Claude Beaumont",
    role: "Founder & Master Perfumer",
    image: "/parfum-eshop/images/team/user_1.jpg"
  },
  {
    name: "Dr. Amelia Rousseau",
    role: "Chief Fragrance Scientist",
    image: "/parfum-eshop/images/team/user_2.jpg"
  },
  {
    name: "Mia Hammond",
    role: "Head of Sourcing",
    image: "/parfum-eshop/images/team/user_3.jpg"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  { value: "50,000+", label: "Happy Customers" },
  { value: "200+", label: "Unique Fragrances" },
  { value: "15", label: "Countries Served" },
  { value: "4.9/5", label: "Customer Rating" }
];
