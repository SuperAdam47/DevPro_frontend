<script>
  import { onMount } from "svelte";

  import axios from "axios";
  import { BASE_URL } from "../utils/constants";

  import { isAuthenticated, authenticateUser } from "../utils/auth";
  import { page } from "$app/stores";

  let auth = false;

  import logo from "$lib/images/svelte-logo.svg";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";

  import { Img, Button, Search } from "flowbite-svelte";
  import { MicrophoneSolid, SearchOutline } from "flowbite-svelte-icons";

  let userProfile = {};

  onMount(() => {
    if (isAuthenticated()) {
      axios
        .get(`${BASE_URL}/protected`)
        .then((response) => {
          userProfile = response.data;
          auth = true;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
</script>

<header>
  <div class="relative px-8">
    <Navbar
      class="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b bg-primary-0  font-semibold text-primary-1	"
    >
      <NavBrand href="/">
        <img src={logo} class="mr-3 h-8 sm:h-12" alt="Dev pro Logo" />

        <span
          class="self-center whitespace-nowrap text-3xl font-semibold dark:text-white text-primary-1"
          >DEVPRO</span
        >
      </NavBrand>
      <NavHamburger />
      <NavUl>
        <NavLi class="text-primary-1 text-lg font-medium" href="/" active={true}
          >Become a Freelancer</NavLi
        >
        <NavLi class="text-primary-1 text-lg font-medium " href="/about"
          >About</NavLi
        >
        {#if !auth}
          <NavLi class="text-primary-1 text-lg font-medium" href="/signin"
            >Sign In</NavLi
          >
          <NavLi
            class="text-primary-1 text-lg font-medium border-solid border-2 border-sky-500"
            href="/signup">Sing Up</NavLi
          >
        {:else}
          <form class="flex gap-2">
            <Search
              size="md"
              class="flex gap-2 items-center"
              placeholder="Search Freelancers.."
            />
          </form>
        {/if}
      </NavUl>
    </Navbar>
  </div>
</header>

<style>
  header {
    display: flex;
    justify-content: space-between;
  }
</style>
