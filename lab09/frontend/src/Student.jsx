import React, { useEffect, useState } from "react";
import './Student.css';
import axios from "axios";
const baseURL = "http://localhost:5000";

const Student = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(baseURL);
      setData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <center>
        <table border="1">
          <tr>
            <th colSpan={5}>
              <h3>STUDENT LIST</h3>
            </th>
          </tr>
          <tr className="columns">
            <th>Full Name</th>
            <th>Birth year</th>
            <th>Email</th>
            <th>Grade</th>
            <th>Gender</th>
          </tr>
          {data.map((student) => (
            <tr>
              <th>{student.full_name}</th>
              <th>{student.birth_year}</th>
              <th>{student.email}</th>
              <th>{student.grade}</th>
              <th>{student.gender}</th>
            </tr>
          ))}
        </table>
      </center>
    </div>
  );
};

export default Student;
