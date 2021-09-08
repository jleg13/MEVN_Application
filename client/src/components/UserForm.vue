<template>
  <div class="row">
    <div class="col-md-8 offset-md-2 login-dark">
      <form id="login-form" method="post">
        <h2 class="visually-hidden">Login Form</h2>
        <div class="illustration">
          <i class="icon ion-ios-locked-outline"></i>
        </div>
        <div class="mb-3">
          <input
            class="form-control"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div class="mb-3">
          <input
            class="form-control"
            type="password"
            name="password"
            placeholder="Password"
            minlength="8"
            required
          />
        </div>
        <div class="mb-3">
          <button
            id="login"
            class="btn btn-primary d-block w-100"
            type="submit"
          >
            Log In
          </button>
        </div>
        <a class="forgot" href="signup.html"
          >Don't have an account? Sign up here.</a
        >
        <div id="error-msg" class="hidden">
          <p>Invalid email/password combination</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserForm",
};
</script>

<style></style>
