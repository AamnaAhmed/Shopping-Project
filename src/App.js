import logo from './logo.svg';
import './App.css';
// import {Routes,Route} from "react-router-dom";
import Home from "./components/Home"
import { router } from "./react-router/router";
import { RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar"
// import Shop from "./components/Shop"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <RouterProvider router={router}>
      <Navbar/>
        <Home />
      </RouterProvider>
    </>
  );
}

export default App;
