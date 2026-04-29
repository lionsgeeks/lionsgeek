import NotificationModal from '@/components/NotificationModal';
import { useAppContext } from '@/context/appContext';
import { useEffect, useRef, useState } from 'react';
import { router, useForm } from '@inertiajs/react';

export default function BookingModal({ isOpen, onClose, event }) {
    const { selectedLanguage, darkMode } = useAppContext();

    const t = (translations) => translations[selectedLanguage] || translations.en;

    const [showNotification, setShowNotification] = useState(false);
    const [notificationType, setNotificationType] = useState('success');
    const [notificationMessage, setNotificationMessage] = useState('');
    const didRedirectRef = useRef(false);

    const normalizeKey = (key) => {
        if (!key || typeof key !== 'string') return '';
        let k = key.trim();
        k = k.replace(/\s+/gu, '_').replaceAll('.', '_');
        k = k.replace(/[^A-Za-z0-9_]/gu, '_').replace(/_+/gu, '_');
        k = k.replace(/^_+|_+$/g, '');
        return k.toLowerCase();
    };

    const defaultSchema = [
        { key: 'name', type: 'text', required: true, label: { en: 'Name', fr: 'Nom', ar: 'الاسم' } },
        { key: 'email', type: 'email', required: true, label: { en: 'Email', fr: 'Email', ar: 'البريد الإلكتروني' } },
        { key: 'phone', type: 'tel', required: false, label: { en: 'Phone', fr: 'Téléphone', ar: 'رقم الهاتف' } },
        {
            key: 'gender',
            type: 'select',
            required: true,
            label: { en: 'Gender', fr: 'Genre', ar: 'الجنس' },
            options: [
                { value: 'male', en: 'Male', fr: 'Homme', ar: 'ذكر' },
                { value: 'female', en: 'Female', fr: 'Femme', ar: 'أنثى' },
            ],
        },
    ];

    const rawSchema = Array.isArray(event?.booking_form) && event.booking_form.length ? event.booking_form : [];
    const defaultByKey = Object.fromEntries(defaultSchema.map((f) => [f.key, f]));
    const mergeWithDefaults = (form) => {
        const arr = Array.isArray(form) ? form : [];
        const byKey = Object.fromEntries(arr.filter((f) => f?.key).map((f) => [f.key, f]));
        // Force default fields to exist and keep their types.
        const mergedDefaults = defaultSchema.map((f) => ({
            ...f,
            ...(byKey[f.key] || {}),
            key: f.key,
            type: f.type,
            required: f.required,
            options: f.type === 'select' ? (Array.isArray(byKey[f.key]?.options) ? byKey[f.key].options : f.options) : undefined,
            multiple:
                f.type === 'select'
                    ? typeof byKey[f.key]?.multiple === 'boolean'
                        ? byKey[f.key].multiple
                        : f.multiple !== undefined
                          ? f.multiple
                          : true
                    : undefined,
        }));
        const extras = arr.filter((f) => f?.key && !defaultByKey[f.key]);
        return [...mergedDefaults, ...extras];
    };

    const schema = rawSchema.length ? mergeWithDefaults(rawSchema) : defaultSchema;
    const DEFAULT_KEYS = ['name', 'email', 'phone', 'gender'];
    const DEFAULT_KEYS_SET = new Set(DEFAULT_KEYS.map(normalizeKey));

    // De-duplicate any mis-keyed defaults (e.g. "Phone", " phone ", "Gender.")
    // Keep defaults first, then extras, by normalized key.
    const allFields = (() => {
        const schemaArr = Array.isArray(schema) ? schema : [];
        const defaults = DEFAULT_KEYS.map((k) => schemaArr.find((f) => normalizeKey(f?.key) === normalizeKey(k))).filter(Boolean);
        const seen = new Set();
        const out = [];
        const pushUnique = (f) => {
            const nk = normalizeKey(f?.key);
            if (!nk || seen.has(nk)) return;
            seen.add(nk);
            out.push(f);
        };
        defaults.forEach(pushUnique);
        schemaArr.forEach((f) => {
            const nk = normalizeKey(f?.key);
            if (!nk) return;
            if (DEFAULT_KEYS_SET.has(nk)) return; // already represented by defaults
            pushUnique(f);
        });
        return out;
    })();

    const { data, setData, post, processing, reset, errors } = useForm({
        answers: {},
        event_id: event?.id || '',
    });

    useEffect(() => {
        if (event?.id) {
            setData('event_id', event.id);
        }
    }, [event?.id]);

    useEffect(() => {
        const initialAnswers = {};
        allFields.forEach((f) => {
            if (!f?.key) return;
            const normalizedKey = normalizeKey(f.key);
            if (f.type === 'select') {
                // Gender is handled specially (single-choice UI but stored as an array).
                initialAnswers[f.key] = normalizedKey === 'gender' ? [] : f.multiple === false ? null : [];
            } else {
                initialAnswers[f.key] = '';
            }
        });
        setData('answers', initialAnswers);
    }, [event?.id, event?.booking_form]);

    useEffect(() => {
        if (isOpen) {
            // Never show old errors when opening / changing steps
            setShowNotification(false);
            setNotificationType('success');
            setNotificationMessage('');
            didRedirectRef.current = false;
        }
    }, [isOpen, event?.id]);

    // Auto-close + redirect after a successful booking.
    useEffect(() => {
        if (!showNotification) return;
        if (notificationType !== 'success') return;
        if (didRedirectRef.current) return;

        didRedirectRef.current = true;
        // Slight delay so the user sees the success modal.
        const t = window.setTimeout(() => {
            setShowNotification(false);
            onClose?.();
            router.visit('/events', { preserveScroll: false, replace: true });
        }, 900);
        return () => window.clearTimeout(t);
    }, [showNotification, notificationType, onClose]);

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
            if (!didRedirectRef.current) {
                didRedirectRef.current = true;
                onClose?.();
                router.visit('/events', { preserveScroll: false, replace: true });
            }
        }
    };

    const isRtl = selectedLanguage === 'ar';
    const inputClassName = `w-full rounded-2xl border px-4 py-3 text-sm outline-none transition-colors ${
        darkMode
            ? 'bg-white/5 text-white border-white/10 focus:border-white/25 focus:ring-2 focus:ring-white/10'
            : 'bg-white text-black border-black/10 focus:border-black/25 focus:ring-2 focus:ring-black/5'
    } ${isRtl ? 'text-right' : 'text-left'}`;
    const labelClass = isRtl ? 'self-end' : '';
    const bgModal = darkMode ? 'bg-[#0b0b0d] text-white' : 'bg-white text-black';
    const subText = darkMode ? 'text-white/60' : 'text-black/60';
    const cardBorder = darkMode ? 'border-white/10' : 'border-black/10';
    const softSurface = darkMode ? 'bg-white/5' : 'bg-black/5';

    return (
        <>
            <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-[6px] transition-opacity"
                    onClick={onClose}
                    aria-hidden="true"
                />
                <div className="relative flex min-h-screen items-end justify-center p-4 sm:items-center">
                    <form
                        onSubmit={submit}
                        className={`relative w-full max-w-2xl overflow-hidden rounded-3xl ${bgModal} text-left shadow-2xl ring-1 ${
                            darkMode ? 'ring-white/10' : 'ring-black/10'
                        } translate-y-0 scale-100 transition-transform duration-200 ease-out`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div
                            className={`flex items-start justify-between gap-4 px-6 py-5 border-b ${cardBorder}`}
                        >
                            <div className="min-w-0">
                                <h3 className="text-xl font-semibold leading-6 tracking-tight">
                                    {t({ en: 'Book Event', fr: "Réserver l'événement", ar: 'احجز الحدث' })}
                                </h3>
                                <p className={`mt-1 text-sm ${subText}`}>
                                {t({
                                    en: 'Enter your details to book this event. You will receive a confirmation email.',
                                    fr: 'Entrez vos coordonnées pour réserver cet événement. Vous recevrez un email de confirmation.',
                                    ar: 'أدخل تفاصيلك لحجز هذا الحدث. ستتلقى رسالة تأكيد عبر البريد الإلكتروني.',
                                })}
                                </p>
                            </div>
                            <button
                                type="button"
                                onClick={onClose}
                                className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl transition-colors ${softSurface} ${
                                    darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'
                                }`}
                                aria-label="Close"
                            >
                                <span className="text-lg leading-none">×</span>
                            </button>
                        </div>

                        {/* Body */}
                        <div className="max-h-[70vh] overflow-y-auto px-6 py-5">
                            <div className={`rounded-3xl border ${cardBorder} p-4 sm:p-5`}>
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                            {allFields.map((field) => {
                                const key = field?.key;
                                if (!key) return null;
                                const normalizedKey = normalizeKey(key);
                                const isGender = normalizedKey === 'gender';

                                const label =
                                    typeof field.label === 'string'
                                        ? field.label
                                        : field.label && typeof field.label === 'object'
                                          ? t(field.label)
                                          : key;

                                const rawValue = data.answers?.[key];
                                const value = rawValue ?? '';
                                const error = errors?.[`answers.${key}`];

                                if (field.type === 'select') {
                                    const options = Array.isArray(field.options) ? field.options : [];
                                    const selectedValues = Array.isArray(rawValue) ? rawValue : [];
                                    const selectedSingleValue = !Array.isArray(rawValue) && typeof rawValue === 'string' ? rawValue : null;

                                    const toggleValue = (v) => {
                                        // Gender behaves like single-choice even though selects are arrays.
                                        if (isGender) {
                                            const next = selectedValues.includes(v) ? [] : [v];
                                            setData('answers', { ...(data.answers || {}), [key]: next });
                                            return;
                                        }

                                        if (field.multiple === false) {
                                            // Single choice: store a scalar (or null for "none").
                                            const next = selectedSingleValue === v ? null : v;
                                            setData('answers', { ...(data.answers || {}), [key]: next });
                                            return;
                                        }

                                        // Multi choice: store an array of selected values.
                                        const next = selectedValues.includes(v) ? selectedValues.filter((x) => x !== v) : [...selectedValues, v];
                                        setData('answers', { ...(data.answers || {}), [key]: next });
                                    };

                                    // Special clean UI for gender
                                    if (isGender) {
                                        const genderOptions = options;
                                        return (
                                            <div key={key} className="flex w-full flex-col items-start gap-y-2">
                                                <label htmlFor={key} className={`text-sm font-medium ${labelClass}`}>
                                                    {label}{field.required ? <span className="ml-1 text-red-500">*</span> : null}
                                                </label>

                                                <div className="grid w-full grid-cols-2 gap-2" dir={isRtl ? 'rtl' : 'ltr'}>
                                                    {genderOptions.map((opt) => {
                                                        const optValue = opt?.value ?? '';
                                                        const optLabel = (() => {
                                                            if (!opt || typeof opt !== 'object') return optValue;
                                                            if (opt.en || opt.fr || opt.ar) return t(opt);
                                                            if (opt.label && typeof opt.label === 'object') return t(opt.label);
                                                            if (typeof opt.label === 'string') return opt.label;
                                                            return optValue;
                                                        })();

                                                        const active = selectedValues.includes(optValue);
                                                        return (
                                                            <button
                                                                key={optValue}
                                                                type="button"
                                                                onClick={() => toggleValue(optValue)}
                                                                className={`flex items-center justify-center rounded-2xl border px-4 py-3 text-sm font-semibold transition-colors ${
                                                                    active
                                                                        ? 'border-transparent bg-alpha text-black'
                                                                        : darkMode
                                                                          ? 'border-white/10 bg-white/5 hover:bg-white/10'
                                                                          : 'border-black/10 bg-white hover:bg-black/5'
                                                                }`}
                                                            >
                                                                {optLabel}
                                                            </button>
                                                        );
                                                    })}
                                                </div>

                                                {error && <p className="text-red-500 text-xs">{error}</p>}
                                            </div>
                                        );
                                    }

                                    const multiple = field.multiple !== false;
                                    const selectedCount = multiple ? selectedValues.length : selectedSingleValue ? 1 : 0;

                                    return (
                                        <div
                                            key={key}
                                            className={`flex w-full flex-col items-start gap-y-2 ${
                                                DEFAULT_KEYS_SET.has(normalizedKey) ? 'md:col-span-1' : 'md:col-span-2'
                                            }`}
                                        >
                                            <label htmlFor={key} className={`text-sm font-medium ${labelClass}`}>
                                                {label}{field.required ? <span className="ml-1 text-red-500">*</span> : null}
                                            </label>

                                            <div
                                                className={`w-full rounded-2xl border ${
                                                    darkMode ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white'
                                                }`}
                                                dir={isRtl ? 'rtl' : 'ltr'}
                                            >
                                                <div className={`flex items-center justify-between px-4 py-3 text-xs ${subText}`}>
                                                    <span>
                                                        {t({ en: 'Choose options', fr: 'Choisissez des options', ar: 'اختر الخيارات' })}
                                                    </span>
                                                    <span>
                                                        {selectedCount
                                                            ? t({
                                                                  en: `${selectedCount} selected`,
                                                                  fr: `${selectedCount} sélectionné(s)`,
                                                                  ar: `تم اختيار ${selectedCount}`,
                                                              })
                                                            : t({ en: 'None', fr: 'Aucun', ar: 'لا شيء' })}
                                                    </span>
                                                </div>

                                                <div className={`max-h-56 overflow-auto ${darkMode ? 'divide-white/10' : 'divide-black/10'} divide-y`}>
                                                    {options.map((opt) => {
                                                        const optValue = opt?.value ?? '';
                                                        const optLabel = (() => {
                                                            if (!opt || typeof opt !== 'object') return optValue;

                                                            // Back-compat: option stored as {en, fr, ar}
                                                            if (opt.en || opt.fr || opt.ar) return t(opt);

                                                            // New schema: option stored as { value, label: {en, fr, ar} } or { value, label: "..." }
                                                            if (opt.label && typeof opt.label === 'object') return t(opt.label);
                                                            if (typeof opt.label === 'string') return opt.label;

                                                            return optValue;
                                                        })();

                                                        const checked = multiple ? selectedValues.includes(optValue) : selectedSingleValue === optValue;

                                                        return (
                                                            <label
                                                                key={optValue}
                                                                className={`flex cursor-pointer items-center justify-between px-4 py-3 text-sm transition-colors ${
                                                                    darkMode ? 'hover:bg-white/10' : 'hover:bg-black/5'
                                                                }`}
                                                            >
                                                                <span className="truncate">{optLabel}</span>
                                                                <input
                                                                    type={multiple ? 'checkbox' : 'radio'}
                                                                    name={`select-${key}`}
                                                                    checked={checked}
                                                                    onChange={() => toggleValue(optValue)}
                                                                    className="h-4 w-4"
                                                                />
                                                            </label>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {error && <p className="text-red-500 text-xs">{error}</p>}
                                        </div>
                                    );
                                }

                                const inputType = field.type === 'email' ? 'email' : field.type === 'tel' ? 'tel' : 'text';
                                return (
                                    <div key={key} className="flex w-full flex-col items-start gap-y-2">
                                        <label htmlFor={key} className={`text-sm font-medium ${labelClass}`}>
                                            {label}{field.required ? <span className="ml-1 text-red-500">*</span> : null}
                                        </label>
                                        <input
                                            id={key}
                                            className={inputClassName}
                                            type={inputType}
                                            placeholder={getPlaceholder(key) || ''}
                                            value={value}
                                            onChange={(e) => setData('answers', { ...(data.answers || {}), [key]: e.target.value })}
                                            dir={isRtl ? 'rtl' : 'ltr'}
                                        />
                                        {error && <p className="text-red-500 text-xs">{error}</p>}
                                    </div>
                                );
                            })}
                            </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className={`px-6 py-5 border-t ${cardBorder}`}>
                            <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                                    <button
                                        type="button"
                                        onClick={onClose}
                                        className={`inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition-colors sm:w-auto ${softSurface} ${
                                            darkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'
                                        }`}
                                    >
                                        {t({ en: 'Cancel', fr: 'Annuler', ar: 'إلغاء' })}
                                    </button>
                                </div>

                                <button
                                    type="submit"
                                    disabled={processing}
                                    className={`inline-flex w-full items-center justify-center rounded-2xl bg-alpha px-6 py-3 text-center text-sm font-semibold text-black transition-opacity sm:w-auto ${
                                        processing ? 'cursor-not-allowed opacity-60' : 'hover:opacity-95'
                                    }`}
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
