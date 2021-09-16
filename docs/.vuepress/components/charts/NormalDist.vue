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
  name: "NormalDist",
  props: {
    id: {
      type: String,
      required: true,
    }
  },
  methods: {
    data() {
      const a = this.getNormal(1, 2.25);
      const b = this.getNormal(1, 0.75*0.75);
      const c = this.getNormal(2, 0.75*0.75);

      const data = {
        labels: this.getLabels(),
        datasets: [
          {
            label: "Portfolio A (mean=10;std=1.5)",
            data: a,
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
          {
            label: "Portfolio B (mean=10;std=0.75)",
            data: b,
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.5)",
          },
          {
            label: "Portfolio C (mean=20;std=0.75)",
            data: c,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.5)",
          },
        ],
      };
      return data;
    },
    getLabels() {
      let labels = [];

      for (let i = -7; i <= 7; i++) {
        labels.push(i);
      }
      return labels;
    },
    getNormal(mean, vari) {
      let distribution = gaussian(mean, vari);
      const values = [];
      for (let i = -7; i <= 7; i+=1) {
        values.push(distribution.pdf(i));
      }

      return values;
    }
  },
  mounted() {
    const data = this.data();
    const config = {
      type: "line",
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Portfolio Risk vs Return",
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 1,
            title: {
              display: true,
              text: "Probability"
            }
          },
          x: {
            title: {
              display: true,
              text: "Revenue"
            }
          }
        }
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