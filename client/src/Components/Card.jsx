import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Card(props) {
  Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
  };
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-80">
        <img
          src={props.image}
          alt="profile-picture"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <div className="p-6 text-center">
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {props.title}
        </h4>
        <p className="text-base font-sans font-bold leading-relaxed tracking-normal text-gray-700">
          {props.category}
        </p>
        {/* <p className="text-base font-sans font-normal leading-relaxed tracking-normal text-blue-gray-500">
          {props.description}
        </p> */}
      </div>
      <div className="flex justify-center space-x-4 pb-4">
        <Link
          to={`/schemes/${props.title.replace(/\s/g, "-")}`}
          key={props.title}
        >
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Read More
          </button>
        </Link>
        <Link to="/apply">
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Apply
          </button>
        </Link>
      </div>
    </div>
  );
}
