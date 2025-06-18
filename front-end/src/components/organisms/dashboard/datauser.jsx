import React, { useEffect } from "react";
import useUserStore from "../../../store/userStore";
import { Carduser } from "../../molecules/dashboard/card-user";
const Datauser = () => {
  const { users, loading, error, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  return (
    <div>
      <Carduser total={users.length} />
    </div>
  );
};

export default Datauser;
