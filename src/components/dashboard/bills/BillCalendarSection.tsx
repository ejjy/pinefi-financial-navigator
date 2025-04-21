
import React from 'react';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { BillDetails } from './BillDetails';
import { Bill } from '@/types/bill.types';

interface BillCalendarSectionProps {
  selectedDate: Date | undefined;
  onSelectDate: (date: Date | undefined) => void;
  isDayWithBill: (date: Date) => boolean;
  selectedDateBills: Bill[];
}

export const BillCalendarSection: React.FC<BillCalendarSectionProps> = ({
  selectedDate,
  onSelectDate,
  isDayWithBill,
  selectedDateBills,
}) => {
  return (
    <div className="md:col-span-2 p-4">
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={onSelectDate}
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
          billDay: isDayWithBill,
        }}
      />

      {selectedDate && (
        <div className="mb-4">
          <h3 className="font-medium text-sm mb-2 flex items-center">
            Bills for {format(selectedDate, 'MMMM d, yyyy')}
          </h3>
          
          {selectedDateBills.length > 0 ? (
            <div className="space-y-2">
              {selectedDateBills.map(bill => (
                <BillDetails key={bill.id} bill={bill} />
              ))}
            </div>
          ) : (
            <div className="text-center py-3 text-sm text-muted-foreground">
              No bills due on this date.
            </div>
          )}
        </div>
      )}
    </div>
  );
};
