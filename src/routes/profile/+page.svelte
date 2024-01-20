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
  import { Tabs, TabItem } from "flowbite-svelte";

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
  import { onMount } from "svelte";
  import { ToastContainer, FlatToast } from "svelte-toasts";
  import { showToast } from "../../utils/toast";
  import axios from "axios";
  import { BASE_URL } from "../../utils/constants";
  import { isAuthenticated } from "../../utils/auth";

  onMount(() => {
    if (!isAuthenticated()) {
      location.href = "/signin";
    } else {
      axios
        .get(`${BASE_URL}/protected`)
        .then((response) => {
          userProfile = response.data;
          skills = userProfile.skills;
        })
        .catch((error) => {
          console.log(typeof error.response.message);
          if (typeof error.response.data.message === "string") {
            showToast("Failed", error.response.data.message, "error");
          } else {
            showToast("Failed", error.response.data.error, "error");
          }
          setTimeout(() => {
            location.href = "/signin";
          }, 1000);
        });
    }
  });

  let userProfile = {};

  let skills = [];
  let skillsField = "";
  let languages = [];

  let isEditable = false;

  const handleToggleEdit = () => {
    isEditable = true;
    skills = userProfile.skills;
    skillsField = skills.join(", ");
  };

  const handleCancel = () => {
    isEditable = false;
    skills;
  };
  const handleSubmit = () => {
    console.log("handle submit");
    console.log(userProfile);
    userProfile.skills = skillsField.split(",").map((item) => item.trim());
    axios
      .put(`${BASE_URL}/protected/update`, userProfile)
      .then((response) => {
        userProfile = response.data;
        location.href = "/dashboard/profile";
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(userProfile);
  };
</script>

<svelte:head>
  <title>DevPro - Profile</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="bg-[#CDCDCD] text-[#282828] rounded-xl">
  <div class="w-full flex xl:flex-row md:flex-col mx-4 mt-8 gap-2">
    <div
      class="lg:basis-2/5 flex flex-col text-center divide-solid divide-black divide-y-[4px] px-4"
    >
      <div class="flex flex-col justify-center items-center py-2">
        <Img
          src={"https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
          alt="Profile Image"
          class="h-[240px] w-[240px] rounded-[50%] my-2"
        />
        <div class="my-4">
          <div class="text-[Fjalla One] font-bold text-[40px] tracking-tight">
            {userProfile.full_name}
          </div>
          {#if userProfile.title}
            <div class="text-[Exo 2] text-[24px] leading-7">
              {userProfile.title}
            </div>
          {:else}
            <div
              class="text-[Exo 2] text-[24px] leading-7 h-[48px] bg-[#282828] rounded-xl"
            ></div>
          {/if}
        </div>
        <div class="divide-solid divide-y-[16px]"></div>
      </div>
      <div class="py-8">
        <div class="text-[Fjalla One] font-bold text-[36px] tracking-tight">
          ABOUT ME
        </div>
        {#if userProfile.about}
          <div class="text-[Exo 2] text-[24px] leading-7">
            {userProfile.about}
          </div>
        {:else}
          <div
            class="text-[Exo 2] text-[24px] leading-7 h-[96px] bg-[#282828] rounded-xl"
          ></div>
        {/if}
      </div>
      <div class="py-8">
        <div class="text-[Fjalla One] font-bold text-[36px] tracking-tight">
          SKILLS
        </div>
        {#if skills.length > 0}
          <div class="text-[Exo 2] text-[24px] inline">
            {#each skills as skill, index}
              <div
                class="border-2 border-black text-[Fjalla One] text-[16px] font-bold rounded-[8px] px-2 py-0.5 mx-1 tracking-tight inline-block"
                id={index.toString()}
              >
                {skill}
              </div>
            {/each}
          </div>
        {:else}
          <div
            class="text-[Exo 2] text-[24px] leading-7 h-[96px] bg-[#282828] rounded-xl"
          ></div>
        {/if}
        <div class="divide-solid divide-y-[16px]"></div>
      </div>
      <div class="py-8">
        <div class="text-[Fjalla One] font-bold text-[36px] tracking-tight">
          DETAILS
        </div>
        <div class="text-[Fjalla One] text-[24px] px-4">
          <div class="w-full grid grid-cols-2 text-left">
            <div class="m-1">WEBSITE:</div>
            <div class="m-1">
              {#if userProfile.website_url}
                <div class="text-[Exo 2] text-[24px] leading-7">
                  {userProfile.website_url}
                </div>
              {:else}
                <div
                  class="text-[Exo 2] text-[24px] leading-7 h-[42px] bg-[#282828] rounded-xl"
                ></div>
              {/if}
            </div>
            <div class="m-1">PHONE:</div>
            <div class="m-1">
              {#if userProfile.phone}
                <div class="text-[Exo 2] text-[24px] leading-7">
                  {userProfile.phone}
                </div>
              {:else}
                <div
                  class="text-[Exo 2] text-[24px] leading-7 h-[42px] bg-[#282828] rounded-xl"
                ></div>
              {/if}
            </div>
            <div class="m-1">LOCATION:</div>
            <div class="m-1">
              {#if userProfile.location}
                <div class="text-[Exo 2] text-[24px] leading-7">
                  {userProfile.location}
                </div>
              {:else}
                <div
                  class="text-[Exo 2] text-[24px] leading-7 h-[42px] bg-[#282828] rounded-xl"
                ></div>
              {/if}
            </div>
            <div class="m-1">LANGUAGE:</div>
            <div class="flex flex-row gap-4 items-center">
              {#if languages.length > 0}
                {#each languages as language, index}{/each}
              {/if}
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
      <div class="border-4 border-[#282828] rounded-[25px] w-full p-4">
        <div class="text-[Fjalla One] font-bold text-[20px] tracking-tight">
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
        <div class="w-full flex justify-around item-center my-8 text-center">
          <p class="text-2xl font-semibold justify-center flex mx-10">
            200 FOLLOWING
          </p>
          <p class="text-2xl font-semibold justify-center flex mx-10">
            3596 FOLLOWERS
          </p>
        </div>
        <div class="w-full flex justify-around items-center">
          <button
            class="text-white font-bold bg-[#282828] px-8 py-1 border-4 border-[#282828] rounded-3xl text-[32px] tracking-tight"
          >
            FOLLOW
          </button>
          <button
            class="text-[#999] font-bold px-8 py-1 border-4 border-[#999] rounded-3xl text-[32px] tracking-tight"
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
              <Img src={svg_photo4} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>
            <div class="imgcontainer m-3">
              <Img src={svg_photo4} />
              <div class="overlay">
                <div class="text">Hello World</div>
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
              <Img src={svg_photo5} />
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
