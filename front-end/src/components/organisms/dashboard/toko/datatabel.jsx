// src/components/organisms/dashboard/toko/datatabel.jsx
import React, { useEffect } from "react";
import { Tabeldata } from "../../../molecules/dashboard/toko/tabeldata";
import useTokoStore from "../../../../store/tokoStore";

const Datatabel = () => {
  const { tokos, fetchTokos } = useTokoStore();

  useEffect(() => {
    fetchTokos();
  }, [fetchTokos]);

  return (
    <div className="space-y-4">
      <Tabeldata data={tokos} />
    </div>
  );
};

export default Datatabel;
