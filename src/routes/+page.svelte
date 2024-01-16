<script>
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

  let isHovered = false;

  import { Img, Button, Search } from "flowbite-svelte";
  import { Gallery } from "flowbite-svelte";
  import { MicrophoneSolid, SearchOutline } from "flowbite-svelte-icons";

  function handleVoiceBtn() {
    alert("You clicked voice button");
  }
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- <section>
	<h2>
		try editing <strong>src/routes/+page.svelte</strong>
	</h2>
	<Counter />
</section> -->

<section>
  <div class="pb-16 flex flex-col justify-center align-middle">
    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col mt-16">
        <p class="text-6xl font-semibold">FIND THE PERFECT DEVELOPER</p>
        <p class="text-3xl font-medium my-3">
          When it comes to game development, time is of the essence. That's why
          we've made it easy to find and hire the right game developers for your
          project.
        </p>
      </div>
      <div><Img src={svg_banner} alt="sample 1" /></div>
    </div>
    <div class="p-4 flex flex-row justify-center my-6">
      <form class="flex gap-2 basis-1/2">
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

    <!-- Carousel -->
    <div class="flex flex-row px-10 bg-primary-100 rounded-lg p-5 my-3">
      <div class="basis-1/4 flex items-center">
        <p class="text-md font-medium text-neutral-400 py-1 text-center">
          DEVELOPERS FROM ALL TRUSTED COMMUNITIES
        </p>
      </div>
      <div class="basis-1/4 mx-3">
        <Img src={svg_car1} />
      </div>

      <div class="basis-1/4 mx-3">
        <Img src={svg_car2} />
      </div>

      <div class="basis-1/4 mx-3">
        <Img src={svg_car3} />
      </div>
    </div>

    <p class="text-6xl font-semibold text-white flex justify-center mt-16">
      How It Works
    </p>
    <div class="grid grid-cols-2 gap-4 mt-3">
      <div><Img src={svg_computer} alt="sample 1" /></div>
      <div class="flex flex-col mt-16 align-middle">
        <p class="text-4xl font-semibold text-white mb-4">As a freelancer</p>
        <div class="flex flex-row">
          <Img src={svg_freelancer3} />
          <p class="text-4xl font-semibold mt-3 ml-3">SET UP YOUR PROFILE</p>
        </div>

        <p class="text-xl font-medium my-3">
          Build out your profile page with a profile picture & biography.
          Showcase your talent and connect with other developers.
        </p>

        <div class="flex flex-row">
          <Img src={svg_freelancer1} />
          <p class="text-4xl font-semibold mt-3 ml-3">COMPLETE TASKS</p>
        </div>
        <p class="text-xl font-medium my-3">
          Find what is best for you through our job catalog. DevPro hold
          thousands of tasks for all kinds of game development.
        </p>
        <div class="flex flex-row">
          <Img src={svg_freelancer2} />
          <p class="text-4xl font-semibold mt-3 ml-3">EARN MONEY</p>
        </div>
        <p class="text-xl font-medium my-3">
          Earn money as you go and withdraw funds at any time. Sign up today and
          start earning.
        </p>
      </div>
    </div>

    <div class="flex justify-center">
      <Img src={svg_change} alt="SVG-Change" />
    </div>
    <div class="grid grid-cols-2 gap-4 mt-3">
      <div class="flex flex-col mt-16 align-middle">
        <p class="text-4xl font-semibold text-white mb-4">As a buyer</p>
        <div class="flex flex-row">
          <Img src={svg_buyer1} />
          <p class="text-4xl font-semibold mt-3 ml-3">CHOOSE YOUR FREELANCER</p>
        </div>

        <p class="text-xl font-medium my-3">
          Our freelancers are not just talented individuals, but also part of a
          collaborative community. With their support, you'll be able to create
          a game that reflects your vision and values.
        </p>
        <div class="flex flex-row">
          <Img src={svg_buyer2} />
          <p class="text-4xl font-semibold mt-3 ml-3">SUBMIT YOUR REQUEST</p>
        </div>

        <p class="text-xl font-medium my-3">
          Give a detailed description of what you’re looking for. Communicate
          through DevPro to discuss your project and get your questions
          answered.
        </p>
        <div class="flex flex-row">
          <Img src={svg_buyer3} />
          <p class="text-4xl font-semibold mt-3 ml-3">SIT BACK AND RELAX</p>
        </div>

        <p class="text-xl font-medium my-3">
          You will be notified as soon as your project is complete. Review the
          product to make sure it meets your expectations before finalizing the
          order.
        </p>
      </div>
      <div><Img src={svg_dolllaugh} alt="sample 1" /></div>
    </div>
    <!--  -->
    <div class="mt-12">
      <p class="text-6xl font-semibold text-white my-3">MEET</p>
      <p class="text-xl font-medium text-neutral-400 my-3">
        Check out some of the top-tier freelancers in DevPro
      </p>
      <div class="flex flex-row cols-3 flex-wrap mb-6">
        <div class="imgcontainer m-3">
          <Img src={svg_photo1} />
          <div class="overlay">
            <div class="text">KingTran</div>
            <div class="text2">
              KingTran is a good IT business man who is very youth and so
              kindly. In his free time, KingTran enjoys thinking great idea for
              IT business and also have deep understanding in new techniques.
            </div>
          </div>
        </div>
        <div class="imgcontainer m-3">
          <Img src={svg_photo2} />
          <div class="overlay">
            <div class="text">Boris</div>
            <div class="text2">
              Boris is a senior fullstack developer with almost 12 years.He has
              eich experinece in web and mobile app development.
            </div>
          </div>
        </div>
        <div class="imgcontainer m-3">
          <Img src={svg_photo3} />
          <div class="overlay">
            <div class="text">Lewis</div>
            <div class="text2">
              Lewis is a sound FX artist who has worked on a variety of films,
              TV shows, and video games. He was born on July 12, 1985, in Los
              Angeles, California.
            </div>
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
      </div>
    </div>
    <!-- Create your Profile -->
    <div class="grid grid-cols-2 gap-4 mt-3">
      <div><Img src={svg_computer} alt="sample 1" /></div>
      <div class="flex flex-col mt-16 align-middle">
        <p class="text-6xl font-semibold text-white my-3">JOIN US TODAY</p>
        <p class="text-3xl font-semibold text-white mb-4 mt-5 p-3">
          Create your Profile, 100% free!
        </p>
        <p class="text-3xl font-semibold text-white mb-4 p-3">
          Join our community of 1000+ developers
        </p>
        <p class="text-3xl font-semibold text-white mb-4 p-3">
          Showcase your talent
        </p>
        <p class="text-3xl font-semibold text-white mb-4 p-3">
          Connect with other skilled creators
        </p>
        <div class="px-4">
          <Button
            class="!bg-primary-1 text-xl font-semibold"
            href="/create-profile">CREATE YOUR PROFILE</Button
          >
        </div>
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
