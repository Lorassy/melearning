// Navigation scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const navLinks = navbar.querySelectorAll('a');
    const logo = navbar.querySelector('h2');
    
    if (window.scrollY > 100) {
        navbar.classList.remove('bg-transparent');
        navbar.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-lg', 'border-b', 'border-gray-200');
        
        // Change text colors for better contrast
        navLinks.forEach(link => {
            link.classList.remove('text-slate-300', 'hover:text-pink-300');
            link.classList.add('text-gray-800', 'hover:text-pink-600');
        });
        
        logo.classList.remove('text-pink-300', 'bg-gradient-to-r', 'from-pink-300', 'to-purple-300', 'bg-clip-text', 'text-transparent');
        logo.classList.add('text-pink-600');
        
    } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-lg', 'border-b', 'border-gray-200');
        
        // Restore original text colors
        navLinks.forEach(link => {
            link.classList.remove('text-gray-800', 'hover:text-pink-600');
            link.classList.add('text-slate-300', 'hover:text-pink-300');
        });
        
        logo.classList.remove('text-pink-600');
        logo.classList.add('text-pink-300', 'bg-gradient-to-r', 'from-pink-300', 'to-purple-300', 'bg-clip-text', 'text-transparent');
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
            contact: "Contact"
        },
        hero: {
            title: "Your Corporate Learning Partner",
            subtitle: "Transform your organization's learning processes with a low-cost, easy-to-use, and quickly deployable platform. Our content creation tools make it simple to develop training materials, delivering a modern learning experience to your employees and members effortlessly.",
            explore_courses: "Explore Courses",
            learn_more: "Learn More",
            feature1: {
                title: "Team Learning",
                desc: "Collaborative learning environments for your organization"
            },
            feature2: {
                title: "Progress Tracking",
                desc: "Real-time analytics and performance monitoring"
            },
            feature3: {
                title: "Mobile Access",
                desc: "Learn anywhere, anytime with our mobile platform"
            },
            feature4: {
                title: "Certification",
                desc: "Official certificates recognized by institutions"
            }
        },
        features: {
            title: "Why Choose MeLearning?",
            certified: {
                title: "Certified Programs",
                desc: "Official certification programs recognized by government institutions and professional bodies."
            },
            instructors: {
                title: "Expert Instructors", 
                desc: "Learn from experienced professionals and subject matter experts in their respective fields."
            },
            mobile: {
                title: "Mobile Learning",
                desc: "Access your courses anywhere, anytime with our responsive mobile-friendly platform."
            },
            tracking: {
                title: "Progress Tracking",
                desc: "Monitor your learning progress with detailed analytics and performance reports."
            }
        },
        about: {
            title: "About MeLearning Platform",
            description: "MeLearning is a comprehensive e-learning platform specifically designed for government officials, civil servants, and public sector professionals. Our platform offers specialized training programs that align with national standards and international best practices.",
            feature1: "Compliance with Turkish Republic regulations",
            feature2: "EU standards and best practices", 
            feature3: "Ethics and professional development",
            feature4: "Multilingual support"
        },
        stats: {
            learners: "Active Learners",
            courses: "Courses Available", 
            completion: "Completion Rate",
            access: "Platform Access"
        },
        benefits: {
            cost_effective: {
                title: "Cost-Effective Solution",
                desc: "Reduce training costs by up to 70% compared to traditional classroom training. No travel expenses, venue costs, or printed materials needed."
            },
            content_management: {
                title: "Easy Content Management",
                desc: "Create, edit, and manage content effortlessly. Our intuitive interface makes it simple to update courses, add new materials, and keep content fresh and relevant."
            },
            customizable: {
                title: "Fully Customizable",
                desc: "Tailor the platform to your institution's specific needs. Custom branding, course structures, and learning paths designed for your organization."
            },
            integration: {
                title: "Seamless Integration",
                desc: "Integrate with your existing systems - ERP, CRM, HR systems, and more. Single sign-on and automated user management for maximum efficiency."
            }
        },
        courses: {
            title: "Featured Courses"
        },
        course1: {
            title: "Ethics for Civil Servants",
            desc: "Comprehensive training on ethical standards and professional conduct for government officials."
        },
        course2: {
            title: "EU Affairs and Diplomacy", 
            desc: "Understanding European Union policies, procedures, and diplomatic protocols."
        },
        course3: {
            title: "Transportation Infrastructure",
            desc: "Modern transportation systems, infrastructure planning, and sustainable mobility solutions."
        },
        references: {
            title: "Our Partners & References",
            subtitle: "MeLearning is proud to be supported by leading government institutions and academic organizations"
        },
        ref1: {
            title: "European Union Delegation of Türkiye",
            desc: "Official EU representation in Turkey, supporting educational initiatives and professional development programs."
        },
        ref2: {
            title: "Yıldız Technical University", 
            desc: "Leading technical university providing academic expertise and research support for our educational programs."
        },
        ref3: {
            title: "Ministry of Family and Social Services",
            desc: "Turkish Republic ministry ensuring social welfare and family support through professional training initiatives."
        },
        ref4: {
            title: "Ministry of Transport and Infrastructure",
            desc: "Turkish Republic ministry overseeing transportation systems and infrastructure development through specialized training."
        },
        ref5: {
            title: "Board of Ethics for Civil Servants",
            desc: "Official ethics board ensuring high standards of professional conduct and integrity in public service."
        },
        ref6: {
            title: "Ministry of Foreign Affairs - Directorate for EU Affairs", 
            desc: "Turkish Republic ministry managing international relations and EU affairs through comprehensive training programs."
        },
        cta: {
            title: "Ready to Start Your Learning Journey?",
            subtitle: "Join thousands of professionals who have enhanced their skills with MeLearning",
            button: "Get Started Today"
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
                submit: "Send Message"
            }
        },
        footer: {
            quick_links: "Quick Links",
            follow: "Follow Us"
        }
    },
    tr: {
        nav: {
            home: "Ana Sayfa",
            about: "Hakkımızda",
            courses: "Kurslar", 
            references: "Referanslar",
            contact: "İletişim"
        },
        hero: {
            title: "Kurumsal Eğitim Çözümünüz",
            subtitle: "Organizasyonunuzun öğrenme süreçlerini düşük maliyetli, kullanımı kolay ve hızla dağıtılabilir bir platformla dönüştürün. İçerik oluşturma araçlarımız, eğitim materyalleri geliştirmeyi kolaylaştırır ve çalışanlarınıza ve üyelerinize zahmetsizce modern bir öğrenme deneyimi sunar.",
            explore_courses: "Kursları Keşfet",
            learn_more: "Daha Fazla Bilgi",
            feature1: {
                title: "Takım Öğrenmesi",
                desc: "Ekibinizle birlikte öğrenin, birlikte büyüyün"
            },
            feature2: {
                title: "İlerleme Takibi",
                desc: "Gerçek zamanlı analitik ve performans izleme"
            },
            feature3: {
                title: "Mobil Erişim",
                desc: "Mobil platformumuzla her yerden, istediğiniz zaman öğrenin"
            },
            feature4: {
                title: "Sertifikasyon",
                desc: "Kurumlar tarafından tanınan resmi sertifikalar"
            }
        },
        features: {
            title: "Neden MeLearning?",
            certified: {
                title: "Sertifikalı Programlar",
                desc: "Devlet kurumları ve meslek kuruluşları tarafından tanınan resmi sertifikasyon programları."
            },
            instructors: {
                title: "Uzman Eğitmenler",
                desc: "Deneyimli profesyonellerden ve alanlarında uzman konu uzmanlarından öğrenin."
            },
            mobile: {
                title: "Mobil Öğrenme",
                desc: "Duyarlı mobil uyumlu platformumuzla kurslarınıza her yerden, istediğiniz zaman erişin."
            },
            tracking: {
                title: "İlerleme Takibi",
                desc: "Detaylı analitikler ve performans raporları ile öğrenme ilerlemenizi izleyin."
            }
        },
        about: {
            title: "MeLearning Platform Hakkında",
            description: "MeLearning, özellikle devlet memurları, kamu görevlileri ve kamu sektörü profesyonelleri için tasarlanmış kapsamlı bir e-öğrenme platformudur. Platformumuz ulusal standartlar ve uluslararası en iyi uygulamalarla uyumlu özel eğitim programları sunar.",
            feature1: "Türkiye Cumhuriyeti düzenlemelerine uygunluk",
            feature2: "AB standartları ve en iyi uygulamalar",
            feature3: "Etik ve mesleki gelişim", 
            feature4: "Çok dilli destek"
        },
        stats: {
            learners: "Aktif Öğrenci",
            courses: "Mevcut Kurs",
            completion: "Tamamlama Oranı",
            access: "Platform Erişimi"
        },
        benefits: {
            cost_effective: {
                title: "Maliyet Etkin Çözüm",
                desc: "Geleneksel sınıf eğitimine kıyasla eğitim maliyetlerini %70'e kadar azaltın. Seyahat masrafları, mekan maliyetleri veya basılı materyaller gerekmez."
            },
            content_management: {
                title: "Kolay İçerik Yönetimi",
                desc: "İçerik oluşturun, düzenleyin ve zahmetsizce yönetin. Sezgisel arayüzümüz kursları güncellemeyi, yeni materyaller eklemeyi ve içeriği güncel ve alakalı tutmayı kolaylaştırır."
            },
            customizable: {
                title: "Tamamen Özelleştirilebilir",
                desc: "Platformu kurumunuzun özel ihtiyaçlarına göre uyarlayın. Özel markalaşma, kurs yapıları ve organizasyonunuz için tasarlanmış öğrenme yolları."
            },
            integration: {
                title: "Sorunsuz Entegrasyon",
                desc: "Mevcut sistemlerinizle entegre olun - ERP, CRM, İK sistemleri ve daha fazlası. Tek oturum açma ve otomatik kullanıcı yönetimi ile maksimum verimlilik."
            }
        },
        courses: {
            title: "Öne Çıkan Kurslar"
        },
        course1: {
            title: "Kamu Görevlileri Etik",
            desc: "Devlet memurları için etik standartlar ve mesleki davranış konularında kapsamlı eğitim."
        },
        course2: {
            title: "AB İşleri ve Diplomasi",
            desc: "Avrupa Birliği politikaları, prosedürleri ve diplomatik protokolleri anlama."
        },
        course3: {
            title: "Ulaştırma Altyapısı",
            desc: "Modern ulaşım sistemleri, altyapı planlaması ve sürdürülebilir mobilite çözümleri."
        },
        references: {
            title: "Ortaklarımız ve Referanslarımız",
            subtitle: "MeLearning, önde gelen devlet kurumları ve akademik organizasyonlar tarafından desteklenmekten gurur duyar"
        },
        ref1: {
            title: "Türkiye Avrupa Birliği Delegasyonu",
            desc: "Türkiye'deki resmi AB temsilciliği, eğitim girişimlerini ve mesleki gelişim programlarını destekler."
        },
        ref2: {
            title: "Yıldız Teknik Üniversitesi",
            desc: "Eğitim programlarımız için akademik uzmanlık ve araştırma desteği sağlayan önde gelen teknik üniversite."
        },
        ref3: {
            title: "Aile ve Sosyal Hizmetler Bakanlığı",
            desc: "Mesleki eğitim girişimleri aracılığıyla sosyal refah ve aile desteği sağlayan Türkiye Cumhuriyeti bakanlığı."
        },
        ref4: {
            title: "Ulaştırma ve Altyapı Bakanlığı",
            desc: "Özel eğitimler aracılığıyla ulaşım sistemleri ve altyapı geliştirmeyi denetleyen Türkiye Cumhuriyeti bakanlığı."
        },
        ref5: {
            title: "Kamu Görevlileri Etik Kurulu",
            desc: "Kamu hizmetinde yüksek mesleki davranış ve dürüstlük standartlarını sağlayan resmi etik kurulu."
        },
        ref6: {
            title: "Dışişleri Bakanlığı - AB İşleri Genel Müdürlüğü",
            desc: "Kapsamlı eğitim programları aracılığıyla uluslararası ilişkileri ve AB işlerini yöneten Türkiye Cumhuriyeti bakanlığı."
        },
        cta: {
            title: "Öğrenme Yolculuğunuza Başlamaya Hazır mısınız?",
            subtitle: "Becerilerini MeLearning ile geliştiren binlerce profesyonelin arasına katılın",
            button: "Hemen Başlayın"
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
                submit: "Mesaj Gönder"
            }
        },
        footer: {
            quick_links: "Hızlı Bağlantılar",
            follow: "Bizi Takip Edin"
        }
    },
    de: {
        nav: {
            home: "Startseite",
            about: "Über uns",
            courses: "Kurse",
            references: "Referenzen", 
            contact: "Kontakt"
        },
        hero: {
            title: "Ihr Corporate Learning Partner",
            subtitle: "Verwandeln Sie die Lernprozesse Ihres Unternehmens mit einer kostengünstigen, benutzerfreundlichen und schnell einsetzbaren Plattform. Unsere Content-Erstellungstools machen es einfach, Schulungsmaterialien zu entwickeln und Ihren Mitarbeitern und Mitgliedern mühelos ein modernes Lernerlebnis zu bieten.",
            explore_courses: "Kurse Erkunden",
            learn_more: "Mehr Erfahren",
            feature1: {
                title: "Team-Lernen",
                desc: "Kollaborative Lernumgebungen für Ihr Unternehmen"
            },
            feature2: {
                title: "Fortschrittsverfolgung",
                desc: "Echtzeit-Analytik und Leistungsüberwachung"
            },
            feature3: {
                title: "Mobiler Zugang",
                desc: "Lernen Sie überall und jederzeit mit unserer mobilen Plattform"
            },
            feature4: {
                title: "Zertifizierung",
                desc: "Offizielle Zertifikate von Institutionen anerkannt"
            }
        },
        features: {
            title: "Warum MeLearning?",
            certified: {
                title: "Zertifizierte Programme",
                desc: "Offizielle Zertifizierungsprogramme, die von Regierungsinstitutionen und Berufsverbänden anerkannt werden."
            },
            instructors: {
                title: "Experten-Dozenten",
                desc: "Lernen Sie von erfahrenen Fachleuten und Fachexperten in ihren jeweiligen Bereichen."
            },
            mobile: {
                title: "Mobiles Lernen",
                desc: "Greifen Sie überall und jederzeit auf Ihre Kurse mit unserer responsiven mobilfreundlichen Plattform zu."
            },
            tracking: {
                title: "Fortschrittsverfolgung",
                desc: "Überwachen Sie Ihren Lernfortschritt mit detaillierten Analysen und Leistungsberichten."
            }
        },
        about: {
            title: "Über MeLearning-Plattform",
            description: "MeLearning ist eine umfassende E-Learning-Plattform, die speziell für Regierungsbeamte, Staatsbedienstete und öffentliche Sektorprofis entwickelt wurde. Unsere Plattform bietet spezialisierte Schulungsprogramme, die mit nationalen Standards und internationalen Best Practices übereinstimmen.",
            feature1: "Einhaltung der türkischen Republik-Verordnungen",
            feature2: "EU-Standards und Best Practices",
            feature3: "Ethik und berufliche Entwicklung",
            feature4: "Mehrsprachige Unterstützung"
        },
        stats: {
            learners: "Aktive Lernende",
            courses: "Verfügbare Kurse",
            completion: "Abschlussrate",
            access: "Plattformzugang"
        },
        benefits: {
            cost_effective: {
                title: "Kosteneffektive Lösung",
                desc: "Reduzieren Sie die Schulungskosten um bis zu 70% im Vergleich zu traditionellen Klassenzimmer-Schulungen. Keine Reisekosten, Veranstaltungsort-Kosten oder gedruckte Materialien erforderlich."
            },
            content_management: {
                title: "Einfache Inhaltsverwaltung",
                desc: "Erstellen, bearbeiten und verwalten Sie Inhalte mühelos. Unsere intuitive Benutzeroberfläche macht es einfach, Kurse zu aktualisieren, neue Materialien hinzuzufügen und Inhalte frisch und relevant zu halten."
            },
            customizable: {
                title: "Vollständig anpassbar",
                desc: "Passen Sie die Plattform an die spezifischen Bedürfnisse Ihrer Institution an. Individuelle Markenführung, Kursstrukturen und Lernpfade, die für Ihre Organisation entwickelt wurden."
            },
            integration: {
                title: "Nahtlose Integration",
                desc: "Integrieren Sie sich in Ihre bestehenden Systeme - ERP, CRM, HR-Systeme und mehr. Einmalige Anmeldung und automatisierte Benutzerverwaltung für maximale Effizienz."
            }
        },
        courses: {
            title: "Empfohlene Kurse"
        },
        course1: {
            title: "Ethik für Staatsbedienstete",
            desc: "Umfassende Schulung zu ethischen Standards und beruflichem Verhalten für Regierungsbeamte."
        },
        course2: {
            title: "EU-Angelegenheiten und Diplomatie",
            desc: "Verständnis der Europäischen Union-Politiken, Verfahren und diplomatischen Protokolle."
        },
        course3: {
            title: "Verkehrsinfrastruktur",
            desc: "Moderne Verkehrssysteme, Infrastrukturplanung und nachhaltige Mobilitätslösungen."
        },
        references: {
            title: "Unsere Partner & Referenzen",
            subtitle: "MeLearning ist stolz darauf, von führenden Regierungsinstitutionen und akademischen Organisationen unterstützt zu werden"
        },
        ref1: {
            title: "EU-Delegation der Türkei",
            desc: "Offizielle EU-Vertretung in der Türkei, unterstützt Bildungsinitiativen und berufliche Entwicklungsprogramme."
        },
        ref2: {
            title: "Yıldız Technische Universität",
            desc: "Führende technische Universität, die akademische Expertise und Forschungsunterstützung für unsere Bildungsprogramme bietet."
        },
        ref3: {
            title: "Ministerium für Familie und Soziale Dienste",
            desc: "Türkische Republik Ministerium, das soziale Wohlfahrt und Familienunterstützung durch berufliche Ausbildungsinitiativen sicherstellt."
        },
        ref4: {
            title: "Ministerium für Verkehr und Infrastruktur",
            desc: "Türkische Republik Ministerium, das Verkehrssysteme und Infrastrukturentwicklung durch spezialisierte Schulungen überwacht."
        },
        ref5: {
            title: "Ethikrat für Staatsbedienstete",
            desc: "Offizieller Ethikrat, der hohe Standards für berufliches Verhalten und Integrität im öffentlichen Dienst sicherstellt."
        },
        ref6: {
            title: "Außenministerium - Direktion für EU-Angelegenheiten",
            desc: "Türkische Republik Ministerium, das internationale Beziehungen und EU-Angelegenheiten durch umfassende Schulungsprogramme verwaltet."
        },
        cta: {
            title: "Bereit, Ihre Lernreise zu beginnen?",
            subtitle: "Treten Sie Tausenden von Fachleuten bei, die ihre Fähigkeiten mit MeLearning verbessert haben",
            button: "Heute Beginnen"
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
                submit: "Nachricht Senden"
            }
        },
        footer: {
            quick_links: "Schnelle Links",
            follow: "Folgen Sie Uns"
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            courses: "Cours",
            references: "Références",
            contact: "Contact"
        },
        hero: {
            title: "Votre Partenaire d'Apprentissage Corporatif",
            subtitle: "Transformez les processus d'apprentissage de votre organisation avec une plateforme économique, facile à utiliser et rapidement déployable. Nos outils de création de contenu facilitent le développement de matériels de formation, offrant une expérience d'apprentissage moderne à vos employés et membres sans effort.",
            explore_courses: "Explorer les Cours",
            learn_more: "En Savoir Plus",
            feature1: {
                title: "Apprentissage en Équipe",
                desc: "Environnements d'apprentissage collaboratifs pour votre organisation"
            },
            feature2: {
                title: "Suivi des Progrès",
                desc: "Analytiques en temps réel et surveillance des performances"
            },
            feature3: {
                title: "Accès Mobile",
                desc: "Apprenez partout, à tout moment avec notre plateforme mobile"
            },
            feature4: {
                title: "Certification",
                desc: "Certificats officiels reconnus par les institutions"
            }
        },
        features: {
            title: "Pourquoi Choisir MeLearning?",
            certified: {
                title: "Programmes Certifiés",
                desc: "Programmes de certification officiels reconnus par les institutions gouvernementales et organismes professionnels."
            },
            instructors: {
                title: "Instructeurs Experts",
                desc: "Apprenez d'experts expérimentés et de spécialistes dans leurs domaines respectifs."
            },
            mobile: {
                title: "Apprentissage Mobile",
                desc: "Accédez à vos cours n'importe où, n'importe quand avec notre plateforme responsive et mobile-friendly."
            },
            tracking: {
                title: "Suivi des Progrès",
                desc: "Surveillez vos progrès d'apprentissage avec des analyses détaillées et des rapports de performance."
            }
        },
        about: {
            title: "À Propos de la Plateforme MeLearning",
            description: "MeLearning est une plateforme d'apprentissage en ligne complète spécialement conçue pour les fonctionnaires, agents de l'État et professionnels du secteur public. Notre plateforme offre des programmes de formation spécialisés qui s'alignent sur les standards nationaux et les meilleures pratiques internationales.",
            feature1: "Conformité aux réglementations de la République de Turquie",
            feature2: "Standards UE et meilleures pratiques",
            feature3: "Éthique et développement professionnel",
            feature4: "Support multilingue"
        },
        stats: {
            learners: "Apprenants Actifs",
            courses: "Cours Disponibles",
            completion: "Taux de Réussite",
            access: "Accès Plateforme"
        },
        benefits: {
            cost_effective: {
                title: "Solution Rentable",
                desc: "Réduisez les coûts de formation jusqu'à 70% par rapport à la formation traditionnelle en classe. Aucun frais de déplacement, de lieu ou de matériel imprimé nécessaire."
            },
            content_management: {
                title: "Gestion de Contenu Facile",
                desc: "Créez, modifiez et gérez le contenu sans effort. Notre interface intuitive facilite la mise à jour des cours, l'ajout de nouveaux matériaux et le maintien du contenu frais et pertinent."
            },
            customizable: {
                title: "Entièrement Personnalisable",
                desc: "Adaptez la plateforme aux besoins spécifiques de votre institution. Branding personnalisé, structures de cours et parcours d'apprentissage conçus pour votre organisation."
            },
            integration: {
                title: "Intégration Transparente",
                desc: "Intégrez-vous à vos systèmes existants - ERP, CRM, systèmes RH et plus. Authentification unique et gestion automatisée des utilisateurs pour une efficacité maximale."
            }
        },
        courses: {
            title: "Cours Vedettes"
        },
        course1: {
            title: "Éthique pour les Fonctionnaires",
            desc: "Formation complète sur les standards éthiques et la conduite professionnelle pour les fonctionnaires."
        },
        course2: {
            title: "Affaires UE et Diplomatie",
            desc: "Compréhension des politiques, procédures et protocoles diplomatiques de l'Union Européenne."
        },
        course3: {
            title: "Infrastructure des Transports",
            desc: "Systèmes de transport modernes, planification d'infrastructure et solutions de mobilité durable."
        },
        references: {
            title: "Nos Partenaires & Références",
            subtitle: "MeLearning est fier d'être soutenu par des institutions gouvernementales et organisations académiques de premier plan"
        },
        ref1: {
            title: "Délégation de l'Union Européenne en Turquie",
            desc: "Représentation officielle de l'UE en Turquie, soutenant les initiatives éducatives et programmes de développement professionnel."
        },
        ref2: {
            title: "Université Technique Yıldız",
            desc: "Université technique de premier plan fournissant expertise académique et soutien recherche pour nos programmes éducatifs."
        },
        ref3: {
            title: "Ministère de la Famille et des Services Sociaux",
            desc: "Ministère de la République de Turquie assurant le bien-être social et le soutien familial par des initiatives de formation professionnelle."
        },
        ref4: {
            title: "Ministère des Transports et de l'Infrastructure",
            desc: "Ministère de la République de Turquie supervisant les systèmes de transport et développement d'infrastructure par formation spécialisée."
        },
        ref5: {
            title: "Conseil d'Éthique pour les Fonctionnaires",
            desc: "Conseil d'éthique officiel assurant des standards élevés de conduite professionnelle et intégrité dans le service public."
        },
        ref6: {
            title: "Ministère des Affaires Étrangères - Direction des Affaires UE",
            desc: "Ministère de la République de Turquie gérant les relations internationales et affaires UE par programmes de formation complets."
        },
        cta: {
            title: "Prêt à Commencer Votre Parcours d'Apprentissage?",
            subtitle: "Rejoignez des milliers de professionnels qui ont amélioré leurs compétences avec MeLearning",
            button: "Commencer Aujourd'hui"
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
                submit: "Envoyer Message"
            }
        },
        footer: {
            quick_links: "Liens Rapides",
            follow: "Suivez-Nous"
        }
    }
};

// Current language
let currentLanguage = localStorage.getItem('language') || 'en';

// Mobile Navigation Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Language switching functionality
function translatePage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    const placeholderElements = document.querySelectorAll('[data-placeholder-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedTranslation(translations[language], key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-placeholder-translate');
        const translation = getNestedTranslation(translations[language], key);
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // Update language button
    const codeMap = {
        'en': 'EN',
        'tr': 'TR',
        'de': 'DE', 
        'fr': 'FR'
    };
    
    document.getElementById('currentLang').textContent = codeMap[language];
    
    // Update document language
    document.documentElement.lang = language;
    
    // Save to localStorage
    localStorage.setItem('language', language);
    currentLanguage = language;
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : null;
    }, obj);
}


// Language Selector (currentLanguage already declared above)

// Translation function
function translatePage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    const placeholderElements = document.querySelectorAll('[data-placeholder-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getNestedTranslation(translations[language], key);
        if (translation) {
            element.textContent = translation;
        }
    });
    
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-placeholder-translate');
        const translation = getNestedTranslation(translations[language], key);
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // Update document language
    document.documentElement.lang = language;
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => {
        return current && current[key] !== undefined ? current[key] : null;
    }, obj);
}

// Initialize page with saved language
document.addEventListener('DOMContentLoaded', () => {
    translatePage(currentLanguage);
});

// Language selector functionality
document.getElementById('langBtn').addEventListener('click', function(e) {
    e.stopPropagation();
    const menu = document.getElementById('langMenu');
    
    if (menu.classList.contains('opacity-0')) {
        menu.classList.remove('opacity-0', 'invisible', 'translate-y-2');
        menu.classList.add('opacity-100', 'visible', 'translate-y-0');
    } else {
        menu.classList.add('opacity-0', 'invisible', 'translate-y-2');
        menu.classList.remove('opacity-100', 'visible', 'translate-y-0');
    }
});

// Handle language selection
document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', function() {
        console.log('Language option clicked:', this.getAttribute('data-lang'));
        const lang = this.getAttribute('data-lang');
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        
        console.log('Translating to:', lang);
        translatePage(lang);
        
        // Update current language display
        document.getElementById('currentLang').textContent = lang.toUpperCase();
        
        // Close menu
        const menu = document.getElementById('langMenu');
        menu.classList.add('opacity-0', 'invisible', 'translate-y-2');
        menu.classList.remove('opacity-100', 'visible', 'translate-y-0');
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('#langBtn') && !e.target.closest('#langMenu')) {
        const menu = document.getElementById('langMenu');
        menu.classList.add('opacity-0', 'invisible', 'translate-y-2');
        menu.classList.remove('opacity-100', 'visible', 'translate-y-0');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .course-card, .reference-card, .about-feature');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form submission
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
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
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat h3');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                if (number) {
                    stat.textContent = '0';
                    animateCounter(stat, number);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Observe stats section
const statsSection = document.querySelector('.about-stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Add loading states for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (this.classList.contains('btn-primary') && !this.href.includes('#')) {
            e.preventDefault();
            const originalText = this.textContent;
            this.textContent = 'Loading...';
            this.style.pointerEvents = 'none';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.pointerEvents = 'auto';
            }, 1000);
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add hover effects to cards
document.querySelectorAll('.feature-card, .course-card, .reference-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Lazy loading for images (if any are added later)
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
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
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Add scroll progress indicator
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #2563eb, #1d4ed8);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Initialize scroll progress
createScrollProgress();

