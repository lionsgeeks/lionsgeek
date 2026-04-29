import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useForm, usePage } from '@inertiajs/react';
import { Calendar, Upload, X } from 'lucide-react';
import { useState } from 'react';

const defaultBookingForm = [
    { key: 'name', type: 'text', required: true, label: { en: 'Name', fr: 'Nom', ar: 'الاسم' } },
    { key: 'email', type: 'email', required: true, label: { en: 'Email', fr: 'Email', ar: 'البريد الإلكتروني' } },
    { key: 'phone', type: 'tel', required: false, label: { en: 'Phone', fr: 'Téléphone', ar: 'رقم الهاتف' } },
    {
        key: 'gender',
        type: 'select',
        required: true,
        multiple: false, // Gender behaves as single choice in the booking flow
        label: { en: 'Gender', fr: 'Genre', ar: 'الجنس' },
        options: [
            { value: 'male', label: { en: 'Male', fr: 'Homme', ar: 'ذكر' } },
            { value: 'female', label: { en: 'Female', fr: 'Femme', ar: 'أنثى' } },
        ],
    },
];

const normalizeI18nLabel = (label) => {
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

const normalizeBookingForm = (form) => {
    if (!Array.isArray(form)) return defaultBookingForm;
    return form.map((f) => {
        const next = { ...f };
        next.label = normalizeI18nLabel(next.label);
        if (next.type === 'select') {
            next.options = (Array.isArray(next.options) ? next.options : []).map((o) => {
                const opt = { ...o };
                opt.label = normalizeI18nLabel(opt.label);
                // Back-compat: if option stored as {en,fr,ar} directly.
                if (!opt.label.en && (opt.en || opt.fr || opt.ar)) {
                    opt.label = normalizeI18nLabel(opt);
                }
                return opt;
            });
        }
        return next;
    });
};

export default function EventForm({ event = null, onClose, onSuccess }) {
    const isEditing = !!event;
    const { props } = usePage();
    const appUrl = props.ziggy?.url || window.location.origin;
    const { data, setData, post, processing, errors, reset } = useForm({
        name: {
            en: event?.name?.en || '',
            fr: event?.name?.fr || '',
            ar: event?.name?.ar || '',
        },
        description: {
            en: event?.description?.en || '',
            fr: event?.description?.fr || '',
            ar: event?.description?.ar || '',
        },
        date: event?.date || '',
        capacity: event?.capacity || '',
        location: event?.location || '',
        cover: null,
        is_private: event?.is_private || false,
        booking_form: Array.isArray(event?.booking_form) ? normalizeBookingForm(event.booking_form) : defaultBookingForm,
    });

    const [activeTab, setActiveTab] = useState('en');
    const [previewImage, setPreviewImage] = useState(event?.cover ? `${appUrl}/storage/images/events/${event.cover}` : null);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('name', JSON.stringify(data.name));
        formData.append('description', JSON.stringify(data.description));
        formData.append('date', data.date);
        formData.append('capacity', data.capacity);
        formData.append('location', data.location);
        formData.append('is_private', data.is_private ? 1 : 0);
        formData.append('booking_form', JSON.stringify(data.booking_form || []));

        if (data.cover) {
            formData.append('cover', data.cover);
        }

        if (isEditing) {
            formData.append('_method', 'PUT');
            post(route('admin.events.update', event.id), {
                data: formData,
                onSuccess: () => {
                    reset();
                    onSuccess?.();
                    onClose?.();
                },
                onError: (errors) => {
                    console.error('Update errors:', errors);
                },
            });
        } else {
            post(route('admin.events.store'), {
                data: formData,
                onSuccess: () => {
                    reset();
                    onSuccess?.();
                    onClose?.();
                },
                onError: (errors) => {
                    console.error('Create errors:', errors);
                },
            });
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setData('cover', file);
            const reader = new FileReader();
            reader.onload = (e) => setPreviewImage(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setData('cover', null);
        setPreviewImage(null);
    };

    const updateMultilingualField = (field, language, value) => {
        setData(field, {
            ...data[field],
            [language]: value,
        });
    };

    const updateBookingField = (index, patch) => {
        const next = [...(data.booking_form || [])];
        const prev = next[index] || {};
        const merged = { ...prev, ...patch };

        // Ensure select fields always have an options array.
        if (merged.type === 'select' && !Array.isArray(merged.options)) {
            merged.options = [];
        }
        // Default to multi-choice for select fields unless explicitly set.
        if (merged.type === 'select') {
            if (typeof merged.multiple !== 'boolean') merged.multiple = true;
            // Keep gender fixed to single choice.
            if (merged.key === 'gender') merged.multiple = false;
        }
        // Cleanup: for non-select fields, remove the multi flag if present.
        if (merged.type !== 'select' && 'multiple' in merged) {
            delete merged.multiple;
        }
        next[index] = merged;
        setData('booking_form', next);
    };

    const updateBookingOption = (fieldIndex, optionIndex, patch) => {
        const next = [...(data.booking_form || [])];
        const field = next[fieldIndex] || {};
        const options = Array.isArray(field.options) ? [...field.options] : [];
        options[optionIndex] = { ...(options[optionIndex] || {}), ...patch };
        next[fieldIndex] = { ...field, options };
        setData('booking_form', next);
    };

    const addBookingOption = (fieldIndex) => {
        const next = [...(data.booking_form || [])];
        const field = next[fieldIndex] || {};
        const options = Array.isArray(field.options) ? [...field.options] : [];
        options.push({ value: '', label: '' });
        next[fieldIndex] = { ...field, options };
        setData('booking_form', next);
    };

    const removeBookingOption = (fieldIndex, optionIndex) => {
        const next = [...(data.booking_form || [])];
        const field = next[fieldIndex] || {};
        const options = Array.isArray(field.options) ? [...field.options] : [];
        next[fieldIndex] = { ...field, options: options.filter((_, i) => i !== optionIndex) };
        setData('booking_form', next);
    };

    const removeBookingField = (index) => {
        const field = data.booking_form?.[index];
        if (field?.key === 'name' || field?.key === 'email') return;
        const next = [...(data.booking_form || [])].filter((_, i) => i !== index);
        setData('booking_form', next);
    };

    const addBookingField = () => {
        const next = [
            ...(data.booking_form || []),
            { key: `field_${Date.now()}`, type: 'text', required: false, label: { en: 'New field', fr: 'Nouveau champ', ar: 'حقل جديد' } },
        ];
        setData('booking_form', next);
    };

    return (
        <Card className="mx-auto w-full max-w-4xl border-none p-0 shadow-none">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {isEditing ? 'Edit Event' : 'Create New Event'}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Cover Image Upload */}
                    <div className="space-y-2">
                        <Label htmlFor="cover">Cover Image</Label>
                        <div className="rounded-lg border-2 border-dashed border-gray-300 p-6">
                            {previewImage ? (
                                <div className="relative">
                                    <img src={previewImage} alt="Preview" className="h-48 w-full rounded-lg object-cover" />
                                    <Button type="button" variant="destructive" size="sm" className="absolute top-2 right-2" onClick={removeImage}>
                                        <X className="h-4 w-4" />
                                    </Button>
                                </div>
                            ) : (
                                <label htmlFor="cover-upload" className="block cursor-pointer text-center">
                                    <div className="text-center">
                                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                        <div className="mt-4">
                                            <span className="mt-2 block text-sm font-medium text-gray-900">Click to upload cover image</span>
                                        </div>
                                    </div>

                                    <input id="cover-upload" type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
                                </label>
                            )}
                        </div>
                        {errors.cover && <p className="text-sm text-red-600">{errors.cover}</p>}
                    </div>

                    <div className="space-y-4">
                        <Tabs value={activeTab} onValueChange={setActiveTab}>
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="en">English</TabsTrigger>
                                <TabsTrigger value="fr">Français</TabsTrigger>
                                <TabsTrigger value="ar">العربية</TabsTrigger>
                            </TabsList>

                            <TabsContent value="en" className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name-en">Event Name (English)</Label>
                                    <Input
                                        id="name-en"
                                        value={data.name.en}
                                        onChange={(e) => updateMultilingualField('name', 'en', e.target.value)}
                                        placeholder="Enter event name in English"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="description-en">Description (English)</Label>
                                    <textarea
                                        id="description-en"
                                        value={data.description.en}
                                        onChange={(e) => updateMultilingualField('description', 'en', e.target.value)}
                                        placeholder="Enter event description in English"
                                        className="min-h-[100px] w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        required
                                    />
                                </div>
                            </TabsContent>

                            <TabsContent value="fr" className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name-fr">Nom de l'événement (Français)</Label>
                                    <Input
                                        id="name-fr"
                                        value={data.name.fr}
                                        onChange={(e) => updateMultilingualField('name', 'fr', e.target.value)}
                                        placeholder="Entrez le nom de l'événement en français"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="description-fr">Description (Français)</Label>
                                    <textarea
                                        id="description-fr"
                                        value={data.description.fr}
                                        onChange={(e) => updateMultilingualField('description', 'fr', e.target.value)}
                                        placeholder="Entrez la description de l'événement en français"
                                        className="min-h-[100px] w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        required
                                    />
                                </div>
                            </TabsContent>

                            <TabsContent value="ar" className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name-ar">اسم الحدث (العربية)</Label>
                                    <Input
                                        id="name-ar"
                                        value={data.name.ar}
                                        onChange={(e) => updateMultilingualField('name', 'ar', e.target.value)}
                                        placeholder="أدخل اسم الحدث بالعربية"
                                        className="text-right"
                                        dir="rtl"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="description-ar">الوصف (العربية)</Label>
                                    <textarea
                                        id="description-ar"
                                        value={data.description.ar}
                                        onChange={(e) => updateMultilingualField('description', 'ar', e.target.value)}
                                        placeholder="أدخل وصف الحدث بالعربية"
                                        className="min-h-[100px] w-full rounded-md border border-gray-300 px-3 py-2 text-right focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        dir="rtl"
                                        required
                                    />
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                            <Label htmlFor="location">Location</Label>
                            <Input
                                id="location"
                                type="text"
                                value={data.location}
                                onChange={(e) => setData('location', e.target.value)}
                                placeholder="Enter event location"
                                required
                            />
                            {errors.location && <p className="text-sm text-red-600">{errors.location}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="date">Event Date & Time</Label>
                            <Input id="date" type="datetime-local" value={data.date} onChange={(e) => setData('date', e.target.value)} required />
                            {errors.date && <p className="text-sm text-red-600">{errors.date}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="capacity">Capacity</Label>
                            <Input
                                id="capacity"
                                type="number"
                                min="1"
                                value={data.capacity}
                                onChange={(e) => setData('capacity', e.target.value)}
                                placeholder="Enter event capacity"
                                required
                            />
                            {errors.capacity && <p className="text-sm text-red-600">{errors.capacity}</p>}
                        </div>
                        <div className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                id="is_private"
                                checked={data.is_private}
                                onChange={(e) => setData('is_private', e.target.checked)}
                            />
                            <Label htmlFor="is_private">Private Event</Label>
                        </div>
                    </div>

                    {/* Booking Form Builder */}
                    <div className="space-y-3 rounded-lg border border-gray-200 p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-semibold">Booking form</p>
                                <p className="text-xs text-gray-500">Choose which fields users must fill when booking this event.</p>
                            </div>
                            <Button type="button" variant="outline" onClick={addBookingField}>
                                Add field
                            </Button>
                        </div>

                        <div className="space-y-4">
                            {(data.booking_form || []).map((field, idx) => (
                                <div key={`${field.key}-${idx}`} className="rounded-md border border-gray-200 p-3">
                                    <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
                                        <div className="space-y-1">
                                            <Label>Key</Label>
                                            <Input
                                                value={field.key || ''}
                                                onChange={(e) => updateBookingField(idx, { key: e.target.value })}
                                                disabled={field.key === 'name' || field.key === 'email'}
                                            />
                                        </div>
                                        <div className="space-y-1 md:col-span-2">
                                            <Label>Label</Label>
                                            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
                                                <Input
                                                    placeholder="English"
                                                    value={field.label?.en ?? ''}
                                                    onChange={(e) => updateBookingField(idx, { label: { ...(field.label || {}), en: e.target.value } })}
                                                />
                                                <Input
                                                    placeholder="Français"
                                                    value={field.label?.fr ?? ''}
                                                    onChange={(e) => updateBookingField(idx, { label: { ...(field.label || {}), fr: e.target.value } })}
                                                />
                                                <Input
                                                    placeholder="العربية"
                                                    value={field.label?.ar ?? ''}
                                                    onChange={(e) => updateBookingField(idx, { label: { ...(field.label || {}), ar: e.target.value } })}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <Label>Type</Label>
                                            <select
                                                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                                                value={field.type || 'text'}
                                                onChange={(e) =>
                                                    updateBookingField(idx, {
                                                        type: e.target.value,
                                                        ...(e.target.value === 'select' ? { options: Array.isArray(field.options) ? field.options : [] } : {}),
                                                    })
                                                }
                                                disabled={field.key === 'name' || field.key === 'email'}
                                            >
                                                <option value="text">Text</option>
                                                <option value="email">Email</option>
                                                <option value="tel">Phone</option>
                                                <option value="select">Select</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mt-3 flex items-center justify-between gap-3">
                                        <label className="flex items-center gap-2 text-sm">
                                            <input
                                                type="checkbox"
                                                checked={!!field.required}
                                                onChange={(e) => updateBookingField(idx, { required: e.target.checked })}
                                                disabled={field.key === 'name' || field.key === 'email'}
                                            />
                                            Required
                                        </label>
                                        <Button type="button" variant="destructive" size="sm" onClick={() => removeBookingField(idx)}>
                                            Remove
                                        </Button>
                                    </div>

                                    {field.type === 'select' && (
                                        <div className="mt-3 space-y-2">
                                            <div className="flex items-center justify-between gap-3">
                                                <Label>Options</Label>
                                                {field.key === 'gender' ? (
                                                    <p className="text-xs text-gray-500">Single choice (fixed)</p>
                                                ) : (
                                                    <p className="text-xs text-gray-500">{field.multiple !== false ? 'Multi-choice' : 'Single choice'}</p>
                                                )}
                                            </div>

                                            {field.key !== 'gender' && (
                                                <label className="flex items-center gap-2 text-sm">
                                                    <input
                                                        type="checkbox"
                                                        checked={field.multiple !== false}
                                                        onChange={(e) => updateBookingField(idx, { multiple: e.target.checked })}
                                                    />
                                                    Multi-choice
                                                </label>
                                            )}

                                            <div className="space-y-2">
                                                {(Array.isArray(field.options) ? field.options : []).map((opt, optIdx) => (
                                                    <div key={`${field.key}-opt-${optIdx}`} className="grid grid-cols-1 gap-2 md:grid-cols-6">
                                                        <div className="md:col-span-2">
                                                            <Input
                                                                placeholder="value (required)"
                                                                value={opt?.value ?? ''}
                                                                onChange={(e) => updateBookingOption(idx, optIdx, { value: e.target.value })}
                                                            />
                                                        </div>
                                                        <div className="md:col-span-3 grid grid-cols-1 gap-2 md:grid-cols-3">
                                                            <Input
                                                                placeholder="Label (EN)"
                                                                value={opt?.label?.en ?? ''}
                                                                onChange={(e) =>
                                                                    updateBookingOption(idx, optIdx, { label: { ...(opt.label || {}), en: e.target.value } })
                                                                }
                                                            />
                                                            <Input
                                                                placeholder="Label (FR)"
                                                                value={opt?.label?.fr ?? ''}
                                                                onChange={(e) =>
                                                                    updateBookingOption(idx, optIdx, { label: { ...(opt.label || {}), fr: e.target.value } })
                                                                }
                                                            />
                                                            <Input
                                                                placeholder="Label (AR)"
                                                                value={opt?.label?.ar ?? ''}
                                                                onChange={(e) =>
                                                                    updateBookingOption(idx, optIdx, { label: { ...(opt.label || {}), ar: e.target.value } })
                                                                }
                                                            />
                                                        </div>
                                                        <div className="md:col-span-1 flex items-center justify-end">
                                                            <Button type="button" variant="destructive" size="sm" onClick={() => removeBookingOption(idx, optIdx)}>
                                                                Remove
                                                            </Button>
                                                        </div>
                                                    </div>
                                                ))}

                                                <div className="flex items-center justify-between gap-3">
                                                    <p className="text-xs text-gray-500">Add as many options as you want.</p>
                                                    <Button type="button" variant="outline" size="sm" onClick={() => addBookingOption(idx)}>
                                                        Add option
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <Button type="button" variant="outline" onClick={onClose} disabled={processing}>
                            Cancel
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? 'Saving...' : isEditing ? 'Update Event' : 'Create Event'}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}