<template>
  <div class="container login-cont">
    <UserForm />
  </div>
</template>

<script>
import { UserForm } from "@/components/UserForm.vue";

export default {
  name: "Login",
  components: {
    UserForm,
  },
};
</script>

<style></style>
