import React from 'react';
import type { IBalace } from '../types/interfaces';

const useDashboard = ({ id }: { id: string }) => {
  const [selectedData, setSelectedData] = React.useState<any>(null);
  const [typesDashboard, setTypesDashboard] = React.useState<string>('');
  const [userBalance, setUserBalance] = React.useState<IBalace[] | null>(null);

  const getUserBalance = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/user/dashboard/balance/${id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        setUserBalance(data.data);
      } else {
        console.error('Error fetching user balance:', data.message);
      }
    } catch (error) {
      console.error('Error fetching user balance:', error);
    }
  };

  React.useEffect(() => {
    getUserBalance();
  }, [id]);

  return {
    selectedData,
    setSelectedData,
    typesDashboard,
    setTypesDashboard,
    userBalance,
  };
};

export default useDashboard;
