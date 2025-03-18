
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { PlusCircle, Save } from 'lucide-react';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Description must be at least 2 characters' }),
  amount: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: 'Amount must be a positive number',
  }),
  category: z.string().min(1, { message: 'Please select a category' }),
  type: z.enum(['expense', 'income']),
});

type FormValues = z.infer<typeof formSchema>;

const categories = [
  { id: 'food', name: 'Food & Dining' },
  { id: 'housing', name: 'Housing' },
  { id: 'transportation', name: 'Transportation' },
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'utilities', name: 'Bills & Utilities' },
  { id: 'travel', name: 'Travel' },
  { id: 'shopping', name: 'Shopping' },
  { id: 'health', name: 'Health & Medical' },
  { id: 'education', name: 'Education' },
  { id: 'other', name: 'Other' },
];

const TransactionForm = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      amount: '',
      category: '',
      type: 'expense',
    },
  });

  const onSubmit = (data: FormValues) => {
    // In a real app, this would save to a database
    console.log('Transaction data:', {
      ...data,
      amount: parseFloat(data.amount),
      date: new Date().toISOString(),
    });
    
    toast({
      title: "Transaction Added",
      description: `Added ${data.type}: ${data.name} for $${data.amount}`,
    });
    
    // Reset form
    form.reset();
    
    // Collapse form after submission
    setIsExpanded(false);
  };

  return (
    <Card className="animate-in">
      <CardHeader className="pb-2">
        <CardTitle>Add Transaction</CardTitle>
        <CardDescription>Record your income or expenses</CardDescription>
      </CardHeader>
      <CardContent>
        {!isExpanded ? (
          <Button 
            onClick={() => setIsExpanded(true)} 
            className="w-full"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            New Transaction
          </Button>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="flex space-x-4">
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="expense">Expense</SelectItem>
                          <SelectItem value="income">Income</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Amount</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="0.00"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Grocery shopping, Salary, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem 
                            key={category.id} 
                            value={category.id}
                          >
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="flex justify-end space-x-2 pt-2">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setIsExpanded(false)}
                >
                  Cancel
                </Button>
                <Button type="submit">
                  <Save className="mr-2 h-4 w-4" />
                  Save Transaction
                </Button>
              </div>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  );
};

export default TransactionForm;
