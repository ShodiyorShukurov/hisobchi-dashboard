import { useEffect, useState } from 'react';
import Balans from '../components/Balans';
import Cards from '../components/Cards';
import SelectMonth from '../components/SelectMonth';
import Transactions from '../components/Transactions';
import Dashboard from '../layout/Dashboard';
import DeleteModal from '../components/DeleteModal';
import EditTransactionModal from '../components/EditModal';
import DatePickerModal from '../components/DataPicker';
import useDashboard from '../hooks/useDashboard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DashboardPage = () => {
  const { id } = useParams();

  const {
    selectedData,
    setSelectedData,
    typesDashboard,
    setTypesDashboard,
    userBalance,
    userBalanceDashboard,
    setChangeValue,
  } = useDashboard(id ? { id } : { id: '' });

  // DeleteModal
  const [isOpen, setIsOpen] = useState(false);

  // EditTransactionModal
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  // DatePickerModal
  const [isDateOpen, setDateIsOpen] = useState(false);

  const parseDate = (dateString: string): Date | undefined => {
    const [day, month, year] = dateString.split('.');
    if (!day || !month || !year) return undefined;

    return new Date(Number(year), Number(month) - 1, Number(day));
  };

  const [date, setDate] = useState<Date | undefined>(
    selectedData?.date ? parseDate(selectedData.date) : undefined
  );

  useEffect(() => {
    if (selectedData?.date) {
      setDate(parseDate(selectedData.date));
    }
  }, [selectedData]);

  const handleSave = (data: any) => {
    console.log("Saqlangan ma'lumot:", data);
  };

  const { t } = useTranslation();

  return (
    <section className="container pt-[20px] relative">
      <h1 className="text-[14px] font-bold text-center text-[#1F2024]">
        {t('dashboard.title')}
      </h1>
      <button
        onClick={() => window.close()}
        className="text-[#006FFD] text-[12px] font-semibold absolute top-[21px]"
      >
        {t('dashboard.close')}
      </button>

      <Balans userBalance={userBalance ? userBalance : null} />

      <SelectMonth />

      <Dashboard
        setTypesDashboard={setTypesDashboard}
        userBalanceDashboard={userBalanceDashboard}
        setChangeValue={setChangeValue}
        typesDashboard={typesDashboard}
      />

      <Transactions typesDashboard={typesDashboard} userBalanceDashboard={userBalanceDashboard} />

      <Cards
        openModal={() => setIsOpen(true)}
        openEditModal={() => setIsOpenEdit(true)}
        setSelectedData={setSelectedData}
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
        selectedData={selectedData}
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
