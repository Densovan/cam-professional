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
import Login from "./pages/login";
import { useLocation } from "@solidjs/router";
import NotFound from "./pages/404";
import Register from "./pages/register";
import Reset from "./pages/reset";

const App: Component = () => {
  const location = useLocation();
  return (
    <section>
      {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/reset" && <Navbar />}
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/reset" component={Reset} />
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
        <Route path="/*" component={NotFound} />
      </Routes>
      {location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/reset" && <Footer />}
    </section>
  );
};

export default App;
