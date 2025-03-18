
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
    <Card className="animate-in">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>Upcoming Bills</CardTitle>
          <CardDescription>Keep track of your bills and payments</CardDescription>
        </div>
        <Button variant="outline" size="sm">
          <Calendar className="h-4 w-4 mr-2" />
          View Calendar
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="mb-4 grid grid-cols-3">
            <TabsTrigger value="upcoming">
              Upcoming
              {upcomingBills.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {upcomingBills.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="overdue">
              Overdue
              {overdueBills.length > 0 && (
                <Badge variant="destructive" className="ml-2">
                  {overdueBills.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="paid">
              Paid
              {paidBills.length > 0 && (
                <Badge variant="outline" className="ml-2">
                  {paidBills.length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="space-y-3">
            {upcomingBills.map(bill => (
              <BillCard key={bill.id} bill={bill} />
            ))}
          </TabsContent>
          
          <TabsContent value="overdue" className="space-y-3">
            {overdueBills.map(bill => (
              <BillCard key={bill.id} bill={bill} />
            ))}
            {overdueBills.length === 0 && (
              <div className="text-center py-6 text-muted-foreground">
                No overdue bills. Great job!
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="paid" className="space-y-3">
            {paidBills.map(bill => (
              <BillCard key={bill.id} bill={bill} />
            ))}
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
    <div className="flex items-center justify-between p-3 border rounded-lg">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full ${
          bill.status === 'overdue' ? 'bg-red-100 text-red-600' :
          bill.status === 'paid' ? 'bg-green-100 text-green-600' :
          'bg-blue-100 text-blue-600'
        }`}>
          {bill.icon}
        </div>
        <div>
          <div className="flex items-center">
            <p className="font-medium text-sm">{bill.name}</p>
            {bill.autoPay && (
              <Badge variant="outline" className="ml-2 text-xs">Auto-pay</Badge>
            )}
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            {bill.status === 'overdue' ? (
              <Clock className="h-3 w-3 mr-1 text-red-500" />
            ) : bill.status === 'paid' ? (
              <CheckCircle className="h-3 w-3 mr-1 text-green-500" />
            ) : (
              <Calendar className="h-3 w-3 mr-1" />
            )}
            Due {bill.dueDate}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-medium">${bill.amount.toFixed(2)}</span>
        <Button 
          size="sm" 
          variant={bill.status === 'paid' ? 'outline' : 'default'}
          disabled={bill.status === 'paid'}
        >
          {bill.status === 'paid' ? 'Paid' : 'Pay Now'}
        </Button>
      </div>
    </div>
  );
};

export default UpcomingBills;
