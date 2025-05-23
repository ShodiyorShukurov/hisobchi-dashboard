import { useState } from 'react';
import dateIcon from '../assets/date.svg';
import { useTranslation } from 'react-i18next';

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
  selectedData: any;
};

const categories = ['Qarz oldim', 'Ish haqi', "To'lov", 'Shopping'];

const EditTransactionModal = ({
  isOpen,
  onClose,
  onSave,
  onDateClick,
  date,
  selectedData,
}: Props) => {
  if (!isOpen) return null;

  const [category, setCategory] = useState('Qarz oldim');
  const [detail, setDetail] = useState(
    selectedData ? selectedData.description : ''
  );
  const [amount, setAmount] = useState(
    selectedData ? selectedData.amount.slice(1) : ''
  );
  const [currency, setCurrency] = useState<'UZS' | 'USD'>('UZS');
  const [type, setType] = useState<TransactionType>(
    selectedData?.amount?.slice(0, 1) == '+'
      ? 'kirim'
      : selectedData?.amount?.slice(0, 1) == '-'
      ? 'chiqim'
      : 'qarz'
  );

  const handleSave = () => {
    onSave({
      category,
      detail,
      amount,
      currency,
      date: date ? date.toISOString() : '',
      type,
    });
    onClose();
  };

  const {t} =useTranslation()

  return (
    <div
      className="fixed inset-0 bg-[#0000001F] flex items-center justify-center z-50 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[16px] p-4 w-[90%] max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-[#171725] text-center font-extrabold text-[16px] mb-4">
          {t('editModal.title')}
        </h2>

        {/* Kategoriya */}
        <label className="text-[#2F3036] text-[12px] font-bold mb-2 block">
          {t('editModal.category1')}:
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
          {t('editModal.category2')}:
        </label>
        <textarea
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          className="text-[#171725] text-[14px] leading-[20px] w-full py-3 px-4 border rounded-[12px] mb-3 border-[#C5C6CC] outline-none"
          placeholder="Tafsilot yozing"
        ></textarea>

        {/* Summa */}
        <label className="text-[#2F3036] text-[12px] font-bold mb-2 block">
          {t('editModal.category3')}:
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
          {t('editModal.category4')}:
        </label>
        <div
          onClick={onDateClick}
          className="text-[#171725] text-[14px] leading-[20px] w-full py-3 px-4 border rounded-[12px] mb-3 border-[#C5C6CC] flex items-center justify-between"
        >
          {date ? date.toLocaleDateString() : ''}
          <img src={dateIcon} alt="date" className="h-[16px] w-[16px]" />
        </div>

        {/* Tur */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <div
            className={`flex items-center gap-2 ${
              type == 'kirim' ? 'text-[#171725]' : 'text-[#92929D]'
            } text-[12px] font-bold px-4 py-3`}
            onClick={() => setType('kirim')}
          >
            <div
              className={`${
                type == 'kirim'
                  ? 'border-none bg-[#006FFD]'
                  : 'border-[#92929D] border-[1.5px]'
              } w-[12px] h-[12px] rounded-full flex items-center justify-center`}
            >
              {type == 'kirim' && (
                <div className="bg-[#fff] w-[3.5px] h-[3.5px] rounded-full"></div>
              )}
            </div>
            {t('editModal.kirim')}
          </div>

          <div
            className={`flex items-center gap-2 ${
              type == 'chiqim' ? 'text-[#171725]' : 'text-[#92929D]'
            } text-[12px] font-bold px-4 py-3`}
            onClick={() => setType('chiqim')}
          >
            <div
              className={`${
                type == 'chiqim'
                  ? 'border-none bg-[#006FFD]'
                  : 'border-[#92929D] border-[1.5px]'
              } w-[12px] h-[12px] rounded-full flex items-center justify-center`}
            >
              {type == 'chiqim' && (
                <div className="bg-[#fff] w-[3.5px] h-[3.5px] rounded-full"></div>
              )}
            </div>
            {t('editModal.chiqim')}
          </div>

          <div
            className={`flex items-center gap-2 ${
              type == 'qarz' ? 'text-[#171725]' : 'text-[#92929D]'
            } text-[12px] font-bold px-4 py-3`}
            onClick={() => setType('qarz')}
          >
            <div
              className={`${
                type == 'qarz'
                  ? 'border-none bg-[#006FFD]'
                  : 'border-[#92929D] border-[1.5px]'
              } w-[12px] h-[12px] rounded-full flex items-center justify-center`}
            >
              {type == 'qarz' && (
                <div className="bg-[#fff] w-[3.5px] h-[3.5px] rounded-full"></div>
              )}
            </div>
            {t('editModal.qarz')}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="w-full h-[40px] border-[1.5px] border-[#006FFD] text-[#006FFD] rounded-[12px] text-[12px] font-semibold"
          >
            {t('editModal.cancel')}
          </button>
          <button
            onClick={handleSave}
            className="w-full h-[40px] bg-[#006FFD] text-white rounded-[12px] text-[12px] font-semibold"
          >
            {t('editModal.save')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTransactionModal;
