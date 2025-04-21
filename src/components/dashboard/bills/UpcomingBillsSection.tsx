
import React from 'react';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Bill } from '@/types/bill.types';

interface UpcomingBillsSectionProps {
  upcomingBills: Bill[];
  onViewAllClick: () => void;
}

export const UpcomingBillsSection: React.FC<UpcomingBillsSectionProps> = ({
  upcomingBills,
  onViewAllClick,
}) => {
  return (
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
              onClick={onViewAllClick}
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
  );
};
