import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarClock, Plus, ArrowRight, AlertCircle } from 'lucide-react';
import { addDays, format, isSameDay, startOfToday } from 'date-fns';
import { useNavigate } from 'react-router-dom';

// Mock bill data - will be replaced with actual data from Firebase
const mockBills = [
  { 
    id: '1', 
    name: 'Rent', 
    amount: 1200, 
    dueDate: addDays(startOfToday(), 2), 
    paid: false, 
    automatic: false,
    recurring: 'monthly'
  },
  { 
    id: '2', 
    name: 'Electricity', 
    amount: 85, 
    dueDate: addDays(startOfToday(), 5), 
    paid: false, 
    automatic: true,
    recurring: 'monthly'
  },
  { 
    id: '3', 
    name: 'Internet', 
    amount: 65, 
    dueDate: addDays(startOfToday(), 10), 
    paid: false, 
    automatic: true,
    recurring: 'monthly'
  },
  { 
    id: '4', 
    name: 'Car Payment', 
    amount: 350, 
    dueDate: addDays(startOfToday(), 15), 
    paid: false, 
    automatic: true,
    recurring: 'monthly'
  },
  { 
    id: '5', 
    name: 'Streaming Services', 
    amount: 35, 
    dueDate: addDays(startOfToday(), -3), 
    paid: true, 
    automatic: true,
    recurring: 'monthly'
  }
];

const BillCalendarComponent = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(startOfToday());
  
  const today = startOfToday();
  const dueBills = mockBills.filter(bill => !bill.paid);
  const upcomingBills = dueBills.filter(bill => bill.dueDate >= today).sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
  const overdueBills = dueBills.filter(bill => bill.dueDate < today).sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
  const selectedDateBills = mockBills.filter(bill => selectedDate && isSameDay(bill.dueDate, selectedDate));
  
  const totalDue = upcomingBills.reduce((sum, bill) => sum + bill.amount, 0);
  const totalOverdue = overdueBills.reduce((sum, bill) => sum + bill.amount, 0);
  
  // Functions for calendar date highlighting
  const billDates = mockBills.map(bill => bill.dueDate);
  
  const isDayWithBill = (date: Date) => {
    return billDates.some(billDate => isSameDay(billDate, date));
  };
  
  return (
    <Card className="shadow-md animate-in">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-xl">
          <CalendarClock className="h-5 w-5 text-primary" />
          Bill Calendar
        </CardTitle>
        <CardDescription>Keep track of upcoming and overdue bills</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="md:col-span-2 p-4">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              className="w-full"
              modifiersStyles={{
                selected: { backgroundColor: 'hsl(var(--primary))', color: 'white' },
                billDay: { 
                  fontWeight: 'bold',
                  border: '1px solid hsl(var(--primary))',
                  borderRadius: '50%'
                }
              }}
              modifiers={{
                billDay: (date) => isDayWithBill(date),
              }}
            />
          </div>
          
          <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-border p-4">
            <div className="flex justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Due this month</p>
                <p className="text-xl font-semibold">${totalDue.toLocaleString()}</p>
              </div>
              {totalOverdue > 0 && (
                <div>
                  <p className="text-sm text-destructive flex items-center">
                    <AlertCircle className="h-3.5 w-3.5 mr-1" />
                    Overdue
                  </p>
                  <p className="text-xl font-semibold text-destructive">${totalOverdue.toLocaleString()}</p>
                </div>
              )}
            </div>
            
            {selectedDate && (
              <div className="mb-4">
                <h3 className="font-medium text-sm mb-2 flex items-center">
                  Bills for {format(selectedDate, 'MMMM d, yyyy')}
                </h3>
                
                {selectedDateBills.length > 0 ? (
                  <div className="space-y-2">
                    {selectedDateBills.map(bill => (
                      <div key={bill.id} className="flex items-center justify-between p-2 bg-muted/40 rounded-md">
                        <div>
                          <p className="font-medium">{bill.name}</p>
                          <p className="text-sm text-muted-foreground">${bill.amount.toLocaleString()}</p>
                        </div>
                        <div>
                          {bill.paid ? (
                            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                              Paid
                            </Badge>
                          ) : bill.automatic ? (
                            <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/20">
                              Automatic
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-amber-500/10 text-amber-500 border-amber-500/20">
                              Due
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-3 text-sm text-muted-foreground">
                    No bills due on this date.
                  </div>
                )}
              </div>
            )}
            
            <div>
              <h3 className="font-medium text-sm mb-2">Upcoming Bills</h3>
              {upcomingBills.length > 0 ? (
                <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                  {upcomingBills.slice(0, 4).map(bill => (
                    <div key={bill.id} className="flex items-center justify-between p-2 bg-muted/40 rounded-md">
                      <div className="flex-1">
                        <p className="font-medium">{bill.name}</p>
                        <p className="text-xs text-muted-foreground">
                          Due {format(bill.dueDate, 'MMM d')}
                          {bill.automatic && ' (Automatic)'}
                        </p>
                      </div>
                      <div>
                        <p className="font-medium">${bill.amount.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                  
                  {upcomingBills.length > 4 && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full text-primary text-sm mt-1"
                      onClick={() => navigate('/calendar')}
                    >
                      View all {upcomingBills.length} bills
                      <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </Button>
                  )}
                </div>
              ) : (
                <div className="text-center py-4 text-sm text-muted-foreground">
                  No upcoming bills.
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" onClick={() => navigate('/calendar')}>
          View Calendar
        </Button>
        <Button size="sm" onClick={() => navigate('/calendar/add')}>
          <Plus className="h-4 w-4 mr-1" />
          Add Bill
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BillCalendarComponent;
