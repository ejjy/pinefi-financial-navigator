
export interface Bill {
  id: string;
  name: string;
  amount: number;
  dueDate: Date;
  paid: boolean;
  automatic: boolean;
  recurring: 'monthly' | 'weekly' | 'yearly';
}
