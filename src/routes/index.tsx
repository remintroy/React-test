import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Qrcode from "../pages/QrcodeGenerator";
import Layout from "../layout";
import UrlShortner from "../pages/UrlShortner";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "qrcode",
        element: <Qrcode />,
      },
      {
        path: "url",
        element: <UrlShortner />,
      },
    ],
  },
]);

export default routes;
