import income from '../assets/income.svg';
import expense from '../assets/expense.svg';

const Transactions = () => {
  return (
    <div className="mt-4 flex justify-between items-center">
      <div className="bg-[#FFF] rounded-[20px] p-4">
        <div className="flex items-center gap-1">
          <img src={income} alt="income" className="w-[16px] h-[16px]" />
          <h4 className="text-[#92929D] text-[12px] font-medium">Kirim</h4>
        </div>

        <h2 className="mt-4 text-[#171725] text-[16px] font-semibold">
          170 390 000 <span className='text-[#92929D] font-medium'>UZS</span>
        </h2>

        <h2 className="mt-2 text-[#171725] text-[16px] font-semibold">
          70 390 000 <span className='text-[#92929D] font-medium'>USD</span>
        </h2>
      </div>

       <div className="bg-[#FFF] rounded-[20px] p-4">
        <div className="flex items-center gap-1">
          <img src={expense} alt="expense" className="w-[16px] h-[16px]" />
          <h4 className="text-[#92929D] text-[12px] font-medium">Chiqim</h4>
        </div>

        <h2 className="mt-4 text-[#171725] text-[16px] font-semibold">
          170 390 000 <span className='text-[#92929D] font-medium'>UZS</span>
        </h2>

        <h2 className="mt-2 text-[#171725] text-[16px] font-semibold">
          70 390 000 <span className='text-[#92929D] font-medium'>USD</span>
        </h2>
      </div>
    </div>
  );
};

export default Transactions;
