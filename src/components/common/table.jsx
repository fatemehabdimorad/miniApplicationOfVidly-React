import React from "react";
import TableHeader from "./tabelHeader";
import TabelBody from "./tabelBody";

const Table = ({ data, columns, sortColumn, onSort }) => {
  return (
    <table className="table">
      <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
      <TabelBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
