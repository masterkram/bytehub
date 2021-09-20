<template>
  <div class="vuepress-chartjs">
    <canvas :id="id" ref="chartjs" height="400"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import gaussian from "gaussian";

Chart.defaults.maintainAspectRatio = false;
export default {
  name: "EfficientPortfolios",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    data() {
      const a = this.getNormal();

      const data = {
        labels: this.getLabels(),
        datasets: [
          {
            label: "Efficeient Portfolios",
            data: a,
            pointRadius: 0,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "tangent line",
            data: [
              {x: 0, y: 5},
              {x: 10, y: 13},
              {x: 30, y: 30*0.8 + 5}
            ],
            pointRadius: 0,
            borderColor: "rgba(0, 0, 0, 1)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderWidth: 1,
          },
        ],
      };
      return data;
    },
    getLabels() {
      let labels = [];

      for (let i = 0; i <= 50; i += 10) {
        labels.push(i);
      }
      return labels;
    },
    getNormal() {
      const values = [];
      values.push({ x: 9.2, y: null });
      values.push({ x: 9.3, y: 10.7 });
      values.push({ x: 10, y: 13 });
      values.push({ x: 12.1, y: 14.0 });
      values.push({ x: 45, y: 18.1 });

      return values;
    },
  },
  mounted() {
    const data = this.data();
    const config = {
      type: "line",
      data: data,
      options: {
        responsive: true,
        pointStyle: {
          pointRadius: 0,
        },
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Investment Risk vs Return",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Expected return %",
            },
          },
          x: {
            type: "linear",
            display: true,
            title: {
              display: true,
              text: "Standard deviation %",
            },
            scaleLabel: {
              display: true, // mandatory
              labelString: "Your label", // optional
            },
          },
        },
      },
    };
    const ctx = this.$refs.chartjs.getContext("2d");
    new Chart(ctx, config);
  },
};
</script>

<style lang="stylus">
.vuepress-chartjs {
  margin: 30px 0;
}
</style>