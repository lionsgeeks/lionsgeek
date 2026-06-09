import { useMemo, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { TransText } from '../../../../components/TransText';
import ChildrenNavigationButtons from './ChildrenNavigationButtons';
import ChildrenProgressIndicator from './ChildrenProgressIndicator';
import { buildStepsFromSchema, normalizeSchema } from './children-form-steps';

const requiredMessage = (lang) => {
    if (lang === 'fr') return 'Ce champ est obligatoire';
    if (lang === 'ar') return 'هذا الحقل مطلوب';
    return 'This field is required';
};

export default function ChildrenRegistrationWizard({
    schema,
    darkMode,
    selectedLanguage,
    formationField,
    formationFormat = 'short',
    infoSessionId = null,
}) {
    const steps = useMemo(() => buildStepsFromSchema(schema, selectedLanguage), [schema, selectedLanguage]);
    const normalized = useMemo(() => normalizeSchema(schema), [schema]);

    const initialValues = {};
    normalized.forEach((f) => {
        initialValues[f.key] = '';
    });

    const { data, setData, post, processing, errors } = useForm({
        children_answers: initialValues,
        is_children: true,
        formation_field: formationField || 'coding',
        info_session_id: infoSessionId || '',
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [localErrors, setLocalErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const totalSteps = steps.length;
    const activeStep = steps[currentStep - 1] ?? null;
    const currentFields = activeStep?.fields ?? [];

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

    const validateCurrentStep = () => {
        const nextErrors = {};

        currentFields.forEach((f) => {
            if (f.required) {
                const v = (data.children_answers || {})[f.key];
                if (v === null || v === undefined || String(v).trim() === '') {
                    nextErrors[f.key] = requiredMessage(selectedLanguage);
                }
            }
        });
        setLocalErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleSubmit = () => {
        if (!validateCurrentStep()) return;
        const typeParam = (formationField || 'coding').toLowerCase();
        post(route('participants.store', { type: typeParam }), {
            format: formationFormat,
            preserveScroll: true,
            onSuccess: () => {
                setSubmitted(true);
            },
        });
    };

    const handleNext = () => {
        if (!validateCurrentStep()) return;

        if (currentStep >= totalSteps) {
            handleSubmit();
            return;
        }

        setLocalErrors({});
        setCurrentStep((s) => s + 1);
    };

    const handlePrevious = () => {
        setLocalErrors({});
        setCurrentStep((s) => Math.max(1, s - 1));
    };

    const renderField = (field) => {
        const key = field.key;
        const type = field.type || 'text';
        const value = (data.children_answers || {})[key] ?? '';

        const commonProps = {
            id: key,
            name: key,
            value,
            disabled: processing,
            onChange: (e) => updateField(key, e.target.value),
            className: `w-full rounded-lg border px-3 py-2 text-sm transition-all duration-200 focus:ring-2 focus:ring-alpha focus:border-alpha sm:px-4 sm:py-3 sm:text-base ${
                darkMode
                    ? 'border-gray-600 bg-[#57646e] text-white placeholder-gray-400'
                    : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'
            }`,
        };

        if (type === 'textarea') {
            return <textarea {...commonProps} rows={3} />;
        }

        if (type === 'select') {
            const options = Array.isArray(field.options) ? field.options : [];
            return (
                <select {...commonProps} onChange={(e) => updateField(key, e.target.value)}>
                    <option value="">
                        {selectedLanguage === 'fr' ? 'Choisir...' : selectedLanguage === 'ar' ? 'اختر...' : 'Select...'}
                    </option>
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

    if (totalSteps === 0) {
        return (
            <div
                className={`rounded-xl p-4 sm:p-6 md:p-8 shadow-lg ${darkMode ? 'border border-gray-600 bg-beta' : 'border border-gray-200 bg-white'}`}
            >
                <p className={`text-center text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <TransText
                        en="Registration is not available yet. Please check back later."
                        fr="L'inscription n'est pas encore disponible. Revenez plus tard."
                        ar="التسجيل غير متاح بعد. يرجى المحاولة لاحقاً."
                    />
                </p>
            </div>
        );
    }

    return (
        <>
            <ChildrenProgressIndicator steps={steps} currentStep={currentStep} darkMode={darkMode} />

            <div
                className={`rounded-xl p-4 shadow-lg transition-all duration-300 sm:p-6 md:p-8 ${
                    darkMode ? 'border border-gray-600 bg-beta' : 'border border-gray-200 bg-white'
                }`}
            >
                {submitted ? (
                    <div className="space-y-3 text-center">
                        <h2 className={`text-xl font-bold sm:text-2xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            <TransText en="Submitted successfully" fr="Envoyé avec succès" ar="تم الإرسال بنجاح" />
                        </h2>
                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                            <TransText
                                en="We have received your application. We will contact you soon."
                                fr="Nous avons bien reçu votre candidature. Nous vous contacterons bientôt."
                                ar="لقد توصلنا بطلبك. سنتواصل معك قريباً."
                            />
                        </p>
                    </div>
                ) : (
                    <form
                        autoComplete="off"
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleNext();
                        }}
                        className="space-y-4 sm:space-y-6"
                    >
                        {errors?.general && (
                            <div
                                className={`rounded-lg border p-3 text-sm ${darkMode ? 'border-red-500/40 bg-red-500/10 text-red-200' : 'border-red-200 bg-red-50 text-red-700'}`}
                            >
                                {typeof errors.general === 'string' ? (
                                    errors.general
                                ) : (
                                    <TransText
                                        en="Submission failed. Please check your answers and try again."
                                        fr="Échec de l'envoi. Veuillez vérifier vos réponses et réessayer."
                                        ar="فشل الإرسال. يرجى التحقق من إجاباتك والمحاولة مرة أخرى."
                                    />
                                )}
                            </div>
                        )}

                        <div className="step-content space-y-4 px-2 sm:space-y-6">
                            <div className="text-center">
                                <h2 className={`mb-2 text-xl font-bold sm:text-2xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {activeStep?.title}
                                </h2>
                                <p className={`text-sm sm:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                    <TransText
                                        en="Please fill in all required fields"
                                        fr="Veuillez remplir tous les champs obligatoires"
                                        ar="يرجى ملء جميع الحقول المطلوبة"
                                    />
                                </p>
                                {totalSteps > 1 && (
                                    <p className={`mt-1 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        <TransText en="Step" fr="Étape" ar="خطوة" /> {currentStep}{' '}
                                        <TransText en="of" fr="de" ar="من" /> {totalSteps}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
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
                                        {(localErrors[field.key] || errors?.[field.key] || errors?.[`children_answers.${field.key}`]) && (
                                            <span className="mt-1 block text-xs text-red-500 sm:text-sm">
                                                {localErrors[field.key] || errors?.[field.key] || errors?.[`children_answers.${field.key}`]}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <ChildrenNavigationButtons
                            currentStep={currentStep}
                            totalSteps={totalSteps}
                            onPrevious={handlePrevious}
                            onNext={handleNext}
                            processing={processing}
                            selectedLanguage={selectedLanguage}
                        />
                    </form>
                )}
            </div>
        </>
    );
}
