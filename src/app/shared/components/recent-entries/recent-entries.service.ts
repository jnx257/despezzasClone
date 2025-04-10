export interface Purchase {
  id: string;
  date: string; 
  description: string;
  amount: number; 
  category: string;
  paymentMethod: string;
  status: 'paid' | 'pending' | 'scheduled';
}

export const recentPurchases: Purchase[] = [
  {
    id: '1',
    date: '2025-04-05',
    description: 'Supermercado Pão de Açúcar',
    amount: -129.9,
    category: 'Groceries',
    paymentMethod: 'Credit Card',
    status: 'paid',
  },
  {
    id: '2',
    date: '2025-04-04',
    description: 'Spotify Subscription',
    amount: -19.9,
    category: 'Entertainment',
    paymentMethod: 'Pix',
    status: 'paid',
  },
  {
    id: '3',
    date: '2025-04-03',
    description: 'Uber to Work',
    amount: -22.5,
    category: 'Transport',
    paymentMethod: 'Credit Card',
    status: 'paid',
  },
  {
    id: '4',
    date: '2025-04-02',
    description: 'Café com João',
    amount: -12.0,
    category: 'Food',
    paymentMethod: 'Debit Card',
    status: 'paid',
  },
  {
    id: '5',
    date: '2025-04-01',
    description: 'Plano de Saúde',
    amount: -299.0,
    category: 'Health',
    paymentMethod: 'Pix',
    status: 'scheduled',
  },
];
