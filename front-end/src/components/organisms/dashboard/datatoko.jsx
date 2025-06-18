import React, { useEffect } from "react";
import useTokoStore from "../../../store/tokoStore";
import { Cardtoko } from "../../molecules/dashboard/card-toko";
const Datatoko = () => {
  const { tokos, loading, error, fetchTokos } = useTokoStore();

  useEffect(() => {
    fetchTokos();
  }, [fetchTokos]);
  if (loading)
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  return (
    <div>
      <Cardtoko total={tokos.length} />
    </div>
  );
};

export default Datatoko;
