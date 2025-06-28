import React from "react";
import { Card } from "../../../atoms/card";
import { useState } from "react";

export const Tabeldata = ({ data, onEdit, onDelete }) => {
  const [previewImage, setPreviewImage] = useState(null);
  return (
    <>
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
              <th className="border-b p-2 text-xs">Toko Logo</th>
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
                <td className="border-b p-2 text-xs">
                  <img
                    src={`http://localhost:3000/uploads/${item.toko_logo}`}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded cursor-pointer"
                    onClick={() =>
                      setPreviewImage(
                        `http://localhost:3000/uploads/${item.toko_logo}`
                      )
                    }
                  />
                </td>
                <td className="border-b p-2 text-xs">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onEdit(item)}
                      className="text-blue-500 hover:underline text-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(item.toko_id)}
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
