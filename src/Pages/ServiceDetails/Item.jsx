import Reveal from "../../Animation/Reveal";

const Item = ({ item }) => {
  const { name, details } = item;
  return (
    <Reveal>
      {" "}
      <div className="border-t-4 bg-gray-100 shadow-lg hover:shadow-[#FF3811] rounded-3xl text-left px-5 py-7 border-[#FF3811]">
        <h1 className="text-xl mb-3 font-semibold">{name}</h1>
        <p className="text-base font-semibold text-[#00000066] text-left">
          {details}
        </p>
      </div>
    </Reveal>
  );
};

export default Item;
