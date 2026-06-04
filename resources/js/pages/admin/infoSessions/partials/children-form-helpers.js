export const normalizeI18nLabel = (label) => {
    if (!label) return { en: '', fr: '', ar: '' };
    if (typeof label === 'string') return { en: label, fr: label, ar: label };
    if (typeof label === 'object') {
        return {
            en: label.en ?? '',
            fr: label.fr ?? '',
            ar: label.ar ?? '',
        };
    }
    return { en: '', fr: '', ar: '' };
};

export const emptySelectOption = () => ({
    value: '',
    label: { en: '', fr: '', ar: '' },
});

export const normalizeSelectOption = (option) => ({
    value: option?.value ?? '',
    label: normalizeI18nLabel(option?.label),
});

export const normalizeFieldOptions = (options) => {
    if (!Array.isArray(options)) return [];
    return options.map(normalizeSelectOption);
};

export const normalizeChildrenForm = (form) => {
    if (!Array.isArray(form)) return [];
    return form.map((field) => {
        const next = {
            ...field,
            label: normalizeI18nLabel(field.label),
        };
        if (field.type === 'select') {
            next.options = normalizeFieldOptions(field.options);
        }
        return next;
    });
};

export const getFieldDisplayLabel = (field, lang = 'en') => {
    const label = normalizeI18nLabel(field?.label);
    return label[lang] || label.en || label.fr || label.ar || field?.key || 'Untitled field';
};

export const emptyFieldDraft = () => ({
    key: `field_${Date.now()}`,
    type: 'text',
    required: false,
    group: 'child',
    label: { en: '', fr: '', ar: '' },
});
