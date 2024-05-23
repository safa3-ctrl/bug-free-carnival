import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import BookAppointment from "./BookAppointment";
import Notifications from "./Notifications";

const Dashboard = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Layout className="bg-[#eee]">
      {user?.isAdmin ? (
        <div className=""><Notifications/></div>
      ) : user?.isDoctor === 'accepted' ? (
        <div className="">
          <Notifications/>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="text-xl font-semibold text-gray-700 mb-4">Book appointment</h1>
          <div className="w-5/12 rounded overflow-hidden shadow-lg bg-white"><BookAppointment/></div>

        </div>
      )}
    </Layout>
  );
};

export default Dashboard;