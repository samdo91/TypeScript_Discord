import { createBrowserRouter } from "react-router-dom";
import MainPage from "../comp/mainPage/mainPage";
import LoginPage from "../comp/loginPage/loginPage";
import SignupPage from "../comp/signupPage/signupPage";
import SignupSuccess from "../comp/signupPage/signupScreen/signupSuccess";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/signupSucces",
    element: <SignupSuccess />,
  },
]);
