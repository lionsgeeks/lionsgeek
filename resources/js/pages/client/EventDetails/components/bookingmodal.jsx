import NotificationModal from '@/components/NotificationModal';
import { useAppContext } from '@/context/appContext';
import { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function BookingModal({ isOpen, onClose, event }) {
    const { selectedLanguage, darkMode } = useAppContext();

    const t = (translations) => translations[selectedLanguage] || translations.en;

    const [showNotification, setShowNotification] = useState(false);
    const [notificationType, setNotificationType] = useState('success');
    const [notificationMessage, setNotificationMessage] = useState('');

    const { data, setData, post, processing, reset, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        gender: '',
        secteur_dactivite: '',
        maturite_project: '',
        event_id: event?.id || '',
    });

    useEffect(() => {
        if (event?.id) {
            setData('event_id', event.id);
        }
    }, [event?.id]);

    if (!isOpen) return null;

    const getPlaceholder = (field) => {
        const placeholders = {
            name: t({ en: 'Enter your name', fr: 'Entrez votre nom', ar: 'أدخل اسمك' }),
            email: t({ en: 'Enter your email', fr: 'Entrez votre email', ar: 'أدخل بريدك الإلكتروني' }),
            phone: t({ en: 'Enter phone number', fr: 'Entrez le numéro de téléphone', ar: 'أدخل رقم الهاتف' }),
        };
        return placeholders[field];
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('booking.store'), {
            onSuccess: (page) => {
                setNotificationMessage(page.props.flash?.success || t({ en: 'Booking successful!', fr: 'Réservation réussie !', ar: 'تم الحجز بنجاح!' }));
                setNotificationType('success');
                setShowNotification(true);
                reset();
            },
            onError: (formErrors) => {
                const message =
                    Object.values(formErrors)[0] ||
                    t({ en: 'Error submitting the booking.', fr: 'Erreur lors de la soumission.', ar: 'حدث خطأ أثناء الإرسال.' });
                setNotificationMessage(message);
                setNotificationType('error');
                setShowNotification(true);
            },
        });
    };

    const handleNotificationClose = () => {
        setShowNotification(false);
        if (notificationType === 'success') {
            onClose();
            window.location.href = '/events';
        }
    };

    const maturiteOptions = [
        { value: 'idéation', en: 'Ideation', fr: 'Idéation', ar: 'التصور' },
        { value: 'démarrage', en: 'Startup', fr: 'Démarrage', ar: 'البدء' },
        { value: 'en développement', en: 'In Development', fr: 'En développement', ar: 'قيد التطوير' },
    ];

    const secteurOptions = [
        { value: 'BTP', en: 'BTP: Building and public works, construction', fr: 'BTP : Bâtiment et travaux publics, construction', ar: 'BTP: البناء والأشغال العامة والبناء' },
        { value: 'Santé et action sociale', en: 'Health and social action: Medical, paramedical, social services', fr: 'Santé et action sociale : Services médicaux, paramédicaux, sociaux', ar: 'الصحة والعمل الاجتماعي: الخدمات الطبية والشبه طبية والاجتماعية' },
        { value: 'Finance et assurance', en: 'Finance and insurance: Banking, insurance, investment funds', fr: 'Finance et assurance : Banque, assurance, fonds d\'investissement', ar: 'المالية والتأمين: البنوك والتأمين وصناديق الاستثمار' },
        { value: 'Numérique', en: 'Digital: IT, telecoms, internet, cybersecurity, video games', fr: 'Numérique : Informatique, télécoms, internet, cybersécurité, jeux vidéo', ar: 'الرقمي: المعلوماتية والاتصالات والإنترنت والأمن السيبراني وألعاب الفيديو' },
        { value: 'Tourisme', en: 'Tourism: Hospitality, catering, leisure', fr: 'Tourisme : Hôtellerie, restauration, loisirs', ar: 'السياحة: الفنادق والمطاعم والترفيه' },
        { value: 'Luxe', en: 'Luxury: Creation and sale of luxury products', fr: 'Luxe : Création et vente de produits de luxe', ar: 'الفاخر: إنشاء وبيع منتجات فاخرة' },
        { value: 'Recherche et développement', en: 'Research and development (R&D): Research in various fields such as biology, chemistry, or technologies', fr: 'Recherche et développement (R&D) : Recherche dans divers domaines comme la biologie, la chimie, ou les technologies', ar: 'البحث والتطوير: البحث في مجالات متنوعة مثل الأحياء والكيمياء أو التقنيات' },
        { value: 'Transports et logistique', en: 'Transport and logistics: Air, rail, maritime, logistics, freight transport', fr: 'Transports et logistique : Aérien, ferroviaire, maritime, logistique, transport de marchandises', ar: 'النقل واللوجستيك: الجوي والسكك الحديدية والبحري واللوجستيك ونقل البضائع' },
        { value: 'Art et culture', en: 'Art and culture: Audiovisual, cinema, publishing, arts, shows', fr: 'Art et culture : Audiovisuel, cinéma, édition, arts, spectacles', ar: 'الفن والثقافة: السمعي البصري والسينما والنشر والفنون والعروض' },
        { value: 'Défense et sécurité', en: 'Defense and security: Army, private security', fr: 'Défense et sécurité : Armée, sécurité privée', ar: 'الدفاع والأمن: الجيش والأمن الخاص' },
        { value: 'Environnement et énergie', en: 'Environment and energy: Waste management, renewable energies, water treatment', fr: 'Environnement et énergie : Gestion des déchets, énergies renouvelables, traitement de l\'eau', ar: 'البيئة والطاقة: إدارة النفايات والطاقات المتجددة ومعالجة المياه' },
        { value: 'Événementiel', en: 'Events: Organization of fairs, salons, congresses', fr: 'Événementiel : Organisation de foires, salons, congrès', ar: 'الفعاليات: تنظيم المعارض والصالونات والمؤتمرات' },
        { value: 'Immobilier', en: 'Real estate: Transaction, management, promotion', fr: 'Immobilier : Transaction, gestion, promotion', ar: 'العقارات: المعاملات والإدارة والترويج' },
    ];

    const inputClassName = `border p-2 w-full rounded-lg ${darkMode ? 'bg-[#1a1a1a] text-white border-white/20' : 'border-black text-black'} ${selectedLanguage === 'ar' ? 'text-right' : 'text-left'}`;
    const labelClass = selectedLanguage === 'ar' ? 'self-end' : '';
    const bgModal = darkMode ? 'bg-[#1f1f1f] text-white' : 'bg-white text-black';

    return (
        <>
            <div className="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
                <div className="fixed inset-0 bg-black opacity-10 transition-opacity"></div>
                <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
                    <form
                        onSubmit={submit}
                        className={`relative transform overflow-hidden rounded-lg ${bgModal} text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="absolute top-0 right-0 p-2">
                            <button
                                type="button"
                                onClick={onClose}
                                className="inline-flex items-center rounded-lg p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold">{t({ en: 'Book Event', fr: "Réserver l'événement", ar: 'احجز الحدث' })}</h3>
                            <p className="mb-4 text-sm text-gray-400">
                                {t({
                                    en: 'Enter your details to book this event. You will receive a confirmation email.',
                                    fr: 'Entrez vos coordonnées pour réserver cet événement. Vous recevrez un email de confirmation.',
                                    ar: 'أدخل تفاصيلك لحجز هذا الحدث. ستتلقى رسالة تأكيد عبر البريد الإلكتروني.',
                                })}
                            </p>

                            {['name', 'email', 'phone'].map((field) => (
                                <div key={field} className="mt-3 flex w-full flex-col items-start gap-y-2">
                                    <label htmlFor={field} className={labelClass}>
                                        {t({
                                            en: field[0].toUpperCase() + field.slice(1),
                                            fr: field === 'phone' ? 'Téléphone' : field === 'name' ? 'Nom' : 'Email',
                                            ar: field === 'phone' ? 'رقم الهاتف' : field === 'name' ? 'الاسم' : 'البريد الإلكتروني',
                                        })}
                                    </label>
                                    <input
                                        id={field}
                                        className={inputClassName}
                                        type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                        placeholder={getPlaceholder(field)}
                                        value={data[field]}
                                        onChange={(e) => setData(field, e.target.value)}
                                        dir={selectedLanguage === 'ar' ? 'rtl' : 'ltr'}
                                    />
                                    {errors[field] && <p className="text-red-500 text-xs">{errors[field]}</p>}
                                </div>
                            ))}

                            <div className="mt-3 flex w-full flex-col items-start gap-y-2">
                                <label htmlFor="gender" className={labelClass}>
                                    {t({ en: 'Gender', fr: 'Genre', ar: 'الجنس' })}
                                </label>
                                <select
                                    id="gender"
                                    className={inputClassName}
                                    value={data.gender}
                                    onChange={(e) => setData('gender', e.target.value)}
                                    dir={selectedLanguage === 'ar' ? 'rtl' : 'ltr'}
                                >
                                    <option value="">{t({ en: 'Select gender', fr: 'Sélectionner le genre', ar: 'اختر الجنس' })}</option>
                                    <option value="male">{t({ en: 'Male', fr: 'Homme', ar: 'ذكر' })}</option>
                                    <option value="female">{t({ en: 'Female', fr: 'Femme', ar: 'أنثى' })}</option>
                                </select>
                                {errors.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}
                            </div>
                            <div className="mt-3 flex w-full flex-col items-start gap-y-2">
                                <label htmlFor="secteur_dactivite" className={labelClass}>
                                    {t({ en: 'Sector of Activities', fr: "Secteur d'activité", ar: 'قطاع الأنشطة' })}
                                </label>
                                <select
                                    id="secteur_dactivite"
                                    className={inputClassName}
                                    value={data.secteur_dactivite}
                                    onChange={(e) => setData('secteur_dactivite', e.target.value)}
                                    dir={selectedLanguage === 'ar' ? 'rtl' : 'ltr'}
                                >
                                    <option value="">{t({ en: 'Select Sector', fr: 'Sélectionnez le secteur', ar: 'حدد القطاع' })}</option>
                                    {secteurOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {t(option)}
                                        </option>
                                    ))}
                                </select>
                                {errors.secteur_dactivite && <p className="text-red-500 text-xs">{errors.secteur_dactivite}</p>}
                            </div>
                            <div className="mt-3 flex w-full flex-col items-start gap-y-2">
                                <label htmlFor="maturite_project" className={labelClass}>
                                    {t({ en: 'Project Maturity', fr: 'Maturité du projet', ar: 'نضج المشروع' })}
                                </label>
                                <select
                                    id="maturite_project"
                                    className={inputClassName}
                                    value={data.maturite_project}
                                    onChange={(e) => setData('maturite_project', e.target.value)}
                                    dir={selectedLanguage === 'ar' ? 'rtl' : 'ltr'}
                                >
                                    <option value="">{t({ en: 'Select Project Maturity', fr: 'Sélectionnez la maturité du projet', ar: 'حدد نضج المشروع' })}</option>
                                    {maturiteOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {t(option)}
                                        </option>
                                    ))}
                                </select>
                                {errors.maturite_project && <p className="text-red-500 text-xs">{errors.maturite_project}</p>}
                            </div>

                            <div className="mt-5 flex justify-center gap-3">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className={`inline-flex w-full items-center justify-center rounded-lg bg-alpha px-5 py-2.5 text-center text-sm font-medium text-black transition-colors duration-200 ${processing ? 'cursor-not-allowed opacity-50' : ''}`}
                                >
                                    {processing
                                        ? t({ en: 'Booking...', fr: 'Réservation...', ar: 'جاري الحجز...' })
                                        : t({ en: 'Book Event', fr: 'Réserver', ar: 'احجز' })}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <NotificationModal
                isOpen={showNotification}
                onClose={handleNotificationClose}
                type={notificationType}
                title={
                    notificationType === 'success'
                        ? t({ en: 'Booking Confirmed!', fr: 'Réservation Confirmée !', ar: 'تم تأكيد الحجز!' })
                        : t({ en: 'Booking Error', fr: 'Erreur de réservation', ar: 'خطأ في الحجز' })
                }
                message={notificationMessage}
            />
        </>
    );
}
