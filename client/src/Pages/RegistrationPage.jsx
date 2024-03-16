import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const RegisterUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({ name, email, password, age, gender, phone });
    console.log(formData);
    console.log("Form submitted");
    try {
      const res = await axios.post(
        "http://localhost:3030/create-user",
        formData
      );
      console.log(res.status);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className=" h-screen bg-white flex items-center justify-center">
        <div className="card bg-slate-100 p-6 rounded-lg scale-125">
          <form onSubmit={handleSubmit}>
            <div className="w-full flex align-center justify-center">
              <h1 className="text-2xl font-semibold">Register here</h1>
            </div>
            <div className="grid grid-cols-2 gap-2">
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
                    autoComplete="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    autoComplete="name"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    autoComplete="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* PASSWORD */}
              <div className="col-span-2">
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
              </div>

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
                    autoComplete="name"
                    required
                    onChange={(e) => setAge(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  <option selected>Select your gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="col-span-2">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
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
          <p className="text-start text-sm text-gray-500">
            Have an account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
