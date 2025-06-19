import React from "react";
import { Card } from "../../../atoms/card";

export const Tabeldata = ({ data }) => {
  return (
    <Card className="p-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2">ID</th>
            <th className="border-b p-2">Nama Toko</th>
            <th className="border-b p-2">Nama Pemilik</th>
            <th className="border-b p-2">No Telp</th>
            <th className="border-b p-2">Alamat Toko</th>
            <th className="border-b p-2">Alamat Pemilik</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="border-b p-2">{item.id_toko}</td>
              <td className="border-b p-2">{item.nama_toko}</td>
              <td className="border-b p-2">{item.nama_pemilik}</td>
              <td className="border-b p-2">{item.no_telp}</td>
              <td className="border-b p-2">{item.alamat_toko}</td>
              <td className="border-b p-2">{item.alamat_pemilik}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};
