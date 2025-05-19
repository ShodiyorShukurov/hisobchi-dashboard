import balance from '../assets/balance.svg';

const Balans = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-[#FFF] rounded-[20px] pt-[26px] pb-[24px] mt-[44px]">
      <h4 className="text-[#92929D] text-[12px] font-medium flex items-center gap-1">
        <img src={balance} alt="balance" className="w-[20px] h-[20px]" />
        Balans
      </h4>
      <h2 className="mt-[26px] text-[#171725] text-[20px] font-bold">
        170 390 000 <span className="text-[#92929D] font-medium">UZS</span>
      </h2>
      <h2 className="mt-[12px] text-[#171725] text-[20px] font-bold">
        70 390 000 <span className="text-[#92929D] font-medium">USD</span>
      </h2>
    </div>
  );
};

export default Balans;
