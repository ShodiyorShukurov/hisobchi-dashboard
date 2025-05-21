import balance from '../assets/balance.svg';
import type { IBalace } from '../types/interfaces';

interface BalansProps {
  userBalance: IBalace[] | null;
}

const Balans = ({ userBalance }: BalansProps) => {
  return (
    <div className="flex flex-col items-center justify-center  bg-[#FFF] rounded-[20px] pt-[26px] pb-[24px] mt-[44px]">
      <h4 className="text-[#92929D] text-[12px] font-medium flex items-center gap-1">
        <img src={balance} alt="balance" className="w-[20px] h-[20px]" />
        Balans
      </h4>
      {userBalance?.map((item:IBalace) => (
        <h2
          className="mt-[26px] text-[#171725] text-[20px] font-bold"
          key={item.balance_id}
        >
          {Number(item.total_balance).toLocaleString('ru-RU')}{' '}
          <span className="text-[#92929D] font-medium">{item.currency}</span>
        </h2>
      ))}
    </div>
  );
};

export default Balans;
