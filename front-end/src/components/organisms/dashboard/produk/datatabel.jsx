import React, { useEffect } from "react";
import { Tabeldata } from "../../../molecules/dashboard/produk/tabeldata";
import useProdukStore from "../../../../store/produkStore";

const Datatabel = ({ page, limit }) => {
  const { produksData, fetchProduksData } = useProdukStore();

  useEffect(() => {
    fetchProduksData({ page, limit });
  }, [page, limit, fetchProduksData]);

  return (
    <div className="space-y-4">
      <Tabeldata data={produksData} />
    </div>
  );
};

export default Datatabel;
