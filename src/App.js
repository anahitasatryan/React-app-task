import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Planet from "./pages/Planet";
import Astronomy from "./pages/Astronomy";
import Asteroids from "./pages/Asteroids";

function App() {
  return (
    <div>
      <Header />
      <main className="main-app">
        <Routes>
          <Route path="/" />
          <Route path="/home" element={<Home />} />
          <Route path="/asteroids" element={<Asteroids />} />
          <Route path="/astronomy" element={<Astronomy />} />
          <Route path="/planet" element={<Planet />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
