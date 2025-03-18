
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle, Clock, LightbulbIcon, SmartphoneIcon, HomeIcon, WifiIcon } from 'lucide-react';

interface Bill {
  id: number;
  name: string;
  amount: number;
  dueDate: string;
  status: 'upcoming' | 'overdue' | 'paid';
  icon: React.ReactNode;
  autoPay: boolean;
}

const bills: Bill[] = [
  {
    id: 1,
    name: 'Electricity Bill',
    amount: 87.45,
    dueDate: 'May 22, 2023',
    status: 'upcoming',
    icon: <LightbulbIcon className="h-4 w-4" />,
    autoPay: false
  },
  {
    id: 2,
    name: 'Phone Bill',
    amount: 65.00,
    dueDate: 'May 24, 2023',
    status: 'upcoming',
    icon: <SmartphoneIcon className="h-4 w-4" />,
    autoPay: true
  },
  {
    id: 3,
    name: 'Rent Payment',
    amount: 1200.00,
    dueDate: 'June 1, 2023',
    status: 'upcoming',
    icon: <HomeIcon className="h-4 w-4" />,
    autoPay: true
  },
  {
    id: 4,
    name: 'Internet Bill',
    amount: 59.99,
    dueDate: 'May 15, 2023',
    status: 'overdue',
    icon: <WifiIcon className="h-4 w-4" />,
    autoPay: false
  },
  {
    id: 5,
    name: 'Water Bill',
    amount: 42.30,
    dueDate: 'May 10, 2023',
    status: 'paid',
    icon: <LightbulbIcon className="h-4 w-4" />,
    autoPay: false
  }
];

const UpcomingBills = () => {
  const upcomingBills = bills.filter(bill => bill.status === 'upcoming');
  const overdueBills = bills.filter(bill => bill.status === 'overdue');
  const paidBills = bills.filter(bill => bill.status === 'paid');

  return (
    <Card className="h-full animate-in">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <div>
          <CardTitle>Upcoming Bills</CardTitle>
          <CardDescription>Keep track of your bills and payments</CardDescription>
        </div>
        <Button variant="outline" size="sm" className="h-8 whitespace-nowrap">
          <Calendar className="h-4 w-4 mr-2" />
          View Calendar
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="mb-4 grid grid-cols-3 h-9">
            <TabsTrigger value="upcoming" className="text-xs sm:text-sm">
              Upcoming
              {upcomingBills.length > 0 && (
                <Badge variant="secondary" className="ml-1 sm:ml-2 px-1 py-0 h-5 min-w-5 flex items-center justify-center">
                  {upcomingBills.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="overdue" className="text-xs sm:text-sm">
              Overdue
              {overdueBills.length > 0 && (
                <Badge variant="destructive" className="ml-1 sm:ml-2 px-1 py-0 h-5 min-w-5 flex items-center justify-center">
                  {overdueBills.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="paid" className="text-xs sm:text-sm">
              Paid
              {paidBills.length > 0 && (
                <Badge variant="outline" className="ml-1 sm:ml-2 px-1 py-0 h-5 min-w-5 flex items-center justify-center">
                  {paidBills.length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-3 mt-0">
            {upcomingBills.length > 0 ? (
              upcomingBills.map(bill => (
                <BillCard key={bill.id} bill={bill} />
              ))
            ) : (
              <div className="text-center py-6 text-muted-foreground">
                No upcoming bills.
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="overdue" className="space-y-3 mt-0">
            {overdueBills.length > 0 ? (
              overdueBills.map(bill => (
                <BillCard key={bill.id} bill={bill} />
              ))
            ) : (
              <div className="text-center py-6 text-muted-foreground">
                No overdue bills. Great job!
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="paid" className="space-y-3 mt-0">
            {paidBills.length > 0 ? (
              paidBills.map(bill => (
                <BillCard key={bill.id} bill={bill} />
              ))
            ) : (
              <div className="text-center py-6 text-muted-foreground">
                No paid bills yet.
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

interface BillCardProps {
  bill: Bill;
}

const BillCard = ({ bill }: BillCardProps) => {
  return (
    <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
      <div className="flex items-center gap-3 min-w-0">
        <div className={`p-2 rounded-full flex-shrink-0 ${
          bill.status === 'overdue' ? 'bg-red-100 text-red-600' :
          bill.status === 'paid' ? 'bg-green-100 text-green-600' :
          'bg-blue-100 text-blue-600'
        }`}>
          {bill.icon}
        </div>
        <div className="min-w-0">
          <div className="flex items-center flex-wrap gap-1">
            <p className="font-medium text-sm truncate">{bill.name}</p>
            {bill.autoPay && (
              <Badge variant="outline" className="text-xs px-1 h-5">Auto-pay</Badge>
            )}
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            {bill.status === 'overdue' ? (
              <Clock className="h-3 w-3 mr-1 text-red-500 flex-shrink-0" />
            ) : bill.status === 'paid' ? (
              <CheckCircle className="h-3 w-3 mr-1 text-green-500 flex-shrink-0" />
            ) : (
              <Calendar className="h-3 w-3 mr-1 flex-shrink-0" />
            )}
            <span className="truncate">Due {bill.dueDate}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="font-medium text-sm whitespace-nowrap">${bill.amount.toFixed(2)}</span>
        <Button 
          size="sm" 
          variant={bill.status === 'paid' ? 'outline' : 'default'}
          disabled={bill.status === 'paid'}
          className="h-8 px-2 sm:px-3"
        >
          {bill.status === 'paid' ? 'Paid' : 'Pay Now'}
        </Button>
      </div>
    </div>
  );
};

export default UpcomingBills;
