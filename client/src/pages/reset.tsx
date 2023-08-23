import { A } from "@solidjs/router";

const Reset = () => {
  return (
    <div
      class=" flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
      style="background-image:url('./../../public/images/angkor-rawpixel.jpg')"
    >
      <div class="w-full h-screen absolute bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5" />
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen w-full md:w-[40vw] lg:w-[30vw] xl:w-[36vw] 2xl:w-[27vw] lg:py-0">
        <A
          href="/"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            class="w-32 md:w-16 lg:w-16 xl:w-16 2xl:w-32 z-50"
            src="/images/logo.png"
            alt="logo"
          />
        </A>
        <div class="w-full pb-6 bg-white/60 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 rounded-2xl shadow-md dark:border md:mt-0 sm:max-w-xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl md:text-sm lg:text-sm xl:text-sm 2xl:text-xl text-center font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
              Reset your password!
            </h1>

            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required={true}
                />
              </div>
              {/* <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  New password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div>
              <div>
                <label
                  for="confirm-password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>

                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                />
              </div> */}

              <button
                type="submit"
                class="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
              >
                Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reset;
