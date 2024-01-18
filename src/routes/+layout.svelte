<script>
  import "../app.postcss";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import "./styles.css";
  import { Select, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownSolid } from "flowbite-svelte-icons";
  import svg_US from "$lib/images/svg-US.svg";

  // import { Provider } from "svelte-redux-store";
  // import { store } from "../store";
</script>

<div class="app">
  <!-- <Provider {store}> -->
  <Header />

  <main>
    <slot />
  </main>

  <Footer />
  <!-- </Provider> -->
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #282828;
    color: #ff8a00;
  }

  main {
    color: #ff8a00;
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;

    margin: 0 auto;
    box-sizing: border-box;
    margin-top: 5rem;
  }

  @media (min-width: 480px) {
    footer {
      padding: 12px 0;
    }
  }
</style>
