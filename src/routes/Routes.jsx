import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../pages/RootLayout";
import Home from "../pages/Home";
import AboutPage from "../pages/AboutMe";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
        {
            index:true,
            path:'/',
            Component:Home
        },
        {
          path:'aboutme',
          Component:AboutPage
        }
    ]
  },
]);

