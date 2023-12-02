import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import HomeScreen from "../pages/HomeScreen";
// import Sign_in from "../pages/Sign_in";
import Register from "../auth/Register";
import FreemoDashboard from "../pages/FreemoDashboard";
import UpgradeFirstPage from "../pages/UpgradeFirstPage";
import BromoDashboard from "../pages/BromoDashboard";
import UpgradeSecondPage from "../pages/UpgradeSecondPage";
import PremoDashboard from "../pages/PremoDashboard";
import LoginTwo from "../auth/LoginTwo";
import Register2 from "../auth/Register2";
import Login3 from "../auth/Login3";
import Register3 from "../auth/Register3";
// import PrivateRoute from "./PrivateRoute";
import Login from "../auth/Login";
export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/login2",
    element: <LoginTwo />,
  },
  {
    path: "/register2",
    element: <Register2 />,
  },
  {
    path: "/register3",
    element: <Register3 />,
  },
  {
    path: "/login3",
    element: <Login3 />,
  },
  {
    path: "/freemodashboard",
    element: <FreemoDashboard />,
  },
  {
    path: "/upgradefirstpage",
    element: <UpgradeFirstPage />,
  },
  {
    path: "/bromodashboard",
    element: <BromoDashboard />,
  },
  {
    path: "/upgradesecondpage",
    element: <UpgradeSecondPage />,
  },
  {
    path: "/premodashboard",
    element: <PremoDashboard />,
  },
]);
