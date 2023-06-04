import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import UserDetails from "../Authentication/UserDetails/UserDetails";
import Home from "../Layout/Home/Home";
import Main from "../Layout/Main/Main";
import ManageOrder from "../Pages/ManageOrder/ManageOrder";
import Order from "../Pages/Order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/details",
        element: <UserDetails />,
      },
      {
        path: "/OrderSubmit/:id",
        element: <ManageOrder />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/order",
        element: <Order />,
      },
    ],
  },
]);
export default router;
