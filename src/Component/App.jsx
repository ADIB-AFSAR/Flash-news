import React  from "react";
import { Routes,Route } from "react-router-dom";
import Home from "../pages/home";
import Category from "../pages/category";
import NotFound from "./NotFound";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ScrollButtons from "./ScrollBtn";


export default function App() {
 return (
   <div>
   <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/category/:slug" element={<Category/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
        <ScrollButtons/>
    </div>
  )
}
