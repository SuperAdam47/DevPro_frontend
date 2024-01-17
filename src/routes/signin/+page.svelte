<script>
  import { onMount } from "svelte";
  import { Card, Button, Label, Input, Checkbox } from "flowbite-svelte";
  import axios from "axios";
  import { ToastContainer, FlatToast } from "svelte-toasts";

  import { BASE_URL } from "../../utils/constants";
  import { setSession, isAuthenticated } from "../../utils/auth";
  import { showToast } from "../../utils/toast";

  onMount(() => {
    if (isAuthenticated()) {
      location.href = "/dashboard";
    }
  });

  const formData = {
    email: "",
    password: "",
  };

  const headers = {
    "Content-Type": "application/json",
  };

  const handleSubmit = () => {
    axios
      .post(`${BASE_URL}/user/login`, formData, { headers })
      .then((response) => {
        const data = response.data;

        setSession(data.token);
        showToast("Success", "Signin Success", "success");

        setTimeout(() => {
          window.location.href = "/dashboard";
        }, 1000);
      })
      .catch((error) => {
        // showToast("Faild", "SignUp Failed", "error");
        console.error(error.response.data);
        let issues = error.response.data;
        console.log(typeof issues);
        if (typeof issues === "object") {
          showToast(
            "Faild",
            issues.issues[0].path[0] + " : " + issues.issues[0].message,
            "error"
          );
        } else {
          showToast("Faild", issues, "error");
        }
      });
  };
</script>

<div class="flex justify-center items-center my-32">
  <Card class="w-full max-w-lg bg-primary-3 ">
    <form
      class="flex flex-col space-y-6"
      on:submit|preventDefault={handleSubmit}
    >
      <h1 class=" font-medium text-white dark:text-white">
        Sign in to our platform
      </h1>
      <Label class="space-y-2">
        <p class="text-xl font-medium my-3 text-white">UserName</p>
        <Input
          class="text-xl"
          type="email"
          name="email"
          placeholder="name@gmail.com"
          bind:value={formData.email}
          required
        />
      </Label>
      <Label class="space-y-2">
        <p class="text-xl font-medium my-3 text-white">Password</p>

        <Input
          class="text-xl"
          type="password"
          name="password"
          placeholder="••••••"
          bind:value={formData.password}
          required
        />
      </Label>
      <div class="flex items-start">
        <Checkbox class="text-white">Remember me</Checkbox>
        <a
          href="/forgotpassword"
          class="ml-auto text-sm text-primary-1 hover:underline dark:text-primary-700"
        >
          Lost password?
        </a>
      </div>
      <Button type="submit" class="w-full text-xl bg-primary-1"
        >Signin to your account</Button
      >

      <div class="text-sm font-medium text-white dark:text-gray-300">
        Not registered? <a
          href="/"
          class="text-primary-1 hover:underline dark:text-primary-500"
        >
          Create account
        </a>
      </div>
    </form>
    <ToastContainer let:data>
      <FlatToast {data} />
    </ToastContainer>
  </Card>
</div>

<style>
</style>
