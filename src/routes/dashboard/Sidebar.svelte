<script>
  import { page } from "$app/stores";
  import {
    Sidebar,
    SidebarGroup,
    SidebarItem,
    SidebarWrapper,
    SidebarBrand,
  } from "flowbite-svelte";
  import { Button } from "flowbite-svelte";

  let navActive = false;

  const toggleNav = () => {
    navActive = !navActive;
  };

  import {
    ThumbsUpSolid,
    ArrowRightOutline,
    ArrowLeftOutline,
  } from "flowbite-svelte-icons";

  import {
    ChartPieSolid,
    GridSolid,
    MailBoxSolid,
    UserSolid,
    ArrowRightToBracketSolid,
    FileEditSolid,
  } from "flowbite-svelte-icons";
  $: activeUrl = $page.url.pathname;

  let activeClass =
    "flex items-center p-2 text-xl font-normal text-primary-900 bg-primary-200 dark:bg-primary-100 rounded-lg dark:text-primary-1 hover:bg-primary-100 dark:hover:bg-gray-700";
  let nonActiveClass =
    "flex items-center p-2 text-xl font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700";

  let site = {
    name: "Flowbite-Svelte",
    href: "/",
    img: "/images/flowbite-svelte-icon-logo.svg",
  };
</script>

<Button class="!p-2 " on:click={() => toggleNav()}>
  {#if navActive}
    <ArrowRightOutline class="w-5 h-5" />
  {:else}
    <ArrowLeftOutline class="w-5 h-5" />
  {/if}
</Button>

<Sidebar
  {activeUrl}
  {activeClass}
  {nonActiveClass}
  class="bg-primary-4  overflow-y-auto py-4 px-3  rounded h-full mymenu"
>
  <!-- <SidebarWrapper class="bg-primary-4 rounded-md"> -->
  <SidebarGroup>
    <SidebarItem
      class="mymenu__Link active"
      label="Dashboard"
      href="/dashboard/setting"
    >
      <svelte:fragment slot="icon">
        <ChartPieSolid class="w-5 h-5" />
      </svelte:fragment>
    </SidebarItem>

    <SidebarItem label="Accordion" href="/docs/components/accordion">
      <svelte:fragment slot="icon">
        <GridSolid class="w-5 h-5" />
      </svelte:fragment>
    </SidebarItem>
    <SidebarItem label="Alert" href="/docs/components/alert">
      <svelte:fragment slot="icon">
        <MailBoxSolid class="w-5 h-5" />
      </svelte:fragment>
    </SidebarItem>
    <SidebarItem label="Sidebar" href="/docs/components/sidebar">
      <svelte:fragment slot="icon">
        <UserSolid class="w-5 h-5" />
      </svelte:fragment>
    </SidebarItem>
    <SidebarItem label="Badge" href="/docs/components/badge">
      <svelte:fragment slot="icon">
        <ArrowRightToBracketSolid class="w-5 h-5" />
      </svelte:fragment>
    </SidebarItem>
  </SidebarGroup>
  <!-- </SidebarWrapper> -->
</Sidebar>

<style>
  .mymenu {
    position: fixed;
    overflow: hidden;
    width: 80px;
    transition: 300ms;
  }

  .mymenu.active {
    width: 400px;
  }

  .mymenu.active .mymenu__Link {
    color: white;
  }

  .mymenu__Link {
    display: block;
    padding: 5px;
    margin: 15px;
    text-decoration: none;
    white-space: nowrap;
    border-radius: 30px;
    color: transparent;
    transition: 300ms;
  }

  .menu__Link.active {
    background: #555;
  }

  .menu__Link::before {
    content: attr(title);
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin-right: 20px;
    color: orange;
  }
</style>
