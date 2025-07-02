import React, { useEffect, useState } from "react";
import { Tabeldata } from "../../../molecules/dashboard/user/tabeldata";
import useUserStore from "../../../../store/userStore";
import { Formedit } from "../../../molecules/dashboard/user/formedit";
const Datatabel = ({ page, limit }) => {
  const { users, fetchUsers, deleteUser } = useUserStore();
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers({ page, limit });
  }, [page, limit, fetchUsers]);

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus user ini?");
    if (!konfirmasi) return;

    try {
      await deleteUser(id);
      fetchUsers({ page, limit });
    } catch (err) {
      alert("Gagal menghapus user: " + err);
    }
  };

  return (
    <div className="space-y-4">
      <Tabeldata data={users} onEdit={handleEdit} onDelete={handleDelete} />

      {selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded shadow max-w-lg w-full">
            <Formedit
              user={selectedUser}
              onClose={() => {
                selectedUser(null);
                fetchUsers({ page, limit });
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Datatabel;
