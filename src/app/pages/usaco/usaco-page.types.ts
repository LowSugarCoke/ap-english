export interface UsacoPageData {
  title: string;
  description: string;
  usacoIntro: UsacoIntro;
  impactOnCollege: ImpactOnCollege;
  usacoVsApcs: UsacoVsApcs;
  uniqueAdvantages: UniqueAdvantages;
  usacoLevels: UsacoLevels;
  conclusion: Conclusion;
}

export interface UsacoIntro {
  title: string;
  description: string[];
  imageSrc: string;
}

export interface ImpactOnCollege {
  title: string;
  description: string;
  impacts: Impact[];
}

export interface Impact {
  title: string;
  description: string;
}

export interface UsacoVsApcs {
  title: string;
  description: string;
  comparisonTable: ComparisonRow[];
}

export interface ComparisonRow {
  aspect: string;
  usaco: string;
  apcs: string;
}

export interface UniqueAdvantages {
  title: string;
  advantages: Advantage[];
}

export interface Advantage {
  title: string;
  description: string;
}

export interface UsacoLevels {
  title: string;
  description: string;
  levels: Level[];
}

export interface Level {
  title: string;
  description: string;
}

export interface Conclusion {
  courseStructure: CourseStructure[];
}

export interface CourseStructure {
  level: string;
  hours: string;
}
