
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare, ArrowRight, Bot, User, Sparkles, Lightbulb } from 'lucide-react';

interface Message {
  id: number;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

const ChatAssistant = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'ai',
      text: "Hello! I'm your PineFi assistant. How can I help with your finances today?",
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Based on your spending, you could save around $120 this month by reducing restaurant expenses.",
        "You've spent $347 on food this month, which is 15% higher than last month.",
        "Your electricity bill is due in 3 days. Would you like me to set a reminder?",
        "You've achieved 85% of your monthly savings goal. Great job!",
        "I found a subscription you might not be using. Would you like details?"
      ];

      const aiMessage: Message = {
        id: messages.length + 2,
        sender: 'ai',
        text: responses[Math.floor(Math.random() * responses.length)],
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

  const suggestedQuestions = [
    "How much did I spend on groceries?",
    "What are my recurring bills?",
    "How can I improve my savings?"
  ];

  return (
    <Card className="h-full flex flex-col animate-in shadow-md">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Sparkles className="h-5 w-5 text-primary" />
          AI Financial Assistant
        </CardTitle>
        <CardDescription>Get personalized financial insights</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow overflow-auto px-4 pt-0">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-2.5 ${
                message.sender === 'user' ? 'justify-end' : ''
              } animate-fade-in`}
            >
              {message.sender === 'ai' && (
                <div className="flex-shrink-0 bg-primary/10 p-1.5 rounded-full text-primary">
                  <Bot className="h-4 w-4" />
                </div>
              )}
              <div
                className={`rounded-lg px-3 py-2 max-w-[80%] ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs mt-1 opacity-70">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
              {message.sender === 'user' && (
                <div className="flex-shrink-0 bg-primary/10 p-1.5 rounded-full text-primary">
                  <User className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
          
          {messages.length === 1 && (
            <div className="pt-4 animate-fade-in">
              <p className="text-sm text-muted-foreground mb-2 flex items-center">
                <Lightbulb className="h-4 w-4 mr-1" /> 
                Suggested questions:
              </p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <Button 
                    key={index} 
                    variant="outline" 
                    size="sm" 
                    className="text-xs"
                    onClick={() => {
                      setInput(question);
                    }}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-3 border-t">
        <div className="flex w-full gap-2">
          <Input
            placeholder="Ask about your finances..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow"
          />
          <Button onClick={handleSendMessage} size="icon" className="shrink-0">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChatAssistant;
