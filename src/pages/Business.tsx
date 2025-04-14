
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Building, BarChart4, PlusCircle, FileText, CreditCard, Users, LineChart, Settings, PieChart } from 'lucide-react';
import BusinessOverview from '@/components/business/BusinessOverview';
import BusinessExpenses from '@/components/business/BusinessExpenses';
import BusinessClients from '@/components/business/BusinessClients';

const Business = () => {
  return (
    <MainLayout>
      <div className="mb-4">
        <h1 className="text-3xl font-bold">Business Dashboard</h1>
        <p className="text-muted-foreground">Manage your business finances and operations</p>
      </div>

      <div className="flex flex-wrap gap-4 mb-6">
        <Button variant="outline" size="sm" className="flex items-center gap-1.5">
          <Building className="h-4 w-4" />
          <span>Swift Design Studio</span>
        </Button>
        <Button size="sm" className="flex items-center gap-1.5 shadow-sm">
          <PlusCircle className="h-4 w-4" />
          <span>Add Business</span>
        </Button>
      </div>

      <Tabs defaultValue="overview" className="mb-6">
        <TabsList className="grid grid-cols-4 md:w-[400px]">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="clients">Clients</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 mt-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CreditCard className="h-4 w-4 text-primary" />
                  Revenue
                </CardTitle>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold">$24,512</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <span className="text-green-500 font-medium">+12.5%</span> 
                  vs previous period
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="h-4 w-4 text-primary" />
                  Invoices
                </CardTitle>
                <CardDescription>Pending payment</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold">$4,850</div>
                <div className="text-sm text-muted-foreground mt-1">
                  3 invoices awaiting payment
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <PieChart className="h-4 w-4 text-primary" />
                  Expenses
                </CardTitle>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-semibold">$8,294</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <span className="text-destructive font-medium">+4.3%</span> 
                  vs previous period
                </div>
              </CardContent>
            </Card>
          </div>
          
          <BusinessOverview />
        </TabsContent>
        <TabsContent value="expenses">
          <BusinessExpenses />
        </TabsContent>
        <TabsContent value="invoices">
          <div className="mt-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle className="text-xl">Invoices</CardTitle>
                  <CardDescription>Manage your business invoices</CardDescription>
                </div>
                <Button>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  New Invoice
                </Button>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] flex items-center justify-center border-2 border-dashed rounded-md">
                  <div className="text-center max-w-sm mx-auto px-4">
                    <FileText className="h-12 w-12 text-muted-foreground/60 mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">Invoices Will Be Implemented Soon</h3>
                    <p className="text-muted-foreground mb-4">
                      The invoice management section is coming soon. Create, track, and manage all your business invoices in one place.
                    </p>
                    <Button onClick={() => window.location.href = '/invoices'}>
                      Go to Invoice Page
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="clients">
          <BusinessClients />
        </TabsContent>
      </Tabs>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Card className="w-full md:w-1/2">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Client Activity
            </CardTitle>
            <CardDescription>Recent interactions and payments</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            {/* Will be implemented */}
            <div className="h-full flex items-center justify-center border-2 border-dashed rounded-md">
              <div className="text-center">
                <p className="text-muted-foreground">Client activity will be shown here</p>
                <Button variant="link" onClick={() => window.location.href = '/business/clients'}>
                  View All Clients
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="w-full md:w-1/2">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2">
              <BarChart4 className="h-5 w-5 text-primary" />
              Monthly Projections
            </CardTitle>
            <CardDescription>Revenue forecast for next 3 months</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            {/* Will be implemented */}
            <div className="h-full flex items-center justify-center border-2 border-dashed rounded-md">
              <div className="text-center">
                <p className="text-muted-foreground">Forecast data will be shown here</p>
                <Button variant="link" onClick={() => window.location.href = '/reports'}>
                  View Reports
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center gap-2">
            <LineChart className="h-5 w-5 text-primary" />
            Business Settings
          </CardTitle>
          <CardDescription>Configure your business profile and preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="flex items-center">
              <Settings className="h-4 w-4 mr-2" />
              Business Profile
            </Button>
            <Button variant="outline" className="flex items-center">
              <Users className="h-4 w-4 mr-2" />
              Team Members
            </Button>
            <Button variant="outline" className="flex items-center">
              <FileText className="h-4 w-4 mr-2" />
              Invoice Templates
            </Button>
            <Button variant="outline" className="flex items-center">
              <CreditCard className="h-4 w-4 mr-2" />
              Payment Methods
            </Button>
          </div>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

export default Business;
