<template>
  <form id="search-form">
    <fieldset>
      <legend id="form-title">Find a restaurant</legend>
    </fieldset>
    <div class="inner-form">
      <div class="input-field first-wrap">
        <div class="icon-wrap">
          <font-awesome-icon :icon="['fa', 'search']" />
        </div>
        <input
          class="form-control form-in"
          type="text"
          id="search"
          placeholder="Restaurant, Location or Cuisine"
        />
      </div>
      <div class="input-field second-wrap">
        <div class="icon-wrap">
          <!-- <font-awesome-icon :icon="['fa', 'calendar-alt']" /> -->
        </div>
        <input id="datepicker" class="form-control form-in" type="date" />
      </div>
      <div class="input-field third-wrap">
        <div class="icon-wrap">
          <font-awesome-icon :icon="['far', 'clock']" />
        </div>
        <input
          id="timepicker"
          class="form-control form-in"
          type="time"
          min="09:00"
          max="18:00"
          required
        />
      </div>
      <div class="input-field fourth-wrap">
        <div class="icon-wrap">
          <!-- <font-awesome-icon :icon="['fa', 'fa-user']" /> -->
        </div>
        <select id="numpeople" class="form-select form-in">
          <optgroup label="Number of People">
            <option value="1" selected="">1 person</option>
            <option value="2">2 people</option>
            <option value="3">3 people</option>
            <option value="4">4 people</option>
            <option value="5">5 people</option>
            <option value="6">6 people</option>
          </optgroup>
        </select>
      </div>
      <div class="input-field fifth-wrap">
        <UserBtn
          btn-style="btn btn-primary btn-search"
          btn-label="Go"
          action=""
          action-id=""
        />
      </div>
    </div>
  </form>
</template>

<script>
import UserBtn from "./UserBtn.vue";
export default {
  name: "SearchBar",
  components: {
    UserBtn,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/_search-bar.scss";
</style>
