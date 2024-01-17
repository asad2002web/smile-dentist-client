import { Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from './../layout/MainLayout';
import { About, Home, Login, NotFound, Register} from "../pages";


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
                path: "/about",
                element: <About />
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