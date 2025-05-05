
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, CircleHelp } from 'lucide-react';

const AIUsageGuideCard = () => {
  return (
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
  );
};

export default AIUsageGuideCard;
