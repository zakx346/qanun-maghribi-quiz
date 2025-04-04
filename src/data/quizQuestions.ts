
export interface QuizQuestion {
  id: string;
  categoryId: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  // القانون الدستوري
  {
    id: "const1",
    categoryId: "constitutional",
    question: "في أي سنة تم اعتماد الدستور المغربي الحالي؟",
    options: ["2005", "2011", "2015", "2018"],
    correctOptionIndex: 1,
    explanation: "تم اعتماد الدستور المغربي الحالي في عام 2011 بعد استفتاء شعبي."
  },
  {
    id: "const2",
    categoryId: "constitutional",
    question: "من هو رئيس الحكومة في المغرب؟",
    options: [
      "يعينه الملك من الحزب الذي تصدر الانتخابات",
      "ينتخب مباشرة من الشعب",
      "يعينه البرلمان",
      "يعينه المجلس الدستوري"
    ],
    correctOptionIndex: 0,
    explanation: "وفقًا للدستور المغربي، يعين الملك رئيس الحكومة من الحزب السياسي الذي تصدر انتخابات مجلس النواب."
  },
  {
    id: "const3",
    categoryId: "constitutional",
    question: "ما هي اللغات الرسمية في المملكة المغربية حسب دستور 2011؟",
    options: [
      "العربية فقط",
      "العربية والفرنسية",
      "العربية والأمازيغية",
      "العربية والأمازيغية والفرنسية"
    ],
    correctOptionIndex: 2,
    explanation: "حسب دستور 2011، اللغتان الرسميتان في المملكة المغربية هما العربية والأمازيغية."
  },
  
  // القانون المدني
  {
    id: "civil1",
    categoryId: "civil",
    question: "ما هو السن القانوني للزواج في المغرب؟",
    options: ["16 سنة", "18 سنة", "21 سنة", "20 سنة"],
    correctOptionIndex: 1,
    explanation: "السن القانوني للزواج في المغرب هو 18 سنة وفقًا لمدونة الأسرة."
  },
  {
    id: "civil2",
    categoryId: "civil",
    question: "من بين التالي، ما هو شرط من شروط صحة عقد البيع في القانون المغربي؟",
    options: [
      "تسجيل العقد لدى المحكمة",
      "وجود موضوع مشروع للعقد",
      "حضور شاهدين فقط",
      "الدفع نقدًا"
    ],
    correctOptionIndex: 1,
    explanation: "من شروط صحة عقد البيع في القانون المغربي أن يكون موضوع العقد مشروعًا وغير مخالف للنظام العام."
  },
  
  // القانون الجنائي
  {
    id: "penal1",
    categoryId: "penal",
    question: "ما هي سن المسؤولية الجنائية في المغرب؟",
    options: ["12 سنة", "16 سنة", "18 سنة", "21 سنة"],
    correctOptionIndex: 0,
    explanation: "سن المسؤولية الجنائية في المغرب هي 12 سنة، لكن هناك معاملة خاصة للأحداث ما بين 12 و 18 سنة."
  },
  {
    id: "penal2",
    categoryId: "penal",
    question: "أي من الجرائم التالية تعد من الجنايات في القانون الجنائي المغربي؟",
    options: [
      "السرقة البسيطة",
      "القتل العمد",
      "السب والقذف",
      "مخالفة قوانين السير"
    ],
    correctOptionIndex: 1,
    explanation: "القتل العمد يعتبر من الجنايات في القانون الجنائي المغربي ويعاقب عليه بعقوبات مشددة."
  },
  
  // قوانين أخرى
  {
    id: "comm1",
    categoryId: "commercial",
    question: "ما هو الحد الأدنى لرأس مال شركة المساهمة في المغرب؟",
    options: [
      "100,000 درهم",
      "300,000 درهم",
      "500,000 درهم",
      "1,000,000 درهم"
    ],
    correctOptionIndex: 1,
    explanation: "الحد الأدنى لرأس مال شركة المساهمة في المغرب هو 300,000 درهم وفقًا لقانون الشركات المغربي."
  },
  {
    id: "admin1",
    categoryId: "admin",
    question: "ما هي الجهة القضائية المختصة بالنزاعات الإدارية في المغرب؟",
    options: [
      "المحكمة الابتدائية",
      "محكمة الاستئناف",
      "المحكمة الإدارية",
      "محكمة النقض"
    ],
    correctOptionIndex: 2,
    explanation: "المحكمة الإدارية هي الجهة القضائية المختصة بالفصل في النزاعات الإدارية في المغرب."
  }
];

export const getQuestionsByCategory = (categoryId: string): QuizQuestion[] => {
  return quizQuestions.filter(question => question.categoryId === categoryId);
};
