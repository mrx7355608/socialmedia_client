import { RouterProvider, createBrowserRouter } from "react-router-dom"
// Pages
import Homepage from "./pages/Home/Homepage";
import Loginpage from "./pages/Login/Loginpage";
import SignupPage from "./pages/Signup/SignupPage";
// Context
import UserProvider from "./contexts/user";

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
    return (
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    )
}

export default App
