import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

import logo from "./Sources/logo.png";

function App() {
  // ! HOOKS
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // !CREDENCIALES
  const username = "lumino@mail.com";
  const password = "micontra123";

  // !FUNCIONES
  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001";
    // const API_KEY = "38b46775c56b.528d02f3101c89a5c099";

    if (characters.find((e) => e.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Ingresa un ID válido");
        }
      });
  };

  const random = () => {
    const id = Math.floor(Math.random() * 827) + 1;
    onSearch(id);
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const login = (userData, errors) => {
    if (
      userData.username === username &&
      userData.password === password &&
      errors.password !== ""
    ) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const logout = (event) => {
    setAccess(false);
    navigate("/");
  };

  return (
    <div id="container">
      {pathname !== "/" && (
        <Nav onSearch={onSearch} random={random} logout={logout} />
      )}
      {pathname === "/" && <img className="logo" src={logo} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
