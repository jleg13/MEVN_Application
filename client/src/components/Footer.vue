<template>
  <footer class="footer-dark">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-3 item">
          <h3>Discover</h3>
          <ul class="info-sections">
            <li><a href="#">Restaurants near me</a></li>
            <li><a href="#"> All Restaurants </a></li>
            <li><a href="#">Cuisines near me</a></li>
            <li><a href="#">All cuisines</a></li>
            <li><a href="#">Pick for me!</a></li>
          </ul>
        </div>
        <div class="col-sm-6 col-md-3 item">
          <h3>About</h3>
          <ul class="info-sections">
            <li><a href="#">Company</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div class="col-md-6 item text">
          <h3>DropBearTable</h3>
          <p>
            At DropBearTable we believe food brings people together. Our mission
            is to make restaurant booking as simple as it can be to get you out
            enjoying food with the people you love. Feel like a night in? Why
            not check out our delivery app.
          </p>
        </div>
        <div class="col item social">
          <a href="#"><LogoFacebookIcon w="40px" h="40px" /></a>
          <a href="#"><LogoTwitterIcon w="40px" h="40px" /></a>
          <a href="#"><LogoSnapchatIcon w="40px" h="40px" /></a>
          <a href="#"><LogoInstagramIcon w="40px" h="40px" /></a>
        </div>
      </div>
      <p class="copyright">DropBearTable © 2021</p>
    </div>
  </footer>
</template>

<script>
import LogoFacebookIcon from "vue-ionicons/dist/logo-facebook.vue";
import LogoTwitterIcon from "vue-ionicons/dist/logo-twitter.vue";
import LogoSnapchatIcon from "vue-ionicons/dist/logo-snapchat.vue";
import LogoInstagramIcon from "vue-ionicons/dist/logo-instagram.vue";

export default {
  name: "Footer",
  components: {
    LogoFacebookIcon,
    LogoTwitterIcon,
    LogoSnapchatIcon,
    LogoInstagramIcon,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/components/_footer.scss";
</style>
