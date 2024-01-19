<script>
  import { onMount } from "svelte";
  import { Card, Button, Label, Input, Checkbox } from "flowbite-svelte";
  import axios from "axios";
  import { ToastContainer, FlatToast } from "svelte-toasts";
  import { isAuthenticated } from "../../utils/auth";
  import { showToast } from "../../utils/toast";
  import { BASE_URL } from "../../utils/constants";

  onMount(() => {
    if (isAuthenticated()) {
      axios
        .get(`${BASE_URL}/protected`)
        .then((response) => {
          console.log(response.data);
          location.href = "/dashboard";
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
    let userData = localStorage.getItem("userData");
    if (userData !== null && userData !== "") {
      formData.email = JSON.parse(userData)["email"];
    }
  });

  let formData = {
    email: "",
  };

  let isAgreed = false;

  let headers = {
    "Content-Type": "application/json",
  };

  const handleCheck = () => {
    isAgreed = !isAgreed;
  };

  const handleSubmit = () => {
    if (!isAgreed) {
      showToast(
        "Warning",
        "Please accept the Terms of Service & Privacy Policy",
        "warning"
      );
    } else {
      axios
        .post(`${BASE_URL}/user/forgot-password`)
        .then((response) => {
          let data = response.data;
          console.log(data);
          showToast("Success", "Sending Successfully", "success");
        })
        .catch((error) => {
          console.log();
          showToast("Failed", "Sending Failed", "error");
        });
    }
  };
</script>

<svelte:head>
  <title>DevPro - ForgotPassword</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex justify-center items-center mt-32">
  <Card class="w-full max-w-lg bg-primary-3 ">
    <form
      class="flex flex-col space-y-6"
      on:submit|preventDefault={handleSubmit}
    >
      <h1 class=" font-medium text-white dark:text-white">Forgot Password?</h1>
      <h2>
        Don't fret! Just type in your email and we will send you a code to reset
        your password!
      </h2>
      <Label class="space-y-2">
        <p class="text-xl font-medium my-3 text-white">Your email</p>
        <Input
          class="text-xl"
          type="email"
          name="email"
          placeholder="name@gmail.com"
          bind:value={formData.email}
          required
        />
      </Label>

      <div class="flex items-start">
        <Checkbox class="text-white" on:change={handleCheck}>
          I accept the Terms and Conditions
        </Checkbox>
      </div>
      <Button type="submit" class="w-full text-xl bg-primary-1">
        Reset Password
      </Button>
    </form>
  </Card>
  <ToastContainer let:data>
    <FlatToast {data} />
  </ToastContainer>
</div>

<style>
</style>
