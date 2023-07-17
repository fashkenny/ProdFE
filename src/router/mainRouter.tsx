import { createBrowserRouter } from "react-router-dom"
import HomeScreen from "../pages/HomeScreen"
import SignIn from "../pages/signIn"
import Register from "../pages/Register"


export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomeScreen />
    },
    {
        path: "/sign-in",
        element: <SignIn />
    },
    {
        path: "/register",
        element: <Register />
    },
]) 