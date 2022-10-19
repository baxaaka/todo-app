import React, { useState, useRef, useContext } from "react";
import Input from "../UI/Input";
import TableRow from "../UI/TableRow";
import { v4 as uuidv4 } from "uuid";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const index = () => {
  const [userName, setUsername] = useState("");
  const [age, setAge] = useState("");

  const st = useRef();
  const btn = useRef();

  const [data, setData] = useState([]);

  const check = {
    user: userName.trim().length === 0,
    age: age.trim().length === 0,
  };

  function addUser() {
  
    const newUser = {
      id: uuidv4(),
      name: userName,
      age: age,
    };

    if (check.user || check.age) {
      toast.error("please fill input");
    } else {
      setData([...data, newUser]);
      toast.success("SUCCESS ADDED USER");
    }

    setUsername("");
    setAge("");
  }

  function deleteUser(id) {
    const newarray = data.filter((item) => {
      return item.id !== id;
    });
    setData(newarray);
    console.log(data);
  }
  return (
    <>
      <section>
        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <div className="card w-75 mx-auto shadow bg-info p-5">
                <Input
                  val={userName}
                  setVal={setUsername}
                  type={"text"}
                  pl={"NIMA ISH BAJRMOQCHISIZ"}
                />
                <Input
                  val={age}
                  setVal={setAge}
                  type={"number"}
                  pl={"NECHCHI DAQIQADAN KEYIN"}
                />

                <button
                  className="btn btn-primary w-50 mx-auto"
                  onClick={() => addUser()}
                >
                  add info
                </button>
              </div>
            </div>
            <div className="col-12 my-5 bg-light p-5 w-75 mx-auto">
              <h3 className="text-center text-danger">USER LIST</h3>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>ID</th> <th>Qachon qushildi</th>
                    <th>Qancha vaqtdan keyin</th> <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => {
                    return (
                      <TableRow
                        num={index + 1}
                        data={item}
                        key={item.id}
                        del={deleteUser}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"/>

    </>
  );
};

export default index;
