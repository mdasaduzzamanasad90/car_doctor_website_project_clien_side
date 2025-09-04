import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import ServicePage from "../Pages/ServicePage/ServicePage";
import ConfamOrder from "../Component/ConfamOrder";
import PrivateRouter from "./PrivateRouter";
import Shoping from "../Pages/Shoping/Shoping";
import Addservice from "../Component/Addservice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allservice",
        element: <ServicePage></ServicePage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/serviceDetails/:id",
        element: <PrivateRouter><ServiceDetails></ServiceDetails></PrivateRouter>,
        loader: ({params})=>fetch(`https://car-doctor-server-ue3r.onrender.com/services/${params.id}`)
      },
      {
        path: "/confamorder/:id",
        element: <ConfamOrder></ConfamOrder>,
        loader: ({params})=>fetch(`https://car-doctor-server-ue3r.onrender.com/services/${params.id}`)
      },
      {
        path: "/shoping",
        element: <Shoping></Shoping>
      },
      {
        path: "/addservice",
        element: <Addservice></Addservice>
      }
    ],
  },
]);

export default router;
