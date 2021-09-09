<template>
  <div class="container">
    <UserForm />
  </div>
</template>

<script>
import { UserForm } from "@/components/UserForm.vue";

export default {
  name: "Signup",
  components: {
    UserForm,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/views/_signup.scss";
</style>

