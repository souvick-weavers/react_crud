import { createBrowserRouter } from "react-router";
import FrontLayout from "../component/layout/FrontLayout";
import Home from "../component/pages/home/Home";
import User from "../component/pages/user/User";

const router = createBrowserRouter([
  //==============USER  ROUTER================//
  {
    path: "/",
    Component: FrontLayout,
    children: [
      { index: true, Component: Home },
      { path: "user", Component: User },
    ],
  },
]);

export default router;
