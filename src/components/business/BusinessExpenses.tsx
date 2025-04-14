
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { PlusCircle, Filter, Download, Search, CalendarIcon } from 'lucide-react';

// Mock data - will be replaced with actual data from Firebase
const mockExpenses = [
  { id: '1', date: '2023-04-10', category: 'Rent', description: 'Office Space Monthly Rent', amount: 1200, status: 'Paid' },
  { id: '2', date: '2023-04-08', category: 'Software', description: 'Adobe Creative Cloud', amount: 52.99, status: 'Paid' },
  { id: '3', date: '2023-04-05', category: 'Utilities', description: 'Electric Bill', amount: 187.45, status: 'Paid' },
  { id: '4', date: '2023-04-01', category: 'Advertising', description: 'Google Ads Campaign', amount: 350, status: 'Paid' },
  { id: '5', date: '2023-03-28', category: 'Travel', description: 'Client Meeting Trip', amount: 425.75, status: 'Pending' },
  { id: '6', date: '2023-03-25', category: 'Supplies', description: 'Office Supplies', amount: 78.32, status: 'Pending' },
  { id: '7', date: '2023-03-20', category: 'Services', description: 'Cleaning Service', amount: 120, status: 'Paid' },
  { id: '8', date: '2023-03-15', category: 'Equipment', description: 'New Laptop', amount: 1299.99, status: 'Paid' },
];

const BusinessExpenses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  
  // Filter expenses
  const filteredExpenses = mockExpenses.filter(expense => {
    // Search filter
    const matchesSearch = 
      expense.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Category filter
    const matchesCategory = categoryFilter === 'all' || expense.category === categoryFilter;
    
    // Status filter
    const matchesStatus = statusFilter === 'all' || expense.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });
  
  // Calculate total
  const totalExpenses = filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  
  // Get unique categories
  const categories = Array.from(new Set(mockExpenses.map(expense => expense.category)));
  
  return (
    <Card className="mt-4 shadow-md">
      <CardHeader className="pb-3">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <CardTitle className="text-xl">Business Expenses</CardTitle>
            <CardDescription>Manage and track your business expenses</CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="text-sm">
              <Download className="h-4 w-4 mr-1" />
              Export
            </Button>
            <Button className="text-sm">
              <PlusCircle className="h-4 w-4 mr-1" />
              New Expense
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search expenses..."
              className="pl-8"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <Select 
              value={categoryFilter} 
              onValueChange={setCategoryFilter}
            >
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select 
              value={statusFilter} 
              onValueChange={setStatusFilter}
            >
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Paid">Paid</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="rounded-md border">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="bg-muted/50">
                <tr className="text-left font-medium">
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4 text-right">Amount</th>
                  <th className="py-3 px-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredExpenses.map(expense => (
                  <tr key={expense.id} className="border-t border-border hover:bg-muted/40">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-3.5 w-3.5 text-muted-foreground" />
                        <span>{new Date(expense.date).toLocaleDateString()}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">{expense.category}</td>
                    <td className="py-3 px-4">{expense.description}</td>
                    <td className="py-3 px-4 text-right font-medium">${expense.amount.toFixed(2)}</td>
                    <td className="py-3 px-4">
                      <div className="flex justify-center">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          expense.status === 'Paid'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          {expense.status}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
                
                {filteredExpenses.length === 0 && (
                  <tr>
                    <td colSpan={5} className="py-6 text-center text-muted-foreground">
                      No expenses found matching your filters
                    </td>
                  </tr>
                )}
              </tbody>
              <tfoot className="bg-muted/30 border-t">
                <tr>
                  <td colSpan={3} className="py-2 px-4 font-medium text-right">
                    Total:
                  </td>
                  <td className="py-2 px-4 text-right font-bold">
                    ${totalExpenses.toFixed(2)}
                  </td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-4 border-t">
        <div className="text-sm text-muted-foreground">
          Showing {filteredExpenses.length} of {mockExpenses.length} expenses
        </div>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm" disabled>
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BusinessExpenses;
