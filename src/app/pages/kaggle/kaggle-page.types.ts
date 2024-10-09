export interface KagglePageData {
  title: string;
  description: string;
  kaggleIntro: KaggleIntro;
  whyKaggle: WhyKaggle;
  collegeApplication: CollegeApplication;
  benefits: Benefits;
  githubSection: GithubSection;
  conclusion: Conclusion;
}

export interface KaggleIntro {
  title: string;
  description: string[];
  imageSrc: string;
}

export interface WhyKaggle {
  title: string;
  description: string;
  examples: Example[];
}

export interface Example {
  title: string;
  description: string;
}

export interface CollegeApplication {
  title: string;
  description: string;
  examples: Example[];
}

export interface Benefits {
  title: string;
  description: string;
  items: Example[];
}

export interface GithubSection {
  title: string;
  description: string;
  benefits: Example[];
}

export interface Conclusion {
  title: string;
  description: string;
  callToAction: string;
}
