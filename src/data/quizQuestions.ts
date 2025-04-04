
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
  {
    id: "const4",
    categoryId: "constitutional",
    question: "ما هو النظام السياسي في المغرب؟",
    options: [
      "نظام ملكي دستوري",
      "نظام جمهوري",
      "نظام برلماني",
      "نظام فيدرالي"
    ],
    correctOptionIndex: 0,
    explanation: "النظام السياسي في المغرب هو نظام ملكي دستوري، حيث يعتبر الملك رأس الدولة ويمارس صلاحياته من خلال الدستور."
  },
  {
    id: "const5",
    categoryId: "constitutional",
    question: "كم عدد الغرف في البرلمان المغربي؟",
    options: [
      "غرفة واحدة",
      "غرفتان",
      "ثلاث غرف",
      "أربع غرف"
    ],
    correctOptionIndex: 1,
    explanation: "يتكون البرلمان المغربي من غرفتين: مجلس النواب ومجلس المستشارين."
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
  {
    id: "civil3",
    categoryId: "civil",
    question: "متى صدرت مدونة الأسرة المغربية؟",
    options: [
      "عام 2000",
      "عام 2004",
      "عام 2011",
      "عام 2015"
    ],
    correctOptionIndex: 1,
    explanation: "صدرت مدونة الأسرة المغربية في عام 2004، وتعتبر إصلاحًا مهمًا في مجال قانون الأسرة والأحوال الشخصية في المغرب."
  },
  {
    id: "civil4",
    categoryId: "civil",
    question: "ما هي مدة تقادم الحقوق الشخصية في القانون المدني المغربي؟",
    options: [
      "5 سنوات",
      "10 سنوات",
      "15 سنة",
      "20 سنة"
    ],
    correctOptionIndex: 2,
    explanation: "تتقادم الحقوق الشخصية في القانون المدني المغربي بمضي 15 سنة، ما لم ينص القانون على مدة أخرى."
  },
  {
    id: "civil5",
    categoryId: "civil",
    question: "ما هي أنواع الطلاق المتاحة في مدونة الأسرة المغربية؟",
    options: [
      "الطلاق بالاتفاق فقط",
      "الطلاق الرجعي فقط",
      "الطلاق بالاتفاق والتطليق للشقاق",
      "الطلاق بالاتفاق والتطليق للشقاق والخلع"
    ],
    correctOptionIndex: 3,
    explanation: "تتيح مدونة الأسرة المغربية عدة أنواع من الطلاق منها: الطلاق بالاتفاق، التطليق للشقاق، والخلع (الطلاق بالفدية)."
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
  {
    id: "penal3",
    categoryId: "penal",
    question: "ما هي العقوبة الأصلية للجنحة في القانون الجنائي المغربي؟",
    options: [
      "الإعدام",
      "السجن المؤبد",
      "الحبس من شهر إلى خمس سنوات",
      "الغرامة فقط"
    ],
    correctOptionIndex: 2,
    explanation: "العقوبة الأصلية للجنحة في القانون الجنائي المغربي هي الحبس من شهر إلى خمس سنوات أو الغرامة التي تزيد عن 1200 درهم."
  },
  {
    id: "penal4",
    categoryId: "penal",
    question: "ما هو مبدأ شرعية الجرائم والعقوبات؟",
    options: [
      "لا جريمة ولا عقوبة إلا بقانون",
      "القاضي حر في تقدير العقوبة",
      "العقوبة تتناسب مع خطورة المجرم",
      "المتهم بريء حتى تثبت إدانته"
    ],
    correctOptionIndex: 0,
    explanation: "مبدأ شرعية الجرائم والعقوبات يعني أنه لا جريمة ولا عقوبة إلا بنص قانوني سابق، وهو مبدأ دستوري في القانون الجنائي المغربي."
  },
  {
    id: "penal5",
    categoryId: "penal",
    question: "أي من التالي يعتبر من موانع المسؤولية الجنائية في القانون المغربي؟",
    options: [
      "الإكراه المعنوي",
      "الخطأ في القانون",
      "الباعث على الجريمة",
      "جهل المتهم بالقانون"
    ],
    correctOptionIndex: 0,
    explanation: "يعتبر الإكراه المعنوي من موانع المسؤولية الجنائية في القانون المغربي لأنه يعدم الإرادة ويجعل الشخص غير مسؤول جنائيًا."
  },
  
  // القانون التجاري
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
    id: "comm2",
    categoryId: "commercial",
    question: "ما هي المدة القانونية للاحتفاظ بالدفاتر التجارية في المغرب؟",
    options: [
      "5 سنوات",
      "10 سنوات",
      "15 سنة",
      "20 سنة"
    ],
    correctOptionIndex: 1,
    explanation: "يجب على التاجر الاحتفاظ بالدفاتر التجارية لمدة 10 سنوات وفقًا لمدونة التجارة المغربية."
  },
  {
    id: "comm3",
    categoryId: "commercial",
    question: "متى صدرت مدونة التجارة المغربية الحالية؟",
    options: [
      "1995",
      "1996",
      "2000",
      "2011"
    ],
    correctOptionIndex: 1,
    explanation: "صدرت مدونة التجارة المغربية الحالية سنة 1996 وبدأ العمل بها سنة 1997."
  },
  {
    id: "comm4",
    categoryId: "commercial",
    question: "أي من العقود التالية يعتبر عملاً تجارياً بطبيعته؟",
    options: [
      "عقد الوكالة",
      "عقد الشركة",
      "عقد البيع",
      "عقد الإيجار"
    ],
    correctOptionIndex: 1,
    explanation: "يعتبر عقد الشركة عملاً تجارياً بطبيعته وفقًا لمدونة التجارة المغربية."
  },
  {
    id: "comm5",
    categoryId: "commercial",
    question: "ما هي المدة القانونية لتقادم الكمبيالة في القانون المغربي؟",
    options: [
      "سنة واحدة",
      "3 سنوات",
      "5 سنوات",
      "10 سنوات"
    ],
    correctOptionIndex: 1,
    explanation: "تتقادم الدعاوى الناشئة عن الكمبيالة ضد القابل بمضي 3 سنوات من تاريخ الاستحقاق وفقًا لمدونة التجارة المغربية."
  },
  
  // القانون الإداري
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
  },
  {
    id: "admin2",
    categoryId: "admin",
    question: "متى تم إنشاء المحاكم الإدارية في المغرب؟",
    options: [
      "1990",
      "1993",
      "2000",
      "2011"
    ],
    correctOptionIndex: 1,
    explanation: "تم إنشاء المحاكم الإدارية في المغرب سنة 1993 بموجب القانون رقم 41.90."
  },
  {
    id: "admin3",
    categoryId: "admin",
    question: "ما هي مدة الطعن بالإلغاء ضد القرارات الإدارية؟",
    options: [
      "شهران",
      "60 يومًا",
      "90 يومًا",
      "6 أشهر"
    ],
    correctOptionIndex: 1,
    explanation: "مدة الطعن بالإلغاء ضد القرارات الإدارية هي 60 يومًا من تاريخ نشر أو تبليغ القرار المطعون فيه."
  },
  {
    id: "admin4",
    categoryId: "admin",
    question: "ما هو المبدأ الأساسي الذي يحكم عمل المرافق العامة؟",
    options: [
      "مبدأ السلطة التقديرية",
      "مبدأ استمرارية المرفق العام",
      "مبدأ السيادة",
      "مبدأ عدم الرجعية"
    ],
    correctOptionIndex: 1,
    explanation: "مبدأ استمرارية المرفق العام هو من المبادئ الأساسية التي تحكم عمل المرافق العامة، ويعني وجوب استمرار المرفق العام في أداء خدماته بانتظام واضطراد."
  },
  {
    id: "admin5",
    categoryId: "admin",
    question: "ما المقصود بعقد الامتياز في القانون الإداري المغربي؟",
    options: [
      "عقد بين الإدارة وشخص آخر لتعيينه في وظيفة حكومية",
      "عقد بين الإدارة وشخص آخر لتوريد مواد للإدارة",
      "عقد بين الإدارة وشخص آخر لإدارة مرفق عام على نفقته ومسؤوليته",
      "عقد بين جهتين إداريتين لتنظيم العلاقة بينهما"
    ],
    correctOptionIndex: 2,
    explanation: "عقد الامتياز هو اتفاق بين الإدارة وشخص (طبيعي أو معنوي) يتولى بموجبه هذا الأخير إدارة مرفق عام اقتصادي على نفقته ومسؤوليته مقابل تقاضي رسوم من المنتفعين."
  }
];

export const getQuestionsByCategory = (categoryId: string): QuizQuestion[] => {
  return quizQuestions.filter(question => question.categoryId === categoryId);
};

