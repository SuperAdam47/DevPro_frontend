<script>
  import svg_star from "$lib/images/svg-star.svg";
  import svg_banner from "$lib/images/svg-banner.svg";
  import svg_computer from "$lib/images/svg-computer.svg";
  import svg_change from "$lib/images/repeat-solid 1.svg";
  import svg_dolllaugh from "$lib/images/svg-dolllaugh.svg";
  import svg_createProfile from "$lib/images/svg-createProfile.svg";
  import svg_car1 from "$lib/images/svg-carousel1.svg";
  import svg_car2 from "$lib/images/svg-carousel2.svg";
  import svg_car3 from "$lib/images/svg-carousel3.svg";

  import svg_photo1 from "$lib/images/Group 63.png";
  import svg_photo2 from "$lib/images/Rectangle 47.png";
  import svg_photo3 from "$lib/images/Rectangle 94.png";
  import svg_photo4 from "$lib/images/Rectangle 97.png";
  import svg_photo5 from "$lib/images/Rectangle 98.png";
  import svg_photo6 from "$lib/images/Rectangle 99.png";

  import svg_freelancer1 from "$lib/images/check-double-solid_1.svg";
  import svg_freelancer2 from "$lib/images/money-bills-solid_1.svg";
  import svg_freelancer3 from "$lib/images/user-solid 1.svg";

  import svg_buyer1 from "$lib/images/svg-buyer1.svg";
  import svg_buyer2 from "$lib/images/svg-buyer2.svg";
  import svg_buyer3 from "$lib/images/svg-buyer3.svg";

  import svg_question from "$lib/images/svg-question.svg";
  import svg_chat from "$lib/images/svg-chat.svg";
  import svg_message from "$lib/images/svg-message.svg";
  import profile_img from "$lib/images/avatar/main.svg";
  import { Tabs, TabItem, Fileupload } from "flowbite-svelte";

  import { Card, Img, Button, Search } from "flowbite-svelte";

  import {
    Textarea,
    Toolbar,
    ToolbarGroup,
    ToolbarButton,
  } from "flowbite-svelte";

  import {
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    Rating,
    Indicator,
  } from "flowbite-svelte";

  import { Label, Input, Checkbox } from "flowbite-svelte";

  import {
    PaperClipOutline,
    MapPinAltSolid,
    ImageOutline,
    CodeOutline,
    FaceGrinOutline,
    PapperPlaneOutline,
  } from "flowbite-svelte-icons";

  import { MicrophoneSolid, SearchOutline } from "flowbite-svelte-icons";

  import FlagFrance from "$lib/images/flag/france.png";
  import FlagBritain from "$lib/images/flag/britain.png";
  import FlagPoland from "$lib/images/flag/poland.png";
  import axios from "axios";
  import { onMount } from "svelte";
  import { BASE_URL } from "../../../utils/constants";
  import { ToastContainer, FlatToast } from "svelte-toasts";
  import { showToast } from "../../../utils/toast";

  onMount(() => {
    axios
      .get(`${BASE_URL}/profile/get`)
      .then((response) => {
        userProfile = response.data;
        showToast("Success", "Saved Successfully", "success");
      })
      .catch((error) => {
        console.log(error);
        showToast("Failed", "Failed Request", "error");
      });
  });

  function handleVoiceBtn() {
    alert("You clicked voice button");
  }

  let userProfile = {};

  let aboutMe =
    "Hey everyone! Thank you for visiting my page. I’m a developer based in USA and I love creating. I work on projects in my free time. Feel to check out my page!";
  let skills = [
    "VIDEO",
    "EDITING",
    "PHOTOSHOP",
    "BLENDER",
    "WRITER CONTENT",
    "CREATION",
    "PYTHON",
    "GYM TRAINER",
  ];
  let uploadingFiles = [];

  const handleChangeFiles = (event) => {
    uploadingFiles = Array.from(event.target.files);
    console.log(uploadingFiles);
  };

  let languageFlag = {
    br: {
      language: "EN",
      flag: FlagBritain,
    },
    po: {
      language: "PO",
      flag: FlagPoland,
    },
    fr: {
      language: "FR",
      flag: FlagFrance,
    },
  };

  let details = {
    website: "www.lj.com",
    phone: "(421)193-3494",
    location: "San Jose, CA",
    language: ["EN", "PO", "FR"],
  };

  let aboutMeField = "";
  let skillsField = "";
  let detailsField = {};

  let isEditable = false;

  const handleToggleEdit = () => {
    isEditable = true;
    aboutMeField = aboutMe;
    skillsField = skills.join(", ");
    detailsField = details;
    detailsField.language = details.language.join(", ");
  };

  const handleCancel = () => {
    isEditable = false;
    aboutMeField = "";
    skillsField = "";
    detailsField = {};
  };
  const handleSubmit = () => {
    console.log("handle submit");
    let formData = {
      aboutMe: aboutMeField,
      skills: skillsField.split(",").map((skill) => skill.trim()),
      website: detailsField.website,
      phone: detailsField.phone,
      location: detailsField.location,
      language: detailsField.language
        .split(",")
        .map((language) => language.trim()),
    };
    console.log(formData);
    axios
      .post(`${BASE_URL}/user/profile`, formData)
      .then((response) => {
        userProfile = response.data;
        isEditable = false;
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(formData);
  };
</script>

<svelte:head>
  <title>DevPro - Dashboard - Profile</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="bg-[#363636] text-white rounded-xl">
  <div class="w-full flex justify-end px-4 {isEditable ? 'invisible' : ''} ">
    <button
      class="text-[#FF8A00] font-bold bg-[#282828] px-8 py-1 border-2 border-[#FF8A00] rounded-xl text-[24px] tracking-tight"
      on:click={handleToggleEdit}
    >
      EDIT PROFILE
    </button>
  </div>
  <!-- <div class="w-full flex xl:flex-row md:flex-col mx-4 gap-2">
    <div
      class="lg:basis-2/5 flex flex-col text-center divide-solid divide-[#FF8A00] divide-y-[4px] px-4"
    >
      {#if isEditable}
        <form
          on:submit|preventDefault={handleSubmit}
          class=" divide-solid divide-[#FF8A00] divide-y-[4px]"
        >
          <div class="flex flex-col justify-center items-center py-2">
            <Img
              src={"https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
              alt="Profile Image"
              class="h-[240px] w-[240px] rounded-[50%] my-2"
            />
            <div class="my-4">
              <div
                class="text-[Fjalla One] font-bold text-[40px] text-[#FF8A00] tracking-tight"
              >
                LEWIS HAMILTON
              </div>
              <div class="text-[Exo 2] italic text-[24px] text-white">
                ENGINEER / DEVELOPER
              </div>
            </div>
            <div class="divide-solid divide-y-[16px]"></div>
          </div>
          <div class="py-8 px-2">
            <div class="text-[Fjalla One] font-bold text-[36px] tracking-tight">
              ABOUT ME
            </div>

            <textarea
              name="aboutMe"
              id="aboutMe"
              class="shadow-sm bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#282828] dark:border-[#282828] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF8A00] dark:focus:border-[#FF8A00]"
              bind:value={aboutMeField}
              rows="5"
              required
            />
          </div>
          <div class="py-8 px-2">
            <div class="text-[Fjalla One] font-bold text-[36px] tracking-tight">
              SKILLS
            </div>

            <textarea
              name="skills"
              id="skills"
              class="shadow-sm bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#282828] dark:border-[#282828] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF8A00] dark:focus:border-[#FF8A00]"
              bind:value={skillsField}
              rows="5"
              required
            />
            <div class="divide-solid divide-y-[16px]"></div>
          </div>
          <div class="py-8">
            <div class="text-[Fjalla One] font-bold text-[36px] tracking-tight">
              DETAILS
            </div>
            <div class="text-[Exo 2] text-[24px] lg:px-8 md:px-4 my-4">
              <div class="w-full grid grid-cols-2 text-left">
                <div class="m-1">WEBSITE:</div>
                <input
                  type="text"
                  name="website"
                  id="website"
                  class="shadow-sm m-1 bg-[#282828] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#282828] dark:border-[#282828] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF8A00] dark:focus:border-[#FF8A00]"
                  placeholder="Bonnie"
                  bind:value={detailsField.website}
                  required
                />
                <div class="m-1">PHONE:</div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  class="shadow-sm m-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#282828] dark:border-[#282828] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF8A00] dark:focus:border-[#FF8A00]"
                  placeholder="Bonnie"
                  bind:value={detailsField.phone}
                  required
                />
                <div class="m-1">LOCATION:</div>
                <input
                  type="text"
                  name="location"
                  id="location"
                  class="shadow-sm m-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#282828] dark:border-[#282828] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF8A00] dark:focus:border-[#FF8A00]"
                  placeholder="Bonnie"
                  bind:value={detailsField.location}
                  required
                />
                <div class="m-1">LANGUAGE:</div>
                <input
                  type="text"
                  name="language"
                  id="language"
                  class="shadow-sm m-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#282828] dark:border-[#282828] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF8A00] dark:focus:border-[#FF8A00]"
                  placeholder="Bonnie"
                  bind:value={detailsField.language}
                  required
                />
              </div>
            </div>
            <div class="flex justify-end">
              <button
                type="button"
                class="text-gray-500 font-bold px-2 py-1 mr-2 border-2 border-gray-500 rounded-xl text-[16px] tracking-tight"
                on:click={handleCancel}
              >
                CANCEL
              </button>
              <button
                type="submit"
                class="font-bold bg-[#282828] px-2 py-1 border-2 border-[#FF8A00] text-[#FF8A00] rounded-xl text-[16px] tracking-tight"
              >
                SAVE ALL
              </button>
            </div>
          </div>
        </form>
      {:else}
        <div class="flex flex-col justify-center items-center py-2">
          <Img
            src={"https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
            alt="Profile Image"
            class="h-[240px] w-[240px] rounded-[50%] my-2"
          />
          <div class="my-4">
            <div
              class="text-[Fjalla One] font-bold text-[40px] text-[#FF8A00] tracking-tight"
            >
              LEWIS HAMILTON
            </div>
            <div class="text-[Exo 2] italic text-[24px]">
              ENGINEER / DEVELOPER
            </div>
          </div>
          <div class="divide-solid divide-y-[16px]"></div>
        </div>
        <div class="py-8">
          <div class="text-[Fjalla One] font-bold text-[36px] tracking-tight">
            ABOUT ME
          </div>

          <div class="text-[Exo 2] text-[24px] leading-7">
            {aboutMe}
          </div>
        </div>
        <div class="py-8">
          <div class="text-[Fjalla One] font-bold text-[36px] tracking-tight">
            SKILLS
          </div>

          <div class="text-[Exo 2] text-[24px] inline">
            {#each skills as skill, index}
              <div
                class="border-2 border-white text-[12px] font-bold rounded-[8px] px-2 py-0.5 mx-1 tracking-tight inline-block"
                id={index.toString()}
              >
                {skill}
              </div>
            {/each}
          </div>
          <div class="divide-solid divide-y-[16px]"></div>
        </div>
        <div class="py-8">
          <div class="text-[Fjalla One] font-bold text-[36px] tracking-tight">
            DETAILS
          </div>
          <div class="text-[Exo 2] text-[24px] px-4">
            <div class="w-full grid grid-cols-2 text-left">
              <div class="m-1">WEBSITE:</div>
              <div class="m-1">{details.website}</div>
              <div class="m-1">PHONE:</div>
              <div class="m-1">{details.phone}</div>
              <div class="m-1">LOCATION:</div>
              <div class="m-1">{details.location}</div>
              <div class="m-1">LANGUAGE:</div>
              <div class="flex flex-row gap-4 items-center">
                <Img src={FlagFrance} class="w-[36px] h-[24px]" />
                <Img src={FlagBritain} class="w-[36px] h-[24px]" />
                <Img src={FlagPoland} class="w-[36px] h-[24px]" />
              </div>
            </div>
          </div>
          <div class="divide-solid divide-y-[16px]"></div>
        </div>
      {/if}
    </div>

    <div class="lg:basis-3/5 flex flex-col p-4">
      <div class="border-4 border-[#FF8A00] rounded-[25px] w-full p-4">
        <div
          class="text-[Fjalla One] font-bold text-[20px] text-[#FF8A00] tracking-tight"
        >
          @lewishamilton
        </div>
        <Rating id="example-3" total={5} rating={4.3} class="ml-4">
          <p
            slot="text"
            class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400"
          >
            4.3 out of 5(132 reviews)
          </p>
        </Rating>
        <div
          class="w-full flex justify-around item-center my-8 pt-8 text-center text-[#FF8A00]"
        >
          <p class="text-2xl font-semibold justify-center flex mx-10">
            200 FOLLOWING
          </p>
          <p class="text-2xl font-semibold justify-center flex mx-10">
            3596 FOLLOWERS
          </p>
        </div>
        <div class="w-full flex justify-around items-center">
          <button
            class="text-[#FF8A00] font-bold bg-[#282828] px-8 py-1 border-4 border-[#FF8A00] rounded-3xl text-[32px] tracking-tight"
          >
            FOLLOW
          </button>
          <button
            class="text-white font-bold bg-[#FF8A00] px-8 py-1 border-4 border-[#FF8A00] rounded-3xl text-[32px] tracking-tight"
          >
            MESSAGE
          </button>
        </div>
      </div>
      <Tabs
        style="underline"
        defaultClass="flex rounded-lg  text-primary-1 shadow dark:text-primary-1 mt-4"
        activeClasses="flex rounded-lg  text-primary-1 shadow dark:text-primary-1"
        inactiveClasses="flex rounded-lg  text-primary-1 shadow dark:text-primary-1"
      >
        <TabItem open title="POSTS">
          <div class="grid lg:grid-cols-4 md:grid-cols-2 mb-6">
            <div class="imgcontainer m-3">
              <Img src={svg_photo1} />
              <div class="overlay">
                <div class="text">KingTran</div>
              </div>
            </div>
            <div class="imgcontainer m-3">
              <Img src={svg_photo2} />
              <div class="overlay">
                <div class="text">Boris</div>
              </div>
            </div>
            <div class="imgcontainer m-3">
              <Img src={svg_photo3} class="w-50 h-50" />
              <div class="overlay">
                <div class="text">Lewis</div>
              </div>
            </div>
            <div class="imgcontainer m-3">
              <Img src={svg_photo4} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>

            <div class="imgcontainer m-3">
              <Img src={svg_photo5} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>

            <div class="imgcontainer m-3">
              <Img src={svg_photo6} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>
            <div class="imgcontainer m-3">
              <Img src={svg_photo6} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>
            <div class="imgcontainer m-3">
              <Img src={svg_photo6} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>
          </div>
        </TabItem>
        <TabItem title="VIDEOS">
          <div class="grid lg:grid-cols-4 md:grid-cols-2 mb-6">
            <div class="imgcontainer m-3">
              <Img src={svg_photo1} />
              <div class="overlay">
                <div class="text">KingTran</div>
              </div>
            </div>
            <div class="imgcontainer m-3">
              <Img src={svg_photo2} />
              <div class="overlay">
                <div class="text">Boris</div>
              </div>
            </div>

            <div class="imgcontainer m-3">
              <Img src={svg_photo6} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>
            <div class="imgcontainer m-3">
              <Img src={svg_photo6} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>
          </div>
        </TabItem>
      </Tabs>
    </div>
  </div> -->

  {#if isEditable}
    <form on:submit|preventDefault={handleSubmit}>
      <div class="w-full flex xl:flex-row md:flex-col mx-4 gap-2">
        <div
          class="lg:basis-2/5 flex flex-col text-center divide-solid divide-[#FF8A00] divide-y-[4px] px-4"
        >
          <div class="flex flex-col justify-center items-center py-2">
            <Img
              src={"https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
              alt="Profile Image"
              class="h-[240px] w-[240px] rounded-[50%] my-2"
            />
            <div class="my-4">
              <div
                class="text-[Fjalla One] font-bold text-[40px] text-[#FF8A00] tracking-tight"
              >
                LEWIS HAMILTON
              </div>
              <div class="text-[Exo 2] italic text-[24px] text-white">
                ENGINEER / DEVELOPER
              </div>
            </div>
            <div class="divide-solid divide-y-[16px]"></div>
          </div>
          <div class="py-8 px-2">
            <div class="text-[Fjalla One] font-bold text-[36px] tracking-tight">
              ABOUT ME
            </div>

            <textarea
              name="aboutMe"
              id="aboutMe"
              class="shadow-sm bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#282828] dark:border-[#282828] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF8A00] dark:focus:border-[#FF8A00]"
              bind:value={aboutMeField}
              rows="5"
              required
            />
          </div>
          <div class="py-8 px-2">
            <div class="text-[Fjalla One] font-bold text-[36px] tracking-tight">
              SKILLS
            </div>

            <textarea
              name="skills"
              id="skills"
              class="shadow-sm bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#282828] dark:border-[#282828] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF8A00] dark:focus:border-[#FF8A00]"
              bind:value={skillsField}
              rows="5"
              required
            />
            <div class="divide-solid divide-y-[16px]"></div>
          </div>
          <div class="py-8">
            <div class="text-[Fjalla One] font-bold text-[36px] tracking-tight">
              DETAILS
            </div>
            <div class="text-[Exo 2] text-[24px] lg:px-8 md:px-4 my-4">
              <div class="w-full grid grid-cols-2 text-left">
                <div class="m-1">WEBSITE:</div>
                <input
                  type="text"
                  name="website"
                  id="website"
                  class="shadow-sm m-1 bg-[#282828] border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#282828] dark:border-[#282828] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF8A00] dark:focus:border-[#FF8A00]"
                  placeholder="Bonnie"
                  bind:value={detailsField.website}
                  required
                />
                <div class="m-1">PHONE:</div>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  class="shadow-sm m-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#282828] dark:border-[#282828] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF8A00] dark:focus:border-[#FF8A00]"
                  placeholder="Bonnie"
                  bind:value={detailsField.phone}
                  required
                />
                <div class="m-1">LOCATION:</div>
                <input
                  type="text"
                  name="location"
                  id="location"
                  class="shadow-sm m-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#282828] dark:border-[#282828] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF8A00] dark:focus:border-[#FF8A00]"
                  placeholder="Bonnie"
                  bind:value={detailsField.location}
                  required
                />
                <div class="m-1">LANGUAGE:</div>
                <input
                  type="text"
                  name="language"
                  id="language"
                  class="shadow-sm m-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#282828] dark:border-[#282828] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF8A00] dark:focus:border-[#FF8A00]"
                  placeholder="Bonnie"
                  bind:value={detailsField.language}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        <div class="lg:basis-3/5 flex flex-col p-4">
          <div class="border-4 border-[#FF8A00] rounded-[25px] w-full p-4">
            <div
              class="text-[Fjalla One] font-bold text-[20px] text-[#FF8A00] tracking-tight"
            >
              @lewishamilton
            </div>
            <Rating id="example-3" total={5} rating={4.3} class="ml-4">
              <p
                slot="text"
                class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                4.3 out of 5(132 reviews)
              </p>
            </Rating>
            <div
              class="w-full flex justify-around item-center my-8 pt-8 text-center text-[#FF8A00]"
            >
              <p class="text-2xl font-semibold justify-center flex mx-10">
                200 FOLLOWING
              </p>
              <p class="text-2xl font-semibold justify-center flex mx-10">
                3596 FOLLOWERS
              </p>
            </div>
            <div class="w-full flex justify-around items-center">
              <button
                class="text-[#FF8A00] font-bold bg-[#282828] px-8 py-1 border-4 border-[#FF8A00] rounded-3xl text-[32px] tracking-tight"
              >
                FOLLOW
              </button>
              <button
                class="text-white font-bold bg-[#FF8A00] px-8 py-1 border-4 border-[#FF8A00] rounded-3xl text-[32px] tracking-tight"
              >
                MESSAGE
              </button>
            </div>
          </div>
          <Tabs
            style="underline"
            defaultClass="flex rounded-lg  text-primary-1 shadow dark:text-primary-1 mt-4"
            activeClasses="flex rounded-lg  text-primary-1 shadow dark:text-primary-1"
            inactiveClasses="flex rounded-lg  text-primary-1 shadow dark:text-primary-1"
          >
            <TabItem open title="POSTS">
              <input
                type="file"
                name="file"
                id="file"
                multiple
                accept="image/*"
                class="shadow-sm m-1 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-[#282828] dark:border-[#282828] dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF8A00] dark:focus:border-[#FF8A00]"
                placeholder="Photo File"
                on:change={handleChangeFiles}
                required
              />
              <!-- <Fileupload multiple /> -->
              <div class="grid lg:grid-cols-4 md:grid-cols-2 mb-6">
                {#each uploadingFiles as file}
                  <div class="imgcontainer m-3">
                    <Img src={file} />
                    <div class="overlay">
                      <div class="text">{file.name}</div>
                    </div>
                  </div>
                {/each}
                <div class="imgcontainer m-3">
                  <Img src={svg_photo1} />
                  <div class="overlay">
                    <div class="text">KingTran</div>
                  </div>
                </div>
                <div class="imgcontainer m-3">
                  <Img src={svg_photo2} />
                  <div class="overlay">
                    <div class="text">Boris</div>
                  </div>
                </div>
                <div class="imgcontainer m-3">
                  <Img src={svg_photo3} class="w-50 h-50" />
                  <div class="overlay">
                    <div class="text">Lewis</div>
                  </div>
                </div>
                <div class="imgcontainer m-3">
                  <Img src={svg_photo4} />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>

                <div class="imgcontainer m-3">
                  <Img src={svg_photo5} />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>

                <div class="imgcontainer m-3">
                  <Img src={svg_photo6} />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
                <div class="imgcontainer m-3">
                  <Img src={svg_photo6} />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
                <div class="imgcontainer m-3">
                  <Img src={svg_photo6} />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
              </div>
            </TabItem>
            <TabItem title="VIDEOS">
              <div class="grid lg:grid-cols-4 md:grid-cols-2 mb-6">
                <div class="imgcontainer m-3">
                  <Img src={svg_photo1} />
                  <div class="overlay">
                    <div class="text">KingTran</div>
                  </div>
                </div>
                <div class="imgcontainer m-3">
                  <Img src={svg_photo2} />
                  <div class="overlay">
                    <div class="text">Boris</div>
                  </div>
                </div>

                <div class="imgcontainer m-3">
                  <Img src={svg_photo6} />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
                <div class="imgcontainer m-3">
                  <Img src={svg_photo6} />
                  <div class="overlay">
                    <div class="text">Hello World</div>
                  </div>
                </div>
              </div>
            </TabItem>
          </Tabs>
        </div>
      </div>

      <div class="flex justify-end">
        <button
          type="button"
          class="text-gray-500 font-bold px-2 py-1 mr-2 border-2 border-gray-500 rounded-xl text-[16px] tracking-tight"
          on:click={handleCancel}
        >
          CANCEL
        </button>
        <button
          type="submit"
          class="font-bold bg-[#282828] px-2 py-1 border-2 border-[#FF8A00] text-[#FF8A00] rounded-xl text-[16px] tracking-tight"
        >
          SAVE ALL
        </button>
      </div>
    </form>
  {:else}
    <div class="w-full flex xl:flex-row md:flex-col mx-4 gap-2">
      <div
        class="lg:basis-2/5 flex flex-col text-center divide-solid divide-[#FF8A00] divide-y-[4px] px-4"
      >
        <div class="flex flex-col justify-center items-center py-2">
          <Img
            src={"https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
            alt="Profile Image"
            class="h-[240px] w-[240px] rounded-[50%] my-2"
          />
          <div class="my-4">
            <div
              class="text-[Fjalla One] font-bold text-[40px] text-[#FF8A00] tracking-tight"
            >
              LEWIS HAMILTON
            </div>
            <div class="text-[Exo 2] italic text-[24px]">
              ENGINEER / DEVELOPER
            </div>
          </div>
          <div class="divide-solid divide-y-[16px]"></div>
        </div>
        <div class="py-8">
          <div class="text-[Fjalla One] font-bold text-[36px] tracking-tight">
            ABOUT ME
          </div>

          <div class="text-[Exo 2] text-[24px] leading-7">
            {aboutMe}
          </div>
        </div>
        <div class="py-8">
          <div class="text-[Fjalla One] font-bold text-[36px] tracking-tight">
            SKILLS
          </div>

          <div class="text-[Exo 2] text-[24px] inline">
            {#each skills as skill, index}
              <div
                class="border-2 border-white text-[12px] font-bold rounded-[8px] px-2 py-0.5 mx-1 tracking-tight inline-block"
                id={index.toString()}
              >
                {skill}
              </div>
            {/each}
          </div>
          <div class="divide-solid divide-y-[16px]"></div>
        </div>
        <div class="py-8">
          <div class="text-[Fjalla One] font-bold text-[36px] tracking-tight">
            DETAILS
          </div>
          <div class="text-[Exo 2] text-[24px] px-4">
            <div class="w-full grid grid-cols-2 text-left">
              <div class="m-1">WEBSITE:</div>
              <div class="m-1">{details.website}</div>
              <div class="m-1">PHONE:</div>
              <div class="m-1">{details.phone}</div>
              <div class="m-1">LOCATION:</div>
              <div class="m-1">{details.location}</div>
              <div class="m-1">LANGUAGE:</div>
              <div class="flex flex-row gap-4 items-center">
                <Img src={FlagFrance} class="w-[36px] h-[24px]" />
                <Img src={FlagBritain} class="w-[36px] h-[24px]" />
                <Img src={FlagPoland} class="w-[36px] h-[24px]" />
              </div>
            </div>
          </div>
          <div class="divide-solid divide-y-[16px]"></div>
        </div>
      </div>

      <div class="lg:basis-3/5 flex flex-col p-4">
        <div class="border-4 border-[#FF8A00] rounded-[25px] w-full p-4">
          <div
            class="text-[Fjalla One] font-bold text-[20px] text-[#FF8A00] tracking-tight"
          >
            @lewishamilton
          </div>
          <Rating id="example-3" total={5} rating={4.3} class="ml-4">
            <p
              slot="text"
              class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400"
            >
              4.3 out of 5(132 reviews)
            </p>
          </Rating>
          <div
            class="w-full flex justify-around item-center my-8 pt-8 text-center text-[#FF8A00]"
          >
            <p class="text-2xl font-semibold justify-center flex mx-10">
              200 FOLLOWING
            </p>
            <p class="text-2xl font-semibold justify-center flex mx-10">
              3596 FOLLOWERS
            </p>
          </div>
          <div class="w-full flex justify-around items-center">
            <button
              class="text-[#FF8A00] font-bold bg-[#282828] px-8 py-1 border-4 border-[#FF8A00] rounded-3xl text-[32px] tracking-tight"
            >
              FOLLOW
            </button>
            <button
              class="text-white font-bold bg-[#FF8A00] px-8 py-1 border-4 border-[#FF8A00] rounded-3xl text-[32px] tracking-tight"
            >
              MESSAGE
            </button>
          </div>
        </div>
        <Tabs
          style="underline"
          defaultClass="flex rounded-lg  text-primary-1 shadow dark:text-primary-1 mt-4"
          activeClasses="flex rounded-lg  text-primary-1 shadow dark:text-primary-1"
          inactiveClasses="flex rounded-lg  text-primary-1 shadow dark:text-primary-1"
        >
          <TabItem open title="POSTS">
            <div class="grid lg:grid-cols-4 md:grid-cols-2 mb-6">
              <div class="imgcontainer m-3">
                <Img src={svg_photo1} />
                <div class="overlay">
                  <div class="text">KingTran</div>
                </div>
              </div>
              <div class="imgcontainer m-3">
                <Img src={svg_photo2} />
                <div class="overlay">
                  <div class="text">Boris</div>
                </div>
              </div>
              <div class="imgcontainer m-3">
                <Img src={svg_photo3} class="w-50 h-50" />
                <div class="overlay">
                  <div class="text">Lewis</div>
                </div>
              </div>
              <div class="imgcontainer m-3">
                <Img src={svg_photo4} />
                <div class="overlay">
                  <div class="text">Hello World</div>
                </div>
              </div>

              <div class="imgcontainer m-3">
                <Img src={svg_photo5} />
                <div class="overlay">
                  <div class="text">Hello World</div>
                </div>
              </div>

              <div class="imgcontainer m-3">
                <Img src={svg_photo6} />
                <div class="overlay">
                  <div class="text">Hello World</div>
                </div>
              </div>
              <div class="imgcontainer m-3">
                <Img src={svg_photo6} />
                <div class="overlay">
                  <div class="text">Hello World</div>
                </div>
              </div>
              <div class="imgcontainer m-3">
                <Img src={svg_photo6} />
                <div class="overlay">
                  <div class="text">Hello World</div>
                </div>
              </div>
            </div>
          </TabItem>
          <TabItem title="VIDEOS">
            <div class="grid lg:grid-cols-4 md:grid-cols-2 mb-6">
              <div class="imgcontainer m-3">
                <Img src={svg_photo1} />
                <div class="overlay">
                  <div class="text">KingTran</div>
                </div>
              </div>
              <div class="imgcontainer m-3">
                <Img src={svg_photo2} />
                <div class="overlay">
                  <div class="text">Boris</div>
                </div>
              </div>

              <div class="imgcontainer m-3">
                <Img src={svg_photo6} />
                <div class="overlay">
                  <div class="text">Hello World</div>
                </div>
              </div>
              <div class="imgcontainer m-3">
                <Img src={svg_photo6} />
                <div class="overlay">
                  <div class="text">Hello World</div>
                </div>
              </div>
            </div>
          </TabItem>
        </Tabs>
      </div>
    </div>
  {/if}

  <ToastContainer let:data>
    <FlatToast {data} />
  </ToastContainer>
</section>

<style>
  section {
    align-items: center;
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

  .imgcontainer {
    position: relative;
    /* width: 50%; */
  }

  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    /* background-color: #008cba; */
    background: rgba(0, 0, 0, 0.7); /* Black see-through */
    color: #f1f1f1;
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: 0.5s ease;
  }

  .imgcontainer:hover .overlay {
    height: 100%;
  }

  .text {
    color: white;
    font-size: 30px;
    position: absolute;
    top: 30%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .text2 {
    color: white;
    font-size: 16px;
    position: relative;
    padding: 1.5rem;
    top: 60%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>
