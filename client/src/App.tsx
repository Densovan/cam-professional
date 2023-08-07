import "flowbite";
import type { Component } from "solid-js";
import { Route, Routes } from "@solidjs/router";
import Navbar from "./components/layouts/Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Footer from "./components/layouts/Footer";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import ProductDetail from "./pages/products/details";
import Products from "./pages/products/index";
import News from "./pages/news";
import SinglePageNews from "./pages/news/singlePage";
import Favorite from "./pages/favorite";
import Order from "./pages/order";

const App: Component = () => {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/about-us" component={About} />
        <Route path="/contact-us" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/products">
          <Route path="" component={Products} />
          <Route path="/:id" component={ProductDetail} />
        </Route>
        <Route path="/news" component={News} />
        <Route path="/news/:id?" component={SinglePageNews} />
        <Route path="/favorite" component={Favorite} />
        <Route path="/order" component={Order} />
      </Routes>
      <Footer />
    </section>
  );
};

export default App;
