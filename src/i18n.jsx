import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { FaWifi, FaUsers } from "react-icons/fa";
import { PiSecurityCameraDuotone } from "react-icons/pi";

const contactUsEn = {
    'title1': `Ready to start?`,
    'title2': `We've got you covered`,
    'paragraphe1': `Have a question?`,
    'paragraphe2': `An idea you're bursting to share? We're all ears! Drop us a line and let's get this conversation started.`,
    'address': `4th floor, Route de Rabat Ain Sbaa Casablanca`,
    'first_name': 'First Name',
    'last_name': 'Last Name',
    'phone_number': 'Phone Number',
    'email': 'Email',
    'message': 'Message',
    'send_message': 'Send Message',
}

const contactUsFr = {
    'title1': `Prêt à commencer ?`,
    'title2': `On est là pour vous accompagner.`,
    'paragraphe1': `Vous avez une question ?`,
    'paragraphe2': `Une idée que vous avez hâte de partager ? Nous sommes à votre écoute ! Envoyez-nous un message et lançons la conversation.`,
    'address': `4ème étage, Route de Rabat Ain Sbaa Casablanca`,
    'first_name': 'Prénom',
    'last_name': 'Nom',
    'phone_number': 'Téléphone',
    'email': 'Email',
    'message': 'Message',
    'send_message': 'Envoyer',
}

const contactUsAr = {
    'title1': `جاهز للبدء؟`,
    'title2': `نحن نوفر لك التغطية`,
    'paragraphe1': `هل لديك سؤال؟`,
    'paragraphe2': `فكرة تتحمس لمشاركتها؟ نحن نرحب بآرائكم! أرسل لنا رسالة لنبدأ هذه المحادثة.`,
    'address': `الطابق الرابع ، طريق الرباط عين السبع الدار البيضاء`,
    'first_name': 'الاسم الأول',
    'last_name': 'اللقب',
    'phone_number': 'رقم الهاتف ',
    'email': 'البريد الإلكتروني ',
    'message': 'الرسالة ',
    'send_message': 'إرسال رسالة ',
}


const resources = {
    en: {
        translation: {
            header: {
                "home": "Home",
                "pro": "Services",
                "formation": "Formation",
                "coding": "Learn to code",
                "media": "Master media arts",
                "coworking": "Coworking",
                "events": "Events",
                "about": "About",
                "gallerie": "Gallerie",
                "contact_us": "Contact Us",
                "who_we_are": 'Who we are',
                "blog": 'Blog'
            },
            main: {
                coworking: {
                    section1: {
                        title: {
                            first: "A",
                            second: "Free Coworking",
                            third: "Space For Your Life Goals"
                        },
                        description: "Welcome to our free coworking space, a quiet and safe haven designed to inspire productivity and creativity. Here, you can work on your ideas, study, and connect with like-minded individuals. Whether you're a freelancer, student, or entrepreneur, our space offers the perfect environment to focus and collaborate. Join us and experience a supportive community where innovation and networking thrive.",
                        button: "Join Us"
                    },
                    section2: {
                        titleSection: {
                            first: "Services",
                            second: "Our Included Services"
                        },
                        cards: {
                            wifi: {
                                title: "High-Speed internet",
                                description: "Our workspace offers a cutting-edge high-speed internet service designed to meet the demanding needs of businesses and individuals in today's fast-paced degital landscape"
                            },
                            Photography: {
                                title: "Photography Studio",
                                description: "photography studio, perfect for capturing high-quality images of yourself or your products, enhancing your branding and marketing efforts."
                            },
                            Podcast: {
                                title: "Podcast Studio",
                                description: "Our coworking space features a dedicated podcast studio, providing a quiet, well-equipped environment for recording high-quality audio, ensuring your podcast sounds professional and polished."
                            },
                            Recreation: {
                                title: "Recreation Area",
                                description: "Our coworking space includes a vibrant recreation area, providing a relaxing environment for unwinding or socializing, enhancing work-life balance and fostering a positive community atmosphere."
                            },
                            Networking: {
                                title: "Networking",
                                description: "Our coworking space offers unparalleled networking opportunities, connecting you with professionals and collaborators, fostering innovation, idea exchange, and growth in a dynamic environment."
                            },
                            Security: {
                                title: "High Security",
                                description: "Our coworking space ensures top-notch security, prioritizing your safety and well-being, allowing you to work confidently and focus on your tasks without worry in a secure environment."
                            },
                        }

                    },
                    section3: {
                        title: {
                            first: "Workspace",
                            second: "Explore Our Space"
                        }
                    },
                    section4: {
                        title: {
                            first: "Testimonials",
                            second: "People Who Already Love Us"
                        }

                    },

                },
                lionsgeekpro: {
                    header: {
                        "title": 'Feeling overwhelmed? We offer a range of services to streamline your operations, boost efficiency, and help you achieve your goals.'
                    },
                    firstsection: {
                        "first-title": "OUR SERVICES",
                        "title1": "Web Development",
                        "title2": "Website Design and Development",
                        "desc1": "Creation and redesign of websites to improve user experience and communication of NGO missions",
                        "title3": "Maintenance and Technical Support",
                        "desc3": "Ongoing support and regular updates to ensure the smooth functioning of websites",
                        "title4": "Web and Mobile Application Development",
                        "desc4": " Custom solutions for volunteer and donor management",
                    },
                    Secondsection: {
                        "title1": "Audiovisual Production",
                        "title2": "Institutional Films",
                        "desc1": "Design films to present the missions and impacts of NGOs",
                        "title3": "Viral Videos",
                        "desc3": "Production of engaging videos designed to be shared widely on social networks",
                        "title4": "Podcasts",
                        "desc4": " Create podcasts to discuss relevant topics and engage a wide audience",
                        "title5": "Event Coverage",
                        "desc5": " Professional video and photography to document events",
                        "title6": "Live Social Media Broadcasts",
                        "desc6": " Organize live broadcasts for real-time events and interactive sessions",
                    },
                    section3: {
                        "title1": "Digital Marketing",
                        "title2": "User Generated Content (UGC)",
                        "desc1": "Training on creating and using user-generated content to increase community engagement",
                        "title3": "Social Media Management",
                        "desc3": "Develop customized strategies and manage content to optimize online presence",
                        "title4": "SEO and Content Marketing",
                        "desc4": "SEO audits and content strategies to improve search engine visibility",
                        "title5": "Online Advertising",
                        "desc5": "Create, manage, and optimize online advertising campaigns",
                    },
                    section4: {
                        "title1": "Events and Hackathons",
                        "title2": "Organizing Hackathons",
                        "desc1": "Plan and manage hackathons to stimulate innovation and find technological solutions to NGO challenges.",
                        "title3": "Workshops and Trainings",
                        "desc3": "Training sessions to improve the technical skills of NGO volunteers and members",
                    }

                },
                Events: {
                    "title": "Inovation & Inspiration ",
                    "desc": "Join our tech innovation events and ignite your creativity. Be inspired by visionary ideas and transform your perspective. Discover new possibilities and expand your horizons. ",
                    "Title1": "Events",
                    "Desc1": "Discover Our Events",
                    "button": "Get your ticket",

                },
                about: {
                  section1: {
                    title: {
                      first: "What is",
                      second: "LionsGeek?",
                    },
                    description:
                      "Welcome to our free coworking space, a quiet and safe haven designed to inspire productivity and creativity. Here, you can work on your ideas, study, and connect with like-minded individuals. Whether you're a freelancer, student, or entrepreneur, our space offers the perfect environment to focus and collaborate. Join us and experience a supportive community where innovation and networking thrive.",
                    button: "See More",
                  },
        
                  section2: {
                    title: {
                      first: "Formations",
                      second:
                        "Free training and mentorship to help you thrive in the tech and media industries.",
                    },
                    coding: {
                      title: "Coding",
                      description: "",
                    },
                    media: {
                      title: "Media",
                      description: "",
                    },
                  },
        
                  section3: {
                    title: {
                      first: "Status",
                      second:
                        "Our stats showcase the milestones achieved by our dedicated community and our commitment to positive change.",
                    },
                    numbers: {
                      firststatus: {
                        name: "999",
                        description: "Students",
                      },
                      secondstatus: {
                        name: "999",
                        description: "Coachs",
                      },
        
                      thirdstatus: {
                        name: "999",
                        description: "Graduated students",
                      },
                    },
                  },
        
                  section4: {
                    title: {
                      first: "Press",
                      second: "",
                    },
                    cards: {
                      firstcard: {
                        title: "2M",
                        description: "CEO",
                      },
                      secondcard: {
                        title: "2M",
                        description: "CEO",
                      },
                      thirdcard: {
                        title: "2M",
                        description: "CEO",
                      },
                      fourthcard: {
                        title: "2M",
                        description: "CEO",
                      },
                    },
                  },
                  section5: {
                    title: {
                      name: "Partners",
                      description: "Develop a future-ready workforce.",
                    },
                  },
                },
                contactUs: contactUsEn
            },
            footer: {
                part1: {
                    title: "Courses",
                    phrase1: "Coding",
                    phrase2: "Media"
                },
                part2: {
                    title: "Contact",
                    area1: {
                        title: "Email:",
                        content: "contact@lionsgeek.ma"
                    },
                    area2: {
                        title: "Phone Number:",
                        content: "+212 522 662 660"
                    },
                },
                part3: {
                    title: "STAY IN TOUCH",
                    input: "Type your email",
                    button: "SIGN UP"
                }
            }
        },
    },
    fr: {
        translation: {
            header: {
                "home": "Accueil",
                "pro": "Services",
                "formation": "Formation",
                "coding": "Apprenez à coder",
                "media": "Maîtriser les arts médiatiques",
                "coworking": "Coworking",
                "events": "Événements",
                "about": "À propos",
                "gallerie": "Galerie",
                "contact_us": "Contactez-nous",
                "who_we_are": 'Qui sommes-nous',
                "blog": 'Blog'
            },
            main: {
                coworking: {
                    section1: {
                        title: {
                            first: "Un",
                            second: "Espace de Coworking Gratuit",
                            third: "Pour Vos Objectifs de Vie"
                        },
                        description: "Bienvenue dans notre espace de coworking gratuit, un havre de paix et de sécurité conçu pour inspirer productivité et créativité. Ici, vous pouvez travailler sur vos idées, étudier et vous connecter avec des personnes partageant les mêmes idées. Que vous soyez freelance, étudiant ou entrepreneur, notre espace offre l'environnement idéal pour se concentrer et collaborer. Rejoignez-nous et découvrez une communauté solidaire où l'innovation et le réseautage prospèrent.",
                        button: "Rejoignez-nous"
                    },
                    section2: {
                        titleSection: {
                            first: "Services",
                            second: "Nos Services Inclus"
                        },
                        cards: {
                            wifi: {
                                title: "Internet Haut Débit",
                                description: "Notre espace de travail offre un service Internet haut débit de pointe conçu pour répondre aux besoins exigeants des entreprises et des particuliers dans le paysage numérique rapide d'aujourd'hui."
                            },
                            Photography: {
                                title: "Studio de Photographie",
                                description: "Studio de photographie, parfait pour capturer des images de haute qualité de vous-même ou de vos produits, améliorant ainsi vos efforts de branding et de marketing."
                            },
                            Podcast: {
                                title: "Studio de Podcast",
                                description: "Notre espace de coworking dispose d'un studio de podcast dédié, offrant un environnement calme et bien équipé pour enregistrer un audio de haute qualité, garantissant que votre podcast sonne professionnel et soigné."
                            },
                            Recreation: {
                                title: "Espace de Récréation",
                                description: "Notre espace de coworking comprend une zone de récréation dynamique, offrant un environnement relaxant pour se détendre ou socialiser, améliorant l'équilibre travail-vie et favorisant une atmosphère communautaire positive."
                            },
                            Networking: {
                                title: "Réseautage",
                                description: "Notre espace de coworking offre des opportunités de réseautage inégalées, vous connectant avec des professionnels et des collaborateurs, favorisant l'innovation, l'échange d'idées et la croissance dans un environnement dynamique."
                            },
                            Security: {
                                title: "Haute Sécurité",
                                description: "Notre espace de coworking garantit une sécurité de premier ordre, priorisant votre sécurité et votre bien-être, vous permettant de travailler en toute confiance et de vous concentrer sur vos tâches sans souci dans un environnement sécurisé."
                            }
                        }
                    },
                    section3: {
                        title: {
                            first: "Espace de Travail",
                            second: "Explorez Notre Espace"
                        }
                    },
                    section4: {
                        title: {
                            first: "Témoignages",
                            second: "Les Gens Qui Nous Aiment Déjà"
                        }
                    }
                },
                galerie: {
                    event: {
                        tile: "EVENT",
                        description: "jneijnfjjjn"
                    },
                    cowork: {
                        tile: "COWORKING",
                        description: "jneijnfjjjn"
                    },
                    coding: {
                        tile: "CODING",
                        description: "jneijnfjjjn"
                    },
                    media: {
                        tile: "MEDIA",
                        description: "jneijnfjjjn"
                    },
                    extra: {
                        tile: "EXTRA",
                        description: "jneijnfjjjn"
                    },

                },

                lionsgeekpro: {
                    header: {
                        "title": 'Vous vous sentez submergé ? Nous proposons une gamme de services pour rationaliser vos opérations, améliorer le fficacité et vous aider à atteindre vos objectifs'
                    },
                    firstsection: {
                        "first-title": "NOS SERVICES",
                        "title1": "Développement Web",
                        "title2": "Conception et développement de sites Web",
                        "desc1": "Création et refonte de sites Web pour améliorer l'expérience utilisateur et la communication des missions des ONG",
                        "title3": "Maintenance et Support Technique",
                        "desc3": "Support continu et mises à jour régulières pour garantir le bon fonctionnement des sites Web",
                        "title4": "Développement d'Applications Web et Mobiles",
                        "desc4": "Solutions sur mesure pour la gestion des bénévoles et des donateurs",
                    },
                    Secondsection: {
                        "title1": "Production Audiovisuelle",
                        "title2": "Films Institutionnels",
                        "desc1": "Conception de films pour présenter les missions et les impacts des ONG",
                        "title3": "Vidéos Virales",
                        "desc3": "Production de vidéos engageantes destinées à être partagées massivement sur les réseaux sociaux",
                        "title4": "Podcasts",
                        "desc4": " Création de podcasts pour discuter de sujets pertinents et engager un large public",
                        "title5": "Couverture d’Événements",
                        "desc5": " Captation vidéo et photographie professionnelle pour documenter les événements.",
                        "title6": "Live sur les Réseaux Sociaux",
                        "desc6": "  Organisation de diffusions en direct pour des événements en temps réel et des sessions interactivesc",
                    },
                    section3: {
                        "title1": "Marketing Digital",
                        "title2": "Création de Contenu Utilisateur (UGC)",
                        "desc1": "Formation à la création et à l'utilisation de contenu généré par les utilisateurs pour augmenter l'engagement communautaire.",
                        "title3": "Gestion des Réseaux Sociaux",
                        "desc3": "Développement de stratégies sur mesure et gestion de contenu pour optimiser la présence en ligne",
                        "title4": "SEO et Marketing de Contenu",
                        "desc4": " Audits SEO et stratégies de contenu pour améliorer la visibilité sur les moteurs de recherche.",
                        "title5": "Publicité en Ligne",
                        "desc5": " Création, gestion et optimisation de campagnes publicitaires en ligne",
                    },
                    section3: {
                        "title1": "Marketing Digital",
                        "title2": "Création de Contenu Utilisateur (UGC)",
                        "desc1": "Formation à la création et à l'utilisation de contenu généré par les utilisateurs pour augmenter l'engagement communautaire.",
                        "title3": "Gestion des Réseaux Sociaux",
                        "desc3": "Développement de stratégies sur mesure et gestion de contenu pour optimiser la présence en ligne",
                        "title4": "SEO et Marketing de Contenu",
                        "desc4": " Audits SEO et stratégies de contenu pour améliorer la visibilité sur les moteurs de recherche.",
                        "title5": "Publicité en Ligne",
                        "desc5": " Création, gestion et optimisation de campagnes publicitaires en ligne",
                    },
                    section4: {
                        "title1": "Événements et Hackathons",
                        "title2": "Organisation de Hackathons",
                        "desc1": "Planification et gestion de hackathons pour stimuler l'innovation et trouver des solutions technologiques aux défis des ONG",
                        "title3": "Ateliers et Formations",
                        "desc3": "Sessions de formation pour améliorer les compétences techniques des bénévoles et des membres des ONG.",
                    }
                },
                Events: {
                    "title": "Innovation et Inspiration    ",
                    "desc": "Participez à nos événements d'innovation technologique et stimulez votre créativité. Inspirez-vous d'idées visionnaires et transformez votre perspective. Découvrez de nouvelles possibilités et élargissez vos horizons .",
                    "Title1": "Événements",
                    "Desc1": "Découvrez nos événements",
                    "button": "prends ton billett",

                },
                about: {
                  section1: {
                    title: {
                      first: "Qu'est-ce que",
                      second: "LionsGeek?",
                    },
                    description:
                      "Bienvenue dans notre espace de coworking gratuit, un havre de paix et de sécurité conçu pour inspirer la productivité et la créativité. Ici, vous pouvez travailler sur vos idées, étudier et vous connecter avec des personnes partageant les mêmes idées. Que vous soyez freelance, étudiant ou entrepreneur, notre espace offre l'environnement parfait pour se concentrer et collaborer. Rejoignez-nous et découvrez une communauté de soutien où l'innovation et le réseautage prospèrent.",
                    button: "Voir Plus",
                  },
        
                  section2: {
                    title: {
                      first: "Formations",
                      second:
                        "Formation et mentorat gratuits pour vous aider à prospérer dans les industries de la technologie et des médias.",
                    },
                    coding: {
                      title: "Codage",
                      description: "",
                    },
                    media: {
                      title: "Média",
                      description: "",
                    },
                  },
        
                  section3: {
                    title: {
                      first: "Statut",
                      second:
                        "Nos statistiques illustrent les jalons atteints par notre communauté dévouée et notre engagement envers le changement positif.",
                    },
                    numbers: {
                      firststatus: {
                        name: "999",
                        description: "étudiants",
                      },
                      secondstatus: {
                        name: "999",
                        description: "entraîneurs",
                      },
        
                      thirdstatus: {
                        name: "999",
                        description: "étudiants diplômés",
                      },
                    },
                  },
        
                  section4: {
                    title: {
                      first: "Presse",
                      second: "",
                    },
                    cards: {
                      firstcard: {
                        title: "2M",
                        description: "PDG",
                      },
                      secondcard: {
                        title: "2M",
                        description: "PDG",
                      },
                      thirdcard: {
                        title: "2M",
                        description: "PDG",
                      },
                      fourthcard: {
                        title: "2M",
                        description: "PDG",
                      },
                    },
                  },
                  section5: {
                    title: {
                      name: "Partenaires",
                      description: "Développer une main-d'œuvre prête pour l'avenir.",
                    },
                  },
                },


                contactUs: contactUsFr

            },
            footer: {
                part1: {
                    title: "Cours", // Courses
                    phrase1: "Codage", // Coding
                    phrase2: "Média", // Media
                },
                part2: {
                    title: "Contact", // Contact
                    area1: {
                        title: "Email :", // Email:
                        content: "contact@lionsgeek.ma"
                    },
                    area2: {
                        title: "Numéro de téléphone :", // Phone Number:
                        content: "+212 522 662 660"
                    },
                },
                part3: {
                    title: "RESTEZ CONNECTÉ", // STAY IN TOUCH
                    input: "Tapez votre email", // Type your email
                    button: "INSCRIRE", // SIGN UP
                }
            }
        },
    },
    ar: {
        translation: {
            header: {
                "home": "الرئيسية",
                "pro": "خدمات",
                "formation": "التكوين",
                "coding": "تعلم البرمجة",
                "media": "إتقان فنون الإعلام",
                "coworking": "العمل المشترك",
                "events": "الفعاليات",
                "about": "حول",
                "gallerie": "معرض",
                "contact_us": "اتصل بنا",
                "who_we_are": 'من نحن',
                "blog": 'مدونة'
            },
            main: {
                coworking: {
                    section1: {
                        title: {
                            first: "مساحة",
                            second: "عمل مشترك مجاني",
                            third: "لأهدافك في الحياة"
                        },
                        description: "مرحبا بكم في مساحة العمل المشترك المجانية الخاصة بنا، ملاذ هادئ وآمن مصمم لإلهام الإنتاجية والإبداع. هنا، يمكنك العمل على أفكارك والدراسة والتواصل مع أشخاص متشابهين في التفكير. سواء كنت تعمل لحسابك الخاص أو طالبًا أو رائد أعمال، فإن مساحتنا توفر البيئة المثالية للتركيز والتعاون. انضم إلينا واختبر مجتمعًا داعمًا حيث يزدهر الابتكار والتشبيك.",
                        button: "انضم إلينا"
                    },
                    section2: {
                        titleSection: {
                            first: "خدمات",
                            second: "خدماتنا المتضمنة"
                        },
                        cards: {
                            wifi: {
                                title: "إنترنت عالي السرعة",
                                description: "توفر مساحة العمل الخاصة بنا خدمة إنترنت عالية السرعة مصممة لتلبية الاحتياجات المتطلبة للشركات والأفراد في المشهد الرقمي السريع الوتيرة اليوم."
                            },
                            Photography: {
                                title: "استوديو تصوير",
                                description: "استوديو تصوير مثالي لالتقاط صور عالية الجودة لنفسك أو لمنتجاتك، مما يعزز جهود العلامة التجارية والتسويق الخاصة بك."
                            },
                            Podcast: {
                                title: "استوديو بودكاست",
                                description: "تتميز مساحة العمل المشترك لدينا باستوديو بودكاست مخصص، يوفر بيئة هادئة ومجهزة تجهيزًا جيدًا لتسجيل صوت عالي الجودة، مما يضمن صوتًا احترافيًا مصقولًا لبودكاست الخاص بك."
                            },
                            Recreation: {
                                title: "منطقة الترفيه",
                                description: "تتضمن مساحة العمل المشترك الخاصة بنا منطقة ترفيه نابضة بالحياة، توفر بيئة مريحة للاسترخاء أو التواصل الاجتماعي، وتعزيز التوازن بين العمل والحياة الشخصية وتعزيز أجواء مجتمعية إيجابية."
                            },
                            Networking: {
                                title: "التواصل",
                                description: "تقدم مساحة العمل المشترك الخاصة بنا فرصًا لا مثيل لها للتنظيم الشبكي، حيث تتيح لك التواصل مع المهنيين والمتعاونين، وتعزز الابتكار وتبادل الأفكار والنمو في بيئة ديناميكية."
                            },
                            Security: {
                                title: "أمن عالي",
                                description: "تضمن مساحة العمل المشترك الخاصة بنا أعلى مستوى من الأمان، مع إعطاء الأولوية لسلامتك ورفاهيتك، مما يتيح لك العمل بثقة والتركيز على مهامك دون قلق في بيئة آمنة."
                            },
                        }
                    },
                    section3: {
                        title: {
                            first: "مساحة العمل",
                            second: "استكشف مساحتنا"
                        }
                    },
                    section4: {
                        title: {
                            first: "شهادات",
                            second: "الأشخاص الذين يحبوننا بالفعل"
                        }
                    },
                },
                lionsgeekpro: {
                    header: {
                        "title": 'تشعر بالإرهاق؟ نحن نقدم مجموعة من الخدمات لتبسيط عملياتك وتعزيز الكفاءة ومساعدتك على تحقيق أهدافك.'
                    },
                    firstsection: {
                        "first-title": "خدماتنا",
                        "title1": "تطوير الويب",
                        "title2": "تصميم وتطوير مواقع الويب",
                        "desc1": "إنشاء وإعادة تصميم مواقع الويب لتحسين تجربة المستخدم والتواصل برسائل المنظمات غير الحكومية",
                        "title3": "الصيانة والدعم الفني",
                        "desc3": "دعم مستمر وتحديثات منتظمة لضمان حسن سير عمل مواقع الويب",
                        "title4": "تطوير تطبيقات الويب والجوال",
                        "desc4": "حلول مخصصة لإدارة المتطوعين والجهات المانحة",
                    },
                    Secondsection: {
                        "title1": "الإنتاج السمعي البصري",
                        "title2": "أفلام مؤسسية",
                        "desc1": "تصميم أفلام لعرض مهام ومؤثرات المنظمات غير الحكومية",
                        "title3": "فيديوهات فيروسية",
                        "desc3": "إنتاج فيديوهات جذابة مخصصة للمشاركة على نطاق واسع على مواقع التواصل الاجتماعي",
                        "title4": "بودكاست",
                        "desc4": " إنشاء بودكاست لمناقشة الموضوعات ذات الصلة وجذب جمهور عريض",
                        "title5": "تغطية الحدث",
                        "desc5": " تصوير فيديو احترافي وتصوير فوتوغرافي لتوثيق الأحداث",
                        "title6": "البث المباشر على مواقع التواصل الاجتماعي",
                        "desc6": "  تنظيم بث مباشر للأحداث في الوقت الفعلي والجلسات التفاعلية",
                    },
                    section3: {
                        "title1": "التسويق الرقمي",
                        "title2": " إنشاء محتوى المستخدم (UGC)",
                        "desc1": "تدريب على إنشاء واستخدام محتوى من إنشاء المستخدم لزيادة مشاركة المجتمع.",
                        "title3": "إدارة وسائل التواصل الاجتماعي",
                        "desc3": "تطوير استراتيجيات مخصصة وإدارة المحتوى لتحسين التواجد عبر الإنترنت",
                        "title4": "SEO وتسويق المحتوى:",
                        "desc4": "عمليات تدقيق SEO واستراتيجيات المحتوى لتحسين الرؤية على محركات البحث.",
                        "title5": "الإعلانات عبر الإنترنت",
                        "desc5": "إنشاء وإدارة وتحسين حملات الإعلانات عبر الإنترنت",
                    },
                    section4: {
                        "title1": "الأحداث والهاكاثون",
                        "title2": "تنظيم الهاكاثون:",
                        "desc1": "التخطيط وإدارة الهاكاثون لتحفيز الابتكار وإيجاد حلول تقنية لتحديات المنظمات غير الحكومية.",
                        "title3": "الورش والدورات التدريبية",
                        "desc3": "جلسات تدريبية لتحسين المهارات التقنية للمتطوعين وأعضاء المنظمات غير الحكومية",
                    }
                },
                Events: {
                    "title": "الابتكار والإلهام ",
                    "desc": "نضم إلى فعاليات الابتكار التكنولوجي لدينا وأطلق العنان لإبداعك. استلهم من الأفكار الرؤيوية وغير وجهة نظرك. اكتشف إمكانيات جديدة ووسّع آفاقك ",
                    "Title1": "الأحداث",
                    "Desc1": "اكتشف أحداثنا",
                    "button": "احصل على تذكرتك",
                },
                about: {
                  section1: {
                    title: {
                      first: "ما هي",
                    },
                    description:
                      "مرحبًا بكم في مساحة العمل المشتركة المجانية الخاصة بنا، وهي ملاذ هادئ وآمن مصمم لتحفيز الإنتاجية والإبداع. هنا، يمكنك العمل على أفكارك، الدراسة، والتواصل مع الأفراد الذين يشاركونك نفس الاهتمامات. سواء كنت تعمل بشكل حر، أو طالبًا، أو رائد أعمال، فإن مساحتنا توفر البيئة المثالية للتركيز والتعاون. انضم إلينا واكتشف مجتمعًا داعمًا حيث تزدهر الابتكار والشبكات.",
                    button: "رؤية المزيد",
                  },
        
                  section2: {
                    title: {
                      first: "التدريبات",
                      second:
                        "تدريب ومراقبة مجانية لمساعدتك على الازدهار في صناعات التكنولوجيا والإعلام.",
                    },
                    coding: {
                      title: "البرمجة",
                      description: "",
                    },
                    media: {
                      title: "الإعلام",
                      description: "",
                    },
                  },
        
                  section3: {
                    title: {
                      first: "الحالة",
                      second:
                        "تعكس إحصائياتنا الإنجازات التي حققتها مجتمعنا الملتزم والتزامنا بالتغيير الإيجابي.",
                    },
                    numbers: {
                      firststatus: {
                        name: "999",
                        description: "طالب",
                      },
                      secondstatus: {
                        name: "999",
                        description: "مدربين",
                      },
        
                      thirdstatus: {
                        name: "999",
                        description: "طلاب متخرجين",
                      },
                    },
                  },
        
                  section4: {
                    title: {
                      first: "الصحافة",
                      second: "",
                    },
                    cards: {
                      firstcard: {
                        title: "2M",
                        description: "المدير التنفيذي",
                      },
                      secondcard: {
                        title: "2M",
                        description: "المدير التنفيذي",
                      },
                      thirdcard: {
                        title: "2M",
                        description: "المدير التنفيذي",
                      },
                      fourthcard: {
                        title: "2M",
                        description: "المدير التنفيذي",
                      },
                    },
                  },
                  section5: {
                    title: {
                      name: "الشركاء",
                      description: "تطوير قوة عاملة جاهزة للمستقبل.",
                    },
                  },
                },


                contactUs: contactUsAr

            },
            footer: {
                part1: {
                    title: "دورات",
                    phrase1: "الترميز",
                    phrase2: "وسائط الإعلام",
                },
                part2: {
                    title: "اتصل بنا",
                    area1: {
                        title: ":البريد الإلكتروني",
                        content: "contact@lionsgeek.ma"
                    },
                    area2: {
                        title: ":رقم الهاتف",
                        content: "+212 522 662 660"
                    },
                },
                part3: {
                    title: "ابق على اتصال",
                    input: "اكتب بريدك الالكتروني",
                    button: "اشترك",
                }
            }
        },
    },
}
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('selectedLanguage'),
        fallbackLng: 'fr',
    });

export default i18n;
