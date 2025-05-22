import income from '../assets/income.svg';
import expense from '../assets/expense.svg';
import type {
  IDashboard,
  IIncomeData,
  IExpenseData,
} from '../types/interfaces';

interface TransactionsProps {
  typesDashboard: string;
  userBalanceDashboard: IDashboard | null;
}

const Transactions = ({
  typesDashboard,
  userBalanceDashboard,
}: TransactionsProps) => {
  return (
    <>
      {typesDashboard === 'all' ? (
        <div className="mt-4 grid grid-cols-2 gap-4">
          {/* Income Data */}

          <div className="bg-[#FFF] rounded-[20px] p-4">
            <div className="flex items-center gap-1">
              <img src={income} alt="income" className="w-[16px] h-[16px]" />
              <h4 className="text-[#92929D] text-[12px] font-medium">
                {userBalanceDashboard?.income?.title}
              </h4>
            </div>

            <h2 className="mt-4 text-[#171725] text-[16px] font-semibold">
              {userBalanceDashboard?.income?.data[1]?.total_amount
                ? Number(
                    userBalanceDashboard?.income?.data[1]?.total_amount
                  ).toLocaleString('ru-RU')
                : ''}{' '}
              <span className="text-[#92929D] font-medium">
                {userBalanceDashboard?.income?.data[1]?.currency
                  ? userBalanceDashboard?.income?.data[1]?.currency
                  : ''}
              </span>
            </h2>

            <h2 className="mt-2 text-[#171725] text-[16px] font-semibold">
              {userBalanceDashboard?.income?.data[0]?.total_amount
                ? Number(
                    userBalanceDashboard?.income?.data[0]?.total_amount
                  ).toLocaleString('ru-RU')
                : ''}{' '}
              <span className="text-[#92929D] font-medium">
                {userBalanceDashboard?.income?.data[0]?.currency
                  ? userBalanceDashboard?.income?.data[0]?.currency
                  : ''}
              </span>
            </h2>
          </div>

          {/* Expense Data */}
          <div className="bg-[#FFF] rounded-[20px] p-4">
            <div className="flex items-center gap-1">
              <img src={expense} alt="expense" className="w-[16px] h-[16px]" />
              <h4 className="text-[#92929D] text-[12px] font-medium">
                {userBalanceDashboard?.expense?.title}
              </h4>
            </div>

            <h2 className="mt-4 text-[#171725] text-[16px] font-semibold">
              {userBalanceDashboard?.expense?.date[1]?.total_amount
                ? Number(
                    userBalanceDashboard?.expense?.date[1]?.total_amount
                  ).toLocaleString('ru-RU')
                : ''}{' '}
              <span className="text-[#92929D] font-medium">
                {userBalanceDashboard?.expense?.date[1]?.currency ? userBalanceDashboard?.expense?.date[1]?.currency : ""}
              </span>
            </h2>

            <h2 className="mt-2 text-[#171725] text-[16px] font-semibold">
              {userBalanceDashboard?.expense?.date[0]?.total_amount? Number(
                userBalanceDashboard?.expense?.date[0]?.total_amount
              ).toLocaleString('ru-RU'):''}{' '}
              <span className="text-[#92929D] font-medium">
                {userBalanceDashboard?.expense?.date[0]?.currency}
              </span>
            </h2>
          </div>
        </div>
      ) : typesDashboard === 'expenses' ? (
        <div className="bg-[#FFF] rounded-[20px] p-4 mt-4">
          <div className="flex items-center gap-1">
            <img src={expense} alt="expense" className="w-[16px] h-[16px]" />
            <h4 className="text-[#92929D] text-[12px] font-medium">
              {userBalanceDashboard?.expense?.title}
            </h4>
          </div>

          {userBalanceDashboard?.expense?.date.map(
            (item: IExpenseData, index: number) => (
              <h2
                key={index}
                className={`${
                  index > 0 ? 'mt-2' : 'mt-4'
                } text-[#171725] text-[16px] font-semibold`}
              >
                {item.total_amount}{' '}
                <span className="text-[#92929D] font-medium">
                  {item.currency}
                </span>
              </h2>
            )
          )}
        </div>
      ) : typesDashboard === 'income' ? (
        <div className="bg-[#FFF] rounded-[20px] p-4 w-full mt-4">
          <div className="flex items-center gap-1">
            <img src={income} alt="income" className="w-[16px] h-[16px]" />
            <h4 className="text-[#92929D] text-[12px] font-medium">
              {userBalanceDashboard?.income?.title}
            </h4>
          </div>

          {userBalanceDashboard?.income?.data.map(
            (item: IIncomeData, index: number) => (
              <h2
                key={index}
                className={`${
                  index > 0 ? 'mt-2' : 'mt-4'
                } text-[#171725] text-[16px] font-semibold`}
              >
                {item.total_amount}{' '}
                <span className="text-[#92929D] font-medium">
                  {item.currency}
                </span>
              </h2>
            )
          )}
        </div>
      ) : (
        <div className="mt-4 grid grid-cols-2 gap-4">
          {/* Income Card */}
          <div className="bg-[#FFF] rounded-[20px] p-4">
            <div className="flex items-center gap-1">
              <img src={income} alt="income" className="w-[16px] h-[16px]" />
              <h4 className="text-[#92929D] text-[12px] font-medium">
                {userBalanceDashboard?.income?.title}
              </h4>
            </div>

            {userBalanceDashboard?.income?.data.map(
              (item: IIncomeData, index: number) => (
                <h2
                  key={index}
                  className={`${
                    index > 0 ? 'mt-2' : 'mt-4'
                  } text-[#171725] text-[16px] font-semibold`}
                >
                  {item.total_amount}{' '}
                  <span className="text-[#92929D] font-medium">
                    {item.currency}
                  </span>
                </h2>
              )
            )}
          </div>

          {/* Expense Card */}
          <div className="bg-[#FFF] rounded-[20px] p-4">
            <div className="flex items-center gap-1">
              <img src={expense} alt="expense" className="w-[16px] h-[16px]" />
              <h4 className="text-[#92929D] text-[12px] font-medium">
                {userBalanceDashboard?.expense?.title}
              </h4>
            </div>

            {userBalanceDashboard?.expense?.date.map(
              (item: IExpenseData, index: number) => (
                <h2
                  key={index}
                  className={`${
                    index > 0 ? 'mt-2' : 'mt-4'
                  } text-[#171725] text-[16px] font-semibold`}
                >
                  {item.total_amount}{' '}
                  <span className="text-[#92929D] font-medium">
                    {item.currency}
                  </span>
                </h2>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Transactions;
