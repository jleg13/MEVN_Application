<template>
  <header class="header-dark">
    <nav class="navbar navbar-dark navbar-expand-lg navigation-clean-search">
      <div class="container">
        <router-link :to="{ name: 'Home' }" class="navbar-brand"
          ><img
            class="d-inline-block align-top"
            src="@/assets/drop.png"
            alt='""'
            width="45"
            height="40"
          />&nbsp; DropBearTable&nbsp;</router-link
        >
        <button
          data-bs-toggle="collapse"
          class="navbar-toggler"
          data-bs-target="#navcol-1"
        >
          <span class="visually-hidden">Toggle navigation</span
          ><span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navcol-1">
          <ul id="myreservations-link" class="navbar-nav"></ul>
          <form id="nav-search" class="me-auto" target="_self">
            <div class="d-flex align-items-center">
              <label class="form-label d-flex mb-0" for="search-field"
                ><i class="fa fa-search"></i> </label
              ><input
                class="form-control search-field"
                type="search"
                id="search-field"
                name="search"
              />
            </div>
          </form>
          <div class="register-buttons">
            <router-link
              @click="scrollToTop"
              to="Reservations"
              class="btn btn-light action-button"
              role="button"
              href="#"
              >My Reservations</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/_header.scss";
</style>
