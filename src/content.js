import {
  Syringe,
  Stethoscope,
  HeartPulse,
  GraduationCap,
  ClipboardList,
  Brain,
  Award,
  Activity,
  ShieldPlus,
  Microscope,
  Pill,
  Baby,
  Users,
} from "lucide-react";

export const content = {
  en: {
    dir: "ltr",
    font: "'Inter', sans-serif",
    brand: "Super Nurse",
    navLinks: [
      { id: "home", label: "Home" },
      { id: "about", label: "About Nursing" },
      { id: "studies", label: "Studies" },
      { id: "services", label: "Services" },
      { id: "history", label: "History" },
    ],
    email: "admissions@supernurse.edu",
    heroTag: "Super Nurse · nursing education guide",
    heroTitleLines: ["Future", "Nurse"],
    heroSubtitle:
      "Hi! This is a guide for anyone considering nursing — what the work involves, the courses that get you licensed, and the support available while you study.",
    cta: "Explore Courses",
    enrollment: "Open enrollment for next semester",
    stats: [
      ["6+", "Course Tracks"],
      ["6", "Student Services"],
      ["170+", "Years of Nursing History"],
    ],
    quote:
      "We believe every nurse's path starts with the right guidance and real hands-on practice, so every student is ready to care for real patients from day one.",
    aboutLabel: "This is nursing.",
    aboutTitle: "The path from student to registered nurse.",
    aboutP1:
      "Nursing is hands-on patient care paired with clinical judgment — monitoring vital signs, administering treatment, and being the person a patient sees most during recovery.",
    aboutP2:
      "Becoming a nurse follows four broad stages: complete an accredited program, finish supervised clinical hours, pass the licensing exam, then specialize and keep learning.",
    aboutTags: [
      "Accredited program",
      "Clinical hours",
      "Licensing exam (NCLEX-RN)",
      "Specialization",
    ],
    studiesTitle: "Study & Courses",
    stackGroups: [
      {
        label: "foundations",
        items: [
          { icon: HeartPulse, name: "Vital Signs" },
          { icon: ClipboardList, name: "Patient Care" },
          { icon: ShieldPlus, name: "Infection Control" },
        ],
      },
      {
        label: "sciences",
        items: [
          { icon: Brain, name: "Anatomy" },
          { icon: Microscope, name: "Microbiology" },
          { icon: Pill, name: "Pharmacology" },
        ],
      },
      {
        label: "specialties",
        items: [
          { icon: Baby, name: "Pediatrics" },
          { icon: Activity, name: "Critical Care" },
          { icon: Stethoscope, name: "Community Health" },
        ],
      },
      {
        label: "practice",
        items: [
          { icon: Syringe, name: "Clinical Skills" },
          { icon: Users, name: "Patient Communication" },
          { icon: Award, name: "Exam Readiness" },
        ],
      },
    ],
    historyTitle: "Nursing History",
    historySubtitle: "A short timeline of how the profession took shape.",
    history: [
      { period: "1854", title: "Nightingale in Crimea", note: "Sanitation reform" },
      { period: "1860", title: "First nursing school", note: "London" },
      { period: "1863", title: "Founding of the Red Cross", note: "Wartime care" },
      { period: "1899", title: "International Council of Nurses", note: "Global standards" },
      { period: "1965", title: "Nurse practitioner role emerges", note: "Primary care" },
      { period: "Today", title: "A specialized, modern field", note: "170+ years of practice" },
    ],
    servicesEyebrow: "SELECTED SERVICES",
    servicesTitle: "Services for students",
    services: [
      { icon: ClipboardList, title: "Academic Advising", tags: ["1:1 sessions", "Every semester"] },
      { icon: ShieldPlus, title: "Clinical Placement", tags: ["Hospitals", "Clinics"] },
      { icon: Users, title: "Study Groups & Tutoring", tags: ["Peer-led", "Free"] },
      { icon: GraduationCap, title: "Career Counseling", tags: ["Resume help", "Interviews"] },
      { icon: Award, title: "Licensing Exam Prep", tags: ["NCLEX-RN", "Practice tests"] },
      { icon: HeartPulse, title: "Student Wellbeing", tags: ["Confidential", "On-demand"] },
    ],
    footerQuestion: "Ready to start your nursing journey?",
    footerCredit: "Developed by Adham",
    langSwitchLabel: "العربية",
  },

  ar: {
    dir: "rtl",
    font: "'Tajawal', sans-serif",
    brand: "سوبر نرس",
    navLinks: [
      { id: "home", label: "الرئيسية" },
      { id: "about", label: "عن التمريض" },
      { id: "studies", label: "الدراسة" },
      { id: "services", label: "الخدمات" },
      { id: "history", label: "التاريخ" },
    ],
    email: "admissions@supernurse.edu",
    heroTag: "سوبر نرس · دليل تعليم التمريض",
    heroTitleLines: ["ممرض", "المستقبل"],
    heroSubtitle:
      "أهلاً! ده دليل لأي حد بيفكر يدخل مجال التمريض — طبيعة الشغل، الكورسات اللي بتأهلك للترخيص، والدعم المتاح ليك وانت بتذاكر.",
    cta: "استكشف الكورسات",
    enrollment: "التسجيل متاح للفصل الدراسي الجاي",
    stats: [
      ["+٦", "مسارات دراسية"],
      ["٦", "خدمات للطلاب"],
      ["+١٧٠", "سنة من تاريخ التمريض"],
    ],
    quote:
      "بنؤمن إن رحلة كل ممرض بتبدأ بالتوجيه الصح والتدريب العملي الحقيقي، عشان كل طالب يبقى جاهز يعتني بمرضى حقيقيين من أول يوم.",
    aboutLabel: "ده التمريض.",
    aboutTitle: "الطريق من طالب لممرض مرخّص.",
    aboutP1:
      "التمريض هو رعاية مباشرة للمريض مقرونة بحكم إكلينيكي — متابعة العلامات الحيوية، إعطاء العلاج، وكونك الشخص اللي المريض بيشوفه أكتر حاجة وقت التعافي.",
    aboutP2:
      "الطريق لتصبح ممرض بيمر بأربع مراحل: إنهاء برنامج معتمد، إتمام ساعات تدريب إكلينيكي، اجتياز امتحان الترخيص، وبعدين التخصص والاستمرار في التعلم.",
    aboutTags: ["برنامج معتمد", "ساعات إكلينيكية", "امتحان الترخيص (NCLEX-RN)", "التخصص"],
    studiesTitle: "الدراسة والكورسات",
    stackGroups: [
      {
        label: "أساسيات",
        items: [
          { icon: HeartPulse, name: "العلامات الحيوية" },
          { icon: ClipboardList, name: "رعاية المريض" },
          { icon: ShieldPlus, name: "مكافحة العدوى" },
        ],
      },
      {
        label: "علوم",
        items: [
          { icon: Brain, name: "التشريح" },
          { icon: Microscope, name: "الأحياء الدقيقة" },
          { icon: Pill, name: "علم الأدوية" },
        ],
      },
      {
        label: "تخصصات",
        items: [
          { icon: Baby, name: "طب الأطفال" },
          { icon: Activity, name: "الرعاية الحرجة" },
          { icon: Stethoscope, name: "صحة المجتمع" },
        ],
      },
      {
        label: "تطبيق عملي",
        items: [
          { icon: Syringe, name: "مهارات إكلينيكية" },
          { icon: Users, name: "التواصل مع المرضى" },
          { icon: Award, name: "الاستعداد للامتحان" },
        ],
      },
    ],
    historyTitle: "تاريخ التمريض",
    historySubtitle: "خط زمني مختصر لتطور المهنة.",
    history: [
      { period: "١٨٥٤", title: "نايتينجيل في حرب القرم", note: "إصلاح الصرف الصحي" },
      { period: "١٨٦٠", title: "أول مدرسة تمريض", note: "لندن" },
      { period: "١٨٦٣", title: "تأسيس الصليب الأحمر", note: "رعاية وقت الحرب" },
      { period: "١٨٩٩", title: "المجلس الدولي للممرضين", note: "معايير عالمية" },
      { period: "١٩٦٥", title: "ظهور دور الممرض الإكلينيكي", note: "الرعاية الأولية" },
      { period: "اليوم", title: "مجال متخصص وحديث", note: "+١٧٠ سنة من الممارسة" },
    ],
    servicesEyebrow: "خدمات مختارة",
    servicesTitle: "خدمات للطلاب",
    services: [
      { icon: ClipboardList, title: "الإرشاد الأكاديمي", tags: ["جلسات فردية", "كل فصل دراسي"] },
      { icon: ShieldPlus, title: "التدريب الإكلينيكي", tags: ["مستشفيات", "عيادات"] },
      { icon: Users, title: "مجموعات الدراسة والتقوية", tags: ["بقيادة الطلاب", "مجاني"] },
      { icon: GraduationCap, title: "الإرشاد المهني", tags: ["مساعدة السيرة الذاتية", "مقابلات"] },
      { icon: Award, title: "الاستعداد لامتحان الترخيص", tags: ["NCLEX-RN", "اختبارات تجريبية"] },
      { icon: HeartPulse, title: "دعم الصحة النفسية للطلاب", tags: ["سري", "عند الطلب"] },
    ],
    footerQuestion: "جاهز تبدأ رحلتك في التمريض؟",
    footerCredit: "تطوير أدهم",
    langSwitchLabel: "English",
  },
};
