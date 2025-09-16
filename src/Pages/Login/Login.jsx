import img from "../../assets/assets/images/login/login.svg";
import google from "../../assets/assets/icons/googleimageicon.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Authcontex } from "../../Provider/AuthProvider";
// import axios from "axios";

const Login = () => {
  const { login, googleauth } = useContext(Authcontex);
  const navigate = useNavigate();
  const location = useLocation();
  const loginfield = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password);
    login(email, password)
      .then(() => {
        // const user = res.user;
        navigate(location?.state ? location.state : "/");
        //   // user jekhane jete chacsilo login korar por sei state or sei jaigai jabe

        //  axios.post('https://car-doctor-server-ue3r.onrender.com/jwt',{ email: user.email },{withCredentials:true})
        //  .then(res=>{
        //   // console.log(res.data)
        //   if(res.data.success){
        //     navigate(location?.state?location.state:"/")
        //   }
        //  })

        // navigate(location?.state?location.state:"/")
        // console.log(navigate(location?.state?location.state:"/"))
        // console.log(user);
      })
      .catch((error) => console.log(error));
  };
  // google login
  const googlelogin = () => {
    googleauth()
      .then((res) => {
        const user = res.user;
        navigate(location?.state ? location.state : "/");
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero mt-28 py-10">
      <div className="flex justify-center items-center gap-20 flex-col lg:flex-row">
        <img src={img} alt="" className="w-full h-[400px]" />
        <div className="card loginform border bg-base-100 w-full max-w-sm shrink-0 shadow-xl">
          <h1 className="text-center font-bold text-4xl pt-10">Login</h1>
          <form onSubmit={loginfield} className="card-body">
            <fieldset className="fieldset">
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
                value="Login"
              />
            </fieldset>
            <div>
              <h1 className="font-semibold text-base text-center mt-2">
                Or Sign In with
              </h1>
              <div className="flex justify-center mt-3">
                <img
                  onClick={googlelogin}
                  src={google}
                  alt=""
                  className="bg-[#F5F5F8] w-12 h-12 rounded-full p-2 shadow-md"
                />
              </div>
            </div>
            <h1 className="font-semibold text-base mt-3">
              Don't Have an account? Please
              <Link to="/signup">
                <span className="text-[#FF3811] hover:underline ml-3">
                  Sign Up
                </span>
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
