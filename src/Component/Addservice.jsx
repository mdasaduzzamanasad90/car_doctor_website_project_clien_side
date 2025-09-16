import { useNavigate } from "react-router-dom";
import Reveal from "../Animation/Reveal";
import Swal from 'sweetalert2'
const Addservice = () => {
  const navigate = useNavigate();
  const addservicefunc = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = form.price.value;
    const servicename = form.servicename.value;
    const image = form.image.value;
    const description = form.description.value;
    const afacilityname = form.afacilityname.value;
    const afacilitydetails = form.afacilitydetails.value;
    const bfacilityname = form.bfacilityname.value;
    const bfacilitydetails = form.bfacilitydetails.value;
    const cfacilityname = form.cfacilityname.value;
    const cfacilitydetails = form.cfacilitydetails.value;
    const dfacilityname = form.dfacilityname.value;
    const dfacilitydetails = form.dfacilitydetails.value;
    const addservice = {
      title: servicename,
      img: image,
      price: price,
      description: description,
      facility: [
        {
          name: afacilityname,
          details: afacilitydetails,
        },
        {
          name: bfacilityname,
          details: bfacilitydetails,
        },
        {
          name: cfacilityname,
          details: cfacilitydetails,
        },
        {
          name: dfacilityname,
          details: dfacilitydetails,
        },
      ],
    };
    // console.log(price);
    console.log(addservice);
    fetch("https://car-doctor-server-ue3r.onrender.com/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addservice),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Your Service is Added Successfully",
            icon: "success",
          }).then(() => navigate("/allservice"));
        }
      });
  };
  return (
    <Reveal>
      <div className="mx-40 mt-36 mb-24">
        <div className="">
          <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
            <h1 className="text-center text-4xl mt-8 font-bold px-10">
              Add Service
            </h1>
            <div className="card-body">
              <form onSubmit={addservicefunc}>
                <div>
                  <div className="grid grid-cols-2 gap-5 mb-5">
                    <fieldset className="fieldset">
                      <label className="text-xl font-bold">Service Name</label>
                      <input
                        type="text"
                        name="servicename"
                        required
                        className="input w-full"
                        placeholder="Service Name"
                      />
                    </fieldset>
                    <fieldset className="fieldset">
                      <label className="text-xl font-bold">
                        Service Image URL
                      </label>
                      <input
                        type="text"
                        name="image"
                        required
                        className="input w-full"
                        placeholder="Your Service Image URL"
                      />
                    </fieldset>
                    <fieldset className="fieldset">
                      <label className="text-xl font-bold">Service Price</label>
                      <input
                        type="text"
                        name="price"
                        required
                        className="input w-full"
                        placeholder="Your Service Price"
                      />
                    </fieldset>
                    <fieldset className="fieldset">
                      <label className="text-xl font-bold">
                        Service Description
                      </label>
                      <input
                        type="text"
                        name="description"
                        required
                        className="input w-full"
                        placeholder="Your Service Description"
                      />
                    </fieldset>
                  </div>
                  <div>
                    {/* facility */}
                    <h1 className="text-center font-bold text-2xl mb-4">
                      Service Facilitys
                    </h1>
                    <div className="grid grid-cols-2 gap-5">
                      {/* 01 */}
                      <div>
                        <h1 className="text-center text-xl font-bold">
                          Facility : 01
                        </h1>
                        <fieldset className="fieldset">
                          <label className="text-base font-bold">
                            Facility Name
                          </label>
                          <input
                            type="text"
                            name="afacilityname"
                            required
                            className="input w-full"
                            placeholder="Your Facility Name"
                          />
                        </fieldset>
                        <fieldset className="fieldset">
                          <label className="text-base font-bold">
                            Facility Details
                          </label>
                          <input
                            type="text"
                            name="afacilitydetails"
                            required
                            className="input w-full"
                            placeholder="Your Facility Details"
                          />
                        </fieldset>
                      </div>
                      {/* 01 */}
                      <div>
                        <h1 className="text-center text-xl font-bold">
                          Facility : 02
                        </h1>
                        <fieldset className="fieldset">
                          <label className="text-base font-bold">
                            Facility Name
                          </label>
                          <input
                            type="text"
                            name="bfacilityname"
                            required
                            className="input w-full"
                            placeholder="Your Facility Name"
                          />
                        </fieldset>
                        <fieldset className="fieldset">
                          <label className="text-base font-bold">
                            Facility Details
                          </label>
                          <input
                            type="text"
                            name="bfacilitydetails"
                            required
                            className="input w-full"
                            placeholder="Your Facility Details"
                          />
                        </fieldset>
                      </div>
                      {/* 01 */}
                      <div>
                        <h1 className="text-center text-xl font-bold">
                          Facility : 03
                        </h1>
                        <fieldset className="fieldset">
                          <label className="text-base font-bold">
                            Facility Name
                          </label>
                          <input
                            type="text"
                            name="cfacilityname"
                            required
                            className="input w-full"
                            placeholder="Your Facility Name"
                          />
                        </fieldset>
                        <fieldset className="fieldset">
                          <label className="text-base font-bold">
                            Facility Details
                          </label>
                          <input
                            type="text"
                            name="cfacilitydetails"
                            required
                            className="input w-full"
                            placeholder="Your Facility Details"
                          />
                        </fieldset>
                      </div>
                      {/* 01 */}
                      <div>
                        <h1 className="text-center text-xl font-bold">
                          Facility : 04
                        </h1>
                        <fieldset className="fieldset">
                          <label className="text-base font-bold">
                            Facility Name
                          </label>
                          <input
                            type="text"
                            name="dfacilityname"
                            required
                            className="input w-full"
                            placeholder="Your Facility Name"
                          />
                        </fieldset>
                        <fieldset className="fieldset">
                          <label className="text-base font-bold">
                            Facility Details
                          </label>
                          <input
                            type="text"
                            name="dfacilitydetails"
                            required
                            className="input w-full"
                            placeholder="Your Facility Details"
                          />
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>
                <input
                  type="submit"
                  className="btn text-xl hover:text-white text-[#FF3811] hover:border-none hover:bg-[#FF3811] border-[#FF3811] mt-8 w-full"
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
