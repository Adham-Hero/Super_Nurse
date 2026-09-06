import {
  HeartPulse,
  ClipboardList,
  ShieldPlus,
  Brain,
  Microscope,
  Pill,
  Baby,
  Activity,
  Stethoscope,
  Syringe,
  Users,
  Award,
} from "lucide-react";

export const studies = {
  en: {
    studiesTitle: "Study & Courses",
    studiesHint: "Tap any course to see how to use it and where to study it further.",
    stackGroups: [
      {
        label: "foundations",
        items: [
          {
            icon: HeartPulse,
            name: "Vital Signs",
            description:
              "Learn to measure and interpret temperature, pulse, respiration, and blood pressure — the first thing you check on every patient, and often the first sign something is wrong.",
            resources: [
              { label: "Khan Academy — Health & Medicine", url: "https://www.khanacademy.org/science/health-and-medicine" },
              { label: "MedlinePlus", url: "https://medlineplus.gov" },
            ],
          },
          {
            icon: ClipboardList,
            name: "Patient Care",
            description:
              "Covers daily hands-on care: hygiene, mobility, feeding, and comfort. This is the practical core of nursing you'll use in every single shift.",
            resources: [
              { label: "Coursera — Nursing Courses", url: "https://www.coursera.org" },
              { label: "Osmosis", url: "https://www.osmosis.org" },
            ],
          },
          {
            icon: ShieldPlus,
            name: "Infection Control",
            description:
              "Hand hygiene, sterilization, and protective equipment — the habits that keep both you and your patients safe from preventable infections.",
            resources: [
              { label: "CDC — Infection Control", url: "https://www.cdc.gov" },
              { label: "World Health Organization", url: "https://www.who.int" },
            ],
          },
        ],
      },
      {
        label: "sciences",
        items: [
          {
            icon: Brain,
            name: "Anatomy",
            description:
              "Understand how the body's systems are built so you can recognize what 'normal' looks like — and notice quickly when something isn't.",
            resources: [
              { label: "Khan Academy — Anatomy", url: "https://www.khanacademy.org/science/health-and-medicine" },
              { label: "NCBI Bookshelf", url: "https://www.ncbi.nlm.nih.gov/books/" },
            ],
          },
          {
            icon: Microscope,
            name: "Microbiology",
            description:
              "Study the bacteria, viruses, and organisms behind common illnesses — the basis for understanding infection, treatment, and prevention.",
            resources: [
              { label: "CDC — Diseases & Conditions", url: "https://www.cdc.gov" },
              { label: "Osmosis", url: "https://www.osmosis.org" },
            ],
          },
          {
            icon: Pill,
            name: "Pharmacology",
            description:
              "Drug classifications, dosage math, and administration routes. Mastering this keeps every medication you give safe and effective.",
            resources: [
              { label: "MedlinePlus — Drug Information", url: "https://medlineplus.gov" },
              { label: "Coursera — Pharmacology", url: "https://www.coursera.org" },
            ],
          },
        ],
      },
      {
        label: "specialties",
        items: [
          {
            icon: Baby,
            name: "Pediatrics",
            description:
              "Caring for infants, children, and teens brings different vital ranges, dosing, and communication — this track prepares you for all three.",
            resources: [
              { label: "Johns Hopkins Nursing", url: "https://nursing.jhu.edu" },
              { label: "MedlinePlus — Child Health", url: "https://medlineplus.gov" },
            ],
          },
          {
            icon: Activity,
            name: "Critical Care",
            description:
              "Fast assessment and life-support skills for high-acuity patients — the track for anyone aiming for the ICU or emergency department.",
            resources: [
              { label: "American Nurses Association", url: "https://www.nursingworld.org" },
              { label: "Osmosis", url: "https://www.osmosis.org" },
            ],
          },
          {
            icon: Stethoscope,
            name: "Community Health",
            description:
              "Preventive care and outreach outside the hospital — vaccination drives, screenings, and education that stop illness before it starts.",
            resources: [
              { label: "World Health Organization", url: "https://www.who.int" },
              { label: "CDC — Community Health", url: "https://www.cdc.gov" },
            ],
          },
        ],
      },
      {
        label: "practice",
        items: [
          {
            icon: Syringe,
            name: "Clinical Skills",
            description:
              "Hands-on procedures — injections, IV lines, wound care — practiced in a lab before you do them on a real patient.",
            resources: [
              { label: "RegisteredNursing.org — Skills", url: "https://www.registerednursing.org" },
              { label: "Osmosis", url: "https://www.osmosis.org" },
            ],
          },
          {
            icon: Users,
            name: "Patient Communication",
            description:
              "How to explain a diagnosis calmly, deliver hard news with empathy, and get accurate information from anxious or scared patients.",
            resources: [
              { label: "American Nurses Association", url: "https://www.nursingworld.org" },
              { label: "Coursera — Communication Skills", url: "https://www.coursera.org" },
            ],
          },
          {
            icon: Award,
            name: "Exam Readiness",
            description:
              "Structured practice for the licensing exam — timed question sets, weak-area tracking, and test-taking strategy.",
            resources: [
              { label: "NCSBN — NCLEX Overview", url: "https://www.nclex.com" },
              { label: "RegisteredNursing.org", url: "https://www.registerednursing.org" },
            ],
          },
        ],
      },
    ],
  },

  ar: {
    studiesTitle: "الدراسة والكورسات",
    studiesHint: "دوس على أي كورس عشان تشوف إزاي تستفيد منه وفين تذاكره أكتر.",
    stackGroups: [
      {
        label: "أساسيات",
        items: [
          {
            icon: HeartPulse,
            name: "العلامات الحيوية",
            description:
              "تتعلم قياس وتفسير الحرارة والنبض والتنفس وضغط الدم — أول حاجة بتفحصها لأي مريض، وغالبًا أول إشارة إن فيه مشكلة.",
            resources: [
              { label: "Khan Academy — الصحة والطب", url: "https://www.khanacademy.org/science/health-and-medicine" },
              { label: "MedlinePlus", url: "https://medlineplus.gov" },
            ],
          },
          {
            icon: ClipboardList,
            name: "رعاية المريض",
            description:
              "بيغطي الرعاية اليومية المباشرة: النظافة، الحركة، التغذية، والراحة. ده الأساس العملي للتمريض اللي هتستخدمه في كل شيفت.",
            resources: [
              { label: "Coursera — كورسات تمريض", url: "https://www.coursera.org" },
              { label: "Osmosis", url: "https://www.osmosis.org" },
            ],
          },
          {
            icon: ShieldPlus,
            name: "مكافحة العدوى",
            description:
              "نظافة اليدين، التعقيم، ومعدات الحماية — العادات اللي بتحافظ على سلامتك وسلامة المرضى من العدوى اللي ممكن تتجنبها.",
            resources: [
              { label: "CDC — مكافحة العدوى", url: "https://www.cdc.gov" },
              { label: "منظمة الصحة العالمية", url: "https://www.who.int" },
            ],
          },
        ],
      },
      {
        label: "علوم",
        items: [
          {
            icon: Brain,
            name: "التشريح",
            description:
              "تفهم إزاي أجهزة الجسم مبنية عشان تعرف شكل الحالة الطبيعية — وتلاحظ بسرعة لما حاجة تبقى مش طبيعية.",
            resources: [
              { label: "Khan Academy — التشريح", url: "https://www.khanacademy.org/science/health-and-medicine" },
              { label: "NCBI Bookshelf", url: "https://www.ncbi.nlm.nih.gov/books/" },
            ],
          },
          {
            icon: Microscope,
            name: "الأحياء الدقيقة",
            description:
              "دراسة البكتيريا والفيروسات والكائنات اللي وراء الأمراض الشائعة — الأساس لفهم العدوى والعلاج والوقاية.",
            resources: [
              { label: "CDC — الأمراض والحالات", url: "https://www.cdc.gov" },
              { label: "Osmosis", url: "https://www.osmosis.org" },
            ],
          },
          {
            icon: Pill,
            name: "علم الأدوية",
            description:
              "تصنيفات الأدوية، حساب الجرعات، وطرق الإعطاء. إتقان ده بيخلي أي دواء بتديه آمن وفعّال.",
            resources: [
              { label: "MedlinePlus — معلومات الأدوية", url: "https://medlineplus.gov" },
              { label: "Coursera — علم الأدوية", url: "https://www.coursera.org" },
            ],
          },
        ],
      },
      {
        label: "تخصصات",
        items: [
          {
            icon: Baby,
            name: "طب الأطفال",
            description:
              "رعاية الرضع والأطفال والمراهقين ليها معدلات حيوية وجرعات وطريقة تواصل مختلفة — المسار ده بيجهزك للتلاتة.",
            resources: [
              { label: "Johns Hopkins Nursing", url: "https://nursing.jhu.edu" },
              { label: "MedlinePlus — صحة الطفل", url: "https://medlineplus.gov" },
            ],
          },
          {
            icon: Activity,
            name: "الرعاية الحرجة",
            description:
              "تقييم سريع ومهارات دعم الحياة للحالات الحرجة — المسار المناسب لأي حد نفسه يشتغل في العناية المركزة أو الطوارئ.",
            resources: [
              { label: "American Nurses Association", url: "https://www.nursingworld.org" },
              { label: "Osmosis", url: "https://www.osmosis.org" },
            ],
          },
          {
            icon: Stethoscope,
            name: "صحة المجتمع",
            description:
              "رعاية وقائية وتوعية خارج المستشفى — حملات تطعيم، فحوصات، وتثقيف بيوقف المرض قبل ما يبدأ.",
            resources: [
              { label: "منظمة الصحة العالمية", url: "https://www.who.int" },
              { label: "CDC — صحة المجتمع", url: "https://www.cdc.gov" },
            ],
          },
        ],
      },
      {
        label: "تطبيق عملي",
        items: [
          {
            icon: Syringe,
            name: "مهارات إكلينيكية",
            description:
              "إجراءات عملية — حقن، تركيب محاليل، عناية بالجروح — بتتمرن عليها في معمل قبل ما تعملها على مريض حقيقي.",
            resources: [
              { label: "RegisteredNursing.org", url: "https://www.registerednursing.org" },
              { label: "Osmosis", url: "https://www.osmosis.org" },
            ],
          },
          {
            icon: Users,
            name: "التواصل مع المرضى",
            description:
              "إزاي تشرح تشخيص بهدوء، تقول خبر صعب بتعاطف، وتاخد معلومات دقيقة من مريض قلقان أو خايف.",
            resources: [
              { label: "American Nurses Association", url: "https://www.nursingworld.org" },
              { label: "Coursera — مهارات التواصل", url: "https://www.coursera.org" },
            ],
          },
          {
            icon: Award,
            name: "الاستعداد للامتحان",
            description:
              "تدريب منظم على امتحان الترخيص — أسئلة بوقت محدد، متابعة نقاط الضعف، واستراتيجيات حل الاختبار.",
            resources: [
              { label: "NCSBN — نظرة عامة على NCLEX", url: "https://www.nclex.com" },
              { label: "RegisteredNursing.org", url: "https://www.registerednursing.org" },
            ],
          },
        ],
      },
    ],
  },
};
