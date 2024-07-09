import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { FaWifi, FaUsers } from "react-icons/fa";
import { PiSecurityCameraDuotone } from "react-icons/pi";


const resources = {
    en: {
        translation: {
            header: {
                "home": "Home",
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

                }
            },
            footer: {

            }
        },
    },
    fr: {
        translation: {
            header: {
                "home": "Accueil",
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

                }


            },
            footer: {

            }
        },
    },
    ar: {
        translation: {
            header: {
                "home": "الرئيسية",
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
                }


            },
            footer: {

            }
        },
    },
};
i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('selectedLanguage'),
        fallbackLng: 'en',
    });

export default i18n;