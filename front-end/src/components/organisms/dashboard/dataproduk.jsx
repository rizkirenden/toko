import React, { useEffect } from "react";
import useProdukStore from "../../../store/produkStore";
import { Cardproduk } from "../../molecules/dashboard/card-produk";
const Dataproduk = () => {
  const { produks, loading, error, fetchProduks } = useProdukStore();

  useEffect(() => {
    fetchProduks();
  }, [fetchProduks]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  return (
    <div>
      <Cardproduk total={produks.length} />
    </div>
  );
};

export default Dataproduk;
