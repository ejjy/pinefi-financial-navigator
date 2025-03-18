
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

interface SavingsGoal {
  id: number;
  name: string;
  targetAmount: number;
  currentAmount: number;
  targetDate: string;
  color: string;
}

const goals: SavingsGoal[] = [
  {
    id: 1,
    name: 'Emergency Fund',
    targetAmount: 10000,
    currentAmount: 7500,
    targetDate: 'December 2023',
    color: 'bg-pine-500'
  },
  {
    id: 2,
    name: 'New Car',
    targetAmount: 20000,
    currentAmount: 5200,
    targetDate: 'June 2024',
    color: 'bg-finance-500'
  },
  {
    id: 3,
    name: 'Vacation',
    targetAmount: 3000,
    currentAmount: 2100,
    targetDate: 'August 2023',
    color: 'bg-amber-500'
  }
];

const SavingsGoals = () => {
  return (
    <Card className="animate-in">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Savings Goals</CardTitle>
          <CardDescription>Track progress toward your financial goals</CardDescription>
        </div>
        <Button size="sm">
          <PlusCircle className="h-4 w-4 mr-2" />
          Add Goal
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map((goal) => (
            <div key={goal.id} className="space-y-2">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-sm font-medium">{goal.name}</h3>
                  <p className="text-xs text-muted-foreground">Target: {goal.targetDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">
                    ${goal.currentAmount.toLocaleString()} / ${goal.targetAmount.toLocaleString()}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {Math.round((goal.currentAmount / goal.targetAmount) * 100)}% Complete
                  </p>
                </div>
              </div>
              <div className="relative">
                <Progress 
                  value={(goal.currentAmount / goal.targetAmount) * 100} 
                  className="h-2"
                />
                <div 
                  className={`absolute top-0 left-0 h-2 rounded-full ${goal.color}`} 
                  style={{ width: `${(goal.currentAmount / goal.targetAmount) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SavingsGoals;
