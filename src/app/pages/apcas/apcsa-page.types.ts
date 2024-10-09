export interface ApcsaPageData {
  title: string;
  description: string;
  apcsaIntro: ApcsaIntro;
  examStructure: ExamStructure;
  courseDesign: CourseDesign;
  learningPaths: LearningPaths;
  results: Results;
}

export interface ApcsaIntro {
  title: string;
  description: string[];
  imageSrc: string;
}

export interface ExamStructure {
  title: string;
  description: string;
  sections: Section[];
  contentBreakdown: ContentBreakdown[];
}

export interface Section {
  title: string;
  description: string;
}

export interface ContentBreakdown {
  topic: string;
  percentage: string;
}

export interface CourseDesign {
  title: string;
  description: string;
  features: string[];
}

export interface LearningPaths {
  title: string;
  description: string;
  paths: Path[];
}

export interface Path {
  title: string;
  description: string;
}

export interface Results {
  title: string;
  description: string;
  imageSrcs: string[];
}
