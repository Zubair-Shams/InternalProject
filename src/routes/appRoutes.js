import { lazy } from "react";

// Lazy imports
const Home = lazy(() => import("pages/Home"));
const About = lazy(() => import("pages/About"));
const Offer = lazy(() => import("pages/offer"));
const Brands = lazy(() => import("pages/brands"));
const NotFound = lazy(() => import("pages/NotFound"));
const Register = lazy(() => import("pages/register"));
const ThankYou = lazy(() => import("pages/thankyou"));
const WinDiscountOffer = lazy(() => import("pages/spinWinDiscountOffer"));
const SpinWheel = lazy(() => import("pages/SpinWheelBrandSelector"));

const appRoutes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/register", element: <Register /> },
  { path: "/thankyou", element: <ThankYou /> },
  { path: "/offer", element: <Offer /> },
  { path: "/brands", element: <Brands /> },
  { path: "/winDiscountOffer", element: <WinDiscountOffer /> },
  { path: "/spinwheel", element: <SpinWheel /> },
  { path: "*", element: <NotFound /> },
];

export default appRoutes;
