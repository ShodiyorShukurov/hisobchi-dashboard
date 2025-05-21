import CircleProgress from '../components/CircleProgress';
import SelectViewBalans from '../components/SelectViewBalans';

interface DashboardProps {
  setTypesDashboard: (value: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  setTypesDashboard,
}) => {
  return (
    <div className="mt-[16px] p-[16px] bg-[#fff] rounded-[24px]">
      <SelectViewBalans
        setTypesDashboard={setTypesDashboard}
      />

      <CircleProgress />
    </div>
  );
};

export default Dashboard;
