<template>
  <form id="search-form">
    <fieldset>
      <legend id="form-title">Find a restaurant</legend>
    </fieldset>
    <div class="inner-form">
      <div class="input-field first-wrap">
        <div class="icon-wrap">
          <i class="fa fa-search"></i>
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
          <i class="fas fa-calendar-alt"></i>
        </div>
        <input id="datepicker" class="form-control form-in" type="date" />
      </div>
      <div class="input-field third-wrap">
        <div class="icon-wrap">
          <i class="fas fa-clock"></i>
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
          <i class="fa fa-user"></i>
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
        <router-link
          @click="scrollToTop"
          to="Restaurants"
          id="submit-btn"
          class="btn btn-primary btn-search"
          role="button"
          href="#"
          >Go</router-link
        >
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 150);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/_search-bar.scss";
</style>
