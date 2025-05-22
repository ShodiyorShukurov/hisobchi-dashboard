import React from 'react';
import type { IBalace, IDashboard } from '../types/interfaces';

const useDashboard = ({ id }: { id: string }) => {
  const [selectedData, setSelectedData] = React.useState<any>(null);
  const [typesDashboard, setTypesDashboard] = React.useState<string>('all');
  const [userBalance, setUserBalance] = React.useState<IBalace[] | null>(null);
  const [userBalanceDashboard, setUserBalanceDashboard] =
    React.useState<IDashboard | null>(null);
  const [changeValue, setChangeValue] = React.useState<string>('UZS');

  const currentMonth = new Date().getMonth();

  const [selectMonth, setSelectMonth] = React.useState<number>(currentMonth);

  // Fetch user balance
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

  // Fetch user balance dashboard
  const getUserBalanceDashboard = async () => {
    try {
      const res = await fetch(
        `${
          import.meta.env.VITE_API_URL
        }/user/dashboard/chart/${id}?section=${typesDashboard}&year=2025&month=${
          String(selectMonth).length == 2
            ? selectMonth + 1
            : '0' + String(selectMonth + 1)
        }&currency=${changeValue}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await res.json();
      if (res.ok) {
        setUserBalanceDashboard(data.data);
      } else {
        console.error('Error fetching user balance dashboard:', data.message);
      }
    } catch (error) {
      console.error('Error fetching user balance dashboard:', error);
    }
  };

  React.useEffect(() => {
    getUserBalance();
  }, [id]);

  React.useEffect(() => {
    getUserBalanceDashboard();
  }, [id, changeValue, typesDashboard, selectMonth]);

  return {
    selectedData,
    setSelectedData,
    typesDashboard,
    setTypesDashboard,
    userBalance,
    userBalanceDashboard,
    setChangeValue,
    setSelectMonth,
    selectMonth,
  };
};

export default useDashboard;
