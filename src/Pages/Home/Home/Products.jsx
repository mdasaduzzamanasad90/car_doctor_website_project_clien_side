import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FadeReveal from "../../../Animation/FadeReveal";
import ProductItem from "./ProductItem";

const Products = () => {
  const [products, setproducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://car-doctor-server-project.web.app/products")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);
  return (
    <div className="lg:mx-24 mt-24">
      {/* service title */}
      <FadeReveal>
        <div className="text-center space-y-4">
          <h1 className="text-xl font-bold text-[#FF3811]">Popular Products</h1>
          <h1 className="text-6xl font-bold">Browse Our Products</h1>
          <p className="text-base font-semibold text-[#00000066]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised <br />words which don't look even slightly
            believable.
          </p>
        </div>
      </FadeReveal>
      {/* service item */}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-7 my-20 h-[800px] w-full">
        {products.map((product) => (
          <ProductItem key={product._id} product={product}></ProductItem>
        ))}
      </div>
      {/* more services button */}
      <FadeReveal>
        <div className="text-center">
          <button
            onClick={() => navigate("/services")}
            className="btn mt-8 w-44 text-lg font-bold hover:text-white hover:bg-[#FF3811] hover:border-none border-[#FF3811] bg-white text-[#FF3811]"
          >
            More Products
          </button>
        </div>
      </FadeReveal>
    </div>
  );
};

export default Products;
