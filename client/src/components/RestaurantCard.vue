<template>
    <div class="col-md-6 col-lg-4 item location">
            <div class="box">
            <img class="rounded" src="#" alt="restaurant image">
            <h3 class="name"></h3>
            <p class="cuisine"></p>
            <p class="description"></p>
            <div class="mb-3">
                <button id="rest1" class="btn btn-primary d-block w-100" type="submit">Make Reservation</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RestaurantCard",
}
</script>

<style lang="scss" scoped>
@import "../styles/components/_restaurant-card.scss";
</style>