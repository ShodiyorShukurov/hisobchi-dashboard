import { useState } from 'react';
import dateIcon from '../assets/date.svg';

type TransactionType = 'kirim' | 'chiqim' | 'qarz';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: {
    category: string;
    detail: string;
    amount: string;
    currency: 'UZS' | 'USD';
    date: string;
    type: TransactionType;
  }) => void;
  onDateClick: () => void;
  date: Date | undefined;
};

const categories = ['Qarz oldim', 'Ish haqi', "To'lov", 'Shopping'];

const EditTransactionModal = ({
  isOpen,
  onClose,
  onSave,
  onDateClick,
  date
}: Props) => {
  const [category, setCategory] = useState('Qarz oldim');
  const [detail, setDetail] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState<'UZS' | 'USD'>('UZS');
  const [type, setType] = useState<TransactionType>('qarz');

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({ category, detail, amount, currency, date: date ? date.toISOString() : '', type });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-[#0000001F] flex items-center justify-center z-50 backdrop-blur-[2px]">
      <div
        className="bg-white rounded-[16px] p-4 w-[90%] max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-[#171725] text-center font-extrabold text-[16px] mb-4">
          Tahrirlash
        </h2>

        {/* Kategoriya */}
        <label className="text-[#2F3036] text-[12px] font-bold mb-2 block">
          Kategoriya:
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="text-[#171725] text-[14px] leading-[20px] w-full py-3 px-4 border rounded-[12px] mb-3 border-[#C5C6CC] outline-none"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        {/* Tafsilot */}
        <label className="text-[#2F3036] text-[12px] font-bold mb-2 block">
          Tafsilot:
        </label>
        <textarea
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          className="text-[#171725] text-[14px] leading-[20px] w-full py-3 px-4 border rounded-[12px] mb-3 border-[#C5C6CC] outline-none"
          placeholder="Tafsilot yozing"
        ></textarea>

        {/* Summa */}
        <label className="text-[#2F3036] text-[12px] font-bold mb-2 block">
          Summa:
        </label>
        <div className="relative mb-4">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="text-[#171725] text-[14px] leading-[20px] w-full py-3 px-4 border rounded-[12px] mb-3 border-[#C5C6CC] outline-none"
            placeholder="0"
          />
          <div className="absolute right-2 top-3 text-[10px] leading-[20px] font-bold text-[#171725] flex items-center gap-1">
            {currency}
            <span
              onClick={() => setCurrency(currency === 'UZS' ? 'USD' : 'UZS')}
              className="text-[10px] leading-[20px] font-bold text-[#92929D] cursor-pointer"
            >
              /{currency === 'UZS' ? 'USD' : 'UZS'}
            </span>
          </div>
        </div>

        {/* Sana */}
        <label className="text-[#2F3036] text-[12px] font-bold mb-2 block">
          Sana:
        </label>
        <div
          onClick={onDateClick}
          className="text-[#171725] text-[14px] leading-[20px] w-full py-3 px-4 border rounded-[12px] mb-3 border-[#C5C6CC] flex items-center justify-between"
        >
          {date ? date.toLocaleDateString() : ''}
          <img src={dateIcon} alt="date" className="h-[16px] w-[16px]" />
        </div>

        {/* Tur */}
        <div className="flex justify-between text-sm mb-6">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="type"
              value="kirim"
              checked={type === 'kirim'}
              onChange={() => setType('kirim')}
            />
            Kirim
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="type"
              value="chiqim"
              checked={type === 'chiqim'}
              onChange={() => setType('chiqim')}
            />
            Chiqim
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="type"
              value="qarz"
              checked={type === 'qarz'}
              onChange={() => setType('qarz')}
            />
            Qarz
          </label>
        </div>

        {/* Tugmalar */}
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="w-full h-[40px] border-[1.5px] border-[#006FFD] text-[#006FFD] rounded-[12px] text-[12px] font-semibold"
          >
            Bekor qilish
          </button>
          <button
            onClick={handleSave}
            className="w-full h-[40px] bg-[#006FFD] text-white rounded-[12px] text-[12px] font-semibold"
          >
            Saqlash
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTransactionModal;
