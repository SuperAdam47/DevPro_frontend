<script>
  import { onMount } from "svelte";
  import { ToastContainer, FlatToast } from "svelte-toasts";
  import axios from "axios";
  import { BASE_URL } from "../../utils/constants";
  import { isAuthenticated } from "../../utils/auth";
  import { showToast } from "../../utils/toast";

  onMount(() => {
    if (!isAuthenticated()) {
      location.href = "/signin";
    } else {
      axios
        .get(`${BASE_URL}/protected`)
        .then((response) => {
          userProfile = response.data;
          console.log(userProfile);
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

  let userProfile;

  export let data;
  let mainChartColors = {};
  let trafficChannelsChartColors = {};
  let signupsChartColors = {};
  mainChartColors = {
    borderColor: "#374151",
    labelColor: "#9CA3AF",
    opacityFrom: 0,
    opacityTo: 0.15,
  };
  trafficChannelsChartColors = {
    strokeColor: "#1f2937",
  };
  signupsChartColors = {
    backgroundBarColors: [
      "#374151",
      "#374151",
      "#374151",
      "#374151",
      "#374151",
      "#374151",
      "#374151",
    ],
  };
  ///Chart
  import {
    Chart,
    Card,
    A,
    Button,
    Dropdown,
    DropdownItem,
  } from "flowbite-svelte";

  import {
    UserGroupSolid,
    ArrowUpSolid,
    ChevronDownSolid,
    ChevronRightSolid,
  } from "flowbite-svelte-icons";

  let options1 = {
    chart: {
      height: 420,
      type: "area",
      fontFamily: "Inter, sans-serif",
      foreColor: mainChartColors.labelColor,
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        enabled: true,
        opacityFrom: mainChartColors.opacityFrom,
        opacityTo: mainChartColors.opacityTo,
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif",
      },
    },
    grid: {
      show: true,
      borderColor: mainChartColors.borderColor,
      strokeDashArray: 1,
      padding: {
        left: 35,
        bottom: 15,
      },
    },
    series: [
      {
        name: "Revenue",
        data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
        color: "#1A56DB",
      },
      {
        name: "Revenue (previous period)",
        data: [6556, 6725, 6424, 6356, 6586, 6756, 6616],
        color: "#FDBA8C",
      },
    ],
    markers: {
      size: 5,
      strokeColors: "#ffffff",
      hover: {
        size: undefined,
        sizeOffset: 3,
      },
    },
    xaxis: {
      categories: [
        "01 Feb",
        "02 Feb",
        "03 Feb",
        "04 Feb",
        "05 Feb",
        "06 Feb",
        "07 Feb",
      ],
      labels: {
        style: {
          colors: [mainChartColors.labelColor],
          fontSize: "14px",
          fontWeight: 500,
        },
      },
      axisBorder: {
        color: mainChartColors.borderColor,
      },
      axisTicks: {
        color: mainChartColors.borderColor,
      },
      crosshairs: {
        show: true,
        position: "back",
        stroke: {
          color: mainChartColors.borderColor,
          width: 1,
          dashArray: 10,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: [mainChartColors.labelColor],
          fontSize: "14px",
          fontWeight: 500,
        },
        formatter: function (value) {
          return "$" + value;
        },
      },
    },
    legend: {
      fontSize: "14px",
      fontWeight: 500,
      fontFamily: "Inter, sans-serif",
      labels: {
        colors: [mainChartColors.labelColor],
      },
      itemMargin: {
        horizontal: 10,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          xaxis: {
            labels: {
              show: false,
            },
          },
        },
      },
    ],
  };

  let options2 = {
    colors: ["#1A56DB", "#FDBA8C"],
    series: [
      {
        name: "Quantity",
        color: "#1A56DB",
        data: [
          { x: "01 Feb", y: 170 },
          { x: "02 Feb", y: 180 },
          { x: "03 Feb", y: 164 },
          { x: "04 Feb", y: 145 },
          { x: "05 Feb", y: 194 },
          { x: "06 Feb", y: 170 },
          { x: "07 Feb", y: 155 },
        ],
      },
    ],
    chart: {
      type: "bar",
      height: "140px",
      fontFamily: "Inter, sans-serif",
      foreColor: "#4B5563",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "90%",
        borderRadius: 3,
      },
    },
    tooltip: {
      shared: false,
      intersect: false,
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 5,
      colors: ["transparent"],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  };

  let options3 = {
    series: [
      {
        name: "Users",
        data: [1334, 2435, 1753, 1328, 1155, 1632, 1336],
      },
    ],
    labels: [
      "01 Feb",
      "02 Feb",
      "03 Feb",
      "04 Feb",
      "05 Feb",
      "06 Feb",
      "07 Feb",
    ],
    chart: {
      type: "bar",
      height: "170px",
      foreColor: "#4B5563",
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    theme: {
      monochrome: {
        enabled: true,
        color: "#1A56DB",
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "25%",
        borderRadius: 3,
        colors: {
          backgroundBarColors: signupsChartColors.backgroundBarColors,
          backgroundBarRadius: 3,
        },
      },
      dataLabels: {
        hideOverflowingLabels: false,
      },
    },
    xaxis: {
      floating: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.8,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  };

  let options4 = {
    series: [
      {
        name: "Income",
        color: "#1A56DB",
        data: ["1420", "1620", "1820", "1420", "1650", "2120"],
      },
      {
        name: "Expense",
        data: ["788", "810", "866", "788", "1100", "1200"],
        color: "#F05252",
      },
    ],
    chart: {
      sparkline: {
        enabled: false,
      },
      type: "bar",
      width: "100%",
      height: "250px",
      toolbar: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "100%",
        borderRadiusApplication: "end",
        borderRadius: 6,
        dataLabels: {
          position: "top",
        },
      },
    },
    legend: {
      show: true,
      position: "bottom",
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      shared: true,
      intersect: false,
      formatter: function (value) {
        return "$" + value;
      },
    },
    xaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
        formatter: function (value) {
          return "$" + value;
        },
      },
      categories: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
        },
      },
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -20,
      },
    },
  };
  let options5 = {
    colors: ["#1A56DB", "#FDBA8C"],
    series: [
      {
        name: "Web developer",
        color: "#1A56DB",
        data: [
          { x: "01 Feb", y: 170 },
          { x: "02 Feb", y: 180 },
          { x: "03 Feb", y: 164 },
          { x: "04 Feb", y: 145 },
          { x: "05 Feb", y: 194 },
          { x: "06 Feb", y: 170 },
          { x: "07 Feb", y: 155 },
        ],
      },
      {
        name: "UI developer",
        color: "#FDBA8C",
        data: [
          { x: "01 Feb", y: 120 },
          { x: "02 Feb", y: 294 },
          { x: "03 Feb", y: 167 },
          { x: "04 Feb", y: 179 },
          { x: "05 Feb", y: 245 },
          { x: "06 Feb", y: 182 },
          { x: "07 Feb", y: 143 },
        ],
      },
      {
        name: "Scripting/Modeler",
        color: "#17B0BD",
        data: [
          { x: "01 Feb", y: 220 },
          { x: "02 Feb", y: 194 },
          { x: "03 Feb", y: 217 },
          { x: "04 Feb", y: 279 },
          { x: "05 Feb", y: 215 },
          { x: "06 Feb", y: 263 },
          { x: "07 Feb", y: 183 },
        ],
      },
    ],
    chart: {
      type: "bar",
      height: "420px",
      fontFamily: "Inter, sans-serif",
      foreColor: "#4B5563",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "90%",
        borderRadius: 3,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif",
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    stroke: {
      show: true,
      width: 5,
      colors: ["transparent"],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      floating: false,
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    fill: {
      opacity: 1,
    },
  };

  let options6 = {
    series: [70, 5, 25],
    labels: ["Web", "Mobile", "Roblox"],
    colors: ["#16BDCA", "#FDBA8C", "#1A56DB"],
    chart: {
      type: "donut",
      height: 400,
      fontFamily: "Inter, sans-serif",
      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 430,
        options: {
          chart: {
            height: 300,
          },
        },
      },
    ],
    stroke: {
      colors: [trafficChannelsChartColors.strokeColor],
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 0.9,
        },
      },
    },
    tooltip: {
      shared: true,
      followCursor: false,
      fillSeriesColor: false,
      inverseOrder: true,
      style: {
        fontSize: "14px",
        fontFamily: "Inter, sans-serif",
      },
      x: {
        show: true,
        formatter: function (_, { seriesIndex, w }) {
          const label = w.config.labels[seriesIndex];
          return label;
        },
      },
      y: {
        formatter: function (value) {
          return value + "%";
        },
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
  };
</script>

<svelte:head>
  <title>DevPro - Dashboard</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
  <button
    data-drawer-target="separator-sidebar"
    data-drawer-toggle="separator-sidebar"
    aria-controls="separator-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      />
    </svg>
  </button>

  <div class="p-4">
    <div class="p-2 rounded-lg">
      <div class="grid grid-cols-3 gap-4 mb-4">
        <Card class="max-w-none w-full col-span-2 dark:bg-primary-3">
          <div class="flex justify-between">
            <div>
              <h5
                class="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2"
              >
                32.4k
              </h5>
              <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                Revenue In this Week
              </p>
            </div>
            <div
              class="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center"
            >
              12%
              <ChevronRightSolid class="w-3 h-3 ml-1" />
            </div>
          </div>
          <Chart options={options1} />
          <div
            class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"
          >
            <div class="flex justify-between items-center pt-5">
              <Button
                class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0"
                >Last 7 days<ChevronDownSolid
                  class="w-2.5 m-2.5 ml-1.5"
                /></Button
              >
              <Dropdown class="w-40" offset="-6">
                <DropdownItem>Yesterday</DropdownItem>
                <DropdownItem>Today</DropdownItem>
                <DropdownItem>Last 7 days</DropdownItem>
                <DropdownItem>Last 30 days</DropdownItem>
                <DropdownItem>Last 90 days</DropdownItem>
              </Dropdown>
              <A
                href="/"
                class="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline"
              >
                Users Report
                <ChevronRightSolid class="w-2.5 h-2.5 ml-1.5" />
              </A>
            </div>
          </div>
        </Card>
        <!-- </div> -->

        <div
          class="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-primary-3"
        >
          <h3
            class="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white"
          >
            Statistics this month
            <button
              data-popover-target="popover-description"
              data-popover-placement="bottom-end"
              type="button"
              ><svg
                class="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                /></svg
              ><span class="sr-only">Show information</span></button
            >
          </h3>
          <div
            data-popover
            id="popover-description"
            role="tooltip"
            class="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400"
          >
            <div class="p-3 space-y-2">
              <h3 class="font-semibold text-gray-900 dark:text-white">
                Statistics
              </h3>
              <p>
                Statistics is a branch of applied mathematics that involves the
                collection, description, analysis, and inference of conclusions
                from quantitative data.
              </p>
              <a
                href="#"
                class="flex items-center font-medium text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700"
                >Read more <svg
                  class="w-4 h-4 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  /></svg
                ></a
              >
            </div>
            <div data-popper-arrow />
          </div>
          <div class="sm:hidden">
            <label for="tabs" class="sr-only">Select tab</label>
            <select
              id="tabs"
              class="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option>Statistics</option>
              <option>Services</option>
              <option>FAQ</option>
            </select>
          </div>
          <ul
            class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400"
            id="fullWidthTab"
            data-tabs-toggle="#fullWidthTabContent"
            role="tablist"
          >
            <li class="w-full">
              <button
                id="faq-tab"
                data-tabs-target="#faq"
                type="button"
                role="tab"
                aria-controls="faq"
                aria-selected="true"
                class="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                >Top Projects</button
              >
            </li>
            <li class="w-full">
              <button
                id="about-tab"
                data-tabs-target="#about"
                type="button"
                role="tab"
                aria-controls="about"
                aria-selected="false"
                class="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600"
                >Top Developers</button
              >
            </li>
          </ul>
          <div
            id="fullWidthTabContent"
            class="border-t border-gray-200 dark:border-gray-600"
          >
            <div
              class="hidden pt-4"
              id="faq"
              role="tabpanel"
              aria-labelledby="faq-tab"
            >
              <ul
                role="list"
                class="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li class="py-3 sm:py-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center min-w-0">
                      <img
                        class="flex-shrink-0 w-10 h-10"
                        src="/images/products/iphone.png"
                        alt="imac image"
                      />
                      <div class="ml-3">
                        <p
                          class="font-medium text-gray-900 truncate dark:text-white"
                        >
                          iPhone 14 Pro
                        </p>
                        <div
                          class="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400"
                        >
                          <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                            />
                          </svg>
                          2.5%
                          <span class="ml-2 text-gray-500">vs last month</span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                    >
                      $445,467
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center min-w-0">
                      <img
                        class="flex-shrink-0 w-10 h-10"
                        src="/images/products/imac.png"
                        alt="imac image"
                      />
                      <div class="ml-3">
                        <p
                          class="font-medium text-gray-900 truncate dark:text-white"
                        >
                          Apple iMac 27"
                        </p>
                        <div
                          class="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400"
                        >
                          <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                            />
                          </svg>
                          12.5%
                          <span class="ml-2 text-gray-500">vs last month</span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                    >
                      $256,982
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center min-w-0">
                      <img
                        class="flex-shrink-0 w-10 h-10"
                        src="/images/products/watch.png"
                        alt="watch image"
                      />
                      <div class="ml-3">
                        <p
                          class="font-medium text-gray-900 truncate dark:text-white"
                        >
                          Apple Watch SE
                        </p>
                        <div
                          class="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500"
                        >
                          <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                            />
                          </svg>
                          1.35%
                          <span class="ml-2 text-gray-500">vs last month</span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                    >
                      $201,869
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center min-w-0">
                      <img
                        class="flex-shrink-0 w-10 h-10"
                        src="/images/products/ipad.png"
                        alt="ipad image"
                      />
                      <div class="ml-3">
                        <p
                          class="font-medium text-gray-900 truncate dark:text-white"
                        >
                          Apple iPad Air
                        </p>
                        <div
                          class="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400"
                        >
                          <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                            />
                          </svg>
                          12.5%
                          <span class="ml-2 text-gray-500">vs last month</span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                    >
                      $103,967
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center min-w-0">
                      <img
                        class="flex-shrink-0 w-10 h-10"
                        src="/images/products/imac.png"
                        alt="imac image"
                      />
                      <div class="ml-3">
                        <p
                          class="font-medium text-gray-900 truncate dark:text-white"
                        >
                          Apple iMac 24"
                        </p>
                        <div
                          class="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500"
                        >
                          <svg
                            class="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                              d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                            />
                          </svg>
                          2%
                          <span class="ml-2 text-gray-500">vs last month</span>
                        </div>
                      </div>
                    </div>
                    <div
                      class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                    >
                      $98,543
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              class="hidden pt-4"
              id="about"
              role="tabpanel"
              aria-labelledby="about-tab"
            >
              <ul
                role="list"
                class="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="/images/users/neil-sims.png"
                        alt="Neil image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p
                        class="font-medium text-gray-900 truncate dark:text-white"
                      >
                        Neil Sims
                      </p>
                      <p
                        class="text-sm text-gray-500 truncate dark:text-gray-400"
                      >
                        email@flowbite.com
                      </p>
                    </div>
                    <div
                      class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                    >
                      $3320
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="/images/users/bonnie-green.png"
                        alt="Neil image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p
                        class="font-medium text-gray-900 truncate dark:text-white"
                      >
                        Bonnie Green
                      </p>
                      <p
                        class="text-sm text-gray-500 truncate dark:text-gray-400"
                      >
                        email@flowbite.com
                      </p>
                    </div>
                    <div
                      class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                    >
                      $2467
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="/images/users/michael-gough.png"
                        alt="Neil image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p
                        class="font-medium text-gray-900 truncate dark:text-white"
                      >
                        Michael Gough
                      </p>
                      <p
                        class="text-sm text-gray-500 truncate dark:text-gray-400"
                      >
                        email@flowbite.com
                      </p>
                    </div>
                    <div
                      class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                    >
                      $2235
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="/images/users/thomas-lean.png"
                        alt="Neil image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p
                        class="font-medium text-gray-900 truncate dark:text-white"
                      >
                        Thomes Lean
                      </p>
                      <p
                        class="text-sm text-gray-500 truncate dark:text-gray-400"
                      >
                        email@flowbite.com
                      </p>
                    </div>
                    <div
                      class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                    >
                      $1842
                    </div>
                  </div>
                </li>
                <li class="py-3 sm:py-4">
                  <div class="flex items-center space-x-4">
                    <div class="flex-shrink-0">
                      <img
                        class="w-8 h-8 rounded-full"
                        src="/images/users/lana-byrd.png"
                        alt="Neil image"
                      />
                    </div>
                    <div class="flex-1 min-w-0">
                      <p
                        class="font-medium text-gray-900 truncate dark:text-white"
                      >
                        Lana Byrd
                      </p>
                      <p
                        class="text-sm text-gray-500 truncate dark:text-gray-400"
                      >
                        email@flowbite.com
                      </p>
                    </div>
                    <div
                      class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                    >
                      $1044
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- Card Footer -->
          <div
            class="flex items-center justify-between pt-3 mt-5 border-t border-gray-200 sm:pt-6 dark:border-gray-700"
          >
            <div>
              <button
                class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                type="button"
                data-dropdown-toggle="stats-dropdown"
                >Last 7 days <svg
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  /></svg
                ></button
              >
              <!-- Dropdown menu -->
              <div
                class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="stats-dropdown"
              >
                <div class="px-4 py-3" role="none">
                  <p
                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                    role="none"
                  >
                    Sep 16, 2021 - Sep 22, 2021
                  </p>
                </div>
                <ul class="py-1" role="none">
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem">Yesterday</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem">Today</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem">Last 7 days</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem">Last 30 days</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem">Last 90 days</a
                    >
                  </li>
                </ul>
                <div class="py-1" role="none">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">Custom...</a
                  >
                </div>
              </div>
            </div>
            <div class="flex-shrink-0">
              <a
                href="#"
                class="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700"
              >
                Full Report
                <svg
                  class="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  ><path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  /></svg
                >
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- second Line -->
      <div class="grid grid-cols-3 gap-4 mb-4">
        <Card class="w-full max-w-none dark:bg-primary-3">
          <div
            class="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700"
          >
            <div class="flex items-center">
              <div
                class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3"
              >
                <UserGroupSolid
                  class="w-6 h-6 text-gray-500 dark:text-gray-400"
                />
              </div>
              <div class="w-full">
                <h3
                  class="text-base font-normal text-gray-500 dark:text-gray-400"
                >
                  New Projects
                </h3>
                <span
                  class="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white"
                  >2,340</span
                >
                <p
                  class="flex items-center text-base font-normal text-gray-500 dark:text-gray-400"
                >
                  <span
                    class="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400"
                  >
                    <svg
                      class="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"
                      />
                    </svg>
                    12.5%
                  </span>
                  Since last month
                </p>
              </div>
            </div>
            <div>
              <span
                class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300"
              >
                <ArrowUpSolid class="w-2.5 h-2.5 mr-1.5" />
                42.5%
              </span>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <dl class="flex items-center">
              <dt
                class="text-gray-500 dark:text-gray-400 text-sm font-normal mr-1"
              >
                Money spent:
              </dt>
              <dd class="text-gray-900 text-sm dark:text-white font-semibold">
                $3,232
              </dd>
            </dl>
            <dl class="flex items-center justify-end">
              <dt
                class="text-gray-500 dark:text-gray-400 text-sm font-normal mr-1"
              >
                Conversion rate:
              </dt>
              <dd class="text-gray-900 text-sm dark:text-white font-semibold">
                1.2%
              </dd>
            </dl>
          </div>

          <Chart options={options2} />
          <div
            class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"
          >
            <div class="flex justify-between items-center pt-5">
              <Button
                class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0"
                >Last 7 days<ChevronDownSolid
                  class="w-2.5 m-2.5 ml-1.5"
                /></Button
              >
              <Dropdown class="w-40" offset="-6">
                <DropdownItem>Yesterday</DropdownItem>
                <DropdownItem>Today</DropdownItem>
                <DropdownItem>Last 7 days</DropdownItem>
                <DropdownItem>Last 30 days</DropdownItem>
                <DropdownItem>Last 90 days</DropdownItem>
              </Dropdown>
              <A
                href="/"
                class="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline"
              >
                Leads Report
                <ChevronRightSolid class="w-2.5 h-2.5 ml-1.5" />
              </A>
            </div>
          </div>
        </Card>

        <Card class="w-full max-w-none dark:bg-primary-3">
          <div
            class="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700"
          >
            <div class="flex items-center">
              <div
                class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3"
              >
                <UserGroupSolid
                  class="w-6 h-6 text-gray-500 dark:text-gray-400"
                />
              </div>
              <div>
                <h5
                  class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1"
                >
                  3.4k
                </h5>
                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Leads generated per week
                </p>
              </div>
            </div>
            <div>
              <span
                class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300"
              >
                <ArrowUpSolid class="w-2.5 h-2.5 mr-1.5" />
                42.5%
              </span>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <dl class="flex items-center">
              <dt
                class="text-gray-500 dark:text-gray-400 text-sm font-normal mr-1"
              >
                Money spent:
              </dt>
              <dd class="text-gray-900 text-sm dark:text-white font-semibold">
                $3,232
              </dd>
            </dl>
            <dl class="flex items-center justify-end">
              <dt
                class="text-gray-500 dark:text-gray-400 text-sm font-normal mr-1"
              >
                Conversion rate:
              </dt>
              <dd class="text-gray-900 text-sm dark:text-white font-semibold">
                1.2%
              </dd>
            </dl>
          </div>
          <Chart options={options3} />
          <div
            class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"
          >
            <div class="flex justify-between items-center pt-5">
              <Button
                class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0"
                >Last 7 days<ChevronDownSolid
                  class="w-2.5 m-2.5 ml-1.5"
                /></Button
              >
              <Dropdown class="w-40" offset="-6">
                <DropdownItem>Yesterday</DropdownItem>
                <DropdownItem>Today</DropdownItem>
                <DropdownItem>Last 7 days</DropdownItem>
                <DropdownItem>Last 30 days</DropdownItem>
                <DropdownItem>Last 90 days</DropdownItem>
              </Dropdown>
              <A
                href="/"
                class="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline"
              >
                Leads Report
                <ChevronRightSolid class="w-2.5 h-2.5 ml-1.5" />
              </A>
            </div>
          </div>
        </Card>
        <Card class="w-full max-w-none dark:bg-primary-3">
          <div
            class="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700"
          >
            <div class="flex items-center">
              <div
                class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3"
              >
                <UserGroupSolid
                  class="w-6 h-6 text-gray-500 dark:text-gray-400"
                />
              </div>
              <div>
                <h5
                  class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1"
                >
                  3.4k
                </h5>
                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Leads generated per week
                </p>
              </div>
            </div>
            <div>
              <span
                class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300"
              >
                <ArrowUpSolid class="w-2.5 h-2.5 mr-1.5" />
                42.5%
              </span>
            </div>
          </div>

          <Chart options={options4} />
        </Card>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <Card class="w-full max-w-none dark:bg-primary-3">
          <div
            class="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700"
          >
            <div class="flex items-center">
              <div
                class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3"
              >
                <UserGroupSolid
                  class="w-6 h-6 text-gray-500 dark:text-gray-400"
                />
              </div>
              <div>
                <h5
                  class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1"
                >
                  3.4k
                </h5>
                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Leads generated per week
                </p>
              </div>
            </div>
            <div>
              <span
                class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300"
              >
                <ArrowUpSolid class="w-2.5 h-2.5 mr-1.5" />
                42.5%
              </span>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <dl class="flex items-center">
              <dt
                class="text-gray-500 dark:text-gray-400 text-sm font-normal mr-1"
              >
                Money spent:
              </dt>
              <dd class="text-gray-900 text-sm dark:text-white font-semibold">
                $3,232
              </dd>
            </dl>
            <dl class="flex items-center justify-end">
              <dt
                class="text-gray-500 dark:text-gray-400 text-sm font-normal mr-1"
              >
                Conversion rate:
              </dt>
              <dd class="text-gray-900 text-sm dark:text-white font-semibold">
                1.2%
              </dd>
            </dl>
          </div>
          <Chart options={options5} />
          <div
            class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"
          >
            <div class="flex justify-between items-center pt-5">
              <Button
                class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0"
                >Last 7 days<ChevronDownSolid
                  class="w-2.5 m-2.5 ml-1.5"
                /></Button
              >
              <Dropdown class="w-40" offset="-6">
                <DropdownItem>Yesterday</DropdownItem>
                <DropdownItem>Today</DropdownItem>
                <DropdownItem>Last 7 days</DropdownItem>
                <DropdownItem>Last 30 days</DropdownItem>
                <DropdownItem>Last 90 days</DropdownItem>
              </Dropdown>
              <A
                href="/"
                class="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline"
              >
                Leads Report
                <ChevronRightSolid class="w-2.5 h-2.5 ml-1.5" />
              </A>
            </div>
          </div>
        </Card>
        <Card class="w-full max-w-none dark:bg-primary-3">
          <div
            class="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700"
          >
            <div class="flex items-center">
              <div
                class="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center mr-3"
              >
                <UserGroupSolid
                  class="w-6 h-6 text-gray-500 dark:text-gray-400"
                />
              </div>
              <div>
                <h5
                  class="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1"
                >
                  3.4k
                </h5>
                <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                  Leads generated per week
                </p>
              </div>
            </div>
            <div>
              <span
                class="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300"
              >
                <ArrowUpSolid class="w-2.5 h-2.5 mr-1.5" />
                42.5%
              </span>
            </div>
          </div>
          <div class="grid grid-cols-2">
            <dl class="flex items-center">
              <dt
                class="text-gray-500 dark:text-gray-400 text-sm font-normal mr-1"
              >
                Money spent:
              </dt>
              <dd class="text-gray-900 text-sm dark:text-white font-semibold">
                $3,232
              </dd>
            </dl>
            <dl class="flex items-center justify-end">
              <dt
                class="text-gray-500 dark:text-gray-400 text-sm font-normal mr-1"
              >
                Conversion rate:
              </dt>
              <dd class="text-gray-900 text-sm dark:text-white font-semibold">
                1.2%
              </dd>
            </dl>
          </div>
          <Chart options={options6} />
          <div
            class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between"
          >
            <div class="flex justify-between items-center pt-5">
              <Button
                class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent focus:ring-transparent dark:focus:ring-transparent py-0"
                >Last 7 days<ChevronDownSolid
                  class="w-2.5 m-2.5 ml-1.5"
                /></Button
              >
              <Dropdown class="w-40" offset="-6">
                <DropdownItem>Yesterday</DropdownItem>
                <DropdownItem>Today</DropdownItem>
                <DropdownItem>Last 7 days</DropdownItem>
                <DropdownItem>Last 30 days</DropdownItem>
                <DropdownItem>Last 90 days</DropdownItem>
              </Dropdown>
              <A
                href="/"
                class="uppercase text-sm font-semibold hover:text-primary-700 dark:hover:text-primary-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2 hover:no-underline"
              >
                Leads Report
                <ChevronRightSolid class="w-2.5 h-2.5 ml-1.5" />
              </A>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>

  <ToastContainer let:data>
    <FlatToast {data} />
  </ToastContainer>
</div>
