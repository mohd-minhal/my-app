import Contact from "./Pages/contact";
import Home from "./Pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="blogs" element={<Blogs />} />} */}
        <Route path="contact" element={<Contact />} />
        {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
