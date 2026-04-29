import { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { TransText } from '../../../../components/TransText';

const groupForField = (field) => {
    const g = (field?.group || '').toString();
    if (g === 'guardian') return 'guardian';
    return 'child';
};

const normalizeSchema = (schema) => {
    const arr = Array.isArray(schema) ? schema : [];
    return arr.filter((f) => f && typeof f.key === 'string' && f.key.trim() !== '');
};

export default function ChildrenRegistrationWizard({ schema, darkMode, selectedLanguage, formationField }) {
    const normalized = normalizeSchema(schema);
    const childFields = normalized.filter((f) => groupForField(f) === 'child');
    const guardianFields = normalized.filter((f) => groupForField(f) === 'guardian');

    const initialValues = {};
    normalized.forEach((f) => {
        initialValues[f.key] = '';
    });

    const { data, setData, post, processing, errors } = useForm({
        children_answers: initialValues,
        is_children: true,
        formation_field: formationField || 'coding',
    });

    const [step, setStep] = useState(1);
    const [localErrors, setLocalErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [serverMessage, setServerMessage] = useState(null);

    const tLabel = (label) => {
        if (!label) return '';
        if (typeof label === 'string') return label;
        if (typeof label === 'object') {
            return label[selectedLanguage] || label.en || label.fr || label.ar || '';
        }
        return '';
    };

    const updateField = (key, value) => {
        setData((prev) => ({
            ...prev,
            children_answers: {
                ...(prev.children_answers || {}),
                [key]: value,
            },
        }));
    };

    const validateStep = () => {
        const currentFields = step === 1 ? childFields : guardianFields;
        const nextErrors = {};

        currentFields.forEach((f) => {
            if (f.required) {
                const v = (data.children_answers || {})[f.key];
                if (v === null || v === undefined || String(v).trim() === '') {
                    nextErrors[f.key] = 'This field is required';
                }
            }
        });
        setLocalErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleNext = () => {
        if (step === 1) {
            if (validateStep()) setStep(2);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        if (!validateStep()) return;
        setServerMessage(null);
        const typeParam = (formationField || 'coding').toLowerCase();
        post(route('participants.store', { type: typeParam }), {
            preserveScroll: true,
            onSuccess: () => {
                setSubmitted(true);
            },
            onError: () => {
                // Errors will be available in `errors` from useForm,
                // but we also set a simple generic message to avoid “nothing happened”.
                setServerMessage('Submission failed. Please check the highlighted fields.');
            },
        });
    };

    const renderField = (field) => {
        const key = field.key;
        const type = field.type || 'text';
        const value = (data.children_answers || {})[key] ?? '';
        const err = localErrors[key] || (errors?.[`children_answers.${key}`] ?? null);

        const commonProps = {
            id: key,
            name: key,
            value,
            disabled: processing,
            onChange: (e) => updateField(key, e.target.value),
            className: `w-full rounded-lg border px-3 py-2 text-sm transition-all duration-200 focus:ring-2 focus:ring-alpha focus:border-alpha ${
                darkMode ? 'bg-[#57646e] border-gray-600 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
            }`,
        };

        if (type === 'textarea') {
            return <textarea {...commonProps} rows={3} />;
        }

        if (type === 'select') {
            const options = Array.isArray(field.options) ? field.options : [];
            return (
                <select
                    {...commonProps}
                    onChange={(e) => updateField(key, e.target.value)}
                >
                    <option value="">{selectedLanguage === 'fr' ? 'Choisir...' : selectedLanguage === 'ar' ? 'اختر...' : 'Select...'}</option>
                    {options.map((opt) => {
                        const optValue = opt?.value ?? '';
                        const optLabel =
                            typeof opt === 'string'
                                ? opt
                                : opt.label && typeof opt.label === 'object'
                                  ? opt.label[selectedLanguage] || opt.label.en || opt.label.fr || opt.label.ar || optValue
                                  : typeof opt.label === 'string'
                                    ? opt.label
                                    : optValue;
                        return (
                            <option key={optValue} value={optValue}>
                                {optLabel}
                            </option>
                        );
                    })}
                </select>
            );
        }

        const htmlType = type === 'email' ? 'email' : type === 'tel' ? 'tel' : type === 'date' ? 'date' : 'text';
        return <input type={htmlType} {...commonProps} />;
    };

    const currentFields = step === 1 ? childFields : guardianFields;

    return (
        <div className={`rounded-xl p-4 sm:p-6 md:p-8 shadow-lg ${darkMode ? 'bg-beta border border-gray-600' : 'bg-white border border-gray-200'}`}>
            {submitted ? (
                <div className="text-center space-y-3">
                    <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                        <TransText en="Submitted successfully" fr="Envoyé avec succès" ar="تم الإرسال بنجاح" />
                    </h2>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                        <TransText
                            en="We have received your application. We will contact you soon."
                            fr="Nous avons bien reçu votre candidature. Nous vous contacterons bientôt."
                            ar="لقد توصلنا بطلبك. سنتواصل معك قريباً."
                        />
                    </p>
                </div>
            ) : (
                <>
                    {(serverMessage || errors?.general) && (
                        <div className={`mb-4 rounded-lg border p-3 text-sm ${darkMode ? 'border-red-500/40 bg-red-500/10 text-red-200' : 'border-red-200 bg-red-50 text-red-700'}`}>
                            {serverMessage || errors?.general}
                        </div>
                    )}

                    {errors && Object.keys(errors).length > 0 && (
                        <div className={`mb-4 rounded-lg border p-3 text-sm ${darkMode ? 'border-red-500/40 bg-red-500/10 text-red-200' : 'border-red-200 bg-red-50 text-red-700'}`}>
                            <div className="font-semibold mb-2">
                                <TransText en="Please fix these errors:" fr="Veuillez corriger ces erreurs :" ar="يرجى تصحيح هذه الأخطاء:" />
                            </div>
                            <ul className="list-disc pl-5 space-y-1">
                                {Object.entries(errors).map(([k, v]) => (
                                    <li key={k}>
                                        <span className="font-medium">{k}</span>: {String(v)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <div className="mb-6 text-center">
                        <h2 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            <TransText
                                en={step === 1 ? 'Child Information' : 'Parent / Guardian Information'}
                                fr={step === 1 ? "Informations de l'enfant" : 'Informations du parent / tuteur'}
                                ar={step === 1 ? 'معلومات الطفل' : 'معلومات الوالد / الوصي'}
                            />
                        </h2>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} text-sm mt-1`}>
                            <TransText
                                en="Please fill in all required fields"
                                fr="Veuillez remplir tous les champs obligatoires"
                                ar="يرجى ملء جميع الحقول المطلوبة"
                            />
                        </p>
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleNext();
                        }}
                        className="space-y-4"
                    >
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {currentFields.map((field) => (
                        <div key={field.key} className="space-y-1 sm:col-span-2">
                            <label
                                htmlFor={field.key}
                                className={`block text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-700'}`}
                            >
                                {tLabel(field.label || field.key)}
                                {field.required && <span className="ml-1 text-red-500">*</span>}
                            </label>
                            {renderField(field)}
                            {(localErrors[field.key] || errors?.[`children_answers.${field.key}`]) && (
                                <span className="mt-1 block text-xs text-red-500">
                                    {localErrors[field.key] || errors?.[`children_answers.${field.key}`]}
                                </span>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                        {step === 1 ? 'Step 1 of 2' : 'Step 2 of 2'}
                    </div>
                    <div className="flex gap-3">
                        {step === 2 && (
                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                disabled={processing}
                            >
                                <TransText en="Back" fr="Retour" ar="رجوع" />
                            </button>
                        )}
                        <button
                            type="submit"
                            className="rounded-lg bg-alpha px-6 py-2 text-sm font-semibold text-gray-900 hover:bg-beta disabled:opacity-60"
                            disabled={processing}
                        >
                            {processing
                                ? selectedLanguage === 'fr'
                                    ? 'Envoi...'
                                    : selectedLanguage === 'ar'
                                      ? 'جاري الإرسال...'
                                      : 'Submitting...'
                                : step === 1
                                  ? selectedLanguage === 'fr'
                                      ? 'Suivant'
                                      : selectedLanguage === 'ar'
                                        ? 'التالي'
                                        : 'Next'
                                  : selectedLanguage === 'fr'
                                    ? 'Soumettre'
                                    : selectedLanguage === 'ar'
                                      ? 'إرسال'
                                      : 'Submit'}
                        </button>
                    </div>
                </div>
            </form>
                </>
            )}
        </div>
    );
}

