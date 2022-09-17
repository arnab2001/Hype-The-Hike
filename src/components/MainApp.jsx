import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Login, Landing, Signup, Gallery, Whyus } from "./features";
import { Navbar, Footer } from "./component";
import JoinUs from "./features/landing/pages/JoinUs";

function MainApp() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="joinus" element={<JoinUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default MainApp;
