import React, { useContext, useEffect, useRef } from "react";
import herocowork from "../../assets/images/policy_asset.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MyContext, useAppContext } from "../../utils/contextProvider";
import gsap from "gsap";
import { TransText } from "../../components";

const Policy = () => {
    const { darkMode, selectedLanguage, setSelectedLanguage } = useAppContext();
    const { t } = useTranslation();

    const leftside = useRef(null);
    const rightside = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            leftside.current,
            { x: "-100%", opacity: "0" },
            { x: "0%", duration: 0.5, delay: 0.5, opacity: "1", ease: "power2.out" }
        );
        gsap.fromTo(
            rightside.current,
            { x: "100%", opacity: "0" },
            { x: "0%", duration: 0.5, delay: 0.5, opacity: "1", ease: "power2.out" }
        );
    }, []);
    return (
        <div>

            <div className={`px-4 pt-24 lg:px-16 lg:pt-28 overflow-hidden ${darkMode ? "bg-[#0f0f0f]" : ""} `}>
                <div
                    className={`w-full items-center flex flex-col-reverse md:flex-row lg:flex-row gap-2  ${selectedLanguage == "ar" ? "lg:flex-row-reverse" : ""
                        }`}
                >
                    <div
                        ref={leftside}
                        className="w-full md:w-1/2 lg:w-1/2 px-7 flex flex-col md:gap-2 gap-5 "
                    >
                        <h1 className={`text-2xl text-center md:text-3xl md:text-start lg:text-5xl md:pb-0 py-5 font-bold ${darkMode ? "text-white" : ""}`}>

                            <TransText
                                en="Personal Data Processing Policy"
                                ar="سياسة معالجة البيانات الشخصية"
                                fr="Politique de Traitement des Données Personnelles"
                            />

                        </h1>



                    </div>
                    <div
                        ref={rightside}
                        className="w-full md:w-1/2  lg:w-1/2 flex justify-center md:items-center"
                    >
                        <img loading="lazy" className="w-[80%]" src={herocowork} alt="img" />
                    </div>
                </div>
 {/* Content Section */}
<div className="container mx-auto px-4 py-8">
    <div className="max-w-4xl mx-auto rounded-lg p-8 mb-8">
        <div className="space-y-8">
            {/* Introduction */}
            <section>
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                    <TransText
                        en="Personal Data Processing Policy"
                        ar="سياسة معالجة البيانات الشخصية"
                        fr="Politique de Traitement des Données Personnelles"
                    />
                </h2>
                <p className="text-gray-300">
                    <TransText
                        en="At LionsGEEK, we prioritize the protection of your personal data. In accordance with Moroccan law No. 09-08 on the protection of individuals with regard to the processing of personal data, we are committed to ensuring the security and confidentiality of the information collected on our website (www.lionsgeek.ma)."
                        ar="في LionsGEEK، نعطي أهمية كبيرة لحماية بياناتك الشخصية. وفقًا للقانون المغربي رقم 09-08 المتعلق بحماية الأشخاص فيما يتعلق بمعالجة البيانات الشخصية، نحن ملتزمون بضمان أمان وسرية المعلومات التي تم جمعها على موقعنا الإلكتروني (www.lionsgeek.ma)."
                        fr="Chez LionsGEEK, nous accordons une importance primordiale à la protection de vos données personnelles. Conformément à la loi marocaine n° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel, nous nous engageons à assurer la sécurité et la confidentialité des informations collectées sur notre site web (www.lionsgeek.ma)."
                    />
                </p>
            </section>

            {/* Section 1 */}
            <section>
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                    <TransText en="1. Collection of Personal Data" ar="1. جمع البيانات الشخصية" fr="1. Collecte des données personnelles" />
                </h2>
                <p className="text-gray-300 mb-4">
                    <TransText
                        en="We collect personal data about you only when necessary, such as:"
                        ar="نقوم بجمع البيانات الشخصية الخاصة بك فقط عند الضرورة، مثل:"
                        fr="Nous collectons des données personnelles vous concernant uniquement lorsque cela est nécessaire, notamment :"
                    />
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>
                        <TransText
                            en="When registering for our training or events."
                            ar="عند التسجيل في دوراتنا التدريبية أو أحداثنا."
                            fr="Lors de l'inscription à nos formations ou événements."
                        />
                    </li>
                    <li>
                        <TransText
                            en="When subscribing to our newsletter."
                            ar="عند الاشتراك في نشرتنا الإخبارية."
                            fr="Lors de l'abonnement à notre newsletter."
                        />
                    </li>
                    <li>
                        <TransText
                            en="When using our contact forms."
                            ar="عند استخدام نماذج الاتصال الخاصة بنا."
                            fr="Lors de l'utilisation de nos formulaires de contact."
                        />
                    </li>
                </ul>
                <p className="text-gray-300 mt-4">
                    <TransText
                        en="The types of data collected include, but are not limited to: name, surname, email address, phone number, postal address, and professional or academic information."
                        ar="تشمل أنواع البيانات التي يتم جمعها، على سبيل المثال لا الحصر: الاسم، اللقب، عنوان البريد الإلكتروني، رقم الهاتف، العنوان البريدي، والمعلومات المهنية أو الأكاديمية."
                        fr="Les types de données collectées incluent, sans s'y limiter : nom, prénom, adresse électronique, numéro de téléphone, adresse postale, et informations professionnelles ou académiques."
                    />
                </p>
            </section>

            {/* Section 2 */}
            <section>
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                    <TransText en="2. Purposes of Data Processing" ar="2. أهداف معالجة البيانات" fr="2. Finalités du traitement" />
                </h2>
                <p className="text-gray-300 mb-4">
                    <TransText
                        en="The personal data collected is used for:"
                        ar="يتم استخدام البيانات الشخصية التي تم جمعها من أجل:"
                        fr="Les données personnelles collectées sont utilisées pour :"
                    />
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                    <li>
                        <TransText
                            en="Managing your registrations for our programs and events."
                            ar="إدارة تسجيلاتك في برامجنا وأحداثنا."
                            fr="Gérer vos inscriptions à nos programmes et événements."
                        />
                    </li>
                    <li>
                        <TransText
                            en="Communicating with you about our activities and services."
                            ar="التواصل معك بشأن أنشطتنا وخدماتنا."
                            fr="Communiquer avec vous concernant nos activités et services."
                        />
                    </li>
                    <li>
                        <TransText
                            en="Improving your user experience on our website."
                            ar="تحسين تجربتك على موقعنا الإلكتروني."
                            fr="Améliorer votre expérience utilisateur sur notre site web."
                        />
                    </li>
                    <li>
                        <TransText
                            en="Complying with our legal and regulatory obligations."
                            ar="الامتثال لالتزاماتنا القانونية والتنظيمية."
                            fr="Respecter nos obligations légales et réglementaires."
                        />
                    </li>
                </ul>
            </section>

            {/* Additional sections (Consent, Security, Rights, etc.) */}
            {/* Repeat the same format for the remaining sections */}
        </div>
    </div>
</div>
            </div>



        </div>
    );
};

export default Policy;