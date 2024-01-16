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

  function handleVoiceBtn() {
    alert("You clicked voice button");
  }
</script>

<svelte:head>
  <title>FAQ</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <Card class="w-full max-w-5xl dark:bg-primary-0  dark:text-primary-1 ">
    <div class="pb-5 flex flex-col justify-center align-middle">
      <div class="grid grid-cols-4 gap-20 mt-3">
        <div class="col-span-1 mt-10">
          <Avatar src={profile_img} size="xl" />
        </div>
        <div class="col-span-2 justify-center items-center flex flex-col">
          <div class="flex items-center justify-center">
            <p class="text-5xl font-semibold my-6 justify-center flex">
              JACK KOLINEN
            </p>
            <Img src={svg_star} alt="SVG-Change" class="w-15 h-15 ml-2" />
          </div>
          <p class="text-2xl font-semibold justify-center flex">SOUND ARTIST</p>
          <div class="flex mt-12">
            <p class="text-2xl font-semibold justify-center flex mx-10">
              200 FOLLOWING
            </p>
            <p class="text-2xl font-semibold justify-center flex mx-10">
              3596 FOLLOWERS
            </p>
          </div>
        </div>
        <div class="col-span-1">
          <Button size="md" class="!bg-primary-1 text-xl mt-20 px-8"
            >Follow</Button
          >
          <Button size="md" class="!bg-primary-1 text-xl my-5">Message</Button>
        </div>
      </div>

      <Tabs
        style="underline"
        defaultClass="flex rounded-lg  text-primary-1 shadow dark:text-primary-1"
        activeClasses="flex rounded-lg  text-primary-1 shadow dark:text-primary-1"
        inactiveClasses="flex rounded-lg  text-primary-1 shadow dark:text-primary-1"
      >
        <TabItem open title="POSTS">
          <div class="flex flex-row flex-wrap mb-6">
            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo1} />
              <div class="overlay">
                <div class="text">KingTran</div>
              </div>
            </div>
            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo2} />
              <div class="overlay">
                <div class="text">Boris</div>
              </div>
            </div>
            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo3} class="w-50 h-50" />
              <div class="overlay">
                <div class="text">Lewis</div>
              </div>
            </div>
            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo4} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>

            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo5} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>

            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo6} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>
            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo6} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>
            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo6} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>
          </div>
        </TabItem>
        <TabItem title="VIDEOS">
          <div class="flex flex-row flex-wrap mb-6">
            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo1} />
              <div class="overlay">
                <div class="text">KingTran</div>
              </div>
            </div>
            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo2} />
              <div class="overlay">
                <div class="text">Boris</div>
              </div>
            </div>

            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo6} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>
            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo6} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>
          </div>
        </TabItem>
        <TabItem title="SHOP">
          <div class="flex flex-row flex-wrap mb-6">
            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo6} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>
            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo6} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>
            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo6} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>
            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo1} />
              <div class="overlay">
                <div class="text">KingTran</div>
              </div>
            </div>
            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo2} />
              <div class="overlay">
                <div class="text">Boris</div>
              </div>
            </div>
            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo3} class="w-50 h-50" />
              <div class="overlay">
                <div class="text">Lewis</div>
              </div>
            </div>
            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo4} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>

            <div class="imgcontainer m-3 w-52 h-52">
              <Img src={svg_photo5} />
              <div class="overlay">
                <div class="text">Hello World</div>
              </div>
            </div>
          </div>
        </TabItem>
      </Tabs>
    </div>
  </Card>
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
