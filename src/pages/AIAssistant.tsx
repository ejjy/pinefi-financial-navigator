
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Brain } from 'lucide-react';
import ChatAssistant from '@/components/dashboard/ChatAssistant';
import AISidebar from '@/components/ai-assistant/AISidebar';

const AIAssistant = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Brain className="h-6 w-6 text-primary" />
          AI Financial Assistant
        </h1>
        <p className="text-muted-foreground">Get personalized insights and advice for your finances</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <ChatAssistant />
        </div>

        <AISidebar />
      </div>
    </MainLayout>
  );
};

export default AIAssistant;
