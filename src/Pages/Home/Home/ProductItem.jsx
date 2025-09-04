import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Reveal from "../../../Animation/Reveal";
import Rating from "react-rating";
const ProductItem = ({ product }) => {
  const { title, price, image, rating } = product;
  return (
    <Reveal>
      <div className="flip-card rounded-lg">
        <div className="flip-card-inner">
          <div className="flip-card-front card border shadow-lg">
            <figure className="px-7 py-7">
              <img
                src={image}
                alt="Shoes"
                className="rounded-xl w-full h-[200px] bg-base-200"
              />
            </figure>
            <div className="px-7 pb-7">
              <h2 className="text-2xl font-bold">{title}</h2>
              <div className="mt-1">
                <p className="text-[#FF3811] font-semibold text-lg">
                  Price : ${price}
                </p>
              </div>
            </div>
          </div>
          <div className="relative flip-card-back">
            <div className="absolute rounded-lg bg-gradient-to-t from-[#00000099] to-[#00000000] h-full w-full z-10">
              <Rating
                initialRating={rating}
                emptySymbol={<FaRegStar size={40} color="#FFD700" />}
                fullSymbol={<FaStar size={40} color="#FFD700" />}
                fractions={2}
                readonly
                className="absolute flipcardback top-[200px] right-[85px] z-20"
              />
              <button className="btn flipcardback font-bold text-xl text-[#FF3811] hover:bg-[#FF3811] hover:border-none  absolute top-[260px] right-[125px] bg-white z-20 hover:text-white">Purchase</button>
            </div>
            <div className="card border shadow-lg h-[400px]">
              <figure className="px-7 py-7">
                <img
                  src={image}
                  alt="Shoes"
                  className="rounded-xl w-full h-[200px] bg-base-200"
                />
              </figure>
              <div className="px-7 pb-7">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className="mt-1">
                  <p className="text-[#FF3811] font-semibold text-lg">
                    Price : ${price}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ProductItem;
