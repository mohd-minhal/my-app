import Home from "./Pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import New from "./Pages/new";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<New />} />
        <Route
          path="*"
          element={
            <div className="grid h-screen place-items-center bg-black text-[#c3c3c6] font-fredoka-300 text-2xl md:text-5xl sm:text-3xl">
              404 - Page Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
