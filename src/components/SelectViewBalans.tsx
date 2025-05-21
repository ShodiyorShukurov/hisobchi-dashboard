import { useState } from 'react';

type SelectViewBalansProps = {
  setTypesDashboard?: (value: string) => void;
};

const SelectViewBalans = ({
  setTypesDashboard,
}: SelectViewBalansProps) => {
  const [selected, setSelected] = useState('1');

  const typesData = [
    { id: 1, name: 'Hammasi' },
    { id: 2, name: 'Kirim' },
    { id: 3, name: 'Chiqim' },
    { id: 4, name: 'Qarzlar' },
  ];

  return (
    <ul className="flex justify-between items-center bg-[#F8F9FE] rounded-[16px] p-1">
      {typesData.map((item) => (
        <>
          <li
            key={item.id}
            onClick={() => {
              setSelected(item.id.toString());
              setTypesDashboard && setTypesDashboard(item.name);
            }}
            className={`px-[12px] text-[12px] font-bold ${
              selected == item.id.toString()
                ? 'text-[#171725] bg-[#FFF]'
                : 'text-[#92929D]'
            } rounded-[12px] h-[30px] flex justify-center items-center cursor-pointer`}
          >
            {item.name}
          </li>
          {item.id === 4 ? null : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1"
              height="11"
              viewBox="0 0 1 11"
              fill="none"
            >
              <path d="M0.5 0.5V10.5" stroke="#92929D" strokeLinecap="round" />
            </svg>
          )}
        </>
      ))}

      {/* <li
        onClick={() => setSelected('1')}
        className={`px-[12px] text-[12px] font-bold ${
          selected == '1' ? 'text-[#171725] bg-[#FFF]' : 'text-[#92929D]'
        } rounded-[12px] h-[30px] flex justify-center items-center cursor-pointer`}
      >
        Hammasi
      </li>
     

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
        <path d="M0.5 0.5V10.5" stroke="#92929D" strokeLinecap="round" />
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
        <path d="M0.5 0.5V10.5" stroke="#92929D" strokeLinecap="round" />
      </svg>

      <li
        onClick={() => setSelected('4')}
        className={`px-[12px] text-[12px] font-bold ${
          selected == '4' ? 'text-[#171725] bg-[#FFF]' : 'text-[#92929D]'
        } rounded-[12px] h-[30px] flex justify-center items-center cursor-pointer`}
      >
        Qarzlar
      </li> */}
    </ul>
  );
};

export default SelectViewBalans;
