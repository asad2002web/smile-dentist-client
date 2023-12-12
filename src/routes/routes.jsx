import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../layout/MainLayout';
import { Home, NotFound } from "../pages";



export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ]
    }
]);