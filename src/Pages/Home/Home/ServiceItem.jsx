import { FaArrowRight } from "react-icons/fa";
import Reveal from "../../../Animation/Reveal";
import { Link } from "react-router-dom";
const ServiceItem = ({ service }) => {
  const { _id, title, price, img } = service;
  return (
    <Reveal>
      <div className="card h-[400px] border bg-base-200 hover:bg-white shadow-lg hover:shadow-xl hover:border transition transform ease-in-out delay-150 hover:-translate-y-10 hover:scale-110 duration-500 hover:border-orange-500">
        <figure className="px-7 py-7">
          <img src={img} alt="Shoes" className="rounded-xl w-full h-[200px]" />
        </figure>
        <div className="px-7 pb-7">
          <h2 className="text-2xl font-bold">{title}</h2>
          <div className="flex items-center justify-between mt-1">
            <p className="text-[#FF3811] font-semibold text-lg">
              Price : ${price}
            </p>
            <Link to={`/serviceDetails/${_id}`}>
              <button className="btn border-none rounded-lg text-[#FF3811] hover:bg-[#FF3811] hover:text-white shadow-md">
                <FaArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ServiceItem;
