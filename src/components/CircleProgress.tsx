import { useState } from 'react';
import type { IChartItem, IDashboard } from '../types/interfaces';

type CircleProgressProps = {
  userBalanceDashboard: IDashboard | null;
  setChangeValue: (value: string) => void;
  typesDashboard: string;
};

const CircleProgress = ({
  userBalanceDashboard,
  setChangeValue,
  typesDashboard,
}: CircleProgressProps) => {

  const radius = 98;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  const chart = userBalanceDashboard?.chart || [];

  const total = chart.reduce(
    (sum: number, item: IChartItem) => sum + Number(item.total_amount),
    0
  );

  const total2 = chart.reduce((sum: number, item: IChartItem) => {
    const amount = Number(item.total_amount);
    return item.income ? sum + amount : sum - amount;
  }, 0);


  const segments = chart.map((item: IChartItem) => ({
    value:
      total > 0 ? Number(((Number(item.total_amount) / total) * 100).toFixed()) : 0,
    color:
      typesDashboard === 'all' || typesDashboard === 'debts'
        ? item.income
          ? '#47DDC2'
          : '#FF6393'
        : item.color,
  }));

  let currentOffset = 0;

  const [checked, setChecked] = useState('1');
  return (
    <>
      <div className="flex items-center justify-center mt-[24px] relative">
        <svg
          height={radius * 2}
          width={radius * 2}
          className="transform -rotate-90"
        >
          {segments.length > 0 ? (
            segments.map(
              (segment: { value: number; color: string }, index: number) => {
                const dash = (segment.value / 100) * circumference;
                const circle = (
                  <circle
                    key={index}
                    stroke={segment.color}
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeLinecap="round"
                    strokeDasharray={`${dash} ${circumference}`}
                    strokeDashoffset={currentOffset}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                  />
                );
                currentOffset -= dash;
                return circle;
              }
            )
          ) : (
            <circle
              stroke="#F8F9FE"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
          )}
        </svg>

        {/* Text in center */}
        <div className="absolute text-center">
          <div className="text-[20px] font-bold text-[#171725] leading-[100%]">
            {total2 == 0
              ? '0'
              : total2 > 0
              ? '+' + total2.toLocaleString('ru-RU')
              : total2.toLocaleString('ru-RU')}
          </div>
          <div className="text-[12px] leading-semibold text-[#171725] mt-2">
            {checked == '1' ? 'UZS' : 'USD'}
          </div>
        </div>
      </div>

      <ul className="flex items-center justify-center w-fit mx-auto bg-[#FAFAFB] rounded-[16px] mt-[24px] p-[4px]">
        <li
          onClick={() => {
            setChecked('1');
            setChangeValue('UZS');
          }}
          className={`text-[12px] font-bold leading-[120%] ${
            checked == '1' ? 'text-[#1F2024] bg-[#FFF]' : 'text-[#71727A]'
          }  px-3 py-1 rounded-[12px] cursor-pointer`}
        >
          UZS
        </li>
        <li
          onClick={() => {
            setChecked('2');
            setChangeValue('USD');
          }}
          className={`text-[12px] font-bold leading-[120%] ${
            checked == '2' ? 'text-[#1F2024] bg-[#FFF]' : 'text-[#71727A]'
          }  px-3 py-1 rounded-[12px] cursor-pointer`}
        >
          USD
        </li>
      </ul>

      {typesDashboard === 'all' || typesDashboard === 'debts' ? (
        <div className="flex items-center justify-between mt-[24px]">
          <div key={1} className="text-[13px] leading-[13px] text-[#171725] flex items-center gap-1">
            <div
              style={{ boxShadow: '0px 4px 4px 0px rgba(255, 255, 255, 0.25)' }}
              className="w-[14px] h-[14px] rounded-[5px] bg-[#47DDC2]"
            />
            {userBalanceDashboard?.income?.title}
          </div>

          <div key={2} className="text-[13px] leading-[13px] text-[#171725] flex items-center gap-1">
            <div
              style={{ boxShadow: '0px 4px 4px 0px rgba(255, 255, 255, 0.25)' }}
              className="w-[14px] h-[14px] rounded-[5px] bg-[#FF6393]"
            />
            {userBalanceDashboard?.expense?.title}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between mt-[24px]">
          {chart.length > 0 &&
            chart.map((item: IChartItem, index: number) => (
              <div key={index} className="text-[13px] leading-[13px] text-[#171725] flex items-center gap-1">
                <div
                  style={{
                    boxShadow: '0px 4px 4px 0px rgba(255, 255, 255, 0.25)',
                    backgroundColor: item.color,
                  }}
                  className={`w-[14px] h-[14px] rounded-[5px]`}
                />
                {item?.category}
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default CircleProgress;
