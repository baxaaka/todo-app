import React from "react";

const TableRow = ({data:{id,name,age},num}) => {
  return (
    <>
      <tr>
        <td> {num}</td> <td>{name}</td> <td>{age}</td>
      </tr>
    </>
  );
};

export default TableRow;
