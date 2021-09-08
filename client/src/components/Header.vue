<template>
  <header class="header-dark">
    <nav class="navbar navbar-dark navbar-expand-lg navigation-clean-search">
      <div class="container">
        <a class="navbar-brand" href="index.html"
          ><img
            class="d-inline-block align-top"
            src="img/drop.png"
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
                ><i class="fa fa-search"></i></label
              ><input
                class="form-control search-field"
                type="search"
                id="search-field"
                name="search"
              />
            </div>
          </form>

          <div class="register-buttons hidden">
            <p class="navbar-text"><span id="usr-welcome"></span></p>
            <button
              type="button"
              class="btn btn-light action-button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Log Out
            </button>
          </div>
          <div class="register-buttons">
            <span class="navbar-text"
              ><a class="login" href="login.html">Log In</a></span
            ><a
              class="btn btn-light action-button"
              role="button"
              href="signup.html"
              >Sign Up</a
            >
          </div>
          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h4>Logout <i class="fa fa-lock"></i></h4>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <i class="fa fa-question-circle"></i> Are you sure you want to
                  log-off?
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" id="logout" class="btn btn-primary">
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style></style>
