
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  PlusCircle, 
  Filter, 
  Download,
  ChevronDown,
  Search,
  ShoppingCart, 
  Home, 
  Car, 
  Coffee, 
  Utensils, 
  Smartphone,
  Tv,
  Plane,
  Luggage,
  Wallet
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';

interface Expense {
  id: number;
  name: string;
  amount: number;
  category: string;
  date: string;
  icon: React.ReactNode;
}

const expenses: Expense[] = [
  {
    id: 1,
    name: 'Grocery Shopping',
    amount: 68.50,
    category: 'Food & Dining',
    date: 'May 20, 2023',
    icon: <ShoppingCart className="h-4 w-4" />
  },
  {
    id: 2,
    name: 'Rent Payment',
    amount: 1200.00,
    category: 'Housing',
    date: 'May 19, 2023',
    icon: <Home className="h-4 w-4" />
  },
  {
    id: 3,
    name: 'Gas Station',
    amount: 45.75,
    category: 'Transportation',
    date: 'May 18, 2023',
    icon: <Car className="h-4 w-4" />
  },
  {
    id: 4,
    name: 'Netflix Subscription',
    amount: 14.99,
    category: 'Entertainment',
    date: 'May 17, 2023',
    icon: <Tv className="h-4 w-4" />
  },
  {
    id: 5,
    name: 'Coffee Shop',
    amount: 4.50,
    category: 'Food & Dining',
    date: 'May 17, 2023',
    icon: <Coffee className="h-4 w-4" />
  },
  {
    id: 6,
    name: 'Restaurant Dinner',
    amount: 85.20,
    category: 'Food & Dining',
    date: 'May 16, 2023',
    icon: <Utensils className="h-4 w-4" />
  },
  {
    id: 7,
    name: 'Phone Bill',
    amount: 65.00,
    category: 'Bills & Utilities',
    date: 'May 15, 2023',
    icon: <Smartphone className="h-4 w-4" />
  },
  {
    id: 8,
    name: 'Flight Tickets',
    amount: 320.50,
    category: 'Travel',
    date: 'May 14, 2023',
    icon: <Plane className="h-4 w-4" />
  },
  {
    id: 9,
    name: 'Luggage Purchase',
    amount: 120.00,
    category: 'Shopping',
    date: 'May 13, 2023',
    icon: <Luggage className="h-4 w-4" />
  },
  {
    id: 10,
    name: 'ATM Withdrawal',
    amount: 100.00,
    category: 'Cash & Transfers',
    date: 'May 12, 2023',
    icon: <Wallet className="h-4 w-4" />
  }
];

const categories = [
  { name: 'Food & Dining', total: 158.2, color: 'bg-red-500' },
  { name: 'Housing', total: 1200, color: 'bg-blue-500' },
  { name: 'Transportation', total: 45.75, color: 'bg-green-500' },
  { name: 'Entertainment', total: 14.99, color: 'bg-purple-500' },
  { name: 'Bills & Utilities', total: 65, color: 'bg-yellow-500' },
  { name: 'Travel', total: 320.5, color: 'bg-pink-500' },
  { name: 'Shopping', total: 120, color: 'bg-indigo-500' },
  { name: 'Cash & Transfers', total: 100, color: 'bg-gray-500' }
];

const totalSpent = categories.reduce((acc, cat) => acc + cat.total, 0);

const Expenses = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Expenses</h1>
        <p className="text-muted-foreground">Track and manage your spending</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div>
                <CardTitle>Expense Breakdown</CardTitle>
                <CardDescription>Your spending by category</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Select defaultValue="may">
                  <SelectTrigger className="w-[160px] h-8">
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="may">May 2023</SelectItem>
                    <SelectItem value="april">April 2023</SelectItem>
                    <SelectItem value="march">March 2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categories.map((category) => (
                  <div key={category.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{category.name}</span>
                      <div className="text-right">
                        <span className="text-sm font-medium">${category.total.toFixed(2)}</span>
                        <span className="text-xs text-muted-foreground ml-2">
                          ({Math.round((category.total / totalSpent) * 100)}%)
                        </span>
                      </div>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={(category.total / totalSpent) * 100} 
                        className="h-2"
                      />
                      <div 
                        className={`absolute top-0 left-0 h-2 rounded-full ${category.color}`} 
                        style={{ width: `${(category.total / totalSpent) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="font-semibold">Total Expenses</span>
                  <span className="font-semibold">${totalSpent.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage your expense tracking</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start" size="lg">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add New Expense
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Filter className="mr-2 h-4 w-4" />
                Advanced Filters
              </Button>
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Download className="mr-2 h-4 w-4" />
                Export Expenses
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle>Recent Expenses</CardTitle>
          <CardDescription>Your latest transactions and spending</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search expenses..."
                className="pl-8"
              />
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat.name} value={cat.name.toLowerCase().replace(/\s+/g, '-')}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline">
                <Filter className="mr-2 h-4 w-4" />
                Filters
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-start font-medium text-sm py-3 px-4">Name</th>
                  <th className="text-start font-medium text-sm py-3 px-4">Category</th>
                  <th className="text-start font-medium text-sm py-3 px-4">Date</th>
                  <th className="text-end font-medium text-sm py-3 px-4">Amount</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense) => (
                  <tr key={expense.id} className="border-t hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 p-1.5 rounded-full text-primary">
                          {expense.icon}
                        </div>
                        <span className="font-medium">{expense.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">{expense.category}</td>
                    <td className="py-3 px-4">{expense.date}</td>
                    <td className="py-3 px-4 text-end font-medium">
                      -${expense.amount.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Showing 10 of 134 expenses</span>
            <div className="flex items-center gap-1">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Expenses;
