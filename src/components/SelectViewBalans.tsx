import { useState } from 'react';

const SelectViewBalans = () => {
  const [selected, setSelected] = useState('1');

  return (
    <ul className="flex justify-between items-center bg-[#F8F9FE] rounded-[16px] p-1">
      <li
        onClick={() => setSelected('1')}
        className={`px-[12px] text-[12px] font-bold ${
          selected == '1' ? 'text-[#171725] bg-[#FFF]' : 'text-[#92929D]'
        } rounded-[12px] h-[30px] flex justify-center items-center cursor-pointer`}
      >
        Hammasi
      </li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1"
        height="11"
        viewBox="0 0 1 11"
        fill="none"
      >
        <path d="M0.5 0.5V10.5" stroke="#92929D" stroke-linecap="round" />
      </svg>

      <li
        onClick={() => setSelected('2')}
        className={`px-[12px] text-[12px] font-bold ${
          selected == '2' ? 'text-[#171725] bg-[#FFF]' : 'text-[#92929D]'
        } rounded-[12px] h-[30px] flex justify-center items-center cursor-pointer`}
      >
        Kirim
      </li>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1"
        height="11"
        viewBox="0 0 1 11"
        fill="none"
      >
        <path d="M0.5 0.5V10.5" stroke="#92929D" stroke-linecap="round" />
      </svg>

      <li
        onClick={() => setSelected('3')}
        className={`px-[12px] text-[12px] font-bold ${
          selected == '3' ? 'text-[#171725] bg-[#FFF]' : 'text-[#92929D]'
        } rounded-[12px] h-[30px] flex justify-center items-center cursor-pointer`}
      >
        Chiqim
      </li>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1"
        height="11"
        viewBox="0 0 1 11"
        fill="none"
      >
        <path d="M0.5 0.5V10.5" stroke="#92929D" stroke-linecap="round" />
      </svg>

      <li
        onClick={() => setSelected('4')}
        className={`px-[12px] text-[12px] font-bold ${
          selected == '4' ? 'text-[#171725] bg-[#FFF]' : 'text-[#92929D]'
        } rounded-[12px] h-[30px] flex justify-center items-center cursor-pointer`}
      >
        Qarzlar
      </li>
    </ul>
  );
};

export default SelectViewBalans;
