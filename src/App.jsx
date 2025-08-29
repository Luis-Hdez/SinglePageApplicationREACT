import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Navbar } from "./components/Navbar";
import { HomeView } from "./views/HomeView";
import { RegisterView } from "./views/RegisterView";
import { MusicView } from "./views/MusicView";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          {/* Barra de navegación */}
          <Navbar />

          {/* Definimos las rutas */}
        </div>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/music" element={<MusicView />} />
          <Route path="/register" element={<RegisterView />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
