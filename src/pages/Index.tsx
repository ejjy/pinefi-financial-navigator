
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import FinancialOverview from '@/components/dashboard/FinancialOverview';
import TransactionList from '@/components/dashboard/TransactionList';
import UpcomingBills from '@/components/dashboard/UpcomingBills';
import SavingsGoals from '@/components/dashboard/SavingsGoals';
import ChatAssistant from '@/components/dashboard/ChatAssistant';
import TransactionForm from '@/components/dashboard/TransactionForm';

const Index = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Hello, Taylor!</h1>
        <p className="text-muted-foreground">Welcome back to your PineFi dashboard</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <FinancialOverview />
        </div>
        <div className="lg:col-span-1 space-y-6">
          <TransactionForm />
          <ChatAssistant />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <TransactionList />
        </div>
        <div className="lg:col-span-1 space-y-6">
          <UpcomingBills />
          <SavingsGoals />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
