import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from '@inertiajs/react';
import { Calendar, Code2, GraduationCap, Loader2, Palette, Plus, Users, X, Lock } from 'lucide-react';

const defaultChildrenForm = [
    { key: 'child_full_name', type: 'text', required: true, group: 'child', label: 'Child full name' },
    { key: 'child_birthday', type: 'date', required: true, group: 'child', label: 'Child birthday' },
    { key: 'child_city', type: 'text', required: true, group: 'child', label: 'Child city' },
    { key: 'guardian_full_name', type: 'text', required: true, group: 'guardian', label: 'Parent/guardian full name' },
    { key: 'guardian_phone', type: 'tel', required: true, group: 'guardian', label: 'Parent/guardian phone' },
    { key: 'guardian_email', type: 'email', required: true, group: 'guardian', label: 'Parent/guardian email' },
];

export function CreateSessionModal({ open, onOpenChange }) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        formation: '',
        start_date: '',
        places: '',
        is_private: false,
        audience: 'normal',
        registration_form_children: defaultChildrenForm,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        post(route('infosessions.store'), {
            onSuccess: () => {
                setData({
                    name: '',
                    formation: '',
                    start_date: '',
                    places: '',
                    is_private: false,
                    audience: 'normal',
                    registration_form_children: defaultChildrenForm,
                });
                onOpenChange(false);
            },
        });
    };

    const handleChange = (field, value) => {
        setData((prev) => ({ ...prev, [field]: value }));
    };

    const updateChildrenField = (index, patch) => {
        setData((prev) => {
            const current = Array.isArray(prev.registration_form_children) ? prev.registration_form_children : [];
            const next = [...current];
            next[index] = { ...(next[index] || {}), ...patch };
            return { ...prev, registration_form_children: next };
        });
    };

    const addChildrenField = () => {
        setData((prev) => {
            const current = Array.isArray(prev.registration_form_children) ? prev.registration_form_children : [];
            return {
                ...prev,
                registration_form_children: [
                    ...current,
                    {
                        key: `field_${Date.now()}`,
                        type: 'text',
                        required: false,
                        group: 'child',
                        label: 'New field',
                    },
                ],
            };
        });
    };

    const removeChildrenField = (index) => {
        setData((prev) => {
            const current = Array.isArray(prev.registration_form_children) ? prev.registration_form_children : [];
            return {
                ...prev,
                registration_form_children: current.filter((_, i) => i !== index),
            };
        });
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button className="flex justify-center transform cursor-pointer items-center rounded-lg bg-[#fee819] px-2 py-2 h-fit lg:w-fit text-sm font-medium text-[#212529] transition-all duration-300 ease-in-out hover:scale-105 hover:bg-[#212529] hover:text-[#fee819]">
                    <Plus className="mr-2 h-4 w-4 lg:flex hidden" />
                    Create Info Session
                </Button>
            </DialogTrigger>
            <DialogContent className="custom-scrollbar max-h-[90vh] overflow-y-auto p-0 sm:max-w-[700px] [&>button]:hidden">
                {/* Header */}
                <div className="relative rounded-t-lg bg-[#212529] p-6 text-white">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="rounded-lg bg-[#fee819] p-2">
                                <GraduationCap className="h-6 w-6 text-[#212529]" />
                            </div>
                            <div>
                                <DialogTitle className="text-xl font-bold text-white">Create New Info Session</DialogTitle>
                                <p className="mt-1 text-sm text-gray-300">Create an informational session for your training programs</p>
                            </div>
                        </div>
                        {/* Custom close button */}
                        <button
                            onClick={() => onOpenChange(false)}
                            className="rounded-lg p-2 text-white transition-colors duration-200 hover:bg-white/10 hover:text-[#fee819]"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Audience */}
                        <div className="space-y-2">
                            <Label className="text-sm font-medium text-[#212529]">
                                Audience <span className="text-[#ff7376]">*</span>
                            </Label>
                            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                                <button
                                    type="button"
                                    onClick={() => handleChange('audience', 'normal')}
                                    className={`flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                                        data.audience === 'normal'
                                            ? 'border-[#212529] bg-[#212529] text-white'
                                            : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
                                    }`}
                                    disabled={processing}
                                >
                                    Normal (18+)
                                </button>
                                <button
                                    type="button"
                                    onClick={() => handleChange('audience', 'children_12_17')}
                                    className={`flex items-center justify-center rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
                                        data.audience === 'children_12_17'
                                            ? 'border-[#212529] bg-[#212529] text-white'
                                            : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
                                    }`}
                                    disabled={processing}
                                >
                                    Children 12–17
                                </button>
                            </div>
                        </div>

                        {/* Session Title */}
                        <div className="space-y-2">
                            <Label htmlFor="title" className="text-sm font-medium text-[#212529]">
                                Session Title <span className="text-[#ff7376]">*</span>
                            </Label>
                            <Input
                                id="title"
                                value={data.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                                placeholder="e.g., Web Development Program Overview"
                                required
                                disabled={processing}
                                className="rounded-lg border transition-all duration-200 ease-in-out focus:border-[#212529] focus:ring-2 focus:ring-[#212529]/20"
                            />
                            {errors.name && <p className="text-sm text-[#ff7376]">{errors.name}</p>}
                        </div>

                        {/* Children Registration Form Builder (only for children audience) */}
                        {data.audience === 'children_12_17' && (
                            <div className="space-y-3 rounded-lg border border-gray-200 p-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-semibold">Children registration form</p>
                                        <p className="text-xs text-gray-500">
                                            Configure the fields for children (12–17) and their guardians.
                                        </p>
                                    </div>
                                    <Button type="button" variant="outline" onClick={addChildrenField} disabled={processing}>
                                        Add field
                                    </Button>
                                </div>

                                <div className="space-y-4">
                                    {(Array.isArray(data.registration_form_children) ? data.registration_form_children : []).map((field, idx) => (
                                        <div key={`${field.key || 'field'}-${idx}`} className="rounded-md border border-gray-200 p-3">
                                            <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
                                                <div className="space-y-1">
                                                    <Label>Key</Label>
                                                    <Input
                                                        value={field.key || ''}
                                                        onChange={(e) => updateChildrenField(idx, { key: e.target.value })}
                                                        disabled={processing}
                                                    />
                                                </div>
                                                <div className="space-y-1 md:col-span-2">
                                                    <Label>Label</Label>
                                                    <Input
                                                        value={field.label || ''}
                                                        onChange={(e) => updateChildrenField(idx, { label: e.target.value })}
                                                        placeholder="Field label"
                                                        disabled={processing}
                                                    />
                                                </div>
                                                <div className="space-y-1">
                                                    <Label>Type</Label>
                                                    <select
                                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                                                        value={field.type || 'text'}
                                                        onChange={(e) =>
                                                            updateChildrenField(idx, {
                                                                type: e.target.value,
                                                            })
                                                        }
                                                        disabled={processing}
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

                                            <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3 items-center">
                                                <label className="flex items-center gap-2 text-sm">
                                                    <input
                                                        type="checkbox"
                                                        checked={!!field.required}
                                                        onChange={(e) => updateChildrenField(idx, { required: e.target.checked })}
                                                        disabled={processing}
                                                    />
                                                    Required
                                                </label>
                                                <div className="space-y-1">
                                                    <Label>Step group</Label>
                                                    <select
                                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                                                        value={field.group || 'child'}
                                                        onChange={(e) => updateChildrenField(idx, { group: e.target.value })}
                                                        disabled={processing}
                                                    >
                                                        <option value="child">Step 1 – Child info</option>
                                                        <option value="guardian">Step 2 – Guardian / other</option>
                                                    </select>
                                                </div>
                                                <div className="flex justify-end">
                                                    <Button
                                                        type="button"
                                                        variant="destructive"
                                                        size="sm"
                                                        onClick={() => removeChildrenField(idx)}
                                                        disabled={processing}
                                                    >
                                                        Remove
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Program Type */}
                        <div className="space-y-2">
                            <Label htmlFor="type" className="text-sm font-medium text-[#212529]">
                                Program Type <span className="text-[#ff7376]">*</span>
                            </Label>
                            <Select value={data.formation} onValueChange={(value) => handleChange('formation', value)} disabled={processing}>
                                <SelectTrigger className="rounded-lg border focus:border-[#212529]">
                                    <SelectValue placeholder="Choose program type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Coding">
                                        <div className="flex items-center gap-2">
                                            <Code2 className="h-4 w-4" />
                                            <span>Coding Program</span>
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="Media">
                                        <div className="flex items-center gap-2">
                                            <Palette className="h-4 w-4" />
                                            <span>Media Program</span>
                                        </div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            {errors.formation && <p className="text-sm text-[#ff7376]">{errors.formation}</p>}
                        </div>

                        {/* Date and Capacity */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor="date" className="text-sm font-medium text-[#212529]">
                                    Start Date <span className="text-[#ff7376]">*</span>
                                </Label>
                                <div className="relative">
                                    <Calendar className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                                    <Input
                                        id="date"
                                        type="date"
                                        value={data.start_date}
                                        onChange={(e) => handleChange('start_date', e.target.value)}
                                        className="rounded-lg border pl-10 focus:border-[#212529]"
                                        required
                                        disabled={processing}
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                </div>
                                {errors.start_date && <p className="text-sm text-[#ff7376]">{errors.start_date}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="capacity" className="text-sm font-medium text-[#212529]">
                                    Capacity <span className="text-[#ff7376]">*</span>
                                </Label>
                                <div className="relative">
                                    <Users className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-gray-400" />
                                    <Input
                                        id="capacity"
                                        type="number"
                                        value={data.places}
                                        onChange={(e) => handleChange('places', e.target.value)}
                                        placeholder="50"
                                        className="rounded-lg border pl-10 focus:border-[#212529]"
                                        required
                                        min="1"
                                        max="500"
                                        disabled={processing}
                                    />
                                </div>
                                {errors.places && <p className="text-sm text-[#ff7376]">{errors.places}</p>}
                            </div>
                        </div>

                        {/* Private Session Option */}
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="is_private"
                                    checked={data.is_private}
                                    onCheckedChange={(checked) => handleChange('is_private', checked)}
                                    disabled={processing}
                                />
                                <Label htmlFor="is_private" className="text-sm font-medium text-[#212529] flex items-center gap-2">
                                    <Lock className="h-4 w-4" />
                                    Make this a private session
                                </Label>
                            </div>
                            {data.is_private && (
                                <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3">
                                    <p className="text-sm text-yellow-800">
                                        <strong>Private Session:</strong> This session will have a unique URL that can be shared privately.
                                        It won't appear on the public coding/media pages.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Preview */}
                        {data.formation && data.name && (
                            <div className="rounded-lg border bg-[#f2f2f2] p-4">
                                <p className="mb-2 text-sm font-medium text-[#212529]">Preview</p>
                                <div className="flex items-center gap-3 rounded-lg border bg-white p-3">
                                    <div className="text-[#212529]">
                                        {data.formation === 'Coding' ? <Code2 className="h-5 w-5" /> : <Palette className="h-5 w-5" />}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-medium text-[#212529] flex items-center gap-2">
                                            {data.name}
                                            {data.is_private && (
                                                <span className="inline-flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                                                    <Lock className="h-3 w-3" />
                                                    Private
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-sm text-gray-500">
                                            {data.formation} Program {data.is_private ? '• Private Session' : '• Public Session'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => onOpenChange(false)}
                                disabled={processing}
                                className="flex-1 border-gray-300 text-gray-700 transition-all duration-300 ease-in-out hover:bg-gray-100"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                disabled={processing || !data.name || !data.formation || !data.start_date || !data.places}
                                className="flex-1"
                            >
                                {processing && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                {processing ? 'Creating...' : 'Create Session'}
                            </Button>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
}
