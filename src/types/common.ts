export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Achievement {
  value: string;
  label: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  title: string;
  text: string;
  iconName: string;
}

export interface PageConfig {
  title: string;
  label: string;
  gender?: string;
  family?: string;
  type?: string;
  isLimited?: boolean;
  image: string;
  description: string;
}
