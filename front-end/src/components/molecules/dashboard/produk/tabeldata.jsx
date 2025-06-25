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
              <td className="border-b p-2 text-xs">{item.category_id}</td>
              <td className="border-b p-2 text-xs">{item.name}</td>
              <td className="border-b p-2 text-xs">{item.harga}</td>
              <td className="border-b p-2 text-xs">{item.deskripsi_bahan}</td>
              <td className="border-b p-2 text-xs">
                <img
                  src={`http://localhost:3000/uploads/${item.gambar_product}`}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
              </td>
              <td className="border-b p-2 text-xs">
                <video
                  src={`http://localhost:3000/uploads/${item.video_product}`}
                  alt={item.name}
                  className="w-32 h-20 rounded"
                />
              </td>
              <td className="border-b p-2 text-xs">{item.status}</td>
              <td className="border-b p-2 text-xs">{item.nama_toko}</td>
              <td className="border-b p-2 text-xs">{item.no_telp}</td>
              <td className="border-b p-2 text-xs">{item.nama_kategori}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};
