
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, BarChart, Building, Calendar, FileText, TrendingDown, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const BusinessOverview = () => {
  const navigate = useNavigate();
  
  return (
    <div className="space-y-6">
      <Card className="shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-xl">
            <LineChart className="h-5 w-5 text-primary" />
            Revenue Overview
          </CardTitle>
          <CardDescription>Monthly revenue for the current year</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center">
          <div className="text-center">
            <BarChart className="h-10 w-10 text-muted-foreground/60 mx-auto mb-3" />
            <p className="text-muted-foreground mb-3">Revenue chart will be displayed here</p>
            <Button variant="outline" size="sm" onClick={() => navigate('/reports')}>
              View Detailed Reports
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Payments
            </CardTitle>
            <CardDescription>Bills and invoices due soon</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({length: 3}).map((_, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-muted/40 rounded-lg">
                  <div>
                    <p className="font-medium">{['Office Rent', 'Software Subscription', 'Contractor Payment'][i]}</p>
                    <p className="text-sm text-muted-foreground">Due in {[5, 2, 7][i]} days</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${[1200, 65, 850][i]}</p>
                    <p className="text-xs text-muted-foreground">{['Monthly', 'Monthly', 'One-time'][i]}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" onClick={() => navigate('/calendar')}>
              View All Scheduled Payments
            </Button>
          </CardFooter>
        </Card>
        
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <FileText className="h-5 w-5 text-primary" />
              Recent Invoices
            </CardTitle>
            <CardDescription>Latest invoices and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from({length: 3}).map((_, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-muted/40 rounded-lg">
                  <div>
                    <p className="font-medium">Invoice #{['1024', '1023', '1022'][i]}</p>
                    <p className="text-sm text-muted-foreground">{['Acme Corp', 'Globex', 'Tech Solutions'][i]}</p>
                  </div>
                  <div className="text-right flex flex-col items-end">
                    <p className="font-medium">${[2500, 1800, 950][i]}</p>
                    <div className={`flex items-center text-xs px-2 py-0.5 rounded-full ${
                      ['bg-amber-100 text-amber-800', 'bg-green-100 text-green-800', 'bg-blue-100 text-blue-800'][i]
                    }`}>
                      {['Pending', 'Paid', 'Sent'][i]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full" onClick={() => navigate('/invoices')}>
              View All Invoices
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Building className="h-5 w-5 text-primary" />
              Business Health
            </CardTitle>
            <CardDescription>Key performance metrics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'Profit Margin', value: '22.4%', trend: 'up', change: '3.1%' },
                { name: 'Avg. Invoice Time', value: '14 days', trend: 'down', change: '2 days' },
                { name: 'Operating Costs', value: '18.2%', trend: 'up', change: '0.5%' },
              ].map((metric, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.name}</p>
                  </div>
                  <div className="text-right flex items-center gap-1">
                    <p className="font-medium">{metric.value}</p>
                    <div className={`flex items-center text-xs ${
                      metric.trend === 'up' 
                        ? (metric.name === 'Operating Costs' ? 'text-destructive' : 'text-green-600')
                        : (metric.name === 'Avg. Invoice Time' ? 'text-green-600' : 'text-destructive')
                    }`}>
                      {metric.trend === 'up' ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {metric.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-sm lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-lg">
              <BarChart className="h-5 w-5 text-primary" />
              Expense Breakdown
            </CardTitle>
            <CardDescription>Where your business spends money</CardDescription>
          </CardHeader>
          <CardContent className="h-[200px] flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground mb-3">Expense chart will be displayed here</p>
              <Button variant="outline" size="sm" onClick={() => navigate('/expenses')}>
                View Detailed Expenses
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BusinessOverview;
