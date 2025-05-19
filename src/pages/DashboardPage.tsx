import Balans from '../components/Balans';
import Cards from '../components/Cards';
import SelectMonth from '../components/SelectMonth';
import Transactions from '../components/Transactions';
import Dashboard from '../layout/Dashboard';

const DashboardPage = () => {
  return (
    <section className="container pt-[20px] relative">
      <h1 className="text-[14px] font-bold text-center text-[#1F2024]">
        Dashboard
      </h1>
      <button className="text-[#006FFD] text-[12px] font-semibold absolute top-[21px]">
        Cancel
      </button>

      <Balans />

      <SelectMonth />

      <Dashboard/>

      <Transactions/>

      <Cards/>
    </section>
  );
};

export default DashboardPage;
