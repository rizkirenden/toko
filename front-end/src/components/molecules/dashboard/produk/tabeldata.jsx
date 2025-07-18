import React, { useState } from "react";
import { Card } from "../../../atoms/card";

export const Tabeldata = ({ data, onEdit, onDelete }) => {
  const [previewImage, setPreviewImage] = useState(null);

  return (
    <>
      <Card className="p-4 overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b p-2 text-xs">ID</th>
              <th className="border-b p-2 text-xs">Nama</th>
              <th className="border-b p-2 text-xs">Harga</th>
              <th className="border-b p-2 text-xs">Bahan</th>
              <th className="border-b p-2 text-xs">Gambar Produk</th>
              <th className="border-b p-2 text-xs">Video Produk</th>
              <th className="border-b p-2 text-xs">Status</th>
              <th className="border-b p-2 text-xs">Nama Kategori</th>
              <th className="border-b p-2 text-xs">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => (
              <tr key={item.product_id} className="hover:bg-gray-100">
                <td className="border-b p-2 text-xs">{item.product_id}</td>
                <td className="border-b p-2 text-xs">{item.name}</td>
                <td className="border-b p-2 text-xs">{item.harga}</td>
                <td className="border-b p-2 text-xs">{item.deskripsi_bahan}</td>
                <td className="border-b p-2 text-xs">
                  <img
                    src={`http://localhost:3000/uploads/${item.gambar_product}`}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded cursor-pointer"
                    onClick={() =>
                      setPreviewImage(
                        `http://localhost:3000/uploads/${item.gambar_product}`
                      )
                    }
                  />
                </td>
                <td className="border-b p-2 text-xs">
                  <video
                    src={`http://localhost:3000/uploads/${item.video_product}`}
                    className="w-32 h-20 rounded"
                    controls
                  />
                </td>
                <td className="border-b p-2 text-xs">{item.status}</td>
                <td className="border-b p-2 text-xs">{item.nama_kategori}</td>
                <td className="border-b p-2 text-xs">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEdit(item)}
                      className="text-blue-500 hover:underline text-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(item.product_id)}
                      className="text-red-500 hover:underline text-xs"
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>

      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <img
            src={previewImage}
            alt="Preview"
            className="max-w-full max-h-full object-contain rounded shadow-lg"
          />
        </div>
      )}
    </>
  );
};
