import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Homepage from "./pages/Home/Homepage";
import Loginpage from "./pages/Login/Loginpage";
import SignupPage from "./pages/Signup/SignupPage";

const router = createBrowserRouter([
    {
        element: <Homepage/>,
        path: "/"
    },
    {
        element: <Loginpage />,
        path: "/login"
    },
    {
        element: <SignupPage />,
        path: "/signup"
    }
]);

function App() {
    return <RouterProvider router={router} />
}

export default App
