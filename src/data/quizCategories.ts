
export interface QuizCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  questionCount: number;
}

export const quizCategories: QuizCategory[] = [
  {
    id: "constitutional",
    name: "القانون الدستوري",
    description: "أسئلة حول القانون الدستوري المغربي",
    icon: "book",
    questionCount: 20,
  },
  {
    id: "civil",
    name: "القانون المدني",
    description: "أسئلة حول القانون المدني المغربي",
    icon: "book-open",
    questionCount: 20,
  },
  {
    id: "penal",
    name: "القانون الجنائي",
    description: "أسئلة حول القانون الجنائي المغربي",
    icon: "flag",
    questionCount: 20,
  },
  {
    id: "commercial",
    name: "القانون التجاري",
    description: "أسئلة حول القانون التجاري المغربي",
    icon: "flag-triangle-right",
    questionCount: 20,
  },
  {
    id: "admin",
    name: "القانون الإداري",
    description: "أسئلة حول القانون الإداري المغربي",
    icon: "search",
    questionCount: 20,
  },
];
