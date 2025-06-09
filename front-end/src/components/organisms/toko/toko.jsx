import React, { useEffect } from "react";
import { Tokocardtoko } from "../../molecules/toko/toko-card";
import useTokoStore from "../../../store/tokoStore";

const Tokotoko = () => {
  const { tokos, loading, error, fetchTokos } = useTokoStore();

  useEffect(() => {
    fetchTokos();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );

  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;

  return (
    <div className="w-full px-4 mt-10">
      <div className="grid grid-cols-2 gap-6">
        {tokos.map((toko) => (
          <div key={toko.id || toko._id} className="w-42 h-full">
            <Tokocardtoko
              namaToko={toko.nama_toko}
              no_telp={toko.no_telp}
              alamatToko={toko.alamat_toko}
              toko_logo={toko.toko_logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tokotoko;
