import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ChevronLeft, ChevronRight, Filter, Search, Users, CheckCircle2, XCircle, Trash2 } from 'lucide-react'; // Added Trash2
import { useMemo, useState } from 'react';
import { router } from '@inertiajs/react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
function Participants({ bookings, bookingForm = [], tab, onDelete }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [genderFilter, setGenderFilter] = useState('all');
    const [visitedFilter, setVisitedFilter] = useState('all'); // New state for visited filter
    const [selectedParticipant, setSelectedParticipant] = useState(null);
    const itemsPerPage = 10;

    const normalizeKey = (key) => {
        if (!key || typeof key !== 'string') return '';
        let k = key.replace(/\s+/gu, '_').replaceAll('.', '_');
        k = k.replace(/[^A-Za-z0-9_]/gu, '_').replace(/_+/gu, '_');
        return k.replace(/^_+|_+$/g, '');
    };

    const lang = (() => {
        const v = (tab || '').toLowerCase();
        if (v.includes('fr')) return 'fr';
        if (v.includes('ar')) return 'ar';
        return 'en';
    })();

    const labelByKey = useMemo(() => {
        const map = {};
        const arr = Array.isArray(bookingForm) ? bookingForm : [];
        for (const f of arr) {
            const rawKey = f?.key;
            if (!rawKey) continue;
            const k = normalizeKey(rawKey);
            if (!k) continue;
            const label = f?.label;
            if (typeof label === 'string') map[k] = label;
            else if (label && typeof label === 'object') map[k] = label[lang] || label.en || label.fr || label.ar;
        }
        // sensible fallbacks for defaults
        map.name ||= 'Name';
        map.email ||= 'Email';
        map.phone ||= 'Phone';
        map.gender ||= 'Gender';
        return map;
    }, [bookingForm, lang]);

    const prettyKey = (k) => {
        if (!k) return '';
        const raw = labelByKey[k];
        if (raw) return raw;
        return k
            .replaceAll('_', ' ')
            .replace(/\b\w/g, (c) => c.toUpperCase());
    };

    const formatValue = (v) => {
        if (v === null || v === undefined) return '-';
        if (Array.isArray(v)) return v.length ? v.join(', ') : '-';
        if (typeof v === 'boolean') return v ? 'Yes' : 'No';
        if (typeof v === 'object') return JSON.stringify(v);
        const s = String(v).trim();
        return s.length ? s : '-';
    };

    const filteredParticipants = useMemo(() => {
        return bookings.filter((participant) => {
            const matchesSearch =
                participant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                participant.email.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesGender = genderFilter === 'all' || participant.gender === genderFilter;
            const matchesVisited = visitedFilter === 'all' || (visitedFilter === 'true' && participant.is_visited) || (visitedFilter === 'false' && !participant.is_visited);
            return matchesSearch && matchesGender && matchesVisited; // Include visited filter
        });
    }, [bookings, searchTerm, genderFilter, visitedFilter]); // Add visitedFilter to dependencies

    const totalPages = Math.ceil(filteredParticipants.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedParticipants = filteredParticipants.slice(startIndex, startIndex + itemsPerPage);

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        setCurrentPage(1);
    };

    const handleGenderFilterChange = (value) => {
        setGenderFilter(value);
        setCurrentPage(1);
    };

    const handleVisitedFilterChange = (value) => { // New handler for visited filter
        setVisitedFilter(value);
        setCurrentPage(1);
    };

    return (
        <>
        <Card className="hidden md:block">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                        <Users className="h-5 w-5" />
                        Participants ({filteredParticipants.length.toLocaleString()})
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                        Page {currentPage} of {totalPages}
                    </Badge>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <div className="relative flex-1">
                        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
                        <Input
                            placeholder="Search by name or email..."
                            className="pl-10"
                            value={searchTerm}
                            onChange={(e) => handleSearchChange(e.target.value)}
                        />
                    </div>
                    <Select value={genderFilter} onValueChange={handleGenderFilterChange}>
                        <SelectTrigger className="w-full sm:w-48">
                            <Filter className="mr-2 h-4 w-4" />
                            <SelectValue placeholder="Filter by gender" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Genders</SelectItem>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                    </Select>
                    {/* New Select for visited filter */}
                    <Select value={visitedFilter} onValueChange={handleVisitedFilterChange}>
                        <SelectTrigger className="w-full sm:w-48">
                            <Filter className="mr-2 h-4 w-4" />
                            <SelectValue placeholder="Filter by visited status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Statuses</SelectItem>
                            <SelectItem value="true">Visited</SelectItem>
                            <SelectItem value="false">Not Visited</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardHeader>
            <CardContent>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="px-2 py-3 text-left font-medium text-muted-foreground">#</th>
                                <th className="px-2 py-3 text-left font-medium text-muted-foreground">Name</th>
                                <th className="px-2 py-3 text-left font-medium text-muted-foreground">Email</th>
                                <th className="px-2 py-3 text-left font-medium text-muted-foreground">Gender</th>
                                {/* <th className="px-2 py-3 text-left font-medium text-muted-foreground">Phone</th> */}
                                {/* <th className="px-2 py-3 text-left font-medium text-muted-foreground">Booked at</th> */}
                                <th className="px-2 py-3 text-left font-medium text-muted-foreground">Visited</th>
                                {onDelete && <th className="px-2 py-3 text-left font-medium text-muted-foreground">Actions</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedParticipants.map((participant, index) => (
                                <tr
                                    key={participant.id}
                                    onClick={() => setSelectedParticipant(participant)}
                                    className={`border-b cursor-pointer ${participant.is_visited ? 'bg-green-50/50' : 'hover:bg-muted/50'}`}
                                >
                                    <td className="px-2 py-3 text-sm">{startIndex + index + 1}</td>
                                    <td className="px-2 py-3 font-medium">{participant.name}</td>
                                    <td className="px-2 py-3 text-sm text-muted-foreground">{participant.email}</td>
                                    <td className="px-2 py-3 text-sm capitalize">{participant.gender || '-'}</td>
                                    {/* <td className="px-2 py-3 text-sm">{participant.phone || '-'}</td> */}
                                  
                                    {/* <td className="px-2 py-3 text-sm text-muted-foreground">{new Date(participant.created_at).toLocaleString()}</td> */}
                                    <td className="px-2 py-3 text-sm">
                                        {participant.is_visited ? (
                                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                                        ) : (
                                            <XCircle className="h-5 w-5 text-red-500" />
                                        )}
                                    </td> {/* Display visited status */}
                                    {onDelete && (
                                        <td className="px-2 py-3 text-sm">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onDelete(participant.id);
                                                }}
                                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {filteredParticipants.length === 0 && (
                    <div className="py-8 text-center text-muted-foreground">No participants found matching your criteria.</div>
                )}

                {totalPages > 1 && (
                    <div className="mt-4 flex items-center justify-between border-t pt-4">
                        <p className="text-sm text-muted-foreground">
                            Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredParticipants.length)} of{' '}
                            {filteredParticipants.length.toLocaleString()} participants
                        </p>
                        <div className="flex items-center gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                                disabled={currentPage === 1}
                            >
                                <ChevronLeft className="h-4 w-4" />
                                Previous
                            </Button>
                            <div className="flex items-center gap-1">
                                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                    let pageNum;
                                    if (totalPages <= 5) {
                                        pageNum = i + 1;
                                    } else if (currentPage <= 3) {
                                        pageNum = i + 1;
                                    } else if (currentPage >= totalPages - 2) {
                                        pageNum = totalPages - 4 + i;
                                    } else {
                                        pageNum = currentPage - 2 + i;
                                    }

                                    return (
                                        <Button
                                            key={pageNum}
                                            variant={currentPage === pageNum ? 'default' : 'outline'}
                                            size="sm"
                                            className="h-8 w-8 p-0"
                                            onClick={() => setCurrentPage(pageNum)}
                                        >
                                            {pageNum}
                                        </Button>
                                    );
                                })}
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                                disabled={currentPage === totalPages}
                            >
                                Next
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
        <Dialog open={!!selectedParticipant} onOpenChange={(open) => !open && setSelectedParticipant(null)}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Participant details</DialogTitle>
                    <DialogDescription>
                        {selectedParticipant?.name ? selectedParticipant.name : 'Participant'}
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-3 rounded-lg border p-4 sm:grid-cols-2">
                        <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">{prettyKey('email')}</p>
                            <p className="text-sm font-medium break-all">{selectedParticipant?.email || '-'}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">{prettyKey('phone')}</p>
                            <p className="text-sm font-medium">{selectedParticipant?.phone || '-'}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">{prettyKey('gender')}</p>
                            <p className="text-sm font-medium capitalize">{selectedParticipant?.gender || '-'}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-xs text-muted-foreground">Visited</p>
                            <div className="pt-0.5">
                                {selectedParticipant?.is_visited ? (
                                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Visited</Badge>
                                ) : (
                                    <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Not visited</Badge>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm font-semibold">Other information</p>
                        <div className="max-h-72 overflow-auto rounded-lg border">
                            {(() => {
                                const fd = selectedParticipant?.form_data || {};
                                const data = typeof fd === 'object' && fd ? fd : {};
                                const excluded = new Set(['name', 'email', 'phone', 'gender']);
                                const rows = Object.entries(data)
                                    .filter(([k, v]) => {
                                        const nk = normalizeKey(k);
                                        if (!nk || excluded.has(nk)) return false;
                                        if (v === null || v === undefined) return false;
                                        if (Array.isArray(v) && v.length === 0) return false;
                                        if (typeof v === 'string' && v.trim() === '') return false;
                                        return true;
                                    })
                                    .sort(([a], [b]) => a.localeCompare(b));

                                if (!rows.length) {
                                    return <div className="p-4 text-sm text-muted-foreground">No extra information.</div>;
                                }

                                return (
                                    <div className="divide-y">
                                        {rows.map(([k, v]) => {
                                            const nk = normalizeKey(k);
                                            return (
                                                <div key={k} className="flex items-start justify-between gap-4 p-4">
                                                    <p className="text-sm font-medium">{prettyKey(nk || k)}</p>
                                                    <p className="text-sm text-muted-foreground text-right max-w-[60%] break-words">
                                                        {formatValue(v)}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                );
                            })()}
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
        </>
    );
}
export default Participants;
