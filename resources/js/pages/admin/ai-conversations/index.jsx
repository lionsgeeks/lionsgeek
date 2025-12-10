import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { Head, router, usePage } from '@inertiajs/react';
import { Download, MessageSquare, Eye, Trash2, Calendar, User, FileText } from 'lucide-react';
import { useState } from 'react';
import AdminPageHeader from '../components/AdminPageHeader';

export default function Index() {
    const { conversations } = usePage().props;
    const [selectedConversation, setSelectedConversation] = useState(null);

    const formatDate = (date) => {
        if (!date) return 'N/A';
        return new Date(date).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const getPreview = (messages) => {
        if (!messages || !Array.isArray(messages)) return 'No messages';
        const userMessages = messages.filter(m => m.sender === 'user').slice(0, 2);
        return userMessages.map(m => m.text).join(' | ') || 'No user messages';
    };

    const handleExport = (format = 'json') => {
        router.get(`/admin/ai-conversations/export?format=${format}`);
    };

    const handleView = (conversation) => {
        router.visit(`/admin/ai-conversations/${conversation.id}`);
    };

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this conversation?')) {
            router.delete(`/admin/ai-conversations/${id}`, {
                preserveScroll: true,
            });
        }
    };

    return (
        <AppLayout>
            <Head title="AI Conversations" />
            <AdminPageHeader
                icon={MessageSquare}
                title="AI Conversations"
                description="View and manage all chatbot conversations"
            />

            <div className="space-y-6">
                {/* Actions Bar */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-sm">
                            Total: {conversations?.total || 0}
                        </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            onClick={() => handleExport('json')}
                            variant="outline"
                            size="sm"
                            className="gap-2"
                        >
                            <Download className="w-4 h-4" />
                            Export JSON
                        </Button>
                        <Button
                            onClick={() => handleExport('csv')}
                            variant="outline"
                            size="sm"
                            className="gap-2"
                        >
                            <Download className="w-4 h-4" />
                            Export CSV
                        </Button>
                    </div>
                </div>

                {/* Conversations List */}
                <div className="grid gap-4">
                    {conversations?.data?.map((conversation) => (
                        <Card key={conversation.id} className="hover:shadow-md transition-shadow">
                            <CardContent className="p-4">
                                <div className="flex items-start justify-between">
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center gap-3">
                                            <MessageSquare className="w-5 h-5 text-alpha" />
                                            <div>
                                                <p className="font-semibold text-sm">
                                                    Session: {conversation.session_id}
                                                </p>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {getPreview(conversation.messages)}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 text-xs text-gray-600">
                                            <div className="flex items-center gap-1">
                                                <FileText className="w-3 h-3" />
                                                {conversation.message_count} messages
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {formatDate(conversation.started_at)}
                                            </div>
                                            {conversation.user_ip && (
                                                <div className="flex items-center gap-1">
                                                    <User className="w-3 h-3" />
                                                    {conversation.user_ip}
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Button
                                            onClick={() => handleView(conversation)}
                                            variant="outline"
                                            size="sm"
                                            className="gap-2"
                                        >
                                            <Eye className="w-4 h-4" />
                                            View
                                        </Button>
                                        <Button
                                            onClick={() => handleDelete(conversation.id)}
                                            variant="outline"
                                            size="sm"
                                            className="gap-2 text-red-600 hover:text-red-700"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    {(!conversations?.data || conversations.data.length === 0) && (
                        <Card>
                            <CardContent className="p-8 text-center">
                                <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                <p className="text-gray-500">No conversations found</p>
                            </CardContent>
                        </Card>
                    )}
                </div>

                {/* Pagination */}
                {conversations?.links && (
                    <div className="flex items-center justify-center gap-2">
                        {conversations.links.map((link, index) => (
                            <Button
                                key={index}
                                onClick={() => link.url && router.visit(link.url)}
                                variant={link.active ? 'default' : 'outline'}
                                size="sm"
                                disabled={!link.url}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                            />
                        ))}
                    </div>
                )}
            </div>
        </AppLayout>
    );
}

