
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageSquare, ArrowRight, Bot, User, Sparkles, Lightbulb, Brain, Send, PanelRightOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: number;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
  isLoading?: boolean;
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
  const [isTyping, setIsTyping] = useState(false);
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
    setIsTyping(true);

    // Add loading message
    const loadingMessage: Message = {
      id: messages.length + 2,
      sender: 'ai',
      text: "",
      timestamp: new Date(),
      isLoading: true
    };
    
    setMessages(prev => [...prev, loadingMessage]);

    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false);
      
      // Replace the loading message with the actual response
      setMessages(prev => {
        const newMessages = [...prev];
        // Find the loading message and replace it
        const loadingIndex = newMessages.findIndex(msg => msg.isLoading);
        if (loadingIndex !== -1) {
          let aiResponse = '';
          
          // Simple pattern matching to generate relevant responses
          const lowerText = input.toLowerCase();
          
          if (lowerText.includes('spend') && lowerText.includes('food')) {
            aiResponse = "Based on your transaction history, you've spent $487.32 on food this month. This is about 15% of your total monthly expenses. This is slightly higher than your average of $420 per month.";
          } else if (lowerText.includes('bill') || lowerText.includes('due')) {
            aiResponse = "Your next bill is your electricity bill of $87.45, due on May 22nd. Would you like me to set a reminder for you?";
          } else if (lowerText.includes('savings') || lowerText.includes('save')) {
            aiResponse = "You're making great progress on your savings goals! You've saved $9,800 so far this year, which is 65% of your annual target. Your emergency fund is now at 75% of your 6-month goal.";
          } else if (lowerText.includes('reduce') || lowerText.includes('expenses')) {
            aiResponse = "I've analyzed your spending patterns and found a few opportunities to reduce expenses:\n\n1. You're spending $45/month on a streaming service you rarely use\n2. Your grocery spending could be optimized by shopping at different stores\n3. Consider refinancing your loan to save on interest payments\n\nWould you like a detailed plan for any of these areas?";
          } else if (lowerText.includes('invest') || lowerText.includes('portfolio')) {
            aiResponse = "Your investment portfolio has grown by 8.2% this year, outperforming the market average of 7.5%. I recommend reviewing your asset allocation to ensure it still aligns with your long-term goals.";
          } else if (lowerText.includes('hello') || lowerText.includes('hi') || lowerText.includes('hey')) {
            aiResponse = "Hello! I'm here to help with your financial questions. You can ask about your spending, upcoming bills, savings goals, or investment portfolio.";
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

          newMessages[loadingIndex] = {
            id: newMessages[loadingIndex].id,
            sender: 'ai',
            text: aiResponse,
            timestamp: new Date()
          };
        }
        
        return newMessages;
      });
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    "How much did I spend on groceries?",
    "What are my recurring bills?",
    "How can I improve my savings?",
    "How is my investment portfolio performing?"
  ];

  return (
    <Card className="h-full flex flex-col animate-in shadow-md border-primary/10">
      <CardHeader className="pb-2 border-b">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Sparkles className="h-5 w-5 text-primary" />
          AI Financial Assistant
        </CardTitle>
        <CardDescription>Get personalized financial insights and recommendations</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow overflow-hidden px-4 pt-4 pb-0">
        <ScrollArea className="h-[calc(100%-1rem)] pr-4">
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
                  className={`rounded-lg px-4 py-3 max-w-[80%] ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground ml-auto'
                      : 'bg-muted border border-border'
                  }`}
                >
                  {message.isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className="text-xs mt-1 opacity-70">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </>
                  )}
                </div>
                {message.sender === 'user' && (
                  <div className="flex-shrink-0 bg-primary p-1.5 rounded-full text-primary-foreground">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
            
            {messages.length === 1 && (
              <div className="pt-4 animate-fade-in">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb className="h-4 w-4 text-primary" /> 
                  <p className="text-sm font-medium">Suggested questions</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <Button 
                      key={index} 
                      variant="outline" 
                      size="sm" 
                      className="text-xs border-primary/20 bg-primary/5 hover:bg-primary/10"
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
        </ScrollArea>
      </CardContent>
      <CardFooter className="pt-3 border-t">
        <div className="flex w-full gap-2">
          <Input
            placeholder="Ask about your finances..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-grow"
            disabled={isTyping}
          />
          <Button 
            onClick={handleSendMessage} 
            size="icon" 
            className="shrink-0"
            disabled={!input.trim() || isTyping}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChatAssistant;
