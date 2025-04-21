
import { useState } from 'react';
import { startOfToday, isSameDay, addDays } from 'date-fns';
import { Bill } from '@/types/bill.types';

// Mock bill data - will be replaced with actual data from Firebase
const mockBills: Bill[] = [
  { 
    id: '1', 
    name: 'Rent', 
    amount: 1200, 
    dueDate: addDays(startOfToday(), 2), 
    paid: false, 
    automatic: false,
    recurring: 'monthly'
  },
  { 
    id: '2', 
    name: 'Electricity', 
    amount: 85, 
    dueDate: addDays(startOfToday(), 5), 
    paid: false, 
    automatic: true,
    recurring: 'monthly'
  },
  { 
    id: '3', 
    name: 'Internet', 
    amount: 65, 
    dueDate: addDays(startOfToday(), 10), 
    paid: false, 
    automatic: true,
    recurring: 'monthly'
  },
  { 
    id: '4', 
    name: 'Car Payment', 
    amount: 350, 
    dueDate: addDays(startOfToday(), 15), 
    paid: false, 
    automatic: true,
    recurring: 'monthly'
  },
  { 
    id: '5', 
    name: 'Streaming Services', 
    amount: 35, 
    dueDate: addDays(startOfToday(), -3), 
    paid: true, 
    automatic: true,
    recurring: 'monthly'
  }
];

export const useBills = (selectedDate?: Date) => {
  const today = startOfToday();
  const dueBills = mockBills.filter(bill => !bill.paid);
  const upcomingBills = dueBills
    .filter(bill => bill.dueDate >= today)
    .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
  const overdueBills = dueBills
    .filter(bill => bill.dueDate < today)
    .sort((a, b) => a.dueDate.getTime() - b.dueDate.getTime());
  const selectedDateBills = mockBills.filter(
    bill => selectedDate && isSameDay(bill.dueDate, selectedDate)
  );

  const totalDue = upcomingBills.reduce((sum, bill) => sum + bill.amount, 0);
  const totalOverdue = overdueBills.reduce((sum, bill) => sum + bill.amount, 0);

  const billDates = mockBills.map(bill => bill.dueDate);
  const isDayWithBill = (date: Date) => {
    return billDates.some(billDate => isSameDay(billDate, date));
  };

  return {
    upcomingBills,
    overdueBills,
    selectedDateBills,
    totalDue,
    totalOverdue,
    isDayWithBill,
    billDates,
  };
};
