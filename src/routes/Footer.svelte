<script>
  import { Select, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownSolid } from "flowbite-svelte-icons";
  import svg_US from "$lib/images/svg-US.svg";
</script>

<footer>
  <div class="flex flex-row px-10">
    <div class="basis-3/12">
      <p class="text-3xl font-semibold px-10">FOCUSING ON WHAT YOU DO BEST.</p>
      <div class="flex px-10 mt-5">
        <button
          id="states-button"
          class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-lg font-medium text-center text-white border-gray-300 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
          type="button"
        >
          <img src={svg_US} class="h-6 mr-3" />
          English, USA
          <ChevronDownSolid class="w-3 h-3 ml-2" />
        </button>
      </div>
    </div>
    <div class="basis-2/12 mt-5">
      <p class="text-2xl font-semibold">MARKETPLACE</p>
      <p class="text-lg text-white py-2">BECOMING A FREELANCER</p>
      <p class="text-lg text-white py-2">HIRING A DEVELOPER</p>
      <p class="text-lg text-white py-2">CREATING YOUR PROFILE</p>
      <p class="text-lg text-white py-2">JOB CATALOG</p>
    </div>
    <div class="basis-2/12 mt-5">
      <p class="text-2xl font-semibold">RESOURCES</p>
      <p class="text-lg text-white py-2">COMMUNITY BLOG</p>
      <p class="text-lg text-white py-2">DISCORD SERVER</p>
      <p class="text-lg text-white py-2">DEVPRO REVIEWS</p>
      <p class="text-lg text-white py-2">HELP AND SUPPORT</p>
    </div>
    <div class="basis-2/12 mt-5">
      <p class="text-2xl font-semibold">COMPANY</p>
      <p class="text-lg text-white py-2">ABOUT US</p>
      <p class="text-lg text-white py-2">FAQ</p>
      <p class="text-lg text-white py-2">CAREERS</p>
      <p class="text-lg text-white py-2">CONTACT US</p>
      <p class="text-lg text-white py-2">OUR POLICY & LICENSES</p>
    </div>
    <div class="basis-3/12 mt-5">
      <p class="text-2xl font-semibold">STAY UPDATED</p>
      <p class="text-lg text-white py-2">
        RECEIVE THE LATEST NEWS, STRAIGHT TO YOUR INBOX
      </p>
      <p class="text-md font-medium text-neutral-400 py-1">
        BY ADDING YOUR EMAIL, YOU ARE AGREEING TO OUR TERMS AND CONDITIONS
      </p>
      <input
        type="email"
        id="email"
        placeholder="Enter your email"
        class="bg-white border border-gray-300 text-lg text-gray-900 md:w-64 mb-1 md:mb-0 md:mr-4 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1.5 pl-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        required
      />
    </div>
  </div>
</footer>

<style>
  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
