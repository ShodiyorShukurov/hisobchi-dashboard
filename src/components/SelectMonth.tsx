import right from '../assets/right.svg';
import left from '../assets/left.svg';
import { useState } from 'react';

const SelectMonth = () => {
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const currentMonth = new Date().getMonth();

  const [selectMonth, setSelectMonth] = useState(currentMonth);

  return (
    <div className="mt-[24px] flex items-center justify-between">
      <img
        src={left}
        alt="left"
        className="w-[24px] h-[24px]"
        onClick={() => setSelectMonth((prev) => (prev > 0 ? prev - 1 : 11))}
      />
      <span className="bg-[#EAF2FF] rounded-[16px] h-[30px] px-[8px] text-[#006FFD] text-[16px] font-bold flex items-center justify-center uppercase">
        {month[selectMonth]}
      </span>
      <img
        src={right}
        alt="right"
        className="w-[24px] h-[24px]"
        onClick={() => setSelectMonth((prev) => (prev < 11 ? prev + 1 : 0))}
      />
    </div>
  );
};

export default SelectMonth;
