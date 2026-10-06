import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Home";
import AllJobs from "../pages/AllJobs";
import AddJob from "../pages/AddJob";
import MyTasks from "../pages/MyTasks";
import Login from "../pages/Login";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/allJobs",
        Component: AllJobs,
      },
      {
        path: "/addJob",
        Component: AddJob,
      },
      {
        path: "/mytasks",
        Component: MyTasks,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);

export default router;
