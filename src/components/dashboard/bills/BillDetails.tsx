
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Bill } from '@/types/bill.types';

interface BillDetailsProps {
  bill: Bill;
}

export const BillDetails: React.FC<BillDetailsProps> = ({ bill }) => {
  return (
    <div className="flex items-center justify-between p-2 bg-muted/40 rounded-md">
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
  );
};
