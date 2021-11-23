<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
    <Notification></Notification>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Notification from "@/components/Notification.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Notification,
  },
};
</script>

<style></style>
