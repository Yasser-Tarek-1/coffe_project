import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import View from "./pages/View";
import ErrorPage from "./pages/ErrorPage";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import ContactMdl from "./pages/ContactMdl";

export const router = createBrowserRouter([
  {
    path: "/:menuId",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "view",
        element: <View />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
      {
        path: "contactus/done",
        element: <ContactMdl />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
]);
