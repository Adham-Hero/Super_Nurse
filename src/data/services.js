import { ClipboardList, ShieldPlus, Users, GraduationCap, Award, Calculator } from "lucide-react";

export const services = {
  en: {
    servicesEyebrow: "SELECTED SERVICES",
    servicesTitle: "Services for students",
    services: [
      {
        icon: ClipboardList,
        title: "Academic Advising",
        description: "One-on-one planning to help you pick the right courses each semester.",
        tags: ["1:1 sessions", "Every semester"],
      },
      {
        icon: ShieldPlus,
        title: "Clinical Placement",
        description: "Guidance and paperwork help for securing hospital and clinic rotations.",
        tags: ["Hospitals", "Clinics"],
      },
      {
        icon: Users,
        title: "Study Groups & Tutoring",
        description: "Peer-led sessions and tutor access for tough subjects like pharmacology.",
        tags: ["Peer-led", "Free"],
      },
      {
        icon: GraduationCap,
        title: "Career Counseling",
        description: "Resume reviews, interview practice, and hospital introductions.",
        tags: ["Resume help", "Interviews"],
      },
      {
        icon: Award,
        title: "Licensing Exam Prep",
        description: "Structured NCLEX-RN practice tests and weak-area coaching.",
        tags: ["NCLEX-RN", "Practice tests"],
      },
      {
        icon: Calculator,
        title: "GPA Calculator",
        description: "Quickly work out your semester or cumulative GPA online.",
        tags: ["Free tool", "External site"],
        link: "https://adham-hero.github.io/Calc_Your_GPA/",
        linkLabel: "Open Calculator",
      },
    ],
  },

  ar: {
    servicesEyebrow: "خدمات مختارة",
    servicesTitle: "خدمات للطلاب",
    services: [
      {
        icon: ClipboardList,
        title: "الإرشاد الأكاديمي",
        description: "تخطيط فردي يساعدك تختار الكورسات الصح كل فصل دراسي.",
        tags: ["جلسات فردية", "كل فصل دراسي"],
      },
      {
        icon: ShieldPlus,
        title: "التدريب الإكلينيكي",
        description: "مساعدة في الأوراق وترتيب فترات التدريب في المستشفيات والعيادات.",
        tags: ["مستشفيات", "عيادات"],
      },
      {
        icon: Users,
        title: "مجموعات الدراسة والتقوية",
        description: "جلسات بقيادة طلاب ودعم من مدرسين في المواد الصعبة زي علم الأدوية.",
        tags: ["بقيادة الطلاب", "مجاني"],
      },
      {
        icon: GraduationCap,
        title: "الإرشاد المهني",
        description: "مراجعة السيرة الذاتية، تدريب على المقابلات، وتعريفك بمستشفيات للتوظيف.",
        tags: ["مساعدة السيرة الذاتية", "مقابلات"],
      },
      {
        icon: Award,
        title: "الاستعداد لامتحان الترخيص",
        description: "اختبارات تجريبية منظمة لـ NCLEX-RN مع متابعة نقاط الضعف.",
        tags: ["NCLEX-RN", "اختبارات تجريبية"],
      },
      {
        icon: Calculator,
        title: "حاسبة المعدل التراكمي (GPA)",
        description: "احسب معدلك الفصلي أو التراكمي أونلاين بسرعة.",
        tags: ["أداة مجانية", "موقع خارجي"],
        link: "https://adham-hero.github.io/Calc_Your_GPA/",
        linkLabel: "افتح الحاسبة",
      },
    ],
  },
};
