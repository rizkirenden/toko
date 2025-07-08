import React, { useEffect, useState } from "react";
import Datatabelheader from "./datatabelheader"; // Import header
import { Tabeldata } from "../../../molecules/dashboard/toko/tabeldata";
import useTokoStore from "../../../../store/tokoStore";
import { Formedit } from "../../../molecules/dashboard/toko/formedit";

const Datatabel = ({ page, limit }) => {
  const { tokos, fetchTokos, deleteToko } = useTokoStore();
  const [selectedToko, setSelectedToko] = useState(null);

  useEffect(() => {
    fetchTokos({ page, limit });
  }, [page, limit, fetchTokos]);

  const handleEdit = (toko) => {
    setSelectedToko(toko);
  };

  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus toko ini?");
    if (!konfirmasi) return;

    try {
      await deleteToko(id);
      fetchTokos({ page, limit });
      alert("Toko berhasil dihapus");
    } catch (err) {
      alert("Gagal menghapus toko: " + err);
    }
  };

  return (
    <div className="space-y-4">
      <Datatabelheader onRefresh={() => fetchTokos({ page, limit })} />{" "}
      <Tabeldata data={tokos} onEdit={handleEdit} onDelete={handleDelete} />
      {selectedToko && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow max-w-lg w-full">
            <Formedit
              toko={selectedToko}
              onClose={() => {
                setSelectedToko(null);
                fetchTokos({ page, limit });
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Datatabel;
