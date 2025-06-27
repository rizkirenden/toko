import React from "react";
import { Card } from "../../../atoms/card";
export const Tabeldata = ({ data }) => {
  return (
    <Card>
      <table>
        <thead>
          <tr>
            <th className="border-b p-2 text-xs">ID</th>
            <th className="border-b p-2 text-xs">Email</th>
            <th className="border-b p-2 text-xs">Role</th>
            <th className="border-b p-2 text-xs">Nama Toko</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="border-b p-2 text-xs">{item.user_id}</td>
              <td className="border-b p-2 text-xs">{item.email}</td>
              <td className="border-b p-2 text-xs">{item.role}</td>
              <td className="border-b p-2 text-xs">{item.nama_toko}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};
