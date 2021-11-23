<template>
  <div class="pie-chart-container">
    <svg class="pie-chart" :width="width" :height="height"></svg>
  </div>
</template>

<script>
import * as d3 from "d3";
import api from "@/services/api";
var randomColor = require("randomcolor");

export default {
  name: "PieChart",
  props: {
    width: {
      type: Number,
      default: 500,
    },
    height: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      radius: this.height / 2,
      colorsArr: randomColor({
        count: 5,
        hue: "#1e2833",
      }),
    };
  },
  async mounted() {
    const dat = await api.getReservationData();
    const svg = d3.select(".pie-chart");
    const g = svg
      .append("g")
      .attr(
        "transform",
        "translate(" + this.width / 2 + "," + this.height / 2 + ")"
      );
    const ordScale = d3.scaleOrdinal().domain(dat).range(this.colorsArr);
    const pie = d3.pie().value(function (d) {
      return d.total;
    });
    const arc = g.selectAll("arc").data(pie(dat)).enter();
    const path = d3.arc().outerRadius(this.radius).innerRadius(50);
    arc
      .append("path")
      .attr("d", path)
      .attr("fill", function (d) {
        return ordScale(d.data.name);
      });
    const label = d3.arc().outerRadius(this.radius).innerRadius(40);
    arc
      .append("text")
      .attr("transform", function (d) {
        return "translate(" + label.centroid(d) + ")";
      })
      .text(function (d) {
        return d.data.name;
      })
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/components/_pie-chart.scss";
</style>
