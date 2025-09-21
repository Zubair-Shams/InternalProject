import Brands from "pages/brands";
import Offer from "pages/offer";
import { lazy } from "react";

// Lazy imports
const Home = lazy(() => import("pages/Home"));
const About = lazy(() => import("pages/About"));
const NotFound = lazy(() => import("pages/NotFound"));
const Register = lazy(() => import("pages/register"));
const ThankYou = lazy(() => import("pages/thankyou"));

const appRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/register", element: <Register /> },
  { path: "/thankyou", element: <ThankYou /> },
  { path: "/offer", element: <Offer /> },
  { path: "/brands", element: <Brands /> },
  { path: "*", element: <NotFound /> },
];

export default appRoutes;
