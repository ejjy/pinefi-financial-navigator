
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  TrendingUp, Dices, LineChart, Clock, 
  Bot, CircleHelp, Sparkles, Lightbulb, Leaf 
} from 'lucide-react';

const AICapabilitiesCard = () => {
  return (
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
  );
};

export default AICapabilitiesCard;
