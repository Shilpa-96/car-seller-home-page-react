import React from "react";
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import { Routes, Route } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
export default function Layout() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Main ProductCard={ProductCard} />} />
        {/* <Route path="/page" element={<Main ProductCard={ProductCard} />} /> */}
        <Route path="/page/:id" element={<Main ProductCard={ProductCard} />} />
      </Routes>
      <Footer />
    </div>
  );
}
