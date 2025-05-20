import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (date: Date | undefined) => void;
    date: Date | undefined;
};

const DatePickerModal = ({ isOpen, onClose, onSelect, date }: Props) => {
  const [selected, setSelected] = useState<Date | undefined>(date);

  if (!isOpen) return null;

  const handleSelect = (date: Date | undefined) => {
    setSelected(date);
    onSelect(date);
    // onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded-xl shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={handleSelect}
          classNames={{
            today: `border-amber-500`,
            selected: `bg-[#006FFD] border text-white rounded-full`,
            chevron: 'text-[#8F9098]',
          }}

          footer={
            selected ? (
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => {
                    setSelected(undefined);
                    onSelect(undefined);
                  }}
                  className="text-[#006FFD] text-[12px] font-semibold"
                >
                  Bekor qilish
                </button>
                <button
                  onClick={onClose}
                  className="bg-[#006FFD] text-white text-[12px] font-semibold rounded-lg px-4 py-2"
                >
                  Tanlash
                </button>
              </div>
            ) : null
          }
        />
      </div>
    </div>
  );
};

export default DatePickerModal;
