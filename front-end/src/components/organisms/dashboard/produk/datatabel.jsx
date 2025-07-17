import React, { useEffect, useState } from "react";
import { Tabeldata } from "../../../molecules/dashboard/produk/tabeldata";
import useProdukStore from "../../../../store/produkStore";
import { Formedit } from "../../../molecules/dashboard/produk/formedit";
import Authstore from "../../../../store/authStore";

const Datatabel = ({ page, limit }) => {
  const { produksData, fetchProduksData, deleteProduks } = useProdukStore();
  const [selectedProduks, setSelectedProduks] = useState(null);
  const { toko, isAuthenticated, role } = Authstore();

  useEffect(() => {
    if (isAuthenticated && (role === "toko" || role === "admin")) {
      fetchProduksData({ page, limit });
    }
  }, [page, limit, fetchProduksData, isAuthenticated, role]);

  const handleEdit = (produk) => {
    setSelectedProduks(produk);
  };

  const handleDelete = async (id) => {
    const konfirmasi = window.confirm("Yakin ingin menghapus produk ini?");
    if (!konfirmasi) return;
    try {
      await deleteProduks(id);
      fetchProduksData({ page, limit });
      alert("Produk berhasil dihapus");
    } catch (err) {
      alert("Gagal menghapus produk: " + err.message);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded text-yellow-800">
        Anda harus login untuk mengakses halaman produk
      </div>
    );
  }

  if (role !== "admin" && role !== "toko") {
    return (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded text-yellow-800">
        Anda tidak memiliki akses ke halaman ini
      </div>
    );
  }

  // Only show toko validation for toko role
  if (role === "toko" && !toko?.toko_id) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded text-red-800">
        Akun toko tidak valid atau tidak memiliki akses
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Tabeldata
        data={produksData}
        onEdit={handleEdit}
        onDelete={handleDelete}
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
