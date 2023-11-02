<template>
  <body class="bg-white dark:bg-gray-900">
    <header class="">
      <nav
        class="absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent"
      >
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div
            class="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4"
          >
            <div
              class="relative z-20 flex w-full justify-between md:px-0 lg:w-max"
            >
              <a
                href="/#home"
                aria-label="logo"
                class="flex items-center space-x-1 text-white fill-white"
              >
                <div aria-hidden="true" class="flex space-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.0"
                    class="w-7 h-7"
                    viewBox="0 0 128.000000 128.000000"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <g
                      transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                      stroke="none"
                    >
                      <path
                        d="M503 1196 c-70 -17 -167 -66 -223 -113 -220 -182 -275 -498 -128 -740 92 -152 262 -257 434 -270 64 -5 73 -4 82 14 19 34 -10 63 -63 63 -62 0 -162 34 -231 78 -142 92 -224 242 -224 412 0 136 47 249 144 346 97 97 210 144 346 144 136 0 249 -47 346 -144 87 -87 144 -210 144 -312 0 -52 29 -80 63 -62 18 9 19 18 14 82 -17 230 -192 439 -417 498 -77 20 -213 22 -287 4z"
                      />
                      <path
                        d="M562 934 c-111 -30 -190 -112 -219 -229 -15 -60 -15 -70 0 -130 20 -79 63 -144 120 -183 56 -38 75 -44 98 -32 30 17 23 47 -18 74 -78 52 -108 91 -124 165 -32 152 110 294 262 262 74 -16 113 -46 165 -123 27 -42 57 -49 74 -19 12 23 6 42 -32 98 -37 55 -102 99 -174 118 -70 18 -83 18 -152 -1z"
                      />
                      <path
                        d="M660 620 c-11 -11 -20 -26 -20 -32 0 -26 143 -444 158 -460 18 -21 65 -24 79 -6 6 7 23 51 38 97 15 46 35 91 44 100 9 9 54 29 101 45 47 16 91 33 98 39 18 14 15 61 -5 79 -17 15 -435 158 -461 158 -6 0 -21 -9 -32 -20z"
                      />
                    </g>
                  </svg>
                  <div class="h-6 w-2 bg-primary"></div>
                </div>
                <span class="text-2xl font-bold text-gray-900 dark:text-white"
                  >Markly</span
                >
              </a>

              <div class="relative flex max-h-10 items-center lg:hidden">
                <button
                  aria-label="humburger"
                  id="hamburger"
                  class="relative -mr-6 p-6"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    class="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    class="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300"
                  ></div>
                </button>
              </div>
            </div>
            <div
              id="navLayer"
              aria-hidden="true"
              class="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden"
            ></div>
            <div
              id="navlinks"
              class="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none"
            ></div>
          </div>
        </div>
      </nav>
    </header>

    <main class="space-y-40 mb-40">
      <div class="relative" id="home">
        <div
          aria-hidden="true"
          class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div
            class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"
          ></div>
          <div
            class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"
          ></div>
        </div>
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div class="relative pt-36 ml-auto">
            <div class="lg:w-2/3 text-center mx-auto">
              <h1
                class="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl"
              >
                Interactive images for your website
              </h1>
              <div class="text-primary text-white text-3xl py-5">
                No coding required
              </div>
              <p class="mt-8 text-gray-700 dark:text-gray-300">
                Build your interactive experience in minutes. Integrate directly
                on your website. All with no coding.
              </p>
              <div class="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
                <!-- <router-link
                  to="/login"
                  class="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span class="relative text-base font-semibold text-white"
                    >Get started</span
                  >
                </router-link> -->
                <div
                  @click="githubLogin"
                  href="#"
                  class="relative flex h-11 w-full items-center justify-center px-6 inset-0 rounded-full border border-transparent bg-primary/10 bg-gradient-to-b transition duration-300 hover:scale-105 active:duration-75 active:scale-95 dark:border-gray-700 dark:bg-gray-800 sm:w-max cursor-pointer"
                >
                  <svg
                    class="w-4 h-4 mr-2 -ml-1 text-primary dark:text-white fill-white"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="github"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 496 512"
                  >
                    <path
                      fill="currentColor"
                      d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                    ></path>
                  </svg>
                  <span
                    class="relative text-base font-semibold text-primary dark:text-white"
                    >Continue with Github</span
                  >
                </div>
                <a
                  href="#"
                  @click="googleLogin"
                  class="relative flex h-11 w-full items-center justify-center px-6 absolute inset-0 rounded-full border border-transparent bg-primary/10 bg-gradient-to-b transition duration-300 hover:scale-105 active:duration-75 active:scale-95 dark:border-gray-700 dark:bg-gray-800 sm:w-max cursor-pointer"
                >
                  <svg
                    class="w-4 h-4 mr-2 -ml-1 text-primary dark:text-white fill-white"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  <span
                    class="relative text-base font-semibold text-primary dark:text-white"
                    >Continue with Google</span
                  >
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="solution">
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div
            class="space-y-6 justify-between text-gray-600 md:flex flex-row md:gap-6 md:space-y-0 lg:gap-12 lg:items-center"
          >
            <div class="md:5/12 lg:w-1/2 h-[500px]">
              <iframe
                class="w-full h-full"
                src="https://markly-demo.netlify.app/interactive-images/648bf4ea7c1b380359a3"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="md:7/12 lg:w-1/2">
              <h2
                class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white"
              >
                Save time and money
              </h2>
              <p class="my-8 text-gray-600 dark:text-gray-300 text-lg">
                No need for designers and developers: use the Interactive editor
                to build the interactive experience for your website. Integrate
                on your website in seconds.
              </p>
              <div
                class="divide-y space-y-4 divide-gray-100 dark:divide-gray-800"
              >
                <div class="mt-8 flex gap-4 md:items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                      fill="#1EBD53"
                    />
                    <path
                      d="M14.125 7.75L8.62497 13L5.875 10.375"
                      stroke="#1EBD53"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                      stroke="#1EBD53"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="w-5/6">
                    <h3
                      class="font-semibold text-lg text-gray-700 dark:text-indigo-300"
                    >
                      Intuitive editor
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400">
                      use the simple but powerful Interactive editor to build
                      your interactive experience.
                    </p>
                  </div>
                </div>
                <div class="pt-4 flex gap-4 md:items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                      fill="#1EBD53"
                    />
                    <path
                      d="M14.125 7.75L8.62497 13L5.875 10.375"
                      stroke="#1EBD53"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                      stroke="#1EBD53"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="w-5/6">
                    <h3
                      class="font-semibold text-lg text-gray-700 dark:text-teal-300"
                    >
                      No coding
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400">
                      no coding is required to build, update and integrate your
                      Interactive images. We handle all the complicated stuff.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 mt-36">
          <div
            class="space-y-6 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center"
          >
            <div class="md:5/12 lg:w-1/2 h-[500px]">
              <iframe
                class="w-full h-full"
                src="https://markly-demo.netlify.app/interactive-images/648bf4ee0860eb238a03"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="md:7/12 lg:w-1/2">
              <h2
                class="text-3xl font-bold text-gray-900 md:text-4xl dark:text-white"
              >
                Increase conversions
              </h2>
              <p class="my-8 text-gray-600 dark:text-gray-300 text-lg">
                nteractive content can increase conversions by up to 100%.
                Markly helps you capture this lost revenue.
              </p>
              <div
                class="divide-y space-y-4 divide-gray-100 dark:divide-gray-800"
              >
                <div class="mt-8 flex gap-4 md:items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                      fill="#1EBD53"
                    />
                    <path
                      d="M14.125 7.75L8.62497 13L5.875 10.375"
                      stroke="#1EBD53"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                      stroke="#1EBD53"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="w-5/6">
                    <h3
                      class="font-semibold text-lg text-gray-700 dark:text-indigo-300"
                    >
                      Increase revenue
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400">
                      Increase your revenue and conversions with interactive
                      content
                    </p>
                  </div>
                </div>
                <div class="pt-4 flex gap-4 md:items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                      fill="#1EBD53"
                    />
                    <path
                      d="M14.125 7.75L8.62497 13L5.875 10.375"
                      stroke="#1EBD53"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                      stroke="#1EBD53"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="w-5/6">
                    <h3
                      class="font-semibold text-lg text-gray-700 dark:text-teal-300"
                    >
                      Improve branding
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400">
                      Improve your brand image by providing users with
                      high-quality content
                    </p>
                  </div>
                </div>
                <div class="pt-4 flex gap-4 md:items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      opacity="0.2"
                      d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                      fill="#1EBD53"
                    />
                    <path
                      d="M14.125 7.75L8.62497 13L5.875 10.375"
                      stroke="#1EBD53"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
                      stroke="#1EBD53"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="w-5/6">
                    <h3
                      class="font-semibold text-lg text-gray-700 dark:text-teal-300"
                    >
                      Improve satisfaction
                    </h3>
                    <p class="text-gray-500 dark:text-gray-400">
                      Make your customers happier by providing them with an easy
                      way to explore your content
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="relative py-16">
        <div
          aria-hidden="true"
          class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div
            class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"
          ></div>
          <div
            class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"
          ></div>
        </div>
        <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div class="relative">
            <div class="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
              <h1
                class="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl"
              >
                Get Started now
              </h1>
              <p class="text-center text-xl text-gray-600 dark:text-gray-300">
                Be part of interactivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="py-20 md:py-5">
      <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div class="m-auto w-full">
          <div
            class="flex flex-wrap items-center justify-between md:flex-nowrap"
          >
            <div class="m-auto mt-16 w-full">
              <span class="block text-gray-500 dark:text-gray-400"
                >We change the way Images are used.</span
              >

              <span class="block text-gray-500 dark:text-gray-400"
                >Markly © 2023 <span id="year"></span
              ></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </body>
</template>
<script>
import { useUserStore } from "../stores/userStore";
import { mapActions } from "pinia";

export default {
  name: "LoginView",
  methods: {
    ...mapActions(useUserStore, ["githubLogin", "googleLogin"]),
  },
};
</script>
