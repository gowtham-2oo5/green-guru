import { useEffect, useState } from "react";
import schemes from "../../data/data.json";
import Card from "../Card";

export default function Services() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    setData(schemes);
  }, []);
  useEffect(() => {
    setFilteredData(
      searchTerm
        ? data.filter((item) =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : data
    );
  }, [searchTerm, data]);
  return (
    <div>
      <div className="p-5">
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Search schemes"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-1/2 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mx-auto" />
          </div>
        <div className="p-14 pb-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {filteredData.map((item) => {
            return (
              <div key={item.title} className="p-4 overflow-hidden">
                <Card
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
