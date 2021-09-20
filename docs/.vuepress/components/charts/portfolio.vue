<template>
  <div class="vuepress-chartjs">
    <canvas :id="id" ref="chartjs" height="400"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

Chart.defaults.maintainAspectRatio = false;
export default {
  name: "portfolio",
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

      for (let i = 0; i < 2; i += 0.5) {
        lables.push(i);
        a.push(i * 12.5);
      }


      const data = {
        labels: lables,
        datasets: [
          {
            label: "security market line",
            type: "line",
            data: a,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "portfolio perf since 1931",
            type: "scatter",
            data: [
              {x: 0.48, y: 8.2},
              {x: 0.63, y: 0.63*12.5*0.90-0.02},
              {x: 0.76, y: 0.76*12.5*0.96-0.01},
              {x: 0.84, y: 0.84*12.5*0.98-0.01},
              {x: 0.92, y: 0.92*12.5*0.98+0.01},
              {x: 1.06, y: 1.06*12.5*0.99},
              {x: 1.17, y: 1.17*12.5*0.99},
              {x: 1.24, y: 1.24*12.5*0.99},
              {x: 1.36, y: 0.97*12.5*1.36},
              {x: 1.53, y: 15.2}
            ],
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 1)",
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
              text: "Average risk premium %",
            },
          },
          x: {
            type: "linear",
            display: true,
            title: {
              display: true,
              text: "Portfolio Beta",
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