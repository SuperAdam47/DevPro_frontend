<script>
  export const images = [
    {
      alt: "Cosmic timetraveler",
      src: "/images/carousel/c-1.jpg",
      title: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
    },
    {
      alt: "Cosmic timetraveler",
      src: "/images/carousel/c-2.jpg",
      title: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
    },
    {
      alt: "Cosmic timetraveler",
      src: "/images/carousel/c-3.jpg",
      title: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
    },
    {
      alt: "Cosmic timetraveler",
      src: "/images/carousel/c-4.jpg",
      title: "cosmic-timetraveler-pYyOZ8q7AII-unsplash.com",
    },
  ];

  import profile_img from "$lib/images/avatar/main.svg";
  import svg_arrow from "$lib/images/svg-arrow-button.svg";

  export const comment = {
    id: "1",
    user: {
      name: "Jese Leos",
      img: {
        src: "/images/avatar/main.svg",
        alt: "Jese Leos",
      },
      joined: "Joined on August 2014",
    },
    total: 5,
    rating: 4.5,
    heading: "Thinking to buy another one!",
    address: "the UK",
    datetime: "2022-03-25",
  };

  import {
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    Rating,
    Indicator,
  } from "flowbite-svelte";

  import { Carousel } from "flowbite-svelte";

  import { Timeline, TimelineItem } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";

  let isHovered = false;
  import { Alert } from "flowbite-svelte";
  import { Review } from "flowbite-svelte";

  import {
    LandmarkSolid,
    CalendarMonthSolid,
    UsersGroupOutline,
    ThumbsUpSolid,
    ThumbsDownSolid,
  } from "flowbite-svelte-icons";

  export const review = {
    name: "Jese Leos",
    imgSrc: "/images/avatar/1.svg",
    imgAlt: "jese leos",
    address: "United States",
    reviewDate: "January 20, 2022",
    title: "It is Very Good Platform.",
    rating: 8.79,
    item1: "Apartament with City View",
    item2: "3 nights December 2021",
    item3: "Family",
  };

  import { Img, Button, Search } from "flowbite-svelte";
  import {
    Textarea,
    Toolbar,
    ToolbarGroup,
    ToolbarButton,
  } from "flowbite-svelte";
  import {
    PaperClipOutline,
    MapPinAltSolid,
    ImageOutline,
    CodeOutline,
    FaceGrinOutline,
    PapperPlaneOutline,
  } from "flowbite-svelte-icons";
  import { Gallery } from "flowbite-svelte";
  import { Card, Label, Input, Checkbox } from "flowbite-svelte";

  import { MicrophoneSolid, SearchOutline } from "flowbite-svelte-icons";

  function handleVoiceBtn() {
    alert("You clicked voice button");
  }

  async function doPost() {
    const res = await fetch("http://localhost:4242/create-checkout-session", {
      method: "POST",
      body: JSON.stringify({}),
    });

    const json = await res.json();
    let result = JSON.stringify(json);
  }
</script>

<svelte:head>
  <title>FAQ</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
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
  <div class="mb-5">
    <Breadcrumb
      aria-label="Solid background breadcrumb example"
      solid
      class="bg-primay-2 border-none text-white text-sm"
    >
      <BreadcrumbItem href="/" home homeClass="text-white  flex flex-row"
        >Home</BreadcrumbItem
      >
      <BreadcrumbItem href="/" linkClass="text-white">developers</BreadcrumbItem
      >
      <BreadcrumbItem spanClass="text-white">UX/UI desinger</BreadcrumbItem>
    </Breadcrumb>
  </div>

  <div
    class="pb-16 flex flex-col bg-primary-3 rounded-lg justify-center align-middle"
  >
    <div class="grid grid-cols-3 p-3">
      <div class="col-span-2">
        <Carousel {images} let:Controls let:Indicators duration={3000}>
          <Controls />
          <Indicators />
        </Carousel>
        <div class="ml-3 mt-3">
          <p class="text-4xl font-semibold mt-3 text-white">Banana 3D model</p>
          <p class="text-lg mt-1 ml-1 text-gray-400">By @kingTran</p>
          <p class="text-2xl font-semibold mt-6 text-white">
            Order Description
          </p>
          <p class="text-lg font-semibold mt-3 text-gray-400">
            I will 3D model a banana using the program Blender. Textures will be
            provided in a png format.
          </p>
          <p class="text-lg mt-5 text-gray-400">+ Please give me credit</p>
          <p class="text-lg mt-3 text-gray-400">
            + I’m new to freelancing so please be patient
          </p>
          <p class="text-lg mt-3 text-gray-400">+ Follow my socials</p>
          <p class="text-lg mt-5 text-gray-400">Thank you!</p>
        </div>
        <div class="ml-3 mt-3">
          <p class="text-2xl font-semibold my-6 text-white">Progress</p>
          <Timeline class="ml-5 text-gray-400">
            <TimelineItem
              classTime="text-gray-400"
              title="Order Received"
              date="February 2022"
            />
            <TimelineItem
              title="Order Started"
              date="March 2022"
              classTime="text-gray-400"
            >
              <!-- <p class="text-base font-normal text-white dark:text-gray-400">
                Order Received
              </p> -->
            </TimelineItem>
            <TimelineItem
              title="Order Delivered"
              date="April 2022"
              classTime="text-white"
            />
            <TimelineItem
              title="Order Completed"
              date="April 2022"
              classTime="text-white"
            />
          </Timeline>
        </div>
        <div class="ml-3 mt-3">
          <p class="text-2xl font-semibold mt-6 text-white">
            REVIEWS ON PRODUCT
          </p>
          <form class="my-5">
            <Alert class="px-3 py-2 pl-6 bg-primary-0">
              <svelte:fragment slot="icon">
                <ToolbarButton
                  color="dark"
                  class="text-gray-500 dark:text-gray-400"
                >
                  <FaceGrinOutline class="w-5 h-5" />
                  <span class="sr-only">Add emoji</span>
                </ToolbarButton>
                <Textarea
                  id="chat"
                  class="mx-4"
                  rows="1"
                  placeholder="Your Review here..."
                />
                <ToolbarButton
                  type="submit"
                  color="blue"
                  class="rounded-full text-primary-600 dark:text-primary-500"
                >
                  <PapperPlaneOutline class="w-5 h-5 rotate-45" />
                  <span class="sr-only">Send message</span>
                </ToolbarButton>
              </svelte:fragment>
            </Alert>
          </form>
          <div class="mt-5">
            <Review {review}>
              <p class="mb-2 font-light text-gray-400 dark:text-gray-400">
                The flat was spotless, very comfortable, and the host was
                amazing. I highly recommend this accommodation for anyone
                visiting Brasov city centre.
              </p>

              <svelte:fragment slot="item1">
                <LandmarkSolid class="w-3 h-3 mr-2" />
                {review.item1}
              </svelte:fragment>
              <svelte:fragment slot="item2">
                <CalendarMonthSolid class="w-3 h-3 mr-2" />
                {review.item2}
              </svelte:fragment>
              <svelte:fragment slot="item3">
                <UsersGroupOutline class="w-3 h-3 mr-2" />
                {review.item3}
              </svelte:fragment>
              <aside class="flex items-center mt-3 space-x-5">
                <a
                  href="/"
                  class="inline-flex items-center text-sm font-medium text-primary-1 hover:underline dark:text-primary-500"
                >
                  <ThumbsUpSolid
                    class="w-3.5 h-3.5 mr-2.5 text-primary-1 dark:text-primary-500"
                  />
                  Helpful
                </a>
                <a
                  href="/"
                  class="inline-flex items-center text-sm font-medium text-primary-1 hover:underline dark:text-primary-500 group"
                >
                  <ThumbsDownSolid
                    class="w-3.5 h-3.5 mr-2.5 text-primary-1 dark:text-primary-500"
                  />
                  Not helpful
                </a>
              </aside>
            </Review>
          </div>
          <div class="mt-10">
            <Review {review}>
              <p class="mb-2 font-light text-gray-400 dark:text-gray-400">
                It's quite a while since we are no longer using hotel facilities
                but self contained places. And the main reason is poor
                cleanliness and staff not being trained properly.
              </p>

              <svelte:fragment slot="item1">
                <LandmarkSolid class="w-3 h-3 mr-2" />
                {review.item1}
              </svelte:fragment>
              <svelte:fragment slot="item2">
                <CalendarMonthSolid class="w-3 h-3 mr-2" />
                {review.item2}
              </svelte:fragment>
              <svelte:fragment slot="item3">
                <UsersGroupOutline class="w-3 h-3 mr-2" />
                {review.item3}
              </svelte:fragment>
              <aside class="flex items-center mt-3 space-x-5">
                <a
                  href="/"
                  class="inline-flex items-center text-sm font-medium text-primary-1 hover:underline dark:text-primary-500"
                >
                  <ThumbsUpSolid
                    class="w-3.5 h-3.5 mr-2.5 text-primary-1 dark:text-primary-500"
                  />
                  Helpful
                </a>
                <a
                  href="/"
                  class="inline-flex items-center text-sm font-medium text-primary-1 hover:underline dark:text-primary-500 group"
                >
                  <ThumbsDownSolid
                    class="w-3.5 h-3.5 mr-2.5 text-primary-1 dark:text-primary-500"
                  />
                  Not helpful
                </a>
              </aside>
            </Review>
          </div>
        </div>
      </div>
      <div class="ml-5">
        <Card class="w-full max-w-lg bg-primary-0 border-none ">
          <p class="text-3xl font-semibold mt-3 text-white mb-5">ABOUT LEWIS</p>
          <Avatar src={profile_img} size="lg" />
          <Rating id="example-3" total={5} rating={4.3}>
            <p
              slot="text"
              class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400"
            >
              4.3 out of 5(132 reviews)
            </p>
          </Rating>
          <p class="text-lg font-medium my-3 text-gray-400">
            Hey! Thank you for checking out my work. I’ve been a 3D modeler for
            about 5 years and love what I’m doing. Please just give as much
            detail as possible before ordering to ensure a smooth process. Also
            give me a few picture references so I get an idea of what you want.
            Support me with a follow! Thank you!
          </p>
          <div class="flex flex-row gap-4 mb-5 justify-center">
            <Button
              size="sm"
              class="!bg-primary-0 outline outline-primary-1 outline text-lg text-primary-1"
              >VIEW PROFILE</Button
            >
            <Button
              size="sm"
              class="!bg-primary-0 outline outline-primary-1 outline text-lg text-primary-1"
              >SEND MESSAGE</Button
            >
          </div>

          <form
            action="http://localhost:4242/create-checkout-session"
            method="POST"
            class="w-full"
          >
            <button type="submit" id="checkout-button" class="w-full">
              <Button size="sm" on:click={doPost} class="!bg-primary-1 text-lg">
                Continue to order
              </Button></button
            >
          </form>
        </Card>
        <div class="mt-8">
          <Card class="w-full max-w-lg bg-primary-0 border-none ">
            <p class="text-3xl font-semibold mt-3 text-white mb-5">HELP</p>

            <div class="flex flex-row items-center">
              <Img src={svg_arrow} class="w-16 h-16" alt="sample 1" />
              <p class="text-xl font-semibold mt-2 ml-2 text-white">
                MAKE CHANGES/EDITS
              </p>
            </div>
            <div class="flex flex-row items-center">
              <Img src={svg_arrow} class="w-16 h-16" alt="sample 1" />
              <p class="text-xl font-semibold mt-2 ml-2 text-white">
                VIEW ORDER DETAILS
              </p>
            </div>
            <div class="flex flex-row items-center">
              <Img src={svg_arrow} class="w-16 h-16" alt="sample 1" />
              <p class="text-xl font-semibold mt-2 ml-2 text-white">
                CANCEL ORDER
              </p>
            </div>
            <div class="flex flex-row items-center">
              <Img src={svg_arrow} class="w-16 h-16" alt="sample 1" />
              <p class="text-xl font-semibold mt-2 ml-2 text-white">
                CONTACT SUPPORT
              </p>
            </div>
            <div class="mt-10">
              <p class="text-3xl font-semibold mt-2 text-white mb-5">
                RESOURCES
              </p>

              <div class="flex flex-row items-center">
                <Img src={svg_arrow} class="w-16 h-16" alt="sample 1" />
                <p class="text-xl font-semibold mt-2 ml-2 text-white">
                  DEVPRO FAQ
                </p>
              </div>
              <div class="flex flex-row items-center">
                <Img src={svg_arrow} class="w-16 h-16" alt="sample 1" />
                <p class="text-xl font-semibold mt-2 ml-2 text-white">
                  DEVPRO FORUM
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  section {
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
