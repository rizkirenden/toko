import React from "react";
import { Card } from "../../../atoms/card";
import { Button } from "../../../atoms/button";

export const Tabelfooter = ({
  currentPage = 1,
  totalPages = 1,
  onPageChange = () => {},
}) => {
  return (
    <Card className="p-4 flex flex-row items-center justify-between gap-4">
      <div className="text-sm text-gray-600">
        Halaman {currentPage} dari {totalPages}
      </div>

      <div className="flex items-center gap-2">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded-md ${
            currentPage === 1
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-gray-100"
          }`}
        >
          Kembali
        </Button>

        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded-md ${
            currentPage === totalPages
              ? "cursor-not-allowed opacity-50"
              : "hover:bg-gray-100"
          }`}
        >
          Lanjut
        </Button>
      </div>
    </Card>
  );
};
