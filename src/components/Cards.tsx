import more from '../assets/more.svg';
import img2 from '../assets/img.png';
import edit from '../assets/edit.svg';
import deleteIcon from '../assets/delete.svg';
import { Image } from 'antd';
import { useState } from 'react';

const mockData = [
  {
    id: 1,
    amount: "+500 000 so'm",
    description: "Ishxonadan 500 000 so'm kpi oldim",
    date: '20.10.2023',
    img: img2,
  },
  {
    id: 2,
    amount: "+1 000 000 so'm",
    description: "Ishxonadan 1 000 000 so'm kpi oldim",
    date: '21.10.2023',
    img: img2,
  },
  {
    id: 3,
    amount: "+1 500 000 so'm",
    description: "Ishxonadan 1 500 000 so'm kpi oldim",
    date: '22.10.2023',
    img: img2,
  },
  {
    id: 4,
    amount: "-2 000 000 so'm",
    description: "Ishxonadan 2 000 000 so'm kpi oldim",
    date: '23.10.2023',
  },
];

interface CardsProps {
  openModal: () => void;
  openEditModal: () => void;
  setSelectedData: (data: any) => void;
}

const Cards = ({ openModal, openEditModal, setSelectedData }: CardsProps) => {
  const [checkedId, setCheckedId] = useState<number | null>(null);


  return (
    <ul className="mt-4 flex flex-col gap-3">
      {mockData.map((item) => (
        <li key={item.id} className="p-4 bg-[#fff] rounded-[16px]">
          <div className="flex justify-between items-center relative">
            <h3
              className={`${
                item.amount.slice(0, 1) == '+'
                  ? 'text-[#29C184]'
                  : 'text-[#FC5A5A]'
              } text-[18px] font-semibold leading-[100%]`}
            >
              {item.amount}
            </h3>
            <div
              className={`${
                checkedId === item.id ? 'flex' : 'hidden'
              } items-center justify-center flex-col gap-3 absolute top-[-30px] right-[40px]`}
            >
              <button
                style={{ boxShadow: '0px 8px 8px 0px rgba(0, 0, 0, 0.16)' }}
                className="bg-[#006FFD] rounded-[6px] p-2"
                onClick={() => {
                  setSelectedData(item);
                  openEditModal();
                  setCheckedId(null);
                }}
              >
                <img src={edit} alt="edit" className="w-[24px] h-[24px]" />
              </button>
              <button
                style={{ boxShadow: '0px 8px 8px 0px rgba(0, 0, 0, 0.16)' }}
                className="bg-[#FC5A5A] rounded-[6px] p-2"
                onClick={() => {
                  openModal();
                  setCheckedId(null);
                }}
              >
                <img
                  src={deleteIcon}
                  alt="edit"
                  className="w-[24px] h-[24px]"
                />
              </button>
            </div>

            {/* Toggle qilish */}
            <img
              onClick={() =>
                setCheckedId(checkedId === item.id ? null : item.id)
              }
              src={more}
              alt="more"
              className="cursor-pointer"
            />
          </div>

          <div className={`${item.img ? 'flex items-center gap-3' : ''}  mt-3`}>
            {item.img && (
              <Image src={item.img} alt="" className="w-[40px] h-[40px]" />
            )}
            <p className="text-[#1F2024] font-medium leading-[160%] text-[14px]">
              {item.description}
            </p>
          </div>

          <p className="text-[#71727A] font-medium leading-[16px] text-[14px] mt-3">
            {item.date}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Cards;
