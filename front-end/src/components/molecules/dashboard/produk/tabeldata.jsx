import React from "react";
import { Card } from "../../../atoms/card";
export const Tabeldata = ({ data }) => {
  return (
    <Card className="p-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2 text-xs">ID</th>
            <th className="border-b p-2 text-xs">Nama</th>
            <th className="border-b p-2 text-xs">Harga</th>
            <th className="border-b p-2 text-xs">Bahan</th>
            <th className="border-b p-2 text-xs">Gambar Produk</th>
            <th className="border-b p-2 text-xs">Video Produk</th>
            <th className="border-b p-2 text-xs">Status</th>
            <th className="border-b p-2 text-xs">Nama Toko</th>
            <th className="border-b p-2 text-xs">No Telp</th>
            <th className="border-b p-2 text-xs">Nama Kategori</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="border-b p-2 text-sm">{item.id}</td>
              <td className="border-b p-2 text-sm">{item.nama}</td>
              <td className="border-b p-2 text-sm">{item.harga}</td>
              <td className="border-b p-2 text-sm">{item.bahan}</td>
              <td className="border-b p-2 text-sm">
                <img
                  src={item.gambar_product}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
              </td>
              <td className="border-b p-2 text-sm">
                <video
                  src={item.video_product}
                  alt={item.name}
                  className="w-32 h-20 rounded"
                />
              </td>
              <td className="border-b p-2 text-sm">{item.status}</td>
              <td className="border-b p-2 text-sm">{item.nama_toko}</td>
              <td className="border-b p-2 text-sm">{item.no_telp}</td>
              <td className="border-b p-2 text-sm">{item.nama_kategori}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};
