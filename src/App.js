import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import GameLayout from "components/layout";
import Register from "pages/register";
import ThankYou from "pages/thankyou";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/register", element: <Register /> },
  { path: "/thankyou", element: <ThankYou /> },
  { path: "*", element: <NotFound /> },
];

function App() {
  return (
    <div className="App">
      <GameLayout>
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </GameLayout>
    </div>
  );
}

export default App;
