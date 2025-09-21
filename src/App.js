import "./App.css";
import { Routes, Route } from "react-router-dom";
import GameLayout from "components/layout";
import appRoutes from "./routes/appRoutes";
import { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <GameLayout>
        <Suspense fallback={"loading ...."}>
          <Routes>
            {appRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
      </GameLayout>
    </div>
  );
}

export default App;
