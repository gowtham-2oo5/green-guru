import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import schemes from "../../data/data.json";
import Footer from "./footer";
import UserHome from "./UserHome";
const Apply = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    setData(schemes);
    setUserData(JSON.parse(localStorage.getItem("user")));
    console.log(localStorage.getItem("user"));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      name: name,
      email: email,
      password: password,
      age: age,
      gender: gender,
      phone: phone,
    });
    console.log(formData);
    console.log("Form submitted");
    try {
      const res = await axios.post(
        "http://localhost:3030/open-application",
        formData
      );
      console.log(res.status);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className=" h-screen bg-white flex items-center justify-center">
        <div className="card bg-slate-100 p-6 rounded-lg scale-110">
          <form onSubmit={handleSubmit}>
            <div className="w-full flex align-center justify-center">
              <h1 className="text-2xl font-semibold">
                Apply for a service here
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="col-span-2">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Select a service
                </label>
                <select
                  id="service"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    setGender(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option selected>Select a service</option>

                  {data.length > 0 &&
                    data.map((item) => {
                      return (
                        <option key={item.title} value={item.title}>
                          {item.title}
                        </option>
                      );
                    })}
                </select>
              </div>
              {/* NAME */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter your name
                </label>
                <div>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder={
                      userData.name ? userData.name : "Enter your name"
                    }
                    disabled
                    value={userData.name}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* MOBILE */}
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter your mobile number
                </label>
                <div>
                  <input
                    id="mobile"
                    name="mobile"
                    type="text"
                    disabled
                    placeholder={
                      userData.phone ? userData.phone : "Enter Mobile Number"
                    }
                    value={userData.phone}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div className="col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter your email address
                </label>
                <div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    disabled
                    value={userData.email}
                    placeholder={userData.email ? userData.email : "Enter Email"}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              {/* <div className="col-span-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-slate-600 hover:text-slate-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div> */}

              {/* AGE */}
              <div>
                <label
                  htmlFor="age"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter your age
                </label>
                <div>
                  <input
                    id="age"
                    name="age"
                    type="text"
                    disabled
                    value={userData.age}
                    placeholder="userData.age ? userData.age : 'Enter your age'"
                    onChange={(e) => setAge(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* GENDER */}
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Choose your gender
                </label>
                <select
                  id="gender"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={""}
                  onChange={(e) => {
                    setGender(e.target.value);
                    console.log(e.target.value);
                  }}
                >
                  <option selected value={userData.gender} disabled>{userData.gender}</option>
                  
                </select>
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Apply
                </button>
              </div>
            </div>
          </form>
          <p className=" text-start text-sm text-gray-500">
            Go back{" "}
            <Link
              to="/"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Home
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Apply;
