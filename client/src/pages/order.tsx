const Order = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <img alt="comming soon" src="./images/soon.png" />
          <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Coming Soon
          </p>
          <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            You'll find lots to explore on the home page.{" "}
          </p>
          <a
            href="/"
            class="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-900 my-4"
          >
            Back to Homepage
          </a>
        </div>
      </div>
    </section>
  );
};

export default Order;
