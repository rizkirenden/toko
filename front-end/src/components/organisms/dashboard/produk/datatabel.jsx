import React, { useEffect } from "react";
import { Tabeldata } from "../../../molecules/dashboard/produk/tabeldata";
import useProdukStore from "../../../../store/produkStore";
const Datatabel = ({ page, limit }) => {
  const { produks, fetchProduks } = useProdukStore();

  useEffect(() => {
    fetchProduks({ page, limit });
  }, [page, limit, fetchProduks]);
  return (
    <div className="space-y-4">
      <Tabeldata data={produks} />
    </div>
  );
};

export default Datatabel;
