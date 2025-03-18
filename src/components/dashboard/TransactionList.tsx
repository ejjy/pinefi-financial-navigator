
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, 
  Home, 
  Car, 
  Coffee, 
  Utensils, 
  Smartphone, 
  MoreVertical,
  Calendar,
  Filter
} from 'lucide-react';

interface Transaction {
  id: number;
  name: string;
  amount: number;
  type: 'expense' | 'income';
  category: string;
  date: string;
  icon: React.ReactNode;
}

const transactions: Transaction[] = [
  {
    id: 1,
    name: 'Grocery Shopping',
    amount: 68.50,
    type: 'expense',
    category: 'Food',
    date: 'Today, 2:34 PM',
    icon: <ShoppingCart className="h-4 w-4" />
  },
  {
    id: 2,
    name: 'Rent Payment',
    amount: 1200.00,
    type: 'expense',
    category: 'Housing',
    date: 'Yesterday, 9:12 AM',
    icon: <Home className="h-4 w-4" />
  },
  {
    id: 3,
    name: 'Paycheck Deposit',
    amount: 2450.00,
    type: 'income',
    category: 'Salary',
    date: 'May 15, 10:00 AM',
    icon: <Smartphone className="h-4 w-4" />
  },
  {
    id: 4,
    name: 'Gas Station',
    amount: 45.75,
    type: 'expense',
    category: 'Transportation',
    date: 'May 14, 5:30 PM',
    icon: <Car className="h-4 w-4" />
  },
  {
    id: 5,
    name: 'Coffee Shop',
    amount: 4.50,
    type: 'expense',
    category: 'Food & Drink',
    date: 'May 14, 9:15 AM',
    icon: <Coffee className="h-4 w-4" />
  },
  {
    id: 6,
    name: 'Restaurant Dinner',
    amount: 85.20,
    type: 'expense',
    category: 'Food & Drink',
    date: 'May 13, 8:40 PM',
    icon: <Utensils className="h-4 w-4" />
  }
];

const TransactionList = () => {
  return (
    <Card className="animate-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>Your latest financial activity</CardDescription>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" className="h-8">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Date Range</span>
          </Button>
          <Button variant="outline" size="sm" className="h-8">
            <Filter className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Filter</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-md transition-colors">
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${
                  transaction.type === 'expense' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
                }`}>
                  {transaction.icon}
                </div>
                <div>
                  <p className="font-medium text-sm">{transaction.name}</p>
                  <p className="text-xs text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`font-medium ${
                  transaction.type === 'expense' ? 'text-red-600' : 'text-green-600'
                }`}>
                  {transaction.type === 'expense' ? '-' : '+'}${transaction.amount.toFixed(2)}
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Category</DropdownMenuItem>
                    <DropdownMenuItem>Add to Budget</DropdownMenuItem>
                    <DropdownMenuItem>Download Receipt</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TransactionList;
