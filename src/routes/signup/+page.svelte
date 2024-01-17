<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import { Card, Button, Label, Input, Checkbox } from "flowbite-svelte";
  import { ToastContainer, FlatToast } from "svelte-toasts";

  import { BASE_URL } from "../../utils/constants";
  import { isAuthenticated } from "../../utils/auth";
  import { showToast } from "../../utils/toast";

  onMount(() => {
    if (isAuthenticated()) {
      location.href = "/dashboard";
    }
  });

  const formData = {
    name: "",
    email: "",
    password: "",
  };

  let isAgreed = false;
  let confirmPassword = "";
  const headers = {
    "Content-Type": "application/json",
  };

  const handleChangeAgreed = () => {
    isAgreed = !isAgreed;
    console.log(isAgreed);
  };

  const handleSubmit = () => {
    if (formData.password !== confirmPassword) {
      showToast("Warning", "Passwords must Match", "warning");
    } else if (!isAgreed) {
      showToast(
        "Warning",
        "Please accept the Terms of Service & Privacy Policy",
        "warning"
      );
    } else {
      console.log(formData);
      axios
        .post(`${BASE_URL}/user/register`, formData, { headers })
        .then((response) => {
          console.log(response);
          const data = response.data;
          localStorage.setItem("userID", data.user);
          showToast("Success", "SignUp Success", "success");
          setTimeout(() => {
            window.location.href = "/signin";
          }, 1000);
        })
        .catch((error) => {
          // showToast("Faild", "SignUp Failed", "error");
          console.error(error.response.data);
          let issues = error.response.data;
          console.log(Object.keys(issues));
          if (Object.keys(issues).length > 1) {
            showToast(
              "Faild",
              issues.issues[0].path[0] + " : " + issues.issues[0].message,
              "error"
            );
          } else {
            showToast("Faild", issues.msg, "error");
          }
        });
    }
  };
</script>

<div class="flex justify-center items-center my-32">
  <Card class="w-full max-w-xl bg-primary-3 ">
    <form
      class="flex flex-col space-y-6"
      on:submit|preventDefault={handleSubmit}
    >
      <h1 class="text-white dark:text-white">Create an account</h1>
      <h2 class="text-xl text-grey-400 dark:text-gray-400">
        Ready to kickstart your journey? Create your account now and start
        connecting today.
      </h2>
      <Label class="space-y-2">
        <p class="text-xl font-medium my-2 text-white">User Name</p>
        <Input
          class="text-xl"
          type="text"
          name="name"
          bind:value={formData.name}
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
          bind:value={formData.email}
          required
        />
      </Label>
      <Label class="space-y-2">
        <p class="text-xl font-medium my-2 text-white">Password</p>
        <Input
          class="text-xl"
          type="password"
          name="password"
          placeholder="••••••"
          bind:value={formData.password}
          required
        />
      </Label>
      <Label class="space-y-2">
        <p class="text-xl font-medium my-2 text-white">Confirm Password</p>
        <Input
          class="text-xl"
          type="password"
          name="password"
          placeholder="••••••"
          bind:value={confirmPassword}
          required
        />
      </Label>
      <div class="flex items-start">
        <Checkbox class="text-white" on:change={handleChangeAgreed}>
          I HAVE READ & AGREE TO THE TERMS OF SERVICE & PRIVACY POLICY
        </Checkbox>
      </div>
      <Button type="submit" class="w-full text-xl bg-primary-1"
        >Create an account</Button
      >
      <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        Already registered? <a
          href="/"
          class="text-primary-1 hover:underline dark:text-primary-500"
        >
          Please Sign in
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
