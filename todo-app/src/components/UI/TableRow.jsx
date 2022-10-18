import React from "react";

const TableRow = ({data:{id,name,age},num,del}) => {
  return (
    <>
      <tr>
        <td> {num}</td> <td>{`${new Date().getHours()} : ${new Date().getMinutes()} :  ${new Date().getSeconds()}`}</td> <td>{age}</td> <td className="btn bg-danger" onClick={()=>del(id)}>Delete</td>
      </tr>
    </>
  );
};

export default TableRow;
