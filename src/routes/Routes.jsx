import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutMe";
import ProjectDetails from "../pages/ProjectDescription";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
        {
            index:true,
            path:'/',
            Component:Home,
            loader:()=>fetch('/projects.json')
        },
        {
          path:'aboutme',
          Component:AboutPage
        },
        {
          path:'projects/:id',
          Component:ProjectDetails,
          loader:()=>fetch('/projects.json')
        }
    ]
  },
]);

