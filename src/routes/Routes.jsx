import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../pages/RootLayout";
import Home from "./Home";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children:[
        {
            index:true,
            path:'/',
            Component:Home
        }
    ]
  },
]);

