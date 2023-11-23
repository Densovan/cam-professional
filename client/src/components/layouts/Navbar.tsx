import { Component, createResource } from "solid-js";
import { A } from "@solidjs/router";
import { useCartContext } from "../../context/CartContext";
import NavActive from "./NavActive";
import { read } from "../../utils/theme";

export type Nav = {
  title: string;
  link: string;
  isIcon: boolean;
  icon: any;
};

const Navbar: Component<{}> = () => {
  const { cartItems } = useCartContext();
  const logo = read("logo");
  const name = read("name");
  
  return (
    <div>
      <nav class="bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100 ">
        <div class="max-w-screen-xl flex lg:flex-wrap  items-center justify-between mx-auto p-4 md:px-2 lg:px-24 xl:px-24 2xl:px-2">
          <A href="/" class="flex items-center">
            <img class="md:w-24 w-24" src={logo()} alt={name()} />
          </A>
          <div class="flex items-center md:order-2">
            <div class="hidden md:hidden lg:block">
              <NavActive
                title="Favorites"
                link="/favorite"
                isIcon={true}
                icon={
                  <svg
                    class="w-5 h-5 text-gray-600 dark:text-white "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                  </svg>
                }
              />
            </div>

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

            <div
              id="avatarButton"
              data-dropdown-toggle="dropdownInformation"
              data-dropdown-placement="bottom-start"
              class="relative overflow-hidden bg-gray-100 dark:bg-gray-600 w-8 h-8 rounded-full cursor-pointer ml-3"
            >
              <svg
                class="absolute w-9 h-9 text-gray-600 -left-1"
                fill="currentColor"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>

            <div
              id="dropdownInformation"
              class="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              {/* <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>Bonnie Green</div>
                <div class="font-medium truncate">name@flowbite.com</div>
              </div> */}
              <ul
                class="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownInformationButton"
              >
                <li>
                  <A
                    href="/login"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    My Account
                  </A>
                </li>

                <li>
                  <A
                    href="/order"
                    class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Orders
                  </A>
                </li>
              </ul>
              <div class="py-2">
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </a>
              </div>
            </div>
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
