<script>
  import { onMount } from "svelte";
  import profile_img from "$lib/images/carousel/c-1.jpg";
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
  import { Card, Label, Input, Dropzone, Select } from "flowbite-svelte";

  import { MicrophoneSolid, SearchOutline } from "flowbite-svelte-icons";

  import { ToastContainer, FlatToast } from "svelte-toasts";
  import { showToast } from "../../utils/toast";
  import axios from "axios";
  import { BASE_URL } from "../../utils/constants";
  import { isAuthenticated } from "../../utils/auth";
  import { Product_Category } from "../../utils/constants";

  onMount(() => {
    if (isAuthenticated()) {
      axios
        .get(`${BASE_URL}/protected`)
        .then((response) => {
          userProfile = response.data;
          console.log(userProfile);
          auth = true;
        })
        .catch((error) => {
          console.log(typeof error.response.message);
          // if (typeof error.response.data.message === "string") {
          //   showToast("Failed", error.response.data.message, "error");
          // } else {
          //   showToast("Failed", error.response.data.error, "error");
          // }
          // setTimeout(() => {
          //   location.href = "/signin";
          // }, 1000);
        });
    }
    axios
      .get(`${BASE_URL}/protected/product/get`)
      .then((response) => {
        console.log(response.data);
        products = response.data;
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.status);
        if (error.response.status == 404) {
          showToast("Info", error.response.data.message, "info");
        }
      });
  });

  let auth = false;
  let userProfile = {};
  let categories = [
    { value: "0", name: Product_Category[0] },
    { value: "1", name: Product_Category[1] },
    { value: "2", name: Product_Category[2] },
    { value: "3", name: Product_Category[3] },
  ];
  let products = [];
  let formData = {
    title: "",
    description: "",
    price: "",
    category: "",
    files: [],
  };

  // file uploading

  let value = [];
  const dropHandle = (event) => {
    value = [];
    event.preventDefault();
    if (event.dataTransfer.items) {
      [...event.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          const file = item.getAsFile();
          formData.files.push(file);
          console.log(file);
          value.push(file.name);
          value = value;
        }
      });
    } else {
      [...event.dataTransfer.files].forEach((file, i) => {
        value = file.name;
      });
    }
  };

  const handleChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      value.push(files[0].name);
      value = value;
      formData.files.push(files[0]);
    }
  };

  const showFiles = (files) => {
    if (files.length === 1) return files[0];
    let concat = "";
    files.map((file) => {
      concat += file;
      concat += ",";
      concat += " ";
    });

    if (concat.length > 100) concat = concat.slice(0, 100);
    concat += "...";
    return concat;
  };

  // file uploading end

  let headers = {
    "Content-Type": "multipart/form-data",
  };

  const handleSubmit = () => {
    if (!auth) {
      showToast("Info", "Please Signin to save product", "info");
    } else if (formData.files.length === 0) {
      showToast("Info", "Please select product iamges", "info");
    } else {
      let requestBody = new FormData();
      const fileInput = document.querySelector('input[type="file"]');
      requestBody.append("title", formData.title);
      requestBody.append("description", formData.description);
      requestBody.append("price", formData.price);
      requestBody.append("category", formData.category);
      for (let i = 0; i < fileInput.files.length; i++) {
        requestBody.append("images", fileInput.files[i]);
      }
      // console.log(fileInput.files);
      // console.log(requestBody);
      axios
        .post(`${BASE_URL}/protected/product/add`, requestBody, { headers })
        .then((response) => {
          let data = response.data.product;
          showToast("Info", response.data.message, "info");
          setTimeout(() => {
            location.href = "/order";
          }, 1000);
        })
        .catch((error) => {
          console.log(error.response.status);
          if (error.response.status == 500) {
            showToast(
              "Warning",
              "Something went wrong, please try again",
              "warning"
            );
            console.log(error.response.data.message);
          }
        });
    }
  };
</script>

<svelte:head>
  <title>DevPro - Post Product</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <div
    class="py-16 px-3 grid grid-cols-3 bg-primary-3 rounded-lg justify-center align-middle"
  >
    <div class="col-span-2">
      <form on:submit|preventDefault={handleSubmit}>
        <div
          class="px-8 md:w-full flex flex-col rounded-lg justify-center align-middle items-center"
        >
          <p class="text-6xl font-semibold mb-8 text-primary-1">
            Post your Product
          </p>

          <div class="w-1/3">
            <Dropzone
              id="dropzone"
              on:drop={dropHandle}
              on:dragover={(event) => {
                event.preventDefault();
              }}
              on:change={handleChange}
              accept="image/*"
              multiple
            >
              <svg
                aria-hidden="true"
                class="mb-3 w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                /></svg
              >
              {#if value.length === 0}
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF
                </p>
              {:else}
                <p class="text-gray-800">{showFiles(value)}</p>
              {/if}
            </Dropzone>
          </div>
          <div class="w-full">
            <Label class="space-y-2">
              <p class="text-xl font-medium my-3 text-white">Title</p>
              <Input
                class="text-xl"
                type="text"
                name="title"
                bind:value={formData.title}
                required
              />
            </Label>
            <Label class="space-y-2">
              <p class="text-xl font-medium my-3 text-white">Description</p>
              <Textarea
                rows={4}
                name="password"
                bind:value={formData.description}
                required
              />
            </Label>
          </div>

          <div class="flex flex-row w-full">
            <div class="w-full mr-4">
              <Label class="space-y-2">
                <p class="text-xl font-medium my-3 text-white">Price</p>
                <Input
                  class="text-xl"
                  type="number"
                  name="price"
                  bind:value={formData.price}
                  required
                />
              </Label>
            </div>
            <div class="w-full ml-4">
              <Label class="space-y-2">
                <p class="text-xl font-medium my-3 text-white">Category</p>
                <Select
                  class="mt-2"
                  size="lg"
                  items={categories}
                  placeholder="Select a Category..."
                  bind:value={formData.category}
                  required
                />
              </Label>
            </div>
          </div>
          <Button type="submit" class="w-full text-xl bg-primary-1 mt-12">
            Save Product
          </Button>
        </div>
      </form>
    </div>
    <div class="ml-5">
      <Card class="w-full max-w-lg bg-primary-0 border-none ">
        <p class="text-3xl font-semibold mt-3 text-primary-1 mb-5">
          Best Products
        </p>
        {#if products.length === 0}
          <div class="w-full h-[280px]"></div>
        {:else}
          {#each products.slice(0, 3) as product, index}
            <div class="flex flex-row justify-start items-center gap-4 my-2">
              <Img
                src={`${BASE_URL}/${product.images[0]}`}
                class="w-[96px] aspect-video"
              />
              <div>
                <p class="text-white text-xl mb-1">{product.title}</p>
                <Rating id="example-3" total={5} rating={4.3}>
                  <p
                    slot="text"
                    class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    4.3(132 reviews)
                  </p>
                </Rating>
              </div>
            </div>
          {/each}
        {/if}
      </Card>
      <Card class="w-full max-w-lg bg-primary-0 border-none ">
        <p class="text-3xl font-semibold mt-3 text-primary-1 mb-5">
          Recent Products
        </p>
        {#if products.length === 0}
          <div class="w-full h-[280px]"></div>
        {:else}
          {#each products.slice(0, 3) as product, index}
            <div class="flex flex-row justify-start items-center gap-4 my-2">
              <Img
                src={`${BASE_URL}/${product.images[0]}`}
                class="w-[96px] aspect-video"
              />
              <div>
                <p class="text-white text-xl mb-1">{product.title}</p>
                <Rating id="example-3" total={5} rating={4.3}>
                  <p
                    slot="text"
                    class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    4.3(132 reviews)
                  </p>
                </Rating>
              </div>
            </div>
          {/each}
        {/if}
      </Card>
    </div>
  </div>

  <ToastContainer let:data>
    <FlatToast {data} />
  </ToastContainer>
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
