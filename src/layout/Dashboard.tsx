import CircleProgress from "../components/CircleProgress"
import SelectViewBalans from "../components/SelectViewBalans"


const Dashboard = () => {
  return (
    <div className="mt-[16px] p-[16px] bg-[#fff] rounded-[24px]">
        <SelectViewBalans/>

        <CircleProgress/>
    </div>
  )
}

export default Dashboard