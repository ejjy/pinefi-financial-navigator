
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { startOfToday } from 'date-fns';
import { CalendarClock, Plus, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BillCalendarSection } from './bills/BillCalendarSection';
import { UpcomingBillsSection } from './bills/UpcomingBillsSection';
import { useBills } from '@/hooks/useBills';

const BillCalendarComponent = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(startOfToday());
  const {
    upcomingBills,
    selectedDateBills,
    totalDue,
    totalOverdue,
    isDayWithBill,
  } = useBills(selectedDate);

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
          <div className="md:col-span-2">
            <BillCalendarSection
              selectedDate={selectedDate}
              onSelectDate={setSelectedDate}
              isDayWithBill={isDayWithBill}
              selectedDateBills={selectedDateBills}
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
            
            <UpcomingBillsSection
              upcomingBills={upcomingBills}
              onViewAllClick={() => navigate('/calendar')}
            />
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
