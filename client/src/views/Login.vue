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

<style lang="scss" scoped>
@import "../styles/views/_login.scss";
</style>

