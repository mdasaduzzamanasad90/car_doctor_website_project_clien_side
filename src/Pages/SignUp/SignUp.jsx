import img from "../../assets/assets/images/login/login.svg";
import google from "../../assets/assets/icons/googleimageicon.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontex } from "../../Provider/AuthProvider";
import { useContext } from "react";
import { updateProfile } from "firebase/auth";
const SignUp = () => {
  const { creataccount, googleauth } = useContext(Authcontex);
  const navigate = useNavigate();
  const location = useLocation();
  const signupfield = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log( name,email, password , image );
    creataccount(email, password)
      .then((res) => {
        const user = res.user;
        navigate(location?.state?location.state:"/")
        // ✅ Firebase-এ displayName আপডেট করা
        updateProfile(user, { displayName: name , photoURL: image })
          .then(() => {
            console.log("Name updated:", name);
          })
          .catch((error) => {
            console.error("Error updating name:", error);
          });
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  const googlesignup = () => {
    googleauth()
      .then((res) => {
        const user = res.user;
        navigate(location?.state?location.state:"/")
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero mt-28 py-10">
      <div className="flex justify-center items-center gap-20 flex-col lg:flex-row">
        <img src={img} alt="" className="w-full h-[400px]" />
        <div className="card loginform border bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
          <h1 className="text-center font-bold text-4xl pt-10">Sign Up</h1>
          <form onSubmit={signupfield} className="card-body">
            <fieldset className="fieldset">
              <label className="text-lg font-semibold">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Your Name"
                required
              />
              <label className="text-lg font-semibold">Image URL</label>
              <p className="text-[#FF3811]">Go To ImageBB then upload you image get the link copy that past the image url input field !</p>
              <input
                type="text"
                name="image"
                className="input w-full"
                placeholder="Your Image URL"
                required
              />
              <label className="text-lg font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder="Email"
                required
              />
              <label className="text-lg font-semibold">Password</label>
              <input
                type="password"
                name="password"
                className="input w-full"
                placeholder="Password"
                required
              />
              <input
                className="btn shadow-md text-white bg-[#FF3811] border-none text-lg font-bold mt-4"
                type="submit"
                value="Sign Up"
              />
            </fieldset>
            <div>
              <h1 className="font-semibold text-base text-center mt-2">
                Or Sign Up with
              </h1>
              <div className="flex justify-center mt-3">
                <img
                  onClick={googlesignup}
                  src={google}
                  alt=""
                  className="bg-[#F5F5F8] w-12 h-12 rounded-full p-2 shadow-md"
                />
              </div>
            </div>
            <h1 className="font-semibold text-base mt-3">
              Already have an account? Please
              <Link to="/login">
                <span className="text-[#FF3811] hover:underline ml-3">
                  Login
                </span>
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
