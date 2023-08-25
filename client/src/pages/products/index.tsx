import { Component, For, createResource } from "solid-js";
import Cards from "../../components/cards/Cards";
import { A } from "@solidjs/router";

const Products: Component<{}> = () => {
  const fetchData = async () => {
    const res = await fetch("https://cptdb.koompi.com/CoreProducts");
    return res.json();
  };
  const [coreProducts] = createResource(fetchData);

  return (
    <div class="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-2 lg:px-24 xl:px-24 2xl:px-2">
      <div>
        <Banner />
      </div>

      <div
        id="drawer-right-example"
        class="fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full bg-white w-80 dark:bg-gray-800"
        tabindex="-1"
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <svg
            class="w-4 h-4 mr-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          Filters
        </h5>
        <button
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            class="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span class="sr-only">Close menu</span>
        </button>

        <div>
          <form class="mt-4 border-t border-gray-200">
            <h3 class="sr-only">Categories</h3>
            <ul
              role="list"
              class="space-y-4 px-4 py-3 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
            >
              <li>
                <A href="#">Equipment</A>
              </li>
              <li>
                <A href="#">Ink Cartridge</A>
              </li>
              <li>
                <A href="#">CAM-TONER CARTRIDGE</A>
              </li>
              <li>
                <A href="#">Printer</A>
              </li>
              <li>
                <A href="#">Bill Counter</A>
              </li>
              <li>
                <A href="#">IT Services</A>
              </li>
              <li>
                <A href="#">Ribbon</A>
              </li>
              <li>
                <A href="#">Accessories</A>
              </li>
            </ul>

            <div class="border-t border-gray-200 px-4 py-6">
              <h3 class="-mx-2 -my-3 flow-root">
                <button
                  type="button"
                  class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500"
                  aria-controls="filter-section-mobile-1"
                  aria-expanded="false"
                >
                  <span class="font-medium text-gray-900">Category</span>
                  <span class="ml-6 flex items-center">
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                    <svg
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </button>
              </h3>
              <div class="pt-6" id="filter-section-mobile-1">
                <div class="space-y-4">
                  <div class="flex items-center">
                    <input
                      id="filter-category-0"
                      name="category[]"
                      value="new-arrivals"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                    />
                    <label
                      for="filter-category-0"
                      class="ml-3 text-sm text-gray-600"
                    >
                      RIBBON
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="filter-category-1"
                      name="category[]"
                      value="sale"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                    />
                    <label
                      for="filter-category-1"
                      class="ml-3 text-sm text-gray-600"
                    >
                      EVOLIS
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="filter-category-2"
                      name="category[]"
                      value="travel"
                      type="checkbox"
                      checked
                      class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                    />
                    <label
                      for="filter-category-2"
                      class="ml-3 text-sm text-gray-600"
                    >
                      FUJIFILM
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="filter-category-3"
                      name="category[]"
                      value="organization"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                    />
                    <label
                      for="filter-category-3"
                      class="ml-3 text-sm text-gray-600"
                    >
                      HP
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="filter-category-4"
                      name="category[]"
                      value="accessories"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                    />
                    <label
                      for="filter-category-4"
                      class="ml-3 text-sm text-gray-600"
                    >
                      DELL
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="filter-category-4"
                      name="category[]"
                      value="accessories"
                      type="checkbox"
                      class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                    />
                    <label
                      for="filter-category-4"
                      class="ml-3 text-sm text-gray-600"
                    >
                      SONY
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">
        <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
          <h1 class="text-lg md:text-md lg:text-xl xl:text-xl 2xl:text-4xl font-bold tracking-tight text-gray-900">
            Products
          </h1>

          <div class="flex items-center space-x-3">
            <div class="relative inline-block text-left">
              <div>
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                  type="button"
                >
                  Sort
                  <svg
                    class="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div
                id="dropdown"
                class="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <A
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Most Popular
                    </A>
                  </li>
                  <li>
                    <A
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Best Rating
                    </A>
                  </li>
                  <li>
                    <A
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Newest
                    </A>
                  </li>
                  <li>
                    <A
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Low to High
                    </A>
                  </li>
                  <li>
                    <A
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      High to Low
                    </A>
                  </li>
                </ul>
              </div>
            </div>
            <button
              class="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
              type="button"
              data-drawer-target="drawer-right-example"
              data-drawer-show="drawer-right-example"
              data-drawer-placement="right"
              aria-controls="drawer-right-example"
            >
              <svg
                class="w-4 h-4 text-gray-600 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18"
              >
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" class="pb-24 pt-6">
          <h2 id="products-heading" class="sr-only">
            Products
          </h2>

          <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <form class="hidden lg:block">
              <h3 class="sr-only">Categories</h3>
              <ul
                role="list"
                class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
              >
                <li>
                  <A href="#">Equipment</A>
                </li>
                <li>
                  <A href="#">Ink Cartridge</A>
                </li>
                <li>
                  <A href="#">CAM-TONER CARTRIDGE</A>
                </li>
                <li>
                  <A href="#">Printer</A>
                </li>
                <li>
                  <A href="#">Bill Counter</A>
                </li>
                <li>
                  <A href="#">IT Services</A>
                </li>
                <li>
                  <A href="#">Ribbon</A>
                </li>
                <li>
                  <A href="#">Accessories</A>
                </li>
              </ul>
              <div class="border-b border-gray-200 py-6">
                <h3 class="-my-3 flow-root">
                  <button
                    type="button"
                    class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-1"
                    aria-expanded="false"
                  >
                    <span class="font-medium text-gray-900">Branding</span>
                  </button>
                </h3>

                {/*--------------- filters branding ---------------  */}

                <div class="pt-6" id="filter-section-1">
                  <div class="space-y-4">
                    <div class="flex items-center">
                      <input
                        id="filter-category-0"
                        name="category[]"
                        value="new-arrivals"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-category-0"
                        class="ml-3 text-sm text-gray-600"
                      >
                        RIBBON
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-category-1"
                        name="category[]"
                        value="sale"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-category-1"
                        class="ml-3 text-sm text-gray-600"
                      >
                        EVOLIS
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-category-2"
                        name="category[]"
                        value="travel"
                        type="checkbox"
                        checked
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-category-2"
                        class="ml-3 text-sm text-gray-600"
                      >
                        FUJIFILM
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-category-3"
                        name="category[]"
                        value="organization"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-category-3"
                        class="ml-3 text-sm text-gray-600"
                      >
                        HP
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-category-4"
                        name="category[]"
                        value="accessories"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-category-4"
                        class="ml-3 text-sm text-gray-600"
                      >
                        DELL
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="filter-category-4"
                        name="category[]"
                        value="accessories"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary/90"
                      />
                      <label
                        for="filter-category-4"
                        class="ml-3 text-sm text-gray-600"
                      >
                        SONY
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div class="lg:col-span-3">
              <div class="grid md:grid-cols-3 gap-4 mt-4">
                <For each={coreProducts()}>
                  {(res) => {
                    return <Cards product={res} />;
                  }}
                </For>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;

export const Banner: Component = () => {
  return (
    <div class="container mx-auto pt-0 md:pt-12 px-4 md:px-0 ">
      <div class="hidden md:flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-4">
        <div class="rounded-2xl flex flex-col md:flex-row items-strech justify-between bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
          <div class="flex flex-col justify-center md:w-1/2">
            <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
              Best Deal
            </h1>
            <p class="text-base lg:text-xl text-gray-800 dark:text-white mt-2">
              Save upto <span class="font-bold">50%</span>
            </p>
          </div>
          <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
            <img src="/products/product-2.png" alt="" class="w-1/2" />
          </div>
        </div>
        <div class="rounded-2xl md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 dark:bg-gray-800 py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center ">
          <div class="flex flex-col justify-center">
            <h1 class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white">
              RIBBON
            </h1>
            <p class="text-base lg:text-xl text-gray-800 dark:text-white">
              Save Upto <span class="font-bold">30%</span>
            </p>
          </div>
          <div class="flex justify-end lg:bottom-0 lg:right-0">
            <img src="/products/product-2.png" alt="" class="w-1/2" />
          </div>
        </div>
      </div>
      <div class="block md:hidden relative -z-50">
        <div id="default-carousel" class="w-full" data-carousel="slide">
          <div class="relative h-[180px] overflow-hidden rounded-lg">
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/thumbnails/thumbnail-1.png"
                alt=""
                class="w-full object-contain"
              />
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/thumbnails/thumbnail-2.png"
                alt=""
                class="w-full object-contain"
              />
            </div>

            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/thumbnails/thumbnail-3.png"
                alt=""
                class="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
