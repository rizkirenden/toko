import React, { useEffect } from "react";
import { Tokocard } from "../../molecules/landingpage/toko-card";
import { Judul } from "../../molecules/landingpage/judul";
import useTokoStore from "../../../store/tokoStore";

const Toko = () => {
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
    <div>
      <div className="flex items-center justify-center mb-6">
        <Judul>Toko</Judul>
      </div>

      <div className="overflow-x-auto w-full scrollbar-none">
        <div className="flex relative w-max px-5 py-2 gap-4">
          {" "}
          {/* gap di sini */}
          {tokos.map((toko) => (
            <div key={toko.id || toko._id} className="flex-shrink-0">
              <Tokocard
                namaToko={toko.nama_toko}
                no_telp={toko.no_telp}
                alamatToko={toko.alamat_toko}
                toko_logo={toko.toko_logo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toko;
