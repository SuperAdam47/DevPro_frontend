<script>
  import { Card, Button, Label, Input, Checkbox } from "flowbite-svelte";
</script>

<div class="flex justify-center items-center mt-32">
  <Card class="w-full max-w-lg bg-primary-3 ">
    <form class="flex flex-col space-y-6" action="/">
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
          required
        />
      </Label>

      <div class="flex items-start">
        <Checkbox class="text-white"
          >I accept the Terms and Conditions
        </Checkbox>
      </div>
      <Button
        href="/dashboard"
        type="submit"
        class="w-full text-xl bg-primary-1">Reset Password</Button
      >
    </form>
  </Card>
</div>

<style>
</style>
