import React, { useEffect, useState } from "react";
import { Tabeldata } from "../../../molecules/dashboard/produk/tabeldata";
import useProdukStore from "../../../../store/produkStore";
import { Formedit } from "../../../molecules/dashboard/produk/formedit";

const Datatabel = ({ page, limit }) => {
  const { produksData, fetchProduksData, deleteProduks } = useProdukStore();
  const [selectedProduks, setSelectedProduks] = useState(null);

  useEffect(() => {
    fetchProduksData({ page, limit });
  }, [page, limit, fetchProduksData]);

  const handleEdit = (produk) => {
    setSelectedProduks(produk);
  };

  const handleDetele = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus produk ini?");
    if (!konfirmasi) return;
    try {
      await deleteProduks(id);
      fetchProduksData({ page, limit });
      alert("Produk berhasil dihapus");
    } catch (err) {
      alert("Gagal menghapus produk:" + err);
    }
  };
  return (
    <div className="space-y-4">
      <Tabeldata
        data={produksData}
        onEdit={handleEdit}
        onDelete={handleDetele}
      />
      {selectedProduks && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow max-w-lg w-full">
            <Formedit
              produk={selectedProduks}
              onClose={() => {
                setSelectedProduks(null);
                fetchProduksData({ page, limit });
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Datatabel;
