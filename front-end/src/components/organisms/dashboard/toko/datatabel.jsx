import React, { useEffect } from "react";
import { Tabeldata } from "../../../molecules/dashboard/toko/tabeldata";
import useTokoStore from "../../../../store/tokoStore";

const Datatabel = ({ page, limit }) => {
  const { tokos, fetchTokos } = useTokoStore();

  useEffect(() => {
    fetchTokos({ page, limit });
  }, [page, limit, fetchTokos]);

  return (
    <div className="space-y-4">
      <Tabeldata data={tokos} />
    </div>
  );
};

export default Datatabel;
