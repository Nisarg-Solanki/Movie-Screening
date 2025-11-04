import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import SignUpUI from "./components/SignUpUI";
import SignInUI from "./components/SignInUI";
import Home from "./components/Home";
import FavouritesUI from "./components/FavouritesUI";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpUI />} />
        <Route path="/signinui" element={<SignInUI />} />
        <Route path="/signinui/home" element={<Home />} />
        <Route path="/signinui/home/favourite" element={<FavouritesUI />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
