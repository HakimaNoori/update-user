import React, { useEffect, useState } from "react";
import "./User.css";
import axios from "axios";
import { Link } from "react-router-dom";
 

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.log("Error fetching users:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="userTable">
      <Link to="/add" type="button" className="btn btn-primary">
        Add User <i className="fa-solid fa-user-plus"></i>
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td className="actionButtons">
                <Link to={`/update/` +user._id} type="button" className="btn btn-info">
                  <i className="fa-solid fa-pen-to-square"></i>
                </Link>
                <button type="button" className="btn btn-danger">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
