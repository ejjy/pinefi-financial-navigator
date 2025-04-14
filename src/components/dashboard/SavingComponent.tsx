import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { LineChart, PiggyBank, Plus, TrendingUp, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock data - will be replaced with actual data from Firebase
const mockSavingGoals = [
  { 
    id: '1', 
    name: 'Emergency Fund', 
    current: 5000, 
    target: 10000, 
    targetDate: new Date(2023, 11, 31),
    color: "bg-primary"
  },
  { 
    id: '2', 
    name: 'Vacation', 
    current: 2500, 
    target: 3000, 
    targetDate: new Date(2023, 9, 15),
    color: "bg-emerald-500"
  },
  { 
    id: '3', 
    name: 'New Car', 
    current: 7500, 
    target: 20000, 
    targetDate: new Date(2024, 5, 1),
    color: "bg-blue-500"
  }
];

const SavingComponent = () => {
  const navigate = useNavigate();

  // Calculate total savings
  const totalSaved = mockSavingGoals.reduce((sum, goal) => sum + goal.current, 0);
  const totalTarget = mockSavingGoals.reduce((sum, goal) => sum + goal.target, 0);
  const savingsRate = (totalSaved / totalTarget) * 100;

  return (
    <Card className="shadow-md animate-in h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-xl">
          <PiggyBank className="h-5 w-5 text-primary" />
          Savings Goals
        </CardTitle>
        <CardDescription>Track progress toward your financial goals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center gap-4 bg-muted/50 p-4 rounded-lg">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <p className="text-sm text-muted-foreground">Total Saved</p>
              <p className="text-sm font-medium">{savingsRate.toFixed(0)}%</p>
            </div>
            <Progress value={savingsRate} className="h-2 mb-2" />
            <div className="flex justify-between text-sm">
              <p className="font-medium">${totalSaved.toLocaleString()}</p>
              <p className="text-muted-foreground">of ${totalTarget.toLocaleString()}</p>
            </div>
          </div>
          <div className="sm:border-l sm:pl-4 flex gap-4 sm:flex-col">
            <div className="flex-1 flex items-center gap-2">
              <div className="p-1.5 bg-primary/10 rounded">
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Monthly Goal</p>
                <p className="font-medium">$1,200</p>
              </div>
            </div>
            <div className="flex-1 flex items-center gap-2">
              <div className="p-1.5 bg-primary/10 rounded">
                <Target className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Current Month</p>
                <p className="font-medium">$800</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <h3 className="text-sm font-medium mb-2">Active Saving Goals</h3>
          {mockSavingGoals.map((goal, index) => {
            const percentComplete = (goal.current / goal.target) * 100;
            const daysLeft = Math.ceil((goal.targetDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
            
            return (
              <div key={goal.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{goal.name}</span>
                  <span className="text-sm text-muted-foreground">
                    {daysLeft > 0 ? `${daysLeft} days left` : 'Due date passed'}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Progress 
                    value={percentComplete} 
                    className="h-2 flex-grow" 
                    indicatorClassName={goal.color}
                  />
                  <span className="text-sm font-medium w-12 text-right">
                    {percentComplete.toFixed(0)}%
                  </span>
                </div>
                <div className="flex justify-between mt-1 text-sm">
                  <span>${goal.current.toLocaleString()}</span>
                  <span className="text-muted-foreground">${goal.target.toLocaleString()}</span>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" onClick={() => navigate('/savings')}>
          <LineChart className="h-4 w-4 mr-1" />
          View All
        </Button>
        <Button size="sm" onClick={() => navigate('/savings/new')}>
          <Plus className="h-4 w-4 mr-1" />
          New Goal
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SavingComponent;
