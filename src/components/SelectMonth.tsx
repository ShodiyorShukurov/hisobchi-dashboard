import right from '../assets/right.svg';
import left from '../assets/left.svg';
import { useTranslation } from 'react-i18next';

interface SelectMonthProps {
  selectMonth: number;
  setSelectMonth: React.Dispatch<React.SetStateAction<number>>;
}

const SelectMonth: React.FC<SelectMonthProps> = ({ selectMonth, setSelectMonth }) => {

  const {t} =useTranslation()

  const month = [
    t('months.january'),
    t('months.february'),
    t('months.march'),
    t('months.april'),
    t('months.may'),
    t('months.june'),
    t('months.july'),
    t('months.august'),
    t('months.september'),
    t('months.october'),
    t('months.november'),
    t('months.december'),
  ];


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
