import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import SelectType from "./pages/SelectType";
import Users from "./pages/Users";
import Ongs from "./pages/Ongs";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin" element={<SelectType />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/ongs" element={<Ongs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
