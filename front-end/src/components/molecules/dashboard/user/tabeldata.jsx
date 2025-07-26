import React from "react";
import { Card } from "../../../atoms/card";
export const Tabeldata = ({ data, onEdit, onDelete }) => {
  return (
    <Card className="p-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2 text-xs">ID</th>
            <th className="border-b p-2 text-xs">Email</th>
            <th className="border-b p-2 text-xs">Role</th>
            <th className="border-b p-2 text-xs">Nama Toko</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={item.user_id || index} className="hover:bg-gray-100">
              <td className="border-b p-2 text-xs">{item.user_id}</td>
              <td className="border-b p-2 text-xs">{item.email}</td>
              <td className="border-b p-2 text-xs">{item.role}</td>
              <td className="border-b p-2 text-xs">{item.nama_toko}</td>
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
  );
};
