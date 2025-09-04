
import Reveal from "../Animation/Reveal";
import swal from "sweetalert";
const Addservice = () => {

  const confirmorderfunc = (event) => {
    event.preventDefault();
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
    //   image: img,
      phone: phone,
      date: date,
      price: price,
      servicename: servicename,
    };
    console.log(order);
    fetch("https://car-doctor-server-ue3r.onrender.com/service", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal({
            title: "Successfully",
            text: "Your Order is Confirm",
            icon: "success",
            button: "ok",
          });
        }
      });
  };
  return (
    <Reveal>
      <div class="hero mt-36 mb-24">
        <div class="">
          <div class="card bg-base-100 w-full shrink-0 shadow-2xl">
            <h1 className="text-center text-4xl mt-8 font-bold px-10">
                Add Service
            </h1>
            <div class="card-body">
              <form onSubmit={confirmorderfunc}>
                <div className="grid grid-cols-2 gap-5 px-20 mb-5">
                  <fieldset class="fieldset">
                    <label class="text-xl font-bold">Price</label>
                    <input
                      type="text"
                      name="price"
                      required
                      
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
                      className="input w-80"
                      placeholder="Service Name"
                    />
                  </fieldset>
                  <fieldset class="fieldset">
                    <label class="text-xl font-bold">Image URL</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="input w-80"
                      placeholder="Your Image URL"
                    />
                  </fieldset>
                  <fieldset class="fieldset">
                    <label class="text-xl font-bold">Description</label>
                    <input
                      type="email"
                      name="email"
                     
                      required
                      className="input w-80"
                      placeholder="Your Description"
                    />
                  </fieldset>
                </div>
                <input
                //   onClick={handelnavigate}
                  type="submit"
                  className="btn text-xl hover:text-white text-[#FF3811] hover:border-none hover:bg-[#FF3811] border-[#FF3811] mt-4 w-full"
                  value="Confirm"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Addservice;
