import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export default function Track() {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    setUserData(user);
    console.log(userData);
    fetchData(user.email);
  }, []);

  const fetchData = async (email) => {
    try {
      const res = await axios.get(
        `http://localhost:3030/get-application/${email}`
      );
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      datahere
      {data &&
        data.map((item, index) => {
          return (
            <div key={index}>
              <h1>{item.title}</h1>
            </div>
          );
        })}
    </div>
  );
}
