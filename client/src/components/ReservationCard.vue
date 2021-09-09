<template>
  <div class="row places">
      <div>
          <div>
              <img src="" alt="">
              <h3></h3>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <p></p>
              <div class="update">
                  <UpdateIcon />
                  <UpdateIcon />
              </div>
              <div class="status">

              </div>
          </div>
      </div>
  </div>
</template>

<script>

import { UpdateIcon } from "@/components/UpdateIcon.vue";
export default {
    name:"ReservationCard",
    component: [
        UpdateIcon
    ]
}
</script>

<style lang="scss" scoped>
@import "../styles/components/_reservation-card.scss";
</style>