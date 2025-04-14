
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { PieChart, Plus, Filter, AlertTriangle, BarChart, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock data - will be replaced with actual data from Firebase
const mockBudgetData = [
  { category: "Housing", allocated: 1200, spent: 1100, color: "bg-primary" },
  { category: "Food", allocated: 500, spent: 450, color: "bg-pine-500" },
  { category: "Transportation", allocated: 300, spent: 310, color: "bg-finance-600" },
  { category: "Entertainment", allocated: 200, spent: 250, color: "bg-amber-500" },
  { category: "Shopping", allocated: 250, spent: 210, color: "bg-rose-500" },
  { category: "Utilities", allocated: 180, spent: 165, color: "bg-violet-500" },
];

const BudgetComponent = () => {
  const navigate = useNavigate();
  const [selectedView, setSelectedView] = useState<'all' | 'warning'>('all');

  // Calculate total budget stats
  const totalAllocated = mockBudgetData.reduce((sum, item) => sum + item.allocated, 0);
  const totalSpent = mockBudgetData.reduce((sum, item) => sum + item.spent, 0);
  const percentUsed = (totalSpent / totalAllocated) * 100;
  const remaining = totalAllocated - totalSpent;

  // Filter categories based on view
  const filteredBudgets = selectedView === 'warning'
    ? mockBudgetData.filter(budget => budget.spent >= budget.allocated)
    : mockBudgetData;

  const overBudgetCount = mockBudgetData.filter(budget => budget.spent > budget.allocated).length;

  return (
    <Card className="shadow-md animate-in">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div className="flex-1">
            <CardTitle className="flex items-center gap-2 text-xl">
              <PieChart className="h-5 w-5 text-primary" />
              Budget Overview
            </CardTitle>
            <CardDescription>Track your monthly budget progress</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant={selectedView === 'all' ? "default" : "outline"} 
              size="sm" 
              onClick={() => setSelectedView('all')}
              className="text-xs"
            >
              <BarChart className="h-3.5 w-3.5 mr-1" />
              All
            </Button>
            <Button 
              variant={selectedView === 'warning' ? "default" : "outline"} 
              size="sm" 
              onClick={() => setSelectedView('warning')}
              className="text-xs"
            >
              <AlertTriangle className="h-3.5 w-3.5 mr-1" />
              Warnings
              {overBudgetCount > 0 && (
                <span className="ml-1.5 bg-background/20 text-xs py-0.5 px-1.5 rounded-full">
                  {overBudgetCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="col-span-1 bg-muted/50 p-4 rounded-lg">
            <div className="flex flex-col h-full justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Monthly Budget</p>
                <h3 className="text-2xl font-bold mb-2">${totalAllocated.toLocaleString()}</h3>
                <div className="mb-1.5 flex justify-between text-sm">
                  <span>Spent: ${totalSpent.toLocaleString()}</span>
                  <span className={remaining >= 0 ? "text-green-600" : "text-destructive"}>
                    Remaining: ${remaining.toLocaleString()}
                  </span>
                </div>
              </div>
              
              <div>
                <Progress 
                  value={percentUsed} 
                  className="h-2 mb-2" 
                  indicatorClassName={remaining >= 0 ? "bg-primary" : "bg-destructive"} 
                />
                <p className="text-xs text-muted-foreground">
                  {percentUsed.toFixed(0)}% of budget used
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 lg:col-span-2">
            <div className="space-y-4">
              {filteredBudgets.map((budget, index) => {
                const percentUsed = (budget.spent / budget.allocated) * 100;
                const isOverBudget = budget.spent > budget.allocated;
                
                return (
                  <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-2 ${budget.color}`}></div>
                        <span className="text-sm font-medium">{budget.category}</span>
                      </div>
                      <div className="text-sm">
                        <span className={isOverBudget ? "text-destructive font-medium" : ""}>
                          ${budget.spent.toLocaleString()}
                        </span>
                        <span className="text-muted-foreground"> / ${budget.allocated.toLocaleString()}</span>
                      </div>
                    </div>
                    <Progress 
                      value={percentUsed > 100 ? 100 : percentUsed} 
                      className="h-2" 
                      indicatorClassName={isOverBudget ? "bg-destructive" : budget.color}
                    />
                  </div>
                );
              })}
              
              {filteredBudgets.length === 0 && (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <AlertTriangle className="h-10 w-10 text-amber-500 mb-2" />
                  <h3 className="font-medium">No budget warnings</h3>
                  <p className="text-sm text-muted-foreground">All budget categories are currently under control.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <div className="flex justify-between w-full">
          <Button variant="outline" size="sm" onClick={() => navigate('/budgets')}>
            <Filter className="h-4 w-4 mr-1" />
            Filter Categories
          </Button>
          <Button size="sm" onClick={() => navigate('/budgets/new')}>
            <Plus className="h-4 w-4 mr-1" />
            Add Budget
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BudgetComponent;
