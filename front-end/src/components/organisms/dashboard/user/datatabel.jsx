import React, { useEffect } from "react";
import { Tabeldata } from "../../../molecules/dashboard/user/tabeldata";
import useUserStore from "../../../../store/userStore";
const Datatabel = ({ page, limit }) => {
  const { users, fetchUsers } = useUserStore();

  useEffect(() => {
    fetchUsers({ page, limit });
  }, [page, limit, fetchUsers]);
  return (
    <div className="space-y-4">
      <Tabeldata data={users} />
    </div>
  );
};

export default Datatabel;
