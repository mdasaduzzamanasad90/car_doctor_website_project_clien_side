import { useContext ,useEffect, useState } from "react";
import { Authcontex } from "../../Provider/AuthProvider";
import Cardshoping from "../Cardshoping/Cardshoping";
import axios from "axios";

const Shoping = () => {
  const [loading, setloading] = useState(true);
  const { user } = useContext(Authcontex);
  const [serviceshoping, setserviceshoping] = useState([]);
  //
  const url = `https://car-doctor-server-project.web.app/confirm?email=${user.email}`;
  // console.log(user.email)
  useEffect(() => {
    setloading(true);
    // use asiso 
    axios.get(url, {withCredentials: true})
    .then(res=>{
      setserviceshoping(res.data);
      setloading(false);
    })
    .catch(err=>{
      console.log(err.response.data)
    })

    // or
    // use normal waye
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setserviceshoping(data);
    //     setloading(false);
    //   });

  }, [url]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-dots loading-xl text-[#FF3811]"></span>
      </div>
    );
  }
  return (
    <div>
      <div className="mx-24 mt-36">
        {serviceshoping.map((serviceshoping) => (
          <Cardshoping
            key={serviceshoping._id}
            serviceshoping={serviceshoping}
          ></Cardshoping>
        ))}
      </div>
    </div>
  );
};

export default Shoping;
