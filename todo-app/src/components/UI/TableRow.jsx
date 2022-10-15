import React from "react";

const TableRow = ({data:{id,name,age},num}) => {
  return (
    <>
      <tr>
        <td> {num}</td> <td>{`${new Date().getHours()} : ${new Date().getMinutes()} :  ${new Date().getSeconds()}`}</td> <td>{age}</td>
      </tr>
    </>
  );
};

export default TableRow;
