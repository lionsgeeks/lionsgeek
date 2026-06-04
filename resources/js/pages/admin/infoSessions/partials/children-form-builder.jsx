import { Button } from '@/components/ui/button';
import { Pencil } from 'lucide-react';
import { useState } from 'react';
import { ChildrenFormFieldModal } from './children-form-field-modal';
import { getFieldDisplayLabel } from './children-form-helpers';

export function ChildrenFormBuilder({ fields, onChange, disabled = false }) {
    const [fieldModalOpen, setFieldModalOpen] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const openAddModal = () => {
        setEditingIndex(null);
        setFieldModalOpen(true);
    };

    const openEditModal = (index) => {
        setEditingIndex(index);
        setFieldModalOpen(true);
    };

    const handleSaveField = (field) => {
        const current = Array.isArray(fields) ? fields : [];
        if (editingIndex !== null) {
            const next = [...current];
            next[editingIndex] = field;
            onChange(next);
        } else {
            onChange([...current, field]);
        }
    };

    const removeField = (index) => {
        const current = Array.isArray(fields) ? fields : [];
        onChange(current.filter((_, i) => i !== index));
    };

    const list = Array.isArray(fields) ? fields : [];

    return (
        <div className="space-y-3 rounded-lg border border-gray-200 p-4">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-semibold">Children registration form</p>
                    <p className="text-xs text-gray-500">
                        Configure the fields for children (12–17) and their guardians.
                    </p>
                </div>
                <Button type="button" variant="outline" onClick={openAddModal} disabled={disabled}>
                    Add field
                </Button>
            </div>

            {list.length === 0 && (
                <p className="rounded-md border border-dashed border-gray-200 bg-gray-50 px-4 py-6 text-center text-sm text-gray-500">
                    No fields yet. Click &quot;Add field&quot; to build the registration form.
                </p>
            )}

            {list.length > 0 && (
                <div className="space-y-2">
                    {list.map((field, idx) => (
                        <div
                            key={`${field.key || 'field'}-${idx}`}
                            className="flex items-center justify-between gap-3 rounded-md border border-gray-200 p-3"
                        >
                            <div className="min-w-0 flex-1">
                                <p className="truncate text-sm font-medium text-[#212529]">
                                    {getFieldDisplayLabel(field)}
                                </p>
                                <p className="text-xs text-gray-500">
                                    {field.key} · {field.type || 'text'} ·{' '}
                                    {field.group === 'guardian' ? 'Step 2 – Guardian' : 'Step 1 – Child'}
                                    {field.required ? ' · Required' : ''}
                                </p>
                            </div>
                            <div className="flex shrink-0 gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => openEditModal(idx)}
                                    disabled={disabled}
                                >
                                    <Pencil className="mr-1 h-3.5 w-3.5" />
                                    Edit
                                </Button>
                                <Button
                                    type="button"
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => removeField(idx)}
                                    disabled={disabled}
                                >
                                    Remove
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <ChildrenFormFieldModal
                open={fieldModalOpen}
                onOpenChange={setFieldModalOpen}
                field={editingIndex !== null ? list[editingIndex] : null}
                onSave={handleSaveField}
                disabled={disabled}
            />
        </div>
    );
}
