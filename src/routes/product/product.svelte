<script>
  import { Img, Button, Search } from "flowbite-svelte";
  import productImage from "$lib/images/product.png";
  import proifleIcon from "$lib/images/profile-icon.svg";
  import fireSolidIcon from "$lib/images/fire-solid.svg";
  // import topRatedIcon from "$lib/images/top-rated.svg";
  import {
    MicrophoneSolid,
    SearchOutline,
    HeartOutline,
    MessagesOutline,
    FireSolid,
  } from "flowbite-svelte-icons";

  export let product;
  export let index;

  let isHover = false;

  const handleMouse = (event) => {
    if (event === "over") isHover = true;
    else if (event === "out") isHover = false;
  };
</script>

<div
  class="bg-[#282828] w-full rounded-xl border-[1px] border-[#FF8A00] hover:opacity-50"
  on:mouseover={() => {
    handleMouse("over");
  }}
  on:mouseout={() => {
    handleMouse("out");
  }}
>
  <div class="w-full relative">
    <div class="w-full">
      <Img src={productImage} class="rounded-t-xl w-full" />
      <div class="absolute top-1 p-4 flex justify-between w-full">
        <HeartOutline
          class="left-[16px] top-[8px] text-white w-[32px] h-[24px] "
        />
        <div
          class=" bg-[#282828] rounded-[7px] w-[68px] h-[20px] flex justify-center items-center gap-[2px]"
        >
          <span class="text-[9px] font-normal font-['hammersmith one']">
            TOP RATED
          </span>
          <FireSolid class="w-[9px] h-[11px]" />
        </div>
      </div>
    </div>
    <div
      class="absolute top-[40%] w-full text-center font-bold text-3xl {isHover
        ? ''
        : 'invisible'} "
    >
      @kingtran
    </div>
  </div>
  <div class="flex relative justify-between items-end p-3 mt-[-44px]">
    <div
      class="w-[72px] h-[72px] rounded-[50%] border-[6px] border-[#282828] bg-[#FF8A00]"
    ></div>
    <div>
      <div class="flex flex-row gap-1">
        <div
          class="box-border h-[14px] w-[14px] bg-[#FF8A00] rounded-[50px]"
        ></div>
        <div
          class="box-border h-[14px] w-[14px] bg-[#FF8A00] rounded-[50px]"
        ></div>
        <div
          class="box-border h-[14px] w-[14px] bg-[#FF8A00] rounded-[50px]"
        ></div>
        <div
          class="box-border h-[14px] w-[14px] bg-[#FF8A00] rounded-[50px]"
        ></div>
        <div class="box-border h-[14px] w-[14px] bg-white rounded-[50px]"></div>
      </div>
      <div class="italic">
        <span class="text-[11px]">4.1</span>
        <span class="text-[8px]">(132 reviews)</span>
      </div>
    </div>
  </div>
  <div
    class="text-[13px] my-[8px] mx-[16px] leading-4 font-['hammersmith one'] h-[32px] line-clamp-2"
  >
    I will design a full website using the necessary tools, including
    corrections.
  </div>
  <div class="p-4 flex justify-between items-center w-full">
    <span class="text-[10px]"> {isHover ? "" : "@kingtran"}</span>
    <div class="flex flex-row gap-2">
      <div
        class="button bg-[#363636] w-[32px] h-[26px] rounded-[5px] flex justify-center items-center"
      >
        <MessagesOutline />
      </div>
      <button
        class="text-[10px] bg-[#363636] font-normal px-[8px] py-[4px] rounded-[5px] font-['hammersmith one']"
      >
        VIEW PROFILE
      </button>
    </div>
  </div>
</div>

<style>
</style>
