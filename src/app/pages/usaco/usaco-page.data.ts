import { UsacoPageData } from './usaco-page.types';

export const usacoPageData: UsacoPageData = {
  title: 'USACO: Unleash Your Algorithmic Potential',
  description:
    'Discover the USA Computing Olympiad (USACO), a premier programming competition designed to challenge and nurture young minds in computer science.',
  usacoIntro: {
    title: 'What is USACO?',
    description: [
      'The USA Computing Olympiad (USACO) is a prestigious computer science competition designed for high school students worldwide. It aims to challenge participants algorithmic and programming skills, enhancing their problem-solving abilities.',
      'USACO offers a tiered challenge system, from beginner to expert levels, covering a wide range of algorithms and data structures. This structure ensures that students of all skill levels can find suitable challenges and opportunities for growth.',
    ],
    imageSrc: './usaco.png',
  },
  impactOnCollege: {
    title: "USACO's Impact on College Admissions",
    description:
      "Participating in USACO not only solidifies a student's computer science knowledge but also serves as an excellent platform to showcase their algorithmic and programming talents.",
    impacts: [
      {
        title: 'Demonstrating Passion',
        description:
          'USACO participation shows a genuine interest in computer science, which is highly valued by top universities.',
      },
      {
        title: 'Skill Validation',
        description:
          "Success in USACO serves as a concrete validation of a student's programming and problem-solving skills.",
      },
      {
        title: 'Competitive Edge',
        description:
          'In the highly competitive college admissions process, USACO achievements can set an applicant apart from their peers.',
      },
    ],
  },
  usacoVsApcs: {
    title: 'USACO vs AP Computer Science A',
    description:
      'While both USACO and AP Computer Science A (APCS A) focus on computer science, they differ in their emphasis and difficulty level.',
    comparisonTable: [
      {
        aspect: 'Format',
        usaco: 'Competitive programming contest',
        apcs: 'Standardized course and exam',
      },
      {
        aspect: 'Focus',
        usaco: 'Advanced algorithms and problem-solving',
        apcs: 'Java fundamentals and object-oriented programming',
      },
      {
        aspect: 'Difficulty',
        usaco: 'Highly challenging, especially at higher levels',
        apcs: 'Moderate, suitable for high school curriculum',
      },
      {
        aspect: 'Recognition',
        usaco: 'Highly regarded in top CS programs',
        apcs: 'Widely recognized in college admissions',
      },
    ],
  },
  uniqueAdvantages: {
    title: 'Unique Advantages of USACO',
    advantages: [
      {
        title: 'Academic Enhancement',
        description:
          'USACO participation is highly regarded by top universities, serving as a significant boost to college applications.',
      },
      {
        title: 'Skill Integration',
        description:
          'USACO content aligns well with AP Computer Science A and A Level Computer Science curricula, reinforcing classroom learning.',
      },
      {
        title: 'Professional Development',
        description:
          'Participating in USACO cultivates independent thinking and subject expertise, crucial for future careers in computer science.',
      },
      {
        title: 'Global Networking',
        description:
          'USACO provides a platform to compete and connect with top students worldwide, fostering learning and innovation.',
      },
    ],
  },
  usacoLevels: {
    title: 'USACO Competition Levels',
    description:
      'USACO offers four distinct levels to accommodate students of varying skill levels:',
    levels: [
      {
        title: 'Bronze',
        description:
          'Designed for beginners, focusing on basic programming skills and simple algorithms.',
      },
      {
        title: 'Silver',
        description:
          'Requires more advanced algorithmic knowledge and programming abilities, a significant step up from Bronze.',
      },
      {
        title: 'Gold',
        description:
          'For students with solid algorithmic and programming foundations, ready to explore more complex problems.',
      },
      {
        title: 'Platinum',
        description:
          'The highest level, demanding deep understanding and application of advanced algorithms and data structures.',
      },
    ],
  },
  conclusion: {
    courseStructure: [
      {
        level: 'Bronze to Silver',
        hours: '60 hours of core lessons + 4 hours of mock exam practice',
      },
      {
        level: 'Silver to Gold',
        hours: '60 hours of core lessons + 4 hours of mock exam practice',
      },
      {
        level: 'Gold to Platinum',
        hours: '60 hours of core lessons + 4 hours of mock exam practice',
      },
    ],
  },
};
