<template>
  <div class="row">
    <div class="col-md-8 offset-md-2 login-dark">
      <section class="register-photo">
        <div class="form-container">
          <div id="renderhere"></div>
          <form method="post" id="limit">
            <h2 class=""><strong>Finalise</strong> Reservation.</h2>
            <div class="mb-3">
              <label> Restaurant </label>
              <input
                class="form-control"
                type="text"
                name="restaurant"
                placeholder="Restaurant"
                readonly="readonly"
              />
            </div>
            <div class="mb-3">
              <label> Date </label>
              <input
                class="form-control"
                type="text"
                name="date"
                placeholder="Date"
                readonly="readonly"
              />
            </div>
            <div class="mb-3">
              <label> Time (Nearest Available) </label>
              <select
                id="numpeople"
                class="form-select form-control"
                name="time"
              >
                <optgroup id="options" label="Reservation Time"></optgroup>
              </select>
            </div>
            <div class="mb-3">
              <label> Guests </label>
              <input
                class="form-control"
                type="number"
                name="guests"
                placeholder="Guests"
                max="6"
                min="1"
              />
            </div>
            <div class="mb-3">
              <label> User ID </label>
              <input
                class="form-control"
                type="text"
                name="user"
                readonly="readonly"
                placeholder="User Name"
              />
            </div>
            <div class="mb-3">
              <label> Mobile </label>
              <input
                class="form-control"
                type="text"
                name="mobile"
                placeholder="Mobile Phone"
                required
              />
            </div>
            <div class="mb-3">
              <label> Special Requests </label>
              <input
                class="form-control"
                type="text"
                name="requests"
                placeholder="Special Requests"
              />
            </div>
            <div class="mb-3">
              <button
                id="confirm"
                class="btn btn-primary d-block w-100"
                type="submit"
              >
                Submit Reservation
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReservationForm",
};
</script>

<style lang="scss" scoped>
@import "../styles/components/_reservation-form.scss";
</style>
