export interface IBalace {
  balance_id: string;
  user_id: string;
  title: string;
  currency: string;
  total_balance: string;
}

export interface IChartItem {
  type: string;
  income: boolean;
  currency: string;
  total_amount: string;
  category: string;
}

export interface IIncomeData {
  type: string;
  income: true;
  currency: string;
  total_amount: string;
}

export interface IExpenseData {
  type: string;
  income: false;
  currency: string;
  total_amount: string;
}

export interface IIncome {
  title: string;
  data: IIncomeData[];
}

export interface IExpense {
  title: string;
  date: IExpenseData[];
}

export interface IDashboard {
  chart: IChartItem[];
  lang: string;
  income: IIncome;
  expense: IExpense;
}
