import cybersecurityImg from "../assets/images/cybersecurity.jpg";
import aiImg from "../assets/images/ai.jpeg";
import programmingImg from "../assets/images/programming.jpg";
import IntroductionToAIandModernApplicationsImg from "../assets/images/IntroductionToAIandModernApplications.jpg"
import JavaJavascriptImg from "../assets/images/javaJavaScript.png";
import Cybersecurity2Img from "../assets/images/Cybersecurity.jfif";
import Cybersecurity3Img from "../assets/images/Cybersecurity3.jfif";
import pythonImg from "../assets/images/python.jfif";
import softSkilsImg from "../assets/images/softSkils.jpg";
import MachineLearningImg from "../assets/images/MachineLearning.jfif";
import angularSpringImg from "../assets/images/angularSpring.png";
import devOpsImg from "../assets/images/devOps.jpg";
import powerBiImg from "../assets/images/powerBi.jfif";
import digitaltransformationImg from "../assets/images/digital-transformation.jpg";
import DataScienceImg from "../assets/images/Data-science.jpg";

const coursesData = {
  programInfo: {
    totalCourses: 15,
    totalHours: "200+ heures pratiques",
    certification:
      "Certificat de participation et de professionnalisation avec évaluation finale",
    modes: "Présentiel ou en ligne / hybride (Online/Hybrid)",
    languages: "Arabe – Français – Anglais",
    programObjectives: {
      en: [
        "Enable trainees to understand and apply AI practically",
        "Enhance programmers and trainers' skills in modern technologies and DevOps",
        "Develop data analysis and smart decision-making skills",
        "Promote proactive cybersecurity culture in digital projects",
        "Train a new generation of technical leaders and professional trainers capable of impact and guidance",
      ],
      ar: [
        "تمكين المتدربين من فهم الذكاء الاصطناعي وتطبيقه فعليًا",
        "رفع كفاءة المبرمجين والمدربين في التقنيات الحديثة وDevOps",
        "تعزيز مهارات تحليل البيانات واتخاذ القرار الذكي",
        "نشر ثقافة الأمن السيبراني الاستباقي في المشاريع الرقمية",
        "تطوير جيل من القادة التقنيين والمدربين المحترفين القادرين على التأثير والتوجيه",
      ],
    },
  },
  courses: [
    // 🟢 Foundation Level
    {
  id: 1,
  level: { 
    en: "Foundation", 
    ar: "المستوى الأساسي" 
  },
  image: IntroductionToAIandModernApplicationsImg,
  title: {
    en: "Introduction to AI and Modern Applications",
    ar: "مقدمة في الذكاء الاصطناعي وتطبيقاته الحديثة",
  },
  description: {
    en: "Dive into the fascinating world of Artificial Intelligence and discover how it shapes our daily lives. This foundation course introduces you to the core principles of AI, including machine learning, neural networks, and data-driven algorithms. Through practical examples and modern applications, you’ll understand how AI is transforming industries such as healthcare, finance, education, and more. Ideal for beginners, this course builds the essential base to move confidently toward advanced AI technologies.",
    ar: "انغمس في عالم الذكاء الاصطناعي المذهل وتعرّف على كيفية تأثيره في حياتنا اليومية. يقدم لك هذا المستوى الأساسي المبادئ الجوهرية للذكاء الاصطناعي، بما في ذلك التعلم الآلي، والشبكات العصبية، والخوارزميات المعتمدة على البيانات. من خلال أمثلة وتطبيقات عملية حديثة، ستتعرف على كيفية إحداث الذكاء الاصطناعي لتغييرات جذرية في مجالات مثل الصحة والمالية والتعليم وغيرها. هذه الدورة مثالية للمبتدئين وتوفر قاعدة صلبة للانتقال بثقة نحو التقنيات المتقدمة في الذكاء الاصطناعي.",
  },

  duration: { 
    en: "6 weeks (3 hours per week)", 
    ar: "6 أسابيع (3 ساعات أسبوعياً)" 
  },

  objectives: {
    en: [
      "Understand the fundamental concepts and history of Artificial Intelligence.",
      "Differentiate between key AI fields such as Machine Learning, Deep Learning, and Natural Language Processing.",
      "Recognize the main algorithms and their real-world applications.",
      "Explore ethical and societal implications of AI in modern life."
    ],
    ar: [
      "فهم المفاهيم الأساسية وتاريخ الذكاء الاصطناعي.",
      "التمييز بين الفروع الأساسية للذكاء الاصطناعي مثل التعلم الآلي والتعلم العميق ومعالجة اللغة الطبيعية.",
      "التعرف على أهم الخوارزميات وتطبيقاتها في الواقع العملي.",
      "استكشاف الجوانب الأخلاقية والاجتماعية لتطبيقات الذكاء الاصطناعي الحديثة."
    ]
  },

  content: {
    en: [
      "Introduction to AI: History and Key Concepts",
      "Machine Learning Basics and Supervised vs Unsupervised Learning",
      "Introduction to Neural Networks",
      "AI in Practice: Real-world Case Studies",
      "Ethics and the Future of AI"
    ],
    ar: [
      "مقدمة في الذكاء الاصطناعي: التاريخ والمفاهيم الأساسية",
      "أساسيات التعلم الآلي وأنواعه (الخاضع للإشراف وغير الخاضع للإشراف)",
      "مقدمة في الشبكات العصبية",
      "الذكاء الاصطناعي في الواقع العملي: دراسات حالة",
      "الأخلاقيات ومستقبل الذكاء الاصطناعي"
    ]
  },

  skillsGained: {
    en: [
      "Analytical thinking for AI problem-solving",
      "Understanding of AI algorithms and models",
      "Ability to identify AI use-cases in various industries",
      "Foundational knowledge for pursuing advanced AI or Data Science courses"
    ],
    ar: [
      "التفكير التحليلي لحل المشكلات باستخدام الذكاء الاصطناعي",
      "فهم الخوارزميات والنماذج الأساسية للذكاء الاصطناعي",
      "القدرة على تحديد تطبيقات الذكاء الاصطناعي في مختلف المجالات",
      "أساس متين للانتقال إلى دورات متقدمة في الذكاء الاصطناعي أو علم البيانات"
    ]
  },

  targetAudience: {
    en: "Students, professionals, or enthusiasts with no prior AI experience who want to understand how Artificial Intelligence works and its impact on the modern world.",
    ar: "موجه إلى الطلاب والمهنيين والمهتمين الذين ليست لديهم خبرة سابقة في الذكاء الاصطناعي ويرغبون في فهم آلياته وتأثيره على العالم الحديث."
  },

  prerequisites: { 
    en: "No prior programming or AI experience required. Basic computer literacy recommended.", 
    ar: "لا يتطلب خبرة سابقة في البرمجة أو الذكاء الاصطناعي. يوصى بمعرفة أساسية باستخدام الحاسوب." 
  },

  certification: { 
    en: "Participants who complete all modules and quizzes will receive a Certificate of Completion.", 
    ar: "يُمنح المشاركون الذين يُنهون جميع الوحدات والاختبارات شهادة إتمام الدورة." 
  },

  format: { 
    en: "Online, self-paced learning with interactive exercises and real-world examples.", 
    ar: "دروس عبر الإنترنت، بنمط تعلّم ذاتي مع تمارين تفاعلية وأمثلة من الواقع." 
  },

  instructor: { 
    en: "Led by industry experts specializing in Artificial Intelligence and Machine Learning.", 
    ar: "يُقدّمها خبراء متخصصون في الذكاء الاصطناعي والتعلم الآلي." 
  }
},
    {
  id: 2,
  level: { 
    en: "Foundation", 
    ar: "المستوى الأساسي" 
  },
  image: JavaJavascriptImg,
  title: {
    en: "Fundamentals of Modern Programming with Java & JavaScript",
    ar: "أساسيات البرمجة الحديثة بلغة Java وJavaScript",
  },
  description: {
    en: "Master the essential programming concepts and logic that form the backbone of today’s software development. This foundational course introduces learners to two of the most widely used languages in the world — Java and JavaScript. You’ll discover how both are applied in building everything from enterprise backends to interactive web applications. The course emphasizes clean coding, logical problem-solving, and hands-on practice to prepare participants for modern development environments.",
    ar: "أتقن المفاهيم والمنطق الأساسي للبرمجة التي تشكّل جوهر تطوير البرمجيات الحديثة. تقدم هذه الدورة التأسيسية مقدمة شاملة لاثنتين من أكثر لغات البرمجة استخدامًا في العالم — Java وJavaScript. ستتعرف على كيفية استخدام كل منهما في تطوير الأنظمة الخلفية للمؤسسات والتطبيقات التفاعلية على الويب. تركز الدورة على كتابة كود نظيف، وحل المشكلات البرمجية بشكل منطقي، والتطبيق العملي من خلال تمارين واقعية لإعداد المشاركين لبيئات التطوير الحديثة."
  },

  duration: { 
    en: "5 days (intensive training)", 
    ar: "5 أيام (تدريب مكثّف)" 
  },

  objectives: {
    en: [
      "Understand the basic principles of programming and computational logic.",
      "Learn the syntax and structure of Java and JavaScript languages.",
      "Develop small-scale applications and scripts using both technologies.",
      "Gain confidence in writing, debugging, and testing code efficiently."
    ],
    ar: [
      "فهم المبادئ الأساسية للبرمجة والمنطق الحسابي.",
      "تعلّم بنية وتركيب لغتي Java وJavaScript.",
      "تطوير تطبيقات وبرامج صغيرة باستخدام اللغتين.",
      "اكتساب الثقة في كتابة الكود وتصحيحه واختباره بكفاءة."
    ]
  },

  content: {
    en: [
      "Introduction to Programming Concepts and Logic",
      "Java Language: Variables, Conditions, Loops, and Functions",
      "JavaScript Basics: Syntax, DOM Manipulation, and Events",
      "Hands-on Exercises: Building Simple Console and Web Applications",
      "Good Coding Practices and Debugging Techniques"
    ],
    ar: [
      "مقدمة في مفاهيم البرمجة والمنطق الحسابي",
      "لغة Java: المتغيرات، الشروط، الحلقات، والدوال",
      "أساسيات JavaScript: بناء الجمل البرمجية، التعامل مع الـDOM، والأحداث",
      "تمارين عملية: إنشاء تطبيقات بسيطة في سطر الأوامر وعلى الويب",
      "ممارسات البرمجة الجيدة وتقنيات اكتشاف الأخطاء وتصحيحها"
    ]
  },

  skillsGained: {
    en: [
      "Understanding of core programming logic and problem-solving skills",
      "Ability to write and structure code in Java and JavaScript",
      "Hands-on experience with both backend and frontend coding",
      "Foundation for learning advanced frameworks and technologies"
    ],
    ar: [
      "فهم منطق البرمجة الأساسي ومهارات حل المشكلات",
      "القدرة على كتابة وتنظيم الكود بلغة Java وJavaScript",
      "خبرة عملية في البرمجة الخلفية والواجهات الأمامية",
      "قاعدة متينة لتعلّم الأطر والتقنيات المتقدمة لاحقًا"
    ]
  },

  targetAudience: {
    en: "Beginners, students, or professionals seeking to build a solid foundation in programming and prepare for advanced software development courses.",
    ar: "موجه للمبتدئين والطلاب والمهنيين الذين يرغبون في بناء أساس متين في البرمجة والاستعداد لدورات تطوير البرمجيات المتقدمة."
  },

  prerequisites: { 
    en: "No previous programming experience required. Familiarity with computers and logical thinking is helpful.", 
    ar: "لا يشترط خبرة سابقة في البرمجة. يُفضل الإلمام باستخدام الحاسوب والتفكير المنطقي." 
  },

  certification: { 
    en: "Upon completion, participants will receive a Certificate of Achievement in Modern Programming Fundamentals.", 
    ar: "بعد إتمام الدورة، يحصل المشاركون على شهادة إنجاز في أساسيات البرمجة الحديثة." 
  },

  format: { 
    en: "Blended format – includes interactive workshops, coding challenges, and guided tutorials.", 
    ar: "نمط تعليمي مدمج – يتضمن ورش عمل تفاعلية، تحديات برمجية، ودروسًا موجهة خطوة بخطوة." 
  },

  instructor: { 
    en: "Delivered by experienced software engineers with real-world expertise in Java, JavaScript, and full-stack development.", 
    ar: "يقدّمها مهندسو برمجيات ذوو خبرة عملية في Java وJavaScript وتطوير التطبيقات الكاملة." 
  }
}
,
    {
  id: 3,
  level: { 
    en: "Foundation", 
    ar: "المستوى الأساسي" 
  },
  image: cybersecurityImg,
  title: {
    en: "Introduction to Cybersecurity for Developers",
    ar: "مقدمة في الأمن السيبراني للمطورين",
  },
  description: {
    en: "Gain essential knowledge about cybersecurity to build safer applications and protect digital assets. This course provides a clear understanding of modern cyber threats, the main types of attacks, and the best prevention techniques used by professionals. Developers will learn how to identify vulnerabilities in code, secure APIs, and apply good security practices across all layers of development.",
    ar: "اكتسب المعرفة الأساسية حول الأمن السيبراني لتطوير تطبيقات أكثر أمانًا وحماية الأصول الرقمية. توفر هذه الدورة فهمًا واضحًا لأحدث التهديدات الإلكترونية وأنواع الهجمات الشائعة وأفضل أساليب الوقاية المستخدمة من قبل المحترفين. سيتعلم المطورون كيفية تحديد الثغرات في الكود وتأمين واجهات البرمجة (APIs) وتطبيق ممارسات الأمان الجيدة في جميع مراحل التطوير."
  },

  duration: { 
    en: "3 days (intensive workshop)", 
    ar: "3 أيام (ورشة تدريب مكثفة)" 
  },

  objectives: {
    en: [
      "Understand the fundamentals of cybersecurity and data protection.",
      "Recognize common attack types such as phishing, SQL injection, and cross-site scripting.",
      "Implement secure coding techniques and password management strategies.",
      "Learn the principles of network and API security."
    ],
    ar: [
      "فهم أساسيات الأمن السيبراني وحماية البيانات.",
      "التعرف على أنواع الهجمات الشائعة مثل التصيد الاحتيالي وحقن SQL وهجمات XSS.",
      "تطبيق أساليب البرمجة الآمنة واستراتيجيات إدارة كلمات المرور.",
      "تعلّم مبادئ تأمين الشبكات وواجهات البرمجة (APIs)."
    ]
  },

  content: {
    en: [
      "Introduction to Cybersecurity Concepts",
      "Types of Cyber Attacks and Real-world Case Studies",
      "Vulnerabilities in Web and Mobile Applications",
      "Secure Coding Practices and OWASP Top 10",
      "Tools and Techniques for Threat Detection and Prevention"
    ],
    ar: [
      "مقدمة في مفاهيم الأمن السيبراني",
      "أنواع الهجمات الإلكترونية ودراسات حالة واقعية",
      "الثغرات الأمنية في تطبيقات الويب والموبايل",
      "ممارسات البرمجة الآمنة وأهم 10 مخاطر من OWASP",
      "الأدوات والتقنيات المستخدمة لاكتشاف التهديدات والوقاية منها"
    ]
  },

  skillsGained: {
    en: [
      "Ability to identify and mitigate security risks in applications.",
      "Knowledge of modern cybersecurity tools and standards.",
      "Understanding of how to integrate security in the software development lifecycle.",
      "Awareness of compliance and ethical hacking basics."
    ],
    ar: [
      "القدرة على تحديد ومعالجة المخاطر الأمنية في التطبيقات.",
      "معرفة الأدوات والمعايير الحديثة في الأمن السيبراني.",
      "فهم كيفية دمج الأمان ضمن دورة حياة تطوير البرمجيات.",
      "الإلمام بأساسيات القرصنة الأخلاقية والامتثال الأمني."
    ]
  },

  targetAudience: {
    en: "Developers, IT students, and anyone interested in learning how to secure applications and data in the digital world.",
    ar: "موجّه للمطورين وطلاب تكنولوجيا المعلومات وكل من يرغب في تعلم كيفية تأمين التطبيقات والبيانات في العالم الرقمي."
  },

  prerequisites: { 
    en: "Basic programming knowledge is recommended but not required.", 
    ar: "يُفضل امتلاك معرفة أساسية بالبرمجة، ولكنها ليست شرطًا إلزاميًا." 
  },

  certification: { 
    en: "A Certificate of Completion in Cybersecurity Fundamentals will be awarded after the course.", 
    ar: "يُمنح المشاركون شهادة إتمام في أساسيات الأمن السيبراني بعد انتهاء الدورة." 
  },

  format: { 
    en: "Interactive sessions, live demonstrations, and guided labs for practical experience.", 
    ar: "جلسات تفاعلية، عروض مباشرة، وتمارين تطبيقية للحصول على تجربة عملية." 
  },

  instructor: { 
    en: "Delivered by cybersecurity specialists with real-world experience in application and network protection.", 
    ar: "يُقدَّم من قِبل مختصين في الأمن السيبراني ذوي خبرة عملية في حماية التطبيقات والشبكات." 
  }
}
,
    {
  id: 4,
  level: { 
    en: "Foundation", 
    ar: "المستوى الأساسي" 
  },
  image: pythonImg,
  title: {
    en: "Introduction to Data Analysis using Python",
    ar: "مدخل إلى تحليل البيانات باستخدام Python",
  },
  description: {
    en: "Discover how to transform raw data into meaningful insights using Python. This practical course introduces key data analysis concepts through real-world examples and hands-on coding. Participants will learn how to clean, manipulate, and visualize datasets using popular Python libraries like Pandas, NumPy, and Matplotlib. By the end of the course, learners will be able to perform complete analytical workflows confidently.",
    ar: "اكتشف كيفية تحويل البيانات الخام إلى رؤى ذات قيمة باستخدام Python. تقدم هذه الدورة تطبيقات عملية ومفاهيم أساسية لتحليل البيانات من خلال أمثلة واقعية وتمارين عملية. سيتعلم المشاركون كيفية تنظيف البيانات ومعالجتها وعرضها بصريًا باستخدام مكتبات Python الشهيرة مثل Pandas وNumPy وMatplotlib. بنهاية الدورة، سيتمكن المتعلمون من تنفيذ عمليات تحليل متكاملة بثقة."
  },

  duration: { 
    en: "4 days (hands-on training)", 
    ar: "4 أيام (تدريب عملي مكثّف)" 
  },

  objectives: {
    en: [
      "Understand the basic principles of data analysis and its applications.",
      "Learn to use Python libraries for data manipulation and visualization.",
      "Perform data cleaning, aggregation, and statistical analysis.",
      "Build clear and insightful data reports using visual dashboards."
    ],
    ar: [
      "فهم المبادئ الأساسية لتحليل البيانات وتطبيقاته.",
      "تعلم استخدام مكتبات Python لمعالجة البيانات وعرضها بصريًا.",
      "تنفيذ عمليات تنظيف وتجميع وتحليل إحصائي للبيانات.",
      "إنشاء تقارير ولوحات تحكم بصرية واضحة وغنية بالمعلومات."
    ]
  },

  content: {
    en: [
      "Introduction to Python for Data Analysis",
      "Working with Pandas DataFrames and Series",
      "Data Cleaning and Preprocessing Techniques",
      "Exploratory Data Analysis and Visualization",
      "Mini Project: From Raw Data to Insights"
    ],
    ar: [
      "مقدمة في استخدام Python لتحليل البيانات",
      "التعامل مع DataFrames وSeries باستخدام Pandas",
      "تقنيات تنظيف ومعالجة البيانات",
      "التحليل الاستكشافي للبيانات والعرض البصري",
      "مشروع مصغر: من البيانات الخام إلى النتائج التحليلية"
    ]
  },

  skillsGained: {
    en: [
      "Ability to analyze and visualize data using Python tools.",
      "Practical understanding of data structures and statistics.",
      "Confidence in working with real-world datasets.",
      "Foundation for advanced studies in Data Science or Machine Learning."
    ],
    ar: [
      "القدرة على تحليل البيانات وعرضها بصريًا باستخدام أدوات Python.",
      "فهم عملي للهياكل البيانية والإحصائيات الأساسية.",
      "الثقة في التعامل مع مجموعات بيانات حقيقية.",
      "قاعدة صلبة للانتقال إلى مجالات علم البيانات أو التعلم الآلي المتقدمة."
    ]
  },

  targetAudience: {
    en: "Students, analysts, or developers who want to explore data-driven decision-making using Python.",
    ar: "موجه للطلاب والمحللين والمطورين الراغبين في تعلم اتخاذ القرارات بناءً على البيانات باستخدام Python."
  },

  prerequisites: { 
    en: "Basic knowledge of Python is helpful but not required.", 
    ar: "يفضّل امتلاك معرفة أساسية بلغة Python، ولكنها ليست شرطًا إلزاميًا." 
  },

  certification: { 
    en: "Participants will receive a Certificate of Completion in Data Analysis with Python.", 
    ar: "يحصل المشاركون على شهادة إتمام في تحليل البيانات باستخدام Python بعد انتهاء الدورة." 
  },

  format: { 
    en: "Online or in-person sessions with hands-on labs and real-world datasets.", 
    ar: "جلسات تعليمية عبر الإنترنت أو حضورياً، تتضمن تطبيقات عملية على بيانات واقعية." 
  },

  instructor: { 
    en: "Led by experienced data analysts and Python developers specializing in data science projects.", 
    ar: "يُقدَّم من قِبل محللي بيانات ومطوري Python ذوي خبرة في مشاريع علم البيانات." 
  }
}
,
   {
  id: 5,
  level: { 
    en: "Foundation", 
    ar: "المستوى الأساسي" 
  },
  image: softSkilsImg,
  title: {
    en: "Soft Skills for Programmers and Techs",
    ar: "المهارات الشخصية (Soft Skills) للمبرمجين والتقنيين",
  },
  description: {
    en: "Develop the interpersonal and communication skills that every modern tech professional needs. This course helps programmers and technical specialists enhance their ability to collaborate effectively, express ideas clearly, and present confidently in professional settings. By focusing on communication, teamwork, emotional intelligence, and adaptability, participants learn how to excel not only technically but also socially and professionally.",
    ar: "طوّر المهارات الشخصية والتواصلية التي يحتاجها كل محترف في المجال التقني. تساعد هذه الدورة المبرمجين والمتخصصين التقنيين على تحسين قدرتهم على التعاون الفعّال، والتعبير الواضح عن الأفكار، والعرض بثقة في بيئات العمل المهنية. من خلال التركيز على التواصل، والعمل الجماعي، والذكاء العاطفي، والقدرة على التكيّف، يتعلّم المشاركون كيف يبرزون ليس فقط بمهاراتهم التقنية بل أيضًا بقدراتهم الشخصية والمهنية."
  },

  duration: { 
    en: "2 days (interactive workshops)", 
    ar: "يومان (ورش عمل تفاعلية)" 
  },

  objectives: {
    en: [
      "Enhance communication and interpersonal interaction in technical teams.",
      "Learn how to give and receive constructive feedback.",
      "Develop leadership and conflict-resolution abilities.",
      "Improve adaptability, time management, and professional presentation."
    ],
    ar: [
      "تعزيز التواصل والتفاعل بين أعضاء الفرق التقنية.",
      "تعلّم كيفية تقديم واستقبال الملاحظات البنّاءة.",
      "تطوير مهارات القيادة وحل النزاعات.",
      "تحسين القدرة على التكيّف، وإدارة الوقت، والعرض المهني."
    ]
  },

  content: {
    en: [
      "The Importance of Soft Skills in the Tech Industry",
      "Effective Communication and Active Listening",
      "Team Collaboration and Emotional Intelligence",
      "Leadership, Conflict Management, and Problem Solving",
      "Presentation and Public Speaking Skills for Developers"
    ],
    ar: [
      "أهمية المهارات الشخصية في المجال التقني",
      "التواصل الفعّال والاستماع النشط",
      "التعاون الجماعي والذكاء العاطفي",
      "القيادة، وإدارة النزاعات، وحل المشكلات",
      "مهارات العرض والتحدث أمام الجمهور للمبرمجين"
    ]
  },

  skillsGained: {
    en: [
      "Strong interpersonal and communication skills.",
      "Improved teamwork and leadership qualities.",
      "Enhanced confidence in meetings and presentations.",
      "Better adaptability and emotional intelligence in the workplace."
    ],
    ar: [
      "مهارات تواصل شخصية قوية.",
      "تحسين القدرة على العمل الجماعي والقيادة.",
      "زيادة الثقة بالنفس أثناء الاجتماعات والعروض التقديمية.",
      "تعزيز القدرة على التكيّف والذكاء العاطفي في بيئة العمل."
    ]
  },

  targetAudience: {
    en: "Programmers, engineers, and tech professionals who want to enhance their interpersonal effectiveness and communication within teams and organizations.",
    ar: "موجه للمبرمجين والمهندسين والمهنيين التقنيين الراغبين في تطوير مهاراتهم الشخصية والتواصلية داخل الفرق والمؤسسات."
  },

  prerequisites: { 
    en: "No prerequisites required. Open to all technical professionals.", 
    ar: "لا توجد متطلبات سابقة. الدورة مفتوحة لجميع المتخصصين في المجال التقني." 
  },

  certification: { 
    en: "Participants who complete all sessions will receive a Certificate of Professional Soft Skills Development.", 
    ar: "يُمنح المشاركون الذين يُنهون جميع الجلسات شهادة في تطوير المهارات الشخصية المهنية." 
  },

  format: { 
    en: "Interactive workshops, role-playing activities, and group exercises designed for real-world scenarios.", 
    ar: "ورش عمل تفاعلية وأنشطة تمثيلية وتمارين جماعية مصممة لمحاكاة مواقف واقعية." 
  },

  instructor: { 
    en: "Facilitated by communication coaches and tech leaders with experience in mentoring development teams.", 
    ar: "يُقدَّم من قِبل مدربين متخصصين في التواصل وقادة تقنيين ذوي خبرة في تدريب فرق التطوير." 
  }
}

,
    // 🟡 Advanced Level
    {
  id: 6,
  level: { en: "Advanced", ar: "المستوى المتقدّم" },
  image: MachineLearningImg,
  title: {
    en: "Machine Learning from Zero to Mastery",
    ar: "Machine Learning من الصفر إلى الاحتراف",
  },
  description: {
    en: "Gain a deep and practical understanding of machine learning — from data preparation to deploying predictive and classification models using modern ML algorithms.",
    ar: "احصل على فهم عميق وعملي لتعلّم الآلة — من تحضير البيانات إلى نشر النماذج التنبؤية والتصنيفية باستخدام أحدث خوارزميات تعلم الآلة.",
  },
  duration: { en: "7 days", ar: "7 أيام" },
  prerequisites: {
    en: "Basic Python knowledge, understanding of statistics and linear algebra fundamentals.",
    ar: "معرفة أساسية بلغة Python، وفهم أساسيات الإحصاء والجبر الخطي.",
  },
  objectives: {
    en: [
      "Understand the key principles and algorithms of machine learning.",
      "Preprocess and clean real-world datasets for model training.",
      "Build predictive and classification models using scikit-learn and TensorFlow.",
      "Evaluate, optimize, and deploy ML models in real scenarios.",
    ],
    ar: [
      "فهم المبادئ الأساسية وخوارزميات تعلم الآلة.",
      "تنظيف وتحضير البيانات الواقعية لتدريب النماذج.",
      "إنشاء نماذج تنبؤية وتصنيفية باستخدام scikit-learn وTensorFlow.",
      "تقييم وتحسين ونشر نماذج تعلم الآلة في سيناريوهات واقعية.",
    ],
  },
  content: {
    en: [
      "Introduction to AI vs ML vs Deep Learning",
      "Supervised and Unsupervised Learning concepts",
      "Data preprocessing and feature engineering",
      "Regression, classification, and clustering models",
      "Model evaluation and cross-validation",
      "Introduction to neural networks",
      "Practical project: predicting real-world outcomes",
    ],
    ar: [
      "مقدمة حول الفرق بين الذكاء الاصطناعي وتعلم الآلة والتعلّم العميق",
      "مفاهيم التعلم الموجّه وغير الموجّه",
      "معالجة البيانات وإنشاء الميزات",
      "نماذج الانحدار، التصنيف، والتجميع",
      "تقييم النماذج والتحقق المتقاطع",
      "مقدمة في الشبكات العصبية",
      "مشروع تطبيقي: بناء نموذج للتنبؤ ببيانات واقعية",
    ],
  },
  tools: {
    en: ["Python", "scikit-learn", "TensorFlow", "Jupyter Notebook", "NumPy", "Pandas", "Matplotlib"],
    ar: ["Python", "scikit-learn", "TensorFlow", "Jupyter Notebook", "NumPy", "Pandas", "Matplotlib"],
  },
  targetAudience: {
    en: "Developers, data analysts, and engineers aiming to specialize in machine learning and AI applications.",
    ar: "المطورون ومحللو البيانات والمهندسون الراغبون في التخصص في تعلم الآلة وتطبيقات الذكاء الاصطناعي.",
  },
  certification: {
    en: "Participants will receive a certificate of completion upon successfully finishing the course and project.",
    ar: "يحصل المشاركون على شهادة إتمام عند إكمال الدورة والمشروع بنجاح.",
  },
  outcome: {
    en: "By the end of this course, participants will be capable of building, training, and deploying machine learning models independently using real data.",
    ar: "بنهاية الدورة، سيكون المشاركون قادرين على إنشاء وتدريب ونشر نماذج تعلم الآلة باستخدام بيانات حقيقية بشكل مستقل.",
  },
}
,
   {
  id: 7,
  level: { en: "Advanced", ar: "المستوى المتقدّم" },
  image: angularSpringImg,
  title: {
    en: "Modern System Development with Angular & Spring Boot",
    ar: "تطوير الأنظمة الحديثة بـ Angular وSpring Boot",
  },
  description: {
    en: "Master the integration between powerful frontend and backend frameworks to build robust, scalable, and modern web applications.",
    ar: "إتقان التكامل بين تقنيات الواجهة الأمامية والخلفية لبناء تطبيقات ويب قوية وقابلة للتوسع وحديثة.",
  },
  duration: { en: "6 days", ar: "6 أيام" },

  prerequisites: {
    en: "Basic knowledge of Java, HTML, CSS, and JavaScript is required.",
    ar: "يُشترط معرفة أساسية بلغة Java وHTML وCSS وJavaScript.",
  },

  objectives: {
    en: [
      "Understand the architecture and interaction between Angular and Spring Boot.",
      "Develop secure RESTful APIs and integrate them with modern frontend interfaces.",
      "Implement authentication, routing, and component-based UI design.",
      "Manage databases and data persistence with Spring Data JPA.",
      "Deploy full-stack applications using real-world best practices.",
    ],
    ar: [
      "فهم بنية وآلية التكامل بين Angular وSpring Boot.",
      "تطوير واجهات برمجية آمنة (RESTful APIs) وربطها بواجهات أمامية حديثة.",
      "تطبيق المصادقة، التوجيه، وتصميم واجهات المستخدم المعتمدة على المكونات.",
      "إدارة قواعد البيانات واستمرارية البيانات باستخدام Spring Data JPA.",
      "نشر تطبيقات متكاملة وفق أفضل الممارسات الواقعية.",
    ],
  },

  content: {
    en: [
      "Overview of Angular and Spring Boot ecosystem",
      "Creating and managing RESTful APIs with Spring Boot",
      "Frontend development with Angular components and services",
      "Secure communication between frontend and backend",
      "State management and reactive forms in Angular",
      "Authentication and authorization with Spring Security & JWT",
      "Deployment of full-stack applications (Docker / cloud options)",
      "Practical project: Building a task management web app",
    ],
    ar: [
      "نظرة عامة على بيئة Angular وSpring Boot",
      "إنشاء وإدارة واجهات RESTful باستخدام Spring Boot",
      "تطوير الواجهة الأمامية عبر مكونات وخدمات Angular",
      "تأمين الاتصال بين الواجهة الأمامية والخلفية",
      "إدارة الحالة والنماذج التفاعلية في Angular",
      "المصادقة والترخيص باستخدام Spring Security وJWT",
      "نشر التطبيقات المتكاملة (Docker / حلول سحابية)",
      "مشروع تطبيقي: إنشاء تطبيق ويب لإدارة المهام",
    ],
  },

  tools: {
    en: [
      "Angular 17",
      "Spring Boot 3",
      "Spring Security",
      "TypeScript",
      "Hibernate / JPA",
      "PostgreSQL / MySQL",
      "Swagger",
      "Docker",
      "Git / GitHub"
    ],
    ar: [
      "Angular 17",
      "Spring Boot 3",
      "Spring Security",
      "TypeScript",
      "Hibernate / JPA",
      "PostgreSQL / MySQL",
      "Swagger",
      "Docker",
      "Git / GitHub"
    ],
  },

  targetAudience: {
    en: "Developers and engineers aiming to master full-stack development using the most in-demand frameworks in the industry.",
    ar: "المطورون والمهندسون الراغبون في احتراف تطوير الأنظمة الكاملة باستخدام أكثر الأُطر طلباً في السوق.",
  },

  certification: {
    en: "A certificate of completion is awarded upon successfully completing the final project.",
    ar: "يُمنح المشاركون شهادة إتمام عند إكمال المشروع النهائي بنجاح.",
  },

  outcome: {
    en: "By the end of this course, participants will be able to design, develop, secure, and deploy full web systems using Angular and Spring Boot.",
    ar: "بنهاية الدورة، سيتمكن المشاركون من تصميم وتطوير وتأمين ونشر أنظمة ويب متكاملة باستخدام Angular وSpring Boot.",
  },
}
,
    {
  id: 8,
  level: { en: "Advanced", ar: "المستوى المتقدّم" },
  image: devOpsImg,
  title: {
    en: "DevOps & CI/CD – From Code to Deployment",
    ar: "DevOps وCI/CD – من الكود إلى النشر",
  },
  description: {
    en: "Master the practices of DevOps and CI/CD to automate software delivery pipelines, streamline deployments, and improve collaboration between development and operations teams.",
    ar: "إتقان ممارسات DevOps وCI/CD لأتمتة خطط تسليم البرمجيات، تبسيط عمليات النشر، وتحسين التعاون بين فرق التطوير والتشغيل.",
  },
  duration: { en: "5 days", ar: "5 أيام" },

  prerequisites: {
    en: "Basic knowledge of software development, Git, and containerization concepts (Docker) is recommended.",
    ar: "يُفضل وجود معرفة أساسية بتطوير البرمجيات، Git، ومفاهيم الحاويات (Docker).",
  },

  objectives: {
    en: [
      "Understand the principles of DevOps culture and workflow automation.",
      "Learn continuous integration and continuous deployment (CI/CD) pipelines.",
      "Implement containerized applications using Docker.",
      "Automate builds, tests, and deployments using GitLab CI/CD.",
      "Monitor and optimize deployment pipelines for efficiency and reliability.",
    ],
    ar: [
      "فهم مبادئ ثقافة DevOps وأتمتة سير العمل.",
      "تعلم إنشاء خطط التكامل المستمر والنشر المستمر (CI/CD).",
      "تطبيق الحاويات لتشغيل التطبيقات باستخدام Docker.",
      "أتمتة عمليات البناء، والاختبارات، والنشر باستخدام GitLab CI/CD.",
      "مراقبة وتحسين خطوط النشر لتحقيق الكفاءة والموثوقية.",
    ],
  },

  content: {
    en: [
      "Introduction to DevOps concepts and culture",
      "Version control with Git and Git workflows",
      "Containerization basics and Docker practicals",
      "Building CI/CD pipelines with GitLab",
      "Automating testing, building, and deployment processes",
      "Monitoring, logging, and troubleshooting pipelines",
      "Project: Deploy a full-stack application using CI/CD practices",
    ],
    ar: [
      "مقدمة حول مفاهيم وثقافة DevOps",
      "إدارة الإصدارات باستخدام Git وسير العمل",
      "أساسيات الحاويات وتطبيقات Docker العملية",
      "بناء خطوط CI/CD باستخدام GitLab",
      "أتمتة الاختبارات، والبناء، وعمليات النشر",
      "المراقبة، وتسجيل الأحداث، وحل المشكلات في خطوط النشر",
      "مشروع عملي: نشر تطبيق متكامل باستخدام ممارسات CI/CD",
    ],
  },

  tools: {
    en: ["Git", "GitLab", "Docker", "Jenkins (optional)", "Kubernetes (optional)", "CI/CD pipelines"],
    ar: ["Git", "GitLab", "Docker", "Jenkins (اختياري)", "Kubernetes (اختياري)", "خطوط CI/CD"],
  },

  targetAudience: {
    en: "Developers, system administrators, and IT professionals who want to automate software delivery and adopt DevOps practices.",
    ar: "المطورون، ومسؤولو الأنظمة، والمهنيون في مجال تكنولوجيا المعلومات الراغبون في أتمتة تسليم البرمجيات واعتماد ممارسات DevOps.",
  },

  certification: {
    en: "Participants will receive a certificate of completion after successfully deploying a project using CI/CD pipelines.",
    ar: "يحصل المشاركون على شهادة إتمام بعد نشر مشروع عملي بنجاح باستخدام خطوط CI/CD.",
  },

  outcome: {
    en: "By the end of this course, participants will be able to design, implement, and manage automated DevOps pipelines for real-world applications.",
    ar: "بنهاية الدورة، سيتمكن المشاركون من تصميم وتنفيذ وإدارة خطوط DevOps آلية لتطبيقات واقعية.",
  },
}
,
    {
  id: 9,
  level: { en: "Advanced", ar: "المستوى المتقدّم" },
  image: powerBiImg,
  title: {
    en: "Advanced Data Analysis & Power BI",
    ar: "تحليل البيانات المتقدمة وPower BI",
  },
  description: {
    en: "Learn to transform complex datasets into actionable insights using Power BI. This course covers advanced data modeling, visualization techniques, and business intelligence concepts to support informed decision-making in organizations.",
    ar: "تعلّم تحويل مجموعات البيانات المعقدة إلى رؤى قابلة للتنفيذ باستخدام Power BI. تغطي الدورة نمذجة البيانات المتقدمة وتقنيات العرض البصري ومفاهيم ذكاء الأعمال لدعم اتخاذ القرار في المؤسسات.",
  },
  duration: { en: "6 days", ar: "6 أيام" },

  prerequisites: {
    en: "Basic knowledge of Excel, data concepts, and familiarity with reporting tools is recommended.",
    ar: "يُفضل وجود معرفة أساسية بـ Excel ومفاهيم البيانات، وإلمام بأدوات التقارير.",
  },

  objectives: {
    en: [
      "Understand advanced data modeling and relationships in Power BI.",
      "Create dynamic and interactive dashboards for business intelligence.",
      "Perform complex calculations using DAX (Data Analysis Expressions).",
      "Analyze trends, KPIs, and performance metrics to support decision-making.",
      "Learn best practices for publishing and sharing dashboards securely.",
    ],
    ar: [
      "فهم نمذجة البيانات المتقدمة والعلاقات بين الجداول في Power BI.",
      "إنشاء لوحات تفاعلية وديناميكية لذكاء الأعمال.",
      "تنفيذ الحسابات المعقدة باستخدام DAX (تعابير تحليل البيانات).",
      "تحليل الاتجاهات، ومؤشرات الأداء الرئيسية، والبيانات لدعم اتخاذ القرار.",
      "تعلّم أفضل الممارسات لنشر ومشاركة لوحات البيانات بأمان.",
    ],
  },

  content: {
    en: [
      "Introduction to Advanced BI concepts",
      "Data modeling and relationships in Power BI",
      "Using DAX for advanced calculations",
      "Creating interactive dashboards and reports",
      "Visualizing trends, KPIs, and insights",
      "Data transformation with Power Query",
      "Publishing and sharing dashboards with security controls",
      "Final project: Build a complete business intelligence dashboard",
    ],
    ar: [
      "مقدمة في مفاهيم ذكاء الأعمال المتقدمة",
      "نمذجة البيانات والعلاقات في Power BI",
      "استخدام DAX للحسابات المتقدمة",
      "إنشاء لوحات وتقارير تفاعلية",
      "عرض الاتجاهات ومؤشرات الأداء والرؤى",
      "تحويل البيانات باستخدام Power Query",
      "نشر ومشاركة لوحات البيانات مع ضوابط الأمان",
      "المشروع النهائي: إنشاء لوحة ذكاء أعمال متكاملة",
    ],
  },

  tools: {
    en: ["Power BI Desktop", "Power Query", "DAX", "Excel", "SQL (optional)"],
    ar: ["Power BI Desktop", "Power Query", "DAX", "Excel", "SQL (اختياري)"],
  },

  targetAudience: {
    en: "Data analysts, business intelligence professionals, and managers who want to advance their data analysis and visualization skills.",
    ar: "محللو البيانات، ومتخصصو ذكاء الأعمال، والمديرون الراغبون في تطوير مهاراتهم في تحليل البيانات وعرضها بصريًا.",
  },

  certification: {
    en: "Participants will receive a certificate of completion after successfully building their BI dashboard project.",
    ar: "يحصل المشاركون على شهادة إتمام بعد إكمال مشروع لوحة ذكاء الأعمال بنجاح.",
  },

  outcome: {
    en: "By the end of the course, participants will be able to model, analyze, and visualize complex datasets and create professional BI dashboards to support strategic decision-making.",
    ar: "بنهاية الدورة، سيتمكن المشاركون من نمذجة وتحليل وعرض مجموعات البيانات المعقدة وإنشاء لوحات ذكاء أعمال احترافية لدعم اتخاذ القرارات الاستراتيجية.",
  },
}
,
    {
  id: 10,
  level: { en: "Advanced", ar: "المستوى المتقدّم" },
  image: Cybersecurity2Img,
  title: {
    en: "Application & System Security (Secure Coding Bootcamp)",
    ar: "أمن التطبيقات والأنظمة (Secure Coding Bootcamp)",
  },
  description: {
    en: "Learn to implement secure coding practices and protect applications and systems against common vulnerabilities and attacks.",
    ar: "تعلّم تطبيق ممارسات الكود الآمن وحماية التطبيقات والأنظمة من الثغرات والهجمات الشائعة.",
  },
  duration: { en: "5 days", ar: "5 أيام" },

  prerequisites: {
    en: "Basic programming knowledge and familiarity with web or system development.",
    ar: "معرفة أساسية بالبرمجة وإلمام بتطوير الويب أو الأنظمة.",
  },

  objectives: {
    en: [
      "Understand common security vulnerabilities in applications and systems.",
      "Apply secure coding standards and best practices.",
      "Perform threat modeling and risk assessment.",
      "Implement authentication, authorization, and data protection mechanisms.",
      "Integrate security checks in CI/CD pipelines.",
    ],
    ar: [
      "فهم الثغرات الأمنية الشائعة في التطبيقات والأنظمة.",
      "تطبيق معايير الكود الآمن وأفضل الممارسات.",
      "إجراء تحليل التهديدات وتقييم المخاطر.",
      "تطبيق آليات المصادقة، والتفويض، وحماية البيانات.",
      "دمج فحوصات الأمان في خطوط CI/CD.",
    ],
  },

  content: {
    en: [
      "Introduction to application and system security",
      "Common vulnerabilities (OWASP Top 10, buffer overflow, injection attacks)",
      "Secure coding practices and guidelines",
      "Authentication, authorization, and encryption",
      "Threat modeling and risk assessment",
      "Security testing and integration in CI/CD",
      "Hands-on labs: identifying and fixing vulnerabilities",
      "Final project: Secure a sample web application",
    ],
    ar: [
      "مقدمة في أمن التطبيقات والأنظمة",
      "الثغرات الشائعة (OWASP Top 10، تجاوز السعة، هجمات الحقن)",
      "ممارسات وإرشادات الكود الآمن",
      "المصادقة، التفويض، والتشفير",
      "نمذجة التهديدات وتقييم المخاطر",
      "اختبارات الأمان ودمجها في CI/CD",
      "مختبرات عملية: تحديد وإصلاح الثغرات",
      "المشروع النهائي: تأمين تطبيق ويب نموذجي",
    ],
  },

  tools: {
    en: ["OWASP ZAP", "Burp Suite", "Docker", "GitLab CI/CD", "Static Code Analysis Tools"],
    ar: ["OWASP ZAP", "Burp Suite", "Docker", "GitLab CI/CD", "أدوات تحليل الكود الثابت"],
  },

  targetAudience: {
    en: "Developers, system engineers, and security enthusiasts who want to improve their coding security skills and protect applications.",
    ar: "المطورون، مهندسو الأنظمة، ومحبو الأمن الراغبون في تحسين مهاراتهم في كود الأمان وحماية التطبيقات.",
  },

  certification: {
    en: "Participants will receive a certificate of completion after successfully securing the final project.",
    ar: "يحصل المشاركون على شهادة إتمام بعد تأمين المشروع النهائي بنجاح.",
  },

  outcome: {
    en: "By the end of the course, participants will be able to identify, prevent, and fix security vulnerabilities in real-world applications and systems.",
    ar: "بنهاية الدورة، سيتمكن المشاركون من تحديد ومنع وإصلاح الثغرات الأمنية في التطبيقات والأنظمة الواقعية.",
  },
}
,

    // 🔴 Expert Level
    
  {
    id: 11,
    level: { en: "Expert", ar: "المستوى الاحترافي" },
    image: digitaltransformationImg,
    title: {
      en: "AI in Enterprises & Digital Transformation",
      ar: "الذكاء الاصطناعي في المؤسسات والتحول الرقمي",
    },
    description: {
      en: "Enable organizations to integrate AI into production and decision-making, optimizing business processes and competitive advantage.",
      ar: "تمكين المؤسسات من دمج تقنيات الذكاء الاصطناعي في الإنتاج واتخاذ القرار، لتحسين العمليات التجارية وتعزيز الميزة التنافسية.",
    },
    duration: { en: "8 days", ar: "8 أيام" },
    prerequisites: {
      en: "Advanced knowledge in AI, programming, and business processes.",
      ar: "معرفة متقدمة بالذكاء الاصطناعي، البرمجة، والعمليات التجارية.",
    },
    objectives: {
      en: [
        "Understand AI integration strategies in enterprises.",
        "Identify processes that benefit from AI-driven automation.",
        "Apply AI for business optimization and decision-making.",
        "Evaluate AI solutions for scalability and ROI.",
      ],
      ar: [
        "فهم استراتيجيات دمج الذكاء الاصطناعي في المؤسسات.",
        "تحديد العمليات التي تستفيد من الأتمتة المعتمدة على الذكاء الاصطناعي.",
        "تطبيق الذكاء الاصطناعي لتحسين الأعمال واتخاذ القرار.",
        "تقييم حلول الذكاء الاصطناعي من حيث القابلية للتوسع والعائد على الاستثمار.",
      ],
    },
    tools: {
      en: ["Python", "TensorFlow", "Power BI", "Cloud AI Services", "Jupyter Notebook"],
      ar: ["Python", "TensorFlow", "Power BI", "خدمات الذكاء الاصطناعي السحابية", "Jupyter Notebook"],
    },
    targetAudience: {
      en: "Business leaders, AI specialists, and data-driven managers.",
      ar: "قادة الأعمال، متخصصو الذكاء الاصطناعي، والمديرون المعتمدون على البيانات.",
    },
    certification: {
      en: "Certificate of completion awarded after successful project integration.",
      ar: "شهادة إتمام بعد دمج المشروع بنجاح.",
    },
    outcome: {
      en: "Participants will be able to design and implement AI strategies in enterprise environments.",
      ar: "سيتمكن المشاركون من تصميم وتنفيذ استراتيجيات الذكاء الاصطناعي في بيئات المؤسسات.",
    },
  },
  {
    id: 12,
    level: { en: "Expert", ar: "المستوى الاحترافي" },
    image: Cybersecurity3Img,
    title: {
      en: "Cybersecurity & AI Defense",
      ar: "الدفاع السيبراني والذكاء الاصطناعي",
    },
    description: {
      en: "Use AI techniques to detect attacks, analyze threats, and automate cybersecurity defenses.",
      ar: "استخدام تقنيات الذكاء الاصطناعي لكشف الهجمات وتحليل التهديدات وأتمتة الدفاع السيبراني.",
    },
    duration: { en: "7 days", ar: "7 أيام" },
    prerequisites: {
      en: "Advanced cybersecurity knowledge, programming skills, and familiarity with AI concepts.",
      ar: "معرفة متقدمة بالأمن السيبراني، مهارات البرمجة، وإلمام بمفاهيم الذكاء الاصطناعي.",
    },
    objectives: {
      en: [
        "Understand AI applications in cybersecurity.",
        "Develop models to detect and prevent cyber attacks.",
        "Automate threat analysis using AI tools.",
        "Evaluate AI-driven security systems for reliability.",
      ],
      ar: [
        "فهم تطبيقات الذكاء الاصطناعي في الأمن السيبراني.",
        "تطوير نماذج لكشف ومنع الهجمات الإلكترونية.",
        "أتمتة تحليل التهديدات باستخدام أدوات الذكاء الاصطناعي.",
        "تقييم أنظمة الأمن المدعومة بالذكاء الاصطناعي من حيث الموثوقية.",
      ],
    },
    tools: {
      en: ["Python", "TensorFlow", "Keras", "SIEM Tools", "Cybersecurity Simulators"],
      ar: ["Python", "TensorFlow", "Keras", "أدوات SIEM", "محاكيات الأمن السيبراني"],
    },
    targetAudience: {
      en: "Cybersecurity professionals, AI specialists, and system administrators.",
      ar: "محترفو الأمن السيبراني، متخصصو الذكاء الاصطناعي، ومسؤولو الأنظمة.",
    },
    certification: {
      en: "Certificate of completion after AI-based security project.",
      ar: "شهادة إتمام بعد مشروع أمني قائم على الذكاء الاصطناعي.",
    },
    outcome: {
      en: "Participants will be able to implement AI-enhanced cybersecurity measures to detect and mitigate attacks.",
      ar: "سيتمكن المشاركون من تطبيق إجراءات أمنية محسّنة بالذكاء الاصطناعي لاكتشاف الهجمات والتخفيف منها.",
    },
  },
  {
    id: 13,
    level: { en: "Expert", ar: "المستوى الاحترافي" },
    image: DataScienceImg,
    title: {
      en: "Data Science Professional – From Data to Decisions",
      ar: "احتراف علم البيانات – من البيانات إلى القرارات",
    },
    description: {
      en: "Prepare trainees to become expert data and AI analysts, able to convert data into actionable insights.",
      ar: "إعداد المتدرب ليصبح محللاً خبيرًا في علم البيانات والذكاء الاصطناعي، قادرًا على تحويل البيانات إلى رؤى قابلة للتنفيذ.",
    },
    duration: { en: "9 days", ar: "9 أيام" },
    prerequisites: {
      en: "Strong programming skills, knowledge of Python, statistics, and machine learning basics.",
      ar: "مهارات برمجية قوية، معرفة بـ Python، الإحصاء، وأساسيات تعلم الآلة.",
    },
    objectives: {
      en: [
        "Master advanced data analytics and visualization techniques.",
        "Build predictive and prescriptive models.",
        "Interpret data insights for strategic decisions.",
        "Deploy data-driven solutions in real environments.",
      ],
      ar: [
        "إتقان تقنيات التحليل المتقدم وعرض البيانات.",
        "بناء نماذج تنبؤية واستشارية.",
        "تفسير رؤى البيانات لاتخاذ قرارات استراتيجية.",
        "نشر حلول قائمة على البيانات في بيئات واقعية.",
      ],
    },
    tools: {
      en: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "scikit-learn", "TensorFlow", "Jupyter Notebook"],
      ar: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "scikit-learn", "TensorFlow", "Jupyter Notebook"],
    },
    targetAudience: {
      en: "Aspiring data scientists, AI analysts, and business intelligence professionals.",
      ar: "المتخصصون الطامحون في علم البيانات، محللو الذكاء الاصطناعي، ومتخصصو ذكاء الأعمال.",
    },
    certification: {
      en: "Certificate awarded after completing practical projects and final data analysis.",
      ar: "شهادة تُمنح بعد إكمال المشاريع العملية والتحليل النهائي للبيانات.",
    },
    outcome: {
      en: "Participants will be able to analyze, model, and visualize data professionally to support critical business decisions.",
      ar: "سيتمكن المشاركون من تحليل ونمذجة وعرض البيانات بشكل احترافي لدعم اتخاذ القرارات التجارية المهمة.",
    },
  },
  {
    id: 14,
    level: { en: "Expert", ar: "المستوى الاحترافي" },
    image: programmingImg,
    title: {
      en: "Leadership in Tech – Technical Leadership in AI Era",
      ar: "القيادة التقنية في عصر الذكاء الاصطناعي",
    },
    description: {
      en: "Develop leadership, team management, and creative motivation skills in tech environments.",
      ar: "تطوير مهارات القيادة التقنية، إدارة الفرق، وتحفيز الإبداع الجماعي في بيئات التقنية.",
    },
    duration: { en: "6 days", ar: "6 أيام" },
    prerequisites: {
      en: "Experience in tech projects and familiarity with team management principles.",
      ar: "خبرة في المشاريع التقنية وإلمام بمبادئ إدارة الفرق.",
    },
    objectives: {
      en: [
        "Enhance leadership and strategic thinking in technical projects.",
        "Improve team collaboration and motivation.",
        "Manage AI-driven projects effectively.",
        "Develop decision-making and problem-solving skills.",
      ],
      ar: [
        "تعزيز مهارات القيادة والتفكير الاستراتيجي في المشاريع التقنية.",
        "تحسين التعاون وتحفيز الفرق.",
        "إدارة المشاريع المعتمدة على الذكاء الاصطناعي بفعالية.",
        "تطوير مهارات اتخاذ القرار وحل المشكلات.",
      ],
    },
    tools: {
      en: ["Project Management Tools", "Collaboration Platforms", "AI Project Case Studies"],
      ar: ["أدوات إدارة المشاريع", "منصات التعاون", "دراسات حالات المشاريع المعتمدة على الذكاء الاصطناعي"],
    },
    targetAudience: {
      en: "Tech leads, project managers, and senior developers aspiring to leadership roles.",
      ar: "قادة التقنية، مدراء المشاريع، والمطورون الخبراء الراغبون في تولي أدوار قيادية.",
    },
    certification: {
      en: "Certificate awarded after completion of leadership and project simulation exercises.",
      ar: "شهادة تُمنح بعد إتمام تمارين القيادة ومحاكاة المشاريع.",
    },
    outcome: {
      en: "Participants will be able to lead technical teams, manage AI projects, and foster innovation.",
      ar: "سيتمكن المشاركون من قيادة الفرق التقنية، إدارة مشاريع الذكاء الاصطناعي، وتعزيز الابتكار.",
    },
  },
  {
    id: 15,
    level: { en: "Expert", ar: "المستوى الاحترافي" },
    image: aiImg,
    title: {
      en: "Technical Training & Smart Curriculum (AI for Trainers)",
      ar: "فن التدريب التقني وبناء المناهج الذكية (AI for Trainers)",
    },
    description: {
      en: "Train trainers to use AI tools in education and training programs for better engagement and personalized learning.",
      ar: "تدريب المدربين على استخدام أدوات الذكاء الاصطناعي في التعليم وبرامج التدريب لتحسين التفاعل والتعلم المخصص.",
    },
    duration: { en: "7 days", ar: "7 أيام" },
    prerequisites: {
      en: "Experience in training or teaching, basic AI knowledge.",
      ar: "خبرة في التدريب أو التعليم، ومعرفة أساسية بالذكاء الاصطناعي.",
    },
    objectives: {
      en: [
        "Integrate AI tools into training and educational content.",
        "Design smart curricula with adaptive learning techniques.",
        "Enhance engagement and learning outcomes using AI.",
        "Prepare trainers for the AI-driven education environment.",
      ],
      ar: [
        "دمج أدوات الذكاء الاصطناعي في محتوى التدريب والتعليم.",
        "تصميم مناهج ذكية باستخدام تقنيات التعلم التكيفي.",
        "تحسين التفاعل ونتائج التعلم باستخدام الذكاء الاصطناعي.",
        "إعداد المدربين لبيئة تعليمية قائمة على الذكاء الاصطناعي.",
      ],
    },
    tools: {
      en: ["AI Platforms for Education", "Learning Management Systems", "Python", "Data Analytics Tools"],
      ar: ["منصات الذكاء الاصطناعي للتعليم", "أنظمة إدارة التعلم", "Python", "أدوات تحليل البيانات"],
    },
    targetAudience: {
      en: "Trainers, educators, and instructional designers aiming to enhance their teaching with AI.",
      ar: "المدربون، المعلمون، ومصممو المناهج الراغبون في تحسين التدريب باستخدام الذكاء الاصطناعي.",
    },
    certification: {
      en: "Certificate awarded after designing and delivering an AI-enhanced training module.",
      ar: "شهادة تُمنح بعد تصميم وتقديم وحدة تدريبية محسّنة بالذكاء الاصطناعي.",
    },
    outcome: {
      en: "Participants will be able to integrate AI into their training programs and deliver personalized, effective learning experiences.",
      ar: "سيتمكن المشاركون من دمج الذكاء الاصطناعي في برامج التدريب الخاصة بهم وتقديم تجارب تعلم شخصية وفعّالة.",
    },
  }
]
,
}

export default coursesData;
