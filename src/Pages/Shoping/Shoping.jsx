import { useContext, useEffect, useState } from "react";
import { Authcontex } from "../../Provider/AuthProvider";
import Cardshoping from "../Cardshoping/Cardshoping";

const Shoping = () => {
  const { user } = useContext(Authcontex);
  const [serviceshoping, setserviceshoping] = useState([]);
  const url = `https://car-doctor-server-ue3r.onrender.com/confirm?email=${user.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setserviceshoping(data));
  }, [url]);
  return (
    <div>
      <div className="mx-24 mt-36">
        {serviceshoping.map((serviceshoping) => (
          <Cardshoping key={serviceshoping._id} serviceshoping={serviceshoping}></Cardshoping>
        ))}
        </div>
    </div>
  );
};

export default Shoping;
