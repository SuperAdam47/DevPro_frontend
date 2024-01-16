<script>
  import { Card, Button, Label, Input, Checkbox } from "flowbite-svelte";
</script>

<div class="flex justify-center items-center my-32">
  <Card class="w-full max-w-xl bg-primary-3 ">
    <form class="flex flex-col space-y-6" action="/">
      <h1 class="text-white dark:text-white">Create an account</h1>
      <h2 class="text-xl text-grey-400 dark:text-gray-400">
        Ready to kickstart your journey? Create your account now and start
        connecting today.
      </h2>
      <Label class="space-y-2">
        <p class="text-xl font-medium my-2 text-white">UserName</p>
        <Input
          class="text-xl"
          type="email"
          name="email"
          placeholder="name@gmail.com"
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
          required
        />
      </Label>
      <div class="flex items-start">
        <Checkbox class="text-white"
          >I HAVE READ & AGREE TO THE TERMS OF SERVICE & PRIVACY POLICY</Checkbox
        >
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
  </Card>
</div>

<style>
</style>
