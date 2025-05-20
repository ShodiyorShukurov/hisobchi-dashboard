import { useState } from 'react';
import Balans from '../components/Balans';
import Cards from '../components/Cards';
import SelectMonth from '../components/SelectMonth';
import Transactions from '../components/Transactions';
import Dashboard from '../layout/Dashboard';
import DeleteModal from '../components/DeleteModal';
import EditTransactionModal from '../components/EditModal';
import DatePickerModal from '../components/DataPicker';

const DashboardPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isOpenEdit, setIsOpenEdit] = useState(false);

  const [isDateOpen, setDateIsOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 4, 21));

  const handleSave = (data: any) => {
    console.log("Saqlangan ma'lumot:", data);
  };

  return (
    <section className="container pt-[20px] relative">
      <h1 className="text-[14px] font-bold text-center text-[#1F2024]">
        Dashboard
      </h1>
      <button
        onClick={() => window.close()}
        className="text-[#006FFD] text-[12px] font-semibold absolute top-[21px]"
      >
        Cancel
      </button>

      <Balans />

      <SelectMonth />

      <Dashboard />

      <Transactions />

      <Cards
        openModal={() => setIsOpen(true)}
        openEditModal={() => setIsOpenEdit(true)}
      />

      <DeleteModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={() => setIsOpen(false)}
      />

      <EditTransactionModal
        isOpen={isOpenEdit}
        onClose={() => setIsOpenEdit(false)}
        onSave={handleSave}
        onDateClick={() => setDateIsOpen(true)}
        date={date}
      />

      <DatePickerModal
        isOpen={isDateOpen}
        onClose={() => setDateIsOpen(false)}
        onSelect={setDate}
        date={date}
      />
    </section>
  );
};

export default DashboardPage;
