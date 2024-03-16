import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import schemes from "../data/data.json";
import { useNavigate } from "react-router-dom";

export default function Scheme() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(schemes);
  }, []);
  let title = useParams();
  title = title.title.replace(/-/g, " ");
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/apply");
  };
  return (
    <div>
      {data.length > 0 &&
        data
          .filter((item) => item.title === title)
          .map((item, key) => {
            return (
              <div
                key={key}
                className="flex justify-center items-center min-h-screen bg-gray-100"
              >
                <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row">
                  <div className="lg:w-1/2 lg:pr-6 pl-8 mb-4 lg:mb-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-w-xs h-auto rounded-lg"
                    />
                  </div>
                  <div className="lg:w-1/2 lg:pl-8">
                    <h2 className="text-3xl font-semibold mb-4">
                      {item.title}
                    </h2>
                    <h3 className="text-md font-semibold mb-4 text-gray-700">
                      {item.category}
                    </h3>
                    <div className="text-lg mb-4">{item.description}</div>
                    <div className="text-xl mb-4">
                      <span className="font-semibold">Eligibility:</span>{" "}
                      <span className="font-sans">{item.eligibility}</span>
                    </div>{" "}
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                      onClick={handleClick}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
  );
}
