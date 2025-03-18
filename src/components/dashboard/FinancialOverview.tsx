
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowDown, ArrowUp, DollarSign, TrendingUp } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const FinancialOverview = () => {
  return (
    <Card className="animate-in">
      <CardHeader>
        <CardTitle>Financial Overview</CardTitle>
        <CardDescription>Your financial summary for this month</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="personal" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
          </TabsList>
          <TabsContent value="personal" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard 
                title="Total Income"
                value="$5,240.00"
                change="+12.5%"
                trend="up"
                icon={<DollarSign className="h-4 w-4" />}
              />
              <StatCard 
                title="Total Expenses"
                value="$3,680.00"
                change="+4.2%"
                trend="up"
                icon={<ArrowUp className="h-4 w-4" />}
              />
              <StatCard 
                title="Savings"
                value="$1,560.00"
                change="+21.4%"
                trend="up"
                icon={<TrendingUp className="h-4 w-4" />}
              />
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2">Budget Overview</h3>
              <div className="space-y-3">
                <BudgetItem 
                  category="Housing" 
                  spent={1200} 
                  budget={1500} 
                  color="bg-pine-500" 
                />
                <BudgetItem 
                  category="Food & Dining" 
                  spent={520} 
                  budget={600} 
                  color="bg-finance-500" 
                />
                <BudgetItem 
                  category="Transportation" 
                  spent={350} 
                  budget={300} 
                  color="bg-amber-500" 
                />
                <BudgetItem 
                  category="Entertainment" 
                  spent={280} 
                  budget={250} 
                  color="bg-purple-500" 
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="business" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <StatCard 
                title="Revenue"
                value="$12,430.00"
                change="+8.3%"
                trend="up"
                icon={<DollarSign className="h-4 w-4" />}
              />
              <StatCard 
                title="Expenses"
                value="$8,720.00"
                change="-2.1%"
                trend="down"
                icon={<ArrowDown className="h-4 w-4" />}
              />
              <StatCard 
                title="Net Profit"
                value="$3,710.00"
                change="+15.2%"
                trend="up"
                icon={<TrendingUp className="h-4 w-4" />}
              />
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium mb-2">Expense Breakdown</h3>
              <div className="space-y-3">
                <BudgetItem 
                  category="Payroll" 
                  spent={4500} 
                  budget={5000} 
                  color="bg-pine-500" 
                />
                <BudgetItem 
                  category="Office Space" 
                  spent={1200} 
                  budget={1200} 
                  color="bg-finance-500" 
                />
                <BudgetItem 
                  category="Marketing" 
                  spent={980} 
                  budget={1000} 
                  color="bg-amber-500" 
                />
                <BudgetItem 
                  category="Software" 
                  spent={420} 
                  budget={500} 
                  color="bg-purple-500" 
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ReactNode;
}

const StatCard = ({ title, value, change, trend, icon }: StatCardProps) => {
  return (
    <div className="bg-card rounded-lg p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground">{title}</span>
        <div className="bg-primary/10 p-1.5 rounded-full">
          {icon}
        </div>
      </div>
      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold">{value}</span>
        <div className={`text-xs font-medium flex items-center ${
          trend === 'up' ? 'text-green-600' : 'text-red-600'
        }`}>
          {trend === 'up' ? 
            <ArrowUp className="h-3 w-3 mr-1" /> : 
            <ArrowDown className="h-3 w-3 mr-1" />
          }
          {change}
        </div>
      </div>
    </div>
  );
};

interface BudgetItemProps {
  category: string;
  spent: number;
  budget: number;
  color: string;
}

const BudgetItem = ({ category, spent, budget, color }: BudgetItemProps) => {
  const percentage = (spent / budget) * 100;
  const isOverBudget = spent > budget;

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{category}</span>
        <span className="text-sm font-medium">
          ${spent.toLocaleString()} / ${budget.toLocaleString()}
        </span>
      </div>
      <div className="relative">
        <Progress value={percentage > 100 ? 100 : percentage} className={`h-2 ${isOverBudget ? 'bg-red-200' : ''}`} />
        <div 
          className={`absolute top-0 left-0 h-2 rounded-full ${color}`} 
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
    </div>
  );
};

export default FinancialOverview;
