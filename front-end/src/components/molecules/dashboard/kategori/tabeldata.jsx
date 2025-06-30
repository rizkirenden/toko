import React from "react";
import { Card } from "../../../atoms/card";
export const Tabeldata = ({ data, onEdit, onDelete }) => {
  return (
    <Card className="p-4 overflow-x-auto">
      <table className="w-full text-left border-collapse text-sm">
        <thead>
          <tr>
            <th className="border-b p-2 text-xs">ID</th>
            <th className="border-b p-2 text-xs">Nama</th>
            <th className="border-b p-2 text-xs">Deskirpsi</th>
            <th className="border-b p-2 text-xs">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="border-b p-2 text-xs">{item.category_id}</td>
              <td className="border-b p-2 text-xs">{item.name}</td>
              <td className="border-b p-2 text-xs">{item.description}</td>
              <td className="border-b p-2 text-sx">
                <div className="flex gap-2">
                  <button
                    onClick={() => onEdit(item)}
                    className="text-blue-500 hover:underline text-sx"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(item.category_id)}
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
