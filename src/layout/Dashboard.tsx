import CircleProgress from '../components/CircleProgress';
import SelectViewBalans from '../components/SelectViewBalans';
import type { IDashboard } from '../types/interfaces';

interface DashboardProps {
  setTypesDashboard: (value: string) => void;
  setChangeValue: (value: string) => void;
  userBalanceDashboard: IDashboard | null;
  typesDashboard: string;
}

const Dashboard: React.FC<DashboardProps> = ({
  setTypesDashboard,
  userBalanceDashboard,
  setChangeValue,
  typesDashboard,
}) => {
  return (
    <div className="mt-[16px] p-[16px] bg-[#fff] rounded-[24px]">
      <SelectViewBalans setTypesDashboard={setTypesDashboard} />

      <CircleProgress
        userBalanceDashboard={userBalanceDashboard}
        setChangeValue={setChangeValue}
        typesDashboard={typesDashboard}
      />
    </div>
  );
};

export default Dashboard;
