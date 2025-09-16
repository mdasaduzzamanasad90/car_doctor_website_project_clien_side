import { useContext, useState } from "react";
import { Authcontex } from "../Provider/AuthProvider";
import { useLoaderData, useNavigate } from "react-router-dom";
import Reveal from "../Animation/Reveal";
import Swal from "sweetalert2";
const ConfamOrder = () => {
  const [loading, setloading] = useState(true);
  const { user } = useContext(Authcontex);
  const orderconfirmdata = useLoaderData();
  const { price, title, img } = orderconfirmdata;
  const navigate = useNavigate();
  const confirmorderfunc = (event) => {
    event.preventDefault();
    setloading(true);
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const price = form.price.value;
    const servicename = form.servicename.value;
    const order = {
      name: name,
      email: email,
      image: img,
      phone: phone,
      date: date,
      price: price,
      servicename: servicename,
    };
    // console.log(order);
    fetch("https://car-doctor-server-project.web.app/confirm", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Your Order is Confirm",
            icon: "success",
          }).then(() => navigate("/allservice"));
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
        title: "Error",
        text: "Something went wrong",
        icon: "error",
      });
      })
      .finally(() => setloading(false));
  };
  return (
    <Reveal>
      <div class="hero mt-36 mb-24">
        <div class="">
          <div class="card bg-base-100 w-full shrink-0 shadow-2xl">
            <h1 className="text-center text-4xl mt-8 font-bold px-10">
              You Really Active This Service{" "}
              <span className="text-[#FF3811]">{title}</span> <br />
              Please Confirm Your Order
            </h1>
            <div class="card-body">
              <form onSubmit={confirmorderfunc}>
                <div className="grid grid-cols-2 gap-5 px-20 mb-5">
                  <fieldset class="fieldset">
                    <label class="text-xl font-bold">Name</label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={user.displayName}
                      required
                      className="input w-80"
                      placeholder="Your Name"
                    />
                  </fieldset>
                  <fieldset class="fieldset">
                    <label class="text-xl font-bold">Email</label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={user.email}
                      required
                      className="input w-80"
                      placeholder="Your Email"
                    />
                  </fieldset>
                  <fieldset class="fieldset">
                    <label class="text-xl font-bold">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      className="input w-80"
                      required
                      placeholder="Your Phone Number"
                    />
                  </fieldset>
                  <fieldset class="fieldset">
                    <label class="text-xl font-bold">Service Date</label>
                    <input
                      type="date"
                      name="date"
                      required
                      className="input w-80"
                    />
                  </fieldset>
                  <fieldset class="fieldset">
                    <label class="text-xl font-bold">Price</label>
                    <input
                      type="text"
                      name="price"
                      required
                      defaultValue={"$" + price}
                      className="input w-80"
                      placeholder="Price"
                    />
                  </fieldset>
                  <fieldset class="fieldset">
                    <label class="text-xl font-bold">Service Name</label>
                    <input
                      type="text"
                      name="servicename"
                      required
                      defaultValue={title}
                      className="input w-80"
                      placeholder="Service Name"
                    />
                  </fieldset>
                </div>
                <input
                  type="submit"
                  className="btn text-xl hover:text-white text-[#FF3811] hover:border-none hover:bg-[#FF3811] border-[#FF3811] mt-4 w-full"
                  value={loading ? "Confirm" : "Confirm"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default ConfamOrder;
