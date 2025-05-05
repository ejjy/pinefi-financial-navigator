
import React, { useState, useRef, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bot, Dices, CircleHelp, LineChart, Clock, 
  Sparkles, Brain, Lightbulb, BookOpen, Leaf, TrendingUp 
} from 'lucide-react';
import ChatAssistant from '@/components/dashboard/ChatAssistant';

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

        <div className="md:col-span-1 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-primary" />
                AI Capabilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <Tabs defaultValue="insights">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="insights">Insights</TabsTrigger>
                  <TabsTrigger value="actions">Actions</TabsTrigger>
                </TabsList>
                
                <TabsContent value="insights" className="pt-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Spending pattern analysis</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Dices className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Budget optimization suggestions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <LineChart className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Investment performance tracking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Leaf className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Savings growth projections</span>
                    </li>
                  </ul>
                </TabsContent>
                
                <TabsContent value="actions" className="pt-4">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <Clock className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Set bill payment reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Bot className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Automate expense categorization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleHelp className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Answer financial questions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Find savings opportunities</span>
                    </li>
                  </ul>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                How to use AI Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-0">
              <div className="space-y-3">
                <div className="bg-muted p-3 rounded-md">
                  <p className="text-sm font-medium">Ask specific questions</p>
                  <p className="text-xs text-muted-foreground">
                    "How much did I spend on dining last month?"
                  </p>
                </div>
                
                <div className="bg-muted p-3 rounded-md">
                  <p className="text-sm font-medium">Request recommendations</p>
                  <p className="text-xs text-muted-foreground">
                    "How can I reduce my monthly expenses?"
                  </p>
                </div>
                
                <div className="bg-muted p-3 rounded-md">
                  <p className="text-sm font-medium">Set financial goals</p>
                  <p className="text-xs text-muted-foreground">
                    "Help me create a savings plan for a vacation"
                  </p>
                </div>
              </div>
              
              <Button variant="outline" className="w-full" size="sm">
                <CircleHelp className="h-4 w-4 mr-2" />
                View full tutorial
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default AIAssistant;
