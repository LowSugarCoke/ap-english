import { ApcsaPageData } from './apcsa-page.types';

export const apcsaPageData: ApcsaPageData = {
  title: 'AP Computer Science A: Master Java Programming',
  description:
    'Discover the AP Computer Science A course, a comprehensive introduction to Java programming and computer science concepts for high school and college students.',
  apcsaIntro: {
    title: 'What is AP Computer Science A?',
    description: [
      'AP Computer Science A (APCSA) is a high school or entry-level college course that teaches Java programming and fundamental computer science concepts. The course duration varies by school and curriculum design, typically lasting one semester in high school with about 5 hours per week, totaling approximately 80-100 hours.',
      'Our program offers a 30-hour course, with each class lasting 1.5 hours. We expect students to dedicate at least 3 hours to practice outside of class, aiming for a perfect score of 5 on the exam.',
    ],
    imageSrc: './apcsa.png',
  },
  examStructure: {
    title: 'APCSA Exam Structure',
    description:
      'The APCSA exam is worth 100 points and is divided into two main sections:',
    sections: [
      {
        title: 'Multiple Choice Section',
        description: '40 questions, 1 hour 30 minutes, 50% of the total score',
      },
      {
        title: 'Free Response Section',
        description: '4 questions, 1 hour 30 minutes, 50% of the total score',
      },
    ],
    contentBreakdown: [
      { topic: 'Primitive Types', percentage: '2.5%-5%' },
      { topic: 'Using Objects', percentage: '5%-7.5%' },
      {
        topic: 'Boolean Expressions and if Statements',
        percentage: '15%-17.5%',
      },
      { topic: 'Iteration', percentage: '17.5%-22.5%' },
      { topic: 'Writing Classes', percentage: '5%-7.5%' },
      { topic: 'Array', percentage: '10%-15%' },
      { topic: 'ArrayList', percentage: '2.5%-7.5%' },
      { topic: '2D Array', percentage: '7.5%-10%' },
      { topic: 'Inheritance', percentage: '5%-10%' },
      { topic: 'Recursion', percentage: '5%-7.5%' },
    ],
  },
  courseDesign: {
    title: 'Course Design and Learning Resources',
    description:
      'Our course is designed to provide comprehensive preparation for the APCSA exam:',
    features: [
      'Main textbooks: Barron and Princeton review books (provided)',
      'Complete all exercises in the textbooks',
      'Regular review of practice questions and full mock exams',
      'Tailored to cover all exam topics thoroughly',
    ],
  },
  learningPaths: {
    title: 'Learning Paths',
    description:
      "We offer different learning paths based on students' backgrounds:",
    paths: [
      {
        title: 'Complete Beginners',
        description: 'Recommended 60-hour course',
      },
      {
        title: 'Taken APCSA at School',
        description: 'Recommended 30-hour course starting late February',
      },
      {
        title: 'One-Month Intensive for USACO Experienced',
        description: '20-hour crash course',
      },
    ],
  },
  results: {
    title: 'Our Success Stories',
    description:
      'In 2024, all six of our students achieved perfect scores in APCSA:',
    imageSrcs: [
      './apcsa_1.png',
      './apcsa_2.png',
      './apcsa_3.png',
      './apcsa_4.png',
      './apcsa_5.png',
    ],
  },
};
