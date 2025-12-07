// Navigation scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const navLinks = navbar.querySelectorAll("a");
  const logo = navbar.querySelector("img#navbar-logo");
  const mobileMenu = document.getElementById("mobileMenu");

  // Don't update logo if mobile menu is open
  const isMenuOpen =
    mobileMenu && !mobileMenu.classList.contains("translate-x-full");

  if (window.scrollY > 100) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add(
      "bg-white/95",
      "backdrop-blur-sm",
      "shadow-lg",
      "border-b",
      "border-gray-200"
    );

    // Change text colors for better contrast
    navLinks.forEach((link) => {
      link.classList.remove("text-slate-300", "hover:text-pink-300");
      link.classList.add("text-gray-800", "hover:text-pink-600");
    });

    // Logo on light background - no invert (only if menu is closed)
    if (logo && !isMenuOpen) {
      logo.classList.remove("invert", "dark:invert");
    }
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove(
      "bg-white/95",
      "backdrop-blur-sm",
      "shadow-lg",
      "border-b",
      "border-gray-200"
    );

    // Restore original text colors
    navLinks.forEach((link) => {
      link.classList.remove("text-gray-800", "hover:text-pink-600");
      link.classList.add("text-slate-300", "hover:text-pink-300");
    });

    // Logo on dark background - invert (only if menu is closed)
    if (logo && !isMenuOpen) {
      logo.classList.remove("invert");
      logo.classList.add("invert");
    }
  }
});

// Language translations
const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      courses: "Courses",
      references: "References",
      contact: "Contact",
    },
    hero: {
      title:
        '<span class="text-pink-400">Your</span> <span class="text-purple-300">Corporate</span> <span class="text-indigo-400">Learning</span> <span class="text-pink-300">Partner</span>',
      subtitle:
        "Transform your organization's learning processes with a low-cost, easy-to-use, and quickly deployable platform. Our content creation tools make it simple to develop training materials, delivering a modern learning experience to your employees and members effortlessly.",
      explore_courses: "Explore Courses",
      learn_more: "Learn More",
      feature1: {
        title: "Team Learning",
        desc: "Collaborative learning environments for your organization",
      },
      feature2: {
        title: "Progress Tracking",
        desc: "Real-time analytics and performance monitoring",
      },
      feature3: {
        title: "Mobile Access",
        desc: "Learn anywhere, anytime with our mobile platform",
      },
      feature4: {
        title: "Certification",
        desc: "Official certificates recognized by institutions",
      },
    },
    features: {
      title: "Why Choose Karne?",
      certified: {
        title: "Certified Programs",
        desc: "Official certification programs recognized by government institutions and professional bodies.",
      },
      instructors: {
        title: "Expert Instructors",
        desc: "Learn from experienced professionals and subject matter experts in their respective fields.",
      },
      mobile: {
        title: "Mobile Learning",
        desc: "Access your courses anywhere, anytime with our responsive mobile-friendly platform.",
      },
      tracking: {
        title: "Progress Tracking",
        desc: "Monitor your learning progress with detailed analytics and performance reports.",
      },
    },
    about: {
      title: "About Karne Platform",
      description:
        "Karne is a comprehensive e-learning platform specifically designed for government officials, civil servants, and public sector professionals. Our platform offers specialized training programs that align with national standards and international best practices.",
      feature1: "Compliance with Turkish Republic regulations",
      feature2: "EU standards and best practices",
      feature3: "Ethics and professional development",
      feature4: "Multilingual support",
    },
    stats: {
      learners: "Active Learners",
      courses: "Courses Available",
      completion: "Completion Rate",
      access: "Platform Access",
    },
    benefits: {
      cost_effective: {
        title: "Cost-Effective Solution",
        desc: "Reduce training costs by up to 70% compared to traditional classroom training. No travel expenses, venue costs, or printed materials needed.",
      },
      content_management: {
        title: "Easy Content Management",
        desc: "Create, edit, and manage content effortlessly. Our intuitive interface makes it simple to update courses, add new materials, and keep content fresh and relevant.",
      },
      customizable: {
        title: "Fully Customizable",
        desc: "Tailor the platform to your institution's specific needs. Custom branding, course structures, and learning paths designed for your organization.",
      },
      integration: {
        title: "Seamless Integration",
        desc: "Integrate with your existing systems - ERP, CRM, HR systems, and more. Single sign-on and automated user management for maximum efficiency.",
      },
    },
    courses: {
      title: "Featured Courses",
    },
    course1: {
      title: "Ethics for Civil Servants",
      desc: "Comprehensive training on ethical standards and professional conduct for government officials.",
    },
    course2: {
      title: "EU Affairs and Diplomacy",
      desc: "Understanding European Union policies, procedures, and diplomatic protocols.",
    },
    course3: {
      title: "Transportation Infrastructure",
      desc: "Modern transportation systems, infrastructure planning, and sustainable mobility solutions.",
    },
    references: {
      title: "Our Partners & References",
      subtitle:
        "Karne is proud to be supported by leading government institutions and academic organizations",
    },
    ref1: {
      title: "European Union Delegation of Türkiye",
      desc: "Official EU representation in Turkey, supporting educational initiatives and professional development programs.",
    },
    ref2: {
      title: "Yıldız Technical University",
      desc: "Leading technical university providing academic expertise and research support for our educational programs.",
    },
    ref3: {
      title: "Ministry of Family and Social Services",
      desc: "Turkish Republic ministry ensuring social welfare and family support through professional training initiatives.",
    },
    ref4: {
      title: "Ministry of Transport and Infrastructure",
      desc: "Turkish Republic ministry overseeing transportation systems and infrastructure development through specialized training.",
    },
    ref5: {
      title: "Board of Ethics for Civil Servants",
      desc: "Official ethics board ensuring high standards of professional conduct and integrity in public service.",
    },
    ref6: {
      title: "Ministry of Foreign Affairs - Directorate for EU Affairs",
      desc: "Turkish Republic ministry managing international relations and EU affairs through comprehensive training programs.",
    },
    cta: {
      title: "Ready to Start Your Learning Journey?",
      subtitle:
        "Join thousands of professionals who have enhanced their skills with Karne",
      button: "Get Started Today",
    },
    contact: {
      title: "Contact Us",
      email: "Email",
      phone: "Phone",
      address: "Address",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        submit: "Send Message",
      },
    },
    footer: {
      quick_links: "Quick Links",
      follow: "Follow Us",
      description:
        "Karne is a comprehensive e-learning platform specifically designed for government officials, civil servants, and public sector professionals. Transform your organization's learning processes with our low-cost, easy-to-use, and quickly deployable solution.",
      about_link: "About",
      references_link: "References",
      contact_link: "Contact",
      copyright: "All rights reserved.",
    },
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      about: "Hakkımızda",
      courses: "Kurslar",
      references: "Referanslar",
      contact: "İletişim",
    },
    hero: {
      title:
        '<span class="text-pink-400">Kurumsal</span> <span class="text-purple-300">Eğitim</span> <span class="text-indigo-400">Çözümünüz</span>',
      subtitle:
        "Organizasyonunuzun öğrenme süreçlerini düşük maliyetli, kullanımı kolay ve hızla dağıtılabilir bir platformla dönüştürün. İçerik oluşturma araçlarımız, eğitim materyalleri geliştirmeyi kolaylaştırır ve çalışanlarınıza ve üyelerinize zahmetsizce modern bir öğrenme deneyimi sunar.",
      explore_courses: "Kursları Keşfet",
      learn_more: "Daha Fazla Bilgi",
      feature1: {
        title: "Takım Öğrenmesi",
        desc: "Ekibinizle birlikte öğrenin, birlikte büyüyün",
      },
      feature2: {
        title: "İlerleme Takibi",
        desc: "Gerçek zamanlı analitik ve performans izleme",
      },
      feature3: {
        title: "Mobil Erişim",
        desc: "Mobil platformumuzla her yerden, istediğiniz zaman öğrenin",
      },
      feature4: {
        title: "Sertifikasyon",
        desc: "Kurumlar tarafından tanınan resmi sertifikalar",
      },
    },
    features: {
      title: "Neden Karne?",
      certified: {
        title: "Sertifikalı Programlar",
        desc: "Devlet kurumları ve meslek kuruluşları tarafından tanınan resmi sertifikasyon programları.",
      },
      instructors: {
        title: "Uzman Eğitmenler",
        desc: "Deneyimli profesyonellerden ve alanlarında uzman konu uzmanlarından öğrenin.",
      },
      mobile: {
        title: "Mobil Öğrenme",
        desc: "Duyarlı mobil uyumlu platformumuzla kurslarınıza her yerden, istediğiniz zaman erişin.",
      },
      tracking: {
        title: "İlerleme Takibi",
        desc: "Detaylı analitikler ve performans raporları ile öğrenme ilerlemenizi izleyin.",
      },
    },
    about: {
      title: "Karne Platform Hakkında",
      description:
        "Karne, özellikle devlet memurları, kamu görevlileri ve kamu sektörü profesyonelleri için tasarlanmış kapsamlı bir e-öğrenme platformudur. Platformumuz ulusal standartlar ve uluslararası en iyi uygulamalarla uyumlu özel eğitim programları sunar.",
      feature1: "Türkiye Cumhuriyeti düzenlemelerine uygunluk",
      feature2: "AB standartları ve en iyi uygulamalar",
      feature3: "Etik ve mesleki gelişim",
      feature4: "Çok dilli destek",
    },
    stats: {
      learners: "Aktif Öğrenci",
      courses: "Mevcut Kurs",
      completion: "Tamamlama Oranı",
      access: "Platform Erişimi",
    },
    benefits: {
      cost_effective: {
        title: "Maliyet Etkin Çözüm",
        desc: "Geleneksel sınıf eğitimine kıyasla eğitim maliyetlerini %70'e kadar azaltın. Seyahat masrafları, mekan maliyetleri veya basılı materyaller gerekmez.",
      },
      content_management: {
        title: "Kolay İçerik Yönetimi",
        desc: "İçerik oluşturun, düzenleyin ve zahmetsizce yönetin. Sezgisel arayüzümüz kursları güncellemeyi, yeni materyaller eklemeyi ve içeriği güncel ve alakalı tutmayı kolaylaştırır.",
      },
      customizable: {
        title: "Tamamen Özelleştirilebilir",
        desc: "Platformu kurumunuzun özel ihtiyaçlarına göre uyarlayın. Özel markalaşma, kurs yapıları ve organizasyonunuz için tasarlanmış öğrenme yolları.",
      },
      integration: {
        title: "Sorunsuz Entegrasyon",
        desc: "Mevcut sistemlerinizle entegre olun - ERP, CRM, İK sistemleri ve daha fazlası. Tek oturum açma ve otomatik kullanıcı yönetimi ile maksimum verimlilik.",
      },
    },
    courses: {
      title: "Öne Çıkan Kurslar",
    },
    course1: {
      title: "Kamu Görevlileri Etik",
      desc: "Devlet memurları için etik standartlar ve mesleki davranış konularında kapsamlı eğitim.",
    },
    course2: {
      title: "AB İşleri ve Diplomasi",
      desc: "Avrupa Birliği politikaları, prosedürleri ve diplomatik protokolleri anlama.",
    },
    course3: {
      title: "Ulaştırma Altyapısı",
      desc: "Modern ulaşım sistemleri, altyapı planlaması ve sürdürülebilir mobilite çözümleri.",
    },
    references: {
      title: "Ortaklarımız ve Referanslarımız",
      subtitle:
        "Karne, önde gelen devlet kurumları ve akademik organizasyonlar tarafından desteklenmekten gurur duyar",
    },
    ref1: {
      title: "Türkiye Avrupa Birliği Delegasyonu",
      desc: "Türkiye'deki resmi AB temsilciliği, eğitim girişimlerini ve mesleki gelişim programlarını destekler.",
    },
    ref2: {
      title: "Yıldız Teknik Üniversitesi",
      desc: "Eğitim programlarımız için akademik uzmanlık ve araştırma desteği sağlayan önde gelen teknik üniversite.",
    },
    ref3: {
      title: "Aile ve Sosyal Hizmetler Bakanlığı",
      desc: "Mesleki eğitim girişimleri aracılığıyla sosyal refah ve aile desteği sağlayan Türkiye Cumhuriyeti bakanlığı.",
    },
    ref4: {
      title: "Ulaştırma ve Altyapı Bakanlığı",
      desc: "Özel eğitimler aracılığıyla ulaşım sistemleri ve altyapı geliştirmeyi denetleyen Türkiye Cumhuriyeti bakanlığı.",
    },
    ref5: {
      title: "Kamu Görevlileri Etik Kurulu",
      desc: "Kamu hizmetinde yüksek mesleki davranış ve dürüstlük standartlarını sağlayan resmi etik kurulu.",
    },
    ref6: {
      title: "Dışişleri Bakanlığı - AB İşleri Genel Müdürlüğü",
      desc: "Kapsamlı eğitim programları aracılığıyla uluslararası ilişkileri ve AB işlerini yöneten Türkiye Cumhuriyeti bakanlığı.",
    },
    cta: {
      title: "Öğrenme Yolculuğunuza Başlamaya Hazır mısınız?",
      subtitle:
        "Becerilerini Karne ile geliştiren binlerce profesyonelin arasına katılın",
      button: "Hemen Başlayın",
    },
    contact: {
      title: "İletişim",
      email: "E-posta",
      phone: "Telefon",
      address: "Adres",
      form: {
        name: "Adınız",
        email: "E-posta Adresiniz",
        message: "Mesajınız",
        submit: "Mesaj Gönder",
      },
    },
    footer: {
      quick_links: "Hızlı Bağlantılar",
      follow: "Bizi Takip Edin",
      description:
        "Karne, devlet memurları, kamu görevlileri ve kamu sektörü profesyonelleri için özel olarak tasarlanmış kapsamlı bir e-öğrenme platformudur. Düşük maliyetli, kullanımı kolay ve hızla kurulabilir çözümümüzle organizasyonunuzun eğitim süreçlerini modernize edin ve çalışanlarınızın profesyonel gelişimini destekleyin.",
      about_link: "Hakkımızda",
      references_link: "Referanslar",
      contact_link: "İletişim",
      copyright: "Tüm hakları saklıdır.",
    },
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über uns",
      courses: "Kurse",
      references: "Referenzen",
      contact: "Kontakt",
    },
    hero: {
      title:
        '<span class="text-pink-400">Ihr</span> <span class="text-purple-300">Corporate</span> <span class="text-indigo-400">Learning</span> <span class="text-pink-300">Partner</span>',
      subtitle:
        "Verwandeln Sie die Lernprozesse Ihres Unternehmens mit einer kostengünstigen, benutzerfreundlichen und schnell einsetzbaren Plattform. Unsere Content-Erstellungstools machen es einfach, Schulungsmaterialien zu entwickeln und Ihren Mitarbeitern und Mitgliedern mühelos ein modernes Lernerlebnis zu bieten.",
      explore_courses: "Kurse Erkunden",
      learn_more: "Mehr Erfahren",
      feature1: {
        title: "Team-Lernen",
        desc: "Kollaborative Lernumgebungen für Ihr Unternehmen",
      },
      feature2: {
        title: "Fortschrittsverfolgung",
        desc: "Echtzeit-Analytik und Leistungsüberwachung",
      },
      feature3: {
        title: "Mobiler Zugang",
        desc: "Lernen Sie überall und jederzeit mit unserer mobilen Plattform",
      },
      feature4: {
        title: "Zertifizierung",
        desc: "Offizielle Zertifikate von Institutionen anerkannt",
      },
    },
    features: {
      title: "Warum Karne?",
      certified: {
        title: "Zertifizierte Programme",
        desc: "Offizielle Zertifizierungsprogramme, die von Regierungsinstitutionen und Berufsverbänden anerkannt werden.",
      },
      instructors: {
        title: "Experten-Dozenten",
        desc: "Lernen Sie von erfahrenen Fachleuten und Fachexperten in ihren jeweiligen Bereichen.",
      },
      mobile: {
        title: "Mobiles Lernen",
        desc: "Greifen Sie überall und jederzeit auf Ihre Kurse mit unserer responsiven mobilfreundlichen Plattform zu.",
      },
      tracking: {
        title: "Fortschrittsverfolgung",
        desc: "Überwachen Sie Ihren Lernfortschritt mit detaillierten Analysen und Leistungsberichten.",
      },
    },
    about: {
      title: "Über Karne-Plattform",
      description:
        "Karne ist eine umfassende E-Learning-Plattform, die speziell für Regierungsbeamte, Staatsbedienstete und öffentliche Sektorprofis entwickelt wurde. Unsere Plattform bietet spezialisierte Schulungsprogramme, die mit nationalen Standards und internationalen Best Practices übereinstimmen.",
      feature1: "Einhaltung der türkischen Republik-Verordnungen",
      feature2: "EU-Standards und Best Practices",
      feature3: "Ethik und berufliche Entwicklung",
      feature4: "Mehrsprachige Unterstützung",
    },
    stats: {
      learners: "Aktive Lernende",
      courses: "Verfügbare Kurse",
      completion: "Abschlussrate",
      access: "Plattformzugang",
    },
    benefits: {
      cost_effective: {
        title: "Kosteneffektive Lösung",
        desc: "Reduzieren Sie die Schulungskosten um bis zu 70% im Vergleich zu traditionellen Klassenzimmer-Schulungen. Keine Reisekosten, Veranstaltungsort-Kosten oder gedruckte Materialien erforderlich.",
      },
      content_management: {
        title: "Einfache Inhaltsverwaltung",
        desc: "Erstellen, bearbeiten und verwalten Sie Inhalte mühelos. Unsere intuitive Benutzeroberfläche macht es einfach, Kurse zu aktualisieren, neue Materialien hinzuzufügen und Inhalte frisch und relevant zu halten.",
      },
      customizable: {
        title: "Vollständig anpassbar",
        desc: "Passen Sie die Plattform an die spezifischen Bedürfnisse Ihrer Institution an. Individuelle Markenführung, Kursstrukturen und Lernpfade, die für Ihre Organisation entwickelt wurden.",
      },
      integration: {
        title: "Nahtlose Integration",
        desc: "Integrieren Sie sich in Ihre bestehenden Systeme - ERP, CRM, HR-Systeme und mehr. Einmalige Anmeldung und automatisierte Benutzerverwaltung für maximale Effizienz.",
      },
    },
    courses: {
      title: "Empfohlene Kurse",
    },
    course1: {
      title: "Ethik für Staatsbedienstete",
      desc: "Umfassende Schulung zu ethischen Standards und beruflichem Verhalten für Regierungsbeamte.",
    },
    course2: {
      title: "EU-Angelegenheiten und Diplomatie",
      desc: "Verständnis der Europäischen Union-Politiken, Verfahren und diplomatischen Protokolle.",
    },
    course3: {
      title: "Verkehrsinfrastruktur",
      desc: "Moderne Verkehrssysteme, Infrastrukturplanung und nachhaltige Mobilitätslösungen.",
    },
    references: {
      title: "Unsere Partner & Referenzen",
      subtitle:
        "Karne ist stolz darauf, von führenden Regierungsinstitutionen und akademischen Organisationen unterstützt zu werden",
    },
    ref1: {
      title: "EU-Delegation der Türkei",
      desc: "Offizielle EU-Vertretung in der Türkei, unterstützt Bildungsinitiativen und berufliche Entwicklungsprogramme.",
    },
    ref2: {
      title: "Yıldız Technische Universität",
      desc: "Führende technische Universität, die akademische Expertise und Forschungsunterstützung für unsere Bildungsprogramme bietet.",
    },
    ref3: {
      title: "Ministerium für Familie und Soziale Dienste",
      desc: "Türkische Republik Ministerium, das soziale Wohlfahrt und Familienunterstützung durch berufliche Ausbildungsinitiativen sicherstellt.",
    },
    ref4: {
      title: "Ministerium für Verkehr und Infrastruktur",
      desc: "Türkische Republik Ministerium, das Verkehrssysteme und Infrastrukturentwicklung durch spezialisierte Schulungen überwacht.",
    },
    ref5: {
      title: "Ethikrat für Staatsbedienstete",
      desc: "Offizieller Ethikrat, der hohe Standards für berufliches Verhalten und Integrität im öffentlichen Dienst sicherstellt.",
    },
    ref6: {
      title: "Außenministerium - Direktion für EU-Angelegenheiten",
      desc: "Türkische Republik Ministerium, das internationale Beziehungen und EU-Angelegenheiten durch umfassende Schulungsprogramme verwaltet.",
    },
    cta: {
      title: "Bereit, Ihre Lernreise zu beginnen?",
      subtitle:
        "Treten Sie Tausenden von Fachleuten bei, die ihre Fähigkeiten mit Karne verbessert haben",
      button: "Heute Beginnen",
    },
    contact: {
      title: "Kontaktieren Sie Uns",
      email: "E-Mail",
      phone: "Telefon",
      address: "Adresse",
      form: {
        name: "Ihr Name",
        email: "Ihre E-Mail",
        message: "Ihre Nachricht",
        submit: "Nachricht Senden",
      },
    },
    footer: {
      quick_links: "Schnelle Links",
      follow: "Folgen Sie Uns",
      description:
        "Karne ist eine umfassende E-Learning-Plattform, die speziell für Regierungsbeamte, Staatsbedienstete und öffentliche Sektorprofis entwickelt wurde. Modernisieren Sie die Lernprozesse Ihrer Organisation mit unserer kostengünstigen, benutzerfreundlichen und schnell einsetzbaren Lösung und unterstützen Sie die berufliche Entwicklung Ihrer Mitarbeiter.",
      about_link: "Über uns",
      references_link: "Referenzen",
      contact_link: "Kontakt",
      copyright: "Alle Rechte vorbehalten.",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      courses: "Cours",
      references: "Références",
      contact: "Contact",
    },
    hero: {
      title:
        '<span class="text-pink-400">Votre</span> <span class="text-purple-300">Partenaire</span> <span class="text-indigo-400">d\'Apprentissage</span> <span class="text-pink-300">Corporatif</span>',
      subtitle:
        "Transformez les processus d'apprentissage de votre organisation avec une plateforme économique, facile à utiliser et rapidement déployable. Nos outils de création de contenu facilitent le développement de matériels de formation, offrant une expérience d'apprentissage moderne à vos employés et membres sans effort.",
      explore_courses: "Explorer les Cours",
      learn_more: "En Savoir Plus",
      feature1: {
        title: "Apprentissage en Équipe",
        desc: "Environnements d'apprentissage collaboratifs pour votre organisation",
      },
      feature2: {
        title: "Suivi des Progrès",
        desc: "Analytiques en temps réel et surveillance des performances",
      },
      feature3: {
        title: "Accès Mobile",
        desc: "Apprenez partout, à tout moment avec notre plateforme mobile",
      },
      feature4: {
        title: "Certification",
        desc: "Certificats officiels reconnus par les institutions",
      },
    },
    features: {
      title: "Pourquoi Choisir Karne?",
      certified: {
        title: "Programmes Certifiés",
        desc: "Programmes de certification officiels reconnus par les institutions gouvernementales et organismes professionnels.",
      },
      instructors: {
        title: "Instructeurs Experts",
        desc: "Apprenez d'experts expérimentés et de spécialistes dans leurs domaines respectifs.",
      },
      mobile: {
        title: "Apprentissage Mobile",
        desc: "Accédez à vos cours n'importe où, n'importe quand avec notre plateforme responsive et mobile-friendly.",
      },
      tracking: {
        title: "Suivi des Progrès",
        desc: "Surveillez vos progrès d'apprentissage avec des analyses détaillées et des rapports de performance.",
      },
    },
    about: {
      title: "À Propos de la Plateforme Karne",
      description:
        "Karne est une plateforme d'apprentissage en ligne complète spécialement conçue pour les fonctionnaires, agents de l'État et professionnels du secteur public. Notre plateforme offre des programmes de formation spécialisés qui s'alignent sur les standards nationaux et les meilleures pratiques internationales.",
      feature1: "Conformité aux réglementations de la République de Turquie",
      feature2: "Standards UE et meilleures pratiques",
      feature3: "Éthique et développement professionnel",
      feature4: "Support multilingue",
    },
    stats: {
      learners: "Apprenants Actifs",
      courses: "Cours Disponibles",
      completion: "Taux de Réussite",
      access: "Accès Plateforme",
    },
    benefits: {
      cost_effective: {
        title: "Solution Rentable",
        desc: "Réduisez les coûts de formation jusqu'à 70% par rapport à la formation traditionnelle en classe. Aucun frais de déplacement, de lieu ou de matériel imprimé nécessaire.",
      },
      content_management: {
        title: "Gestion de Contenu Facile",
        desc: "Créez, modifiez et gérez le contenu sans effort. Notre interface intuitive facilite la mise à jour des cours, l'ajout de nouveaux matériaux et le maintien du contenu frais et pertinent.",
      },
      customizable: {
        title: "Entièrement Personnalisable",
        desc: "Adaptez la plateforme aux besoins spécifiques de votre institution. Branding personnalisé, structures de cours et parcours d'apprentissage conçus pour votre organisation.",
      },
      integration: {
        title: "Intégration Transparente",
        desc: "Intégrez-vous à vos systèmes existants - ERP, CRM, systèmes RH et plus. Authentification unique et gestion automatisée des utilisateurs pour une efficacité maximale.",
      },
    },
    courses: {
      title: "Cours Vedettes",
    },
    course1: {
      title: "Éthique pour les Fonctionnaires",
      desc: "Formation complète sur les standards éthiques et la conduite professionnelle pour les fonctionnaires.",
    },
    course2: {
      title: "Affaires UE et Diplomatie",
      desc: "Compréhension des politiques, procédures et protocoles diplomatiques de l'Union Européenne.",
    },
    course3: {
      title: "Infrastructure des Transports",
      desc: "Systèmes de transport modernes, planification d'infrastructure et solutions de mobilité durable.",
    },
    references: {
      title: "Nos Partenaires & Références",
      subtitle:
        "Karne est fier d'être soutenu par des institutions gouvernementales et organisations académiques de premier plan",
    },
    ref1: {
      title: "Délégation de l'Union Européenne en Turquie",
      desc: "Représentation officielle de l'UE en Turquie, soutenant les initiatives éducatives et programmes de développement professionnel.",
    },
    ref2: {
      title: "Université Technique Yıldız",
      desc: "Université technique de premier plan fournissant expertise académique et soutien recherche pour nos programmes éducatifs.",
    },
    ref3: {
      title: "Ministère de la Famille et des Services Sociaux",
      desc: "Ministère de la République de Turquie assurant le bien-être social et le soutien familial par des initiatives de formation professionnelle.",
    },
    ref4: {
      title: "Ministère des Transports et de l'Infrastructure",
      desc: "Ministère de la République de Turquie supervisant les systèmes de transport et développement d'infrastructure par formation spécialisée.",
    },
    ref5: {
      title: "Conseil d'Éthique pour les Fonctionnaires",
      desc: "Conseil d'éthique officiel assurant des standards élevés de conduite professionnelle et intégrité dans le service public.",
    },
    ref6: {
      title: "Ministère des Affaires Étrangères - Direction des Affaires UE",
      desc: "Ministère de la République de Turquie gérant les relations internationales et affaires UE par programmes de formation complets.",
    },
    cta: {
      title: "Prêt à Commencer Votre Parcours d'Apprentissage?",
      subtitle:
        "Rejoignez des milliers de professionnels qui ont amélioré leurs compétences avec Karne",
      button: "Commencer Aujourd'hui",
    },
    contact: {
      title: "Contactez-Nous",
      email: "E-mail",
      phone: "Téléphone",
      address: "Adresse",
      form: {
        name: "Votre Nom",
        email: "Votre E-mail",
        message: "Votre Message",
        submit: "Envoyer Message",
      },
    },
    footer: {
      quick_links: "Liens Rapides",
      follow: "Suivez-Nous",
      description:
        "Karne est une plateforme d'apprentissage en ligne complète spécialement conçue pour les fonctionnaires, agents de l'État et professionnels du secteur public. Modernisez les processus d'apprentissage de votre organisation avec notre solution économique, facile à utiliser et rapidement déployable, et soutenez le développement professionnel de vos employés.",
      about_link: "À propos",
      references_link: "Références",
      contact_link: "Contact",
      copyright: "Tous droits réservés.",
    },
  },
};

// Current language
let currentLanguage = localStorage.getItem("language") || "en";

// Mobile menu - Simple and working
let isMobileMenuOpen = false;

function toggleMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const logo = document.getElementById("navbar-logo");

  if (!mobileMenu || !mobileMenuBtn) {
    // Silently fail in production
    return;
  }

  isMobileMenuOpen = !isMobileMenuOpen;
  const hamburgerLines = mobileMenuBtn.querySelectorAll(".hamburger-line");

  if (isMobileMenuOpen) {
    // Save scroll position and lock body
    const scrollY = window.scrollY;
    document.body.dataset.scrollY = scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    // Open menu - slide in from right
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");

    // Transform hamburger to X
    if (hamburgerLines.length === 3) {
      hamburgerLines[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      hamburgerLines[1].style.opacity = "0";
      hamburgerLines[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
    }

    // Keep logo as is - don't change invert
    // Logo will maintain its current state
  } else {
    // Restore scroll position and unlock body
    const scrollY = parseInt(document.body.dataset.scrollY || "0", 10);
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    window.scrollTo(0, scrollY);
    delete document.body.dataset.scrollY;

    // Close menu - slide out to right
    mobileMenu.classList.remove("translate-x-0");
    mobileMenu.classList.add("translate-x-full");

    // Transform X back to hamburger
    if (hamburgerLines.length === 3) {
      hamburgerLines[0].style.transform = "";
      hamburgerLines[1].style.opacity = "1";
      hamburgerLines[2].style.transform = "";
    }

    // Update navbar colors after closing
    setTimeout(() => {
      updateNavbarOnScroll();
    }, 300);
  }
}

// Initialize mobile menu
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMobileMenu();
    });
  }

  // Close button
  const mobileMenuClose = document.getElementById("mobileMenuClose");
  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", () => {
      if (isMobileMenuOpen) {
        toggleMobileMenu();
      }
    });
  }

  // Close menu when clicking links
  if (mobileMenu) {
    const menuLinks = mobileMenu.querySelectorAll(".mobile-menu-link");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (isMobileMenuOpen) {
          toggleMobileMenu();
        }
      });
    });
  }

  // Close menu on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMobileMenuOpen) {
      toggleMobileMenu();
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      isMobileMenuOpen &&
      mobileMenu &&
      !mobileMenu.contains(e.target) &&
      !mobileMenuBtn?.contains(e.target)
    ) {
      toggleMobileMenu();
    }
  });
});

// Function to update hamburger button color based on scroll position
function updateHamburgerColor() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");

  if (!mobileMenuBtn || isMobileMenuOpen) return;

  if (window.scrollY > 50) {
    mobileMenuBtn.classList.remove("text-slate-300", "hover:text-pink-300");
    mobileMenuBtn.classList.add("text-slate-800", "hover:text-pink-600");
  } else {
    mobileMenuBtn.classList.remove("text-slate-800", "hover:text-pink-600");
    mobileMenuBtn.classList.add("text-slate-300", "hover:text-pink-300");
  }
}

// Initial hamburger color update
document.addEventListener("DOMContentLoaded", () => {
  updateHamburgerColor();
  updateNavbarOnScroll();
});

// Language switching functionality
function translatePage(language) {
  const elements = document.querySelectorAll("[data-translate]");
  const placeholderElements = document.querySelectorAll(
    "[data-placeholder-translate]"
  );

  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    const translation = getNestedTranslation(translations[language], key);
    if (translation) {
      // Check if translation contains HTML tags
      if (typeof translation === "string" && translation.includes("<")) {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }
    }
  });

  placeholderElements.forEach((element) => {
    const key = element.getAttribute("data-placeholder-translate");
    const translation = getNestedTranslation(translations[language], key);
    if (translation) {
      element.placeholder = translation;
    }
  });

  // Update language button
  const codeMap = {
    en: "EN",
    tr: "TR",
    de: "DE",
    fr: "FR",
  };

  const flagMap = {
    en: "🇬🇧",
    tr: "🇹🇷",
    de: "🇩🇪",
    fr: "🇫🇷",
  };

  const currentLangEl = document.getElementById("currentLang");
  const currentLangFlagEl = document.getElementById("currentLangFlag");
  if (currentLangEl) {
    currentLangEl.textContent = codeMap[language];
  }

  if (currentLangFlagEl) {
    currentLangFlagEl.textContent = flagMap[language];
  }

  // Update document language
  document.documentElement.lang = language;

  // Save to localStorage
  localStorage.setItem("language", language);
  currentLanguage = language;
}

function getNestedTranslation(obj, path) {
  return path.split(".").reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : null;
  }, obj);
}

// Initialize page with saved language
document.addEventListener("DOMContentLoaded", () => {
  translatePage(currentLanguage);
});

// Language selector functionality
const langBtn = document.getElementById("langBtn");
if (langBtn) {
  langBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    const menu = document.getElementById("langMenu");
    if (!menu) return;

    if (menu.classList.contains("opacity-0")) {
      menu.classList.remove("opacity-0", "invisible", "translate-y-2");
      menu.classList.add("opacity-100", "visible", "translate-y-0");
    } else {
      menu.classList.add("opacity-0", "invisible", "translate-y-2");
      menu.classList.remove("opacity-100", "visible", "translate-y-0");
    }
  });
}

// Handle language selection
document.querySelectorAll(".lang-option").forEach((option) => {
  option.addEventListener("click", function () {
    const lang = this.getAttribute("data-lang");
    currentLanguage = lang;
    localStorage.setItem("language", lang);

    translatePage(lang);

    // Update current language display and flag
    const flagMap = {
      en: "🇬🇧",
      tr: "🇹🇷",
      de: "🇩🇪",
      fr: "🇫🇷",
    };

    const currentLangEl = document.getElementById("currentLang");
    const currentLangFlagEl = document.getElementById("currentLangFlag");

    if (currentLangEl) {
      currentLangEl.textContent = lang.toUpperCase();
    }

    if (currentLangFlagEl) {
      currentLangFlagEl.textContent = flagMap[lang];
    }

    // Close desktop menu
    const menu = document.getElementById("langMenu");
    if (menu) {
      menu.classList.add("opacity-0", "invisible", "translate-y-2");
      menu.classList.remove("opacity-100", "visible", "translate-y-0");
    }
  });
});

// Mobile menu language selection already handled by .lang-option selectors above

// Close menu when clicking outside
document.addEventListener("click", function (e) {
  if (!e.target.closest("#langBtn") && !e.target.closest("#langMenu")) {
    const menu = document.getElementById("langMenu");
    if (menu) {
      menu.classList.add("opacity-0", "invisible", "translate-y-2");
      menu.classList.remove("opacity-100", "visible", "translate-y-0");
    }
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar background change on scroll
function updateNavbarOnScroll() {
  const navbar = document.getElementById("navbar");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const navLinks = navbar?.querySelectorAll("a");
  const langBtn = document.getElementById("langBtn");

  const isMobileMenuOpenCheck =
    mobileMenu && !mobileMenu.classList.contains("translate-x-full");

  // If menu is open, don't update navbar (but keep logo as is)
  if (isMobileMenuOpenCheck) return;

  if (window.scrollY > 50) {
    // Scrolled - white background with blur
    if (navbar) {
      navbar.style.background = "rgba(255, 255, 255, 0.95)";
      navbar.style.backdropFilter = "blur(10px)";
      navbar.style.boxShadow = "0 1px 3px 0 rgb(0 0 0 / 0.1)";
    }
    // Change text colors to dark
    /* navLinks?.forEach((link) => {
      link.classList.remove("text-slate-300", "hover:text-pink-300");
      link.classList.add("text-slate-700", "hover:text-pink-600");
    }); */
    // Change hamburger color to dark
    if (mobileMenuBtn) {
      mobileMenuBtn.classList.remove("text-slate-300", "hover:text-pink-300");
      mobileMenuBtn.classList.add("text-slate-800", "hover:text-pink-600");
    }
    // Language button dark
    if (langBtn) {
      langBtn.classList.remove("bg-slate-800/50", "border-slate-600/50");
      langBtn.classList.add("bg-white/80", "border-slate-300/50");
      langBtn.querySelector("#currentLang")?.classList.remove("text-slate-300");
      langBtn.querySelector("#currentLang")?.classList.add("text-slate-700");
      langBtn
        .querySelector(".text-slate-400")
        ?.classList.remove("text-slate-400");
      langBtn
        .querySelector(".text-slate-400, svg")
        ?.classList.add("text-slate-600");
    }
  } else {
    // At top - transparent background
    if (navbar) {
      navbar.style.background = "transparent";
      navbar.style.backdropFilter = "none";
      navbar.style.boxShadow = "none";
    }
    // Change text colors to light
    navLinks?.forEach((link) => {
      link.classList.remove("text-slate-700", "hover:text-pink-600");
      link.classList.add("text-slate-300", "hover:text-pink-300");
    });
    // Change hamburger color to light
    if (mobileMenuBtn) {
      mobileMenuBtn.classList.remove("text-slate-800", "hover:text-pink-600");
      mobileMenuBtn.classList.add("text-slate-300", "hover:text-pink-300");
    }
    // Language button light
    if (langBtn) {
      langBtn.classList.remove("bg-white/80", "border-slate-300/50");
      langBtn.classList.add("bg-slate-800/50", "border-slate-600/50");
      langBtn.querySelector("#currentLang")?.classList.remove("text-slate-700");
      langBtn.querySelector("#currentLang")?.classList.add("text-slate-300");
      langBtn
        .querySelector(".text-slate-600")
        ?.classList.remove("text-slate-600");
      langBtn.querySelector("svg")?.classList.add("text-slate-400");
    }
  }
}

window.addEventListener("scroll", updateNavbarOnScroll);

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".feature-card, .course-card, .reference-card, .about-feature"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Form submission with Cloudflare Turnstile and Laravel backend
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const formMessage = document.getElementById("formMessage");
  const submitBtn = document.getElementById("submitBtn");
  const turnstileWidget = document.querySelector(".cf-turnstile");
  let turnstileWidgetId = null;

  // Wait for Turnstile to load and get widget ID
  if (turnstileWidget) {
    const checkWidgetId = setInterval(() => {
      if (turnstileWidget.hasAttribute("data-widget-id")) {
        turnstileWidgetId = turnstileWidget.getAttribute("data-widget-id");
        clearInterval(checkWidgetId);
      }
    }, 100);
  }

  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault();

      // Get form data
      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const message = document.getElementById("contactMessage").value.trim();

      // Validation
      if (!name || !email || !message) {
        showMessage("Lütfen tüm alanları doldurun.", "error");
        return;
      }

      // Name validation (min 2 characters)
      if (name.length < 2) {
        showMessage("İsim en az 2 karakter olmalıdır.", "error");
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showMessage("Lütfen geçerli bir e-posta adresi girin.", "error");
        return;
      }

      // Message validation (min 10 characters)
      if (message.length < 10) {
        showMessage("Mesaj en az 10 karakter olmalıdır.", "error");
        return;
      }

      // Get Cloudflare Turnstile token
      let turnstileToken = null;

      if (window.turnstile && turnstileWidgetId) {
        turnstileToken = window.turnstile.getResponse(turnstileWidgetId);
      } else if (turnstileWidget) {
        // Fallback: try to get from hidden input
        const responseInput = turnstileWidget.querySelector(
          'input[name="cf-turnstile-response"]'
        );
        if (responseInput && responseInput.value) {
          turnstileToken = responseInput.value;
        }
      }

      if (!turnstileToken) {
        showMessage("Lütfen güvenlik doğrulamasını tamamlayın.", "error");
        return;
      }

      // Disable submit button
      const originalText = submitBtn.textContent;
      submitBtn.textContent = "Gönderiliyor...";
      submitBtn.disabled = true;
      formMessage.classList.add("hidden");

      try {
        // Initialize EmailJS if not already initialized
        if (typeof emailjs === "undefined") {
          showMessage("Email servisi yükleniyor, lütfen bekleyin...", "error");
          return;
        }

        // EmailJS configuration
        // Bu değerleri EmailJS dashboard'unuzdan alacaksınız
        const serviceId = "service_gbo7k9b"; // EmailJS Service ID
        const templateId = "template_n998azw"; // EmailJS Template ID
        const publicKey = "1vQpb7Z-A6hMWL01p"; // EmailJS Public Key

        // Initialize EmailJS with public key
        emailjs.init(publicKey);

        // Get current date and time
        const now = new Date();
        const timeString = now.toLocaleString("tr-TR", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });

        // Send email via EmailJS
        const emailParams = {
          from_name: name,
          name: name,
          from_email: email,
          message: message,
          time: timeString,
          to_email: "info@milapasa.com", // Alıcı email adresi
          subject: `Karne İletişim Formu - ${name}`,
        };

        await emailjs.send(serviceId, templateId, emailParams);

        // Success
        showMessage(
          "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.",
          "success"
        );
        contactForm.reset();
        // Reset Turnstile
        if (window.turnstile && turnstileWidgetId) {
          window.turnstile.reset(turnstileWidgetId);
        }
      } catch (error) {
        // Log error for debugging (remove in production if needed)
        if (
          window.location.hostname === "localhost" ||
          window.location.hostname === "127.0.0.1"
        ) {
          console.error("Form submission error:", error);
        }
        let errorMessage = "Bir hata oluştu. Lütfen tekrar deneyin.";

        // More specific error messages
        if (error.text) {
          try {
            const errorData = JSON.parse(error.text);
            errorMessage = errorData.message || errorMessage;
          } catch (e) {
            // If error.text is not JSON, use it directly
            if (error.text.includes("Invalid")) {
              errorMessage =
                "Email servis ayarları hatalı. Lütfen yöneticiye bildirin.";
            }
          }
        }

        showMessage(errorMessage, "error");
        // Reset Turnstile on error
        if (window.turnstile && turnstileWidgetId) {
          window.turnstile.reset(turnstileWidgetId);
        }
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  function showMessage(message, type) {
    formMessage.textContent = message;
    formMessage.classList.remove(
      "hidden",
      "bg-green-100",
      "text-green-700",
      "bg-red-100",
      "text-red-700"
    );

    if (type === "success") {
      formMessage.classList.add(
        "bg-green-100",
        "text-green-700",
        "border",
        "border-green-300"
      );
    } else {
      formMessage.classList.add(
        "bg-red-100",
        "text-red-700",
        "border",
        "border-red-300"
      );
    }

    // Scroll to message
    formMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
});

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  function updateCounter() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  }

  updateCounter();
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumbers = entry.target.querySelectorAll(".stat h3");
        statNumbers.forEach((stat) => {
          const text = stat.textContent;
          const number = parseInt(text.replace(/\D/g, ""));
          if (number) {
            stat.textContent = "0";
            animateCounter(stat, number);
          }
        });
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

// Observe stats section
const statsSection = document.querySelector(".about-stats");
if (statsSection) {
  statsObserver.observe(statsSection);
}

// Add loading states for buttons
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (this.classList.contains("btn-primary") && !this.href.includes("#")) {
      e.preventDefault();
      const originalText = this.textContent;
      this.textContent = "Loading...";
      this.style.pointerEvents = "none";

      setTimeout(() => {
        this.textContent = originalText;
        this.style.pointerEvents = "auto";
      }, 1000);
    }
  });
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector(".hero");
  if (hero) {
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
  }
});

// Add hover effects to cards
document
  .querySelectorAll(".feature-card, .course-card, .reference-card")
  .forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });
  });

// Lazy loading for images (if any are added later)
const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.classList.remove("lazy");
      imageObserver.unobserve(img);
    }
  });
});

document.querySelectorAll("img[data-src]").forEach((img) => {
  imageObserver.observe(img);
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing effect when page loads
window.addEventListener("load", () => {
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 50);
  }
});

// Set current year dynamically
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
