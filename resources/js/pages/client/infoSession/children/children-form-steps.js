const KNOWN_GROUP_ORDER = ['child', 'guardian'];

const STEP_TITLES = {
    child: {
        en: 'Child Information',
        fr: "Informations de l'enfant",
        ar: 'معلومات الطفل',
    },
    guardian: {
        en: 'Parent / Guardian',
        fr: 'Parent / tuteur',
        ar: 'الوالد / الوصي',
    },
};

export const groupForField = (field) => {
    const g = (field?.group || '').toString().trim();
    if (g === 'guardian') return 'guardian';
    return g || 'child';
};

export const normalizeSchema = (schema) => {
    const arr = Array.isArray(schema) ? schema : [];
    return arr.filter((f) => f && typeof f.key === 'string' && f.key.trim() !== '');
};

export const getStepTitle = (group, lang = 'en') => {
    const known = STEP_TITLES[group];
    if (known) {
        return known[lang] || known.en;
    }
    const label = group.replace(/_/g, ' ');
    return label.charAt(0).toUpperCase() + label.slice(1);
};

/**
 * Build wizard steps from admin schema, grouped by field `group` in stable order.
 */
export const buildStepsFromSchema = (schema, lang = 'en') => {
    const normalized = normalizeSchema(schema);
    const groupsPresent = [];

    normalized.forEach((field) => {
        const group = groupForField(field);
        if (!groupsPresent.includes(group)) {
            groupsPresent.push(group);
        }
    });

    const orderedGroups = [];
    KNOWN_GROUP_ORDER.forEach((group) => {
        if (groupsPresent.includes(group)) {
            orderedGroups.push(group);
        }
    });
    groupsPresent.forEach((group) => {
        if (!orderedGroups.includes(group)) {
            orderedGroups.push(group);
        }
    });

    return orderedGroups
        .map((group, index) => ({
            number: index + 1,
            group,
            title: getStepTitle(group, lang),
            fields: normalized.filter((f) => groupForField(f) === group),
        }))
        .filter((step) => step.fields.length > 0);
};
