import { Component } from "solid-js";
import { A } from "@solidjs/router";
import { useCartContext } from "../../context/CartContext";
import NavActive from "./NavActive";

export type Nav = {
  title: string;
  link: string;
  isIcon: boolean;
  icon: any;
};

const Navbar: Component<{}> = () => {
  const { cartItems } = useCartContext();

  return (
    <div>
      <nav class=" bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <A href="/" class="flex items-center">
            <img class="md:w-24 w-24" src="/images/logo.png" alt="Solid logo" />
          </A>
          <div class="flex items-center md:order-2">
            <NavActive
              title="Order"
              link="/order"
              isIcon={true}
              icon={
                <svg
                  class="w-5 h-5 text-gray-600 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="M19 0H1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM2 6v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6H2Zm11 3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0h2a1 1 0 0 1 2 0v1Z" />
                </svg>
              }
            />
            <NavActive
              title="Favorites"
              link="/favorite"
              isIcon={true}
              icon={
                <svg
                  class="w-5 h-5 text-gray-600 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                </svg>
              }
            />

            <NavActive
              title="Cart"
              link="/cart"
              isIcon={true}
              icon={
                <div class="relative">
                  <svg
                    class="w-5 h-5 text-gray-600 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                  >
                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                  </svg>
                  <span class="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">
                    {cartItems.length}
                  </span>
                </div>
              }
            />
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-language"
          >
            <ul class="flex flex-col font-medium md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-3 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavActive title="Home" link="/" isIcon={false} icon={null} />
              </li>
              <li>
                <NavActive
                  title="Products"
                  link="/products"
                  isIcon={false}
                  icon={null}
                />
              </li>
              <li>
                <NavActive
                  title="About US"
                  link="/about-us"
                  isIcon={false}
                  icon={null}
                />
              </li>
              <li>
                <NavActive
                  title="News"
                  link="/news"
                  isIcon={false}
                  icon={null}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
