<script>
  import bg_banner from "$lib/images/bg-search.png";

  import bg_1 from "$lib/images/message/bg-1.svg";
  import bg_2 from "$lib/images/message/bg-2.svg";
  import bg_3 from "$lib/images/message/bg-3.svg";

  import { Img, Button, Search } from "flowbite-svelte";
  import { Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownSolid } from "flowbite-svelte-icons";
  import { MicrophoneSolid, SearchOutline } from "flowbite-svelte-icons";

  // import { page } from "$app/stores";
  import { Pagination } from "flowbite-svelte";
  import {
    ChevronLeftOutline,
    ChevronRightOutline,
  } from "flowbite-svelte-icons";
  import Product from "./product.svelte";

  // $: activeUrl = $page.url.searchParams.get("page");
  let pages = [
    { name: 1, href: "/components/pagination?page=6" },
    { name: 2, href: "/components/pagination?page=7" },
    { name: 3, href: "/components/pagination?page=8" },
    { name: 4, href: "/components/pagination?page=9" },
    { name: 5, href: "/components/pagination?page=10" },
  ];

  $: {
    pages.forEach((page) => {
      let splitUrl = page.href.split("?");
      let queryString = splitUrl.slice(1).join("?");
      const hrefParams = new URLSearchParams(queryString);
      let hrefValue = hrefParams.get("page");
      // if (hrefValue === activeUrl) {
      //   page.active = true;
      // } else {
      //   page.active = false;
      // }
    });
    pages = pages;
  }

  const previous = () => {
    alert("Previous btn clicked. Make a call to your server to fetch data.");
  };
  const next = () => {
    alert("Next btn clicked. Make a call to your server to fetch data.");
  };

  //

  let searchText = "UI Artist";
  function handleVoiceBtn() {
    alert("You clicked voice button");
  }
</script>

<svelte:head>
  <title>Search</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div class="pb-16 flex flex-col justify-center align-middle">
    <div class="flex flex-row justify-center">
      <Img src={bg_banner} class="w-full " alt="sample 1" />
    </div>

    <div class="p-4 flex flex-row justify-center mt-6 w-full">
      <form class="flex gap-2 w-full">
        <Search
          size="lg"
          class="flex  items-center"
          placeholder="Search Freelancers.."
        >
          <button type="button" on:click={handleVoiceBtn} class="outline-none">
            <MicrophoneSolid class="w-4 h-4 mr-2" />
          </button>
        </Search>
        <Button size="sm" class="!bg-primary-1 text-lg">
          <SearchOutline class="w-5 h-5 mr-2 -ml-1" />
          Search
        </Button>
      </form>
    </div>

    <p class="text-2xl font-semibold ml-4">Search for "{searchText}"</p>

    <div class="grid grid-cols-4 max-w-xl my-3 mb-6">
      <div>
        <Button class="bg-primary-1  text-lg"
          >Category<ChevronDownSolid
            class="w-3 h-3 ml-2 text-white  dark:text-white"
          /></Button
        >
        <Dropdown>
          <DropdownItem>UX/UI designer</DropdownItem>
          <DropdownItem>Web Developement</DropdownItem>
          <DropdownItem>Mobile Development</DropdownItem>
          <DropdownItem>Roblox Development</DropdownItem>
        </Dropdown>
      </div>
      <div>
        <Button class="bg-primary-1 text-lg"
          >Pricing<ChevronDownSolid
            class="w-3 h-3 ml-2 text-white dark:text-white"
          /></Button
        >
        <Dropdown>
          <DropdownItem>UX/UI designer</DropdownItem>
          <DropdownItem>Web Developement</DropdownItem>
        </Dropdown>
      </div>
      <div>
        <Button class="bg-primary-1  text-lg"
          >Sort By<ChevronDownSolid
            class="w-3 h-3 ml-2 text-white dark:text-white"
          /></Button
        >
        <Dropdown>
          <DropdownItem>UX/UI designer</DropdownItem>
          <DropdownItem>Web Developement</DropdownItem>
        </Dropdown>
      </div>
      <div>
        <Button class="bg-primary-1  text-lg"
          >Details<ChevronDownSolid
            class="w-3 h-3 ml-2 text-white dark:text-white"
          /></Button
        >
        <Dropdown>
          <DropdownItem>UX/UI designer</DropdownItem>
          <DropdownItem>Web Developement</DropdownItem>
        </Dropdown>
      </div>
    </div>

    <div
      class="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 place-items-center"
    >
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>

    <div class="flex justify-center mt-5">
      <Pagination
        {pages}
        large
        on:previous={previous}
        on:next={next}
        icon
        normalClass="bg-primary-0 rounded-xl text-xl text-semibold text-primary-1"
      >
        <svelte:fragment slot="prev">
          <span class="sr-only">Previous</span>
          <ChevronLeftOutline class="w-3 h-3" />
        </svelte:fragment>
        <svelte:fragment slot="next">
          <span class="sr-only">Next</span>
          <ChevronRightOutline class="w-3 h-3" />
        </svelte:fragment>
      </Pagination>
    </div>
  </div>
</section>

<style>
  section {
    align-items: center;
    color: #ff8a00;
    max-width: 84rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;

    margin: 0 auto;
    box-sizing: border-box;
    margin-top: 5rem;
  }
</style>
