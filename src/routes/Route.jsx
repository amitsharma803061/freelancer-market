import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../components/Home";
import AllJobs from "../pages/AllJobs";
import AddJob from "../pages/AddJob";
import MyTasks from "../pages/MyTasks";
import Login from "../pages/Login";
import Register from "../pages/Register";
import JobDetails from "../pages/JobDetails";

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
        path: "/all-Jobs",
        element: <AllJobs />,
        loader: () => fetch("http://localhost:3000/job"),
      },
      {
        path: "/add-Job",
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
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/job-details/:id",
        loader: ({ params }) => fetch(`http://localhost:3000/job/${params.id}`),
        Component: JobDetails,
        hydrateFallbackElement: <p>Loading...</p>,
      },
    ],
  },
]);

export default router;
