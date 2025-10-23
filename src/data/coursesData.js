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
      level: { en: "Foundation", ar: "المستوى الأساسي" },
      image: IntroductionToAIandModernApplicationsImg,
      title: {
        en: "Introduction to AI and Modern Applications",
        ar: "مقدمة في الذكاء الاصطناعي وتطبيقاته الحديثة",
      },
      description: {
        en: "Learn AI concepts, algorithm types, and main practical applications.",
        ar: "التعرف على مفاهيم الـAI، أنواع الخوارزميات، وأبرز استخداماتها العملية.",
      },
      duration: { en: "4 days", ar: "4 أيام" },
    },
    {
      id: 2,
      level: { en: "Foundation", ar: "المستوى الأساسي" },
      image: JavaJavascriptImg,
      title: {
        en: "Fundamentals of Modern Programming with Java & JavaScript",
        ar: "أساسيات البرمجة الحديثة بلغة Java وJavaScript",
      },
      description: {
        en: "Acquire basic programming skills for modern system development.",
        ar: "اكتساب المهارات البرمجية الأساسية لتطوير الأنظمة الحديثة.",
      },
      duration: { en: "5 days", ar: "5 أيام" },
    },
    {
      id: 3,
      level: { en: "Foundation", ar: "المستوى الأساسي" },
      image: cybersecurityImg,
      title: {
        en: "Introduction to Cybersecurity for Developers",
        ar: "مقدمة في الأمن السيبراني للمطورين",
      },
      description: {
        en: "Understand digital protection principles, types of attacks, and prevention.",
        ar: "فهم مبادئ الحماية الرقمية، وأنواع الهجمات الإلكترونية وطرق الوقاية منها.",
      },
      duration: { en: "3 days", ar: "3 أيام" },
    },
    {
      id: 4,
      level: { en: "Foundation", ar: "المستوى الأساسي" },
      image: pythonImg,
      title: {
        en: "Introduction to Data Analysis using Python",
        ar: "مدخل إلى تحليل البيانات باستخدام Python",
      },
      description: {
        en: "Learn to analyze and explore data practically using Python and Pandas.",
        ar: "تعلم تحليل البيانات واستكشافها عمليًا عبر أدوات Python وPandas.",
      },
      duration: { en: "4 days", ar: "4 أيام" },
    },
    {
      id: 5,
      level: { en: "Foundation", ar: "المستوى الأساسي" },
      image: softSkilsImg,
      title: {
        en: "Soft Skills for Programmers and Techs",
        ar: "Soft Skills للمبرمجين والتقنيين",
      },
      description: {
        en: "Develop communication, teamwork, and presentation skills.",
        ar: "تطوير مهارات التواصل، العمل الجماعي، والعرض أمام الجمهور.",
      },
      duration: { en: "2 days", ar: "يومين" },
    },

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
        en: "Practical training on predictive and classification models using ML algorithms.",
        ar: "تدريب عملي على النماذج التنبؤية والتصنيفية باستخدام خوارزميات تعلم الآلة.",
      },
      duration: { en: "7 days", ar: "7 أيام" },
    },
    {
      id: 7,
      level: { en: "Advanced", ar: "المستوى المتقدّم" },
      image: angularSpringImg,
      title: {
        en: "Modern System Development with Angular & Spring Boot",
        ar: "تطوير الأنظمة الحديثة بـ Angular وSpring Boot",
      },
      description: {
        en: "Build full web applications with smart integrated interfaces.",
        ar: "إنشاء تطبيقات ويب متكاملة مع واجهات ذكية ومتكاملة.",
      },
      duration: { en: "6 days", ar: "6 أيام" },
    },
    {
      id: 8,
      level: { en: "Advanced", ar: "المستوى المتقدّم" },
      image: devOpsImg,
      title: {
        en: "DevOps & CI/CD – From Code to Deployment",
        ar: "DevOps وCI/CD – من الكود إلى النشر",
      },
      description: {
        en: "Learn automated deployment and continuous integration via Docker and GitLab.",
        ar: "تعلم أتمتة النشر والتكامل المستمر عبر Docker وGitLab.",
      },
      duration: { en: "5 days", ar: "5 أيام" },
    },
    {
      id: 9,
      level: { en: "Advanced", ar: "المستوى المتقدّم" },
      image: powerBiImg,
      title: {
        en: "Advanced Data Analysis & Power BI",
        ar: "تحليل البيانات المتقدمة وPower BI",
      },
      description: {
        en: "Design business intelligence dashboards and analyze data for decision making.",
        ar: "تصميم لوحات ذكاء الأعمال وتحليل البيانات لاتخاذ القرار.",
      },
      duration: { en: "6 days", ar: "6 أيام" },
    },
    {
      id: 10,
      level: { en: "Advanced", ar: "المستوى المتقدّم" },
      image: Cybersecurity2Img,
      title: {
        en: "Application & System Security (Secure Coding Bootcamp)",
        ar: "أمن التطبيقات والأنظمة (Secure Coding Bootcamp)",
      },
      description: {
        en: "Apply security standards in code and deployment processes.",
        ar: "تطبيق معايير الأمان في الكود وعمليات النشر البرمجية.",
      },
      duration: { en: "5 days", ar: "5 أيام" },
    },

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
        en: "Enable organizations to integrate AI into production and decision-making.",
        ar: "تمكين المؤسسات من دمج تقنيات AI في الإنتاج واتخاذ القرار.",
      },
      duration: { en: "8 days", ar: "8 أيام" },
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
        en: "Use AI to detect attacks and analyze cybersecurity threats.",
        ar: "استخدام الذكاء الاصطناعي في كشف الهجمات وتحليل التهديدات السيبرانية.",
      },
      duration: { en: "7 days", ar: "7 أيام" },
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
        en: "Prepare trainees to become expert data and AI analysts.",
        ar: "إعداد المتدرب ليصبح محللاً خبيرًا في علم البيانات وAI.",
      },
      duration: { en: "9 days", ar: "9 أيام" },
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
        en: "Develop leadership, team management, and creative motivation skills.",
        ar: "تطوير مهارات القيادة التقنية، إدارة الفرق، وتحفيز الإبداع الجماعي.",
      },
      duration: { en: "6 days", ar: "6 أيام" },
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
        en: "Train trainers to use AI tools in education and training.",
        ar: "تدريب المدربين على استخدام أدوات الذكاء الاصطناعي في التعليم والتكوين.",
      },
      duration: { en: "7 days", ar: "7 أيام" },
    },
  ],
};

export default coursesData;
