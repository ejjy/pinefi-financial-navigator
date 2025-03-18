
import React, { useState, useRef, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bot, User, Send, Sparkles, Dices, CircleHelp, LineChart, Clock } from 'lucide-react';

interface Message {
  id: number;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

const SuggestedQuestions = [
  {
    text: "How much did I spend on food this month?",
    icon: <LineChart className="h-4 w-4" />
  },
  {
    text: "When is my next bill due?",
    icon: <Clock className="h-4 w-4" />
  },
  {
    text: "What's my current savings progress?",
    icon: <Dices className="h-4 w-4" />
  },
  {
    text: "How can I reduce my expenses?",
    icon: <CircleHelp className="h-4 w-4" />
  }
];

const AIAssistant = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'ai',
      text: "Hello! I'm your PineFi AI Financial Assistant. I can help you understand your finances, suggest ways to save money, answer questions about your spending, and much more. What would you like to know today?",
      timestamp: new Date()
    }
  ]);
  
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text: string = input) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: text,
      timestamp: new Date()
    };
    
    setMessages([...messages, userMessage]);
    setInput('');

    // Simulate AI response - in a real app this would call an AI service
    setTimeout(() => {
      let aiResponse = '';
      
      // Simple pattern matching to generate relevant responses
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes('spend') && lowerText.includes('food')) {
        aiResponse = "Based on your transaction history, you've spent $487.32 on food this month. This is about 15% of your total monthly expenses. This is slightly higher than your average of $420 per month.";
      } else if (lowerText.includes('next bill') || lowerText.includes('bill due')) {
        aiResponse = "Your next bill is your electricity bill of $87.45, due on May 22nd. Would you like me to set a reminder for you?";
      } else if (lowerText.includes('savings')) {
        aiResponse = "You're making great progress on your savings goals! You've saved $9,800 so far this year, which is 65% of your annual target. Your emergency fund is now at 75% of your 6-month goal.";
      } else if (lowerText.includes('reduce') && lowerText.includes('expenses')) {
        aiResponse = "I've analyzed your spending patterns and found a few opportunities to reduce expenses:\n\n1. You're spending $45/month on a streaming service you rarely use\n2. Your grocery spending could be optimized by shopping at different stores\n3. Consider refinancing your loan to save on interest payments\n\nWould you like a detailed plan for any of these areas?";
      } else {
        const responses = [
          "Based on your spending patterns, you could save around $120 this month by reducing restaurant expenses.",
          "I notice you have several recurring subscriptions totaling $65 per month. Would you like me to analyze which ones you're using the most?",
          "Your investment portfolio has grown by 8.2% this year, outperforming the market average of 7.5%.",
          "You've achieved 85% of your monthly savings goal. Great job!",
          "I've detected an unusual transaction of $250 at Electronics Store yesterday. Does this look familiar to you?"
        ];
        aiResponse = responses[Math.floor(Math.random() * responses.length)];
      }

      const aiMessage: Message = {
        id: messages.length + 2,
        sender: 'ai',
        text: aiResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          AI Financial Assistant
        </h1>
        <p className="text-muted-foreground">Your personal finance advisor powered by AI</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-3">
          <Card className="h-[calc(100vh-15rem)]">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex-grow overflow-auto pr-2">
                <div className="space-y-6">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-4 ${
                        message.sender === 'user' ? 'justify-end' : ''
                      }`}
                    >
                      {message.sender === 'ai' && (
                        <div className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          <Bot className="h-5 w-5" />
                        </div>
                      )}
                      <div
                        className={`rounded-lg px-4 py-3 max-w-[80%] ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground ml-auto'
                            : 'bg-muted border border-border'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm">
                            {message.sender === 'user' ? 'You' : 'PineFi Assistant'}
                          </span>
                          <span className="text-xs opacity-70">
                            {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        <p className="whitespace-pre-line">{message.text}</p>
                      </div>
                      {message.sender === 'user' && (
                        <div className="flex-shrink-0 h-8 w-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                          <User className="h-5 w-5" />
                        </div>
                      )}
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask about your finances..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-grow"
                  />
                  <Button onClick={() => handleSendMessage()} disabled={!input.trim()}>
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-sm font-medium mb-3">Suggested Questions</h3>
              <div className="space-y-2">
                {SuggestedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-2 px-3"
                    onClick={() => handleSendMessage(question.text)}
                  >
                    <div className="mr-2 flex-shrink-0">{question.icon}</div>
                    <span className="text-sm">{question.text}</span>
                  </Button>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-border">
                <h3 className="text-sm font-medium mb-3">AI Features</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Financial insights based on your spending</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Budget recommendations and savings tips</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Bill and payment reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Tax optimization suggestions</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default AIAssistant;
