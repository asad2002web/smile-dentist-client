import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../layout/MainLayout';
import { Home, NotFound} from "../pages";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import Register from "../pages/Register";






export const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path:"/login",
                element: <Login />
            },
            {
                path:"/register",
                element: <Register/>
            }
        ]
    }
]);