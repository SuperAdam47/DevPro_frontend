<script>
  import { Card, Button, Label, Input, Checkbox } from "flowbite-svelte";
</script>

<div class="flex justify-center items-center my-32">
  <Card class="w-full max-w-lg bg-primary-3 ">
    <form class="flex flex-col space-y-6" action="/">
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
      <Button
        href="/dashboard"
        type="submit"
        class="w-full text-xl bg-primary-1">Login to your account</Button
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
  </Card>
</div>

<style>
</style>
