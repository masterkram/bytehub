<template>
  <div class="vuepress-chartjs">
    <canvas :id="id" ref="chartjs" height="400"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

Chart.defaults.maintainAspectRatio = false;
export default {
  name: "capm",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {
    data() {
      let lables = [];
      let a = [];

      for (let i = 0; i < 3; i += 0.5) {
        lables.push(i);
        a.push(i * 7.2 + 5.5);
      }


      const data = {
        labels: lables,
        datasets: [
          {
            label: "r = beta * (rm - rf) + rf",
            data: a,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          }
        ],
      };
      return data;
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
            text: "The capital asset pricing model",
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
              text: "Beta",
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