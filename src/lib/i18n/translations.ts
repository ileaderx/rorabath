export type Locale = "en" | "ar";

export interface Dictionary {
  brand: string;
  nav: {
    home: string;
    about: string;
    services: string;
    portfolio: string;
    contact: string;
    privacy: string;
    terms: string;
    menuLabel: string;
    langLabel: string;
  };
  hero: {
    titlePrefix: string;
    subtitle: string;
    btn: string;
    imageAlt: string;
  };
  about: {
    title: string;
    text: string;
    points: string[];
    imageAlt: string;
  };
  services: {
    title: string;
    intro: string;
    items: { icon: string; title: string; desc: string }[];
  };
  portfolio: {
    title: string;
    intro: string;
    projects: { image: string; title: string; desc: string }[];
  };
  contact: {
    title: string;
    intro: string;
    companyName: string;
    companyType: string;
    addressLabel: string;
    address: string;
    phoneLabel: string;
    emailLabel: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      sending: string;
      success: string;
      error: string;
      required: string;
    };
  };
  footer: {
    rights: string;
    social: { facebook: string; linkedin: string; twitter: string };
  };
  privacy: {
    title: string;
    effectiveDate: string;
    effectiveDateValue: string;
    intro: string;
    sections: { title: string; text?: string; list?: string[] }[];
    contactTitle: string;
  };
  terms: {
    title: string;
    effectiveDate: string;
    effectiveDateValue: string;
    intro: string;
    sections: { title: string; text?: string; list?: string[] }[];
    contactTitle: string;
  };
}

export const PHONE_DISPLAY = "+963 996 679 261";
export const PHONE_TEL = "+963996679261";
export const EMAIL = "sales@rorabath.com";

export const translations: Record<Locale, Dictionary> = {
  en: {
    brand: "Rora Bath",
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      privacy: "Privacy",
      terms: "Terms",
      menuLabel: "Toggle navigation menu",
      langLabel: "Select Language",
    },
    hero: {
      titlePrefix: "Welcome to",
      subtitle:
        "Your trusted partner in sanitary ware and general trading — delivering quality bathroom fittings, plumbing supplies, and expert guidance to homes, contractors, and businesses across Syria.",
      btn: "Discover Who We Are",
      imageAlt: "Sanitary Ware Products",
    },
    about: {
      title: "About Us",
      text: "Rora Bath is a Syrian company based in Saida, Daraa, specializing in sanitary ware and general trading. Founded with a commitment to quality and reliability, we supply homes, businesses, and contractors with a comprehensive range of bathroom fittings, plumbing materials, and sanitary products sourced from trusted manufacturers. Our team brings years of hands-on experience in the trade, allowing us to guide customers — from individual homeowners to large-scale commercial clients — toward the right products for their needs and budgets. At Rora Bath, we believe that every space deserves quality materials and attentive service.",
      points: [
        "✔ Specialized in sanitary ware & general trading since our founding",
        "✔ Based in Saida, Daraa, Syria — serving local and regional markets",
        "✔ Wide catalogue: bathroom fittings, plumbing supplies & more",
        "✔ Trusted by contractors, businesses, and homeowners alike",
        "✔ Dedicated after-sales support and expert product guidance",
      ],
      imageAlt: "About Rora Bath",
    },
    services: {
      title: "Our Services",
      intro:
        "At Rora Bath, we do more than supply products — we provide a complete experience built around your project needs, from first inquiry to final installation.",
      items: [
        {
          icon: "🛁",
          title: "Sanitary Ware Supply",
          desc: "We stock a wide range of bathroom suites, toilets, basins, bathtubs, and shower systems from reputable manufacturers — suitable for residential and commercial projects of all scales.",
        },
        {
          icon: "🔧",
          title: "Plumbing Materials & Fittings",
          desc: "From pipes and valves to mixers and drainage systems, we supply complete plumbing solutions to contractors and builders, ensuring quality and compatibility across every project.",
        },
        {
          icon: "🏪",
          title: "General Trading",
          desc: "Beyond sanitary ware, we handle general trading in building materials and related goods — offering flexible sourcing options to meet the evolving demands of our clients.",
        },
        {
          icon: "💬",
          title: "Product Consultation",
          desc: "Not sure what you need? Our experienced team is ready to advise you on the best products for your space, budget, and specifications — saving you time and costly mistakes.",
        },
        {
          icon: "🚚",
          title: "Reliable Delivery",
          desc: "We coordinate timely delivery to your site or address, ensuring your materials arrive safely and on schedule so your project stays on track.",
        },
        {
          icon: "🛡️",
          title: "After-Sales Support",
          desc: "Our relationship doesn't end at the sale. We stand behind every product we supply and are available to help with any post-purchase questions, warranty claims, or replacement needs.",
        },
      ],
    },
    portfolio: {
      title: "Our Portfolio",
      intro:
        "From private residences to commercial buildings, here are some of the projects we have proudly supplied and supported — each one a reflection of our commitment to quality and customer satisfaction.",
      projects: [
        {
          image: "/images/project1.jpg",
          title: "Luxury Residential Bathroom",
          desc: "Fully equipped a modern private bathroom with premium wall-hung sanitaryware, a rainfall shower system, and polished chrome fittings — delivering a spa-like atmosphere within a family home.",
        },
        {
          image: "/images/project2.jpg",
          title: "Commercial Office Complex",
          desc: "Supplied and coordinated the complete sanitary installation for a multi-floor commercial building in Daraa — including heavy-duty fixtures, concealed cisterns, and durable plumbing systems designed for high daily usage.",
        },
        {
          image: "/images/project3.jpg",
          title: "Hotel & Hospitality Project",
          desc: "Delivered a full range of hospitality-grade sanitary products for a regional hotel — from elegant guest bathroom suites to functional staff facilities — all sourced to match the client's design brief and budget.",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      intro:
        "Whether you have a product inquiry, need a quote for your project, or simply want to learn more about what we offer — our team is here to help. Reach out and we will respond promptly.",
      companyName: "Rora Bath",
      companyType: "Sanitary Ware & General Trading",
      addressLabel: "Address:",
      address: "Saida, Daraa, Syria",
      phoneLabel: "Phone:",
      emailLabel: "Email:",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
        sending: "Sending…",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again or email us directly.",
        required: "Please fill all fields.",
      },
    },
    footer: {
      rights: "All rights reserved.",
      social: { facebook: "Facebook", linkedin: "LinkedIn", twitter: "Twitter" },
    },
    privacy: {
      title: "Privacy Policy",
      effectiveDate: "Effective date:",
      effectiveDateValue: "September 6, 2025",
      intro:
        "At Rora Bath, we respect your privacy and are committed to protecting your personal information. This policy explains what information we collect, why we collect it, and how we use it.",
      sections: [
        {
          title: "1. Who we are",
          text: "Rora Bath is a sanitary ware retail company providing bathroom and plumbing products and services.",
        },
        {
          title: "2. Information we collect",
          list: [
            "Personal info: name, email, phone, billing/shipping address, order details.",
            "Payment info: processed securely via third-party providers.",
            "Technical data: IP address, browser, device, pages visited.",
            "Cookies: for preferences, site functionality, analytics.",
          ],
        },
        {
          title: "3. How we use your information",
          list: [
            "Process orders, returns, and shipping.",
            "Communicate regarding orders or support inquiries.",
            "Send marketing if opted-in.",
            "Improve website and services.",
            "Prevent fraud and comply with laws.",
          ],
        },
        {
          title: "4. Sharing your information",
          text: "We do not sell or rent your personal information. We may share it with:",
          list: [
            "Trusted service providers (payment, shipping, analytics).",
            "Legal authorities if required by law.",
          ],
        },
        {
          title: "5. Cookies & tracking",
          text: "Used for site functionality, remembering preferences, and analytics. You can manage cookies via your browser settings.",
        },
        {
          title: "6. Data security & retention",
          text: "We take reasonable measures to protect data, and retain information only as long as necessary.",
        },
        {
          title: "7. Your rights",
          list: [
            "Access, correct, or delete your personal data.",
            "Opt-out of marketing communications.",
            "Data portability where applicable.",
          ],
        },
        {
          title: "8. Third-party links",
          text: "We are not responsible for third-party website policies.",
        },
        {
          title: "9. Children",
          text: "Not intended for children under 16. If data is collected from a child, we will delete it upon request.",
        },
      ],
      contactTitle: "10. Contact Us",
    },
    terms: {
      title: "Terms & Conditions",
      effectiveDate: "Effective Date:",
      effectiveDateValue: "September 6, 2025",
      intro:
        "Welcome to Rora Bath. By accessing or using our website and services, you agree to comply with the following terms and conditions. Please read them carefully.",
      sections: [
        {
          title: "1. Acceptance of Terms",
          text: "By using Rora Bath's website, purchasing products, or interacting with our services, you agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree, please do not use our services.",
        },
        {
          title: "2. Use of Website",
          list: [
            "You must be at least 18 years old to place an order.",
            "You agree not to use the website for illegal purposes or to violate applicable laws.",
            "You agree not to disrupt the website, servers, or networks connected to our services.",
          ],
        },
        {
          title: "3. Orders and Payment",
          list: [
            "All orders are subject to availability and acceptance by Rora Bath.",
            "Prices may change without prior notice.",
            "Payment is processed securely via third-party providers. Rora Bath does not store full credit/debit card details.",
            "By placing an order, you represent that all payment information provided is accurate and authorized.",
          ],
        },
        {
          title: "4. Shipping & Delivery",
          list: [
            "Delivery times are estimates and may vary due to external factors beyond our control.",
            "Rora Bath is not responsible for delays caused by third-party shipping carriers.",
            "Customers are responsible for providing accurate shipping information.",
          ],
        },
        {
          title: "5. Returns & Refunds",
          list: [
            "Returns are accepted in accordance with our Return Policy, available on our website.",
            "Products must be returned in original condition, unused and with original packaging.",
            "Refunds will be processed via the original payment method after inspection and approval of returned products.",
          ],
        },
        {
          title: "6. Product Information",
          list: [
            "We strive to provide accurate product descriptions, images, and specifications.",
            "However, slight variations in color, size, or design may occur due to manufacturing or display differences.",
          ],
        },
        {
          title: "7. Intellectual Property",
          text: "All content on the Rora Bath website, including text, graphics, logos, images, and software, is the property of Rora Bath or its content providers and protected by copyright laws. You may not reproduce, distribute, or use any content without explicit written permission.",
        },
        {
          title: "8. Limitation of Liability",
          text: "Rora Bath is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our website or products. Our liability for any claim related to products or services is limited to the purchase price of the product or service in question.",
        },
        {
          title: "9. Governing Law",
          text: "These Terms & Conditions are governed by the laws of the Syrian Arab Republic. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of Syria.",
        },
        {
          title: "10. Changes to Terms",
          text: "Rora Bath reserves the right to update or modify these Terms & Conditions at any time. Changes will be posted on this page with an updated effective date. Continued use of our services constitutes acceptance of the updated terms.",
        },
      ],
      contactTitle: "11. Contact Us",
    },
  },

  ar: {
    brand: "رورا باث",
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      portfolio: "أعمالنا",
      contact: "تواصل معنا",
      privacy: "الخصوصية",
      terms: "الشروط",
      menuLabel: "فتح قائمة التنقل",
      langLabel: "اختر اللغة",
    },
    hero: {
      titlePrefix: "مرحبًا بكم في",
      subtitle:
        "شريكك الموثوق في تجارة الأدوات الصحية والتجارة العامة — نوفر تجهيزات الحمامات ومواد السباكة والاستشارة المتخصصة للمنازل والمقاولين والشركات في أنحاء سوريا.",
      btn: "تعرّف علينا",
      imageAlt: "منتجات الأدوات الصحية",
    },
    about: {
      title: "من نحن",
      text: "رورا باث شركة سورية مقرها في صيدا، درعا، متخصصة في تجارة الأدوات الصحية والتجارة العامة. تأسست الشركة على قيم الجودة والموثوقية، وتعمل على توفير مجموعة شاملة من التجهيزات الصحية ومواد السباكة والأدوات الصحية المستوردة من مصنّعين معتمدين. يمتلك فريقنا خبرة واسعة في هذا المجال، مما يمكّننا من تقديم الاستشارة الصحيحة لعملائنا — سواء كانوا أصحاب منازل أو مقاولين أو شركات — لاختيار المنتج الأنسب لاحتياجاتهم وميزانيتهم. في رورا باث، نؤمن بأن كل مشروع يستحق مواد عالية الجودة وخدمة متميزة.",
      points: [
        "✔ متخصصون في الأدوات الصحية والتجارة العامة منذ تأسيسنا",
        "✔ مقرنا في صيدا، درعا، سوريا — نخدم السوق المحلية والإقليمية",
        "✔ كتالوج واسع: تجهيزات الحمامات، مواد السباكة والمزيد",
        "✔ موثوق بنا من قبل المقاولين والشركات وأصحاب المنازل",
        "✔ دعم ما بعد البيع وتوجيه متخصص في المنتجات",
      ],
      imageAlt: "عن رورا باث",
    },
    services: {
      title: "خدماتنا",
      intro:
        "في رورا باث، لا نكتفي بتوريد المنتجات — بل نقدم تجربة متكاملة مبنية على احتياجات مشروعك، من أول استفسار حتى التركيب النهائي.",
      items: [
        {
          icon: "🛁",
          title: "توريد الأدوات الصحية",
          desc: "نوفر مجموعة واسعة من طقم الحمام، المراحيض، الأحواض، أحواض الاستحمام، وأنظمة الدش من مصنّعين موثوقين — تناسب المشاريع السكنية والتجارية بمختلف أحجامها.",
        },
        {
          icon: "🔧",
          title: "مواد السباكة والتجهيزات",
          desc: "من الأنابيب والصمامات إلى الخلاطات وأنظمة الصرف، نوفر حلول سباكة متكاملة للمقاولين والبنائين بجودة عالية وتوافق مضمون.",
        },
        {
          icon: "🏪",
          title: "التجارة العامة",
          desc: "إلى جانب الأدوات الصحية، نتعامل في مواد البناء والبضائع ذات الصلة — مع خيارات توريد مرنة تلبي متطلبات عملائنا المتنوعة.",
        },
        {
          icon: "💬",
          title: "الاستشارة المتخصصة",
          desc: "لست متأكداً مما تحتاجه؟ فريقنا المتخصص جاهز لإرشادك نحو أفضل المنتجات لمساحتك وميزانيتك ومتطلباتك — لتوفير وقتك وتجنب الأخطاء المكلفة.",
        },
        {
          icon: "🚚",
          title: "التوصيل الموثوق",
          desc: "ننسق توصيل مواد مشروعك إلى موقعك أو عنوانك في الوقت المحدد وبأمان تام، حتى يسير مشروعك وفق الجدول الزمني.",
        },
        {
          icon: "🛡️",
          title: "دعم ما بعد البيع",
          desc: "علاقتنا لا تنتهي عند البيع. نقف خلف كل منتج نوفره ونحن متاحون للإجابة على أي استفسار، معالجة طلبات الضمان، أو توفير البدائل.",
        },
      ],
    },
    portfolio: {
      title: "أعمالنا",
      intro: "من المساكن الخاصة إلى المباني التجارية، إليك بعض المشاريع التي وفّرنا لها المنتجات والدعم بفخر — كل مشروع يعكس التزامنا بالجودة ورضا العملاء.",
      projects: [
        {
          image: "/images/project1.jpg",
          title: "حمام سكني فاخر",
          desc: "جهّزنا حماماً خاصاً حديثاً بأدوات صحية معلقة فاخرة، ونظام دش مطري، وتجهيزات كروم مصقولة — لتوفير أجواء السبا داخل منزل عائلي.",
        },
        {
          image: "/images/project2.jpg",
          title: "مجمع مكاتب تجاري",
          desc: "وفّرنا ونسّقنا التركيبات الصحية الكاملة لمبنى تجاري متعدد الطوابق في درعا — تشمل تجهيزات ثقيلة الاستخدام وخزانات مخفية وأنظمة سباكة مصممة لكثافة استخدام يومية عالية.",
        },
        {
          image: "/images/project3.jpg",
          title: "مشروع فندقي وضيافة",
          desc: "وفّرنا مجموعة متكاملة من المنتجات الصحية للضيافة لفندق إقليمي — من أطقم حمام الغرف الفاخرة إلى المرافق العملية للموظفين — جميعها منتقاة لتتناسب مع التصميم والميزانية.",
        },
      ],
    },
    contact: {
      title: "تواصل معنا",
      intro: "سواء كان لديك استفسار عن منتج، تحتاج عرض سعر لمشروعك، أو تريد معرفة المزيد عمّا نقدمه — فريقنا هنا لمساعدتك. تواصل معنا وسنرد عليك في أقرب وقت.",
      companyName: "رورا باث",
      companyType: "الأدوات الصحية والتجارة العامة",
      addressLabel: "العنوان:",
      address: "صيدا، درعا، سوريا",
      phoneLabel: "الهاتف:",
      emailLabel: "البريد الإلكتروني:",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        send: "إرسال الرسالة",
        sending: "جارٍ الإرسال…",
        success: "تم إرسال الرسالة بنجاح!",
        error: "فشل إرسال الرسالة. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة.",
        required: "يرجى تعبئة جميع الحقول.",
      },
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      social: { facebook: "فيسبوك", linkedin: "لينكدإن", twitter: "تويتر" },
    },
    privacy: {
      title: "سياسة الخصوصية",
      effectiveDate: "تاريخ السريان:",
      effectiveDateValue: "6 سبتمبر 2025",
      intro:
        "تحترم شركة رورا باث خصوصيتك وتلتزم بحماية المعلومات الشخصية التي تقدمها. توضح هذه السياسة المعلومات التي نجمعها وسبب جمعها وكيفية استخدامها.",
      sections: [
        {
          title: "1. من نحن",
          text: "رورا باث هي شركة تجارة التجهيزات الصحية توفر منتجات الحمامات والسباكة وخدمات البيع بالتجزئة.",
        },
        {
          title: "2. المعلومات التي نجمعها",
          list: [
            "المعلومات الشخصية: الاسم، البريد الإلكتروني، الهاتف، العنوان، تفاصيل الطلب.",
            "معلومات الدفع: تتم معالجتها بشكل آمن بواسطة مزودي خدمات طرف ثالث.",
            "المعلومات التقنية: عنوان IP، المتصفح، الجهاز، الصفحات التي تمت زيارتها.",
            "الكوكيز: لتذكر التفضيلات، وظائف الموقع، والتحليلات.",
          ],
        },
        {
          title: "3. كيفية استخدام معلوماتك",
          list: [
            "معالجة الطلبات والإرجاع والشحن.",
            "التواصل بشأن الطلبات أو استفسارات الدعم.",
            "إرسال التسويق إذا تم الاشتراك.",
            "تحسين الموقع والخدمات.",
            "منع الاحتيال والامتثال للقوانين.",
          ],
        },
        {
          title: "4. مشاركة معلوماتك",
          text: "لا نبيع أو نؤجر معلوماتك الشخصية. قد نشاركها مع:",
          list: [
            "مزودو الخدمات الموثوق بهم (الدفع، الشحن، التحليلات).",
            "السلطات القانونية إذا كان مطلوبًا بموجب القانون.",
          ],
        },
        {
          title: "5. الكوكيز والتتبع",
          text: "تستخدم لوظائف الموقع، تذكر التفضيلات، والتحليلات. يمكنك إدارة الكوكيز عبر إعدادات المتصفح.",
        },
        {
          title: "6. أمان البيانات ومدة الاحتفاظ",
          text: "نتخذ تدابير معقولة لحماية البيانات ونحتفظ بالمعلومات فقط طالما كانت ضرورية.",
        },
        {
          title: "7. حقوقك",
          list: [
            "الوصول إلى بياناتك الشخصية وتصحيحها أو حذفها.",
            "إلغاء الاشتراك من الرسائل التسويقية.",
            "قابلية نقل البيانات عند توفرها.",
          ],
        },
        {
          title: "8. روابط الجهات الخارجية",
          text: "نحن غير مسؤولين عن سياسات مواقع الجهات الخارجية.",
        },
        {
          title: "9. الأطفال",
          text: "غير مخصص للأطفال دون 16 عامًا. إذا تم جمع بيانات من طفل، سنقوم بحذفها عند الطلب.",
        },
      ],
      contactTitle: "10. اتصل بنا",
    },
    terms: {
      title: "الشروط والأحكام",
      effectiveDate: "تاريخ السريان:",
      effectiveDateValue: "6 سبتمبر 2025",
      intro:
        "مرحبًا بكم في رورا باث. من خلال الوصول إلى موقعنا أو استخدام خدماتنا، فإنك توافق على الالتزام بالشروط والأحكام التالية. يرجى قراءتها بعناية.",
      sections: [
        {
          title: "1. قبول الشروط",
          text: "باستخدام موقع رورا باث، أو شراء المنتجات، أو التفاعل مع خدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام وسياسة الخصوصية الخاصة بنا. إذا لم توافق، يرجى عدم استخدام خدماتنا.",
        },
        {
          title: "2. استخدام الموقع",
          list: [
            "يجب أن يكون عمرك 18 سنة على الأقل لتقديم طلب.",
            "توافق على عدم استخدام الموقع لأغراض غير قانونية أو مخالفة للقوانين المعمول بها.",
            "توافق على عدم تعطيل الموقع أو الخوادم أو الشبكات المتصلة بخدماتنا.",
          ],
        },
        {
          title: "3. الطلبات والدفع",
          list: [
            "جميع الطلبات خاضعة للتوافر والموافقة من قبل رورا باث.",
            "قد تتغير الأسعار دون إشعار مسبق.",
            "يتم معالجة الدفع بأمان عبر مزودي خدمات طرف ثالث. رورا باث لا تخزن بيانات البطاقة كاملة.",
            "من خلال تقديم الطلب، فإنك تضمن أن جميع معلومات الدفع المقدمة دقيقة ومصرح بها.",
          ],
        },
        {
          title: "4. الشحن والتوصيل",
          list: [
            "أوقات التوصيل تقديرية وقد تختلف بسبب عوامل خارجية خارج سيطرتنا.",
            "رورا باث غير مسؤولة عن التأخيرات التي تسببها شركات الشحن الطرف الثالث.",
            "العملاء مسؤولون عن تقديم معلومات شحن دقيقة.",
          ],
        },
        {
          title: "5. الإرجاع واسترداد الأموال",
          list: [
            "يتم قبول الإرجاع وفقًا لسياسة الإرجاع المتوفرة على موقعنا.",
            "يجب إعادة المنتجات في حالتها الأصلية، غير مستخدمة ومع العبوة الأصلية.",
            "سيتم معالجة المبالغ المستردة عبر طريقة الدفع الأصلية بعد فحص واعتماد المنتجات المرجعة.",
          ],
        },
        {
          title: "6. معلومات المنتج",
          list: [
            "نسعى لتقديم وصف دقيق للمنتجات، والصور، والمواصفات.",
            "ومع ذلك، قد تحدث اختلافات طفيفة في اللون أو الحجم أو التصميم بسبب التصنيع أو العرض.",
          ],
        },
        {
          title: "7. الملكية الفكرية",
          text: "جميع المحتويات على موقع رورا باث، بما في ذلك النصوص، الرسومات، الشعارات، الصور، والبرامج، ملك لرورا باث أو لمزودي المحتوى وهي محمية بموجب قوانين حقوق النشر. لا يجوز نسخ أو توزيع أو استخدام أي محتوى بدون إذن كتابي صريح.",
        },
        {
          title: "8. تحديد المسؤولية",
          text: "رورا باث غير مسؤولة عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية ناتجة عن استخدام موقعنا أو منتجاتنا. مسؤوليتنا لأي مطالبة تتعلق بالمنتجات أو الخدمات تقتصر على سعر شراء المنتج أو الخدمة المعنية.",
        },
        {
          title: "9. القانون المعمول به",
          text: "تخضع هذه الشروط والأحكام لقوانين الجمهورية العربية السورية. أي نزاعات تنشأ تكون خاضعة للاختصاص القضائي الحصري للمحاكم السورية.",
        },
        {
          title: "10. التغييرات على الشروط",
          text: "تحتفظ رورا باث بالحق في تحديث أو تعديل هذه الشروط والأحكام في أي وقت. سيتم نشر التغييرات على هذه الصفحة مع تاريخ سريان محدث. استمرار استخدام خدماتنا يشكل قبولًا بالشروط المحدثة.",
        },
      ],
      contactTitle: "11. اتصل بنا",
    },
  },
};
