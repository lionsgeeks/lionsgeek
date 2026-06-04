import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';
import {
    emptyFieldDraft,
    emptySelectOption,
    normalizeFieldOptions,
    normalizeI18nLabel,
    normalizeSelectOption,
} from './children-form-helpers';

const LANG_TABS = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'Français' },
    { value: 'ar', label: 'العربية' },
];

export function ChildrenFormFieldModal({ open, onOpenChange, field, onSave, disabled = false }) {
    const isEditing = field !== null && field !== undefined;
    const [draft, setDraft] = useState(emptyFieldDraft());
    const [activeTab, setActiveTab] = useState('en');
    const [validationError, setValidationError] = useState('');

    useEffect(() => {
        if (open) {
            if (isEditing) {
                const next = {
                    ...field,
                    label: normalizeI18nLabel(field.label),
                };
                if (field.type === 'select') {
                    next.options = normalizeFieldOptions(field.options);
                }
                setDraft(next);
            } else {
                setDraft(emptyFieldDraft());
            }
            setActiveTab('en');
            setValidationError('');
        }
    }, [open, field, isEditing]);

    const updateDraft = (patch) => {
        setDraft((prev) => ({ ...prev, ...patch }));
    };

    const updateLabel = (lang, value) => {
        setDraft((prev) => ({
            ...prev,
            label: { ...normalizeI18nLabel(prev.label), [lang]: value },
        }));
    };

    const handleTypeChange = (type) => {
        if (type === 'select') {
            updateDraft({
                type,
                options:
                    draft.type === 'select' && Array.isArray(draft.options) && draft.options.length > 0
                        ? draft.options
                        : [emptySelectOption()],
            });
            return;
        }
        const { options, ...rest } = draft;
        updateDraft({ ...rest, type });
    };

    const updateOption = (optionIndex, patch) => {
        setDraft((prev) => {
            const options = normalizeFieldOptions(prev.options);
            options[optionIndex] = { ...options[optionIndex], ...patch };
            return { ...prev, options };
        });
    };

    const updateOptionLabel = (optionIndex, lang, value) => {
        setDraft((prev) => {
            const options = normalizeFieldOptions(prev.options);
            const option = options[optionIndex] || emptySelectOption();
            options[optionIndex] = {
                ...option,
                label: { ...normalizeI18nLabel(option.label), [lang]: value },
            };
            return { ...prev, options };
        });
    };

    const addOption = () => {
        setDraft((prev) => ({
            ...prev,
            options: [...normalizeFieldOptions(prev.options), emptySelectOption()],
        }));
    };

    const removeOption = (optionIndex) => {
        setDraft((prev) => ({
            ...prev,
            options: normalizeFieldOptions(prev.options).filter((_, i) => i !== optionIndex),
        }));
    };

    const handleSave = () => {
        const label = normalizeI18nLabel(draft.label);
        const key = (draft.key || '').trim();

        if (!key) {
            setValidationError('Field key is required.');
            return;
        }
        if (!label.en.trim() || !label.fr.trim() || !label.ar.trim()) {
            setValidationError('Please enter the label in all three languages (English, French, and Arabic).');
            return;
        }

        if (draft.type === 'select') {
            const options = normalizeFieldOptions(draft.options);
            if (options.length === 0) {
                setValidationError('Select fields must have at least one option.');
                return;
            }
            for (let i = 0; i < options.length; i++) {
                const opt = normalizeSelectOption(options[i]);
                if (!opt.value.trim()) {
                    setValidationError(`Option ${i + 1}: value is required.`);
                    return;
                }
                if (!opt.label.en.trim() || !opt.label.fr.trim() || !opt.label.ar.trim()) {
                    setValidationError(`Option ${i + 1}: enter the label in all three languages.`);
                    return;
                }
            }

            onSave({
                ...draft,
                key,
                label,
                options: options.map(normalizeSelectOption),
            });
            onOpenChange(false);
            return;
        }

        const { options, ...fieldWithoutOptions } = draft;
        onSave({
            ...fieldWithoutOptions,
            key,
            label,
        });
        onOpenChange(false);
    };

    const options = normalizeFieldOptions(draft.options);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="custom-scrollbar max-h-[90vh] overflow-y-auto sm:max-w-[560px]">
                <DialogTitle>{isEditing ? 'Edit form field' : 'Add form field'}</DialogTitle>
                <p className="text-sm text-gray-500">
                    Enter the field label in all three languages using the tabs below.
                </p>

                <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div className="space-y-1">
                            <Label htmlFor="field-key">Key</Label>
                            <Input
                                id="field-key"
                                value={draft.key || ''}
                                onChange={(e) => updateDraft({ key: e.target.value })}
                                placeholder="e.g. child_school"
                                disabled={disabled}
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="field-type">Type</Label>
                            <select
                                id="field-type"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                                value={draft.type || 'text'}
                                onChange={(e) => handleTypeChange(e.target.value)}
                                disabled={disabled}
                            >
                                <option value="text">Text</option>
                                <option value="email">Email</option>
                                <option value="tel">Phone</option>
                                <option value="date">Date</option>
                                <option value="textarea">Textarea</option>
                                <option value="select">Select</option>
                            </select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <label className="flex items-center gap-2 text-sm">
                            <input
                                type="checkbox"
                                checked={!!draft.required}
                                onChange={(e) => updateDraft({ required: e.target.checked })}
                                disabled={disabled}
                            />
                            Required
                        </label>
                        <div className="space-y-1">
                            <Label htmlFor="field-group">Step group</Label>
                            <select
                                id="field-group"
                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                                value={draft.group || 'child'}
                                onChange={(e) => updateDraft({ group: e.target.value })}
                                disabled={disabled}
                            >
                                <option value="child">Step 1 – Child info</option>
                                <option value="guardian">Step 2 – Guardian / other</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label>Label</Label>
                        <Tabs value={activeTab} onValueChange={setActiveTab}>
                            <TabsList className="grid w-full grid-cols-3">
                                {LANG_TABS.map((tab) => (
                                    <TabsTrigger key={tab.value} value={tab.value}>
                                        {tab.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                            {LANG_TABS.map((tab) => (
                                <TabsContent key={tab.value} value={tab.value} className="mt-3">
                                    <Input
                                        value={normalizeI18nLabel(draft.label)[tab.value]}
                                        onChange={(e) => updateLabel(tab.value, e.target.value)}
                                        placeholder={
                                            tab.value === 'fr'
                                                ? 'Libellé du champ'
                                                : tab.value === 'ar'
                                                  ? 'تسمية الحقل'
                                                  : 'Field label'
                                        }
                                        disabled={disabled}
                                        dir={tab.value === 'ar' ? 'rtl' : 'ltr'}
                                    />
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>

                    {draft.type === 'select' && (
                        <div className="space-y-3 rounded-lg border border-gray-200 p-3">
                            <div className="flex items-center justify-between gap-3">
                                <Label>Options</Label>
                                <Button type="button" variant="outline" size="sm" onClick={addOption} disabled={disabled}>
                                    Add option
                                </Button>
                            </div>

                            {options.length === 0 ? (
                                <p className="text-xs text-gray-500">Add at least one option for this select field.</p>
                            ) : (
                                <div className="space-y-3">
                                    {options.map((opt, optIdx) => (
                                        <div key={`option-${optIdx}`} className="space-y-2 rounded-md border border-gray-100 bg-gray-50 p-3">
                                            <div className="flex items-center justify-between gap-2">
                                                <p className="text-xs font-medium text-gray-600">Option {optIdx + 1}</p>
                                                <Button
                                                    type="button"
                                                    variant="destructive"
                                                    size="sm"
                                                    onClick={() => removeOption(optIdx)}
                                                    disabled={disabled}
                                                >
                                                    Remove
                                                </Button>
                                            </div>
                                            <Input
                                                placeholder="Value (required)"
                                                value={opt.value}
                                                onChange={(e) => updateOption(optIdx, { value: e.target.value })}
                                                disabled={disabled}
                                            />
                                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                                                <Input
                                                    placeholder="Label (EN)"
                                                    value={opt.label.en}
                                                    onChange={(e) => updateOptionLabel(optIdx, 'en', e.target.value)}
                                                    disabled={disabled}
                                                />
                                                <Input
                                                    placeholder="Label (FR)"
                                                    value={opt.label.fr}
                                                    onChange={(e) => updateOptionLabel(optIdx, 'fr', e.target.value)}
                                                    disabled={disabled}
                                                />
                                                <Input
                                                    placeholder="Label (AR)"
                                                    value={opt.label.ar}
                                                    onChange={(e) => updateOptionLabel(optIdx, 'ar', e.target.value)}
                                                    disabled={disabled}
                                                    dir="rtl"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {validationError && <p className="text-sm text-[#ff7376]">{validationError}</p>}

                    <div className="flex gap-3 pt-2">
                        <Button
                            type="button"
                            variant="outline"
                            className="flex-1"
                            onClick={() => onOpenChange(false)}
                            disabled={disabled}
                        >
                            Cancel
                        </Button>
                        <Button type="button" className="flex-1" onClick={handleSave} disabled={disabled}>
                            {isEditing ? 'Save changes' : 'Add field'}
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
