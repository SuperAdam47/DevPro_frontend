<script>
  import faq_banner from "$lib/images/FAQ-hero.png";
  import svg_question from "$lib/images/svg-question.svg";
  import svg_chat from "$lib/images/svg-chat.svg";
  import svg_message from "$lib/images/svg-message.svg";

  import { Img, Button, Search } from "flowbite-svelte";

  import {
    Textarea,
    Toolbar,
    ToolbarGroup,
    ToolbarButton,
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
  <div class="pb-16 flex flex-col justify-center align-middle">
    <div class="flex flex-row justify-center">
      <Img src={faq_banner} alt="sample 1" />
    </div>

    <div class="flex flex-row my-6 pt-12">
      <Img src={svg_question} />
      <p class="text-5xl font-semibold mt-3 ml-3 text-white">FAQ</p>
    </div>
    <p class="text-xl font-medium my-3 text-white">
      Our most common questions will be displayed here. If you do not see a
      question or need to talk to a specialist, click here. Our FAQ is split
      into sections. Please click below for quick access:
    </p>

    <div class="p-4 flex flex-row justify-center my-6">
      <form class="flex gap-2 basis-2/3">
        <Search
          size="lg"
          class="flex gap-2 items-center"
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
    <div class="flex flex-col items-start">
      <button class="text-xl font-semibold mt-3 ml-3">GENERAL</button>
      <button class="text-xl font-semibold mt-3 ml-3"
        >ACCOUNT INFORMATION</button
      >
      <button class="text-xl font-semibold mt-3 ml-3">MARKETPLACE</button>
      <button class="text-xl font-semibold mt-3 ml-3">ORDERS</button>
      <button class="text-xl font-semibold mt-3 ml-3">POLICY & RULES</button>
      <button class="text-xl font-semibold mt-3 ml-3">PAYMENT</button>
      <button class="text-xl font-semibold mt-3 ml-3">HELP</button>
    </div>
    <div class="h-2 bg-primary-3 my-6" />

    <p class="text-4xl font-semibold mt-3 my-6">GENERAL</p>
    <div class="mb-8">
      <p class="text-2xl font-semibold mt-3 text-white">
        HOW DO I CREATE AN ACCOUNT?
      </p>
      <p class="text-xl font-medium mt-3 text-primary-5">
        You can find your account by clicking on Dashboard. Another way you can
        access your account is through the search bar.
      </p>
    </div>
    <div class="mb-8">
      <p class="text-2xl font-semibold mt-3 text-white">
        WHAT ARE THE ALLOWED PAYMENT METHODS?
      </p>
      <p class="text-xl font-medium mt-3 text-primary-5">Answer goes here.</p>
    </div>
    <div class="mb-8">
      <p class="text-2xl font-semibold mt-3 text-white">
        HOW CAN I CONTACT CUSTOMER SUPPORT?
      </p>
      <p class="text-xl font-medium mt-3 text-primary-5">Answer goes here.</p>
    </div>
    <div class="mb-8">
      <p class="text-2xl font-semibold mt-3 text-white">
        HOW CAN I UNSUBSCRIBE FROM DEVPRO’S NEWSLETTER?
      </p>
      <p class="text-xl font-medium mt-3 text-primary-5">Answer goes here.</p>
    </div>

    <!-- 3part -->
    <p class="text-4xl font-semibold mt-3 my-6">ACCOUNT INFORMATION</p>
    <div class="mb-8">
      <p class="text-2xl font-semibold mt-3 text-white">
        WHERE CAN I ACCESS MY ORDER?
      </p>
      <p class="text-xl font-medium mt-3 text-primary-5">
        You can find your account by clicking on Dashboard. Another way you can
        access your account is through the search bar.
      </p>
    </div>
    <div class="mb-8">
      <p class="text-2xl font-semibold mt-3 text-white">
        HOW CAN I CHANGE/RESET MY PASSWORD?
      </p>
      <p class="text-xl font-medium mt-3 text-primary-5">Answer goes here.</p>
    </div>
    <div class="mb-8">
      <p class="text-2xl font-semibold mt-3 text-white">
        HOW CAN I CLOSE MY ACCOUNT?
      </p>
      <p class="text-xl font-medium mt-3 text-primary-5">Answer goes here.</p>
    </div>
    <div class="mb-8">
      <p class="text-2xl font-semibold mt-3 text-white">
        WHERE CAN I ACCESS MY ACCOUNT?
      </p>
      <p class="text-xl font-medium mt-3 text-primary-5">Answer goes here.</p>
    </div>

    <!-- 3part -->
    <p class="text-4xl font-semibold mt-3 my-6">MARKETPLACE</p>
    <div class="mb-3">
      <p class="text-2xl font-semibold mt-3 text-white">
        WHAT ARE THE TERMS & CONDITIONS?
      </p>
      <p class="text-xl font-medium mt-3 text-primary-5">
        You can find your account by clicking on Dashboard. Another way you can
        access your account is through the search bar.
      </p>
    </div>

    <!-- 4 part -->
    <div class="h-2 bg-primary-3 my-6" />

    <!-- 5part -->
    <p class="text-5xl font-semibold my-6 ml-3 justify-center flex">
      DON’T SEE YOUR QUESTION?
    </p>

    <div class="grid grid-cols-2 gap-20 mt-3">
      <div>
        <div class="grid grid-cols-4">
          <div class="col-span-3 pr-3">
            <p class="text-3xl font-semibold mt-3 text-white">CONTACT US</p>
            <p class="text-xl font-medium mt-3 text-primary-5">
              Send an email and our team will reach out as soon as possible.
            </p>
          </div>
          <div class="col-span-1 pl-6 pt-5">
            <Img src={svg_message} />
          </div>
        </div>
        <form class="flex flex-col space-y-6" action="/">
          <div class="grid grid-cols-2 gap-4">
            <Label class="space-y-2">
              <p class="text-xl font-medium my-2 text-white">FristName</p>
              <Input
                class="text-xl"
                type="text"
                name="text"
                placeholder=""
                required
              />
            </Label>
            <Label class="space-y-2">
              <p class="text-xl font-medium my-2 text-white">LastName</p>
              <Input
                class="text-xl"
                type="text"
                name="text"
                placeholder=""
                required
              />
            </Label>
          </div>
          <Label class="space-y-2">
            <p class="text-xl font-medium my-2 text-white">Email Address</p>
            <Input
              class="text-xl"
              type="email"
              name="email"
              placeholder="name@gmail.com"
              required
            />
          </Label>

          <Label class="space-y-2">
            <Textarea
              id="editor"
              rows="6"
              class="mb-4 text-xl"
              placeholder="Write a comment"
            >
              <Toolbar slot="header" embedded>
                <ToolbarGroup>
                  <ToolbarButton name="Attach file"
                    ><PaperClipOutline
                      class="w-5 h-5 rotate-45"
                    /></ToolbarButton
                  >
                  <ToolbarButton name="Embed map"
                    ><MapPinAltSolid class="w-5 h-5" /></ToolbarButton
                  >
                  <ToolbarButton name="Upload image"
                    ><ImageOutline class="w-5 h-5" /></ToolbarButton
                  >
                </ToolbarGroup>
                <ToolbarGroup>
                  <ToolbarButton name="Format code"
                    ><CodeOutline class="w-5 h-5" /></ToolbarButton
                  >
                  <ToolbarButton name="Add emoji"
                    ><FaceGrinOutline class="w-5 h-5" /></ToolbarButton
                  >
                </ToolbarGroup>
                <ToolbarButton name="send" slot="end"
                  ><PapperPlaneOutline
                    class="w-5 h-5 rotate-45"
                  /></ToolbarButton
                >
              </Toolbar>
            </Textarea>
          </Label>
          <div class="flex flex-row justify-end content-center">
            <Checkbox class="text-white text-xl"
              ><p class="text-lg">I am not a robot.</p></Checkbox
            >
            <Button href="" type="submit" class="text-xl ml-5 bg-primary-1"
              >Send</Button
            >
          </div>
        </form>
      </div>
      <div>
        <div class="grid grid-cols-4 mb-3">
          <div class="col-span-3 pr-3">
            <p class="text-3xl font-semibold mt-3 text-white">CHAT</p>
            <p class="text-xl font-medium mt-3 text-primary-5">
              Speak to a specialist.
            </p>
          </div>
          <div class="col-span-1 pl-6 pt-5">
            <Img src={svg_chat} />
          </div>
        </div>
        <form class="flex flex-col space-y-6" action="/">
          <Label class="space-y-2">
            <p class="text-xl font-medium my-2 text-white">FristName</p>
            <Input
              class="text-xl"
              type="text"
              name="text"
              placeholder=""
              required
            />
          </Label>
          <Label class="space-y-2">
            <p class="text-xl font-medium my-2 text-white">LastName</p>
            <Input
              class="text-xl"
              type="text"
              name="text"
              placeholder=""
              required
            />
          </Label>
          <Label class="space-y-2">
            <p class="text-xl font-medium my-2 text-white">Email Address</p>
            <Input
              class="text-xl"
              type="email"
              name="email"
              placeholder="name@gmail.com"
              required
            />
          </Label>

          <div class="flex flex-row justify-end content-center">
            <Checkbox class="text-white text-xl"
              ><p class="text-lg">I am not a robot.</p></Checkbox
            >
            <Button href="" type="submit" class="text-xl ml-5 bg-primary-1"
              >Send</Button
            >
          </div>
        </form>
      </div>
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
