
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import FinancialOverview from '@/components/dashboard/FinancialOverview';
import TransactionList from '@/components/dashboard/TransactionList';
import UpcomingBills from '@/components/dashboard/UpcomingBills';
import SavingsGoals from '@/components/dashboard/SavingsGoals';
import ChatAssistant from '@/components/dashboard/ChatAssistant';
import TransactionForm from '@/components/dashboard/TransactionForm';
import DailyReminderCard from '@/components/dashboard/DailyReminderCard';
import BudgetComponent from '@/components/dashboard/BudgetComponent';
import SavingComponent from '@/components/dashboard/SavingComponent';
import BillCalendarComponent from '@/components/dashboard/BillCalendarComponent';

const Index = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Hello, Taylor!</h1>
        <p className="text-muted-foreground">Welcome back to your PineFi dashboard</p>
      </div>

      <DailyReminderCard />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <FinancialOverview />
        </div>
        <div className="lg:col-span-1 flex flex-col gap-6">
          <TransactionForm />
          <ChatAssistant />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <BudgetComponent />
        </div>
        <div className="lg:col-span-1">
          <SavingComponent />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-1 flex flex-col gap-6">
          <UpcomingBills />
          <SavingsGoals />
        </div>
        <div className="lg:col-span-2">
          <BillCalendarComponent />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="lg:col-span-2">
          <TransactionList />
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
