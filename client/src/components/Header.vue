<template>
  action-button
  <header class="header-dark">
    <nav class="navbar navbar-dark navbar-expand-lg navigation-clean-search">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img
            class="d-inline-block align-top"
            src="@/assets/drop.png"
            alt='""'
            width="45"
            height="40"
          />&nbsp; DropBearTable&nbsp;</a
        ><button
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
                ><font-awesome-icon :icon="['fa', 'search']" /></label
              ><input
                class="form-control search-field"
                type="search"
                id="search-field"
                name="search"
              />
            </div>
          </form>
          <div class="register-buttons">
            <span class="navbar-text"><a class="login" href="#">Log In</a></span
            ><UserBtn 
              btn-style="btn btn-light action-button"
              btn-label="Sign Up"
              action=""
              action-id=""
            />
          </div>
          <Modal
            modal-id="exampleModal"
            modal-label="Log Out"
            modal-question="Are you sure you want to log-off?"
            modal-instruction="Log Out"
            modal-btn-id="logout"
          />
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import UserBtn from "./UserBtn.vue";
import Modal from "./Modal.vue";
export default {
  name: "Header",
  components: {
    UserBtn,
    Modal,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/_header.scss";
</style>
