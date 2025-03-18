
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, X, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DailyReminderCard = () => {
  const [showReminder, setShowReminder] = useState(false);
  const { toast } = useToast();

  // Check if user has already logged expenses today
  useEffect(() => {
    const checkDailyUpdate = () => {
      // Get the last update timestamp from localStorage
      const lastUpdate = localStorage.getItem('lastExpenseUpdate');
      const today = new Date().toDateString();
      
      // If no record exists or it's from a previous day, show the reminder
      if (!lastUpdate || new Date(lastUpdate).toDateString() !== today) {
        setShowReminder(true);
      } else {
        setShowReminder(false);
      }
    };

    checkDailyUpdate();
    
    // Check again if the component stays mounted for a while
    const interval = setInterval(checkDailyUpdate, 3600000); // Check every hour
    
    return () => clearInterval(interval);
  }, []);

  const dismissReminder = () => {
    setShowReminder(false);
  };

  const markAsUpdated = () => {
    // Store the current timestamp
    localStorage.setItem('lastExpenseUpdate', new Date().toString());
    setShowReminder(false);
    
    toast({
      title: "Tracking Complete",
      description: "Thank you for updating your expenses today!",
    });
  };

  if (!showReminder) return null;

  return (
    <Card className="mb-6 border-l-4 border-l-primary animate-in shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-primary animate-bounce" />
            <CardTitle className="text-xl">Daily Expense Reminder</CardTitle>
          </div>
          <Button variant="ghost" size="icon" onClick={dismissReminder} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <CardDescription>Keep your financial data up to date</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Have you recorded all your expenses for today? Regular updates help you stay on top of your financial goals.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Button variant="outline" onClick={dismissReminder}>Remind Me Later</Button>
        <Button onClick={markAsUpdated} className="gap-2">
          <Check className="h-4 w-4" /> I've Updated Today
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DailyReminderCard;
