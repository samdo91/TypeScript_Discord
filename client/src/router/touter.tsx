import { createBrowserRouter } from "react-router-dom";
import MainPage from "../comp/mainPage/mainPage";
import LoginPage from "../comp/loginPage/loginPage";
import SignupPage from "../comp/signupPage/signupPage";
import SignupSuccess from "../comp/signupPage/signupScreen/signupSuccess";
import ChannelsPage from "../comp/channelsPage/channelsPage";
import MePage from "../comp/channelsPage/mePage/mePage";

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
  {
    path: "/channels",
    element: <ChannelsPage />,
    children: [
      {
        path: "@me",
        element: <MePage />,
      },
    ],
  },
]);
