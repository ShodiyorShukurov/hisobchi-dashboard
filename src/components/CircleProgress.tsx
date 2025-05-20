import { useState } from 'react';

const CircleProgress = ({ value = 75, amount = 12000000 }) => {
  const radius = 98;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  const [checked, setChecked] = useState('1');
  return (
    <>
      <div className="flex items-center justify-center mt-[24px]">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          {/* Background circle */}
          <circle
            stroke="#47DDC2"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          {/* Progress circle */}
          <circle
            stroke="#FF6393"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
        </svg>

        {/* Text in the center */}
        <div className="absolute text-center">
          <div className="text-[20px] font-bold text-[#171725] leading-[100%]">
            +{amount.toLocaleString('ru-RU')}
          </div>
          <div className="text-[12px] leading-semibold text-[#171725]">
            {checked == '1' ? 'UZS' : 'USD'}
          </div>
        </div>
      </div>

      <ul className="flex items-center justify-center w-fit mx-auto bg-[#FAFAFB] rounded-[16px] mt-[24px] p-[4px]">
        <li
          onClick={() => setChecked('1')}
          className={`text-[12px] font-bold leading-[120%] ${
            checked == '1' ? 'text-[#1F2024] bg-[#FFF]' : 'text-[#71727A]'
          }  px-3 py-1 rounded-[12px] cursor-pointer`}
        >
          UZS
        </li>
        <li
          onClick={() => setChecked('2')}
          className={`text-[12px] font-bold leading-[120%] ${
            checked == '2' ? 'text-[#1F2024] bg-[#FFF]' : 'text-[#71727A]'
          }  px-3 py-1 rounded-[12px] cursor-pointer`}
        >
          USD
        </li>
      </ul>

      <div className="flex items-center justify-between mt-[24px]">
        <div className="text-[13px] leading-[13px] text-[#171725] flex items-center gap-1">
          <div
            style={{ boxShadow: '0px 4px 4px 0px rgba(255, 255, 255, 0.25)' }}
            className="w-[14px] h-[14px] rounded-[5px] bg-[#47DDC2]"
          />
          Kirim
        </div>

        <div className="text-[13px] leading-[13px] text-[#171725] flex items-center gap-1">
          <div
            style={{ boxShadow: '0px 4px 4px 0px rgba(255, 255, 255, 0.25)' }}
            className="w-[14px] h-[14px] rounded-[5px] bg-[#FF6393]"
          />
          Chiqim
        </div>
      </div>
    </>
  );
};

export default CircleProgress;
