import React from "react";
import { Card } from "../../../atoms/card";

export const Tabeldata = ({ data }) => {
  return (
    <Card className="p-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2 text-xs">ID</th>
            <th className="border-b p-2 text-xs">Toko</th>
            <th className="border-b p-2 text-xs">Pemilik</th>
            <th className="border-b p-2 text-xs">No Telp</th>
            <th className="border-b p-2 text-xs">Alamat Toko</th>
            <th className="border-b p-2 text-xs">Alamat Pemilik</th>
            <th className="border-b p-2 text-xs">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="border-b p-2 text-xs">{item.toko_id}</td>
              <td className="border-b p-2 text-xs">{item.nama_toko}</td>
              <td className="border-b p-2 text-xs">{item.nama_pemilik}</td>
              <td className="border-b p-2 text-xs">{item.no_telp}</td>
              <td className="border-b p-2 text-xs">{item.alamat_toko}</td>
              <td className="border-b p-2 text-xs">{item.alamat_pemilik}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};
